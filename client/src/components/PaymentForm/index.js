import React, { useState } from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import "./index.css"
import axios from "axios"

const PaymentForm=({navigate,montant})=>{

   const Currencies=["EUR","USD","CFA"]
   const [Info,setInfo]=useState({
       montant:montant,
       currency:"EUR"
   });
   const[Retour,setRetour]=useState({
        succes:"",
        error:""
   });
    const stripe=useStripe();
    const elements=useElements();
    const LINK="http://localhost:5500/stripe/payment"
    
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setRetour({ succes:"",error:""});
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement(CardElement),
        });
        if(!error){
            console.log("Token genere:",paymentMethod);

            try {
                const {id}=paymentMethod;
                 const response=await axios.post(LINK,{
                     montant:Info.montant * 100,
                     currency:Info.currency,
                     id:id
                 });
                 if (response.data.success)
                    setRetour({ succes:response.data.message,error:""});
                 else
                    setRetour({ succes:"",error:response.data.message});
                    
            } catch (error) {
                console.log("error:",error);
            }

        }else{
            console.log("error",error);
        }

    }

    return(
        <div className ="container">
        <form onSubmit={handleSubmit} className="form">
            <b className="erreur">{Retour.error}</b>
            <div className="montant" >
            <b> {Info.montant} </b>    
            <select onChange={(e)=>setInfo({...Info,currency:e.target.value})}>
                {Currencies.map((currency)=><option key={currency}>{currency}</option>)}
            </select>
            </div>
            <CardElement options={{hidePostalCode:true}} />
            <input type="submit" value="PAYER" className="submit"  disabled={!stripe}/>
            <div className="succes-block"><b className="success">{Retour.succes}</b> <button className="home" onClick={()=>navigate("/")} >HOME</button></div>
            </form>
            
        
        </div>
    )
}
export default PaymentForm;