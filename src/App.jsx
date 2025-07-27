import { useState } from 'react';
import { CVProvider } from './context/CVContext';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import Header from './components/Header';
import { generatePDF } from './utils/pdfGenerator';

function App() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleGeneratePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await generatePDF('cv-preview', 'my-cv');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <CVProvider>
      <div className="cv-container min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
        
        <Header onGeneratePDF={handleGeneratePDF} isGeneratingPDF={isGeneratingPDF} />
        
        <main className="container mx-auto px-4 py-8" style={{maxWidth: '1200px'}}>
          <div className="text-center mb-12">
            <h1 className="gradient-title text-4xl md:text-6xl font-bold mb-4" style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              CV Generator
            </h1>
            <p className="text-lg text-gray-600 mx-auto" style={{
              maxWidth: '600px',
              color: '#4b5563',
              fontSize: '1.1rem'
            }}>
              Buat CV profesional dengan mudah. Pilih template yang sesuai dan download dalam format PDF.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1200 ? '1fr 1fr' : '1fr',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div>
              <CVForm />
            </div>
            
            <div style={{position: 'sticky', top: '2rem', height: 'fit-content'}}>
              <CVPreview />
            </div>
          </div>
        </main>
        
        <footer className="text-center py-8 text-gray-500" style={{
          textAlign: 'center',
          padding: '2rem 0',
          color: '#6b7280'
        }}>
          <p>&copy; 2024 CV Generator. Dibuat dengan ❤️ menggunakan React & Tailwind CSS.</p>
        </footer>
      </div>
    </CVProvider>
  );
}

export default App;
