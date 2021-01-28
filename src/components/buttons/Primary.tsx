const Primary: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-primary flex justify-center items-center gap-3 text-white font-semibold h-12 px-5 rounded focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Primary;
