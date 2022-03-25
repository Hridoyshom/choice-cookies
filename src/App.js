import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card/Card';


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
      {cookies.map((cookie) => (<Card key={cookie.id} cookieData={cookie} />))}
    </div>
  );


}

export default App;
