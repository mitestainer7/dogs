import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import LoginForm from "./LoginForm/LoginForm";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginLostPassword from "./LoginLostPassword/LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword/LoginResetPassword";
import styles from "./Login.module.css";
import NotFound from "../NotFound/NotFound";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginLostPassword />} />
          <Route path="reset" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
