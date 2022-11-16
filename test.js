err = "PythonShellError:   File 'D:\coding dojo\MERN Group Project\collaborative-leetcode-clone\server\compiler\compiler.py', line 1 print('hello!'^SyntaxError: '(' was never closed"

let hiddenStart = "";
let hiddenEnd = "";
for(let i = 0; i < err.length; i++){
    if(err[i] == "F" && err[i+1] == "i" && err[i+2] == "l"){
        hiddenStart = i
    } else if (err[i] == "l" && err[i+1] == "i" && err[i+2] == "n"){
        hiddenEnd = i - 1
    }
}
let errMessege = err.replace(err.substring(hiddenStart, hiddenEnd), "");

console.log(errMessege);

