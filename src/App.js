import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCookies(data));
  }, []);

  return (
    <div>
      <h1 className='new'>choose cookie</h1>
      {cookies.map((cookie) => console.log(cookie.name))}
    </div>
  );


}

export default App;
