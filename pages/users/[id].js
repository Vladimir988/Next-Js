import Navbar from "../../components/Navbar";
import styles from "../../styles/User.module.scss";

export default function ({user}) {
  return(
    <div className={styles.main}>
      <Navbar />
      <h1>User with id: {user.id}</h1>
      <p>name: <b>{user.name}</b></p>
      <p>nickname: <b>{user.username}</b></p>
      <p>phone: <b>{user.phone}</b></p>
      <p>website: <b>{user.website}</b></p>
    </div>
  );
};

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user     = await response.json();

  return {
    props: {user},
  }
}