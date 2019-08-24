module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8400,
      network_id: "*"
    }
    // ,
    // azureNet: {
    //   host: "40.117.73.74",
    //   port: 8400,
    //   network_id: "10101010"
    //   // gas: 99999999,
    //   // gasPrice: 10000000000  // Match any network id
    // }, 
    // awsNet: {
    //   host: "ec2-13-233-183-227.ap-south-1.compute.amazonaws.com",
    //   port: 8400,
    //   network_id: "10101010" // Match any network id
    // }
  }
};
