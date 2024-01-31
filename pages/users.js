import {useState} from "react";
import Link from "next/link";

const Users = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'Vasja'},
    {id: 2, name: 'Petja'},
    {id: 3, name: 'Kolja'},
  ]);
  return (
    <div>
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