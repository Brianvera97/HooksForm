import { useState } from "react";
import styles from "../Components/UserForm.module.css"

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const createUser = (e) => {
        e.preventDefault()

        if (password !== confirmpassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        setError("")

        const newUser = { firstname, lastname, email, password, confirmpassword }
        console.log("welcome", newUser)
        setSubmittedData(newUser);


    }
    return (
        <div >
            <form onSubmit={createUser} className={styles.inputStyles}>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <div className={styles.input}>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <label>Email Address: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <input className={styles.submit}type="submit" value="Create User" />
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
