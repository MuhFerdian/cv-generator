import { Plus, Trash2 } from 'lucide-react';
import { useCV } from '../../context/CVContext';

export default function ProjectsForm() {
  const { state, dispatch } = useCV();

  const addProject = () => {
    dispatch({
      type: 'ADD_PROJECT',
      payload: {
        name: '',
        description: '',
        liveUrl: '',
        githubUrl: '',
        technologies: []
      }
    });
  };

  const updateProject = (index, field, value) => {
    dispatch({
      type: 'UPDATE_PROJECT',
      index,
      payload: { [field]: value }
    });
  };

  const removeProject = (index) => {
    dispatch({
      type: 'REMOVE_PROJECT',
      index
    });
  };

  const updateTechnologies = (index, techString) => {
    const technologies = techString.split(',').map(tech => tech.trim()).filter(tech => tech);
    updateProject(index, 'technologies', technologies);
  };

  return (
    <div className="space-y-6">
      {state.projects.map((project, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium text-gray-900">Project {index + 1}</h3>
            <button
              onClick={() => removeProject(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={project.name}
                onChange={(e) => updateProject(index, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., E-commerce Website"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Technologies Used
              </label>
              <input
                type="text"
                value={project.technologies.join(', ')}
                onChange={(e) => updateTechnologies(index, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Laravel, Node.js, MySQL (comma separated)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Live Demo URL
              </label>
              <input
                type="url"
                value={project.liveUrl}
                onChange={(e) => updateProject(index, 'liveUrl', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://yourproject.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GitHub Repository
              </label>
              <input
                type="url"
                value={project.githubUrl}
                onChange={(e) => updateProject(index, 'githubUrl', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://github.com/yourusername/project"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe what the project does, key features, and your role in its development..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={addProject}
        className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:text-gray-800 hover:border-gray-400 w-full justify-center"
      >
        <Plus className="h-4 w-4" />
        Add Project
      </button>
    </div>
  );
}