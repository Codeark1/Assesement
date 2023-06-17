
// import React, { useState, useEffect } from 'react';
// const Table = () => {
//   const [data, setData] = useState("table");
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//           throw new Error('Request failed');
//         }
//         const responseData = await response.json();
//         setData(responseData);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData('https://jsonplaceholder.typicode.com/users');
//   }, []);
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//   return (
//     <div>
//       {/* Display the retrieved data */}
//       {data && (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// export default Table;