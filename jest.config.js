module.exports = {
  "setupTestFrameworkScriptFile": "<rootDir>jest/setup.js",
  "moduleFileExtensions": [
    "js",
    "jsx"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy"
  }
};
