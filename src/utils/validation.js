export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validatePersonalInfo = (personalInfo) => {
  const errors = {};
  
  if (!personalInfo.fullName.trim()) {
    errors.fullName = 'Full name is required';
  }
  
  if (!personalInfo.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(personalInfo.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (personalInfo.phone && !validatePhone(personalInfo.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (personalInfo.linkedin && !validateURL(personalInfo.linkedin)) {
    errors.linkedin = 'Please enter a valid LinkedIn URL';
  }
  
  if (personalInfo.github && !validateURL(personalInfo.github)) {
    errors.github = 'Please enter a valid GitHub URL';
  }
  
  if (personalInfo.portfolio && !validateURL(personalInfo.portfolio)) {
    errors.portfolio = 'Please enter a valid portfolio URL';
  }
  
  return errors;
};