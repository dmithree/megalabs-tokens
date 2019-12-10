module.exports = [
    {
        name: 'Color',
        description: 'Megafon Bank Colors',
        tokens: [
            {
                id: 'green',
                platforms: {
                    ios: {
                        name: 'green',
                        description: 'Green #00B956',
                        value:
                            'UIColor = UIColor(red: 0, green: 0.725, blue: 0.337, alpha: 1)',
                    },
                    android: {
                        name: 'mfb_green',
                        value: '#00B956',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'green-glow',
                platforms: {
                    ios: {
                        name: 'greenglow',
                        description: 'Green Glow #00D463',
                        value:
                            'UIColor(red: 0, green: 0.831, blue: 0.388, alpha: 1)',
                    },
                    android: {
                        name: 'mfb_greenglow',
                        value: '#00D463',
                    },
                },
                format: 'color',
                type: 'string',
            },
            {
                id: 'green-dark',
                platforms: {
                    ios: {
                        name: 'greendark',
                        description: 'Green Dark #00A14B',
                        value:
                            'UIColor(red: 0, green: 0.631, blue: 0.294, alpha: 1)',
                    },
                    android: {
                        name: 'mfb_greendark',
                        value: '#00A14B',
                    },
                },
                format: 'color',
                type: 'string',
            },
        ],
    },
];