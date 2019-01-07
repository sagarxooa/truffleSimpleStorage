module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "1000", // Match any network id
      gas: 3088608  // set it properly according to network
    }
  }
};
