import { createContext, useContext, useReducer } from 'react';

const CVContext = createContext();

const initialState = {
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    portfolio: '',
    location: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: {
    hard: [],
    soft: [],
    languages: []
  },
  projects: [],
  awards: [],
  selectedTemplate: 'ats'
};

function cvReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload }
      };
    case 'UPDATE_SUMMARY':
      return {
        ...state,
        summary: action.payload
      };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, action.payload]
      };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map((exp, index) =>
          index === action.index ? { ...exp, ...action.payload } : exp
        )
      };
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter((_, index) => index !== action.index)
      };
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education, action.payload]
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((edu, index) =>
          index === action.index ? { ...edu, ...action.payload } : edu
        )
      };
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter((_, index) => index !== action.index)
      };
    case 'UPDATE_SKILLS':
      return {
        ...state,
        skills: { ...state.skills, ...action.payload }
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project, index) =>
          index === action.index ? { ...project, ...action.payload } : project
        )
      };
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((_, index) => index !== action.index)
      };
    case 'ADD_AWARD':
      return {
        ...state,
        awards: [...state.awards, action.payload]
      };
    case 'UPDATE_AWARD':
      return {
        ...state,
        awards: state.awards.map((award, index) =>
          index === action.index ? { ...award, ...action.payload } : award
        )
      };
    case 'REMOVE_AWARD':
      return {
        ...state,
        awards: state.awards.filter((_, index) => index !== action.index)
      };
    case 'SET_TEMPLATE':
      return {
        ...state,
        selectedTemplate: action.payload
      };
    default:
      return state;
  }
}

export function CVProvider({ children }) {
  const [state, dispatch] = useReducer(cvReducer, initialState);

  return (
    <CVContext.Provider value={{ state, dispatch }}>
      {children}
    </CVContext.Provider>
  );
}

export function useCV() {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
}