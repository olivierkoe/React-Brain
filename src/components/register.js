import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom : </label>
                <input value={name} placeholder="Votre nom" id="name" name="name" />
                <label htmlFor="email">Email : </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Votre email" id="email" name="email" />
                <label htmlFor="password">Mot de passe : </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="*******" id="password" name="password" />
                <button type="submit">Connection</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Déjà inscrit? Connecter vous à votre compte ici</button>
        </div>
    )
}