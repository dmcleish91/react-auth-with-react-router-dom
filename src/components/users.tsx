import { useState } from 'react';

type User = {
  name: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  return (
    <article>
      <h2>Users List</h2>
      {users.length ? (
        <ul>
          {users.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          })}
        </ul>
      ) : (
        <p>No users</p>
      )}
    </article>
  );
}
