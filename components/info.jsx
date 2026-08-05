

import Direction from './direction.png'
// Info.tsx
export default function Info() {
  return (
    <div className="info-panel-content" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px' }}>
      
      {/* 1. Header Image */}
      <div style={{ position: 'relative' }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFX1q825VYN76dvnIflXXeesiZeWJVVRdFlYl_CZ7KvA&s=10" 
             alt="Lekki Conservation Center" 
             style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px' }} />
      </div>

      {/* 2. Title & Rating */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: '0', fontSize: '20px' }}>Lekki Conservation Centre</h2>
          <span style={{ background: '#e6f4ea', color: '#1e8e3e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>4.6</span>
        </div>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>Nature reserve • Lekki, Lagos</p>
        <p style={{ margin: '0', fontSize: '14px', color: '#1e8e3e', fontWeight: '500' }}>Open now • 8:00 AM – 6:00 PM</p>
      </div>

      {/* 3. Action Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn-action" style={{alignItems:'center', borderRadius:'5px', height:'29px', backgroundColor:'inherit'}}> <img style={{width:'10px', height:'10px'}} src={Direction} alt=""/> Directions</button>

        <button className="btn-action" style={{alignItems:'center', borderRadius:'5px', height:'29px', backgroundColor:'inherit'}}> <img style={{width:'10px', height:'10px'}} src="https://static.thenounproject.com/png/5153405-200.png" alt=""/>Save</button>

        <button className="btn-action" style={{alignItems:'center', borderRadius:'5px', height:'29px', backgroundColor:'inherit'}}>Share</button>
      </div>

      {/* 4. Details Section */}
      <div style={{ fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <h2>Details</h2>
        <p>📍 Paintball Bus Stop, Lekki-Epe Expressway</p>
        <p>🕒 Open now • 8:00 AM - 6:00 PM</p>
        <p>📞 +234 803 123 4567</p>
        <p>🌐 lekkiconservationcentre.org</p>
        <button style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', textAlign: 'left' }}>See more</button>
      </div>

      {/* 5. Photos Section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <strong>Photos</strong>
          <span style={{ color: '#2563eb', fontSize: '12px', cursor: 'pointer' }}>See all</span>
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          {[1,2,3].map(i => (
            <img key={i} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFX1q825VYN76dvnIflXXeesiZeWJVVRdFlYl_CZ7KvA&s=10" style={{ width: '32%', height: '70px', borderRadius: '4px', objectFit: 'cover' }} />
          ))}
        </div>
      </div>

      {/* 6. Reviews Section */}
      {/* Reviews Section */}
<div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <strong>Reviews</strong>
    <span style={{ color: '#2563eb', fontSize: '12px', cursor: 'pointer' }}>See all</span>
  </div>
  
  <h1 style={{ margin: '10px 0' }}>4.6</h1>
  
  {/* The Colorful Rating Bars with Star Labels */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    {[5, 4, 3, 2, 1].map((star, index) => (
      <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
        {/* Star Icon Label */}
        <span style={{ width: '40px', display: 'flex', alignItems: 'center', gap: '2px' }}>
          {star} ★
        </span>
        
        {/* Colorful Bar */}
        <div style={{ flex: 1, height: '8px', background: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ 
            height: '100%', 
            width: `${[85, 65, 30, 15, 5][index]}%`, 
            background: ['#1e8e3e', '#88c54d', '#fcc934', '#f29900', '#d93025'][index] 
          }} />
        </div>
      </div>
    ))}
  </div>
  
  <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>(1,248 reviews)</p>
</div>
    </div>
  );
}