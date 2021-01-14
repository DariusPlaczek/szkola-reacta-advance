import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


function useFetch() {
  const countUsers = useSelector((state) => state.usersCount.usersCount);

  const [{ usersList }, setUsers] = useState({
    usersList: [],
  });

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${countUsers}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers({ usersList: data.results });
      })
      .catch((error) => {
        console.error("NOT LOADING THE DATA");
      });
  }, [setUsers, countUsers]);

  return { usersList };
}

export default useFetch;