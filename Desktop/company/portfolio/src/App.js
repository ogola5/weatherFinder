import React from "react";
import "./App.css";
// import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
import Pricing from "./component/Pricing";
import Contact from "./component/Contact";


function App(){
    return(
        <div className="App">
            <Navbar/>
            <About/>,
            <Services/>
            <Portfolio/>
            <Pricing/>
            <Contact/>
            
            

        </div>
        
    )
}

export default App



