import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"

const Hearder = (props) =>
{
    const { payer, variables, etat, setEtat, stripe } = props
    console.log(props);
    const Navigate = useNavigate();
    const [paiement, setPaiement] = useState(payer);

    useEffect(() =>
    {
        console.log(payer, variables);
        if (variables.montant > 0 && payer)
            setPaiement(true);
        else
            setPaiement(false);
    }, [variables, payer]);

    const handelButton = (val) =>
    {
        Navigate("/", { state: { montant: variables.montant, panier: variables.panier, etat: val } });
        if (payer)
            console.log()
        else
            setEtat(val);
    }

    return (
        <div className="header">
            {variables ? <>
                {console.log("icii")}
                <div className="blockGauche"><button disabled={payer ? false : !etat} className={payer ? false : !etat ? "yes" : ""} onClick={() => handelButton(false)}>Home</button></div>
                <div className="clockDroit"> <button disabled={payer ? false : etat} className={payer ? false : etat ? "yes" : ""} onClick={() => handelButton(true)}>Panier</button>
                    <button disabled={paiement} className={`payer-button ${payer ? "yes" : ""}`} onClick={() => stripe()} >Payer {variables.montant} €</button></div>
            </>
                :
                <div className="blockGauche"><button onClick={() => Navigate("/", { state: { montant: 0, panier: [], etat: false } })}>Home</button></div>
            }
        </div>
    );
}

export default Hearder;