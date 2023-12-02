import { useState } from "react"
interface Props {
    counter: number
    increase: () => void
    decrease: () => void
}

export function Counter({counter, decrease, increase}: Props){



    return(
    <div
        style={{
          padding: '10px',
        }}
      >
      <button onClick={increase}>
        mais
      </button>

      <p>{counter}</p>

      <button onClick={decrease}>
        menos
      </button>

      </div>
    )
}