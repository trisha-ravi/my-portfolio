function PhotoSection() {
  return (
    <div className="photo-section">
      <div className="photo-container">
        <div className="photo-placeholder">
          YOUR PHOTO HERE
        </div>
      </div>
      
      {/* Decorative floral element */}
      <svg 
        className="floral-accent" 
        viewBox="0 0 150 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="75" cy="75" r="20" fill="#1a1a1a" opacity="0.6"/>
        <ellipse cx="75" cy="45" rx="12" ry="25" fill="#2a2a2a" opacity="0.7"/>
        <ellipse cx="105" cy="75" rx="12" ry="25" fill="#2a2a2a" opacity="0.7" transform="rotate(90 105 75)"/>
        <ellipse cx="75" cy="105" rx="12" ry="25" fill="#2a2a2a" opacity="0.7"/>
        <ellipse cx="45" cy="75" rx="12" ry="25" fill="#2a2a2a" opacity="0.7" transform="rotate(90 45 75)"/>
        <ellipse cx="95" cy="55" rx="10" ry="20" fill="#3a3a3a" opacity="0.6" transform="rotate(45 95 55)"/>
        <ellipse cx="95" cy="95" rx="10" ry="20" fill="#3a3a3a" opacity="0.6" transform="rotate(-45 95 95)"/>
        <ellipse cx="55" cy="95" rx="10" ry="20" fill="#3a3a3a" opacity="0.6" transform="rotate(45 55 95)"/>
        <ellipse cx="55" cy="55" rx="10" ry="20" fill="#3a3a3a" opacity="0.6" transform="rotate(-45 55 55)"/>
      </svg>
    </div>
  )
}

export default PhotoSection;