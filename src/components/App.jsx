import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound404 from '../pages/NotFound404';
import Housing from '../pages/Housing';



const App =() => {
    return ( 
        <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/housing" element={<Housing/>}/>
                    <Route path="*" element={<NotFound404/>}/>
                </Routes>
        </Router>
    )
}

export default App;