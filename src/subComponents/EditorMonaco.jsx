import React, { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import { codeSnippets } from '../assets/code_snippets';
import { quantum } from 'ldrs'



// Default values shown

const languageOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'c', label: 'C' },
  { value: 'cpp', label: 'C++' },
  { value: 'java', label: 'Java' },
  { value: 'python', label: 'Python' },
  { value: 'plaintext', label: 'Plain Text' },
];
const containerStyle = {
  backgroundColor: "black",
  height: "inherit",
  width: "inherit",
};

function EditorMonaco() {
  quantum.register()
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(codeSnippets[language]);

  const handleOptionChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(codeSnippets[selectedLanguage]);
  };

  return (
        <>
          <div className="selectWrapper">
            <select
              className="langSelector"
              value={language}
              onChange={handleOptionChange}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <Editor
            height="100%"
            width="100%"
            theme="hc-black"
            language={language}
            value={code}
            loading={<l-quantum style={containerStyle} 
              size="85"
              speed="1.75" 
              color="white" 
            ></l-quantum>}
            onChange={(newValue) => console.log(newValue)}
            options={{
              fontSize: 20,
              padding: { top: 0, left: 10, bottom: 20, right: 30 },
              renderLineHighlight: 'none',
            }}
          />
        </>
      )}

export default EditorMonaco;