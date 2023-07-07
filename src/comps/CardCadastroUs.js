import React from 'react';
import {useState, useEffect} from 'react';

export default function CardCadastroUs({toNextForm, formUser, setFormUser}){
  const[emailValid, setEmailValid] = useState(true);
  const[cpfValid, setCpfValid] = useState(true);

  useEffect(()=>{
    const btnNext = document.getElementById('btn-next');
    if(emailValid == false || cpfValid == false){
      btnNext.classList.toggle("disabled",true);
    }
    else{btnNext.classList.toggle("disabled",false);}
  },[emailValid, cpfValid])

    return(
        <div className='card p-4 mt-5 col-md-6 position-relative'>
          <div className="card-title">
            <h4 className='text-center'>Cadastre-se gratuitamente!</h4>
          </div>

          <div className='card-body'>
            <div className="row mb-3">
              <div className='col p-0 pe-4'>
                <label htmlFor="input-name" className="form-label h6">Nome:</label>
                <input type="text" name='input-name' className="form-control" value={formUser['nome']} onChange={({currentTarget}) => setFormUser({
                  ...formUser, ['nome']: currentTarget.value
                })}/>
              </div>

              <div className='col p-0'>
                <label htmlFor="input-cpf" className="form-label h6">CPF:</label>
                <input type="text" name='input-name' className="form-control" value={formUser['cpf']} onChange={({currentTarget}) => setFormUser({
                ...formUser, ['cpf']: currentTarget.value
                })} onBlur={({currentTarget}) =>validarCPF(currentTarget.value, setCpfValid)}/>
                <div class="form-text text-danger">{cpfValid == false?'CPF invalido':''} </div>
              </div>
            </div>
            
            <div className="row mb-3">
              <div className='col p-0 pe-4'>
                <label htmlFor="input-name" className="form-label h6">Email:</label>
                <input type="email" name='input-email' className="form-control" value={formUser['email']} onChange={({currentTarget}) => setFormUser({
                ...formUser, ['email']: currentTarget.value
                })}
                onBlur={({currentTarget}) =>validarEmail(currentTarget.value, setEmailValid)}
                />
                <div class="form-text text-danger">{emailValid == false?'E-mail invalido!':''} </div>
              </div>

              <div className='col p-0'>
                  <label htmlFor="input-tel" className="form-label h6">Telefone:</label>
                  <input type="text" name='input-tel' className="form-control" value={formUser['telefone']} onChange={({currentTarget}) => setFormUser({
                    ...formUser, ['telefone']: currentTarget.value
                  })}/>
                </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="input-senha" className="form-label h6">Senha:</label>
              <input type="password" name='input-senha' className="form-control" value={formUser['setSenha']} onChange={({currentTarget}) => setFormUser({
                ...formUser, ['setSenha']: currentTarget.value
              })} required/>
            </div>
            {/* <div className="row mb-3">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="text" name='input-confsenha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div> */}
            <div className="button-area row mt-4">
              <button type="submit" className='btn btn-primary w-100' id='btn-next' onClick={()=>{toNextForm(1)}}>Avançar</button>
            </div>
          </div>
        </div>
    )
}

function validarEmail(value , setEmailValid) {
  let usuario = value.substring(0, value.indexOf("@"));
  let dominio = value.substring(value.indexOf("@")+ 1, value.length);
  
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
    setEmailValid(true);
  }
  else{
  
  setEmailValid(false);
  }
}

function validarCPF(cpf, setCpfValid) {
  let i;
  var soma = 0;
  var resto;
  let strCPF = cpf.replaceAll('.','').replaceAll('-','');
  
  if (strCPF == "00000000000") {
    setCpfValid(false);
    return;
  };

  for (i=1; i<=9; i++) {
    soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11
  };

  if ((resto == 10) || (resto == 11))  resto = 0;
  if (resto != parseInt(strCPF.substring(9, 10)) ){
    setCpfValid(false);
    return;
  }

  soma = 0;
  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11)){
    resto = 0;
  }
  if (resto != parseInt(strCPF.substring(10, 11) ) ) {
    setCpfValid(false);
    return;
  }

  setCpfValid(true);
  return;
}