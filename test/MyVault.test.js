const { expect } = require("chai");

describe("MyVault", function() {
    describe("constructor", function() {
        // constructor should populate these fields
        // weeklyAmount
        // address
        // lastDCA
        // Token1Address
        // Token2Address
        it('should create contract with the approprate fields', () => {

        })
    })

    describe("isOwner", function() {
        // isOwner should check the ERC-721 contract to see if the current owner of this vault is msg.sender
        it("should check that msg.sender is owner of the vault", () => {

        })
    })

    describe("depositToken1", function() {
        // owner should be able to deposit ERC20 Token-1
        it("owner should be able to deposit Token1s", () => {

        })
        // owner should not be able to deposit more ERC20 Token-1 than they have
        it("owner should not be able to deposit more Token1s than they have", () => {

        })
        // non-owner should not be able to deposit ERC20 Token-1
        it("non-owner should not be able to deposit Token1s", () => {

        })
    })

    describe("withdrawToken1", function() {
        // owner should be able to withdraw full balance of ERC20 Token-1
        it("owner should be able to withdraw the full balance of Token1s", () => {

        })

        // owner should be able to withdraw lower balance of ERC20 Token-1
        it("owner should be able to withdraw lower balance of Token1s", () => {

        })

        // owner should not be able to withdraw more than balance of ERC-20 Token-1
        it("owner should not be able to withdraw more than balance of Token1s", () => {

        })
        
        // non-owner should not be able to withdraw any amount of ERC20 Token-1
        it("non-owner should not be able to withdraw any amount of Token1s", () => {

        })
    })

    describe("withdrawToken2", function() {
        // owner should be able to withdraw full balance of ERC20 Token-2
        it("owner should be able to withdraw the full balance of Token2s", () => {

        })

        // owner should be able to withdraw lower balance of ERC20 Token-2
        it("owner should be able to withdraw lower balance of Token2s", () => {

        })

        // owner should not be able to withdraw more than balance of ERC-20 Token-2
        it("owner should not be able to withdraw more than balance of Token2s", () => {

        })
        
        // non-owner should not be able to withdraw any amount of ERC20 Token-2
        it("non-owner should not be able to withdraw any amount of Token2s", () => {

        })
    })

    describe("dcaNow", function() {
        // dca should not be possible if lastDCA is more recent than 1 week ago, lastDCA should not be updated
        it("dca should revert if lastDCA is more recent than 1 week ago", () => {

        })
        // dca should not be possible if the balance of ERC20-1 is lower than weeklyAmount, lastDCA should not be updated
        it("dca should revert if the balance of Token1 is lower than weeklyAmount", () => {

        })
        // any user should be able to call dca if lastDCA is longer than 1 week ago, and ERC20-1 balance is greater than weeklyAmount
        it("dca should be callable by any account", () => {
            // // lastDCA should be updated
            // // amount of ERC-20-1 should be reduced by weeklyAmount
            // // amount of ERC-20-2 should be increased by weeklyAmount*(token1Price/token2Price)
        })
    })
}