import React,{useState} from 'react'

export default function SectionExtract({codConta}) {
    const [extracts, setExtracts] = useState([{}])

    async function handleGet(){
        fetch(`https://localhost:7044/Mov/GetListByIdConta/${codConta}`)
        .then((res)=>res.json())
        .then((data)=>{
            setExtracts(data)
        })
        .catch((err)=>console.error(err))
    }

    return (
        <div className='card'>
            <button onClick={handleGet}>Get</button>
            {extracts.map((extract)=>(<div className='alert alert-primary'>{extract.tipo} {extract.valor} {extract.dataHora}</div>))}
        </div>
    )
}
