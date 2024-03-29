/**
 * Formats a date object into a readable string.
 * @param {Date} date - The date object to format.
 * @returns {string} - A string representing the formatted date.
 */
const formatDate = (date) => {
    const options = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false
    };
  
    // Convert to local string with specified options
    return date.toLocaleString('en-US', options);
  };
  
  module.exports = {
    formatDate
  };
  