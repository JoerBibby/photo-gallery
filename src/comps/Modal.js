import React from "react";
import { motion } from "framer-motion";


const Modal = ( {selectedImg, setSelectedImg} ) => {
    // if user clicks behind/around the modal, it closes by setting selected image in App back to null
    const handleClick = (e) => {
        if(e.target.classList.contains("backdrop")){
            setSelectedImg(null);
        }
        
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
        // grey out the background when the modal pops up 
        initial={{opacity: 0}}
        animate={{opacity: 1}} >
            <motion.img src={selectedImg} alt="enlarged pic"
            // when image is selected for modal, it animates by sliding down from the top of the screen 
            initial={{y: "-100vh"}}
            animate={{y: 0}} />
        </motion.div>
    )
}

export default Modal;