import { Plus, Trash2 } from 'lucide-react';
import { useCV } from '../../context/CVContext';

export default function AwardsForm() {
  const { state, dispatch } = useCV();

  const addAward = () => {
    dispatch({
      type: 'ADD_AWARD',
      payload: {
        title: '',
        issuer: '',
        year: '',
        description: ''
      }
    });
  };

  const updateAward = (index, field, value) => {
    dispatch({
      type: 'UPDATE_AWARD',
      index,
      payload: { [field]: value }
    });
  };

  const removeAward = (index) => {
    dispatch({
      type: 'REMOVE_AWARD',
      index
    });
  };

  return (
    <div className="space-y-6">
      {state.awards.map((award, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium text-gray-900">Award/Certification {index + 1}</h3>
            <button
              onClick={() => removeAward(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={award.title}
                onChange={(e) => updateAward(index, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., AWS Certified Developer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issuing Organization
              </label>
              <input
                type="text"
                value={award.issuer}
                onChange={(e) => updateAward(index, 'issuer', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Amazon Web Services"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year Received
              </label>
              <input
                type="number"
                value={award.year}
                onChange={(e) => updateAward(index, 'year', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="2025"
                min="1950"
                max={new Date().getFullYear()}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              value={award.description}
              onChange={(e) => updateAward(index, 'description', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief description of the award or certification..."
            />
          </div>
        </div>
      ))}

      <button
        onClick={addAward}
        className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:text-gray-800 hover:border-gray-400 w-full justify-center"
      >
        <Plus className="h-4 w-4" />
        Add Award/Certification
      </button>
    </div>
  );
}