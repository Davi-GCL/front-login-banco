import React from 'react'

function SectionServices({useConta}) {
  const {conta, setConta} = useConta;

  async function handleDeposit(){
    let value = confirmaDeposito(conta);

    if(value != 0){
      await fetch(`https://localhost:7044/Transactions/Deposit?id=${conta.codConta}&value=${value}`,{
        method: 'PUT',
        headers:{'Content-Type': 'text/plain'}
      })
      .then((res)=>{
        if(!res.ok){
          throw new Error(res.status + " " + res.statusText)
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
    let auxObj = {codConta: conta.codConta, valor: value, senha: pwd}

    if(value != 0 && pwd != ""){
      await fetch(`https://localhost:7044/Transactions/Draw`,{
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(auxObj)
      })
      .then((res)=>{
        if(!res.ok){
          throw new Error(res.status + " " + res.statusText)
        }
        return res.json();
      })
      .then((data)=>{
        // Lógica para tratar a resposta de sucesso
        console.log(data);
        // setConta({...conta , ['saldo']:data.result});
      })
      .catch((err)=>console.error("Erro no PUT Deposit: " + err)/* Lógica para tratar a resposta de erro*/);

    }
    
  }

  return (
    <div>
      <h4>{conta.saldo}</h4>
      <button onClick={handleDeposit}>Depositar</button>
      <button onClick={handleDraw}>Sacar</button>
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

    confirm = window.confirm(`Deseja realizar um depósito no valor de ${value} na conta ${conta.codConta} ?`);
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

    confirm = window.confirm(`Deseja realizar um saque no valor de ${value} na conta ${conta.codConta} ?`);

  }while(confirm === false);
  pwd = prompt("Digite o PIN da conta: ")
  if(pwd == null || pwd == "" || pwd==" "){return {value:0,pwd:""}}
  
  return {value: parseFloat(value) , pwd}
}

export default SectionServices