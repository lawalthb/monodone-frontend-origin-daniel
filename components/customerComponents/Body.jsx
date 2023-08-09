import React from 'react'
import Header from '../common/Header'
import Table from './Table'

const Body = () => {
  return (
    <div className='container'>
        <Header title="Customers" />
        <Table />
    </div>
  )
}

export default Body