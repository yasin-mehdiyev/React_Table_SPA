import React, { Fragment } from 'react';
import ButtonProps from '../../models/types/Button';

const Button: React.FC<ButtonProps> = ({ children, className, handleClick }) => {
    return (
        <Fragment>
            <button onClick={() => { handleClick(); }} className={className}>
                {children}
            </button>
        </Fragment>
    )
};

export default Button;