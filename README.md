<div className="p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
                বন্ধুদের তালিকা ({friends.length})
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    friends.map(friend => (
                        <div 
                            key={friend.id} 
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center border border-gray-100"
                        >
                            <img 
                                src={friend.picture} 
                                alt={friend.name} 
                                className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">{friend.name}</h3>
                            
                            <div className="flex flex-wrap justify-center gap-2 my-3">
                                {friend.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-sm text-gray-600 text-center italic mb-4 flex-grow">
                                "{friend.bio}"
                            </p>
                            
                            <div className="w-full pt-4 border-t border-gray-100 text-center">
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">পরবর্তী দেখা</p>
                                <p className="text-blue-600 font-medium">{friend.next_due_date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>