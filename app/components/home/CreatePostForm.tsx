import { DialogActions } from "@mui/material";

interface CreatePostFormProps {
  handleCreate: () => void;
}

export const CreatePostForm = ({ handleCreate }: CreatePostFormProps) => {
  return (
    <DialogActions className="flex  bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl">
      <div className="flex flex-col w-full p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-black">Create Post</h2>
        </div>
        <div className="flex items-start gap-4">
          <img
            className="w-12 h-12 rounded-full object-cover shadow"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
          <textarea
            className="flex-grow bg-gray-100 rounded border border-gray-300 p-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
            rows={2}
          />
        </div>
        {/* Allow comments section */}
        <div className="flex items-center gap-2 mt-4">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3v9.27c-.3-.07-.62-.12-.94-.12-2.61 0-4.72 2.08-4.72 4.66s2.11 4.66 4.72 4.66c.31 0 .63-.05.94-.12V21h5V3h-5z"></path>
          </svg>
          <span className="text-gray-700">Allow comments</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" />
            <div className="w-11 h-6 bg-gray-200 rounded-full shadow-inner"></div>
            <div className="dot absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow transition-transform transform translate-x-0.5"></div>
          </label>
        </div>
        {/* On smaller screens, show buttons in a column layout */}
        <div className="flex flex-col md:flex-row justify-between mt-4 gap-2">
          <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300">
            Photo/Video
          </button>
          <button
            onClick={handleCreate}
            className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-600"
          >
            Create Post
          </button>
        </div>
      </div>
    </DialogActions>
  );
};
