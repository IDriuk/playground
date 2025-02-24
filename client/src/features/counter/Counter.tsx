import { io, Socket } from "socket.io-client";
import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./Counter.module.css"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "./counterSlice"

const isProd =import.meta.env.PROD
const baseUrl = !isProd ? "http://localhost:3000" : `${window.location.origin}`

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  let socket: Socket;

  async function incrementWithFetch() {
    const response = await fetch(`${baseUrl}/incr`, {
      method: "post",
    });
    const text = await response.text()
    console.log('incrementWithFetch ========', text)
  }

  function logout() {
    fetch(`${baseUrl}/logout`, {
      method: "post",
    });
  }

  async function incrementWithEmit() {
    socket.emit("incr", (count: any) => {
      console.log('increment with emit ======', count)
    });
  }

  useEffect(() => {
    socket = io(baseUrl)

    socket.on("connect", () => {
      console.log('connected')
    })

    socket.on("disconnect", () => {
      console.log("disconnected")
    })

    socket.on("current count", (count) => {
      console.log("current count", count)
    })
  }, [])

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => logout()}
        > logout </button>
        <button
          className={styles.button}
          onClick={() => incrementWithFetch()}
        > incrementWithFetch </button>
        <button
          className={styles.button}
          onClick={() => incrementWithEmit()}
        > incrementWithEmit </button>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
