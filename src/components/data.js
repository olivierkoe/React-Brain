// import React, { Component } from 'react'

export async function getRank() {
    const result = await fetch("http://localhost:3000/api/rank")
        // .then(response => {
        //     response.json()
        //         .then(data => {
        //             console.log("data", data)
        //         })
    
    return result.json()
}

// function renderToken(data) {
//     const setup = document.getElementById("setup");
//     const punchline = document.getElementById("punchline");
//     setup.innerHTML = data.setup;
//     punchline.innerHTML = data.punchline;
//   }

export async function getToken() {
    fetch("http://localhost:3000/api/authentication_token", {
        method: "POST", body: JSON.stringify({
            email: "admin@express-brains.local",
            password: "admin"
        }), headers: { 'Content-Type': "application/json" }
    })
        .then(response => response.json()
            .then(data => console.log(data)))
}