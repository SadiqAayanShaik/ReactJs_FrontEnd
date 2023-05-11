 import React, { useState,useEffect} from 'react'
import EmployeeService from './EmployeeService';
import {useNavigate,Link,useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';

 export const AddEmployee = () => {

     const [ename, setename] = useState('');
     const [dob, setdob] = useState('');
     const [gender, setgender] = useState('');
     const [phone, setphone] = useState('');
     const [salary, setsalary] = useState('');
     const navigate=useNavigate()
     const {id}=useParams()

     const {register,handleSubmit,formState:{errors}}=useForm();
     
     const saveEmployee=(e)=>{
        e.preventDefault();
        const employee={ename,dob,gender,phone,salary}
        
        if(id)
        {
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                navigate('/emp')
            }).catch(error=>{
                console.log(error)
            })
        }
        else{
            EmployeeService.createEmployee(employee).then((response)=>{

                console.log(response.data)
    
                navigate('/emp');
    
            }).catch(error=>{
                console.log(error)
            })
        }
       
     }

     useEffect(() => {
       EmployeeService.getEmployeeById(id).then((response)=>{
        setename(response.data.ename)
        setdob(response.data.dob)
        setgender(response.data.gender)
        setphone(response.data.phone)
        setsalary(response.data.salary)

       }).catch(error=>{
        console.log(error)
       })
     }, [])
     
     const title=()=>{
         if(id){
            return <h2 className='text-center'>Update Employee</h2>
         }
         else{
            return <h2 className='text-center'>Add Employee</h2>
         }
     }
     const onSubmit=(data)=>{
        console.log(data);
     }
     console.log(errors)
   return (
     <div>
         
         <div className='container'>
        
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-ms-3'>
                   
                   {
                    title()
                   }
                    <div className='card-body'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Name:</label>
                                <input
                                   type="text"
                                   placeholder='Enter Employee Name'
                                   name='ename'
                                   className='form-control'
                                   value={ename}
                                   {...register('ename',{required:'Name is required'})}
                                   onChange={(e)=>setename(e.target.value)}
                                >
                                </input> {errors.ename && (<small className='text-danger'>{errors.ename.message}</small>)}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Date Of Birth:</label>
                                <input
                                   type="text"
                                   placeholder='Enter Employee Dob'
                                   name='dob'
                                   className='form-control'
                                   value={dob}
                                   onChange={(e)=>setdob(e.target.value)}
                                >
                                </input>
                            </div>

                            
                            <div className='form-group mb-2' onChange={(e)=>setgender(e.target.value)}>
                                <input type="radio" value="Male" name="gender" /> Male
                                 <input type="radio" value="Female" name="gender" /> Female
                                <input type="radio" value="Other" name="gender" /> Other
                              </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone:</label>
                                <input
                                   type="text"
                                   pattern='^[6789][0-9]{9}'
                                    
                                   placeholder='Enter Employee Phone'
                                   name='phone'
                                   className='form-control'
                                   value={phone}
                                   onChange={(e)=>setphone(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Salary:</label>
                                <input
                                   type="text"
                                   placeholder='Enter Employee salary'
                                   name='salary'
                                   className='form-control'
                                   value={salary}
                                   onChange={(e)=>setsalary(e.target.value)}
                                >
                                   
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={(e)=>saveEmployee(e)}>Submit</button>
                            <Link to="/emp" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </div>
   )
 }
 