import React from 'react';

function ReloadButton() {
  const reloadPage = () => {
    // Reloads the current page
    window.location.reload();
  };

  return (
    <button className='reload-button' onClick={reloadPage}>
      Reload Page
    </button>
  );
}

export default ReloadButton;
