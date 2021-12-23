declare interface Window {
  env?: {
    NODE_ENV: 'development' | 'staging' | 'production';
    NG_APP_API_URL: string;
  };
}
