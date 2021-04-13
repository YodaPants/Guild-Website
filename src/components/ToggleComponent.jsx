import React from 'react'

export const ToggleButton = ({className, isToggled, setIsToggled}) => {
    
    // const [isToggled, setIsToggled] = useState(false);

    return (
        <div onClick={() => setIsToggled(!isToggled)} className={`rounded-full w-11 h-6 cursor-pointer ${isToggled ? "bg-indigo-900":"bg-purple-200"} ` + className}>
            <div className={`transform duration-500 rounded-full w-5 h-5 mt-0.5 cursor-pointer ${isToggled ? "ml-5 bg-purple-200" : "ml-1 bg-purple-900"}`}></div>
        </div>
    )
}