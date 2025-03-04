export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    // Password must be at least 8 characters long and contain:
    // - At least one uppercase letter
    // - At least one lowercase letter
    // - At least one number
    // - At least one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  export const validatePhone = (phone) => {
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    return phoneRegex.test(phone);
  };
  
  export const getAuthToken = () => {
    return localStorage.getItem('authToken');
  };
  
  export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  export const removeAuthToken = () => {
    localStorage.removeItem('authToken');
  };
  
  export const isTokenValid = (token) => {
    if (!token) return false;
    try {
      // Add your token validation logic here
      // For example, check if token is expired
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      return tokenData.exp * 1000 > Date.now();
    } catch (error) {
      return false;
    }
  };
  
  export const formatAuthError = (error) => {
    const errorMessages = {
      'auth/wrong-password': 'Invalid email or password',
      'auth/user-not-found': 'No account found with this email',
      'auth/email-already-in-use': 'Email is already registered',
      'auth/invalid-email': 'Please enter a valid email address',
      'auth/weak-password': 'Password should be at least 8 characters long'
    };
  
    return errorMessages[error.code] || 'An error occurred. Please try again.';
  };