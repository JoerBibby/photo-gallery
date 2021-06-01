import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {

    const [docs, setDocs] = useState([]);
    // get all of the documents in the collection, order by time created, store in state to return 
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });
        // cancel listening to collection once it is retriwved to prevent memory leak 
        return () => unsub();

    }, [collection])

    return { docs };
}

export default useFirestore;