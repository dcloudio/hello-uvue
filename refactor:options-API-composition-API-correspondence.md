# hello uvue 选项式 API 与 组合式 API 对应重构

## 文件目录逻辑

按 API 类型划分文件夹，每个文件夹下有多个示例或 API\
每个示例或 API 有一个文件夹，文件夹名为示例或 API 名称\
每个文件夹下有 xxx-options.uvue 和 xxx-composition.uvue，分别对应选项式 API 示例和组合式 API 示例
<!-- template 和 style 通过 src 引入，两种 API 示例共用 -->

## 代码规范

不要有空的style, script\
script 中不要有空的 data, onLoad, methods\
缩进使用两个空格\
公共 css class 维护在 styles/common.css 中

## app instance

- [x] app.component
- [x] app.globalProperties  app.globalProperties
- [x] app.use               app.use

## component instance
- [x] attrs useAttrs
- [x] data
- [ ] props defineProps
- [ ] el
- [ ] options defineOptions
- [ ] parent
- [ ] root  root
- [ ] slots defineSlots useSlots
- [ ] refs  ref
- [ ] emit defineEmits
- [ ] forceUpdate
- [ ] methods
- [ ] provide  provide
- [ ] inject   inject
- [ ] mixins   mixins
- [ ] nextTick
- [ ] options API setup
- [ ] defineExpose
- [ ] circular reference

## reactivity
- [ ] ref
- [ ] reactive
- [ ] computed computed
- [ ] watch    watch
- [ ] watchEffect
- [ ] watchPostEffect
- [ ] watchSyncEffect
- [ ] readonly
- [ ] customRef
- [ ] effectScope
- [ ] getCurrentScope
- [ ] isProxy
- [ ] isReadonly
- [ ] isRef
- [ ] markRaw
- [ ] onScopeDispose
- [ ] shallowReactive
- [ ] shallowReadonly
- [ ] shallowRef
- [ ] toRaw
- [ ] toRef
- [ ] toRefs
- [ ] toValue
- [ ] triggerRef
- [ ] unRef

## directives

- [ ] v-bind      v-bind
- [ ] v-for       v-for
- [ ] v-if        v-if
- [ ] v-model     defineModel
- [ ] v-on        v-on
- [ ] v-show      v-show
- [ ] v-slot      v-slot
- [ ] v-once      v-once
- [ ] v-memo      v-memo
- [ ] v-pre       v-pre
- [ ] v-html      v-html

## lifecycle

- [ ] component
- [ ] page

## built-in components

- [x] keepAlive keepAlive
- [x] teleport  teleport 

## template

- [ ] nested-component-communication
- [ ] set-custom-child-component-root-node-class

## rendering

- [ ] component is
- [ ] render function
- [ ] slots
- [ ] template  节点中 style class v-bind map 数据
- [ ] template 标签测试
- [ ] unrecognized-component
