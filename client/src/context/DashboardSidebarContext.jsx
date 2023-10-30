import { createContext, useContext, useState } from 'react';

const DashboardSidebarContext = createContext();

function DashboardSidebarProvider({ children }) {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('Dashboard');
  //   const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarItemClick = (selected) => {
    setSelectedSidebarItem(selected);
  };

  //   const toggleSidebar = () => {
  //     setSidebarOpen(!sidebarOpen);
  //   };

  return (
    <DashboardSidebarContext.Provider
      value={{
        selectedSidebarItem,
        setSelectedSidebarItem,
        onSidebarItemClick: handleSidebarItemClick,
      }}
    >
      {children}
    </DashboardSidebarContext.Provider>
  );
}

function useDashboardSidebar() {
  const context = useContext(DashboardSidebarContext);
  if (context === undefined)
    throw new Error(
      'DashboardSidebarContext was used outside of DashboardSidebarProvider',
    );
  return context;
}

export { DashboardSidebarProvider, useDashboardSidebar };
