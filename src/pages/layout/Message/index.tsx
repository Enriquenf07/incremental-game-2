function Message({text, flag}: {text: string, flag: boolean}){
    if (flag){
        return(
            <div className="p-4 px-16 m-6 fixed right-0 top-0 bg-blue-200 text-black flex justify-center items-center">
                {text}
            </div>
        )
    }
}

export default Message