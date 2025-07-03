import React from 'react';

function UserDashboard({ onLogout, onSubmitLeave, onSubmitExpense, leaves, expenses, user }) {
  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
      <p>Welcome, {user.name}! (Mark attendance, submit leave or expense requests...)</p>
      
      {/* Leave Request Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Submit Leave Request</h2>
        <form onSubmit={onSubmitLeave} className="bg-gray-100 p-4 rounded shadow-md">
          {/* Form fields for leave request */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Leave Type</label>
            <select name="leaveType" required className="border rounded px-3 py-2 w-full">
              <option value="">Select leave type</option>
              <option value="sick">Sick Leave</option>
              <option value="vacation">Vacation Leave</option>
              <option value="emergency">Emergency Leave</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Start Date</label>
            <input type="date" name="startDate" required className="border rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">End Date</label>
            <input type="date" name="endDate" required className="border rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Reason</label>
            <textarea name="reason" rows="3" required className="border rounded px-3 py-2 w-full"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Leave Request</button>
        </form>
      </div>

      {/* Expense Reimbursement Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Submit Expense Reimbursement</h2>
        <form onSubmit={onSubmitExpense} className="bg-gray-100 p-4 rounded shadow-md">
          {/* Form fields for expense reimbursement */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Expense Type</label>
            <select name="expenseType" required className="border rounded px-3 py-2 w-full">
              <option value="">Select expense type</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="supplies">Supplies</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Amount</label>
            <input type="number" name="amount" required className="border rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date Incurred</label>
            <input type="date" name="dateIncurred" required className="border rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea name="description" rows="3" required className="border rounded px-3 py-2 w-full"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Expense Reimbursement</button>
        </form>
      </div>

      {/* Leave Requests List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">My Leave Requests</h2>
        <ul className="bg-gray-100 rounded-md shadow-md">
          {leaves.map((leave) => (
            <li key={leave.id} className="border-b last:border-b-0 p-4">
              <div className="font-medium">{leave.type} Leave</div>
              <div className="text-sm text-gray-600">
                {leave.startDate} - {leave.endDate}
              </div>
              <div className="text-sm">{leave.reason}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Expense Reimbursements List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">My Expense Reimbursements</h2>
        <ul className="bg-gray-100 rounded-md shadow-md">
          {expenses.map((expense) => (
            <li key={expense.id} className="border-b last:border-b-0 p-4">
              <div className="font-medium">{expense.type} Expense</div>
              <div className="text-sm text-gray-600">
                Amount: ${expense.amount} | Date: {expense.dateIncurred}
              </div>
              <div className="text-sm">{expense.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserDashboard;