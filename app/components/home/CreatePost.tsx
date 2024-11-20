"use client";

import { useState } from "react";
import { CreatePostForm } from "./CreatePostForm";
import { Dialog, DialogContent } from "@mui/material";

export const CreatePost = () => {
  const [postFormOpen, setPostFormOpen] = useState(false);

  const handleOpenPostForm = () => {
    setPostFormOpen(true);
  };

  const handleClosePostForm = () => {
    setPostFormOpen(false);
  };

  return (
    <>
      <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl">
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
            <span
              className="flex-grow bg-gray-100 rounded border border-gray-300 p-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              What&apos;s on your mind?
            </span>
          </div>
          {/* On smaller screens, show buttons in a column layout */}
          <div className="flex flex-col md:flex-row justify-between mt-4 gap-2">
            <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300">
              Photo/Video
            </button>
            <button
              onClick={handleOpenPostForm}
              className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-600"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={postFormOpen}
        onClose={handleClosePostForm}
        aria-labelledby="create-post-dialog-title"
      >
        <DialogContent>
          <CreatePostForm handleCreate={handleClosePostForm} />
        </DialogContent>
      </Dialog>
    </>
  );
};
