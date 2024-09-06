import { useState } from "react";

const sampleArray = [
    { id: 1, value: Math.floor(Math.random() * 100) }, // Random integer between 0 and 99
    { id: 2, value: Math.floor(Math.random() * 100) },
    { id: 3, value: Math.floor(Math.random() * 100) },
    { id: 4, value: Math.floor(Math.random() * 100) },
    { id: 5, value: Math.floor(Math.random() * 100) },
    { id: 6, value: Math.floor(Math.random() * 100) },
  ];


export function BarChart() {
    const [show, setShow] = useState(false);

    return (
        <div className="gap-10 flex flex-col items-center justify-center">
            <button onClick={() => setShow(prev => !prev)} className="bg-black text-white py-1 rounded-2xl w-20 h-10 hover:bg-slate-600">
                {show ? 'Hide' : 'Show' }
            </button>

            {show && (<div className="h-[500px] w-[500px] border-l-2 border-b-2" />)}
        </div>
    );
}