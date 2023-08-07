import React,{useEffect, useState} from 'react'


export default function SectionExtract({codConta}) {
    const token = localStorage.getItem('token')
    const [extracts, setExtracts] = useState([{}])
    const [limit, setLimit] = useState(5);

    const types = {'1':'Depósito' , '2':'Saque' , '3':'Transferência'} //Dictionary para converter o valor de um tipo no nome dele

    useEffect(()=>{
        getExtracts();
    },[]);

    async function getExtracts(){
        // await new Promise(r => setTimeout(r, 4000));
        
        fetch(`https://localhost:7044/Mov/GetListByIdConta/${codConta}`, {method: 'GET', headers:{'Authorization': `Bearer ${token}`}})
        .then((res)=>res.json())
        .then((data)=>{
            setExtracts(data.map((x)=>{return{...x , ['dataHora']:convertDateTime(x.dataHora)} }) );
            
        })
        .catch((err)=>console.error(err))
    }

    return (
        <div className='card p-4 mt-4'>
            <h4 className='mb-4'>Últimas movimentações</h4>
            {extracts.map((extract)=>(
                <div className='alert alert-light d-grid'>
                    <div className='d-flex justify-content-between'><h5 className='alert-heading'>{types[extract.tipo]}</h5> 
                    <h5>R${extract.valor}</h5></div>
                    <hr></hr> 
                    <p style={{justifySelf:'end',margin:'0px'}}>{extract.dataHora}</p>
                </div>
            )).reverse().splice(0,limit)}
            <button onClick={()=>setLimit(limit>5? 5 : 10)}>...</button>
        </div>
    )
}

function convertDateTime(dateTime){
    
    let [year, month, date] = dateTime.split('-');
    let [day, time] = date.split('T');

    // let newDateTime = new Date(``)
    return `${day}/${month}/${year}`
}
