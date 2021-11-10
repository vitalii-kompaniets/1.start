import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut }) => {
    return (
        <>
            <button className="btn btn-primary" onClick={onLogOut}>
                Выйти из системы
            </button>

            <button className="btn btn-secondary" onClick={onLogin}>
                Войти
            </button>
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
