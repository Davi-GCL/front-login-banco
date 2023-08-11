import React, { useEffect, useState } from 'react'
import '../compsStyles.css'
import { useNavigate , useParams} from 'react-router-dom';

function DropDownMenu({contas, current}) {
    const [toggleDrop, setToggleDrop] = useState(false);
    const navigate = useNavigate();
    var idconta;
    const types = ['poupança', 'corrente'];

    // useEffect(()=>{
    //     idconta = window.location.href.split('/');
    //     console.log(idconta[idconta.length-1]);
    // })

  return (
    <div className='position-relative'>
        <div className="menu-contas">
            {/* <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true" onClick={()=>setToggleDrop(!toggleDrop)}>
                | CONTA N°0006
            </button> */}
            <ul className={`dropdown-contas d-block`} style={{transform:0}}>
                <li><div className='dropdown-item dropdown-button' id='' onClick={()=>setToggleDrop(!toggleDrop)}>| Conta N°{current} <i class={`bi bi-chevron-${toggleDrop?'up':'down'}`}></i> </div></li>

                <div className={`${toggleDrop?'d-block':'d-none'}`}>
                    <li><h6 className="dropdown-header py-1">Suas contas: </h6></li>
                    
                    {/* Exibe as contas do usuario cada uma como um item do menu */}
                    {contas.map((conta)=>(
                        <li><a className="dropdown-item" onClick={()=>{window.location.href= `http://localhost:3000/contas/${conta.codConta}`}}>{conta.codConta}
                        <span class="text-secondary">{types[conta.tipo]}</span></a></li>
                    )) }

                </div>
            </ul>
        </div>
    </div>
  )
}

export default DropDownMenu

//navigate(`/contas/${conta.codConta}`)