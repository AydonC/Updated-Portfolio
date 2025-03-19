// src/components/TwitterFeed.jsx
import React from 'react';

// Example posts data (easy to modify in code)
const postsData = [
    {
        id: 1,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: 'Just sharing my thoughts here.',
    },
    {
        id: 2,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg', 
        content: 'Just sharing my thoughts here.',
    },
    {
        id: 3,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg', 
        content: 'Loving the new Twitter layout!',
    },

];

const Testimonials  = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">

            {/* First Post (Post with id 1) */}
            {postsData.slice(0, 1).map(post => (
                <div key={post.id} className="bg-gray-950 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-800 border">
                    <div className="flex items-center mb-2">
                        <img
                            src={post.profileImage}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="font-bold">{post.user}</h3>
                            <p className="text-sm text-gray-500">{post.username}</p>
                        </div>
                    </div>
                    <p className="mb-2">{post.content}</p>

                
                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" className="w-full rounded-lg" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls className="w-full rounded-lg">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            ))}

            {/* Regular Posts */}
            {postsData.slice(1).map(post => (
                <div key={post.id} className="bg-gray-950 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-800 border">
                    <div className="flex items-center mb-2">
                        {/* Profile image */}
                        <img
                            src={post.profileImage}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="font-bold">{post.user}</h3>
                            <p className="text-sm text-gray-500">{post.username}</p>
                        </div>
                    </div>
                    <p className="mb-2">{post.content}</p>

                    {/* Conditional rendering for image or video */}
                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" className="w-full rounded-lg" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls className="w-full rounded-lg">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Testimonials ;
