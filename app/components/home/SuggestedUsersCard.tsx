"use client";

import { peopleToFollow } from "@/app/temp/data";
import React, { useState } from "react";
import { isProfileVerified } from "./isVerified";

export const SuggestedUsersCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-md">
      <div className="px-4 py-5 sm:px-6">
        <div className="text-black font-bold text-xl mb-4 border-b-2 border-gray-200 pb-2">
          You Should Follow
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
        {peopleToFollow
          .slice(0, isExpanded ? peopleToFollow.length : 3)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row  rounded-lg shadow-sm items-start sm:items-center mb-5"
            >
              {/* Profile Picture */}
              <img
                src={item.profileUrl}
                alt="Profile"
                className="w-12 h-12 sm:w-10 sm:h-10 rounded-full object-cover mb-2 sm:mb-0"
              />

              {/* User Info */}
              <div className="flex-1 sm:ml-4">
                <div className="flex items-center sm:text-sm font-bold text-black flex-shrink">
                  {item.name} {isProfileVerified(item.isVerified)}
                </div>
                <div className="text-xs text-gray-700 flex-shrink">
                  {item.email.split("@")[0]}@
                </div>
              </div>

              {/* Follow Button */}
              <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 mt-2 sm:mt-0">
                Follow
              </button>
            </div>
          ))}
      </div>
      {/* See All / See Less Button */}
      <div className="px-4 py-3 text-right">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline"
        >
          {isExpanded ? "See Less" : "See All"}
        </button>
      </div>
    </div>
  );
};
