import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
// component to render images
const ImageGrid = ( {setSelectedImg} ) => {
    // docs representing uploaded images retrieved using custom hook 
    const { docs } = useFirestore("images");
    

    return (
        <div className="img-grid">
            {/* only render once data has arrived  */}
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{opacity: 1}}
                // when images is clicked set as state in parent App component so that Modal can access and display it 
                onClick={() => {
                    setSelectedImg(doc.url)
                }}>
                    {/* animation so new image smoothly pops up when uploaded */}
                    <motion.img 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                    src={doc.url} alt="uploaded pic" />
                </motion.div>
            )) }
        </div>
    )
}

export default ImageGrid;