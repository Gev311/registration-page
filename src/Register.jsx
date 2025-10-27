import { useState } from "react";
import './Register.css';
export const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        phoneNumber: '',
        experience: '',
        primaryFocus: '',
        certificate: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        firstNameErr: false,
        lastNameErr: false,
        ageErr: false,
        genderErr: false,
        phoneNumberErr: false,
        experienceErr: false,
        primaryFocusErr: false,
        certificateErr: false,
        passwordErr: false,
        confirmPasswordErr: false,
    });
    const handleErrors = (fieldName) => {
        const newErrors = { ...errors };

        switch (fieldName) {
            case 'firstName':
                newErrors.firstNameErr =
                    form.firstName.length < 3
                    || /\d/.test(form.firstName);
                break;
            case 'lastName':
                newErrors.lastNameErr =
                    form.lastName.length < 3
                    || /\d/.test(form.lastName);
                break;
            case 'phoneNumber':
                newErrors.phoneNumberErr =
                    form.phoneNumber.length < 7
                    || !/^\d+$/.test(form.phoneNumber);
                break;
            case 'age':
                newErrors.ageErr =
                    form.age === ''
                    || form.age === '0';
                break;
            case 'gender':
                newErrors.genderErr = form.gender === '';
                break;
            case 'experience':
                newErrors.experienceErr = form.experience.length < 4;
                break;
            case 'primaryFocus':
                newErrors.primaryFocusErr = form.primaryFocus === '';
                break;
            case 'certificate':
                newErrors.certificateErr = form.certificate.length < 4;
                break;
            case 'password':
                newErrors.passwordErr = form.password.length < 8;
                break;
            case 'confirmPassword':
                newErrors.confirmPasswordErr = form.password !== form.confirmPassword;
            default:
                break;
        }

        setErrors(newErrors);
    };
    const onInputChange = (name, value) => {
        setForm({
            ...form,
            [name]: value
        })
    };

    const signInValue = () => {
        console.log("Name:", form.firstName);
        console.log("Surname:", form.lastName);
        console.log("Age:", form.age);
        console.log("Phone Number:", form.phoneNumber)
        console.log("Password:", form.password);
    };
    const ageOptions = Array.from({ length: 80 }, (_, i) => 18 + i);
    return (
        <div>
            <h2>Register Form</h2>
            <div id='form'>
                {/*First name*/}
                <div className="form-field">
                    <label htmlFor="firstName">First Name </label>
                    <input
                        name="firstName"
                        id="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={(e) => onInputChange('firstName', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    >

                    </input>
                    {errors.firstNameErr && (
                        <span>*First Name field is required <div>can't contain any numbers</div></span>
                    )}
                </div>
                {/*Last name*/}
                <div className="form-field">
                    <label htmlFor="lastName">Last Name </label>
                    <input
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={(e) => onInputChange('lastName', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    ></input>
                    {errors.lastNameErr && (
                        <span>*Last Name field is required <div>can't contain any numbers</div></span>
                    )}
                </div>
                {/*Age*/}
                <div className="form-field">
                    <label htmlFor="age">Age </label>
                    <select
                        name="age"
                        id="age"
                        onChange={(e) => onInputChange('age', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    >
                        <option value={"0"}>Select Your Age</option>
                        {ageOptions.map((age, index) => (
                            <option value={age} key={index}>{age}</option>
                        ))}
                    </select>
                </div>
                {errors.ageErr && (
                    <span>*Age is required</span>
                )}

                {/*Gender*/}
                <div className="form-field">
                    <label htmlFor="gender">Gender </label>
                    <select
                        name="gender"
                        id="gender"
                        onChange={(e) => onInputChange('gender', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    >
                        <option>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                {errors.genderErr && (
                    <span>*Gender is required</span>
                )}
                {/*Phone number*/}
                <div className="form-field">
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input
                        name="phoneNumber"
                        type="text"
                        value={form.phoneNumber}
                        onChange={(e) => onInputChange('phoneNumber', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    ></input>
                    {errors.phoneNumberErr && (
                        <span>*Phone number is required, <div>can contain only numbers</div></span>
                    )}
                </div>
                {/*Experience*/}
                <div className="form-field">
                    <label htmlFor="Experience">Experience </label>
                    <input
                        name="experience"
                        type="text"
                        value={form.experience}
                        onChange={(e) => onInputChange('experience', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    ></input>
                    {errors.experienceErr && (
                        <span>*Experience field is required</span>
                    )}
                </div>
                {/*Certificate*/}
                <div className="form-field">
                    <label htmlFor="Certificate">Certificate </label>
                    <input
                        name="certificate"
                        type="text"
                        value={form.certificate}
                        onChange={(e) => onInputChange('certificate', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    ></input>
                    {errors.certificateErr && (
                        <span>*Certificate field is required</span>
                    )}
                </div>
                {/*Primary Focus*/}
                <div className="form-field">
                    <label htmlFor="primaryFocus">Primary Focus </label>
                    <select
                        name="primaryFocus"
                        id="primaryFocus"
                        onChange={(e) => onInputChange('primaryFocus', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}>
                        <option value={''}>Select your primary focus</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value='both'>Both</option>
                    </select>
                </div>
                {errors.primaryFocusErr && (
                    <span>*Please choose primary focus</span>
                )}
                {/*Password*/}
                <div className="form-field">
                    <label htmlFor="password">Password </label>
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={(e) => onInputChange('password', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    ></input>
                    {errors.passwordErr && (
                        <span>*Password field is required</span>
                    )}
                </div>
                {/*Password confirmation*/}
                <div className="form-field">
                    <label htmlFor="confirmPassword">Confirm Password </label>
                    <input
                        name="confirmPassword"
                        type="password"
                        value={form.confirmPassword}
                        onChange={(e) => onInputChange('confirmPassword', e.target.value)}
                        onBlur={(e) => handleErrors(e.target.name)}
                    ></input>
                </div>
                {errors.confirmPasswordErr && (
                    <span>*Passwords do not match</span>
                )}
                <div className="action">
                    <button onClick={signInValue}>Register</button>
                </div>
            </div>
        </div >
    )
}