import React, { useEffect, useState } from 'react';
import { LOAD_USERS } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';

function GetUser() {
  const [users, setUsers] = useState([]);
  const { data, loading, error } = useQuery(LOAD_USERS);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
    console.log(data);
  }, [data]);

  if (error) {
    console.log(error);
  }

  if (loading) {
    console.log(loading);
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.firstName}</h1>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GetUser;
