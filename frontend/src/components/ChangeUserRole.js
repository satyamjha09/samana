import React, { useState } from 'react';
import ROLE from '../common/role';
import { IoMdCloseCircle } from "react-icons/io";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const ChangeUserRole = ({
  name,
  email,
  userId,
  role,
  onClose,
  callFunc,
}) => {

  const [userRole, setUserRole] = useState(role);

  const handleOnChangeSelect = (e) => {

    setUserRole(e.target.value);
    
    console.log(e.target.value);
  };

  const updateUserRole = async () => {

    try {
      
      const fetchResponse = await fetch(SummaryApi.updateUser.url, {
        method: SummaryApi.updateUser.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          role: userRole,
        }),
      });

      const responseData = await fetchResponse.json();

      if (responseData.success) {
        toast.success(responseData.message);
        onClose();
        callFunc()
      } else {
        toast.error(responseData.message);
      }

      console.log("role updated", responseData);
    } catch (error) {
      toast.error("Failed to update user role");
    }
  };

  return (
    <div className='fixed w-full top-0 bottom-0 left-0 right-0 h-full z-10 flex justify-center items-center bg-gray-500 bg-opacity-50'>
      <div className='w-fit mx-auto bg-white shadow-md p-4 min-w-sm rounded'>
        
        <button className='block ml-auto' onClick={onClose}>

          <IoMdCloseCircle size={24} />

        </button>

        <h1 className='pb-4 text-lg font-medium'> Change User Role</h1>

        <p> Name: {name} </p>
        <p> Email: {email} </p>

        <div className='flex items-center justify-between my-4'>
          <p> Role </p>
          <select 
            className='border mt-2 p-2' 
            value={userRole} 
            onChange={handleOnChangeSelect}
          >
            {
            Object.values(ROLE).map(el => (
              <option value={el} key={el}>{el}</option>
            ))}
          </select>
        </div>

        <button 
          className='w-fit mx-auto block py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700' 
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
