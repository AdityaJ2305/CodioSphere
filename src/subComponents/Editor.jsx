// import React, { useEffect } from 'react'
// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';

// function Editor() {
//     // useEffect(()=>{
//     //     async function init(){
//     //         CodeMirror.fromTextArea(document.getElementById('realTimeEditor'),{
//     //             mode:{name:'javascript',json: true}
//     //         })
//     //     }
//     //     init()
//     // },[])
//     const [value, setValue] = React.useState("console.log('hello world!');");
//     const onChange = React.useCallback((val, viewUpdate) => {
//       // console.log('val:', val);
//       setValue(val);
//     }, []);
//     return <CodeMirror value={value} height="200px" onChange={onChange} />;
// }

// export default Editor;


import React, {useEffect, useState } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css'; // choose your preferred theme
import 'codemirror/theme/material-darker.css'; 
import 'codemirror/mode/javascript/javascript'; // choose your preferred mode
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'


function Editor() {
  useEffect(() => {
    async function init() {
      CodeMirror.fromTextArea(document.getElementById('editorTextArea'), {
        mode: { name: 'javascript', json: true },
        theme:'material-darker',
        autoCloseBrackets:true,
        autoCloseTags: true,
        lineNumbers:true,
      });
    }
    init();
    console.log("useEffect called")
  }, []);
  

  return (
      <textarea id='editorTextArea'></textarea>
  );
}

export default Editor;




























































// import React, { useEffect, useRef, useState } from 'react';
// import 'codemirror/lib/codemirror.css'; // Import CodeMirror CSS
// import 'codemirror/theme/material.css'; // Import CodeMirror theme CSS
// import { EditorView, basicSetup } from '@codemirror/basic-setup'; // Import necessary modules from CodeMirror
// import { javascript } from '@codemirror/lang-javascript'; // Import JavaScript language support

// function MyCodeMirrorComponent() {
//   const [code, setCode] = useState('');
//   const codeMirrorRef = useRef(null);

//   useEffect(() => {
//     const codeMirrorInstance = new EditorView({
//       state: EditorView.editable.of(EditorView.state({
//         extensions: [
//           basicSetup,
//           javascript(),
//         ],
//       })),
//       parent: codeMirrorRef.current,
//     });

//     codeMirrorInstance.dom.addEventListener('blur', () => {
//       setCode(codeMirrorInstance.state.doc.toString()); // Update state with the code
//     });

//     return () => {
//       codeMirrorInstance.destroy(); // Cleanup
//     };
//   }, []);

//   return (
//     <div>
//       <div ref={codeMirrorRef}></div>
//     </div>
//   );
// }

// export default MyCodeMirrorComponent;

