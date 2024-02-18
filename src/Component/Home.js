import React, { useEffect } from 'react';
import Header from './Header';
import Tasklist from './Tasklist';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const usenavigate = useNavigate();
    // useEffect(() => {
    //     let email = sessionStorage.getItem('email');
    //     console.log(email);
    //     if (email === '' || email === null) {
    //         usenavigate('/Login');
    //     }
    // }, []);
    return (
        <>
            <Header />
            <Tasklist />
        </>
    )
}

export default Home;