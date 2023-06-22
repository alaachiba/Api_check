import React from 'react';

function Table({el}) {
  return (
   
        <tr> 
          <td>{el.name}</td>
          <td>{el.email}</td> 
          <td>{el.phone}</td> 
          <td>{el.address.street}</td>
          <td>{el.website}</td>  
          <td>{el.company.name}</td>
        </tr>
    
  );
}

export default Table;