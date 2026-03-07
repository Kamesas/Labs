import "./Button.scss";

type tProps = React.ComponentPropsWithoutRef<"button">;

export const Button = ({ children, className, ...props }: tProps) => {
  return (
    <button className={`Button ${className}`} {...props}>
      {children}
    </button>
  );
};
