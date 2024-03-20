import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types'

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    return options.mode === 'development'
        ? {
              port: options.port ?? 3000,
              historyApiFallback: true,
              hot: true,
          }
        : undefined
}

export default buildDevServer
