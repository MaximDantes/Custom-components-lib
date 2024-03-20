import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import buildBabelLoader from './babel/build-babel-loader'

const buildLoaders = (options: BuildOptions): webpack.ModuleOptions['rules'] => {
    const isDev = options.mode === 'development'

    //TODO remove ts loader
    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                },
            },
        ],
    }

    const babelLoader = buildBabelLoader(options)

    //TODO throw ts error when class name is invalid
    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[local]-[hash:base64:8]' : '[hash:base64:8]',
            },
        },
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, cssLoader, 'sass-loader'],
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    typescript: true,
                    ext: 'tsx',
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    }

    return [babelLoader, tsLoader, sassLoader, assetsLoader, svgLoader]
}

export default buildLoaders
