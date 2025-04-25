import React, { useState } from 'react';
import UploadForm from './UploadForm';
import ActivityFeed from './ActivityFeed';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'upload' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveTab('upload')}
        >
          Upload Activity
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'activity' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-green-600'}`}
          onClick={() => setActiveTab('activity')}
        >
          Recent Activities
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'upload' ? <UploadForm /> : <ActivityFeed />}
    </div>
  );
};

export default TabsSection;