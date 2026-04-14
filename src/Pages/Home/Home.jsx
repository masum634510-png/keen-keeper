import React from 'react';
import Banner from '../../component/Banner/Banner';
import StatsSection from '../../component/StatsSection/StatsSection';
import FriendsList from '../../component/FriendsList/FriendsList';
import Copy from '../../component/copy/Copy';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <FriendsList></FriendsList>
            <Copy></Copy>
        </div>
    );
};

export default Home;