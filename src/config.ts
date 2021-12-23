export const config = {
  production: window.env?.NODE_ENV === 'production',
  apiUrl: window.env?.NG_APP_API_URL || 'http://localhost:3000',
};
