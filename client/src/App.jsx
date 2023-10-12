// import "./App.css";

import ThemeToggle from './ui/ThemeToggle';

function App() {
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  return (
    <div>
      <ThemeToggle />
      <p className={className}>Blue Collar Application</p>
      <h1 className="tracking-widest">CODES</h1>
    </div>
  );
}

export default App;
