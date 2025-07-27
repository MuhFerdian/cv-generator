import { Eye, Monitor } from 'lucide-react';
import { useCV } from '../context/CVContext';
import ATSTemplate from '../templates/ATSTemplate';
import CreativeTemplate from '../templates/CreativeTemplate';

export default function CVPreview() {
  const { state } = useCV();

  const renderTemplate = () => {
    switch (state.selectedTemplate) {
      case 'creative':
        return <CreativeTemplate data={state} />;
      case 'ats':
      default:
        return <ATSTemplate data={state} />;
    }
  };

  return (
    <div className="glass-effect rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
            <Eye className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Preview CV
            </h2>
            <p className="text-sm text-gray-600">
              {state.selectedTemplate === 'ats' ? '🤖 Template ATS-Friendly' : '🎨 Template Creative'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-[900px] overflow-y-auto bg-gray-100 p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div id="cv-preview" className="min-h-full">
            {renderTemplate()}
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-3 border-t border-white/20">
        <p className="text-xs text-gray-500 text-center">
          💡 CV akan terlihat seperti ini saat dicetak atau didownload sebagai PDF
        </p>
      </div>
    </div>
  );
}