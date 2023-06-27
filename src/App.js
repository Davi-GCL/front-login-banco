import React from "react";
import {useEffect, useState} from "react";
import './App.css';

import CardCadastro from './comps/CardCadastro';


function App() {

  const [alerta,setAlerta] = useState([]);

  return (
    <div className="container w-100">
      <div className='row justify-content-center'>
        {alerta.map((aux)=>{return aux})}
        <CardCadastro alerta={alerta} setAlerta={setAlerta}/>
      </div>
    </div>
  );
}

export default App;
