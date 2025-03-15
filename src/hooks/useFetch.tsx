import { useState, useEffect } from "react";
import JUser from "../models/JUser";

const useFetch = () => {
  const [users, setUsers] = useState<JUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading };
};

export default useFetch;
