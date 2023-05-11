import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import EmployeeService from './EmployeeService'
import {Link} from 'react-router-dom';

const EmployeeList = () => {

    const [employee, setEmployee] = useState([])

      useEffect(()=>{
      getAllEmployee();
       
    },[])

     const getAllEmployee=()=>{
      EmployeeService.getEmployee().then((response)=>{
        setEmployee(response.data)
        console.log(response.data);

         }).catch(error=>{
            console.log(error);
         })
     }

    const deleteEmployee=(employeeId)=>{
       
      EmployeeService.deleteEmployee(employeeId).then((response)=>{
       getAllEmployee();
      }).catch(error=>{
        console.log(error);
      })
    }


  return (
    <div> 
      <h2 className='text-center'>List of Employees</h2>
       <Link to='emp/add-emp' className='btn btn-primary mb-2'>AddEmployee</Link>
      <table className='table table-bordered table-striped'>
        <thead>
             <th>Employee Id</th>
             <th>Employee Name</th>
             <th>Employee DOB</th>
             <th>Employee Gender</th>
             <th>Employee Phone</th>
             <th>Employee Salary</th>
             <th className='text-center'>Actions</th>
        </thead>
        <tbody>
               {
                employee.map(
                    employee=>
                    <tr key={employee.eid}>
                         <td>{employee.eid}</td>
                         <td>{employee.ename}</td>
                         <td>{employee.dob}</td>
                         <td>{employee.gender}</td>
                         <td>{employee.phone}</td>
                         <td>{employee.salary}</td>
                         <td>
                          
                          <a className='btn btn-info' href={'/edit-employee/'+employee.eid}>Update</a>
                           
                          <button className='btn btn-danger' onClick={()=> deleteEmployee(employee.eid)}>Delete</button>
                         
                         </td>
                    </tr>
                )
               }
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList