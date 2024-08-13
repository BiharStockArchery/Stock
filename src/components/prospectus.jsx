import React, { useEffect } from 'react';


const Prospectus = () => {
  useEffect(() => {
    window.open('./images/prospectus.pdf', '_blank');
  }, []);

  return (
    <div>
      
      <div style={{ padding: '20px' }}>
        <h1>Prospectus</h1>
        <p><a href="./images/prospectus.pdf" target="_blank" rel="noopener noreferrer">click here to open the prospectus</a>.</p>
      </div>
      
    </div>
  );
};

export default Prospectus;