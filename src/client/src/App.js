import React, { useState, useEffect } from "react";

const App = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch("/api/welcome")
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            });
    }, []);

    return (
        <div>
            <h1>Hello world!</h1>

            {user.routes.map((users, index) => (
                <div key={index}>
                    <p>{users}</p>
                </div>
            ))}
        </div>
    );
};

export default App;
