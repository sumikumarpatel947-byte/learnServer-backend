// API Configuration
const API_CONFIG = {
  BASE_URL: process.env.NODE_ENV === 'production'
    ? process.env.PROD_API_URL || 'https://your-production-url.com'
    : process.env.DEV_API_URL || 'https://learnserver-backend.onrender.com',

  ENDPOINTS: {
    AUTH: {
      LOGIN: '/api/auth/login',
      SIGNUP: '/api/auth/signup',
    },
  },

  getFullUrl: (endpoint) => {
    return `${API_CONFIG.BASE_URL}${endpoint}`;
  }
};

module.exports = API_CONFIG;