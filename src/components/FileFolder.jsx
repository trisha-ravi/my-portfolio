function FileFolder({ title, children }) {
  return (
    <div className="file-folder">
      <div className="folder-tab">
        <span className="folder-title">{title}</span>
      </div>
      <div className="folder-content">
        {children}
      </div>
    </div>
  )
}

export default FileFolder;