const codeSnippets = {
    "c": `#include <stdio.h>\n\nvoid greet() {\n\tprintf("Hello from CodioSphere\\n");\n}\n\nint main() {\n\tgreet();\n\treturn 0;\n}`,
    
    "cpp": `#include <iostream>\n\nint main() {\n\tstd::cout << "Hello from CodioSphere";\n\t return 0;
}`,
    
    "java": `public class Main {\n\tpublic static void greet() {\n\t\tSystem.out.println("Hello from CodioSphere");\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tgreet();\n\t}\n}`,
    
    "python": `def greet():\n\tprint("Hello from CodioSphere")\n\ngreet()\n`,
    
    "javascript": `function greet() {\n\tconsole.log("Hello from CodioSphere");\n}\ngreet();\n`,

    "plaintext": `Hi, CodioSphere Here`
};

export{codeSnippets};