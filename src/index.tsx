import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// @ts-ignore
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          amaunt: 400,
          type: "deposit",
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
