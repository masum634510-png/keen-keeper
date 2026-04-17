import React from 'react';
import Banner from '../../component/Banner/Banner';
import StatsSection from '../../component/StatsSection/StatsSection';
import FriendsList from '../../component/FriendsList/FriendsList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <FriendsList></FriendsList>
           
        </div>
    );
};

export default Home;