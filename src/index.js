import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TelaLogin from './routes/TelaLogin';
import TelaCadastro from './routes/TelaCadastro';
import TelaLogada, {TelaRestrita} from './routes/TelaLogada';
import TelaHome from './routes/TelaHome';
import TelaContaIndividual from './routes/TelaContaIndividual';
import TelaRecuperacao from './routes/TelaRecuperacao';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"",
        element: <TelaHome/>
      },
      {
        path:"cadastro",
        element: <TelaCadastro/>
      },
      {
        path:"login",
        element: <TelaLogin/>
      },
      {
        path:"recuperacao",
        element: <TelaRecuperacao/>
      }
    ]
  },
  {
    path:"contas",
    element: <TelaLogada/>,
    children:[
      {
        path:"",
        element: <TelaRestrita/>
      },
      {
        path:":idConta",
        element: <TelaContaIndividual/>
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

