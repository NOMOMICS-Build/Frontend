import React from 'react'
import Navbar from '../../components/NavBar'

const Profile = () => {
  return (
    <div>
        <Navbar/>
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <ul className="space-y-4 text-gray-700">
          <li className="font-semibold text-yellow-500">Create Profile</li>
          <li>Content Management</li>
          <li>Monetization</li>
          <li>Analysis</li>
          <li>Motion Comics</li>
        </ul>
      </div>


      <div className="flex-1 flex flex-col">
        <div className="flex border-b bg-white">
          <button className="px-6 py-3 border-b-2 border-black font-medium">
            Profile Settings
          </button>
          <button className="px-6 py-3 text-gray-500 hover:text-black">
            Portfolio Showcase
          </button>
          <button className="px-6 py-3 text-gray-500 hover:text-black">
            Metrics
          </button>
        </div>

        <div className="flex-1 p-10 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">Alexa Rawles</h2>
                <p className="text-sm text-gray-500">alexarawles@gmail.com</p>
              </div>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded">
              Edit
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your First Name"
                className="mt-1 w-full border rounded-md p-2 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nick Name
              </label>
              <input
                type="text"
                placeholder="Your First Name"
                className="mt-1 w-full border rounded-md p-2 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select className="mt-1 w-full border rounded-md p-2 bg-gray-100">
                <option>Your First Name</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select className="mt-1 w-full border rounded-md p-2 bg-gray-100">
                <option>Your First Name</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select className="mt-1 w-full border rounded-md p-2 bg-gray-100">
                <option>Your First Name</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <select className="mt-1 w-full border rounded-md p-2 bg-gray-100">
                <option>Your Email</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Profile