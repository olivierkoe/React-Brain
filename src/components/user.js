// import PropTypes from "prop-types";

export default function User({ user }) {
    // const { _id, nickname, email, password, role, uuid } = user;

    return (
        <div className="user">
            <h1 className="userCard">Profil joueur</h1>
            {/* <p className="userId">id : {_id}</p>
            <p className="userPseudo">Pseudo : {nickname}</p>
            <p className="userDesc">Email : {email}</p>
            <p className="userpassword">password : {password}</p>
            <p className="userrole">Role : {role}</p>
            <p className="useruuid">uuid : {uuid}</p> */}
        </div>
    )
}

// User.propTypes = {
//     user: PropTypes.object
// }