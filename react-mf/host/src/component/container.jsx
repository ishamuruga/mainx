import React,{useEffect,useState} from 'react'
import {publish,reset,listen} from '../service/pubsub'
import RemoteA from "remoteA/App"

export default function Container() {

    const obs$ = listen();

    const [mfend,setMfend]= useState();
    const [flag,setFlag] = useState(false);

    useEffect(()=>{
        console.log("UseEffect")
        obs$.subscribe(x=>{
            if (x) {
                //console.log(x.event);
                if (x.event==="navigate") {
                    //console.log(JSON.stringify(x.pl));
                    setMfend(x.pl);
                    console.log(x.pl.data);
                    if (x.pl.data==="remote-a"){
                        setFlag(true)
                    } else {
                        setFlag(false)
                    }
                }
            }
        })
    },[obs$])
    return (
        <div>
            <div className="container">
                <h1>My First Bootstrap Page-{flag}</h1>
                <p>This is some text.</p>
                {flag}
                {
                    flag && <RemoteA data={mfend} />
                } 
            </div>
        </div>
    )
}


// {
//     if (mfend.data==="remote-a") {
//        return <remoteA/> 
//     }
// }