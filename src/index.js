import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Game from './Components/Game'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);