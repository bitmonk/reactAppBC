import { useEffect, useState } from "react"

const Counter = () => {
    // let count = 0;

    let [count, setCount] = useState(0)
    let [post, setPost] = useState([])


    const increaseCount = () =>{
        setCount(++count)
        console.log(count)
    }
    const decreaseCount = () =>{
        setCount(--count)
    }
    useEffect(()=>{
        alert("Value Updated")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            setPost(data)
        })

    },[])
    return (
    
    <div style={{height: '100vh'}} className ='d-flex justify-content-center align-items-center'>
<h1>Counter : {count}</h1>

        <button className='btn btn-primary' onClick={increaseCount}>Add</button>
        <button className='btn btn-danger' onClick={decreaseCount}>Sub</button>
        {
            post.map((post, i)=>{
return <div>{post.title}</div>
            })
        }
    </div>

  )
}
export default Counter