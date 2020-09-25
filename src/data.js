export const machineProgressData = [
    {
        stage: 'Vormontage',
        engines: [
            {
                imageUrl: "/backhusA75.jpg",
                name: "Backhus A75",
                serialNumber: "34324325",
                status: "In Bearbeitung",
                progress: {
                    preAssembly: 50,
                    finalAssembly: 0,
                    commissioning: 0
                }
            }
        ]
    },
    {
        stage: 'Endmontage',
        engines: [
            {
                imageUrl: "/backhusA75.jpg",
                name: "Backhus A75",
                serialNumber: "3435345",
                status: "In Bearbeitung",
                progress: {
                    preAssembly: 100,
                    finalAssembly: 50,
                    commissioning: 0
                }
            },
            {
                imageUrl: "/teutonZ55.jpg",
                name: "Teuton Z 65",
                serialNumber: "35324654",
                status: "In Bearbeitung",
                progress: {
                    preAssembly: 100,
                    finalAssembly: 75,
                    commissioning: 0
                }
            },
            {
                imageUrl: "/teutonZ55.jpg",
                name: "Teuton Z 65",
                serialNumber: "5635464",
                status: "In Bearbeitung",
                progress: {
                    preAssembly: 100,
                    finalAssembly: 99,
                    commissioning: 0
                }
            }
        ]
    },
    {
        stage: 'Inbetriebnahme',
        engines: [
            {
                imageUrl: "/backhusA75.jpg",
                name: "Backhus A75",
                serialNumber: "74564352",
                status: "In Bearbeitung",
                progress: {
                    preAssembly: 100,
                    finalAssembly: 100,
                    commissioning: 25
                }
            },
            {
                imageUrl: "/teutonZ55.jpg",
                name: "Teuton Z 65",
                serialNumber: "5534534",
                status: "In Bearbeitung",
                progress: {
                    preAssembly: 100,
                    finalAssembly: 100,
                    commissioning: 99
                }
            }
        ]
    }
]