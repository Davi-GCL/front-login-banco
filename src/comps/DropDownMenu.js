import React, { useState } from 'react'
import '../compsStyles.css'
import { useNavigate } from 'react-router-dom';

function DropDownMenu({contas}) {
    const [toggleDrop, setToggleDrop] = useState(false);
    const navigate = useNavigate();
    
    const types = ['poupança', 'corrente'];

  return (
    <div className='position-relative'>
        <div className="menu-contas">
            {/* <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true" onClick={()=>setToggleDrop(!toggleDrop)}>
                | CONTA N°0006
            </button> */}
            <ul className={`dropdown-contas d-block`} style={{transform:0}}>
                <li><div className='dropdown-item dropdown-button' id='' onClick={()=>setToggleDrop(!toggleDrop)}>| Conta N°0006 <i class={`bi bi-chevron-${toggleDrop?'up':'down'}`}></i> </div></li>

                <div className={`${toggleDrop?'d-block':'d-none'}`}>
                    <li><h6 className="dropdown-header py-1">Suas contas: </h6></li>
                    {/* Exibe as contas do usuario cada uma como um item do menu */}
                    {contas.map((conta)=>(
                        <li><a className="dropdown-item" onClick={()=>navigate(`/contas/${conta.codConta}`)}>{conta.codConta}
                        <span class="text-secondary">{types[conta.tipo]}</span></a></li>
                    )) }
                </div>
            </ul>
        </div>
    </div>
  )
}

export default DropDownMenu