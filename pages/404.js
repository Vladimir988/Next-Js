import styles from "../styles/404.module.scss";
import MyHead from "../components/MyHead";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div className={styles['not-found-dark']}>
      <MyHead keywords="next-js-keywords" title="404 not found" />
      <Navbar dark="dark" />
      <div className={styles['not-found-wrap']}>
        <div className={styles['not-found-inner']}>
          <h1 className={styles['not-found-h1']}>404</h1>
          <div className={styles['not-found-h2-wrap']}>
            <h2 className={styles['not-found-h2']}>This page could not be found.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;