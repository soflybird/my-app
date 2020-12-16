import React, {useEffect, useState} from 'react';
import './Example.css'

const Example = () => {

    //first variable is a getter (count) count is state
    //second is a setter (setCount)
    //expression below is a hook
    const [count, setCount] = useState(0);

    //similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
        </div>

    )

}

export default Example;