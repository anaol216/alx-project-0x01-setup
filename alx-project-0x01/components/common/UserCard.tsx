import React from "react";
import { UserProps } from "@/interfaces";



const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-6 w-full max-w-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Website:</strong> {user.website}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Company:</strong> {user.company.name}
      </p>
      <p className="text-gray-600">
        <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
