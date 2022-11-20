import React from 'react'
import './app-filter.css';

export default function AppFilter() {
  return (
	  <div className="btn-group">
		  <button className="btn btn-light" type='button'>
			  All 
		  </button>
		  <button className="btn btn-outline-light" type='button'>
			  На повышение
		  </button>
		  <button className="btn btn-outline-light" type='button'>
			  Salary more then 1000$
		  </button>
		  
	 </div>
  )
}

