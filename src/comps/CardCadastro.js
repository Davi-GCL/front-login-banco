

export default function CardCadastro(){


    return(
        <div className='col-md-3 card p-4 mt-5'>
          <div className="card-title">
            <h4 className='text-center'>Cadastre-se gratuitamente!</h4>
          </div>
          <form action="" method="post" className='card-body'>
            <div className="row mb-4">
              <label htmlFor="input-name" className="form-label h6">Nome:</label>
              <input type="text" name='input-name' className="form-control" />
            </div>
            <div className="row mb-4">
              <label htmlFor="input-conta" className="form-label h6">Nº Conta:</label>
              <input type="text" name='input-conta' className="form-control" />
            </div>
            <div className="row mb-4">
              <label htmlFor="input-senha" className="form-label h6">Senha:</label>
              <input type="password" name='input-senha' className="form-control" />
            </div>
            <div className="row mb-4">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="password" name='input-confsenha' className="form-control" />
            </div>
            <div className="button-area row">
              <button type="submit" className='btn btn-success w-100'>Cadastrar</button>
            </div>
          </form>
        </div>
    )
}