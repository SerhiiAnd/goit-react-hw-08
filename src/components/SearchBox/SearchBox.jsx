import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
// import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { nanoid } from "nanoid";
import { changeFilter } from "../../redux/filters/slice";

import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const id = nanoid();
  const value = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        value={value}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        id={id}
        className={css.input}
      ></input>
    </div>
  );
}
