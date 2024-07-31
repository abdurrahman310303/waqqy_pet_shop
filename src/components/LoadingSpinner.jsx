import React from 'react';
import { Icon } from '@iconify/react';

const LoadingSpinner = ({ size = 'md', message = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'fs-6',
    md: 'fs-4', 
    lg: 'fs-2'
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <Icon 
        icon="mdi:loading" 
        className={`${sizeClasses[size]} text-primary mb-3`}
        style={{ animation: 'spin 1s linear infinite' }}
      />
      <p className="text-muted mb-0">{message}</p>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export const PawLoader = () => (
  <div className="d-flex justify-content-center align-items-center py-5">
    <div className="paw-loader">
      <Icon icon="mdi:paw" className="fs-1 text-primary" />
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    <style jsx>{`
      .paw-loader {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .dots {
        display: flex;
        gap: 4px;
        margin-top: 10px;
      }
      
      .dots span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--bs-primary);
        animation: bounce 1.4s ease-in-out infinite both;
      }
      
      .dots span:nth-child(1) { animation-delay: -0.32s; }
      .dots span:nth-child(2) { animation-delay: -0.16s; }
      .dots span:nth-child(3) { animation-delay: 0s; }
      
      @keyframes bounce {
        0%, 80%, 100% {
          transform: scale(0);
        }
        40% {
          transform: scale(1);
        }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
