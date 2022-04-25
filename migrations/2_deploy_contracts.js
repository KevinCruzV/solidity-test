var HelloBlockchain = artifacts.require("HelloBlockchain");
var Arg = "Hello world";
module.exports = deployer => {
    deployer.deploy(HelloBlockchain, Arg);
};


const Shipping = artifacts.require("Shipping");
module.exports = function (deployer) {
  deployer.deploy(Shipping);
};


const Wallet = artifacts.require("Wallet");
module.exports = function (deployer) {
  deployer.deploy(Wallet);
};