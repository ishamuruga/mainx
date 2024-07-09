import { BehaviorSubject } from "rxjs";

const bSubject = new BehaviorSubject({});

    const publish = (eventName, payLoad) => {
        bSubject.next({
            event: eventName,
            pl: payLoad,
            ts: new Date()
        })
    };

    const reset = () => {
        bSubject.next({});
    }

    const listen = () => {
        return bSubject.asObservable();
    }


export {publish,reset,listen};