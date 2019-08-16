module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    azureNet: {
      host: "ethqx3k4a-dns-reg1.eastus.cloudapp.azure.com",
      port: 8540,
      network_id: "10101010" // Match any network id
    }
  }
};
