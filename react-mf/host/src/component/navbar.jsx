import React,{useState} from 'react'
import {publish,reset} from '../service/pubsub'

export default function Navbar() {

    

    const doNavigate = (loc) => {
        //console.log("Navigate to.." + loc);
        let obj  = {
            data:loc,
            useCtx : {
                userid:'virtusa'
            },
            rnd: Math.round(Math.random()*1000)
        }
        publish("navigate",obj);
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Host</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" onClick={()=>doNavigate("remote-a")} href="#">RemoteA</a>
                            <a className="nav-link active" aria-current="page" onClick={()=>doNavigate("remote-b")} href="#">RemoteB</a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
