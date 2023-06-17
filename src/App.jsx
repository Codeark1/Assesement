import React, { useState, useEffect } from 'react';
const Table = () => {
  const [data, setData] = useState("table");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const respons = await response.json();
      setData(respons);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  //then
  useEffect(() => {  ///
    fetchData();//the fetch api
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>sn</th>
          </tr>
        </thead>
      {data && (
          data.map((items) => (
              <tr>
                <td key={items.id}>{items.username} </td>
                <td key={items.id}>{items.email} </td>
                <td key={items.id}>{items.address[0]} </td>
                <td key={items.id}>{items.phone} </td>
              </tr>
            ))
            )}
            </table>
    </div>
  );
};
export default Table;
      