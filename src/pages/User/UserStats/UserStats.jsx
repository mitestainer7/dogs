import React from "react";
import styles from "./UserStats.module.css";
import Head from "../../../components/Head/Head";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import { GET_STATS } from "../../../api/api";
const UserStatsGraphs = React.lazy(() => import("../UserStatsGraphs/UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getStats() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getStats();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
