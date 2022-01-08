import React from "react";

import "./index.css"

const Produit = ({ item, addpanier, removepanier }) =>
{

    return (
        <div className="produit">
            <img src={item.image} alt="nom" className="image" />
            <div className="description-block">
                <div className="nom-prix">
                    <div>
                        <i>{item.nom}</i><br /><br />
                        <b>{item.prix} €</b>
                    </div>
                    <div className="panier" onClick={item.panier ? () => removepanier(item) : () => addpanier(item)}>
                        <img src={item.panier ? "/corbiele.png" : "/panier.png"} alt="corbiele_panier" />
                        <b>{item.panier ? "Suprimer" : "Ajouter"}</b>
                    </div>
                </div>
                <div className="description">{item.description}</div>
            </div>
        </div>
    );

}

export default Produit;