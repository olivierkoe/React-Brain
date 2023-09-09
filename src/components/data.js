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
                                // console.log("user", user)
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

    return new Promise((resolve, reject) => {
        const teamsArray = [];
        let requestToDo = 0;
        let requestDone = 0;
        result.json().then(teams => {
            teams.map((team, index) => {
                if (team.user !== undefined) {
                    requestToDo++;
                    fetch("http://localhost:3000" + team.user, {
                        method: "GET", headers: { 'Content-Type': "application/json" }
                    }).then(response => {
                        response.json()
                            .then(user => {
                                // console.log("user", user)
                                resolve(teamsArray)
                                team.user = user;
                                requestDone++;
                                if (requestToDo === requestDone) {
                                    resolve(teamsArray)
                                }
                            })
                    })
                }
                teamsArray.push(team)
                return teams;

            })
            if (requestToDo === requestDone) {
                resolve(teamsArray)
            }
        })
    })
}

//Récupère les utilisateur
// export async function getUsersById(uuid) {
//     const myHeaders = new Headers();
//     const Id = 'BHizd-BtKrfVy8.10htez%2B15E7skjr6vlD1q%2B1z%2FZc6LsG4cB26II8QArk';
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Cookie", "connect.sid=s%3AEAhUyIwP3h4GHFRXy-" + Id);

//     var raw = JSON.stringify({
//         "email": "admin@express-brains.local",
//         "password": "admin"
//     });

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     fetch("http://localhost:3000/api/users", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }

export async function getToken() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "connect.sid=s%3AEAhUyIwP3h4GHFRXy-BHizd-BtKrfVy8.10htez%2B15E7skjr6vlD1q%2B1z%2FZc6LsG4cB26II8QArk");

    var raw = JSON.stringify({
        "email": "admin@express-brains.local",
        "password": "admin"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/api/authentication_token", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export async function PlayGame() {
    // const result = await fetch("http://localhost:3000/api/game")
    // console.log(result);
}
