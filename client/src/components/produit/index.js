import React from "react";

import "./index.css"

const Produit=({item,addpanier,removepanier})=>{

    return (
    <div className="produit">
         <img src={item.image} alt="nom"/>
         <div className="nom-prix">
             <i>{item.nom}</i>
             <b>{item.prix}</b>
             <i className="description">{item.description}</i>
         </div>
         <div className="panier" onClick={item.panier? ()=>removepanier(item):()=>addpanier(item)}>
             <img src={item.panier?"/corbiele.png":"/panier.png"}  alt="corbiele_panier"/>
             <b>{item.panier?"Suprimer": "Ajouter"}</b>
         </div>

        
    </div>
    );

}

export default Produit;