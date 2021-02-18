const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col bg-background-primary-light dark:bg-background-primary-dark h-screen overflow-y-auto">
      {children}
    </div>
  );
};

export default Layout;
