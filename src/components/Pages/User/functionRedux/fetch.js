import React, { useState, useEffect } from "react";

function fetch() {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((response) => response.json())
      .then((data) => {
        setUsersList(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [users]);

  return <></>;
}

export default fetch;
