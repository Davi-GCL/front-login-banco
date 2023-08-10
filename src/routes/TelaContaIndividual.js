import React, { useContext, useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import SectionServices from '../comps/SectionServices';
import SectionExtract from '../comps/SectionExtract';
import { ContaContext } from './TelaLogada';
import DropDownMenu from '../comps/DropDownMenu';


function TelaContaIndividual() {
  const {censor, setCensor, loginInfo, setLoginInfo} = useContext(ContaContext);
  const {idConta} = useParams();
  const idUsuario = localStorage.getItem('loginId');
  const token = localStorage.getItem('token');
  const [conta, setConta] = useState();

  const [contas,setContas] = useState([{
    codConta: 0,
    agencia: '',
    saldo: 0,
    tipo: 0,
    idUsuario: 0
  }])
  


  async function getContas(){
    let res = await fetch(`https://localhost:7044/Conta/`, {
      method: 'GET',
      headers: {'Authorization': `Bearer ${token}`}
    })
    let data = await res.json()
    
    console.log(data);
    
    let dataArr = [];
    var username;
    data.forEach(e => {
      if(e.idUsuario == idUsuario){
        dataArr.push({['codConta']:e.codConta, ['agencia']:e.agencia,['saldo']:e.saldo , ['tipo']:e.tipo , ['idUsuario']:e.idUsuario});
        username = e.idUsuarioNavigation.nome;
      }  
    });
    // localStorage.setItem("username", username);
    setLoginInfo(username);
    setContas(dataArr);
  }



  //Executará o fetch somente uma vez
  //Valida se a conta é realmente do usuario: Pesquisa em contas, uma conta com o id passado pela url e compara os idUsuario
  async function getContaById(){
    let res = await fetch(`https://localhost:7044/Conta/GetById/${idConta}`,{method:'GET' , headers: {'Authorization': `Bearer ${token}`}});
  
    setConta( await res.json() );
    console.log(conta);
  }

  useEffect(()=>{
    getContas();
    getContaById();
  },[]);

  // const Render = ()=>{
    
  // }

  if(conta){
    if(conta.idUsuario == idUsuario){ 
      return (
      <div className='container-transactions position-relative'>
        <DropDownMenu contas={contas}/>
        <SectionServices useConta={{conta,setConta}} useCensor={{censor, setCensor}}/>
        <SectionExtract codConta={conta.codConta}/>
      </div>
      ) 
    }else{ 
      return<p>Conta INVALIDA!</p>
    }
  }else{
    return<h4>Carregando...</h4>
  }

}

export default TelaContaIndividual