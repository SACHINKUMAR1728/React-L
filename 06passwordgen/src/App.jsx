import { useState, useRef } from 'react'
import { useCallback, useEffect} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState()

  //useref
  const passwordRef = useRef(null);

  

  const passwordgenrator = useCallback(() => {
    let pass = ''; //password
    let str = 'ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //string
    if (number) {
      str += '1234567890';
    }
    if (char) {
      str += '!@#$%^&*()_+';
    }
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setpassword(pass);
  }, [length, number, char, setpassword])

  const copytoclipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,9999);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordgenrator();
  }, [length, number, char, passwordgenrator])


  return (

    <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-600'>
      <h1 className='text-center text-white 
        my-3' >Password Generator</h1>
      <div className='flex shadow rounded-lg 
        overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full px-3 py-1'
          placeholder='Password'
          ref={passwordRef}
          readOnly
        />
        <button onClick={copytoclipboard} className='outline-none bg-pink-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className='cursor-pointer'
          />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={number}
            id='numberInput'
            onChange={() => {
              setnumber((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={char}
            id='charInput'
            onChange={() => {
              setchar((prev) => !prev);
            }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
