import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Home } from "..";



const CheckoutForm = () =>
{

    console.log(process.env.REACT_APP_CLE_PUBLIC);
    const stripePromise = loadStripe(process.env.REACT_APP_CLE_PUBLIC);
    return (
        <div>
            <Elements stripe={stripePromise}>
                <Home />
            </Elements>
        </div>
    );
}
export default CheckoutForm;