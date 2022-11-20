import React from 'react'
import './app-info.css';

export default function ({increased, emloyees}) {
  return (
	  <div className='app-info'>
		<h1>Учет сотрудников в компании</h1>
		  <h2>Общее число сотрудников: {emloyees}</h2>
		  <h2>Премию получат: {increased}</h2>
	 </div>
  )
}
