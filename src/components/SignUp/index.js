import firebase from "firebase";
import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './signUp.module.scss';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";


export const SignUp = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      
    } catch (error) {
      setError(error.message);
      
    }
  };


  if (Boolean(firebase.auth().currentUser)) {
    return <Redirect to={{ pathname: "/" }} />
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.h2_signin}>Заполните форму ниже для регистрации новой учётной записи.</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input_email}
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            className={styles.input_password}
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error && <p className={styles.error_class}>{error}</p>}
          <Button variant="contained" color="primary" type="submit">Login</Button>

        </div>
        <hr />
        <p>
          Уже есть аккаунт? <Link to="/signin">Sign in</Link>
        </p>
      </form>
    </div>
  );

};