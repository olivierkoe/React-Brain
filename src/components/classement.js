
import { getRank } from './data'
import React, { useEffect, useState } from "react";

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
                            <th>Joueur</th>
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
                                    <td>{rank['user'] ? rank['user']['nickname'] : 'Anonyme'}</td>
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

