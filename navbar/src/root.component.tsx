import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from "react-router-dom";

const Root: React.FC = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default Root;