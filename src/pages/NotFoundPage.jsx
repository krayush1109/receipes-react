// NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center h-4/5 justify-center text-center ">
      <div className='flex h-full '>
        <img src='https://cdn3d.iconscout.com/3d/premium/thumb/boy-and-girl-404-not-found-page-9632269-7818478.png?f=webp' alt="Page Not Found" className="w-1/2 max-w-xs" />
        <img src='https://cdn3d.iconscout.com/3d/premium/thumb/404-error-7469266-6138307.png?f=webp' alt="Page Not Found" className="w-full max-w-xs mb-6" />

      </div>
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
