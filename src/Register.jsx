
import { useState } from "react";
import './Register.css';
import { JobExperience } from "./forms/JobExperience";
import { PersonalInfo } from "./forms/PersonalInfo";
import { Passwords } from "./forms/Passwords";
// import { PersonalInfo } from "./forms/PersonalInfo";
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
                newErrors.ageErr = form.age === ''
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
    return (
        <div>
            <h2>Register Form</h2>
            <div id='form'>
                <h4>Personal Information</h4>
                <PersonalInfo
                    form={form}
                    errors={errors}
                    onInputChange={onInputChange}
                    handleErrors={handleErrors}
                />
                <h4>Professional Information</h4>
                <JobExperience
                    form={form}
                    errors={errors}
                    onInputChange={onInputChange}
                    handleErrors={handleErrors}
                />
                <h4>Passwords</h4>
                <Passwords
                    form={form}
                    errors={errors}
                    onInputChange={onInputChange}
                    handleErrors={handleErrors}
                />



                <div className="action">
                    <button onClick={signInValue}>Register</button>
                </div>
            </div>
        </div >
    )
}
