import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timeStamp } from "../firebase/config";
// this is a hook which takes the file the user has selected, uploads it to storage, tracks upload progress, and makes a document in 
// firestore containing url and upload time
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references 
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection("images");

        storageRef.put(file).on("state_changed", (snap) => {
            // this will allow a dyanmic progress bar to be rendered as it wil give several values for progress over the course of the upload
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            // create docuemnt representing relevant data 
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            collectionRef.add({ url: url, createdAt});
            setUrl(url);
        })
    }, [file]);
    // return progress for progress bar, return url for confirmation of succesful upload 
    return { progress, url, error } ;
}

export default useStorage;