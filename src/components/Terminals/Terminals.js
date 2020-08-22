import React, { Component } from 'react'
import Terminal from './Terminal'

export default class Terminals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [

      ],
      titleError: false,
      descError: false,

    }

    this.addTerminal = this.addTerminal.bind(this)
    this.delete = this.delete.bind(this)

    this.title = React.createRef();
    this.desc = React.createRef();
  }

  delete(id) {
    const { items } = this.state
    const filteredItems = items.filter(item => item.id !== id)
    this.setState({items: filteredItems})
  }

  addTerminal() {
    this.setState({titleError: false})
    this.setState({descError: false})
    // if inputs are empty
      if (this.title.current.value === '') {
      this.setState({titleError: true})
      return
    } else if (this.desc.current.value === '') {
      this.setState({descError: true})
      return
    }
    // new terminal
    const obj = {
      id: this.state.items.length,
      title: this.title.current.value,
      description: this.desc.current.value
    }
    const items = [...this.state.items, obj]
    
    this.setState({
      items: items
    })
    
    // clear inputs
    this.title.current.value = ''
    this.desc.current.value = ''
  }

  render() {
    const { items, titleError, descError } = this.state;
    return (
      <div className="col-12 col-sm-10 col-md-7 col-lg-5 mx-auto">
        <h1 className="text-center">Терминалы</h1>
        <div className=" mb-2">
          <input className={titleError ? 'form-control alert-danger' : 'form-control'} type="text" ref={this.title} placeholder='Название терминала'/>
          {titleError ? <p className="alert alert-danger m-0">Введите название терминала</p> : ''}
          <input className={descError ? 'form-control alert-danger' : 'form-control'} type="text" ref={this.desc} placeholder='Описание'/>
          {descError ? <p className="alert alert-danger m-0">Введите описание терминала</p> : ''} 
          <button className="btn btn-success" onClick={this.addTerminal}>Добавить</button>
        </div>
        <Terminal delete={this.delete} items={items}/>
      </div>
    )
  }
}