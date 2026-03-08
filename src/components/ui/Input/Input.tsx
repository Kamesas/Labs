type tProps = React.ComponentPropsWithoutRef<"input">;

export const Input = ({ className, ...props }: tProps) => {
  return (
    <input
      className={`w-full p-2 rounded-lg border-2 border-green-600 text-green-600 font-fira ${className}`}
      {...props}
    />
  );
};
