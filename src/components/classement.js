import React from 'react'

export default function Classement() {
    return (
        <div className='cadrelist'>
            <h1>Le classement</h1>
            <table className='tabequipe'>
                <tr>
                    <tr className='tabtitle'>
                        <th>#</th>
                        <th>Utilisateur</th>
                        <th>Tentatives</th>
                        <th>Temps</th>
                        <th>Nombre à trouver</th>
                    </tr>
                    <tbody>
                        <tr className='tabborder'>
                            <td><th >87083345-000c-4105-ae11-b5ed4554eba8</th></td>
                            <td >James</td>
                            <td >1</td>
                            <td >4 sec</td>
                            <td >? </td>
                        </tr>
                    </tbody>
                </tr>
            </table>
        </div>
    )
}
