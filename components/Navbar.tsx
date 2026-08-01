import User from './user.png';
import Map from './map.png';
import Traffic from './traffic.png';
const Navbar = ({ onToggleSidebar }) => (
  <header className="navbar">
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <button
        onClick={onToggleSidebar}
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          color: '#2563eb',
        }} 
      >
        &rarr;
      </button>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: '1',
          minWidth: '100px',
        }}
      >
        <h2 style={{ margin: 0 }}>
          <img
            style={{ height: '20px', width: '20px', paddingRight: '10px' }}
            src={Map}
          />
          Mapora
        </h2>
      </div>
    </div>

    <form action="" style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="search"
        placeholder="Search for place, street, or cities"
        className="search-bar"
      />
      <button
        style={{
          display: 'flex',
          height: '25px',
          fontSize: '11px',
          alignItems: 'center',
          border: 'none',
          borderRadius: '20px',
        }}
      >
        &rarr;
      </button>
    </form>

    <div style={{ display: 'flex', gap: '15px' }}>
      <button
        style={{
          display: 'flex',
          height: '25px',
          fontSize: '11px',
          alignItems: 'center',
          border: 'none',
          borderRadius: '20px',
        }}
        className="nav-img"
      >
        <img style={{ height: '20px', width: '20px' }} src={Traffic} alt="" />
        Traffic
      </button>
      <button
        style={{
          display: 'flex',
          height: '25px',
          fontSize: '11px',
          alignItems: 'center',
          border: 'none',
          borderRadius: '20px',
        }}
      >
        {' '}
        <img
          style={{ height: '20px', width: '20px' }}
          src="https://static.thenounproject.com/png/4036103-200.png"
          className="nav-img"
        />{' '}
        Layers{' '}
      </button>
      <button
        style={{
          display: 'flex',
          height: '25px',
          fontSize: '11px',
          alignItems: 'center',
          border: 'none',
          borderRadius: '20px',
        }}
      >
        {' '}
        <img
          style={{ height: '20px', width: '20px' }}
          src="https://static.thenounproject.com/png/5153405-200.png"
          className="nav-img"
        />{' '}
        Saved{' '}
      </button>
      <button
        style={{
          display: 'flex',
          height: '25px',
          fontSize: '11px',
          alignItems: 'center',
          border: 'none',
          borderRadius: '20px',
        }}
        className="sign-in-btn"
      >
        {' '}
        <img
          style={{ height: '20px', width: '20px' }}
          src={User}
          className="nav-img"
        />{' '}
        Sign in{' '}
      </button>
    </div>
  </header>
);
export default Navbar;
