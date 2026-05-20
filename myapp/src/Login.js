import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[msg,setMsg]=useState("");

    const navigate = useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        if(username=="admin" && password=="12345")
            navigate("/register")
        else
            setMsg("Invalid UserName and Password")
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <table border={1} align="center" cellSpacing={0} cellPadding={10}> 
                <tr>
                    <td colSpan={2} align='center'>{msg}</td>
                </tr>
                <tr>
                    <td>USER NAME</td>
                    <td><input type="text" name="username" value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    /></td>
                </tr>
                <tr>
                    <td>PASSWORD</td>
                    <td><input type="password" name="pass" value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    /></td>
                </tr>
                <tr>
                    <td>
                        <button type="submit">LOGIN</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default Login
