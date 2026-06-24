// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// type Query = {
//   id: number;
//   guestName: string;
//   query: string;
//   status: string;
// };

// type QueriesProps = {
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// };

// function Queries({ darkMode, toggleDarkMode }: QueriesProps) {
//   const [queries, setQueries] = useState<Query[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/queries")
//       .then((res) => res.json())
//       .then((data) => {
//         setQueries(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <Navbar
//         darkMode={darkMode}
//         toggleDarkMode={toggleDarkMode}
//       />

//       <main className="max-w-6xl mx-auto p-8">
//         <h1 className="text-4xl font-bold mb-6">
//           Guest Queries
//         </h1>

//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="space-y-4">
//             {queries.map((q) => (
//               <div
//                 key={q.id}
//                 className={
//                   darkMode
//                     ? "bg-gray-800 p-4 rounded-lg"
//                     : "bg-gray-100 p-4 rounded-lg"
//                 }
//               >
//                 <h2 className="font-bold">
//                   {q.guestName}
//                 </h2>

//                 <p>{q.query}</p>

//                 <p className="mt-2">
//                   Status: {q.status}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       <Footer darkMode={darkMode} />
//     </>
//   );
// }

// export default Queries;