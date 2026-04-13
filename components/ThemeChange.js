/* 
this directive tells Next.js that this component should be rendered on the client side, 
allowing us to use hooks like useState and useEffect
*/

"use client"; 

import { useState } from "react";

export default function ThemeChange() {
    // define a state variable to track the current theme (light or dark)
    const [isDarkMode, setIsDarkMode] = useState(false);

    // define two simple styles based on the state variable
    const themeStyles = {
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        transition: "all 0.3s ease" // some delay for smooth transition
    };

    return (
        <div style={themeStyles}>
        <h2>{isDarkMode ? '🌙 Dark Mode Active' : '☀️ Light Mode Active'}</h2>
        <p>This box is a Client Component managing its own state.</p>
      
        <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}
        >
        Change Theme
        </button>
    </div>
    );
}