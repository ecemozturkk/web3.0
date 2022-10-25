//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;
contract Transactions {
    uint256 transactionCount;
    event Transfer(address from, address receiver,uint amount, string message, uint256 timeStamp, string keyword); //event to be emitted when a transaction is made

    struct TransferStruct { //struct to store the details of a transaction..
        address from;
        address receiver;
        uint amount;
        string message;
        uint256 timeStamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain (address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword)); //add a new transaction to the blockchain

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword); //emit the event

    }
     function getAllTransactions () public view returns(TransferStruct[] memory) { 
        return transactions;
        
    }
     function getTransactionCount () public view returns (uint256) {
        return transactionCount;
   }
}