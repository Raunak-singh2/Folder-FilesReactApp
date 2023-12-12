import React, { useState } from 'react';
import classes from "./Folder.module.css";

const Folder = ({ explore, handleInsertNode }) => {

    const [expend, setExpend] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });


    const onToggleIcon = () => {
        setExpend((prev) => !prev)
    }

    const stopePropaGationHandler = (e, isFolder) => {
        e.stopPropagation();
        setExpend(true);
        setShowInput({
            visible: true,
            isFolder
        })
    }

    //Add file 

    const onAddFolder = (e) => {
       if(e.keyCode===13 && e.target.value){
         
        handleInsertNode(explore.id,e.target.value,showInput.isFolder)
  
        setShowInput({...showInput,visible:false})
       }
    }


    if (explore.isFolder) {
        return (
            <div style={{ marginTop: 5, userSelect: "none", fontSize: "1rem" }}>
                <div className={classes.FolderName} onClick={onToggleIcon}>
                    <span>📁 {explore.name}</span>
                    <div className={classes.folderChild}>
                        <button
                            title='Create File'
                            onClick={(e) => stopePropaGationHandler(e, false)}
                            className={classes.btn}
                        >📄</button>
                        <button
                            title='Create Folder'
                            onClick={(e) => stopePropaGationHandler(e, true)}
                            className={classes.btn}
                        > 🗃️</button>
                    </div>
                </div>
                <div style={
                    {
                        display: expend ? "block" : "none",
                        paddingLeft: "2rem"
                    }}
                >

                    {showInput.visible && (
                        <div>
                            <span>{showInput.isFolder ? "🗃️" : "📄"}</span>
                            <input
                                type='text'
                                autoFocus
                                onBlur={() => setShowInput({ ...showInput, visible: false })}
                                onKeyDown={onAddFolder}
                            />
                        </div>
                    )}


                    {explore.items.map((expl) => {
                        return (
                            <Folder explore={expl} key={expl.id} />
                        )
                    })}
                </div>
            </div>
        );
    } else {
        return <span className={classes.FileName}>📄 {explore.name}</span>
    }

}

export default Folder;
