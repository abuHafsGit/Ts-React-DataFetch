import { Suspense, useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetachData = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(data)
    }
    fetachData()
  }, []);

  return (
    <Suspense fallback={<p>loding</p>}>
      <div>
        {users?.map((user) => (
          <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
}