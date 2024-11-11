import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Store from "./store/store";
import './main.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

interface State {
    store: Store;
}

const store = new Store();

export const Context = createContext<State>({
    store,
});

root.render(
    <Context.Provider value={{ store }}>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </Context.Provider>
);
