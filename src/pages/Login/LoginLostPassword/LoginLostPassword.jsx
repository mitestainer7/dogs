import React from "react";
import Input from "../../../components/Forms/Input/Input";
import Button from "../../../components/Forms/Button/Button";
import Error from "../../../components/Error/Error";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { LOST_PASSWORD } from "../../../api/api";
import Head from "../../../components/Head/Head";

const LoginLostPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email ou Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginLostPassword;
