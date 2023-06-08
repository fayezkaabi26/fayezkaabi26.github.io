import React from "react";
import reactDom from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from "./context";
import App from "./App";
import './index.css';

const root = reactDom.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={Sepolia}>
        <Router>
            <StateContextProvider>
                <App>
                    
                </App>
            </StateContextProvider>    
        </Router>
    </ThirdwebProvider>
)