const Sequencer = require("@jest/test-sequencer").default
const startTestFilePaths = [
  "pages/App.test.js",
]
const endTestFilePaths = [
  "pages/error/runtime-error/runtime-error.test.js",
  "pages/error/throw-error/throw-error.test.js",
]
class CustomSequencer extends Sequencer {
  sort(tests) {
    // 测试例排序
    const startTests = startTestFilePaths
      .map((filePath) => {
        return tests.find((test) => test.path.endsWith(filePath))
      })
      .filter(Boolean)
    const endTests = endTestFilePaths
      .map((filePath) => {
        return tests.find((test) => test.path.endsWith(filePath))
      })
      .filter(Boolean)
    return [...new Set([...startTests, ...tests, ...endTests])]
  }
}

module.exports = CustomSequencer
