/*import {loadStripe} from '@stripe/stripe.js';

const stripe = await loadStripe()*/
import {config} from "dotenv";
if(process.env.NODE_ENV !== 'production'){
      config();
}

import Stripe from "stripe";
export const stripe =new Stripe(process.env.STRIPE_KEY, {
      apiVersion: "2020-08-27"
});
