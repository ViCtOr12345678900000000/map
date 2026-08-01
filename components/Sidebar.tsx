// Sidebar.tsx
import React from 'react';
import Explore from './explore.png';
import Direction from './direction.png';
import Recent from './recent.png';
import Contribute from './contribute.png';
import Setting from './setting.png';
import Help from './help.png';
import DarkMode from './dark-mode.png';

const Sidebar = ({ isOpen, isDarkMode, toggleDarkMode }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        {/* Navigation Items */}
        <div className="nav-item">
          <img
            style={{ height: '20px', width: '20px' }}
            src={Explore}
            className="nav-img"
            alt="Explore"
          />{' '}
          Explore
        </div>
        <div className="nav-item">
          <img
            style={{ height: '20px', width: '20px' }}
            src={Direction}
            className="nav-img"
            alt="Directions"
          />{' '}
          Directions
        </div>
        <div className="nav-item">
          <img
            style={{ height: '20px', width: '20px' }}
            src="https://static.thenounproject.com/png/5153405-200.png"
            className="nav-img"
            alt="Saved"
          />{' '}
          Saved Places
        </div>
        <div className="nav-item">
          <img
            style={{ height: '20px', width: '20px' }}
            src={Recent}
            className="nav-img"
            alt="Recent"
          />{' '}
          Recents
        </div>
        <div className="nav-item">
          <img
            style={{ height: '20px', width: '20px' }}
            src={Contribute}
            className="nav-img"
            alt="Contribute"
          />{' '}
          Contribute
        </div>

        {/* Bottom Section */}
        <div className="sidebar-content1">
          <div className="nav-item">
            <img
              style={{ height: '20px', width: '20px' }}
              src={Setting}
              className="nav-img"
              alt="Settings"
            />{' '}
            Settings
          </div>
          <div className="nav-item">
            <img
              style={{ height: '20px', width: '20px' }}
              src={Help}
              className="nav-img"
              alt="Help"
            />{' '}
            Help
          </div>
          <div className="nav-item">
            <img
              style={{ height: '20px', width: '20px' }}
              src={DarkMode}
              className="nav-img"
              alt="Dark Mode Toggle"
            />
            <button
              onClick={toggleDarkMode}
              style={{
                backgroundColor: 'inherit',
                border: 'none',
                cursor: 'pointer',
                color: '#2563eb',
              }}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
