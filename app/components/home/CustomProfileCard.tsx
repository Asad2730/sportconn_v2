"use client";

import { loggedUser } from "@/app/temp/data";

export const CustomProfileCard = () => (
  <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 ">
    {/* First Section */}
    <div className="flex flex-col items-center space-y-4 flex-shrink">
      {/* Profile Image */}
      <img
        src={loggedUser.image}
        alt="Profile"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover flex-shrink"
      />
      {/* Content Columns */}
      <div className="flex flex-col items-center space-y-2">
        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-bold text-black flex-shrink">{loggedUser.name}</h2>
        {/* Email */}
        <p className="text-blue-500 flex-shrink">{loggedUser.email}</p>
        {/* About */}
        <p className="text-gray-600 text-center line-clamp-2 flex-shrink">
          {loggedUser.about}
        </p>
      </div>

      {/* Inner Card for Profile Completion */}
      <div className="w-full mt-6 bg-gray-100 p-4 rounded-lg shadow-md ">
        <div className="flex items-center justify-center mb-2">
          <div className="text-gray-800 font-semibold flex-shrink">Your Profile</div>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
          <div
            className={`h-2 rounded-full flex-shrink ${loggedUser.profileCompleted >= 50 ? 'bg-green-600' : 'bg-red-600'}`}
            style={{ width: `${loggedUser.profileCompleted}%` }}
          ></div>
        </div>
        <div className="text-gray-600 text-right flex-shrink">{loggedUser.profileCompleted}% completed</div>
        <a
          href="/complete-profile"
          className="text-blue-500 hover:underline text-right block flex-shrink"
        >
          Complete Your Profile
        </a>
      </div>
    </div>
  </div>
);
