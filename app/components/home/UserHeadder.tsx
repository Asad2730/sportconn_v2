"use client";
import { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { SearchInput } from "./inputSearch";
import { loggedUser } from "@/app/temp/data";

export default function UserHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // This ensures the drawer functionality is only active on the client
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full bg-gray-800
       text-white p-4 z-10 flex items-center justify-between"
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold">SPORTCONN</h1>

        {/* Search Input doesnot hide when Menu Button  appears */}
        <div className="relative flex-grow mx-4 max-w-md  ">
          <SearchInput />
        </div>

        {/* Icons and Profile Image */}
        <div className="hidden md:flex items-center space-x-4">
          <img src="/home-gray.png" alt="Home" className="w-6 h-6" />
          <img src="/home-gray.png" alt="Profile" className="w-6 h-6" />
          <img src="/home-gray.png" alt="Notifications" className="w-6 h-6" />
          <img src="/home-gray.png" alt="Settings" className="w-6 h-6" />
          <img src="/home-gray.png" alt="Messages" className="w-6 h-6" />
          <img src="/home-gray.png" alt="Calendar" className="w-6 h-6" />
          <div className="flex items-center space-x-2 ml-4">
            <Image
              src={loggedUser.image}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>{loggedUser.name}</span>
          </div>
        </div>
        
      {/* //Menu for mobile showing for full screen as well should hide then only show for mobiile screen */}
        {/* Menu Button for Mobile View */}
        <IconButton onClick={() => setIsDrawerOpen(true)} className=" sm:hidden">
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
      </header>
   
      {/* Drawer Content */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{ style: { zIndex: 1200 } }} // Ensure drawer is above other content
      >
        <div className="flex flex-col p-4 w-64 bg-gray-800 text-white h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Menu</h2>
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon style={{ color: "white" }} />
            </IconButton>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="flex items-center space-x-2">
              <img src={loggedUser.image} alt="Profile" className="w-6 h-6" />
              <span>{loggedUser.name}</span>
            </button>

            <div className="flex flex-row">
              <button className="mr-1">
                <img src="/home-gray.png" alt="Home" className="w-6 h-6" />
              </button>

              <button className="mr-1">
                <img
                  src="/home-gray.png"
                  alt="Notifications"
                  className="w-6 h-6"
                />
              </button>
              <button className="mr-1">
                <img src="/home-gray.png" alt="Settings" className="w-6 h-6" />
              </button>

            </div>

            <div className="flex items-center space-x-2">
              <SearchInput />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
