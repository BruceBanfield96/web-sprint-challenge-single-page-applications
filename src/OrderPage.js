import React from 'react';
import { Link } from 'react-router-dom';

function OrderPage(props){

    const {
        values,
        submit,
        disabled,
        errors,
        change,
        reset,
    } = props

    const onChange = evt => {
        const { name, value, checked, type} = evt.target;
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>
        <header>
            <h1> BloomTech Eats - Home of Amazing Pizza</h1>
            <Link to="/"><button onClick ={reset}>Home</button></Link>
            </header>  
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className ='form-group inputs'>
                <h2> Create your custom Pizza</h2>

                <button disabled= {disabled}>submit</button>

                <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                <div>{errors.toppings}</div>
                </div>
                </div>

                <div className= 'form-group inputs'>
                    <h4> General Information </h4>
                <label> Customer Name
                    <input
                    id="name-input"
                    name='name'
                    type='text'
                    maxLength='30'
                    value={values.name}
                    onChange={onChange}
                    />
                </label>

                <label>Special Instructions(Not Required)
                    <input 
                    id= "special-text"
                    name="special"
                    type= 'text'
                    values={values.special}
                    onChange={onChange}/>
                    
                </label>

                <label>Size
                    <select 
                    id = "size-dropdown"
                    onChange={onChange}
                    value={values.size}
                    name = 'size'
                    >
                    <option value=''>- Select a size -</option>
                    <option value='Individual Slice'>Individual Slice</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    </select>
                </label>

                <label>Sauce
                    <select 
                    onChange={onChange}
                    value={values.sauce}
                    name = 'sauce'
                    >
                    <option value=''>- Select a sauce -</option>
                    <option value='Tomato'>Tomato</option>
                    <option value='Alfredo'>Alfredo</option>
                    <option value='None'>None</option>
                    </select>
                </label>

                <div className='form-group checkboxes'>
                 <h4> Toppings </h4>

                <label>Pepperoni
                  <input 
                    type='checkbox'
                    name= "pepperoni"
                    checked= {values.pepperoni}
                    onChange={onChange}/>

                </label>

                <label>Corn
                  <input 
                  type='checkbox'
                  name= "corn"
                  checked= {values.corn}
                  onChange={onChange}/>

                </label>

                <label>Italian Sausage
                  <input 
                  type='checkbox'
                  name= "italianSausage"
                  checked= {values.italianSausage}
                  onChange={onChange}/>

                </label>

                <label>Chicken
                <input 
                type='checkbox'
                name= "chicken"
                checked= {values.chicken}
                onChange={onChange}
                />

                </label>
                </div>
                <button id="order-button" disabled={disabled}>submit</button>

            
            </div>

        </form>

        </div>
    )

  }

  export default OrderPage;