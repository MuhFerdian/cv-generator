import { Download, FileText, Sparkles } from 'lucide-react';
import { useCV } from '../context/CVContext';

export default function Header({ onGeneratePDF, isGeneratingPDF }) {
  const { state, dispatch } = useCV();

  const handleTemplateChange = (template) => {
    dispatch({ type: 'SET_TEMPLATE', payload: template });
  };

  const headerStyle = {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  const iconContainerStyle = {
    padding: '0.5rem',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const selectStyle = {
    padding: '0.5rem 1rem',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    outline: 'none'
  };

  return (
    <header className="glass-effect sticky top-0 z-50 shadow-lg" style={headerStyle}>
      <div className="container mx-auto px-4 py-6" style={{maxWidth: '1200px'}}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{
          display: 'flex',
          flexDirection: window.innerWidth < 640 ? 'column' : 'row',
          alignItems: window.innerWidth < 640 ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div className="flex items-center gap-3" style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
            <div style={iconContainerStyle}>
              <FileText className="h-6 w-6 text-white" style={{width: '1.5rem', height: '1.5rem', color: 'white'}} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#19192bff', margin: 0}}>
                CV Generator
              </h1>
              <p className="text-sm text-gray-600" style={{fontSize: '0,500rem', color: '#3a424eff', margin: 0}}>
                Professional Resume Builder
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div className="flex items-center gap-3" style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <span className="text-sm font-medium text-gray-700 flex items-center gap-1" style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#374151',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <Sparkles className="h-4 w-4" style={{width: '1rem', height: '1rem'}} />
                Template:
              </span>
              <select
                value={state.selectedTemplate}
                onChange={(e) => handleTemplateChange(e.target.value)}
                className="form-modern"
                style={selectStyle}
              >
                <option value="ats">🤖 ATS-Friendly</option>
                <option value="creative">🎨 Creative</option>
              </select>
            </div>
            
            <button
              onClick={onGeneratePDF}
              disabled={isGeneratingPDF}
              className="btn-modern"
              style={{
                opacity: isGeneratingPDF ? 0.5 : 1,
                cursor: isGeneratingPDF ? 'not-allowed' : 'pointer'
              }}
            >
              <Download className="h-4 w-4" style={{width: '1rem', height: '1rem'}} />
              {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}