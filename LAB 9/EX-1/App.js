import React from "react";

function StudentProfile() {
  const name = "Sreeram Siddardha";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "A";

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Profile</h1>

      <div className="space-y-2">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Section:</strong> {section}</p>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <StudentProfile />
    </div>
  );
}
