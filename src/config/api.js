const api = {
  key: process.env.local ? process.env.local.REACT_APP_KEY : process.env.REACT_APP_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}

export default api;