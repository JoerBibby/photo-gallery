import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
// this component takes the file and uploads it, sets File back to null on the upload form, and animates the progress  of the upload
const ProgressBar = ({file, setFile}) => {
    // upload performed with custom hook 
    const { url , progress} = useStorage(file);
    
    // set file back to null once uplaod has finished and returned url 
    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url, setFile]);
    // animation done with framer motion package. Width of div expands as values for progress are returned from the hook
    return (
        <motion.div
        initial={{width: 0}}
        animate={{width: progress + "%"}} 
        className="progress-bar" style={{width: progress + "%"}}></motion.div>
    )
}

export default ProgressBar;