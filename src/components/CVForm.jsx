import { User, FileText, Briefcase, GraduationCap, Target, FolderOpen, Award } from 'lucide-react';
import PersonalInfoForm from './forms/PersonalInfoForm';
import SummaryForm from './forms/SummaryForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import AwardsForm from './forms/AwardsForm';

export default function CVForm() {
  const formSections = [
    {
      icon: User,
      title: 'Informasi Personal',
      description: 'Data diri dan kontak Anda',
      component: PersonalInfoForm,
      color: '#3b82f6'
    },
    {
      icon: FileText,
      title: 'Ringkasan Profesional',
      description: 'Gambaran singkat tentang diri Anda',
      component: SummaryForm,
      color: '#8b5cf6'
    },
    {
      icon: Briefcase,
      title: 'Pengalaman Kerja',
      description: 'Riwayat pekerjaan dan pencapaian',
      component: ExperienceForm,
      color: '#10b981'
    },
    {
      icon: GraduationCap,
      title: 'Pendidikan',
      description: 'Riwayat pendidikan formal',
      component: EducationForm,
      color: '#f59e0b'
    },
    {
      icon: Target,
      title: 'Keahlian',
      description: 'Kemampuan teknis dan soft skills',
      component: SkillsForm,
      color: '#ef4444'
    },
    {
      icon: FolderOpen,
      title: 'Proyek',
      description: 'Portfolio dan karya Anda',
      component: ProjectsForm,
      color: '#6366f1'
    },
    {
      icon: Award,
      title: 'Penghargaan & Sertifikasi',
      description: 'Prestasi dan sertifikat',
      component: AwardsForm,
      color: '#eab308'
    }
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      {formSections.map((section, index) => {
        const IconComponent = section.icon;
        const FormComponent = section.component;
        
        const cardStyle = {
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease'
        };

        const iconStyle = {
          padding: '0.75rem',
          background: section.color,
          borderRadius: '0.75rem',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        };
        
        return (
          <div key={index} className="glass-card" style={cardStyle}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
              <div style={iconStyle}>
                <IconComponent style={{width: '1.5rem', height: '1.5rem', color: 'white'}} />
              </div>
              <div>
                <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0, marginBottom: '0.25rem'}}>
                  {section.title}
                </h2>
                <p style={{color: '#4b5563', margin: 0, fontSize: '0.875rem'}}>
                  {section.description}
                </p>
              </div>
            </div>
            <FormComponent />
          </div>
        );
      })}
    </div>
  );
}