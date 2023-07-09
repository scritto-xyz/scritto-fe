export const useAuth = () => {
    return localStorage.getItem('scritto-jwt');
};