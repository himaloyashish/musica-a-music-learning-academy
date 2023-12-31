import React from 'react';
import { Link } from 'react-router-dom';

const InstructorCard = ({instructor}) => {
    const {image,name,email} = instructor
    return (
        <div className="card w-96 py-6 bg-[#C2DEDC] text-[#0B2447] shadow-xl" data-aos="flip-left">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  py-2">
                <h2 className="card-title">Instructor_Name: {name}</h2>
                <p>Instructor_Email: {email}</p>
                <div className="card-actions">
                    <Link to={'/class'} className="btn butn ">Instructor's class</Link >
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;