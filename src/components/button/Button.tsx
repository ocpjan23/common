import React, { MouseEventHandler } from 'react';
import { StyledButton } from './SyledButton';

export type ButtonProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
    size,
    primary,
    disabled,
    text,
    onClick,
    ...props
}) => (
    <StyledButton
        type="button"
        onClick={onClick}
        primary={primary}
        disabled={disabled}
        size={size}
        {...props}
    >{text}</StyledButton>
);

export default Button;
