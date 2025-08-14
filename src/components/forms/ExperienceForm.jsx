import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useCV } from '../../context/CVContext';

export default function ExperienceForm() {
  const { state, dispatch } = useCV();

  const addExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload: {
        position: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ['']
      }
    });
  };

  const updateExperience = (index, field, value) => {
    dispatch({
      type: 'UPDATE_EXPERIENCE',
      index,
      payload: { [field]: value }
    });
  };

  const removeExperience = (index) => {
    dispatch({
      type: 'REMOVE_EXPERIENCE',
      index
    });
  };

  const addDescriptionPoint = (expIndex) => {
    const experience = state.experience[expIndex];
    updateExperience(expIndex, 'description', [...experience.description, '']);
  };

  const updateDescriptionPoint = (expIndex, pointIndex, value) => {
    const experience = state.experience[expIndex];
    const newDescription = [...experience.description];
    newDescription[pointIndex] = value;
    updateExperience(expIndex, 'description', newDescription);
  };

  const removeDescriptionPoint = (expIndex, pointIndex) => {
    const experience = state.experience[expIndex];
    const newDescription = experience.description.filter((_, i) => i !== pointIndex);
    updateExperience(expIndex, 'description', newDescription);
  };

  return (
    <div className="space-y-6">
      {state.experience.map((exp, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium text-gray-900">Experience {index + 1}</h3>
            <button
              onClick={() => removeExperience(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position Title
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Web Developer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => updateExperience(index, 'location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City, Country"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                disabled={exp.current}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id={`current-${index}`}
                checked={exp.current}
                onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`current-${index}`} className="ml-2 text-sm text-gray-700">
                Currently working here
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Responsibilities & Achievements
            </label>
            {exp.description.map((point, pointIndex) => (
              <div key={pointIndex} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => updateDescriptionPoint(index, pointIndex, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your achievement or responsibility..."
                />
                {exp.description.length > 1 && (
                  <button
                    onClick={() => removeDescriptionPoint(index, pointIndex)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => addDescriptionPoint(index)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              <Plus className="h-4 w-4" />
              Add bullet point
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={addExperience}
        className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:text-gray-800 hover:border-gray-400 w-full justify-center"
      >
        <Plus className="h-4 w-4" />
        Add Experience
      </button>
    </div>
  );
}