import React from 'react'
import '../compsStyles.css'

function SectionServices({useConta}) {
  const token = localStorage.getItem('token');
  const {conta, setConta} = useConta;
  

  async function handleDeposit(){
    let value = confirmaDeposito(conta);

    if(value != 0){
      await fetch(`https://localhost:7044/Transactions/Deposit?id=${conta.codConta}&value=${value}`,{
        method: 'PUT',
        headers:{'Content-Type': 'text/plain' , 'Authorization': `Bearer ${token}`}
      })
      .then((res)=>{
        if(!res.ok){
          throw new Error(res.status + ": " + res.text())
        }
        return res.json();
      })
      .then((data)=>{
        // Lógica para tratar a resposta de sucesso
        console.log(data);
        setConta({...conta , ['saldo']:data.result});
      })
      .catch((err)=>console.error("Erro no PUT Deposit: " + err)/* Lógica para tratar a resposta de erro*/);

    }
    
  }
  
  async function handleDraw(){
    let {value, pwd} = confirmaSaque(conta);
    let bodyObj = {codConta: conta.codConta, valor: value, senha: pwd}

    if(value != 0 && pwd != ""){
      try{
        let res = await fetch(`https://localhost:7044/Transactions/Draw`,{
          method: 'PUT',
          headers:{'Content-Type': 'application/json' , 'Authorization': `Bearer ${token}`},
          body: JSON.stringify(bodyObj)
          });
        if(!res.ok){
          let error = await res.text()
          throw new Error(error)
        }
        let data = await res.json();
    
        // Lógica para tratar a resposta de sucesso
        console.log(data);
        setConta({...conta , ['saldo']:data.result});
      
      }
      catch(err){
        console.error("Erro no PUT Deposit: " + err)/* Lógica para tratar a resposta de erro*/
        alert(err);
      }

    }
  }
  async function handleTransfer(){
    try{
      const {receiver, value, pwd} = confirmaTransf(conta);
      const bodyObj = {
        idRemetente: conta.codConta,
        idDestinatario: receiver,
        valor: value,
        senha: pwd
      }
      try{
        let res = await fetch(`https://localhost:7044/Transactions/Transfer`,{
          method: 'PUT',
          headers:{'Content-Type': 'application/json' , 'Authorization': `Bearer ${token}`},
          body: JSON.stringify(bodyObj)
          });
        if(!res.ok){
          let error = await res.text()
          throw new Error(error)
        }
        let data = await res.json();
    
        // Lógica para tratar a resposta de sucesso
        console.log(data);
        setConta({...conta , ['saldo']:data.result});
      
      }
      catch(err){
        console.error("Erro no PUT Deposit: " + err)/* Lógica para tratar a resposta de erro*/
        alert(err);
      }

    }catch(err){
      alert(err.param + ": " + err.content);
    }
  }

  return (
    <div>
      <h4>R${conta.saldo}</h4>
      <div className='d-flex justify-content-around w-50'>
      <button className='btn-services' onClick={handleDeposit}><i class="bi bi-download"></i>Depositar</button>
      <button className='btn-services' onClick={handleDraw}><i class="bi bi-upload"></i>Sacar</button>
      <button className='btn-services' onClick={handleTransfer}><i class="bi bi-cursor"></i>Transferir</button>
      </div>
    </div>
  )
}

function confirmaDeposito(conta){
  let confirm;
  let value;
  do{
    
    value = prompt("Digite o valor que deseja depositar:");
    if(value == null){return 0}
    else{value = value.replace(",",".")}

    while(parseFloat(value)==NaN){
      value = prompt("Valor inválido! Digite um valor válido para depósito:").replace(",",".");
    }

    confirm = window.confirm(`Deseja realizar um depósito no valor de R$${value} na conta N°${conta.codConta} ?`);
  }while(confirm === false);
  return parseFloat(value);
}

function confirmaSaque(conta){
  let confirm;
  let value;
  let pwd = '';
  do{
    
    value = prompt("Digite o valor que deseja sacar: ");
    if(value == null){return {value:0,pwd:''}}
    else{value = value.replace(",",".")}

    while(parseFloat(value)==NaN){
      value = prompt("Valor inválido! Digite um valor válido para saque:").replace(",",".");
    }

    confirm = window.confirm(`Deseja realizar um saque no valor de R$${value} na conta N°${conta.codConta} ?`);

  }while(confirm === false);
  pwd = prompt("Digite o PIN da conta: ")
  if(pwd == null || pwd == "" || pwd==" "){return {value:0,pwd:""}}
  
  return {value: parseFloat(value) , pwd}
}

function confirmaTransf(conta){
  let value, receiver, confirm;
  let pwd = '';
  do{
    
    value = prompt("Digite o valor que deseja transferir: ");
    if(value == null){ throw {param:'value',content:'null'} }
    else{value = value.replace(",",".")}

    while(parseFloat(value)==NaN){
      value = prompt("Valor inválido! Digite um valor válido:").replace(",",".");
    }

    //Pergunta a conta que ira receber a transferencia:
    receiver = prompt("Escolha a conta que irá receber: ");
    if(receiver == null){throw {param:'receiver',content:'null'}}//Se for clicado no botão cancelar, retorna null
    

    while(parseInt(receiver)==NaN){
      value = prompt("Conta invalida! Digite um número de conta válido:").replace(",",".");
    }

    confirm = window.confirm(`Deseja transferir R$${value} para a conta N°${receiver} ?`);

  }while(confirm === false);
  pwd = prompt("Digite o PIN da conta: ");
  if(pwd == null || pwd == "" || pwd==" "){throw {param:'password',content:'null'}}
  
  return {receiver, value: parseFloat(value) , pwd}
}

export default SectionServices

const styles = {
  btn:{
    backgroundColor: 'blue'
  }
}