import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const NumComponent = ({ children }) => {
    return React.Children.map(children, (child) => {
        const num = children.indexOf(child) + 1;
        console.log(num);
    });
};

NumComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumComponent>
                <Component />
                <Component />
                <Component />
            </NumComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
