import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
    const handleName = () => {
        alert(props.fullName);
    };

    return (
        <div>
            <h1 style={{ color: "#4682B4", fontSize: 25 }}>
                Here are your personal informations:
            </h1>
            <p
                style={{
                    color: "brown",
                    fontFamily: "verdana",
                    fontSize: 20,
                }}
            >
                .\ Name: {props.fullName} <br />
                .\ Bio: {props.bio}
                <br />
                .\ Profession: {props.profession} <br />
                .\ Profil image : <br /> {props.children} <br />
                <a href="/" onClick={handleName}>
                    button
                </a>
            </p>
        </div>
    );
};
Profile.defaultProps = {
    fullName: "undefined person",
    profession: "undefined profession",
    bio: "undefined bio",
};
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func,
};
export default Profile;
