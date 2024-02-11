import React from "react";
import Input from "../../../components/Forms/Input/Input";
import Button from "../../../components/Forms/Button/Button";
import Error from "../../../components/Error/Error";
import useForm from "../../../hooks/useForm";
import { USER_POST } from "../../../api/api";
import { UserContext } from "../../../contexts/UserContext";
import useFetch from "../../../hooks/useFetch";
import Head from "../../../components/Head/Head";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Criar conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="Username" {...username} />
        <Input label="Email" type="email" name="Email" {...email} />
        <Input label="Senha" type="password" name="Password" {...password} />

        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
