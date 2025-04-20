import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const navigate = useNavigate();

  const fetchPending = () => {
    axios.get('http://localhost:5000/api/alumni/pending', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then(res => setPending(res.data))
      .catch(err => console.error('Error fetching pending:', err));
  };

  const fetchApproved = () => {
    axios.get('http://localhost:5000/api/alumni/approved', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then(res => setApproved(res.data))
      .catch(err => console.error('Error fetching approved:', err));
  };

  const approve = async id => {
    try {
      await axios.put(`http://localhost:5000/api/alumni/approve/${id}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchPending();
      fetchApproved();
    } catch (err) {
      console.error('Error approving:', err);
    }
  };

  const remove = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/alumni/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchPending();
      fetchApproved();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchPending();
      fetchApproved();
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

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
    <div className="p-6 max-w-5xl mx-auto mt-24">

      {/* Header with Logout */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
        >
          Logout
        </button>
      </div>

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
