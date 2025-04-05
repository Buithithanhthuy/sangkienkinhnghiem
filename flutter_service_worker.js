'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c463371cb8e27b2a99bc97726bed21ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7ee293dffa367675fd4b98879b354b7e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82974635823f6d10b22bf9b8835a5697",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3bafeaa11a54fc165a2594561b018c0",
".git/logs/refs/heads/main": "2907e01396ff93ec8c365b068075e179",
".git/logs/refs/remotes/origin/main": "b28dda40958e055e814456433e3c09b5",
".git/objects/04/8b47de105cbb647efdc4d7d2fb387a3c968e62": "80d41e64d238d60d77a2e8947d4d1821",
".git/objects/06/fac647c7f45dbc5e7c0e422e74fe3e93419266": "59919ce0498f92e7695e89195e11e43c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/d294e3d6ea2a1371db979c8276045daf6b0bc7": "707b1c45255bdd2a7ad8328b7bc418dc",
".git/objects/0a/be25eb0fca66b2d5cff54214d26926a96f0095": "a749d30c0123052547f8f649c0ba0d3b",
".git/objects/0d/5b01eab9456ec2f1b14a7707cfafd65b9837f8": "ea9d19f827bb32a17bf0c9afb8cbc80d",
".git/objects/10/f387656bdf0a3fee6e9a60e0d1a61a218857dc": "2aebeaeea1f9702128367619de628429",
".git/objects/11/a9f0b20f0a6fc4a2ce5a92f8bd357c1fb1eb88": "a7accb523520c42e48829dbf995b817d",
".git/objects/12/7e8bb7aaf82e2bb834c027ea39787ca7f44059": "175eaf873a2dc473d14a36605f53a133",
".git/objects/14/343fff33b8e8ac5e2cfd44cab016055b576150": "67e78083de8c68ab971658a004a13129",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/9d4c7acd3c6e89fcb2cb777074ef7a0877f9af": "14fda0f04e0bc3e711350c9ae8822658",
".git/objects/1c/a0487a708d3faf223ad404ef8ef008b2a85204": "68f3625b87102e0a7332a17fd68b911f",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1e/1a184349efaefa93ba44b9db9476103417d9a6": "c155f2ec459e6f1e4be259b3add6e0ca",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/a00a3bf6bfd1830dabd7189f2485e0a6f66622": "4d6a3bf6c17d7c2d2ad9091cdb51aa9e",
".git/objects/23/0d0972df14a5fa8276771c74893584938ffb3a": "aaa1e277b9dda9d019752dafe5155584",
".git/objects/25/6e35eefb161d997c212889396a62a1d75934ac": "15ae52f0b2f62213096401ebfa419e27",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/21987cdb84c4b4f25a9813354b097ee81d4ebf": "6d208779386d65497a5ecf7840e31207",
".git/objects/30/58970840763cf72bb52c8b5614e21f8d45d644": "7ca031b39e06703a4501543faa210e68",
".git/objects/31/afde7b5309ad4cd12522a1da5fbaa096d89689": "d33b31367d5049a389628b2ee7b81eb5",
".git/objects/34/34d2ce08c2676d67d43c9aa5817ac06803bac0": "ab5961000cfde31a46ab7e999de2c4ba",
".git/objects/3a/5bf1485759246e86f1789733bafa6da58d7398": "eda0aba77d54e94312c8d5fda7bd49c6",
".git/objects/45/130370da59969791810e374fd3fb57d726a564": "1f229df1b47098da188254382a595e13",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bd6ffbd573cc480be3936a093d14acdeb6ef3e": "8c7e47b7cc34b3f352b11b35498d1631",
".git/objects/47/58c7b59d6c55a66fda4e653f63e98695157103": "00035ba8763e7d981060f1b1f1649b47",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/e469b4f82702752fcafbad19eaf8ada48ad760": "c1aad8ec0bcb501e20f190db7535edbc",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/63/3a5c42f7e4848b637e3aa62f00eb89f8bf9dc0": "86a3850e4040d357292d11f86a5326f3",
".git/objects/63/f20ef280134befbf6bd22c13b9cfb3ffa52689": "f73481577e8175a7b4d033e291980a3b",
".git/objects/66/618e383f6d787d95b2208879e2f90d95a9adec": "7f23c35109d71cbc343295af4973ff37",
".git/objects/69/40234555319182ba1874055a49fca0fe096493": "415da391f3938807ce857bd50d03494c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/9a6ad18b3efb7b7c7b4a8428ada95d1f6aaf54": "a72bc066f1031381a07ca3f6474cfe04",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/8523419109ad03ec8e494f132bfa62db84f168": "67bba21ef3eb80bfadb57d547f535bf3",
".git/objects/7d/ff554f45954ab3be75ccadb3793b19ecc9497d": "aa63bb80e8e550d289a1c67bf1cfb2fb",
".git/objects/7f/ae59107ba77c754ec08d139258f1cb0bf0e4a1": "ab10eee770554dd895cb67d9cd0472cc",
".git/objects/7f/ce2c3d6be691d0abd885ec084c36bbdb0a558a": "f10e62ebbc7e791832278b379d3c4d86",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/214bb891f09d3de3da202797c5671c6786634b": "1f3a4c287541c9c77b839522a5dfc778",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/78917b07899bed4b3727d46918184c459f5466": "074f9d3fcb42a50574a3985c93d01f2c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9b/107cd9e2d566d750fcc63388eadd2ba9193899": "81f8bb20958579f013279b9846d2a3ea",
".git/objects/9f/c25d519fb309338e6c83ee025146f9a29c2f3a": "585712115f57585941cdb3771359a8d4",
".git/objects/a4/8f5e90a4bb5f89e8b4385571c27d8c861c7459": "c27f9a84e147f7e4c1ac2b01696fa6ec",
".git/objects/a5/ba02790e72722c90e71e4694d9d53cc4802fe2": "b048ef259752ae1349c02a275a1eaebc",
".git/objects/a7/92edfde95d89c6e4df01b4a8b7a077428d3d4a": "3b9f6d6160cee408b9a6949114537e6c",
".git/objects/a7/bdc9daa5ab3326365f98c85550e040973a92fa": "85ca0c086337f3103248717861402a20",
".git/objects/aa/9ebffb82c38973cd08030e8c3685d117199f09": "908b4be5130fdda6172131743cc2f152",
".git/objects/ae/ca162b35f889fecf7f39b4f6648bfeb956e2f1": "bc3dfc2ebad89d98314f7a4c27e2f107",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/1f2371ca8f4c6194da32d2ee8423def8fdc798": "d1549c0b08fea22798f051821ac7e37e",
".git/objects/b4/dbd63b30dbb4eb2022f124571b8e374d755a36": "f4f73463146e5c5fc19a684fb40a6dfc",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/43a25920d9772857eb43a9fa45fdef6ed5aff2": "8c0f302477fc3ebf677752d9c7390d4e",
".git/objects/bd/dff8e3473ccb4bd4cf12e9b21b9897e2f493d7": "222c12f9e24a1eba713837aaf521a930",
".git/objects/c1/6bc69f8bb3178bc4857494efe0fb15e8966b3d": "1a3527c6ddc4fd7605b035d9ad0cc529",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/139292810c97271031193bf82f890efcceffc3": "e94cf0842719684de9d82ff0d63756f3",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/cc/ec249804c9dab470f931d2903d91769a313148": "b017f3ad8f5364987a40c794f600ec63",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/0bcea2cfbfa720be842dd3b3e877ad9beb7ac4": "74d0167094e80b2424e937a984818edf",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/e36216a2dab967a5585e24e498bd8017467154": "ea5c91cfeb4feb282bde9e46b15ddaa8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/f3d6a9f7a364ec1d67cdd32d80fc9525869620": "bad0ab9ac75a8190f49b22f32511bf7b",
".git/objects/fc/140e850bfb58e1cbcfee418ef5b9653b2a1672": "cf8eed1607fa93ddca3afe9378a5f829",
".git/ORIG_HEAD": "fae03858613af2f838fbea7f091fd379",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "fae03858613af2f838fbea7f091fd379",
".git/refs/remotes/origin/main": "fae03858613af2f838fbea7f091fd379",
"assets/AssetManifest.bin": "7cac391f8634a1b863eee460d5d527f2",
"assets/AssetManifest.bin.json": "1b62f02f168dd4ee6ed098430abc746e",
"assets/AssetManifest.json": "3428424016f6b9a6b863399054f29bcd",
"assets/assets/images/anhnen.jpg": "70190eede8c823647a9b95c9e5cf3f80",
"assets/assets/images/anh_chuadatcauhoi.png": "0761fcadcf6efe617dadf54b81f86360",
"assets/assets/images/anh_sau.png": "89e13c33bf4e8e5713902b58d354500a",
"assets/assets/images/banner.jpg": "f75e9aaeaf8b46552b9c39b03d422dad",
"assets/assets/images/icon_law.png": "6239c2cbd0c35b41903280eb87ed0613",
"assets/assets/images/icon_typing.gif": "6afbd1f6ebcdcdbb19019e47e2e59e7d",
"assets/assets/images/icon_word.png": "0bc83424f065fe2a2e4e712f24445c7e",
"assets/assets/images/SAU.png": "659bc46bb3988a6f2caf4369b0c1988a",
"assets/assets/images/sau_icon.png": "4b7205bcf80eddac369459271a679ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "865751a7bdb67bb09d5c557355422dea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "bdeaee7b2100f3fa84c33b55c10d11fa",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "bdeaee7b2100f3fa84c33b55c10d11fa",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd6d01697a45fa03f17796ca6415f45b",
"/": "dd6d01697a45fa03f17796ca6415f45b",
"main.dart.js": "1175bcb999c92780a6f015c02fb0f2f4",
"manifest.json": "0271bc55a858d50113fd729e2b2c0816",
"version.json": "44ebe1b707a987da7c17f71cc47be9df"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
