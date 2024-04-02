jest.setTimeout(10000000);

const pages = [
	'pages/tab-bar/options-api',
	'pages/tab-bar/composition-api',
	'pages/app-instance/index/index',
	'pages/built-in-component/keep-alive/keep-alive',
	'pages/directive/v-bind/v-bind',
	'pages/directive/v-bind/v-bind-class',
	'pages/directive/v-bind/v-bind-style',
	'pages/directive/v-bind/v-bind-props',
	'pages/directive/v-for/v-for',
	'pages/directive/v-for/v-for-item-click',
	'pages/directive/v-for/v-for-item-v-if',
	'pages/directive/v-for/v-for-item-v-show',
	'pages/directive/v-for/v-for-v-for',
	'pages/directive/v-if/v-if',
	'pages/directive/v-model/v-model',
	'pages/directive/v-on/v-on',
	'pages/directive/v-memo/v-memo',
	'pages/directive/v-pre/v-pre',
	'pages/directive/v-show/v-show',
	'pages/directive/v-slot/v-slot',
	'pages/directive/v-html/v-html',
	'pages/component-instance/data/data',
	'pages/component-instance/options/options',
	'pages/component-instance/refs/refs',
	'pages/component-instance/attrs/attrs',
	'pages/component-instance/watch-function/watch-array',
	'pages/component-instance/emit-function/emit-function',
	'pages/component-instance/nextTick-function/nextTick-function',
	'pages/component-instance/methods/call-method-uni-element',
	'pages/component-instance/circular-reference/circular-reference',
	'pages/state/methods/methods',
	'pages/state/props/props',
	'pages/state/computed/computed',
	'pages/state/watch/watch',
	'pages/rendering/slots/slots',
	'pages/rendering/template/template',
	'pages/rendering/unrecognized-component/unrecognized-component',
	'pages/rendering/component/component',
	'pages/composition/inject/inject',
	'pages/examples/nested-component-communication/nested-component-communication',
	'pages/examples/set-custom-child-component-root-node-class/set-custom-child-component-root-node-class',
	'pages/composition-api/basic/define-emits/define-emits',
	'pages/composition-api/basic/define-expose/define-expose',
	'pages/composition-api/basic/use-attrs/use-attrs',
	'pages/composition-api/reactivity/ref/ref',
	'pages/composition-api/reactivity/is-ref/is-ref',
	'pages/composition-api/reactivity/un-ref/un-ref',
	'pages/composition-api/reactivity/is-proxy/is-proxy',
	'pages/composition-api/reactivity/is-reactive/is-reactive',
	'pages/composition-api/reactivity/is-readonly/is-readonly',
	'pages/composition-api/reactivity/shallow-ref/shallow-ref',
	'pages/composition-api/reactivity/trigger-ref/trigger-ref',
	'pages/composition-api/reactivity/custom-ref/custom-ref',
	'pages/composition-api/reactivity/shallow-reactive/shallow-reactive',
	'pages/composition-api/reactivity/shallow-readonly/shallow-readonly',
	'pages/composition-api/reactivity/to-raw/to-raw',
	'pages/composition-api/reactivity/mark-raw/mark-raw',
	'pages/composition-api/reactivity/effect-scope/effect-scope',
	'pages/composition-api/reactivity/get-current-scope/get-current-scope',
	'pages/composition-api/reactivity/on-scope-dispose/on-scope-dispose',
	'pages/built-in-component/teleport/teleport',
	'pages/component-instance/watch-function/watch-function'

	// 仅app
	// 'pages/composition/mixins/mixins',
	// 'pages/composition/mixins/mixins-page2',
	// 'pages/directive/v-once/v-once',
	// 'pages/component-instance/parent/parent',
	// 'pages/component-instance/root/root',
	// 'pages/composition-api/basic/define-model/define-model'
	// 'pages/composition-api/basic/define-options/define-option'
	// 'pages/composition-api/reactivity/to-ref/to-ref', // web端暂不支持toRef

	// 动态内容
	// 'pages/component-instance/force-update/force-update',

	// 空白页面无内容
	// 'pages/component-instance/methods/call-method-easycom-uni-modules',
	// 'pages/component-instance/methods/call-method-easycom',
	// 'pages/component-instance/methods/call-method-other',

	// 仅web
	// 'pages/composition/mixins/mixins-web',

	// Object或Array数据渲染换行差异
	// 'pages/app-instance/globalProperties/globalProperties',
	// 'pages/component-instance/props/props',
	// 'pages/composition-api/basic/define-props/define-props',
	// 'pages/composition-api/basic/define-slots/define-slots',
	// 'pages/composition-api/basic/use-slots/use-slots',
	// 'pages/composition-api/dependency-injection/provide/provide',
	// 'pages/composition-api/reactivity/computed/computed',
	// 'pages/composition-api/reactivity/reactive/reactive',
	// 'pages/composition-api/reactivity/readonly/readonly',
	// 'pages/composition-api/reactivity/watch-effect/watch-effect',
	// 'pages/composition-api/reactivity/watch-post-effect/watch-post-effect',
	// 'pages/composition-api/reactivity/watch-sync-effect/watch-sync-effect',
	// 'pages/composition-api/reactivity/watch/watch',
	// 'pages/composition/provide/provide',
	// 'pages/composition/provide/provide-page2',
	// 'pages/state/data/data',

	// 功能差异
	// 'pages/composition/setup/setup', 
	// 'pages/component-instance/el/el',

	// 样式差异
	// 'pages/component-instance/slots/slots',
	// 'pages/rendering/render/render',
	
	// 因修改全局状态影响其他测试例结果
	// 'pages/lifecycle/page/page',
	// 'pages/lifecycle/component/component',
	// 'pages/composition-api/lifecycle/page-lifecycle/page-lifecycle',
	// 'pages/composition-api/lifecycle/component-lifecycle/component-lifecycle',
]

const childToParentPagesMap = new Map([

]);

const customNavigationPages = [

]

const needAdbScreenshotPages = [
	'pages/tab-bar/options-api',
	'pages/tab-bar/composition-api'
];

const needAdbScreenshot = (url) => {
	return needAdbScreenshotPages.includes(url);
};

const PAGE_PATH =
	"/pages/webview-screenshot-comparison/webview-screenshot-comparison";

describe("shot-compare", () => {
	let shouldCompareScreenShot = false
	if (process.env.uniTestPlatformInfo.startsWith('android') && !process.env.UNI_AUTOMATOR_APP_WEBVIEW) {
		let version = process.env.uniTestPlatformInfo
		version = parseInt(version.split(" ")[1])
		shouldCompareScreenShot = version > 9
	}

	if (!shouldCompareScreenShot) {
		it("other platform not support", async () => {
			expect(1).toBe(1);
		});
		return
	}

	let page = null;
	let pageIndex = 0;
	let baseSrc = "";
	beforeAll(async () => {
		page = await program.reLaunch(PAGE_PATH);
		await page.waitFor(500);
		await page.callMethod('getWindowInfo');
		await page.callMethod('getDeviceInfo');

		// set webview-screenshot-comparison page baseSrc
		baseSrc =
			process.env.UNI_WEB_SERVICE_URL ? `${process.env.UNI_WEB_SERVICE_URL}/#/` :
			"http://test.dcloud.io/unix_h5_build/98_dev_hello-uvue/#/";

		page.setData({
			baseSrc,
		});
	});

	beforeEach(async () => {
		page = await program.reLaunch(PAGE_PATH);
		await page.waitFor(500);
	});
	afterEach(() => {
		pageIndex++;
	});

	test.each(pages)("%s", async () => {
		const isNeedAdbScreenshot = needAdbScreenshot(pages[pageIndex]);
		const isCustomNavigationBar = customNavigationPages.includes(pages[pageIndex]);
		const {
			statusBarHeight,
			devicePixelRatio
		} = await page.data();
		const screenshotParams = {
			fullPage: true,
			adb: isNeedAdbScreenshot,
			// adb 截图时跳过状态栏
			area: {
				x: 0,
				y: statusBarHeight * devicePixelRatio,
			},
		}
		const screenshotPath = `__webview__${pages[pageIndex].replace(/\//g, "-")}`;

		// web in webview screenshot
		// 加载依赖页面
		if (childToParentPagesMap.get(pages[pageIndex])) {
			await page.setData({
				src: `${baseSrc}${childToParentPagesMap.get(pages[pageIndex])}`,
				isLoaded: false
			});
			await page.waitFor(async () => {
				const isLoaded = await page.data("isLoaded");
				return isLoaded || Date.now() - startTime > 10000;
			});
			await page.waitFor(200);
		}
		await page.setData({
			src: `${baseSrc}${pages[pageIndex]}`,
			isLoaded: false,
			isCustomNavigationBar,
		});

		const startTime = Date.now();
		await page.waitFor(async () => {
			const isLoaded = await page.data("isLoaded");
			return isLoaded || Date.now() - startTime > 3000;
		});
		await page.waitFor(800);

		// web 端非 adb 截图时设置 offsetY 移除导航栏
		const webSnapshot = await program.screenshot({
			...screenshotParams,
			id: 'webview-screenshot-comparison',
			offsetY: `${isCustomNavigationBar ? 0 : 44}`
		});
		expect(webSnapshot).toMatchImageSnapshot({
			customSnapshotIdentifier() {
				return screenshotPath;
			},
		});

		// app-android page screenshot comparison
		const navigateMethod = pages[pageIndex].startsWith("pages/tab-bar") ?
			"switchTab" :
			"navigateTo";
		page = await program[navigateMethod](`/${pages[pageIndex]}`);
		await page.waitFor(500);
		const appAndroidSnapshot = await program.screenshot(screenshotParams);
		expect(appAndroidSnapshot).toMatchImageSnapshot({
			customSnapshotIdentifier() {
				return screenshotPath;
			},
		});
	});
});