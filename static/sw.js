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
    "revision": "66c097e4e7dbf07776a7883146df6920"
  },
  {
    "url": "a-post-with-a-cover-image/index.html",
    "revision": "a71c3579d664d55441491d04e20fca41"
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
    "url": "assets/js/app.0d27695c.js",
    "revision": "a0753b9496667fac5e425b9e25f45ef3"
  },
  {
    "url": "assets/js/component--404.d89e879f.js",
    "revision": "77e7ef9c48404825b1127c47925b1d16"
  },
  {
    "url": "assets/js/component--home.7cb6f365.js",
    "revision": "38299707d43b30eeb518cfe96a59ca0b"
  },
  {
    "url": "assets/js/component--post.c7bbad1f.js",
    "revision": "713b85b043656c01f77824c59f87ad54"
  },
  {
    "url": "assets/js/component--tag.5ec404c7.js",
    "revision": "0acbae84880aad6b2dd0b3ba6998d5a8"
  },
  {
    "url": "assets/js/data/0.f9ce2730.js",
    "revision": "bd439408d755ac5b68d9fdef99d45dad"
  },
  {
    "url": "assets/js/data/1.d49773e8.js",
    "revision": "6f1c3a8731817e7610a15a09d3781841"
  },
  {
    "url": "assets/js/data/4.6b64969a.js",
    "revision": "b8af5199e034a3db9cdd3c090d6c70ff"
  },
  {
    "url": "assets/js/data~data/2~4f4d1783.c2bcdb15.js",
    "revision": "732985bd0a93cd6c0bf4a6613c25fbe7"
  },
  {
    "url": "assets/js/data~data/3~6a36bf42.57b519ac.js",
    "revision": "05a5e7e437a4e973718ae3cd7530dab3"
  },
  {
    "url": "assets/js/data~data/5~da4ffc43.a87ea022.js",
    "revision": "032b1f94a9449a9ef91ae8992ecedf84"
  },
  {
    "url": "assets/js/data~data/6~1602e8ad.ec04fdba.js",
    "revision": "c80d543c0a48c8e06cccbb4ad77d204b"
  },
  {
    "url": "assets/js/data~data/7~160bd786.91a74ae8.js",
    "revision": "458b28210462e67b5293529ef4b5a0e7"
  },
  {
    "url": "assets/js/page-query.b7685476.js",
    "revision": "751ba32337a388df09311093447d7943"
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
    "url": "index.html",
    "revision": "897887d5a219db9aa35e10bca3e93eea"
  },
  {
    "url": "markdown-test-file/index.html",
    "revision": "9200bdd9c48c627a470f2d8ca6d798f6"
  },
  {
    "url": "say-hello-to-gridsome/index.html",
    "revision": "c597e886dad8860fa40b997e379c2123"
  },
  {
    "url": "tag/cover-image/index.html",
    "revision": "4eec9825fcaf71ef186a28980bcca05a"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "a6f2f1a18d84da8deeecfdb0a5ea61b7"
  },
  {
    "url": "tag/releases/index.html",
    "revision": "fb97e2ca2d467112f49a4a47e5fb16a9"
  },
  {
    "url": "tag/test-files/index.html",
    "revision": "3b605df833be2a2e30ad8fcd1060b47b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
