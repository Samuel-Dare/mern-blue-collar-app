import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (inputValue, navigateTo) => {
    setSearchValue(inputValue);
    console.log(inputValue);

    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <SearchContext.Provider value={{ searchValue, onSearch: handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error('The SearchContext was used outside of the SearchProvider');
  return context;
};

export { SearchProvider, useSearchContext };
