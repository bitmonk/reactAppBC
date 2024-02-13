import { useEffect } from "react"

const data = () => {

    let [count, setCount] = useState(0)

    const increaseCount = () =>{
        setCount(++count)
        console.log(count)
    }
    const decreaseCount = () =>{
        setCount(--count)
    }




useEffect(()=>{
    alert("Value Updated")
},[count])






  return (
    <div style={{height: '100vh'}} className ='d-flex justify-content-center align-items-center'>
    <h1>Counter : {count}</h1>
    
            <button className='btn btn-primary' onClick={increaseCount}>Add</button>
            <button className='btn btn-danger' onClick={decreaseCount}>Sub</button>
        </div>
  )
}
export default data