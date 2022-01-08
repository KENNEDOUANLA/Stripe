import React, { useEffect, useState } from "react";
import { Hearder, Produit } from "../../components";
import { useNavigate, useLocation } from 'react-router-dom';
import "./index.css"


import axios from "axios"
import { useStripe } from "@stripe/react-stripe-js";

const Home = () =>
{
    const navigate = useNavigate();
    const stripe = useStripe();
    const data = useLocation();
    const [montant, setMontant] = useState(data.state ? data.state.montant : 0);
    const [panier, setPanier] = useState(data.state ? data.state.panier : []);
    const [showPanier, setShowPanier] = useState(false);
    const [nombreproduit, setNombre] = useState(0);
    const [items, setItems] = useState([{
        id: -1,
        image: "/logo192.png",
        nom: "logo",
        description: "bbdshfbhbchbscnbsbdbhdsvhsc hdvchchvcdschvsbchcd",
        prix: 140,
        panier: false
    }, {
        id: -1,
        image: "/logo192.png",
        nom: "logo",
        description: "bbdshfbhbchbscnbsbdbhdsvhsc hdvchchvcdschvsbchcd",
        prix: 14050,
        panier: false
    }, {
        id: -1,
        image: "/logo192.png",
        nom: "logo",
        description: "bbdshfbhbchbscnbsbdbhdsvhsc hdvchchvcdschvsbchcd",
        prix: 14050,
        panier: false
    }])

    const LINK = "http://localhost:80/checkout-session"
    useEffect(() =>
    {
        if (data.state && data.state.etat)
            setShowPanier(true)
    }, [data]);

    const add = (item) =>
    {
        setPanier([...panier, item]);
        setMontant(montant + item.prix);
        setNombre(nombreproduit + 1)
    }
    const remove = (item) =>
    {
        panier.splice(item.id, 1);
        setPanier(panier);
        setMontant(montant - item.prix);
        setNombre(nombreproduit - 1)
    }

    const payer = async () =>
    {
        const session = await axios.post(LINK, { montant: montant, number: nombreproduit });
        console.log(session)
        stripe.redirectToCheckout({ sessionId: session.data.id })
    }
    return (
        <div className="contenue">
            <Hearder etat={showPanier} variables={{ montant: montant, panier: panier }} setEtat={setShowPanier} stripe={payer} />
            {showPanier ?
                <div className="all-produit">
                    {panier.map((item, index) => <Produit item={{ ...item, id: index, panier: true }} removepanier={remove} key={`${index}_panier`} />)}
                </div> :
                <div className="all-produit">
                    {items.map((item, index) => <Produit item={{ ...item, id: index }} addpanier={add} key={`${index}_produit`} />)}
                </div>
            }
        </div>);

}

export default Home;