'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FormProps {
  email?: string;
  password?: string;
  confirmPassword?: string;
  buttonTitle: string;
  style?: string;
}

export default function CustomForm({
  email,
  password,
  confirmPassword,
  buttonTitle,
  style,
}: FormProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRoute = () => {
    router.push('/pages/home');
  };

  if (!mounted) return null;

  return (
    <form action="#" method="POST" className="space-y-6">
      <div>
        {email !== undefined && (
          <div className="mt-2">
            <input
              type="email"
              value={email}
              required
              autoComplete="email"
              placeholder="Email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            />
          </div>
        )}

        {password !== undefined && (
          <div className="mt-2">
            <input
              type="password"
              value={password}
              placeholder="New Password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            />
          </div>
        )}

        {confirmPassword !== undefined && (
          <div className="mt-2">
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            />
          </div>
        )}
      </div>

      <div className={style}>
        <button
          type="submit"
          onClick={handleRoute}
          className="flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {buttonTitle}
        </button>
        {style !== undefined && (
          <img
            onClick={handleRoute}
            src="/gmail.png"
            alt="Gmail Icon"
            className="w-6 h-6 cursor-pointer"
          />
        )}
      </div>
    </form>
  );
}
