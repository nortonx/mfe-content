import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Landing from "./components/Landing";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-purple/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = () => { 
  return (
    <div>
      <PrimeReactProvider>
        <Landing />
      </PrimeReactProvider>
    </div>
  );
}

export default App;