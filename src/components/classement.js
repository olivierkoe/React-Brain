
import { getRank } from './data'
import React, {useEffect, useState} from "react";
// import { json } from "react-router-dom";
// fetch("http://localhost:3000/api/rank").then(response => { response.json().then(data => console.log(data)) })

// const rank = rank.map(getRank());
// console.log(rank);

export const Classement = () => {

    const [ranks, setRanks] = useState([]);

    useEffect(() => {
        getRank().then(ranks => {
            setRanks(ranks);
        })
    }, []);
    return (
        <>
            <div className='cadrelist'>
                <h1>Le classement</h1>
                <table className='tabequipe'>
                    <thead>
                        <tr className='tabtitle'>
                            <th>#</th>
                            <th></th>
                            <th>Tentatives</th>
                            <th>Temps</th>
                            <th>Nombre à trouver</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranks.map((rank, index) => {
                            return (
                            <tr className='tabborder' key={index}>
                                <td>{rank['uuid']}</td>
                                <td>{rank['user'] ? rank['user']['nickname']: 'Anonyme'}</td>
                                <td>{rank['attempts']}</td>
                                <td>{rank['time']} sec</td>
                                <td>? </td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}



// fetch("http://localhost:3000/api/authentication_token", {
//     method: "POST", body: JSON.stringify({
//         email: "admin@express-brains.local",
//         password: "admin"
//     }), headers: { 'Content-Type': "application/json" }
// }).then(response => response.json().then(data => console.log(data)));



// export default function UserList() {

//     return (
//         <>
//             <div className='cadrelist'>
//                 <h1>Le classement</h1>
//                 <table className='tabequipe'>
//                     <tr>
//                         <tr className='tabtitle'>
//                             <th>#</th>
//                             <th>Utilisateur</th>
//                             <th>Tentatives</th>
//                             <th>Temps</th>
//                             <th>Nombre à trouver</th>
//                         </tr>
//                         <tbody>
//                             <tr className='tabborder'>
//                                 <td><th >87083345-000c-4105-ae11-b5ed4554eba8</th></td>
//                                 <td >James</td>
//                                 <td >1</td>
//                                 <td >4 sec</td>
//                                 <td >? </td>
//                             </tr>
//                         </tbody>
//                     </tr>
//                 </table>
//             </div>
//         </>
//     )
// }

