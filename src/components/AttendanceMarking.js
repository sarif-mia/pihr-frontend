import React from 'react';

// Attendance marking component
function AttendanceMarking({ onMark, attendance, user }) {
  const today = new Date().toISOString().slice(0, 10);
  const alreadyMarked = attendance.some(a => a.user === user && a.date === today);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Attendance</h2>
      {alreadyMarked ? (
        <div className="text-green-600">Attendance marked for today!</div>
      ) : (
        <button onClick={() => onMark({ user, date: today })} className="bg-blue-500 text-white px-4 py-2 rounded">Mark Attendance</button>
      )}
      <ul className="mt-4">
        {attendance.filter(a => a.user === user).map((a, i) => (
          <li key={i} className="text-gray-700">{a.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceMarking;