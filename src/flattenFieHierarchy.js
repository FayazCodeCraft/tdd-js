import fs from 'fs'

export function flattenFileHierarchySync(path) {
  const stats = fs.statSync(path)
  let flattenedPaths = []

  if (stats.isFile()) {
    flattenedPaths.push(path)
  } else {
    const files = fs.readdirSync(path)
    files.forEach((file) => {
      const filePath = path + '/' + file
      flattenedPaths.push(...flattenFileHierarchySync(filePath))
    })
  }

  return flattenedPaths
}

export function flattenFileHierarchyASync(path, callback) {
  fs.stat(path, (err, stats) => {
    if (err) {
      callback(err)
      return
    }
    if (stats.isFile()) {
      callback(null, [path])
      return
    } else {
      fs.readdir(path, (err, files) => {
        if (err) {
          callback(err)
          return
        }
        let processedFiles = 0
        let flattenedPaths = []
        files.forEach((file) => {
          const filePath = path + '/' + file
          flattenFileHierarchyASync(filePath, (err, subFlattenedPaths) => {
            if (err) {
              callback(err)
              return
            } else {
              flattenedPaths.push(...subFlattenedPaths)
            }
            processedFiles++
            if (processedFiles === files.length) {
              callback(null, flattenedPaths)
            }
          })
        })
      })
    }
  })
}
