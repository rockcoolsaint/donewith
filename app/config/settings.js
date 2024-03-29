import Constants from 'expo-constants';

const settings = {
  dev: {
    apiUrl: 'https://donewithapi.onrender.com/api'
  },
  stanging: {
    apiUrl: 'https://donewithapi.onrender.com/api'
  },
  prod: {
    apiUrl: 'https://donewithapi.onrender.com/api'
  }
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.stanging;
  return settings.prod;
}

export default getCurrentSettings();