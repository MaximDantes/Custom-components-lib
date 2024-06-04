import webpack from 'webpack'
import buildDevServer from './build-dev-server'
import buildLoaders from './build-loaders'
import buildPlugins from './build-plugins'
import buildResolvers from './build-resolvers'
import { BuildOptions } from './types'

const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    return {
        entry: options.paths.entry,

        output: {
            path: options.paths.output,
            filename: '[name].[hash].js',
            clean: true,
        },

        mode: options.mode,

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options),
        },

        resolve: buildResolvers(options),

        devtool: options.mode === 'development' ? 'eval-source-map' : false,

        devServer: buildDevServer(options),
    }
}

export default buildWebpack
