//Récupère le rang des joueur
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
                return ranks;

            })
            if (requestToDo === requestDone) {
                resolve(ranksArray)
            }
        })
    })
}

//Récupère les équipes.
export async function getTeams() {
    const result = await fetch("http://localhost:3000/api/teams")
    return (new Promise((resolve, reject) => {
        const teamsArray = [];
        let requestToDo = 0;
        let requestDone = 0;
        result.json().then(teams => {
            // console.log(teams)
            teams.forEach((team) => {
                requestToDo += team.members.length;
                team.members.forEach((user, index) => {
                    fetch("http://localhost:3000" + user, {
                        method: "GET", headers: { 'Content-Type': "application/json" }
                    })
                        .then(response => {
                            response.json()
                                .then(u => {
                                    team.members[index] = u;
                                    requestDone++;
                                    if (requestToDo === requestDone) {
                                        resolve(teamsArray)
                                    }
                                })
                        })
                })

                teamsArray.push(team)
                return teams;
            })
            if (requestToDo === requestDone) {
                resolve(teamsArray)
            }
        })
    }))
}

//Récupère le token
export async function getToken(email, password) {
    try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "connect.sid=s%3AEAhUyIwP3h4GHFRXy-BHizd-BtKrfVy8.10htez%2B15E7skjr6vlD1q%2B1z%2FZc6LsG4cB26II8QArk");

        let raw = JSON.stringify({
            "email": email,
            "password": password
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("http://localhost:3000/api/authentication_token", requestOptions);

        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        const result = await response.text();
        const token = JSON.parse(result).access_token;

        return token;

    } catch (error) {
        console.error('Erreur lors de la récupération du token :', error);
        throw error;
    }

    // .then(response => response.text())
    // .then(result => console.log(JSON.parse(result).access_token));
}

export async function getUsers() {
    try {
        let token = ''
        // let cle = getToken("admin@express-brains.local", "admin")
        // console.log(cle)
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        // Vérifiez si la requête HTTP a réussi
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }

        // Analysez la réponse en tant que JSON
        const data = await response.json();
        // console.log(data)
        // Retournez les données analysées
        return data;

    } catch (error) {
        // Gérez les erreurs qui se sont produites pendant la requête ou l'analyse JSON
        console.error('Erreur lors de la récupération des données :', error);
        throw error; // Vous pouvez choisir de gérer l'erreur ou de la propager
    }
}

export async function getToPlay(number) {
    let token = ''

    const response = await fetch("http://localhost:3000/api/game", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        attempt: number
    })

    // Vérifiez si la requête HTTP a réussi
    if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
    }

    // Analysez la réponse en tant que JSON
    const data = await response.json();
    console.log("data", data)
    // Retournez les données analysées
    return data;
}
