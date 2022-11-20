import React, { Component } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmloyersAddForm from '../employers-add-form/emloyers-add-form'
import EmployersList from '../employers-list/employers-list'
import SearchPanel from '../search-pannel/search-pannel'
import './app.css'
	
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     data :[
    { name: 'John C.', salary: 800, increase:false,rise:false, id:1 },
    { name: 'Alex M.', salary: 5000, increase: true, rise:true, id:2},
    {name:'Carl W', salary: 3000, increase: false,rise:false, id:3}
      ]}}
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  };
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: 1
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data:newArr
      }
    })
  }
  // onToggleRise = (id) => {
  //   this.setState(({ data }) => {
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return{...item, rise: !item.rise}
  //       }
  //       return item;
  //     })
  //   })
  // }
  // onToggleIncrease = (id) => {
  //   this.setState(({ data }) => {
  //     const index = data.findIndex(elem => elem.id === id);
  //     const old = data[index];
  //     const newItem = { ...old, increase: !old.increase };
  //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
  //     return {
  //       data: newArr
  //     }
  //   })

  //   this.setState(({ data }) => {
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return{...item, increase: !item.increase}
  //       }
  //       return item;
  //     })
  //   })

  // }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return{...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }
  render() {
    const emloyees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className='app'>
        <AppInfo emloyees={emloyees} increased={increased} />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter/>
      </div>
        <EmployersList data={this.state.data} onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}
        />
      <EmloyersAddForm />
    </div>
    )
  }
}




