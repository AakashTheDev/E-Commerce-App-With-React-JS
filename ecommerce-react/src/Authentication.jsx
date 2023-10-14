import React from 'react'
import Delete from './Delete';

function Authentication() {
    const submitHandler=((e)=>{
        e.preventDefault();
        const uname = e.target.name.value;
        const pass = e.target.pass.value;
        if(pass === 'Aakash@23'){
            alert('Welcome Back Admin');
            <Delete/>
        }
        else{
            alert('You are not a Admin');
        }
    })
  return (
    <center>
    <form className="container" id="form"  onSubmit={submitHandler}  >
    <h2>Admin Access Needed...!!!</h2>
    <label >Enter Your User Name:</label><br/>
    <input type="text" id="name" name='name' required placeholder="Enter Your User Name:"/><br/>
    <label >Enter Your Password:</label><br/>
    <input type="text" id="price" name='pass' required placeholder="Enter Your Password:"/><br/>
    <input type="submit" value="Submit" />
    </form>
    </center>
  )
}

export default Authentication;
