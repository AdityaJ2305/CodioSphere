import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { codeSnippets } from '../assets/code_snippets';

function EditorMonaco() {
  const [optionChoosen, setOptionChoosen] = useState('javascript');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(codeSnippets.javascript);

  function handleOptionChange(e) {
    const selectedLanguage = e.target.value;
    setOptionChoosen(selectedLanguage);
    setLanguage(selectedLanguage);
    setCode(codeSnippets[selectedLanguage]);
  }

  return (
    <>
      <div className='selectWrapper'>
        <select className='langSelector' onChange={handleOptionChange}>
          <option value="javascript">JavaScript</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="plaintext">Plain Text</option>
        </select>
      </div>
      <Editor
        height="92vh"
        width="80vw"
        theme="hc-black"
        language={language}
        value={code}
        className="editorWrap"
        options={{
          fontSize: 20,
          padding: {
            top: 0,
            left: 10,
            bottom: 20,
            right: 30
          },
          renderLineHighlight: "none"
        }}
      />
    </>
  )
}

export default EditorMonaco;
