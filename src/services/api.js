// API service abstraction for PiHR
// Replace baseURL with your backend endpoint

const baseURL = 'https://api.example.com';

export const fetchData = async (endpoint) => {
  const res = await fetch(`${baseURL}/${endpoint}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

// Add more API methods as needed
