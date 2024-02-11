import React from "react";
import styles from "./UserHeaderNav.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import MinhasFotos from "../../../assets/feed.svg?react";
import Estatisticas from "../../../assets/estatisticas.svg?react";
import AdicionarFoto from "../../../assets/adicionar.svg?react";
import Sair from "../../../assets/sair.svg?react";
import useMedia from "../../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const {pathname} = useLocation()
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/statistics">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/post">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
