import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const PackageManager = ({ onInstall }) => {
  const [packageName, setPackageName] = useState("");

  const handleInstall = async () => {
    try {
      const response = await fetch(
        `https://registry.npmjs.org/${packageName}/latest`
      );
      const data = await response.json();
      onInstall(data);
      alert(`${packageName} installed successfully!`);
    } catch (err) {
      alert("Error installing package");
    }
  };

  return (
    <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderTop: "1px solid #ddd" }}>
      <TextField
        label="Enter NPM Package"
        variant="outlined"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
      />
      <Button onClick={handleInstall}>Install</Button>
    </div>
  );
};

export default PackageManager;
