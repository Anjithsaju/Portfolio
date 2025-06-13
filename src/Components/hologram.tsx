// HologramCard.jsx
import "./holo.css";
export default function HologramCard() {
  return (
    <div className="holo-card scale-100 floating-force">
      {/* <div className="holo-overlay" /> */}
      <div className="holo-content">
        <div className="holo-symbol" />
        <div className="holo-fingerprint" />
        <div className="holo-text">
          <p className="aurebesh">Anjith Saju</p>
          <p className="aurebesh">Kerala · India</p>
          <p className="aurebesh">ID: 1138-AJS</p>
        </div>
      </div>
      
    </div>
    
  );
}
