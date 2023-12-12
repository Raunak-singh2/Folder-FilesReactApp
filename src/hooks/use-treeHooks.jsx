

import React from 'react'
import Folder from '../components/Folder'

const useTreeHooks = () => {

    const insertNode = (tree, folderId, item, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id:new Date().getTime(),
                name: item,
                isFolder,
                items: []
            })

        }
        return tree;
    }




    return { insertNode }
}

export default useTreeHooks
