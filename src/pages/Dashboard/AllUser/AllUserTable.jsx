import React, { useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import { MakeAdmin, MakeInstructor } from '../../../api/SaveUser';

const AllUserTable = ({users, index}) => {

    // const [disabled , setDisabled] = useState

    const {user} = useAuth()

    const Admin = (user) =>{
        MakeAdmin(user)
    }

    const Instructor = (user)=>{
        MakeInstructor(user)
    }

    // if(users.role==='Admin' || users.role=== 'Instructor'){
    //     return 
    // }

    return (
        <tr className='text-[#1c3a45]'>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={users.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {users.name}
            </td>
            <td>
                <button 
                disabled={users.role==='Admin' }
                onClick={()=>Admin(users)} 
                className="btn btn-ghost butn btn-xs"
                >Make Admin</button>
            </td>
            <th>
                <button disabled={users.role=== 'Instructor'} onClick={()=>Instructor(users)} className="btn btn-ghost butn btn-xs">Make Instructors</button>
            </th>
        </tr>
    );
};

export default AllUserTable;