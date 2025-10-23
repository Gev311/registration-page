import { useState } from "react";
export const SignLayout = () => {
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [age, setAge] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [eMail, setEmail] = useState("");

    const signInValue = () => {
        console.log("Name:", name);
        console.log("Surname:", surName);
        console.log("Age:", age);
        console.log("Username:", username);
        console.log("Password:", password);
    };
    return (
        <div id="SignLayout">
            <div className="form-card">
                <div id="header">
                    <h1>Sign in</h1>
                </div>
                <div>
                    <label>Name </label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                </div>
                <div>
                    <label>Surname </label>
                    <input
                        id="surname"
                        value={surName}
                        onChange={(e) => setSurName(e.target.value)}

                    />
                </div>
                <div>
                    <label>Age </label>
                    <select
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    >
                        <option value="">-- Select Age --</option>
                        {Array.from({ length: 83 }, (_, i) => i + 18).map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>eMail </label>
                    <input
                        id="email"
                        value={eMail}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
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
        </div>

    )
}