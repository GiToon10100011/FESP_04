"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

interface MenuDetailProps {
  params: {
    id: string;
  };
}

const MenuDetail: React.FC<MenuDetailProps> = ({ params }) => {
  const id = params.id;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Menu Item Detail</h1>
      <div style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem', padding: '1.5rem' }}>
        <p style={{ color: '#666', marginBottom: '0.5rem' }}>Item ID: {id}</p>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Item Name</h2>
          <p style={{ color: '#333' }}>Description of the menu item goes here.</p>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: '500' }}>Price</h3>
          <p style={{ color: '#22c55e', fontWeight: 'bold' }}>$0.00</p>
        </div>
        <button 
          style={{ 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '0.25rem',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          onClick={() => window.history.back()}
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default MenuDetail;
