import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Register() {
    const [formData,setFormData]=useState({
        name:"",
        age:"",
        contact:""
    });

    

    const deleteUser=(id)=>{
        axios.delete(`http://localhost:5000/api/user/${id}`)
        .then((res)=>{
            alert(res.data.message);
            fetchUser();
        }).catch((err)=>{
            console.log(err);
        });
    }
const[users,setUser]=useState([]);
    const fetchUser=()=>{
        axios.get("http://localhost:5000/api/user").then((res)=>{
            setUser( res.data.users || res.data || []);
        }).catch((err)=>{
            console.log(err);
        });
    }
    useEffect(()=>{
        fetchUser();
    },[]);

    // post method
    const handleSubmit=(e)=>{
        e.preventDefault()
        let name=formData.name;
        let age=formData.age;
        axios.post("http://localhost:5000/api/user",{
            name,
            age
        }).then(res=>{
            alert(res.data.message);
        }).catch(err=>console.log(err));
        console.log(formData);

        setFormData({
            name:"",
            age:"",
            contact:""
        })
    }

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const [isLogin,setLogin]=useState(false);
    
  return (
    
   <div>
            <div>
            {
                isLogin ? <h1>Welcome User</h1>
                :<h1>Please Login</h1>
            };
            <button onClick={()=>setLogin(! isLogin)}>Login</button>
            </div>
      
        <table border={1} align='center' cellSpacing={0} cellPadding={10}>
            <thead>
            <tr>
            <td>Name</td>
            <td><input type='text' name='name' value={formData.name} onChange={handleChange}/></td>
            </tr>
            </thead>
            <thead>
            <tr>
                <td>Age</td>
                <td><input type='text' name='age' value={formData.age} onChange={handleChange}/></td>
            </tr>
            </thead>
            <thead>
            <tr>
                <td>Contact</td>
                <td><input type='text' name='contact' value={formData.contact} onChange={handleChange}/></td>
            </tr>
            </thead>
            <thead>
            <tr>
                <td colSpan={2} align='center'>
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </td>
            </tr></thead>
        </table>
        <table border={1} align='center' cellSpacing='0'>   
            <thead>
                <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>age</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>
                            <button onClick={()=>deleteUser(user.id)}></button>
                        </td>
                    </tr>
                
                ))}
            </tbody>
        </table>
    
    </div>
  )
}

export default Register
