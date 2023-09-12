import React, { useEffect, useState } from "react";
import { getTeams } from './data'

export const Equipes = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeams().then(teams => {
            setTeams(teams);
        });
    }, []);

    console.log(teams);

    return (
        <div className='cadrelist'>
            <h1>liste des équipes</h1>
            <table className='tabequipe'>
                <thead>
                    <tr className='tabtitle'>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Membres</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, i) => {
                        // console.log(teams);
                        return (

                            <tr key={i} className='tabborder'>
                                <td>{team['uuid']}</td>
                                <td>{team['name']}</td>
                                <td>{team.members['']}</td>
                                {team.members.map((user, index) => {
                                    // console.log(user);
                                    return (
                                        <td key={index}>{user.nickname}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

