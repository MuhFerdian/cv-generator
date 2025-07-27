import { Mail, Phone, MapPin, Globe, Github, Linkedin, Award, Calendar } from 'lucide-react';

export default function CreativeTemplate({ data }) {
  const formatDate = (date, isCurrent = false) => {
    if (isCurrent) return 'Present';
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.personalInfo.fullName || 'Your Name'}</h1>
            {data.personalInfo.title && (
              <p className="text-xl opacity-90 mb-4">{data.personalInfo.title}</p>
            )}
          </div>
          
          <div className="space-y-2 text-sm">
            {data.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </div>
          )}
          {data.personalInfo.github && (
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </div>
          )}
          {data.personalInfo.portfolio && (
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <Globe className="h-4 w-4" />
              <span>Portfolio</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {data.summary && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
              <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{data.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {data.experience.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
                </div>
                {data.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200"></div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                          {exp.location && <p className="text-gray-600">{exp.location}</p>}
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 text-sm mt-2 sm:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
                        </div>
                      </div>
                      {exp.description.length > 0 && (
                        <ul className="space-y-2">
                          {exp.description.map((desc, i) => desc.trim() && (
                            <li key={i} className="text-gray-700 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {data.projects.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                </div>
                <div className="grid gap-6">
                  {data.projects.map((project, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">Live</span>
                          )}
                          {project.githubUrl && (
                            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">Code</span>
                          )}
                        </div>
                      </div>
                      {project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-white text-blue-600 text-xs rounded-full border border-blue-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {project.description && (
                        <p className="text-gray-700">{project.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {data.education.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
                  <h2 className="text-xl font-bold text-gray-800">Education</h2>
                </div>
                {data.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                    <p className="text-gray-600 text-sm">{edu.startYear} - {edu.endYear}</p>
                  </div>
                ))}
              </div>
            )}

            {(data.skills.hard.length > 0 || data.skills.soft.length > 0) && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
                  <h2 className="text-xl font-bold text-gray-800">Skills</h2>
                </div>
                {data.skills.hard.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-800 mb-2">Technical</h3>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.hard.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {data.skills.soft.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-800 mb-2">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.soft.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {data.skills.languages.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
                  <h2 className="text-xl font-bold text-gray-800">Languages</h2>
                </div>
                <div className="space-y-3">
                  {data.skills.languages.map((lang, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{lang.name}</span>
                        <span className="text-blue-600 text-sm font-medium">{lang.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.awards.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
                  <h2 className="text-xl font-bold text-gray-800">Awards</h2>
                </div>
                {data.awards.map((award, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 mb-4 border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{award.title}</h3>
                        <p className="text-gray-600 text-sm">{award.issuer}</p>
                        <p className="text-yellow-600 text-sm font-medium">{award.year}</p>
                        {award.description && (
                          <p className="text-gray-700 text-sm mt-2">{award.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}