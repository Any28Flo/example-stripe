import express , {Request, Response} from 'express';
import cors from 'cors';

//Express instance
export const app = express();

app.use( express.json() )

app.use(cors({origin: true}))


app.post('/', (req:Request ,res:Response)=>{
      const {amount} = req.body;
      res.status(200).send({
      with_tax: amount * 7
      })
} )

app.get('/', (req: Request, res: Response)=>{
      res.status(200)
})