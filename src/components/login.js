import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email : </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Votre email ici" id="email" name="email" />
                <label htmlFor="password">Mot de passe : </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="*******" id="password" name="password" />
                <button type="submit">Connection</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Pas encore inscrit? Créer votre compte ici</button>
        </div>
    )
}
