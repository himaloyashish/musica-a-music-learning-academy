import React from 'react';
import useAuth from '../Hook/useAuth';
import { useQuery } from 'react-query';
import axios from 'axios';

const AllCreatedClass = () => {
    const {loading ,user } = useAuth()
    // const [axiosSecure ] = useAxiosSecure()

    const {data: AllClasses = [], isLoading, refetch} = useQuery({
        queryKey: ['AllClasses', user?.email],
        // enabled: !loading,
        queryFn: async ()=>{
            const res = await axios(`https://music-instrument-learning-server-himlaoy.vercel.app/class/instructor/${user?.email}`)
            console.log( 'all create class',res.data)
            return res.data
        }

        
    })
    console.log( 'allClass crt',AllClasses)

    return [AllClasses, isLoading, refetch]
};

export default AllCreatedClass;