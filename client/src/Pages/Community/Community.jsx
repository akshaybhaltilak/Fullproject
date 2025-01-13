import React from 'react';

const Community = () => {
  // Moving the backend data directly into the component
  const communityData = {
    "platforms": [
      {
        "name": "Discord Communities",
        "communities": [
          {
            "name": "React Developers",
            "description": "A community for React developers to discuss, learn, and share knowledge.",
            "link": "https://discord.gg/react"
          },
          {
            "name": "Node.js Community",
            "description": "Connect with Node.js developers and get help with your projects.",
            "link": "https://discord.gg/nodejs"
          }
        ]
      },
      {
        "name": "Reddit Communities",
        "communities": [
          {
            "name": "r/webdev",
            "description": "Discussion and sharing of web development resources and experiences.",
            "link": "https://reddit.com/r/webdev"
          },
          {
            "name": "r/learnprogramming",
            "description": "A supportive community for beginners learning to code.",
            "link": "https://reddit.com/r/learnprogramming"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 text-center">
          Developer Communities
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {communityData.platforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-orange-600/20 transition-shadow duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-4">
                {platform.name}
              </h2>
              
              <div className="space-y-4">
                {platform.communities.map((community, communityIndex) => (
                  <div 
                    key={communityIndex} 
                    className="border-b border-gray-700 pb-4 last:border-b-0"
                  >
                    <h3 className="font-semibold mb-2 text-lg">
                      {community.name}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-2">
                      {community.description}
                    </p>
                    <a
                      href={community.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-orange-600 hover:text-orange-500 transition-colors duration-200 hover:underline text-sm md:text-base"
                    >
                      Join Community →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;