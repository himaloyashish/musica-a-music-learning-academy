import React from 'react';
import Slider from './Slider/Slider';
import PopularSection from './PopularSection/PopularSection';
import PopularInstructor from './PopularInstructor.jsx/PopularInstructor';
import InstructorDashboard from '../../LayOut/Dashboard/InstructorDashboard';

const Home = () => {
    return (
        <div className='bg-[#E5F9DB]'>
            <Slider></Slider>
            <PopularSection></PopularSection>
            <PopularInstructor></PopularInstructor>
            <InstructorDashboard></InstructorDashboard>
        </div>
    );
};

export default Home;