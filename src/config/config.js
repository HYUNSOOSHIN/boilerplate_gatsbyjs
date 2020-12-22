const type = 'dev';

const url = {
    prod: {},
    dev: {
        apiURL: 'https://api.tramsvolunteer.tk/volunteer',
    },
};
module.exports = {
    API_URL: url[type].apiURL,
};
