import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useCV } from '../../context/CVContext';

export default function SkillsForm() {
  const { state, dispatch } = useCV();
  const [newSkill, setNewSkill] = useState({ hard: '', soft: '', language: '', level: 'Intermediate' });

  const addSkill = (type) => {
    if (!newSkill[type].trim()) return;

    const skillValue = type === 'language' 
      ? { name: newSkill[type], level: newSkill.level }
      : newSkill[type];

    dispatch({
      type: 'UPDATE_SKILLS',
      payload: {
        [type === 'language' ? 'languages' : type]: [
          ...state.skills[type === 'language' ? 'languages' : type],
          skillValue
        ]
      }
    });

    setNewSkill({ ...newSkill, [type]: '' });
  };

  const removeSkill = (type, index) => {
    const skillType = type === 'language' ? 'languages' : type;
    const updatedSkills = state.skills[skillType].filter((_, i) => i !== index);
    
    dispatch({
      type: 'UPDATE_SKILLS',
      payload: { [skillType]: updatedSkills }
    });
  };

  const handleKeyPress = (e, type) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(type);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hard Skills (Technical)
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {state.skills.hard.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill('hard', index)}
                className="text-blue-600 hover:text-blue-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newSkill.hard}
            onChange={(e) => setNewSkill({ ...newSkill, hard: e.target.value })}
            onKeyPress={(e) => handleKeyPress(e, 'hard')}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Microsoft Office, UI/UX Design, Cyber Security"
          />
          <button
            onClick={() => addSkill('hard')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Soft Skills
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {state.skills.soft.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill('soft', index)}
                className="text-green-600 hover:text-green-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newSkill.soft}
            onChange={(e) => setNewSkill({ ...newSkill, soft: e.target.value })}
            onKeyPress={(e) => handleKeyPress(e, 'soft')}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Communication, Leadership, Problem Solving"
          />
          <button
            onClick={() => addSkill('soft')}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Languages
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {state.skills.languages.map((lang, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
            >
              {lang.name} ({lang.level})
              <button
                onClick={() => removeSkill('language', index)}
                className="text-purple-600 hover:text-purple-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newSkill.language}
            onChange={(e) => setNewSkill({ ...newSkill, language: e.target.value })}
            onKeyPress={(e) => handleKeyPress(e, 'language')}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Indonesia, English"
          />
          <select
            value={newSkill.level}
            onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Native">Native</option>
          </select>
          <button
            onClick={() => addSkill('language')}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}