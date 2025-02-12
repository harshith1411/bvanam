import 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App'; // Your main App component

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render your app
root.render(<App />);