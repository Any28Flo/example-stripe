import {config} from "dotenv";

if(process.env.NODE_ENV !== 'production'){
      config();
}
//Initialize Stripe
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_KEY, {
      apiVersion: "2020-08-27"
});

//Initialize the API with express
import { app } from './server';

const port = process.env.PORT || 3333;
app.listen(port, ()=>{console.log(`Server running`)})
