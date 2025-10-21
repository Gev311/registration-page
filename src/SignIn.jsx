import { useState } from "react";
export const SignLayout = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signInValue = () => {
        console.log("Username:", username);
        console.log("Password:", password);
    };
    return (
        <div id="SignLayout">
            <div>
                <label>Username </label>
                <input
                    id="usrName"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                />
            </div>
            <div>
                <label>Password </label>
                <input
                    id="usrPass"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={signInValue}>Sign in</button>
            </div>
        </div>

    )
}