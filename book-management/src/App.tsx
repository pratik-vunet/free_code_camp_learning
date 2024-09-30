import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tabs from './components/Tabs';
import BooksTab from './components/BooksTab';
import MyCollectionsTab from './components/MyCollectionsTab';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import './index.css';
import BooksContextProvider from './components/context/BooksContext'; // Import the context provider
import useTheme from './hooks/useTheme';

const App: React.FC = () => {
  const [theme, setTheme] = useTheme(); // Use the useTheme hook

  return (
    <BooksContextProvider>
      <Router>
        <div className={theme}>
          <nav className='navbar'>
            <div className="heading">
              <h1>BookVault</h1>
            </div>
            <button onClick={() => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))}>
              Toggle Theme
            </button>
          </nav>
          <Tabs />
          <Routes>
            <Route path="/" element={<BooksTab />} />
            <Route path="/collections" element={<MyCollectionsTab />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </Router>
    </BooksContextProvider>
  );
};

export default App;
