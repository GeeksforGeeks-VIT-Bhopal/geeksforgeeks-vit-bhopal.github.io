const Custom: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex items-center gap-3 font-semibold rounded focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Custom;
