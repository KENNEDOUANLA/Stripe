import React from 'react'
import Hearder from '../Heard'

import "./index.css"

export const Success = () =>
{
    return (
        <>
            <Hearder variables={false} />
            <div className="container-green">
                <b>Votre paiement a été effectuer avec succes</b>
            </div>
        </>
    )
}
export const Faille = () =>
{

    return (
        <>
            <Hearder variables={false} />
            <div className="container-red">

                <b>Votre paiement a été annulé</b>
            </div>
        </>
    )
}