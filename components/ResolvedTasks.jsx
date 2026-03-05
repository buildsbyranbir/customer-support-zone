
import React from 'react';

const ResolvedTasks = ({ tasks }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Resolved Task</h3>
      <div className="space-y-2">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task.id} className="bg-gray-100 p-3 rounded-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 line-through truncate">{task.title}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
        )}
      </div>
    </div>
  );
};

export default ResolvedTasks;
