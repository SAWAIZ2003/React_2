// import { useState , useCallback , useEffect } from 'react'
// import './App.css'

// function App() {
//   const [Length, setLength] = useState(8)
//   const [NumberAllowed,setNumberAllowed] = useState(false)
//   const [CharrAllowed,setCharAllowed] = useState(false)
//   const [Password,setPassword] = useState("")

//   const passwordGenerator =  useCallback(()=>{
//       let pass = ""
//       let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//       if(NumberAllowed)str += "0123456789"
//       if(CharrAllowed) str+="!@#$%^&*_-+={}~`"

//       for(let i = 1; i<= Length; i++){
//          let char = Math.floor(Math.random()*str.length+1)
//          pass += str.charAt(char)
//       }
   
//         setPassword(pass)

//   }, 
//     [Length,NumberAllowed,CharrAllowed,setPassword])

//   useEffect ( ()=>{} , [Length,NumberAllowed,CharrAllowed,passwordGenerator])
//   return (
//     <>
// <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-white">
//   <h1 className="text-white text-center text-xl mb-4 my-3">Password generator</h1>
//   <div className="flex shadow rounded-lg overflow-hidden bg-white">
//     <input
//       type="text"
//       value={Password}
//       className="outline-none w-full py-3 px-4 bg-transparent text-black placeholder-gray-600"
//       placeholder="Password"
//       readOnly
//     />
//     <button
//     className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
//   </div>
//    <div classNme='flex text-sm gap-x-2'>
//       <div className='flex items-center gap-x-1'>
//          <input
//          type="range"
//          min={6}
//          max={100}
//          value={Length} 
//           className='cursor-pointer'
//           onChange= { (e) => {setLength(e.target.value)}}
//          />
//            <label>Length:{Length}</label>
//       </div>
//         <div className="flex items-center gap-x-1">
//           <input 
//             type = "checkbox"
//             defaultChecked={NumberAllowed}
//             id="numberInput"
//             onChange = {() =>{
//                 setNumberAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//         <input 
//             type = "checkbox"
//             defaultChecked={CharrAllowed}
//             id="characterInput"
//             onChange = {() =>{
//                 setCharAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>
//    </div>
// </div>



//     </>
//   )
// }

// export default App

import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App