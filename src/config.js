const type = "dev"

const URL = {
  prod: {
    API_URL: "prod_api_url",
  },
  dev: {
    API_URL: "dev_api_url",
  },
}

module.exports = {
  API_URL: process.env.API_URL || URL[type].API_URL,
}
