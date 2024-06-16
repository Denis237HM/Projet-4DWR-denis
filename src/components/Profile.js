import React from "react";
import { useNavigate } from "react-router-dom";
   
function Profile() {

     
const navigate =useNavigate();
    return (
        <div className="max-w-md p-8 flex space-x-6  dark:text-gray-800">
            <div className="flex-shrink-0 w-10 h-10">
                <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500" />
            </div>
            <div className="flex flex-col justify-center space-y-1">
                <div>
                    <h2   onClick={()=>navigate("/user-profile")} className="text-xl font-semibold">Leroy Jenkins</h2>
                    <span className="text-sm dark:text-gray-600">General manager</span>
                </div>
               
            </div>
        </div>
    );
}

export default Profile;
