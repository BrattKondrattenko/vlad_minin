import React, {FC} from "react";
import classes from "./Button.module.css";

type ButtonProps = {
    children: string,
    onClick?: () => unknown,
    style?: React.CSSProperties,
    disabled?: boolean
    isActive?: boolean,
}
const Button: FC<ButtonProps> = ({ children, onClick, isActive, ...props }) => {

  return (
    <button
        {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
