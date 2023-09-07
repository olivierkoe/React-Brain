// import React, { Component } from 'react'

export async function getRank() {
    const result = await fetch("http://localhost:3000/api/rank")
    return new Promise((resolve, reject) => {
        const ranksArray = [];
        let requestToDo = 0;
        let requestDone = 0;
        result.json().then(ranks => {
            ranks.map((rank, index) => {
                if (rank.user !== undefined) {
                    requestToDo++;
                    fetch("http://localhost:3000" + rank.user, {
                        method: "GET", headers: { 'Content-Type': "application/json" }
                    }).then(response => {
                        response.json()
                            .then(user => {
                                console.log("user", user)
                                resolve(ranksArray)
                                rank.user = user;
                                requestDone++;
                                if (requestToDo === requestDone) {
                                    resolve(ranksArray)
                                }
                            })
                    })
                }
                ranksArray.push(rank)
            })
            if (requestToDo === requestDone) {
                resolve(ranksArray)
            }
            
        })
    })
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