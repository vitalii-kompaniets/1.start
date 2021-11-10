import React from "react";

const withAuth = (SimpleComponent) => (props) => {
    const handleLogOut = () => {
        console.log("Выйти");
    };
    const handleLogin = () => {
        console.log("Войти");
    };

    const isAuth = localStorage.getItem("user");
    return (
        <>
            {isAuth ? (
                <SimpleComponent {...props} onLogOut={handleLogOut} />
            ) : (
                <SimpleComponent {...props} onLogin={handleLogin} />
            )}
        </>
    );
};

export default withAuth;
