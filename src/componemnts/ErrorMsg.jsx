const ErrorMsg = ({errorMsg})=>{
    return (<p className="p-2 bg-red-300 rounded text-black border border-2 border-red-500">{errorMsg.message}</p>)
}

export default ErrorMsg