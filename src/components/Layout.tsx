const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-background-primary-light dark:bg-background-primary-dark h-screen">
      {children}
    </div>
  );
};

export default Layout;
