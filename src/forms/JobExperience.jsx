export const JobExperience = ({ form, errors, onInputChange, handleErrors }) => {
    return (
        <>
            {/* Experience Field */}
            <div className="form-field">
                <label htmlFor="experience">Experience</label>
                <input
                    name="experience"
                    type="text"
                    value={form.experience}
                    onChange={(e) => onInputChange("experience", e.target.value)}
                    onBlur={(e) => handleErrors(e.target.name)}
                />
                {errors.experienceErr && (
                    <span>*Experience field must be at least 4 characters</span>
                )}
            </div>

            {/* Certificate Field */}
            <div className="form-field">
                <label htmlFor="certificate">Certificate</label>
                <input
                    name="certificate"
                    type="text"
                    value={form.certificate}
                    onChange={(e) => onInputChange("certificate", e.target.value)}
                    onBlur={(e) => handleErrors(e.target.name)}
                />
                {errors.certificateErr && (
                    <span>*Certificate field must be at least 4 characters</span>
                )}
            </div>

            {/* Primary Focus */}
            <div className="form-field">
                <label htmlFor="primaryFocus">Primary Focus</label>
                <select
                    name="primaryFocus"
                    value={form.primaryFocus}
                    onChange={(e) => onInputChange("primaryFocus", e.target.value)}
                    onBlur={(e) => handleErrors(e.target.name)}
                >
                    <option value="">Select your primary focus</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="both">Both</option>
                </select>
                {errors.primaryFocusErr && (
                    <span>*Please choose your primary focus</span>
                )}
            </div>
        </>
    );
};