// import React from 'react'
// import ReactDOM from 'react-dom/client' ///////
// import App from './App'
// import './index.css'
// import { TransactionProvider } from './context/TransactionContext'

// import reportWebVitals from "./reportWebVitals" /////

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <TransactionProvider>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </TransactionProvider>,
// )
  
// reportWebVitals();


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { TransactionProvider } from './context/TransactionContext'

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <TransactionProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </TransactionProvider>
);

