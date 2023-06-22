import bootstrap from 'bootstrap';
import './App.css';

function App() {
  return (
    <div className="container w-100">
      <div className='row justify-content-center'>
        <div className='col-md-4 card p-5'>
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
              <input type="text" name='input-senha' className="form-control" />
            </div>
            <div className="row mb-4">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="text" name='input-confsenha' className="form-control" />
            </div>
            <div className="button-area ">
              <button type="submit" className='btn btn-success w-100'>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
