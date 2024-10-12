"use client";

import { useState } from "react";

// Mock Data
const mockSubmissions = [
  {
    SubmissionID: 1,
    ContestID: 101,
    FreelancerID: 1,
    SubmissionDate: "2024-10-01",
    SubmissionURL: "https://example.com/submission1",
    Rating: 4.5,
    IsWinner: false,
  },
  {
    SubmissionID: 2,
    ContestID: 101,
    FreelancerID: 2,
    SubmissionDate: "2024-10-03",
    SubmissionURL: "https://example.com/submission2",
    Rating: 4.0,
    IsWinner: true,
  },
  {
    SubmissionID: 3,
    ContestID: 102,
    FreelancerID: 3,
    SubmissionDate: "2024-10-05",
    SubmissionURL: "https://example.com/submission3",
    Rating: 3.8,
    IsWinner: false,
  },
];

const SubmissionTable = () => {
  const [submissions, setSubmissions] = useState(mockSubmissions);

  const markAsWinner = (id: number) => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.SubmissionID === id ? { ...sub, IsWinner: true } : sub
      )
    );
  };

  // Consistent date formatting using Intl.DateTimeFormat
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Submission List
      </h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <th className="px-6 py-4 text-left font-semibold">ID</th>
            <th className="px-6 py-4 text-left font-semibold">Freelancer</th>
            <th className="px-6 py-4 text-left font-semibold">Date</th>
            <th className="px-6 py-4 text-left font-semibold">Rating</th>
            <th className="px-6 py-4 text-left font-semibold">Winner</th>
            <th className="px-6 py-4 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {submissions.map((submission) => (
            <tr
              key={submission.SubmissionID}
              className="border-b border-gray-200 hover:bg-gray-100 transition duration-150"
            >
              <td className="px-6 py-4">{submission.SubmissionID}</td>
              <td className="px-6 py-4">{submission.FreelancerID}</td>
              <td className="px-6 py-4">{formatDate(submission.SubmissionDate)}</td>
              <td className="px-6 py-4 font-medium">
                {submission.Rating ? submission.Rating.toFixed(2) : "N/A"}
              </td>
              <td className="px-6 py-4">
                {submission.IsWinner ? (
                  <span className="text-green-500 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </td>
              <td className="px-6 py-4 flex items-center space-x-4">
                <a
                  href={submission.SubmissionURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View
                </a>
                {!submission.IsWinner && (
                  <button
                    onClick={() => markAsWinner(submission.SubmissionID)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-150"
                  >
                    Mark as Winner
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
