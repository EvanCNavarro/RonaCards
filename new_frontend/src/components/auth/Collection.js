import React from "react";

export default function Collection() {
        var userData;
        fetch('http://www.rona.cards:4000/users/', {
                        method: "GET",
                        headers: {
                                "x-auth-token": localStorage.getItem("auth-token")
                        }
                })
                .then(res => res.json())
                .then(data => userData = data)
                .then(() => console.log(userData));
        return (
                <div className = "page">
                        <h2>Collection</h2>
                        <h2> -break- </h2>
                        <h2> -break- </h2>
                </div>
        );
}
