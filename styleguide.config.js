module.exports = {
    defaultExample: 'DefaultExample.md',
    sections: [
        {
            name: "Common",
            components: 'src/common/components/**/*.js'
        },
        {
            name: "Pages",
            sections: [
                {
                    name: "Game",
                    components: 'src/pages/game/components/**/*.js'
                }
            ]
        }
    ]
};
