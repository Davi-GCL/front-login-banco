import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import SectionServices from '../comps/SectionServices';
import SectionExtract from '../comps/SectionExtract';
function TelaContaIndividual() {
  const {idConta} = useParams();
  const idUsuario = localStorage.getItem('loginId')
  const [conta, setConta] = useState();

  //Executará o fetch somente uma vez
  //Valida se a conta é realmente do usuario: Pesquisa em contas, uma conta com o id passado pela url e compara os idUsuario
  async function getContaById(){
    let res = await fetch(`https://localhost:7044/Conta/GetById/${idConta}`,{method:'GET'});
  
    setConta( await res.json() );
    console.log(conta);
  }

  useEffect(()=>{getContaById()},[]);

  const Render = ()=>{
    if(conta&& conta.idUsuario == idUsuario){ 
      return (<div><SectionServices useConta={{conta,setConta}}/><SectionExtract codConta={conta.codConta}/></div>) 
    }else{ 
      return<p>Conta INVALIDA!</p>
    }
  }
  return(
    <React.Fragment>
      <Render/>
    </React.Fragment>
  )
}

export default TelaContaIndividual