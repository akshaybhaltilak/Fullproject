import { React, useState, useEffect } from 'react';

function Community() {
  const [communities, setCommunities] = useState(null);

  useEffect(() => {
    fetch('/api/community')
      .then(res => res.json())
      .then(data => setCommunities(data));
  }, []);

  if (!communities) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">Developer Communities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communities.platforms.map((platform, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              {platform.name}
            </h2>
            <div className="space-y-4">
              {platform.communities.map((community, communityIndex) => (
                <div key={communityIndex} className="border-b border-gray-700 pb-4">
                  <h3 className="font-semibold mb-2">{community.name}</h3>
                  <p className="text-gray-300 mb-2">{community.description}</p>
                  <a 
                    href={community.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
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
  );
}

export default Community;