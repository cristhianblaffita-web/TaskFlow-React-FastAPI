export const useEmailValidation = (email) =>
/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);