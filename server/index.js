require('dotenv').config();
const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const stripe=require("stripe")(process.env.CLE_PRIVE)

app=express();
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());
app.use(cors());

app.post('/stripe/payment',cors(), async (req , res)=>{
   const {id,montant,currency}=req.body;
   try {
        await stripe.paymentIntents.create({
         amount: montant,
         currency: currency,
         payment_method_types: ['card'],
         payment_method:id,
         confirm:true,
       })
       res.status(200).json({
           message:"Payement avec succes",
           success:true
       })
   } catch (error) {
       console.log("erreur:",error)
       res.status(200).json({
        message:"Le Payement à échoué",
        success:false
    })
   }
})
app.listen(process.env.PORT||5500,()=>console.log("serveur on port :",process.env.PORT||5500));