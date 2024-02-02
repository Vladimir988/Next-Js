import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Users.module.scss";

const Users = ({users}) => {
  // ########### default react ###########
  // const [users, setUsers] = useState([]);
  // useEffect(async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data     = await response.json();
  //   setUsers(data);
  // }, []);

  return (
    <div className={styles.main}>
      <Navbar />
      <h1>Users List</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users    = await response.json();

  return {
    props: {users},
  }
}