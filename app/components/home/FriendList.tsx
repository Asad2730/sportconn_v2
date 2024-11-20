import { friend_list, loggedUser } from "@/app/temp/data";
import { TimeAgo } from "@/app/util/helper";

export const FriendList = () => {
  const friends = friend_list.filter(
    (friend) => friend.friendId === loggedUser.id
  );
  return (
    <div className="w-full max-w-m">
      <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
        <div className="flex items-center bg-gray-200 rounded-md">
          <div className="pl-2">
            <svg
              className="fill-current text-gray-500 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <input
            className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
            id="search"
            type="text"
            placeholder="Search teams or members"
          />
        </div>
        <div className="py-3 text-sm">
          {friends.flatMap((friend) => {
            const timeAgo = TimeAgo(friend.isActive);
            return (
              <div
                className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
                key={friend.id}
              >
                <div className="relative inline-block">
                  <img
                    className="h-6 w-6 m-2 rounded-full"
                    src={friend.url}
                    alt="Profile"
                  />
                  {timeAgo === "just now" && (
                    <span className="absolute bottom-0 right-0 h-2 w-2 bg-green-400 rounded-full border border-white"></span>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex-grow font-medium px-2">
                    {friend.name}
                  </div>
                  <div className="text-xs font-thin text-gray-500 tracking-wide">
                    {timeAgo}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
