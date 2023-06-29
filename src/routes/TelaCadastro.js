import React,{useState} from 'react'
import CardCadastro from '../comps/CardCadastro'

export default function TelaCadastro() {

    const [alerta,setAlerta] = useState([]);
    
    return (
        <React.Fragment>
        {alerta.map((aux)=>{return aux})}
        <CardCadastro alerta={alerta} setAlerta={setAlerta}/>
        </React.Fragment>
    )
}
