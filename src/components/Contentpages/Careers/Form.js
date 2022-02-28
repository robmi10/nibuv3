import React, {useState} from 'react'
import { CareerList } from './Careersdata'
import "./Form.css"
export const Form = () => {
const [user, setUser] = useState({firstname: "", lastname: "", 
        email: "", address: "", zipcode: "", role: "", cv: ""})

    const handleChange = (e) =>{
        setUser({... user, [e.target.name]: e.target.value});
    }

  return (
    <>
    <form>
      <label className='FormText' htmlFor="firstname">Firstname</label>
      <input className='InputDiv' type="text" name="firstname" onChange={handleChange} />
      <label className='FormText' htmlFor="lastname">Lastname</label>
      <input className='InputDiv' type="text" name="lastname" onChange={handleChange} />
      <label className='FormText' htmlFor="email">Email</label>
      <input className='InputDiv' type="email" name="email" onChange={handleChange} />
      <label className='FormText' htmlFor="address">Address</label>
      <input className='InputDiv' type="address" name="address" onChange={handleChange} />
      <label className='FormText' htmlFor="zipcode">Zipcode</label>
      <input className='InputDiv' type="zipcode" name="zipcode" onChange={handleChange} />
      <label className='FormText' htmlFor="address">Role </label>
      <select type="role" name="role" onChange={handleChange}>
        {CareerList.map((options) =>{
            return(
           <option>{options.position}</option> 
            )
        })}  
      </select>
      <label className='FormText' htmlFor="address">CV </label>
      <input type="file" id="cv" name="cv"/>
     
       
    </form>
    
    </>
  )
}
