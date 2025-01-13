import React from 'react';

const Code = () => {
  // Moving the backend data directly into the component
  const learningPathsData = {
    "paths": [
      {
        "title": "Frontend Development",
        "stages": [
          {
            "title": "Fundamentals",
            "topics": [
              "HTML5",
              "CSS3",
              "JavaScript Basics",
              "Git & GitHub"
            ]
          },
          {
            "title": "Frontend Frameworks",
            "topics": [
              "React.js",
              "State Management",
              "API Integration",
              "Responsive Design"
            ]
          }
        ]
      },
      {
        "title": "Backend Development",
        "stages": [
          {
            "title": "Basics",
            "topics": [
              "Node.js Fundamentals",
              "Express.js",
              "RESTful APIs",
              "Database Basics"
            ]
          },
          {
            "title": "Advanced",
            "topics": [
              "Authentication",
              "Authorization",
              "API Security",
              "Database Design"
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 text-center">
          Learning Paths
        </h1>
        
        <div className="space-y-8 md:space-y-12">
          {learningPathsData.paths.map((path, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-orange-600/20 transition-shadow duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
                {path.title}
              </h2>
              
              <div className="space-y-6 md:space-y-8">
                {path.stages.map((stage, stageIndex) => (
                  <div 
                    key={stageIndex} 
                    className="relative pl-4 md:pl-6"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-600"></div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-orange-500">
                      {stage.title}
                    </h3>
                    <ul className="space-y-2">
                      {stage.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex} 
                          className="text-gray-300 text-sm md:text-base hover:text-white transition-colors duration-200"
                        >
                          • {topic}
                        </li>
                      ))}
                    </ul>
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

export default Code;