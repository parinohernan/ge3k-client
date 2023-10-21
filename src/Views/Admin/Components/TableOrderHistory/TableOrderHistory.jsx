import React from 'react'
import styles from './TableOrderHistory.module.css'

const TableOrderHistory = ({data}) => {
  return (
    <div className={styles.tableContainer} >
      <table className={styles.table}>
         <thead>
         <tr>
              <th>Order ID</th>
              <th>Customer Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
         </thead>
         <tbody>
            {data && data.map(order =>{

function cutID(id) {
    const cutedID = id.match(/^(.{4}).*?(.{4})$/);
    return `${cutedID[1]}...${cutedID[2]}`;
  }
  let dateBack = new Date(order.createdAt);
  let dateFormated = dateBack.toLocaleDateString();

                return(
                    <tr key={order.id}>
                        
                        <td>{cutID(order.id)}</td>
                        <td>{cutID(order.CustomerId)}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{dateFormated}</td>
                        <td>{order.status}</td>
                        <td><button>Marcar Completada</button> </td>
                    </tr>
                )
            })}
         </tbody>
      </table>
    </div>
  )
}

export default TableOrderHistory
