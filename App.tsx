import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Info from './components/info';
import './index.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null); // Initially null

  const handleSearch = (query) => {
    // Basic mock logic: In a real app, you'd fetch this from an API
    if (query.toLowerCase().includes('lekki')) {
      setSelectedPlace({
        name: "Lekki Conservation Centre",
        rating: 4.6,
        reviews: 1248,
        address: "Paintball Bus Stop, Lekki-Epe Expressway",
        phone: "+234 803 123 4567"
      });
    } else {
      alert("Place not found. Try searching 'Lekki'");
    }
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} onSearch={handleSearch} />
      <div className="layout-row">
        <Sidebar isOpen={isSidebarOpen} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      
      </div>
      <div className='map-and-info'>

        <main className="map-container"><Map /></main>
        <aside className="info-panel"><Info place={selectedPlace} /></aside>
      </div>
       
    </div>
  );
}
export default App;
