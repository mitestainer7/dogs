import React from "react";
import Feed from "../Feed/Feed";
import Head from "../../components/Head/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Visite o nosso site agora mesmo, o site perfeito para ver os dogs mais fofos." />
      <Feed />
    </section>
  );
};

export default Home;
