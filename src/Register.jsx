
import { useState } from "react";
import './Register.css';
import { JobExperience } from "./forms/JobExperience";
import { PersonalInfo } from "./forms/PersonalInfo";
import { Passwords } from "./forms/Passwords";
export const Register = ({ onSubmit }) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        phoneNumber: '',
        experience: '',
        primaryFocus: '',
        certificate: '',
        email: '',
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
        emailErr: false,
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
            case 'email':
                newErrors.emailErr = form.email.length < 6;
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


    const handleSubmit = () => {
        const allValid = Object.values(errors).every(err => err === false);
        onSubmit(errors);
    };


    return (
        <div>
            <h2>Registration Form</h2>
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
                <h4>Account Information</h4>
                <Passwords
                    form={form}
                    errors={errors}
                    onInputChange={onInputChange}
                    handleErrors={handleErrors}
                />



                <div className="action">
                    <button onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div >
    )
}
