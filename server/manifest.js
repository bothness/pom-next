const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["data/layers.json","data/places.csv","data/redirects.csv","data/sheets.json","favicon.ico","favicon.png","img/tile-map1870.jpg","img/tile-map1946.jpg","img/tile-map3d.jpg","img/tile-overlay.jpg","img/tile-places.jpg","img/tile-splitscreen.jpg","robots.txt"]),
	mimeTypes: {".json":"application/json",".csv":"text/csv",".ico":"image/vnd.microsoft.icon",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-071413ed.js","imports":["_app/immutable/start-071413ed.js","_app/immutable/chunks/index-bf619a6a.js","_app/immutable/chunks/singletons-6d08455d.js","_app/immutable/chunks/paths-6cd3a76e.js","_app/immutable/chunks/control-ba37bfb4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-22dd1c19.js'),
			() => import('./chunks/1-256747d1.js'),
			() => import('./chunks/2-b30104ce.js'),
			() => import('./chunks/3-2f242d46.js'),
			() => import('./chunks/4-33503573.js'),
			() => import('./chunks/5-f9ddc418.js'),
			() => import('./chunks/6-f644a398.js'),
			() => import('./chunks/7-2c35a3ce.js'),
			() => import('./chunks/8-c42e2e56.js'),
			() => import('./chunks/9-9d5c3126.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/view",
				pattern: /^\/view\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/view/[slug]",
				pattern: /^\/view\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[lang]/(page)",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[lang]/maps/[...slug]",
				pattern: /^\/([^/]+?)\/maps(?:\/(.*))?\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,3], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[lang]/(page)/[page]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
