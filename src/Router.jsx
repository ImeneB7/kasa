import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404'


function AppRouter() {
    return ( 
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="*" element={<NotFound404/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;