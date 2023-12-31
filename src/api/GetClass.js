import React from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useQuery } from 'react-query';

const GetClass = () => {
    const [axiosSecure] = useAxiosSecure()

    const {data : AllClass , refetch } = useQuery({
        queryKey:['class'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/class')
            console.log(res.data)
            return res.data
        }
    })


    return  [AllClass, refetch]
};

export default GetClass;