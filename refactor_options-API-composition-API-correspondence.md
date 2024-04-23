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

## GoGoCode 

一个用于进行代码转换的 vscode 插件，在本项目中，可用于将 options API 写法转为 composition setup API 写法

### transform function

目前仅处理了 script 节点
已知问题：
- 无法处理函数返回值类型
- 无法处理函数换行

```js
function transform(fileInfo, api) {
  const $ = api.gogocode
  let source = fileInfo.source
  source = source.replace(/<script/g, "<script setup");
  const ast = $(source, { parseOptions: { language: 'vue' } })
  const script = ast.find('<script setup></script>')

  script.replace('components:{},', '').replace('mixins:[]', '')

  script
    .find('data(){return {}},')
    .replace('$_$:$_$', 'const $_$ = ref($_$)')
    .replace('data(){return {$$$}}', '$$$')

  script
    .find('computed:{}')
    .replace('$_$(){$$$}', 'const $_$ = computed(() => {$$$})')

  script
    .find('watch:{}')
    .replace(
      '$_$:{handler($_$){$$$}}',
      'watch(() => $_$,($_$) => {$$$})'
    )
    .replace('$_$:{handler(){$$$}}', 'watch(() => $_$,() => {$$$})')
    .replace(
      "'$_$':{handler($_$){$$$},deep: true}",
      'watch(() => $_$,($_$) => {$$$},{deep: true})'
    )
    .replace(
      "'$_$':{handler($_$){$$$}}",
      'watch(() => $_$,($_$) => {$$$})'
    )
    .replace('$_$($_$){$$$}', 'watch(() => $_$,($_$) => {$$$})')
    .replace('$_$(){$$$}', 'watch(() => $_$,() => {$$$})')
    .replace('watch:{$$$}', '$$$')

  script
    .replace('onLoad(){$$$}', 'onLoad(() => {$$$})')
    .replace('onShow(){$$$}', 'onShow(() => {$$$})')
    .replace('onReady(){$$$}', 'onReady(() => {$$$})')
    .replace('onHide(){$$$}', 'onHide(() => {$$$})')
    .replace('onUnload(){$$$}', 'onUnload(() => {$$$})')
    .replace('onBackPress(){$$$}', 'onBackPress(() => {$$$})')
    .replace('created(){$$$}', 'onBeforeMount(() => {$$$})')
    .replace('mounted(){$$$}', 'onMounted(() => {$$$})')
    .replace('beforeUnmount(){$$$}', 'onBeforeUnmount(() => {$$$})')
    .replace('unmounted(){$$$}', 'onUnmounted(() => {$$$})')
    .replace('beforeDestroy(){$$$}', 'onBeforeUnmount(() => {$$$})')
    .replace('destoryed(){$$$}', 'onUnmounted(() => {$$$})')

  script
    .find('methods:{}')
    .replace(
      'async $_$($$$0){$$$1}',
      'const $_$ = async ($$$0) => {$$$1}'
    )
    .replace('$_$($$$0){$$$1}', 'const $_$ = ($$$0) => {$$$1}')
    .replace('async $_$(){$$$}', 'const $_$ = async () => {$$$}')
    .replace('$_$(){$$$}', 'const $_$ = () => {$$$}')
    .replace('methods:{$$$}', '$$$')

  script.replace('export default {$$$}', '$$$')

  return ast.generate()
}
```

## app instance

- [x] app.component
- [x] app.globalProperties  app.globalProperties
- [x] app.use               app.use

## component instance
- [x] attrs useAttrs
- [x] data
- [x] props defineProps
- [x] el
- [x] options defineOptions
- [x] parent
- [x] root  root
- [x] slots defineSlots useSlots
- [x] refs  ref
- [x] emit defineEmits
- [x] forceUpdate
- [x] methods
- [x] provide  provide
- [x] inject   inject
- [x] mixins
- [x] nextTick
- [x] options API setup
- [x] defineExpose
- [x] circular reference

## reactivity
- [x] ref
- [x] reactive
- [x] computed computed
- [x] watch    watch
- [x] watchEffect
- [x] watchPostEffect
- [x] watchSyncEffect
- [x] readonly

- [x] isProxy
- [x] isReactive
- [x] isReadonly
- [x] isRef
- [x] toRef
- [x] toRefs
- [x] toValue
- [x] unRef

- [x] customRef
- [x] effectScope
- [x] getCurrentScope
- [x] markRaw
- [x] onScopeDispose
- [x] shallowReactive
- [x] shallowReadonly
- [x] shallowRef
- [x] toRaw
- [x] triggerRef

## directives

- [x] v-html
- [x] v-show
- [x] v-if v-else-if v-else
- [x] v-for
- [x] v-on
- [ ] v-bind
- [ ] v-model
- [ ] v-slot
- [x] v-pre
- [x] v-once
- [x] v-memo
- [x] v-text
- [ ] v-cloak 暂不支持

## lifecycle

- [x] component
- [x] page

## built-in components

- [x] keepAlive keepAlive
- [x] teleport  teleport 

## template

- [x] nested-component-communication
- [x] set-custom-child-component-root-node-class

## rendering

- [x] component is
- [x] render function 暂不支持 composition API
- [x] slots
- [x] template  节点中 style class v-bind map 数据
- [x] template 标签测试
- [x] unrecognized-component
