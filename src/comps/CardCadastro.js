import { useEffect } from "react"
import api from "../services/api";

export default function CardCadastro(){

  function handleSubmit(e){
    e.preventDefault()

    var formData = e.target;

    console.log(formData.get("field1"));

    // api.post("Usuario/Create", formData).then((res)=>{console.log(res.data)}).catch(err=>console.error(err));
  }


    return(
        <div className='col-md-3 card p-4 mt-5'>
          <div className="card-title">
            <h4 className='text-center'>Cadastre-se gratuitamente!</h4>
          </div>

          <form className='card-body' id="form-cadastro" onSubmit={(e)=>handleSubmit(e)}>
            <div className="row mb-4">
              <label htmlFor="nome" className="form-label h6">Nome:</label>
              <input type="text" name='nome' className="form-control" />
            </div>
            <div className="row mb-4">
              <label htmlFor="conta" className="form-label h6">Nº Conta:</label>
              <input type="text" name='conta' className="form-control" />
            </div>
            <div className="row mb-4">
              <label htmlFor="senha" className="form-label h6">Senha:</label>
              <input type="password" name='senha' className="form-control" />
            </div>
            <div className="row mb-4">
              <label htmlFor="confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="password" name='confsenha' className="form-control" />
            </div>
            <div className="button-area row">
              <button type="submit" className='btn btn-success w-100'>Cadastrar</button>
            </div>
          </form>
        </div>
    )
}