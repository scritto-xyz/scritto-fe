export const useAuth = () => {
    return localStorage.getItem('seekr-jwt');
};

export const useAuthenticatedHeaders = () => {
    const jwt = useAuth();
    return {headers: {'Authorization': 'Bearer ' + jwt}};
}