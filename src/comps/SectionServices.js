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
  
  return (
    <div>
      <h4>{conta.saldo}</h4>
      <button onClick={handleDeposit}>Depositar</button>
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
      value = prompt("Valor invalido! Digite um valor válido para depósito:").replace(",",".");
    }

    confirm = window.confirm(`Deseja realizar um depósito no valor de ${value} na conta ${conta.codConta} ?`);
  }while(confirm === false);
  return value;
}

function confirmaSaque(conta){
  let confirm;
  let value;
  let senha;

  do{
    
    value = prompt("Digite o valor que deseja sacar: ");
    if(value == null){return 0}
    else{value = value.replace(",",".")}

    while(parseFloat(value)==NaN){
      value = prompt("Valor invalido! Digite um valor válido para depósito:").replace(",",".");
    }

    confirm = window.confirm(`Deseja realizar um depósito no valor de ${value} na conta ${conta.codConta} ?`);

  }while(confirm === false);
  
}

export default SectionServices