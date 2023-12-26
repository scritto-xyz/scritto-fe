export const useAuth = () => {
    return localStorage.getItem('seekr-jwt');
};