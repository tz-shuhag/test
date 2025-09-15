// Utility for generating unique IDs
export const genid = () => {
  // Implement a simple random ID generator or use a library
  return Math.random().toString(36).substring(2, 10);
};