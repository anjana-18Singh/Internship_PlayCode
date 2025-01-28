import React, { useEffect, useRef } from "react";
import { transform } from "@babel/standalone";

const Preview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const renderCode = () => {
      try {
        const compiledCode = transform(code, {
          presets: ["react", "es2015"],
        }).code;

        const html = `
          <html>
            <head>
              <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
              <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
            </head>
            <body>
              <div id="root"></div>
              <script>
                ${compiledCode}
              </script>
            </body>
          </html>
        `;

        iframeRef.current.srcdoc = html;
      } catch (err) {
        iframeRef.current.srcdoc = "<h1>Error in code</h1>";
      }
    };

    renderCode();
  }, [code]);

  return <iframe ref={iframeRef} style={{ width: "100%", height: "100%" }} />;
};

export default Preview;
