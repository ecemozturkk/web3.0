// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount; //transactionların sayısını tutar

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword); //transfer eventi
  
    struct TransferStruct { //struct obje tanımlamaya benzer
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions; // transactions değişkenimiz TransferStruct'ın bir array'i olacak 

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public { // contract, sınıf yapısına benzediği için; içinde bir fonksiyon yazıldığında görünürlüğünün de (public vs) belirtilmesi gerekir.
        transactionCount += 1; // her yeni transfer için transactionCount'ı 1 arttırır
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword)); // yeni transfer için struct objesi oluşturur ve transactions array'ine ekler

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);// transfer eventini tetikler
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
