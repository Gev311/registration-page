

export const PersonalInfo = ({ form, errors, onInputChange, handleErrors }) => {
    const ageOptions = Array.from({ length: 80 }, (_, i) => 18 + i);
    return (
        <>
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
                    <option value={""}>Select Your Age</option>
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
            {errors?.genderErr && (
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
        </>
    )
}
