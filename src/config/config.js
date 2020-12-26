const type = "dev"

const url = {
  prod: {
    apiURL: "",
  },
  dev: {
    apiURL: "",
  },
}
module.exports = {
  API_URL: url[type].apiURL,
}
