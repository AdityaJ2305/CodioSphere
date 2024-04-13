import React ,{useRef} from 'react'
import { Editor } from '@monaco-editor/react'

function EditorMonaco() {
    // const editorRef = useRef(null);
    // function handleEditorDidMount(editor, monaco) {
    //     console.log(`editor : ${editor}`);
    //     console.log(`monaco: ${monaco}`);
    //   editorRef.current = editor;
    // }
    // function handleEditorChange(value, event) {
    //     console.log('here is the current model value:', value);
    //   }
    const jsCode = `function greet() {\n\tconsole.log("Hello From CodioSphere");\n}\ngreet();\n`
  return (
    <>
    <div className='selectWrapper'><select className='langSelector'>
          <option value="JavaScript">JavaScript</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="Plain Text">Plain Text</option>
    </select></div>
     <Editor height="92vh" width="80vw" theme="hc-black" defaultLanguage="javascript" defaultValue={jsCode} className="editorWrap"  options={{
     fontSize: 20,
     padding: {
        top: 0,
        left: 10, 
        bottom: 20,
        right: 30
    },
    renderLineHighlight: "none"
  }}/>
    </>
  )
}

export default EditorMonaco
