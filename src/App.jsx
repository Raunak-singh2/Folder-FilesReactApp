
import React, { useState } from 'react'
import explorer from './data/FolderData';
import Folder from './components/Folder';
import useTreeHooks from './hooks/use-treeHooks';



const App = () => {
  const [explorerData , setExplorerData]=useState(explorer);

  const {insertNode}=useTreeHooks();
 
  const handleInsertNode=(folderId,item,isFolder)=>{
      const finalTree=insertNode(explorerData,folderId,item,isFolder);

      setExplorerData(finalTree);
  }


  return (
    <div>
      <Folder explore={explorerData}  handleInsertNode={ handleInsertNode}/>
    </div>
  )
}

export default App;
