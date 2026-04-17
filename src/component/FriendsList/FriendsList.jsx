import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("/friends.json")
            .then((res) => res.json())
            .then((data) => setFriends(data));
    }, []);

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-2xl font-medium">Your Friends ({friends.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">

                {friends.map((friend) => (
                    <Link to={`/friend/${friend.id}`} key={friend.id}>
                        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)]  rounded-sm flex flex-col py-6 px-2 items-center">
                            <img
                                src={friend.picture}
                                alt="photo"
                                className="w-24 h-24 rounded-full border-4 border-blue-600 mb-4 object-cover"
                            />
                            <h2 className="text-3xl font-medium">{friend.name}</h2>
                            <p className="text-gray-600 text-[16px] font-semibold pt-2">
                                {friend.days_since_contact}d ago
                            </p>
                            <div className=" gap-6 justify-between flex pt-3">
                                {friend.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-center pt-3 flex-grow">{friend.bio}</p>

                            <button
                                className={`px-4 py-1.5 bg-amber-500 rounded-full mt-4 text-xs font-bold uppercase ${friend.status === "on-track" ? "bg-green-600 text-white" : friend.status === "overdue" ? "bg-red-600 text-white" : "bg-amber-600 text-white"}`}
                            >
                                {friend.status}
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default FriendsList;
