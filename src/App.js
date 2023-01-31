import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import HomePage from './HomePage';
import OrderPage from './OrderPage';
import formSchema from './formSchema';
import axios from 'axios';

const initialFormValues = {customerName: '', size: '', sauce:'', special: '', pepperoni: false, corn: false, italianSausage: false, chicken: false}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const initialPizzaOrders = []
const initialDisabled = true

const App = () => {

  const [pizzaOrders, setPizzaOrders] = useState(initialPizzaOrders);
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)  

  const validate = (inputName, inputValue) => {
    yup.reach(formSchema, inputName)
    .validate(inputValue)
    .then(() => setFormErrors({...formErrors, [inputName]: ""}))
    .catch(err => setFormErrors({...formErrors, [inputName]: err.errors[0]}))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then( res => {
      console.log(res);
      setPizzaOrders([res.data, ...pizzaOrders]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const inputChange = (inputName, inputValue) => {
    validate(inputName, inputValue);
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const orderSubmit = () => {
    const newOrder = {
      name: formValues.customerName.trim(),
      size : formValues.size,
      sauce: formValues.sauce,
      toppings: ["pepperoni","corn","italianSausage", "chicken"].filter(toppings => !!formValues[toppings])
    }
    setFormValues(initialFormValues)
    postNewOrder(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])




  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path= "/pizza">
          <OrderPage 
          values={formValues}
          change={inputChange}
          submit={orderSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
    
      </Switch>
      </div>
  );
};
export default App;
