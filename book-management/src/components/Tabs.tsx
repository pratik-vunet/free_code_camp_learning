// src/components/Tabs.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Tabs: React.FC = () => (
  <div id="tab">
<div className="tabs">
    <Link to="/" className="tab-link">Books</Link>
    <Link to="/collections" className="tab-link">My Collections</Link>
    <Link to="/profile" className="tab-link">Profile</Link>
  </div>
  <hr />
  </div>
  
);

export default Tabs;
