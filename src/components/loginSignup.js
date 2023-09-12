import React, { useState } from 'react';
import Buste from "../assets/logos/buste.jpg";
import Enveloppe from "../assets/logos/enevloppe.png";
import Cadena from "../assets/logos/cadena.jpg";

export const LoginSignup = () => {

    const [action, setAction] = useState("Inscription");


    return (
        <>
            <div className="card">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Se connecter" ? <div></div> : <div className="input">
                        <img src={Buste} alt="logo for Name" />
                        <input type="text" placeholder='Nom' />
                    </div>}

                    <div className="input">
                        <img src={Enveloppe} alt="logo enveloppe" />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="input">
                        <img src={Cadena} alt="logo cadena" />
                        <input type="password" placeholder='Mot de passe' />
                    </div>
                </div>
                {action === "Inscription" ? <div></div> : <div className="forget-password">Mot de passe oublier? <span>C'est ici!</span></div>}
                <div className="submit-container">
                    <div className={action === "Se connecter" ? "submit gray" : "submit"} onClick={() => { setAction("Inscription") }}>Inscription</div>
                    <div className={action === "Inscription" ? "submit gray" : "submit"} onClick={() => { setAction("Se connecter") }}>Se connecter</div>
                </div>
            </div>
        </>
    )
}
