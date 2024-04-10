import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <div className={css.container}>
        <div className={css.user}>
          <div className={css.avatar}>
            <img src={user.avatar} alt={user.name} />
          </div>
          <div className={css.info}>
            <div className={css.name}>{user.name}</div>
            <div className={css.role}>{user.role}</div>
          </div>
        </div>
        <div className={css.actions}>
          <button className={css.button} onClick={() => dispatch(logOut())}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
