import React, { useState, useEffect } from "react";
import DisplayError from "./Error";
import Loading from "./Loading";
import UserInfo from "./UserInfo";

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.example.com/users/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const userData = await response.json();
                setUser(userData);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, [userId]);

    if (error) {
        return <DisplayError/>
    }

    if (!user) {
        return <Loading />
    }

    return (
        <UserInfo
            name={user.name}
            email={user.email}
        />
    );
};

export default UserProfile