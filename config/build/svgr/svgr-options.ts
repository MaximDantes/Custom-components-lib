const svgrOptions = {
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
}

export default svgrOptions
