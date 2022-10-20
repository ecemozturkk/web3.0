import React , {useState, useEffect} from 'react';
import {ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

   return transactionContract; /////
};

export const TransactionProvider = ({ children}) => { 

    const [currentAccount, setCurrentAccount] = useState(""); //////////////

    const [formData, setFormData] = useState({addressTo: "", amount: "", keyword: "", message: ""});

    const handleChange = (e, name) => { //all handleChange functions will interact with the form data inputs, except the (e) key event
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    }

    const checkIfWalletIsConnected = async () => {

        try {
            if(!ethereum) return alert('Please install MetaMask first');

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if(accounts.length){ //her renderda hesaba bağlanacak
            setCurrentAccount(accounts[0]);
            //getAllTransactions();
            }else {
            console.log(error);
            throw new Error('No ethereum object');
            }
        }

        //consolelog(a.ccounts);

        catch(error) {console.log(error)}
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });

            setCurrentAccount(accounts[0]);
            window.location.reload(); /////////////////
        }
        catch(error) {
            console.log(error);
            throw new Error( "Error connecting wallet");
        }
    };

    const sendTransaction = async () => {
        try {
            if(ethereum){
                const {addressTo, amount, keyword, message} = formData;
                getEthereumContract();
            }
            // if(!ethereum) return alert ('Please install MetaMask first');
            // console.log(formData)
            // //Welcome.jsx'deki formlardan input giriş bilgilerinin alınması
            // const {addressTo, amount, keyword, message} = formData; //access to form data variables
            // getEthereumContract();

        }
        catch(error) {
            console.log(error);
            //throw new Error("Couldnt send transaction : No ethereum object.");
        }
    };

    useEffect (() => {
        checkIfWalletIsConnected();
    }, []);

    return(
        <TransactionContext.Provider value= {{connectWallet, currentAccount, formData, handleChange, sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
};