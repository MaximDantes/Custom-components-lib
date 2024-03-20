import { BuildOptions } from '../types'
import removeDataTestIdPlugin from './remove-data-test-id-plugin'

const buildBabelLoader = (options: BuildOptions) => {
    const isDev = options.mode === 'development'

    const plugins = []

    if (!isDev) {
        plugins.push([removeDataTestIdPlugin, { props: ['data-testid'] }])
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: { node: 'current' } }],
                    ['@babel/preset-react', { runtime: isDev ? 'automatic' : 'classic' }],
                    '@babel/preset-typescript',
                ],
                plugins: plugins,
            },
        },
    }
}

export default buildBabelLoader
