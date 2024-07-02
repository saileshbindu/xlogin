import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const loginDetail = (event) => {
    event.preventDefault();
    if (user === "user" && password === "password") {
      setError('');
      setIsLogin(true);
      setUser('');
      setPassword('');
    } else {
      setError("Invalid username or password");
      setIsLogin(false);
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {error && <p role="alert">{error}</p>}
      {isLogin ? (
        <div>Welcome, user!</div>
      ) : (
        <form onSubmit={loginDetail}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type='text'
              placeholder='Username'
              required
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;