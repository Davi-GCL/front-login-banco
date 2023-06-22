import bootstrap from 'bootstrap';
import './App.css';

import CardCadastro from './comps/CardCadastro';

function App() {
  return (
    <div className="container w-100">
      <div className='row justify-content-center'>
        <CardCadastro/>
      </div>
    </div>
  );
}

export default App;
