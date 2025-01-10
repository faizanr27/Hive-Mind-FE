interface InputProps { 
    placeholder: string; 
    reference?: any
}

export function Input({placeholder, reference}: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} className="px-6 py-2 rounded-2xl m-2 bg-black/20 border border-gray-400/20 focus:outline-none focus:bg-black/90 text-slate-100" ></input>
    </div>
}