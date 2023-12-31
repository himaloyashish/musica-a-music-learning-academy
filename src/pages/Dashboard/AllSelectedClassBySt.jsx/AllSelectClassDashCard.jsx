import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllSelectClassDashCard = ({ favClass, index,allTotal }) => {

    const { class_Image, class_Name, price, _id } = favClass


    const handleDelete = (id) => {
        axios.delete(`https://music-instrument-learning-server-himlaoy.vercel.app/students/${id}`)
            .then(data => {
                if (data.data.deleteCount > 0){
                    toast('Your class deleted')
                }
                    console.log(data.data)

            })
    }


    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={class_Image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {class_Name}
            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn butn btn-sm">Delete</button>
            </th>
            <th>
                <Link to={`/dashboard/payment/${_id}`} className="btn butn btn-sm">Pay</Link>
            </th>
        </tr>
    );
};

export default AllSelectClassDashCard;