import React,{useState} from 'react'
import CardCadastro from '../comps/CardCadastro'
import CardCadastroUs from '../comps/CardCadastroUs';

export default function TelaCadastro() {

    const [alerta,setAlerta] = useState([]);
    const [display, setDisplay] = useState(0)
    
    const [formUser, setFormUser] = useState({
        nome:'',
        cpf: '',
        email:'',
        telefone:'',
        setSenha:''
      })

      const [form, setForm] = useState({
        codConta: '',
        tipo:0,
        setSenha: '',
        idUsuario: '',
        agencia: ''
      });

    function toNextForm(x){
        setDisplay(x);
    }


    return (
    <React.Fragment>
        <div className="position-fixed start-50 translate-middle w-50" style={{top:'18%',zIndex:999}}>{alerta.map((aux)=>{return aux})}</div>
        { display === 1? <CardCadastro states={[form, setForm, formUser, alerta, setAlerta]} toNextForm={toNextForm}/> : <CardCadastroUs formUser={formUser} setFormUser={setFormUser} toNextForm={toNextForm}/>}
        
    </React.Fragment>
    )
}
