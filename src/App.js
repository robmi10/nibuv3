import './App.css';
import Nibiru from './Nibiru';
import { ContextProvider } from './components/Context/Context';
import { useEffect, useState } from "react";
import { BrowserRouter as Switch, Routes ,Route } from "react-router-dom";
import Akirapages from './components/akirapages';
import Glitch from './effects/Glitch/Glitch';

import { useMediaQuery } from 'react-responsive'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
        <ContextProvider>
        <Switch>
        
             <Akirapages/>
           
          </Switch>
          </ContextProvider>
        
      
    </>
  );
}

export default App;
