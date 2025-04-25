import React from 'react';

const ActivityFeed = () => {
  // Sample activity data
  const activities = [
    {
      id: 1,
      user: {
        name: "Eco Enthusiast",
        username: "green_warrior",
      },
      description: "Planted a young oak tree in the community garden. It's going to provide shade and clean air for generations!",
      location: "Community Garden",
      date: "2 days ago",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      user: {
        name: "Eco Enthusiast",
        username: "green_warrior",
      },
      description: "Added three new saplings to my backyard. Creating a mini forest one tree at a time!",
      location: "Home Garden",
      date: "1 week ago",
      likes: 18,
      comments: 3,
    },
  ];

  return (
    <div className="space-y-4 mt-4">
      {activities.map((activity) => (
        <div key={activity.id} className="overflow-hidden border border-green-100 rounded-lg">
          <div className="p-4 pb-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full overflow-hidden bg-green-600 text-white flex items-center justify-center">
                <span>{activity.user.name.substring(0, 2)}</span>
              </div>
              <div>
                <h4 className="text-base font-semibold">{activity.user.name}</h4>
                <p className="text-xs text-gray-500">{activity.date}</p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4 space-y-3">
            <div className="rounded-md overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Tree planting activity"
                className="w-full h-48 object-cover"
              />
            </div>

            <p className="text-sm">{activity.description}</p>

            <div className="flex items-center text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{activity.location}</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-green-100">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                  <span>{activity.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>{activity.comments}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;