import {stripe} from "./index";
import Stripe from "stripe";

export async function createStripeCheckoutSession(
    line_items : Stripe.Checkout.SessionCreateParams.LineItem[]
){
    /*
    Example item
    price_data: {
        currency: 'usd',
           product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
        },
        unit_amount: 2000,
    },
    quantity: 1,
    */
    const url = process.env.WEBAPP_URL
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        success_url : `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`
    })
    return session;
}