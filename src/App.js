import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { css } from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader'
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  const [loading, setLoading] = useState(false);
  const override = css`
  display: block;
  border-color: red;
  margin: 20% 50% 0% 50%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="App">
     
     {
       loading ? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40} />
       :
       <>
        <Navbar />
        <Header />
        <Products />
        <About />
        <Contact />
       </>
     }

    </div>
  );
}

export default App;
