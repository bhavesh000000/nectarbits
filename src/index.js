import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import Suspenseloader from './Components/Loaders/Suspenseloader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Suspense fallback={<Suspenseloader />}>
            <App />
        </Suspense>
    </BrowserRouter>
);

