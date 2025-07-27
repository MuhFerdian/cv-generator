import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

export default function ATSTemplate({ data }) {
  const formatDate = (date, isCurrent = false) => {
    if (isCurrent) return 'Present';
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName || 'Your Name'}</h1>
        {data.personalInfo.title && (
          <p className="text-xl text-gray-600 mb-4">{data.personalInfo.title}</p>
        )}
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <span>{data.personalInfo.linkedin}</span>
            </div>
          )}
          {data.personalInfo.github && (
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span>{data.personalInfo.github}</span>
            </div>
          )}
          {data.personalInfo.portfolio && (
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span>{data.personalInfo.portfolio}</span>
            </div>
          )}
        </div>
      </div>

      {data.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 border-b border-gray-300 pb-1">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">WORK EXPERIENCE</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-semibold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}{exp.location && `, ${exp.location}`}</p>
                </div>
                <div className="text-sm text-gray-600">
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </div>
              </div>
              {exp.description.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.description.map((desc, i) => desc.trim() && (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">EDUCATION</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}{edu.location && `, ${edu.location}`}</p>
                </div>
                <div className="text-sm text-gray-600">
                  {edu.startYear} - {edu.endYear}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {(data.skills.hard.length > 0 || data.skills.soft.length > 0) && (
          <div>
            <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">SKILLS</h2>
            {data.skills.hard.length > 0 && (
              <div className="mb-3">
                <h3 className="font-medium mb-1">Technical Skills</h3>
                <p className="text-gray-700">{data.skills.hard.join(', ')}</p>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div className="mb-3">
                <h3 className="font-medium mb-1">Soft Skills</h3>
                <p className="text-gray-700">{data.skills.soft.join(', ')}</p>
              </div>
            )}
          </div>
        )}

        {data.skills.languages.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">LANGUAGES</h2>
            {data.skills.languages.map((lang, index) => (
              <div key={index} className="flex justify-between text-gray-700 mb-1">
                <span>{lang.name}</span>
                <span className="text-gray-600">{lang.level}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">PROJECTS</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">{project.name}</h3>
                <div className="flex gap-2 text-sm text-blue-600">
                  {project.liveUrl && <span>Live Demo</span>}
                  {project.githubUrl && <span>GitHub</span>}
                </div>
              </div>
              {project.technologies.length > 0 && (
                <p className="text-gray-600 text-sm mb-1">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
              )}
              {project.description && (
                <p className="text-gray-700">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {data.awards.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">AWARDS & CERTIFICATIONS</h2>
          {data.awards.map((award, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{award.title}</h3>
                  <p className="text-gray-600">{award.issuer}</p>
                  {award.description && (
                    <p className="text-gray-700 text-sm mt-1">{award.description}</p>
                  )}
                </div>
                <div className="text-sm text-gray-600">{award.year}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}