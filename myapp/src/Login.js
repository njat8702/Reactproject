import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <table border={1} align="center" cellSpacing={0} cellPadding={10}> 
                <tr>
                    <td>USER NAME</td>
                    <td><input type="text" name="username" value=""/></td>
                </tr>
                <tr>
                    <td>PASSWORD</td>
                    <td><input type="password" name="pass" value=""/></td>
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
