
import React from 'react';

const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Task Status</h3>
      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task.id} className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
              <span className="text-gray-700 font-medium truncate pr-2">{task.title}</span>
              <button 
                onClick={() => onComplete(task)}
                className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-300 flex-shrink-0"
              >
                Complete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">Select a ticket to add to Task Status.</p>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
