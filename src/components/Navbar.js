import React from "react";
import { Plus } from "lucide-react"; // Import the plus icon from lucide-react

const Navbar = ({ onRun }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10px", backgroundColor: "#333", borderBottom: "1px solid #ddd" }}>
      {/* Logo or Title */}
      <h2 style={{ margin: "0 20px 0 0", fontWeight: "bold", fontSize: "1.2rem", color: "white" }}>Playcode Clone</h2>

      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "20px", flex: 1 }}>
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
            color: "white",  // Set font color to white for the "Learn" button
          }}
        >
          Learn
        </button>
      </nav>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={onRun}
          style={{
            padding: "8px 16px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run
        </button>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <Plus style={{ marginRight: "8px" }} />
          Share
        </button>
      </div>
    </div>
  );
};

export default Navbar;
