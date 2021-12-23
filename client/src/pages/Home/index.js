import React, { useState } from "react";
import { Produit } from "../../components";
import { Link, useNavigate } from 'react-router-dom';

const Home=()=>{
    const navigate=useNavigate();
    const [montant,setMontant]=useState(0);
    const[panier,setPanier]=useState([]);
    const[showPanier,setShowPanier]=useState(false);
    const [items,setItems]=useState([{
        id:-1,
        image:"/logo192.png",
        nom:"logo",
        description:"bbdshfbhbchbscnbsbdbhdsvhsc hdvchchvcdschvsbchcd",
        prix:140,
        panier:false
    },{
        id:-1,
        image:"/logo192.png",
        nom:"logo",
        description:"bbdshfbhbchbscnbsbdbhdsvhsc hdvchchvcdschvsbchcd",
        prix:14050,
        panier:false
    }])

    const add=(item)=>{
        setPanier([...panier,item]);
        setMontant(montant+item.prix);
    }
    const remove=(item)=>{
        panier.splice(item.id,1);
        setPanier(panier);
        setMontant(montant-item.prix);
    }

    return (
    <div>
        {showPanier?
        <div>
        panier
        {panier.map((item,index)=><Produit item={{...item,id:index,panier:true}} removepanier={remove} key={`${index}_panier`} />)}
        {montant}<br/>
        <button onClick={()=>setShowPanier(false)}>Back</button>
        </div>:
        <div>
        home
        {items.map((item,index)=><Produit item={{...item,id:index}} addpanier={add} key={`${index}_produit`} />)}
        {montant}<br/>
        <button onClick={()=>setShowPanier(true)}>Panier</button>
        </div>
        }
        <button onClick={()=>navigate("payment",{state:montant})} disabled={montant===0?true:false} >Payer</button>
    </div>);

}

export default Home;