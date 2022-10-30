import React from 'react';
import ReactDOM from 'react-dom/client';
import AppSearch from "./AppSearch";
import './firebase'
import {store} from "./reduxToolkit";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
            <AppSearch/>
        </Provider>

);
