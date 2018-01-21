const smartgrid = require('smart-grid');

const settings = {
    filename: '_smart-grid',
    columns: 12,
    outputStyle: 'scss',
    offset: '30px',
    container: {
        maxWidth: '1200px',
        fields: '30px',
    },
    breakPoints: {
        lg: {
            width: '1295px',
            fields: '30px'
        },
        md: {
            width: '960px',
            fields: '20px'
        },
        sm: {
            width: '781px',
            fields: '15px',
        },
        s: {
            width: '560px',
            fields: '15px'
        },
        xs: {
            width: '420px',
            fields: '15px'
        }
    },
    properties: [],
    oldSizeStyle: false
};

smartgrid('./app/styles', settings);