import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your Name!").min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["Individual slice", "Small", "Medium", "Large"],"Select Size!"),
    sauce: yup.string().oneOf(["Tomato", "Alfredo", "No Sauce"], "Please select an option!"),
    special: yup.string().notRequired(),
    pepperoni: yup.boolean(),
    corn: yup.boolean(),
    italianSausage: yup.boolean(),
    chicken: yup.boolean()
  })

  export default formSchema;