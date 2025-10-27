import { useState } from "react"

export const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        age: null,
        gender: null,
        phoneNumer: '',
        experience: null,
        primaryFocus: null,
        certificate: null,
        password: '',
        confirmPassword: '',
    });

    return (
        <div>
            <h2>Register Form</h2>
            <div id='form'>

                <div className="form-field">
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" value={form.firstName}></input>
                </div>

                <div className="form-field">
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" value={form.lastName}></input>
                </div>

                <div className="form-field">
                    <label htmlFor="age">Age </label>
                    <select name="age" id="age">
                        <option value="18">18</option>
                    </select>
                </div>


                <div className="form-field">
                    <label htmlFor="gender">Gender </label>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input type="text" value={form.phoneNumer}></input>
                </div>

                <div className="form-field">
                    <label htmlFor="Experience">Experience </label>
                    <input type="number" value={form.experience}></input>
                </div>


                <div className="form-field">
                    <label htmlFor="gender">Gender </label>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value='both'>Both</option>
                    </select>
                </div>

            </div>
        </div>
    )
}