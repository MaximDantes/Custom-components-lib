import webpack from 'webpack'
import { BuildOptions } from './types'

const buildResolvers = (options: BuildOptions): webpack.Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],

        alias: {
            '@': options.paths.src,
        },
    }
}

export default buildResolvers
