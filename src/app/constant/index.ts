export interface AppConfig {
  BASE_API_URL: string;
  title: string;
}

export const APP_CONFIG: AppConfig = {
   BASE_API_URL: 'http://119.23.255.113:3080',
  //BASE_API_URL: 'http://127.0.0.1:3080',
  title: 'Dependency Injection'
};
