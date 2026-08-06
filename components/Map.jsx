import React from 'react';
const Map = () => {
  return (
    <div className="map-container" style={{ width: '100%', height: '100%' }}>
      <div className="map-cnt" style={{ width: '100%', height: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6301368894024!2d3.5357710000000004!3d6.4415182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f92da0f59d%3A0xc020080e1f213866!2sLekki%20Conservation%20Centre!5e0!3m2!1sen!2sng!4v1784203165222!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Lekki Conservation Centre Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
