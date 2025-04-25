import React from 'react';

const UploadForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="border border-green-100 rounded-lg mt-4">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Plant a Tree</h3>
        <p className="text-sm text-gray-500">Share your tree planting activity to earn a green contribution</p>
      </div>
      <div className="px-6 pb-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="space-y-2">
            <label htmlFor="image" className="block text-sm font-medium">Upload Image</label>
            <div className="border-2 border-dashed border-green-200 rounded-lg p-6 text-center hover:bg-green-50 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-green-500 mb-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" x2="12" y1="3" y2="15"></line>
              </svg>
              <p className="text-sm text-gray-500">Drag and drop an image, or click to browse</p>
              <input id="image" type="file" accept="image/*" className="hidden" />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">Description</label>
            <textarea
              id="description"
              placeholder="Tell us about the tree you planted..."
              className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            ></textarea>
          </div>

          {/* Location and Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Location</span>
                </div>
              </label>
              <input
                id="location"
                placeholder="Where did you plant it?"
                className="w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <span>Date</span>
                </div>
              </label>
              <input
                id="date"
                type="date"
                defaultValue={new Date().toISOString().split('T')[0]}
                className="w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="px-6 pb-6 pt-2">
        <button 
          onClick={handleSubmit}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
        >
          Submit Activity
        </button>
      </div>
    </div>
  );
};

export default UploadForm;