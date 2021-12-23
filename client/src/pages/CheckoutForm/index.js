import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../../components";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";
const CheckoutForm=(props)=>{
    const navigate=useNavigate(); 
    let data = useLocation();
    const CLE_PUBLIC="pk_test_51K7iegDc748qEiqn8Fs3LYnvX5DzecYCXQlIpeD3shVVFf4IWAsZsMTR8nKNy2kthkROAWaLLRjYv9L5G5JD8YVL002cyjrSrc"
    const stripePromise=loadStripe(CLE_PUBLIC);
    
    return(
        <Elements stripe={stripePromise}>
            <PaymentForm navigate={navigate} montant={data.state}/>
        </Elements>
    );
}
export default CheckoutForm;