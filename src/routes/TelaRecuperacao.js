import React,{useState, useRef, useEffect} from 'react'

export default function TelaRecuperacao() {
  const [form,setForm] = useState({
    cpf:"",
    email:"",
    senha:""
  });
  const [valid, setValid] = useState({
    cpf:false,
    email:false,
    senha:false
  })
  const [confSenha, setConfSenha] = useState('');

  async function handleSubmit() {

    fetch('https://localhost:7044/Usuario/Update/Password', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    // })
    .catch(err => console.log(err));
  }

  useEffect(()=>{
    if(form.senha != confSenha || form.senha == ''){
      console.log("senhas nao conferem")
      setValid({...valid, ['senha']:false})
    }else{
      console.log("senhas conferem!")
      setValid({...valid, ['senha']:true})
    }
  },[form.senha , confSenha])

// --------------------------------------- Código JSX ----------------------------------------------------------
  return (
    <div className='card col-md-5 col-lg-3 p-4 pb-2 mt-5'>
          <div className="card-title">
            <h4 className='text-center'>Redefinir Senha</h4>
          </div>
          <div className='card-body'>
            <div className="row mb-3">
              <label htmlFor="input-cpf" className="form-label h6">CPF:</label>
              <input type="text" name='input-cpf' className="form-control" onChange={({currentTarget})=>{setForm({...form, ['cpf']:currentTarget.value})}}/>
            </div>
            <div className="row mb-3">
              <label htmlFor="input-email" className="form-label h6">Email:</label>
              <input type="text" name='input-email' className="form-control" onChange={({currentTarget})=>{setForm({...form, ['email']:currentTarget.value})}}/>
            </div>

            <div className="row mb-3">
              <label htmlFor="input-senha" className="form-label h6">Nova Senha:</label>
              <input type="password" name='input-senha' className="form-control" onChange={({currentTarget})=>{setForm({...form, ['senha']:currentTarget.value})}}/>
            </div>
            
            <div className="row mb-3">
              <label htmlFor="input-senha" className="form-label h6">Confirmar Senha:</label>
              <input type="password" name='input-senha' className="form-control" onChange={({currentTarget})=>{setConfSenha(currentTarget.value)}}/>
              <p>{valid.senha == false? "As senhas não conferem!": ''}</p>
            </div>

            <div className="button-area row mt-4">
              <button type="submit" className={`btn btn-primary w-100 ${form.cpf && form.email && valid.senha==true? '':'disabled'}`} onClick={handleSubmit}>Confirmar</button>
            </div>
          </div>
    </div>
  )
}
