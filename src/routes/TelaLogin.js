import React,{useState} from 'react'
import CardLogin from '../comps/CardLogin'

export default function TelaLogin() {

    const [alerta,setAlerta] = useState([]);
    
    return (
        <React.Fragment>
        {alerta.map((aux)=>{return aux})}
        <CardLogin alerta={alerta} setAlerta={setAlerta}/>
        </React.Fragment>
    )
}
