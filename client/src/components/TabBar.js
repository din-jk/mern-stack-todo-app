import React from 'react';

const TabBar = ({ activeTab, setActiveTab }) => {
  const tabs = ['All Tasks', 'In Progress', 'Completed'];

  return (
    <div className="flex border-b border-gray-700 mb-6">
      {tabs.map((tab) => (
        <button
        key={tab}
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === tab
            ? 'border-b-2 border-blue-500 text-blue-400 font-semibold'
            : 'text-gray-400 hover:text-gray-200'
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
      ))}
    </div>
  );
};

export default TabBar;