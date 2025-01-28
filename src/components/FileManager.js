import React from "react";

const FileManager = ({ files, setFiles, activeFile, setActiveFile }) => {
  const addFile = () => {
    const newFileName = `file${files.length + 1}.js`;

    // Add a new file with default content
    const newFile = { name: newFileName, content: "// New file content" };
    setFiles((prevFiles) => [...prevFiles, newFile]);

    // Set the new file as active
    setActiveFile(newFile);
  };

  return (
    <div>
      <h3>File Manager</h3>
      <button onClick={addFile}>Add File</button>
      <ul>
        {files.map((file, index) => (
          <li
            key={index}
            style={{
              cursor: "pointer",
              fontWeight: file.name === activeFile?.name ? "bold" : "normal",
            }}
            onClick={() => setActiveFile(file)}
          >
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManager;
