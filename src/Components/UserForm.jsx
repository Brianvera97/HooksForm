import { useState } from "react";
import styles from "../Components/UserForm.module.css"

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("")
    const [nameError, setNameError] = useState("")
    const [lastname, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");
    const [submittedData, setSubmittedData] = useState(false);

    const handleName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setNameError("");
        } else if (e.target.value.length < 3) {
            setNameError("Name must be 3 characters or longer!");
        } else {
            setNameError('');
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("");
        } else if (e.target.value.length < 3) {
            setLastNameError("Last Name must be 3 characters or longer!");
        } else {
            setLastNameError('');
        }
    }

    const handleEmail= (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError('');
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("");
        } else if (e.target.value.length <= 7) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError('');
        }
    }

    const createUser = (e) => {
        e.preventDefault()

        if (password !== confirmpassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        setError("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        
        

        const newUser = { firstname, lastname, email, password, confirmpassword }
        console.log("welcome", newUser)
        setSubmittedData(newUser);
    }

    const formMessage = () => {
        if (submittedData) {
            return "Thanks you for submitting the form!"
        }
        else {
            return "Welcome, Please submit the form"
        }
    }

    return (
        <div >
            <form onSubmit={createUser} className={styles.inputStyles}>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <h3>{formMessage()}</h3>
                <div className={styles.input}>
                    <label>First Name: </label>
                    <input type="text" onChange={handleName} value={firstname}/>
                    {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> 
                    : ''
                }
                </div>
                <div className={styles.input}>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} value={lastname}/>
                    {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> 
                    : ''
                }
                </div>
                <div className={styles.input}>
                    <label>Email Address: </label>
                    <input type="email" onChange={handleEmail} value={email} />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> 
                    : ''
                }
                </div>
                <div className={styles.input}>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} value={password} />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> 
                    : ''
                }
                </div>
                <div className={styles.input}>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword} />
                </div>
                <input className={styles.submit} type="submit" value="Create User" />
            </form>
            <div className={styles.request}>
                <h2>Your Form Data</h2>
                <p>First Name: {submittedData.firstname}</p>
                <p>Last Name: {submittedData.lastname}</p>
                <p>Email: {submittedData.email}</p>
                <p>Password: password</p>
                <p>Confirm Password: password</p>

            </div>

        </div>
    );
};
export default UserForm
