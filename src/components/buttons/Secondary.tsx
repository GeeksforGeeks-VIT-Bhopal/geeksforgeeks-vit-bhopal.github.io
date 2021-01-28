const Secondary: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...props }) => {
  return (
    <button
      className="bg-secondary text-white flex items-center gap-3 font-semibold h-full px-5 rounded focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 shadow-sm"
      {...props}
    >
      {children}
    </button>
  );
};

export default Secondary;
