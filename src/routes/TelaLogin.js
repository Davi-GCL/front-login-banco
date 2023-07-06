import React,{useState} from 'react'
import CardLogin from '../comps/CardLogin'

export default function TelaLogin() {

    const [alerta,setAlerta] = useState([]);
    
    return (
        <React.Fragment>
            <div className="position-fixed start-50 translate-middle w-50" style={{top:'10%',zIndex:999}}>{alerta.map((aux)=>{return aux})}</div>
            <CardLogin alerta={alerta} setAlerta={setAlerta}/>
        </React.Fragment>
    )
}
