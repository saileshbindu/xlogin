import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const loginDetail = (event) =>{
    event.preventDefault()
    if(user === "user" && password == "password"){
      setMessage(`Welcome ${user}`)
      setIsLogin(true)
      setUser('');
      setPassword('');
    }
    else{
      setMessage("Invalid username and password");
    
    }
    
    
  }
  return (

    <div className="App">
      <h1>Login Page</h1>
      <p>{showMessage}</p>
      {isLogin ? (<div></div>) : ( <form onSubmit={loginDetail} >
        <div>
          <label>Username: </label>
          <input type='text' placeholder='Username' required onChange={(e)=>{setUser(e.target.value)}} value={user}/>
        </div>
        <div>
          <label>Password: </label>
          <input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required value={password}/>
        </div>
        <button type='submit'>Submit</button>
      </form>)}
     
    </div>
  );
}

export default App;
