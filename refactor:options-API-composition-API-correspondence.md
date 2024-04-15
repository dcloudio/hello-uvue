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
```js
function transform(fileInfo, api) {
  const $ = api.gogocode
  const source = fileInfo.source
  const ast = $(source, { parseOptions: { language: 'vue' } })
  const script = ast.find('<script></script>')

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
    .replace('$_$:{handler($_$){$$$}}', 'watch(() => $_$,($_$) => {$$$})')
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
    .replace('created(){$$$}', 'onBeforeMount(() => {$$$})')
    .replace('mounted(){$$$}', 'onMounted(() => {$$$})')
    .replace('beforeUnmount(){$$$}', 'onBeforeUnmount(() => {$$$})')
    .replace('unmounted(){$$$}', 'onUnmounted(() => {$$$})')
    .replace('beforeDestroy(){$$$}', 'onBeforeUnmount(() => {$$$})')
    .replace('destoryed(){$$$}', 'onUnmounted(() => {$$$})')

  script
    .find('methods:{}')
    .replace('async $_$($$$0){$$$1}', 'const $_$ = async ($$$0) => {$$$1}')
    .replace(
      '$_$($$$0){$$$1}',
      'const $_$ = ($$$0) => {$$$1}'
    )
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

- [ ] keepAlive keepAlive
- [ ] teleport  teleport 

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
