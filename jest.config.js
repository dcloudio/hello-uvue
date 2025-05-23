const path = require('path')

module.exports = {
  testTimeout: 20000,
  reporters: ['default'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['js', 'json'],
  rootDir: __dirname,
  testMatch: [
		// "<rootDir>/pages/**/*test.[jt]s?(x)",
    // "<rootDir>/pages/built-in/component/teleport/teleport.test.js",
    // "<rootDir>/pages/reactivity/core/watch-effect/watch-effect.test.js",
    // "<rootDir>/pages/reactivity/core/watch-post-effect/watch-post-effect.test.js",
    // "<rootDir>/pages/built-in/component/keep-alive/keep-alive.test.js",
    // "<rootDir>/pages/lifecycle/component/component-options.test.js",
    // "<rootDir>/pages/lifecycle/component/component-composition.test.js",
    // "<rootDir>/pages/component-instance/methods/call-method-easycom-uni-modules-props-emits.test.js",
    // "<rootDir>/pages/component-instance/methods/call-method-easycom-uni-modules-props-emits.test.js"
    // "<rootDir>/pages/directive/v-on/v-on.test.js",
    // "<rootDir>/pages/component-instance/methods/call-method-easycom-uni-modules-props-emits.test.js", // harmony
    // "<rootDir>/pages/examples/multiple-style-script/multiple-style-script.test.js", // safari
    // "<rootDir>/pages/component-instance/mixins/mixins-app.test.js", // android 7
    // "<rootDir>/pages/component-instance/provide/provide-options-1.test.js", // android 7
    // "<rootDir>/pages/cancelButtonClickedcancelButtonClickedapp-instance/globalProperties/globalProperties.test.js",
    // "<rootDir>/pages/reactivity/advanced/get-current-scope/get-current-scope.test.js",
    // "<rootDir>/pages/lifecycle/component/component-composition.test.js",
    // "<rootDir>/pages/lifecycle/page/page.test.js",
    // "<rootDir>/pages/examples/multiple-style-script/multiple-style-script.test.js",
    // "<rootDir>/pages/built-in/component/keep-alive/keep-alive.test.js", // 带锚点 insertBefore 时报错：Child already has a parent, it must be removed first，排查了下没搞懂，反馈给了云哥
    // "<rootDir>/pages/lifecycle/component/component-options.test.js",
    // "<rootDir>/pages/lifecycle/component/component-composition.test.js",
  //   "<rootDir>/pages/App.test.js", // harmony app onShow 触发两次
  //   "<rootDir>/pages/component-instance/props/page-props.test.js",
  //   "<rootDir>/pages/built-in/special-elements/template/template-map-style.test.js",
		
  //   "<rootDir>/pages/built-in/component/keep-alive/keep-alive.test.js",
  //   "<rootDir>/pages/lifecycle/component/component-options.test.js",
  //   "<rootDir>/pages/lifecycle/component/component-composition.test.js",
  //   "<rootDir>/pages/component-instance/provide/provide-options-2.test.js",
		
    // "<rootDir>/pages/directive/v-model/v-model-options.test.js",
		// ios restart fail
  //   "<rootDir>/pages/component-instance/nextTick/nextTick-options.test.js",
  //   "<rootDir>/pages/component-instance/nextTick/nextTick-composition.test.js",
  //   "<rootDir>/pages/directive/v-model/v-model-options.test.js",
  //   "<rootDir>/pages/component-instance/slots/slots.test.js",
		
    // "<rootDir>/pages/component-instance/methods/call-method-easycom.test.js",
    // "<rootDir>/pages/component-instance/methods/call-method-define-expose.test.js",
    "<rootDir>/pages/app-instance/use/use.test.js",
    "<rootDir>/pages/built-in/special-elements/component/component.test.js",
    "<rootDir>/pages/component-instance/mixins/mixins-app-page-namesake.test.js",
    // "<rootDir>/",
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testSequencer: path.join(__dirname, "testSequencer.js")
}
