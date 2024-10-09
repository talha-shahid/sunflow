
import { useState } from 'react';

const CreateIssueForm = () => {
  const [isElectrical, setIsElectrical] = useState(false);
  const [isHub, setIsHub] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-red-500">Create an Issue</h2>
        <p className="text-sm text-gray-500">Last updated on 09.08.2022 04:03 am</p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#FF5722] focus:border-[#FF5722] p-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Priority</label>
          <select className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#FF5722] focus:border-[#FF5722] p-2">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">DC Switch Status</label>
          <select className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#FF5722] focus:border-[#FF5722] p-2">
            <option>On</option>
            <option>Off</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Status</label>
          <select className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#FF5722] focus:border-[#FF5722] p-2">
            <option>Open</option>
            <option>Closed</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Repair Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#FF5722] focus:border-[#FF5722] p-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Time Estimate Hours</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#FF5722] focus:border-[#FF5722] p-2"
          />
        </div>

        {/* Electrical Switch */}
        <div className="flex items-center mt-6">
          <span className="text-gray-700 mr-4">Electrical</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isElectrical}
              onChange={() => setIsElectrical(!isElectrical)}
              className="sr-only"
            />
            <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner transition duration-200 ease-in-out">
              <span
                className={`absolute left-0 top-0 w-6 h-6 bg-[#FF5722] rounded-full transition-transform duration-200 ease-in-out ${
                  isElectrical ? 'transform translate-x-6' : ''
                }`}
              ></span>
            </div>
          </label>
        </div>

        {/* Hub Switch */}
        <div className="flex items-center mt-6">
          <span className="text-gray-700 mr-4">Hub</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isHub}
              onChange={() => setIsHub(!isHub)}
              className="sr-only"
            />
            <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner transition duration-200 ease-in-out">
              <span
                className={`absolute left-0 top-0 w-6 h-6 bg-[#FF5722] rounded-full transition-transform duration-200 ease-in-out ${
                  isHub ? 'transform translate-x-6' : ''
                }`}
              ></span>
            </div>
          </label>
        </div>
      </div>

      {/* Issue Contact Section */}
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Issue Contact</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Select Role</label>
          <select className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#FF5722] focus:border-[#FF5722] p-2">
            <option>Admin</option>
            <option>User</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Select User</label>
          <select className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#FF5722] focus:border-[#FF5722] p-2">
            <option>Joe Abraham</option>
            <option>Jane Doe</option>
          </select>
        </div>
      </div>

      {/* Assign Button */}
      <button className="bg-[#FF5722] text-white py-2 px-4 rounded-md hover:bg-[#ff8f62] transition-colors">
        Assign
      </button>

      {/* Table */}
      <div className="mt-6">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border md:border-none block md:table-row absolute -top-full md:relative">
              <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Name</th>
              <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Email</th>
              <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Phone</th>
              <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Role</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {/* Row 1 */}
            <tr className="bg-gray-50 md:bg-transparent border md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <input type="checkbox" className="mr-2" />
                Joe Abraham
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                Joe.Abraham@joeabraham.com
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">123-456-7890</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Admin User</td>
            </tr>

            {/* Row 2 */}
            <tr className="bg-gray-50 md:bg-transparent border md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <input type="checkbox" className="mr-2" />
                Jane Doe
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                Jane.Doe@janedoe.com
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">123-456-7891</td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Admin User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateIssueForm;
