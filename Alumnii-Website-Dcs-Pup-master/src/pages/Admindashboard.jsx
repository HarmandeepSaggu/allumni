// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function AdminDashboard() {
//   const [pending, setPending] = useState([]);

//   const fetchPending = () => {
//     axios.get('http://localhost:5000/api/alumni/pending')
//       .then(res => setPending(res.data))
//       .catch(err => console.error('Error fetching data:', err));
//   };

//   const approve = async id => {
//     try {
//       await axios.put(`http://localhost:5000/api/alumni/approve/${id}`);
//       fetchPending();
//     } catch (err) {
//       console.error('Error approving:', err);
//     }
//   };

//   const remove = async id => {
//     try {
//       await axios.delete(`http://localhost:5000/api/alumni/${id}`);
//       fetchPending();
//     } catch (err) {
//       console.error('Error deleting:', err);
//     }
//   };

//   useEffect(() => {
//     fetchPending();
//   }, []);

//   return (
//     <div>
//       <h2>Admin Dashboard - Pending Approvals</h2>
//       {pending.length === 0 ? (
//         <p>No pending requests.</p>
//       ) : (
//         pending.map(a => (
//           <div key={a._id} className="border p-4 my-2 rounded-md shadow">
//             <p><strong>Name:</strong> {a.name}</p>
//             <p><strong>Batch:</strong> {a.batch}</p>
//             <p><strong>Class:</strong> {a.class}</p>
//             <img src={a.photo} width={100} alt={`${a.name}'s photo`} />
//             <div className="flex gap-2 mt-2">
//               <button
//                 onClick={() => approve(a._id)}
//                 className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded"
//               >
//                 Approve
//               </button>
//               <button
//                 onClick={() => remove(a._id)}
//                 className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// // import React from 'react';
// // const AdminDashboard = () => {
// //   console.log("Register component rendered!");
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-red-100">
// //       <h1 className="text-4xl font-bold text-black">This is the Register Page</h1>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function AdminDashboard() {
//   const [pending, setPending] = useState([]);
//   const [approved, setApproved] = useState([]);

//   const fetchPending = () => {
//     axios.get('http://localhost:5000/api/alumni/pending')
//       .then(res => setPending(res.data))
//       .catch(err => console.error('Error fetching pending:', err));
//   };

//   const fetchApproved = () => {
//     axios.get('http://localhost:5000/api/alumni/approved')
//       .then(res => setApproved(res.data))
//       .catch(err => console.error('Error fetching approved:', err));
//   };

//   const approve = async id => {
//     try {
//       await axios.put(`http://localhost:5000/api/alumni/approve/${id}`);
//       fetchPending();
//       fetchApproved(); // Refresh approved list too
//     } catch (err) {
//       console.error('Error approving:', err);
//     }
//   };

//   const remove = async id => {
//     try {
//       await axios.delete(`http://localhost:5000/api/alumni/${id}`);
//       fetchPending();
//       fetchApproved();
//     } catch (err) {
//       console.error('Error deleting:', err);
//     }
//   };

//   useEffect(() => {
//     fetchPending();
//     fetchApproved();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

//       {/* Pending Section */}
//       <section className="mb-8">
//         <h3 className="text-xl font-semibold mb-2">Pending Approvals</h3>
//         {pending.length === 0 ? (
//           <p>No pending requests.</p>
//         ) : (
//           pending.map(a => (
//             <div key={a._id} className="border p-4 my-2 rounded-md shadow">
//               <p><strong>Name:</strong> {a.name}</p>
//               <p><strong>Batch:</strong> {a.batch}</p>
//               <p><strong>Class:</strong> {a.class}</p>
//               <img src={a.photo} width={100} alt={`${a.name}'s photo`} />
//               <div className="flex gap-2 mt-2">
//                 <button
//                   onClick={() => approve(a._id)}
//                   className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded"
//                 >
//                   Approve
//                 </button>
//                 <button
//                   onClick={() => remove(a._id)}
//                   className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </section>

//       {/* Approved Section */}
//       <section>
//         <h3 className="text-xl font-semibold mb-2">Approved Alumni</h3>
//         {approved.length === 0 ? (
//           <p>No approved alumni yet.</p>
//         ) : (
//           approved.map(a => (
//             <div key={a._id} className="border p-4 my-2 rounded-md shadow">
//               <p><strong>Name:</strong> {a.name}</p>
//               <p><strong>Batch:</strong> {a.batch}</p>
//               <p><strong>Class:</strong> {a.class}</p>
//               <img src={a.photo} width={100} alt={`${a.name}'s photo`} />
//               <div className="flex gap-2 mt-2">
//                 <button
//                   onClick={() => remove(a._id)}
//                   className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </section>
//     </div>
//   );
// }




import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);

  const fetchPending = () => {
    axios.get('http://localhost:5000/api/alumni/pending')
      .then(res => setPending(res.data))
      .catch(err => console.error('Error fetching pending:', err));
  };

  const fetchApproved = () => {
    axios.get('http://localhost:5000/api/alumni/approved')
      .then(res => setApproved(res.data))
      .catch(err => console.error('Error fetching approved:', err));
  };

  const approve = async id => {
    try {
      await axios.put(`http://localhost:5000/api/alumni/approve/${id}`);
      fetchPending();
      fetchApproved();
    } catch (err) {
      console.error('Error approving:', err);
    }
  };

  const remove = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/alumni/${id}`);
      fetchPending();
      fetchApproved();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  useEffect(() => {
    fetchPending();
    fetchApproved();
  }, []);

  const renderAlumniCard = (a, isPending) => (
    <div key={a._id} className="border p-4 my-3 rounded-lg shadow-md">
      <img src={a.photo} alt={a.name} className="w-24 h-24 object-cover rounded-full mb-4" />
      <p><strong>Name:</strong> {a.name}</p>
      <p><strong>Father's Name:</strong> {a.fathername}</p>
      <p><strong>Email:</strong> {a.email}</p>
      <p><strong>Phone:</strong> {a.phone}</p>
      <p><strong>Course:</strong> {a.course}</p>
      <p><strong>Batch:</strong> {a.batch}</p>
      <p><strong>Address:</strong> {a.address}</p>
      <p><strong>LinkedIn:</strong> <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">{a.linkedin}</a></p>
      <p><strong>Profession:</strong> {a.profession}</p>
      <p><strong>Organization:</strong> {a.organization}</p>
      <p><strong>Website:</strong> <a href={a.website} target="_blank" rel="noopener noreferrer" className="text-blue-600">{a.website}</a></p>
      <p><strong>Skills:</strong> {a.skills?.join(', ')}</p>
      {a.otherSkill && <p><strong>Other Skill:</strong> {a.otherSkill}</p>}
      <p><strong>Session Consent:</strong> {a.sessionConsent}</p>

      <div className="flex gap-2 mt-4">
        {isPending && (
          <button
            onClick={() => approve(a._id)}
            className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded"
          >
            Approve
          </button>
        )}
        <button
          onClick={() => remove(a._id)}
          className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      {/* Pending Alumni Section */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Pending Approvals</h3>
        {pending.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          pending.map(a => renderAlumniCard(a, true))
        )}
      </section>

      {/* Approved Alumni Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Approved Alumni</h3>
        {approved.length === 0 ? (
          <p>No approved alumni yet.</p>
        ) : (
          approved.map(a => renderAlumniCard(a, false))
        )}
      </section>
    </div>
  );
}





