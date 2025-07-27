import { useState } from 'react';
import { useCV } from '../../context/CVContext';
import { validatePersonalInfo } from '../../utils/validation';

export default function PersonalInfoForm() {
  const { state, dispatch } = useCV();
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    dispatch({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { [field]: value }
    });

    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const handleBlur = () => {
    const validationErrors = validatePersonalInfo(state.personalInfo);
    setErrors(validationErrors);
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
    gap: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '0.75rem',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(5px)',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    outline: 'none'
  };

  const errorStyle = {
    marginTop: '0.5rem',
    fontSize: '0.875rem',
    color: '#dc2626',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  };

  return (
    <div style={gridStyle}>
      <div>
        <label style={labelStyle}>
          Nama Lengkap *
        </label>
        <input
          type="text"
          value={state.personalInfo.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          onBlur={handleBlur}
          className="form-modern"
          style={{
            ...inputStyle,
            borderColor: errors.fullName ? '#ef4444' : 'rgba(0, 0, 0, 0.1)'
          }}
          placeholder="Masukkan nama lengkap Anda"
        />
        {errors.fullName && (
          <p style={errorStyle}>
            ⚠️ {errors.fullName}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle}>
          Jabatan Profesional
        </label>
        <input
          type="text"
          value={state.personalInfo.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="form-modern"
          style={inputStyle}
          placeholder="contoh: Web Developer"
        />
      </div>

      <div>
        <label style={labelStyle}>
          Email *
        </label>
        <input
          type="email"
          value={state.personalInfo.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={handleBlur}
          className="form-modern"
          style={{
            ...inputStyle,
            borderColor: errors.email ? '#ef4444' : 'rgba(0, 0, 0, 0.1)'
          }}
          placeholder="nama@email.com"
        />
        {errors.email && (
          <p style={errorStyle}>
            ⚠️ {errors.email}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle}>
          Nomor Telepon
        </label>
        <input
          type="tel"
          value={state.personalInfo.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={handleBlur}
          className="form-modern"
          style={{
            ...inputStyle,
            borderColor: errors.phone ? '#ef4444' : 'rgba(0, 0, 0, 0.1)'
          }}
          placeholder="+62 812-3456-7890"
        />
        {errors.phone && (
          <p style={errorStyle}>
            ⚠️ {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle}>
          Lokasi
        </label>
        <input
          type="text"
          value={state.personalInfo.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="form-modern"
          style={inputStyle}
          placeholder="Jakarta, Indonesia"
        />
      </div>

      <div>
        <label style={labelStyle}>
          LinkedIn URL
        </label>
        <input
          type="url"
          value={state.personalInfo.linkedin}
          onChange={(e) => handleChange('linkedin', e.target.value)}
          onBlur={handleBlur}
          className="form-modern"
          style={{
            ...inputStyle,
            borderColor: errors.linkedin ? '#ef4444' : 'rgba(0, 0, 0, 0.1)'
          }}
          placeholder="https://linkedin.com/in/namaanda"
        />
        {errors.linkedin && (
          <p style={errorStyle}>
            ⚠️ {errors.linkedin}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle}>
          GitHub URL
        </label>
        <input
          type="url"
          value={state.personalInfo.github}
          onChange={(e) => handleChange('github', e.target.value)}
          onBlur={handleBlur}
          className="form-modern"
          style={{
            ...inputStyle,
            borderColor: errors.github ? '#ef4444' : 'rgba(0, 0, 0, 0.1)'
          }}
          placeholder="https://github.com/username"
        />
        {errors.github && (
          <p style={errorStyle}>
            ⚠️ {errors.github}
          </p>
        )}
      </div>

      <div>
        <label style={labelStyle}>
          Portfolio URL
        </label>
        <input
          type="url"
          value={state.personalInfo.portfolio}
          onChange={(e) => handleChange('portfolio', e.target.value)}
          onBlur={handleBlur}
          className="form-modern"
          style={{
            ...inputStyle,
            borderColor: errors.portfolio ? '#ef4444' : 'rgba(0, 0, 0, 0.1)'
          }}
          placeholder="https://portfolio.com"
        />
        {errors.portfolio && (
          <p style={errorStyle}>
            ⚠️ {errors.portfolio}
          </p>
        )}
      </div>
    </div>
  );
}