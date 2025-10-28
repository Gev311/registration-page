export const Passwords = ({ form, errors, onInputChange, handleErrors }) => {
    return (
        <>
            {/*Email*/}
            <div className="form-field">
                <label htmlFor="email">Email </label>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => onInputChange('email', e.target.value)}
                    onBlur={(e) => handleErrors(e.target.name)}
                ></input>
                {errors.emailErr && (
                    <span>*Email field is required</span>
                )}
            </div>
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
        </>
    )
}