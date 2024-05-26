import { Grid } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loader;
