import React, { useState, useEffect, createContext, useRef, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { LoggedNavBar } from '../comps/NavBar';
import CardConta from '../comps/CardConta';
import useLocalStorage from '../useLocalStorage';


export const ContaContext = createContext(); 

export default function TelaLogada() {
  const [censor, setCensor] = useState(true); //Estado que comanda se os valores serão exibidos ou ocultos
  const [loginInfo, setLoginInfo] = useLocalStorage('loginInfo','')


  return (
    <React.Fragment>
      <ContaContext.Provider value={{censor, setCensor,loginInfo,setLoginInfo}}>
      <LoggedNavBar/>
      <div className="container w-100">
        <div className='row mt-5 justify-content-center'>
          <Outlet />
        </div>
      </div>
      </ContaContext.Provider>
    </React.Fragment>
  )
}

export function TelaRestrita() {
  const {censor, setCensor, loginInfo, setLoginInfo} = useContext(ContaContext);
  const id = localStorage.getItem('loginId');
  const token = localStorage.getItem('token');
  const dono = useRef('');
  const navigate = useNavigate();

  const [contas,setContas] = useState([{
    codConta: 0,
    agencia: '',
    saldo: 0,
    tipo: 0,
    idUsuario: 0
  }])
  
  async function fetchData(){
    let res = await fetch(`https://localhost:7044/Usuario/GetById/${id}`,{
      method: 'GET',
      headers: {'Authorization': `Bearer ${token}`}
    });
    let data = await res.json();
    console.log(data);

    let resC = await fetch(`https://localhost:7044/Conta/GetByUserId/${id}`,{
      method: 'GET',
      headers: {'Authorization': `Bearer ${token}`}
    });
    let dataC = await resC.json();
    console.log(dataC);

    


    setLoginInfo(data.Nome);
    navigate(`/contas/${dataC[0].CodConta}`)
  }

  useEffect(()=>{
    fetchData();
  },[])

/*
  async function handleGet(){
    let res = await fetch(`https://localhost:7044/Conta/`, {
      method: 'GET',
      headers: {'Authorization': `Bearer ${token}`}
    })
    let data = await res.json()
    
    console.log(data);
    
    let dataArr = [];
    let username, auxNum;
    data.forEach(e => {
      if(e.idUsuario == id){
        dataArr.push({['codConta']:e.codConta, ['agencia']:e.agencia,['saldo']:e.saldo , ['tipo']:e.tipo , ['idUsuario']:e.idUsuario});
        auxNum = e.codConta;
      }  
    });
    // localStorage.setItem("username", username);
    setLoginInfo(username);
    setContas(dataArr);
    return {username, auxNum};
  }

  //Algoritmo para que faz a função de buscar dados na api só seja executada uma vez:
  useEffect(() => {
    var aux = [];
    var shortName = '';
    handleGet().then((res)=>{
      //Algoritmo para abreviar o nome do usuario para exibicao
      aux = res.username.split(' ');
      var aux2 = aux.map((e,index)=>{
        //Filtra os artigos('do', 'da') do nome
        if(e.length > 2){
          //Se nao for a primeira palavra ou a penultima
          if(index >= 1 && index < aux.length-1){
            return e.slice(0,1).toUpperCase();
          }else{
            return e; //se for o primeiro nome ou o 
          }
        }else{return ' '}
      });
      aux2.forEach((a)=>{
        shortName += a+' ';
      })

      setLoginInfo(shortName);
      navigate(`/contas/${res.auxNum}`)
    });

  }, []); // A lista de dependências vazia indica que o efeito será executado apenas uma vez, após a montagem do componente.
*/
  if(id){
    return (
      <React.Fragment>
        
      </React.Fragment>
    )
  }else{
    return (<div>
      <h2>Acesso não permitido!</h2>
      <a href='/login'>Faça login em sua conta</a>
      </div>)
  }
}

