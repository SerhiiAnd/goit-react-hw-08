import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.div}>
        <Navigation className={css.link}></Navigation>
        {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>}
      </div>
    </div>
  );
}
