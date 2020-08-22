import React from 'react'
import buyers from './../../data/buyers.json'
import { Card } from 'react-bootstrap'

export default function Buyer(props) {
  return (
    <Card style={{ width: '18rem', margin:  'auto' }}>
      <Card.Img variant="top" src="/private-account/no-photo.jpg" />
      <Card.Body>
        <Card.Title>{buyers[props.match.params.id - 1].name}</Card.Title>
        <Card.Text>Средний чек - {buyers[props.match.params.id - 1].check}$</Card.Text>
        <Card.Text>Количество покупок - {buyers[props.match.params.id - 1].quantity}</Card.Text>
        <Card.Text>Общая выручка - {buyers[props.match.params.id - 1].sum}$</Card.Text>
      </Card.Body>
    </Card>
  )
}