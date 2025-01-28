import React, { useState } from "react";
import CodeEditor from "./components/Editor";
import Preview from "./components/Preview";
import PackageManager from "./components/PackageManager";
import Navbar from "./components/Navbar";
import FileManager from "./components/FileManager";

const App = () => {
  const [files, setFiles] = useState([
    { name: "file1.js", content: "// Default content for file 1" },
    { name: "file2.js", content: "// Default content for file 2" },
  ]);
  const [activeFile, setActiveFile] = useState(files[0]);

  const handleRun = () => {
    console.log("Running code from:", activeFile.name);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar onRun={handleRun} />
      <div style={{ display: "flex", flex: 1 }}>
        {/* FileManager */}
        <div style={{ width: "20%", borderRight: "1px solid #ddd" }}>
          <FileManager
            files={files}
            setFiles={setFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />
        </div>

        {/* Code Editor */}
        <div style={{ flex: 1, borderRight: "1px solid #ddd" }}>
          <CodeEditor
            code={activeFile?.content || ""}
            setCode={(newCode) => {
              setFiles((prevFiles) =>
                prevFiles.map((file) =>
                  file.name === activeFile.name
                    ? { ...file, content: newCode }
                    : file
                )
              );
              setActiveFile((prevFile) => ({
                ...prevFile,
                content: newCode,
              }));
            }}
          />
        </div>

        {/* Preview */}
        <div style={{ flex: 1 }}>
          <Preview code={activeFile?.content || ""} />
        </div>
      </div>

      {/* Package Manager */}
      <div style={{ borderTop: "1px solid #ddd", padding: "10px" }}>
        <PackageManager onInstall={(pkg) => console.log("Installed package:", pkg)} />
      </div>
    </div>
  );
};

export default App;
