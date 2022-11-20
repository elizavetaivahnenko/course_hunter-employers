import React from 'react'
import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';
import EmloyersAddForm from '../employers-add-form/emloyers-add-form';

export default function EmployersList({ data, onDelete, onToggleProp }) {
	const elements = data.map(item => {
		const { id, ...itemProps } = item;
		//item-objects, itemProps-objects elements
		return (
			<EmployersListItem key={id} {...itemProps} onDelete={() => onDelete(id)} onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )} />
		)
	})
  return (
	  <ul className='app-list list-group'>
		  {elements}
	 </ul>
  )
}
