import { useEffect, useRef, useState } from "react"

export default function Home() {
  const a = useRef(0)
  const [b, setB] = useState(0)
  let c = 0
  const updateState = () => {
    setB(b + 1)
    console.log('state', b)
  }
  const updateRef = () => {
    a.current++
    console.log('ref', a)
  }

  const updateVar = () =>{
    c++
    console.log('variabel', c)

  }
  useEffect(()=>{
    console.log('ref', a)
    console.log('state', b)
    console.log('variabel', c)

  })
  return (
    <div>

      <button onClick={updateRef}>
        UPDATE REF
      </button>
      <button onClick={updateVar}>
        UPDATE VERIABEL
      </button>
      <button onClick={updateState}>
        UPDATE STATE
      </button>
      <div>

        ref: {a.current}
      </div>
      <div>
        state: {b}

      </div>
      <div>
        variabel: {c}
      </div>

    </div>
  )
}
