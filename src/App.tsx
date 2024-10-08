import React, { useState } from 'react'
import TabList from './components/tablist'
import View from './components/view'

import FileSystemNode from './system/filetree';

import './styles/view.css';
import ThemeToggle from './components/themeToggle';


const App: React.FC = () => {
  const tabDirs = ['main', 'projects', 'links'];
  const tabThumbnails = 'pear.svg'

  /** Initialize the file system tree, with '/' as the root */
  const [rootFS, modifyFS] = useState<FileSystemNode>((): FileSystemNode => {
    const root = new FileSystemNode(null, '/', true)
    tabDirs.forEach((dir_name) => {root.addDirectory(dir_name)})
    return root;
  })

  /** TODO: Fix this down the line to not just choose the first in the array,
   *          it should be chosen off some other criteria (name === "main"?)
   */
  const [pwd, setPwd] = useState<FileSystemNode>(rootFS.getChildren()[0]);
  return (
    <>
      <ThemeToggle/>
      <TabList
        tabLabels={tabDirs}
        tabThumbnails={tabThumbnails}
        pwd={pwd}
        setPwd={setPwd}
      />
      <View
        pwd={pwd}
        setPwd={setPwd}
        rootFS={rootFS}
      />
    </>
  )
}

export default App
