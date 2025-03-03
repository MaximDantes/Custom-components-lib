import webpack, { DefinePlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const buildPlugins = (options: BuildOptions): webpack.Configuration['plugins'] => {
    const isDev = options.mode === 'development'

    const plugins: webpack.Configuration['plugins'] = [
        new MiniCssExtractPlugin({
            filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash].css',
            chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[contenthash].css',
        }),

        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
        }),
    ]

    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin())
    }

    if (options.mode === 'development') {
        plugins.push(new webpack.SourceMapDevToolPlugin({}))

        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return plugins
}

export default buildPlugins
