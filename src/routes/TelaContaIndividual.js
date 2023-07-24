import React from 'react'
import { useParams } from 'react-router-dom'

function TelaContaIndividual() {
  const {idConta, idUsuario} = useParams();
  return (
    <div>conta:{idConta} usuario: {idUsuario}</div>
  )
}

export default TelaContaIndividual