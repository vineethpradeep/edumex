import classNames from "classnames";
import "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className,
  ...props
}) => {
  const btnClass = classNames(
    "btn",
    {
      "btn-primary": variant === "primary",
      "btn-secondary": variant === "secondary",
      "btn-hero": variant === "hero",
    },
    className
  );

  return (
    <button type={type} className={btnClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
