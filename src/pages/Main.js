import React from 'react'

export default function Main({ match }) {
  return <h1>Dev id nº {match.params.id}</h1>
}