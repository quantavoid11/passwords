import { Copy } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

function PasswordGenerator() {

  const [length, setLength] = useState(6);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("");

  const generatePassword = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "~!@#%$%^&*()_+-=`',./<>?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(()=>{
      generatePassword();
  },[length,numAllow,charAllow,generatePassword])


  return (

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="flex flex-col w-full bg-slate-900 rounded-xl px-2 py-2 max-w-md ">
        <h1 className="text-3xl text-white text-center mb-4 ">Password Generator</h1>

        <div className="flex overflow-hidden rounded-lg shadow mb-4">
          <input type="text"
            value={Password}
            className="outline-none rounded-lg w-full py-1 px-3"
            readOnly 
            />
          <button className='shrink-0 px-3 text-white outline-none'><Copy /></button>
        </div>

        <div className='flex gap-x-2 items-center'>

          <div className='flex gap-x-1 items-center'>
            <input type="range" min={6} max={20} className='cursor-pointer' value={length}
              onChange={(e) => setLength(e.target.value)} />
            <label className='text-orange-600'>Length: {length}</label>
          </div>

          <div className='flex gap-x-1'>
            <input type="checkbox" defaultChecked={numAllow} onChange={() => { setNumAllow((prev) => !prev) }} />
            <label className='text-orange-600'>Numbers</label>

          </div>
          <div className='flex gap-x-1'>
            <input type="checkbox" defaultChecked={charAllow} onChange={() => { setCharAllow((prev) => !prev) }} />
            <label className='text-orange-600'>Characters</label>

          </div>

        </div>


      </div>
    </div>

  )
}

export default PasswordGenerator;