import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TelaLogin from './routes/TelaLogin';
import TelaCadastro from './routes/TelaCadastro';
import TelaRestrita from './routes/TelaRestrita';
import TelaHome from './routes/TelaHome';
import TelaContaIndividual from './routes/TelaContaIndividual';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"home",
        element: <TelaHome/>
      },
      {
        path:"contas",
        element: <TelaRestrita/>
      },
      {
        path:"contas/:idConta/:idUsuario",
        element: <TelaContaIndividual/>
      },
      {
        path:"cadastro",
        element: <TelaCadastro/>
      },
      {
        path:"login",
        element: <TelaLogin/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

