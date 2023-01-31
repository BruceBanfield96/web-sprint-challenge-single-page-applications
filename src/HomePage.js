import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function HomePage() {
    const history = useHistory();
    const routeToPizza = () => {
      history.push("/pizza");
    }
  
    return (
      <div>
      <h1> BloomTech Eats - Home of Amazing Pizza</h1>
      <Link to="/pizza"><button id="order-pizza" onClick={routeToPizza}>Create your Custom Pizza!</button></Link>
      </div>
    
  )};

  export default HomePage;