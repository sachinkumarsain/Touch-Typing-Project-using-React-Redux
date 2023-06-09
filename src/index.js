import React from 'react';
import ReactDOM from 'react-dom/client';
import Store from './TouchTyping/Store';
import First from './TouchTyping/First';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={Store}>
    <First/>
 </Provider>
);

