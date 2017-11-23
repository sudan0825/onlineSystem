1. if fs cannot find the file, use path resolve

var testPath = path.resolve(path.join(__dirname, "/public/imgs", "homeimg.jpeg"))