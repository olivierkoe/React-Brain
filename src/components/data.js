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
        // console.log(teamsArray)
        let requestToDo = 0;
        let requestDone = 0;
        result.json().then(teams => {
            // console.log(teams)
            teams.forEach((team, index) => {
                // console.log(team.members)
                requestToDo += team.members.length;
                team.members.forEach(user => {
                    fetch("http://localhost:3000" + user, {
                        method: "GET", headers: { 'Content-Type': "application/json" }
                    })
                        .then(response => {
                            response.json()
                                .then(u => {
                                    console.log(u)
                                    team.members[index] = u;
                                    requestDone++;
                                    if (requestToDo === requestDone) {
                                        // console.log(teamsArray)
                                        resolve(teamsArray)
                                    }
                                })
                        })
                })

                teamsArray.push(team)
                return teams;

            })
            // if (requestToDo === requestDone) {
            //     resolve(teamsArray)
            // }
        })
    }))
}

export async function getToken(email, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "connect.sid=s%3AEAhUyIwP3h4GHFRXy-BHizd-BtKrfVy8.10htez%2B15E7skjr6vlD1q%2B1z%2FZc6LsG4cB26II8QArk");

    var raw = JSON.stringify({
        "email": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/api/authentication_token", requestOptions)
        .then(response => response.text())
        .then(result => console.log(JSON.parse(result).access_token));
}

export async function getUsers(token) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjVlY2M2YzJhYTAwYWEzZTg2OThhOCIsImVtYWlsIjoiYWRtaW5AZXhwcmVzcy1icmFpbnMubG9jYWwiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTQ1MjAwMTcsImV4cCI6MTY5NDUzMDgxN30.S9PiTQJDhDaPTiBEVdyJ7Jdu0mpnU0ZjVzx8pNynJOg");
    myHeaders.append("Cookie", "connect.sid=s%3ARkZ3pSdrTEwa7dG0SHFQofl6ngTy3PjE.6AzDoch%2BTzeee2PBfYAN7sunW3sSyCy3pE46YBcNiAg");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/api/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

export async function getUsersById(id) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjVlY2M2YzJhYTAwYWEzZTg2OThhOCIsImVtYWlsIjoiYWRtaW5AZXhwcmVzcy1icmFpbnMubG9jYWwiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTQ1MjAwMTcsImV4cCI6MTY5NDUzMDgxN30.S9PiTQJDhDaPTiBEVdyJ7Jdu0mpnU0ZjVzx8pNynJOg");
    myHeaders.append("Cookie", "connect.sid=s%3ARkZ3pSdrTEwa7dG0SHFQofl6ngTy3PjE.6AzDoch%2BTzeee2PBfYAN7sunW3sSyCy3pE46YBcNiAg");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/api/users/" + id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}