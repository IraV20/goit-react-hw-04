import toast from "react-hot-toast";
import { MdImageSearch } from "react-icons/md";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userValue = form.elements.userValue.value.trim();

    if (!userValue) {
      toast.error("You must type something to search.");
      return;
    }

    onSubmit(userValue);

    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputContainer}>
          <MdImageSearch className={css.icon} size="26" />

          <input
            name="userValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
