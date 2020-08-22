import React from 'react'

export default function Terminal(props) {
  const {items} = props
  return (
    <ul>
      {
        items.map(item => (
            <li key={item.id} className="card">
              <div className="card-body">
                <h1>{item.title}</h1>
                <h4>{item.description}</h4>
                <button className="btn-danger btn" onClick={() => props.delete(item.id)}>Удалить</button>
              </div>
            </li>
          )
        )
      }
    </ul>
  )
}