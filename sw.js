/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "085b16242f55c264c44a75c38ad331df"
  },
  {
    "url": "a-post-with-a-cover-image/index.html",
    "revision": "64bc08a74bf13792d3f0846dd16c3426"
  },
  {
    "url": "assets/css/2.styles.47e17a7b.css",
    "revision": "080fd8acccdafc325b08868b4c726bdc"
  },
  {
    "url": "assets/css/3.styles.1be5f51c.css",
    "revision": "ae6ad076df92744f6194b6a15dce3e62"
  },
  {
    "url": "assets/css/4.styles.47e17a7b.css",
    "revision": "080fd8acccdafc325b08868b4c726bdc"
  },
  {
    "url": "assets/css/styles.f0f68549.css",
    "revision": "dfd7f685139d4c638fee07530889dd9c"
  },
  {
    "url": "assets/js/app.6fa0a3c0.js",
    "revision": "7b0e8d04682010559e34c6573ebd48e6"
  },
  {
    "url": "assets/js/component--404.d89e879f.js",
    "revision": "77e7ef9c48404825b1127c47925b1d16"
  },
  {
    "url": "assets/js/component--home.2ef3c993.js",
    "revision": "fe48deb23ddb77ee6657d6432f1692f9"
  },
  {
    "url": "assets/js/component--post.4e2cd80a.js",
    "revision": "69f55d8897ef5b78f57463152e2ab1c9"
  },
  {
    "url": "assets/js/component--tag.24b293a7.js",
    "revision": "3e1fbe555e396079127f4e6bc390e89f"
  },
  {
    "url": "assets/js/data/0.74fcd30e.js",
    "revision": "ab1b55ee9361f52e35b5a980952883c8"
  },
  {
    "url": "assets/js/data/1.d49773e8.js",
    "revision": "6f1c3a8731817e7610a15a09d3781841"
  },
  {
    "url": "assets/js/data/4.dbcd5c16.js",
    "revision": "aabb3a9955ed5f70811adc0398c05894"
  },
  {
    "url": "assets/js/data~data/2~4f4d1783.192fb007.js",
    "revision": "eaa233c20bcb5e3a6809666fa260145a"
  },
  {
    "url": "assets/js/data~data/3~6a36bf42.57b519ac.js",
    "revision": "05a5e7e437a4e973718ae3cd7530dab3"
  },
  {
    "url": "assets/js/data~data/5~da4ffc43.79748b1f.js",
    "revision": "20ee0594f1ba9ca7a7969f4e17913676"
  },
  {
    "url": "assets/js/data~data/6~1602e8ad.ec04fdba.js",
    "revision": "c80d543c0a48c8e06cccbb4ad77d204b"
  },
  {
    "url": "assets/js/data~data/7~160bd786.df1d629d.js",
    "revision": "32adae3c3825084c2d53f75810fd3c52"
  },
  {
    "url": "assets/js/page-query.7e082fd3.js",
    "revision": "4f7c66b82b6ad11cd75aac886c34c80a"
  },
  {
    "url": "assets/static/favicon.1539b60.9bb7ffa.png",
    "revision": "d2a802ddb91346ba1bacd54ab5d9aace"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffa.png",
    "revision": "ff82882c2da0bb17285633973ae6d65b"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffa.png",
    "revision": "f9974bad556938f2707848d1814f13a1"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffa.png",
    "revision": "f7be2331ae350e64cd1600af80c3683b"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffa.png",
    "revision": "466eb6d2639408db8b9b58c037297d53"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffa.png",
    "revision": "69003266b28a85cbbdb7b0ca7c6757f3"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffa.png",
    "revision": "7cf51ec517585d2700f4feb85597548d"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffa.png",
    "revision": "9fff9a2ceadee823efa116130802fb9a"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "8f362a613cb8fb2b62ea3be9a8885f6b"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "c904e7eb07a9404aeeb4bdfdc2e5ab4d"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "3dd707f3357e105b2ac6be046c551a8f"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "579ea2ea1619a435a3edd42998214551"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "26c082712f68d00751ac32a416469fe1"
  },
  {
    "url": "index.html",
    "revision": "c6cf51a0685007d4df2e82890ff97603"
  },
  {
    "url": "manifest.json",
    "revision": "7ff4bdd796962d56b7a23aa8a7b1dac8"
  },
  {
    "url": "markdown-test-file/index.html",
    "revision": "1d9f55a03c5b8251ab50d75ca6f2cc10"
  },
  {
    "url": "say-hello-to-gridsome/index.html",
    "revision": "58a105e3b8e040e2ad2c1c978f9ca64c"
  },
  {
    "url": "tag/cover-image/index.html",
    "revision": "9b4406c9375c1f6fe8533fd90de62bc0"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "0f1c75e2394fa34831479551465ce8f0"
  },
  {
    "url": "tag/releases/index.html",
    "revision": "e3407cde9c3bf52d8911e30217c704df"
  },
  {
    "url": "tag/test-files/index.html",
    "revision": "a6605f5d68e91088b9cb8c2d4e5f5ca5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
