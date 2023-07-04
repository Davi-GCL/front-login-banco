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
        senha:''
      })

    function toNextForm(){
        setDisplay(1);
    }


    return (
    <React.Fragment>
        {alerta.map((aux)=>{return aux})}
        { display === 1? <CardCadastro alerta={alerta} setAlerta={setAlerta}/> : <CardCadastroUs formUser={formUser} setFormUser={setFormUser} toNextForm={toNextForm}/>}
        
    </React.Fragment>
    )
}
