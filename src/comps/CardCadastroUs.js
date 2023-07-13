import React from 'react';
import {useState, useEffect} from 'react';

export default function CardCadastroUs({toNextForm, formUser, setFormUser}){
  const[emailValid, setEmailValid] = useState(true);
  const[cpfValid, setCpfValid] = useState(true);
  const[disableBtn, SetDisableBtn] = useState(true);

  //Algoritmo que é acionado quando uma das depencias (states emailValid, cpfValid) tem o valor modificado
  //Habilita ou desabilita o botão de avançar, se caso os campos forem invalidos
  useEffect(()=>{
    const camposVaziosUser = Object.keys(formUser).filter((campo) => formUser[campo] === '' || formUser[campo] === ' ');
    console.log("campos vazios: " + camposVaziosUser)
    if(emailValid == false || cpfValid == false || camposVaziosUser.length > 0){
      SetDisableBtn(true);
    }
    else{SetDisableBtn(false);}
  },[emailValid, cpfValid, formUser])



    return(
        <div className='card p-4 mt-5 col-md-6 position-relative'>
          <div className="card-title">
            <h4 className='text-center'>Cadastre-se gratuitamente!</h4>
          </div>
            <h6 className='subtitle ms-1 text-primary'>Etapa 1</h6>

          <div className='card-body'>
            <div className="row mb-3">
              <div className='col p-0 pe-4'>
                <label htmlFor="input-name" className="form-label h6">Nome:</label>
                <input type="text" name='input-name' className="form-control" value={formUser['nome']} onChange={({currentTarget}) => setFormUser({
                  ...formUser, ['nome']: currentTarget.value
                })}
                required/>
              </div>

              <div className='col p-0'>
                <label htmlFor="input-cpf" className="form-label h6">CPF:</label>
                <input type="text" name='input-name' className="form-control" value={formUser['cpf']} onChange={({currentTarget}) => setFormUser({
                ...formUser, ['cpf']: currentTarget.value
                })} onBlur={({currentTarget}) =>validarCPF(currentTarget.value, setCpfValid)}
                required/>
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
                required/>
                <div class="form-text text-danger">{emailValid == false?'E-mail invalido!':''} </div>
              </div>

              <div className='col p-0'>
                  <label htmlFor="input-tel" className="form-label h6">Telefone:</label>
                  <input type="text" name='input-tel' className="form-control" value={formUser['telefone']} onChange={({currentTarget}) => setFormUser({
                    ...formUser, ['telefone']: currentTarget.value
                  })} required/>
                </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="input-senha" className="form-label h6 p-0">Senha:</label>
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
              <button type="submit" className={`btn btn-primary w-100 ${disableBtn?' disabled' : ' '}`} id='btn-next' onClick={()=>{toNextForm(1)}}>Avançar</button>
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