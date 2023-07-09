import { useNavigate } from "@solidjs/router";

const NotAuthorized = () => {
    const navigate = useNavigate();
    navigate('/login');
    console.log('navigating to login');
    return (
        <></>
    );
};

export default NotAuthorized;