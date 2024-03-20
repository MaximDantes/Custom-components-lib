import path from 'path'
import buildWebpack from './config/build/build-webpack'
import { BuildMode, BuildPlatform } from './config/build/types'

type EnvVariables = {
    mode: BuildMode
    port: number
    analyzer: boolean
    platform: BuildPlatform
}

export default (env: EnvVariables) => {
    return buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'dist'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
            public: path.resolve(__dirname, 'public'),
        },
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop',
    })
}
