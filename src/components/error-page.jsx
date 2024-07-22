const Error = ({status, msg}) =>{
    console.log(status, msg, 'in the error')
    return <h1>Oops, art block! {status === null? <span>400 </span> : <span>{status},</span>} {msg === null ? <span>Bad Request</span> : <span>{msg}</span>}</h1>
}

export default Error