import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import {createPaymentIntent} from "./payments";
import {createStripeCheckoutSession} from "./checkout";
//Express instance
export const app = express();

app.use(express.json())

app.use(cors({origin: true}))


app.post('/', (req: Request, res: Response) => {
    const {amount} = req.body;
    res.status(200).send({
        with_tax: amount * 7
    })
})
/*
Checkout
*/
app.post('/checkouts/', runAsync(async ({body}: Request, res: Response) => {
        res.send(
            await createStripeCheckoutSession(body.line_items)
        )
    })
);

function runAsync(callback: Function) {
    return (req: Request, res: Response, next: NextFunction) => {
        callback(req, res, next).catch(next)
    }
}

app.get('/payments', async ({body}: Request, res: Response) => {
    res.send(
        await createPaymentIntent(body.amount)
    )
})

app.get('/', (req: Request, res: Response) => {
    res.status(200)
})