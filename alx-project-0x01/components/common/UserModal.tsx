import React from "react";
import { UserModalProps } from "@/interfaces";
import { UserProps } from "@/interfaces";


const UserModal: React.FC<UserModalProps> = ({ onSubmit }) => {
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">User Modal</h2>
        <p>This is a placeholder for the User Modal content.</p>
        <button
          onClick={() => onSubmit({ id: 1, name: "John Doe", username: "johndoe", email: "anaol@gmail.com", address: { street: "123 Main St", suite: "Apt. 1", city: "Anytown", zipcode: "12345", geo: { lat: "0", lng: "0" } }, phone: "123-456-7890", website: "johndoe.com", company: { name: "Doe Inc.", catchPhrase: "Innovate and Lead", bs: "business solutions" } })}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
            Submit
        </button>
      </div>
    </div>
            

  );
};

export default UserModal;
