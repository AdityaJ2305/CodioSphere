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
  return (
    <>
     <Editor height="100vh" width="80vw" theme="hc-black" defaultLanguage="javascript" defaultValue="// some comment" className="editorWrap"  options={{
     fontSize: 20,
     padding: {
        top: 50,
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
