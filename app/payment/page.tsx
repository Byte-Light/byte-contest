"use client";

import { useState } from "react";

// Mock Payment Data
const mockPayments = [
  {
    PaymentID: 1,
    ContestID: 101,
    FreelancerID: 1,
    Amount: 500.0,
    PaymentDate: "2024-10-01",
  },
  {
    PaymentID: 2,
    ContestID: 102,
    FreelancerID: 2,
    Amount: 300.75,
    PaymentDate: "2024-10-05",
  },
  {
    PaymentID: 3,
    ContestID: 103,
    FreelancerID: 3,
    Amount: 1000.5,
    PaymentDate: "2024-10-10",
  },
];

const PaymentTable = () => {
  const [payments] = useState(mockPayments);

  // Format date using Intl.DateTimeFormat
  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Payment Details
      </h2>
      <table className="w-full table-auto">
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Payment ID</th>
            <th className="px-6 py-4 text-left font-semibold">Contest ID</th>
            <th className="px-6 py-4 text-left font-semibold">Freelancer ID</th>
            <th className="px-6 py-4 text-left font-semibold">Amount (USD)</th>
            <th className="px-6 py-4 text-left font-semibold">Payment Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {payments.map((payment) => (
            <tr
              key={payment.PaymentID}
              className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <td className="px-6 py-4">{payment.PaymentID}</td>
              <td className="px-6 py-4">{payment.ContestID}</td>
              <td className="px-6 py-4">{payment.FreelancerID}</td>
              <td className="px-6 py-4 font-medium text-green-600">
                ${payment.Amount.toFixed(2)}
              </td>
              <td className="px-6 py-4">{formatDate(payment.PaymentDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
