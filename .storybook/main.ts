import { StorybookConfig } from '@storybook/react-webpack5'
import svgrOptions from '../config/build/svgr/svgr-options'
import path from 'path'

//@ts-ignore
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    webpackFinal: (config) => {
        //@ts-ignore
        const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))

        //@ts-ignore
        fileLoaderRule.test = /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/

        config.module.rules.push({
            test: /\.svg$/,
            enforce: 'pre',
            loader: '@svgr/webpack',
            options: svgrOptions,
        })

        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'),
        }

        return config
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
}
export default config
