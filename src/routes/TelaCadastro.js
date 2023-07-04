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

    function toNextForm(x){
        setDisplay(x);
    }


    return (
    <React.Fragment>
        {alerta.map((aux)=>{return aux})}
        { display === 1? <CardCadastro formUser={formUser} alerta={alerta} setAlerta={setAlerta} toNextForm={toNextForm}/> : <CardCadastroUs formUser={formUser} setFormUser={setFormUser} toNextForm={toNextForm}/>}
        
    </React.Fragment>
    )
}
