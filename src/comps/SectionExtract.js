import React,{useEffect, useState} from 'react'

export default function SectionExtract({codConta, useCensor}) {
    const token = localStorage.getItem('token')
    const {censor, setCensor} = useCensor;
    const [extracts, setExtracts] = useState([{}])
    const amount = 3;
    const [limit, setLimit] = useState(amount);

    const types = {'1':'Depósito' , '2':'Saque' , '3':'Transferência'} //Dictionary para converter o valor de um tipo no nome dele

    useEffect(()=>{
        getExtracts();
    },[]);

    async function getExtracts(){
        // await new Promise(r => setTimeout(r, 4000));
        
        fetch(`https://localhost:7044/Mov/GetListByIdConta/${codConta}`,{method: 'GET', headers:{'Authorization': `Bearer ${token}`}})
        .then((res)=>res.json())
        .then((data)=>{
            setExtracts(data.map((x)=>{return{...x , ['dataHora']:convertDateTime(x.dataHora)} }) );
            
        })
        .catch((err)=>console.error(err))
    }

    return (
        <div className='card p-4 mt-4 card-extract'>
            <h4 className='mb-4'>Últimas movimentações</h4>
            {extracts.map((extract)=>(
                <div className='alert alert-light d-grid' key={Math.floor(Math.random()*1000)}>
                    <div className='d-flex justify-content-between'><h5 className='alert-heading'>{types[extract.tipo]}</h5> 
                    <h5 className={censor? 'text-censor' : 'text'}>R${extract.valor}</h5></div>
                    <hr></hr> 
                    <p style={{justifySelf:'end',margin:'0px'}}>{extract.dataHora}</p>
                </div>
            )).reverse().splice(0,limit)}
            <button className='btn btn-expand' onClick={()=>setLimit(limit>amount? amount : 6)}>{limit>amount?'Ver menos':'Ver mais'}</button>
        </div>
    )
}

function convertDateTime(dateTime){
    
    let [year, month, date] = dateTime.split('-');
    let [day, time] = date.split('T');

    // let newDateTime = new Date(``)
    return `${day}/${month}/${year}`
}
