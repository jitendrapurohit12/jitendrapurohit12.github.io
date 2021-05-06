'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1bc505ae80c75de99e4a65003099b5ea",
".git/config": "77bb7e69fcaba2520b751960dc753501",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "60dc249955f7a06b1e082349e89eb837",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d94691174eb692262b2d28951eeff00b",
".git/logs/refs/heads/master": "d94691174eb692262b2d28951eeff00b",
".git/logs/refs/remotes/origin/master": "2dfa002ade9691eb4901241a563c6e7a",
".git/objects/01/1d7ea2b7473060a7b841cd0613511092032d91": "5c53de6d6dd605bbe2d062e939ddc764",
".git/objects/08/67504121c658597b1333806bdb7f43a3e6fa1a": "0dbd86066d38e4fc162bccae8e72026f",
".git/objects/0b/c6de0019f13aff42be16de6314b1d3de38907b": "a4454f39ff1a6f50f9bc394e7f6a411d",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d19220db9e8a2dbf6b4f845f7fa7868ed1f801": "e0edecac96828eab967e8cd592df4e4e",
".git/objects/24/8284c2c392fdbbf4d786b3acae10c35e6991c9": "88ccf22726577ff91f8abf15b9cf205a",
".git/objects/35/cb0da9bc5f7d4faecccac3a49ed5696e9f1661": "1fdb8c293f2cbecf94815af3062815b9",
".git/objects/38/af3389f06c25b977b54d0b8e6b8e0b6550b9ec": "4cd38b7c25186e6011613ca7938585f5",
".git/objects/45/f451febb378efa70d43dd8119c150358a2b853": "355bedf59d6532c5d1706d552c307113",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4b/b9805c6a7547e1c7450157ebdf49f56bc803e9": "14fea594ed2046bb5af0d5faa9b18671",
".git/objects/4c/4da028c0212d5e77d178850cf4e23b35fc3e03": "de2985fbf09cbc904a7b032e4bd2a24e",
".git/objects/4c/c5d64995987c1338afc3539c11f1cb69ea17e4": "b2afef34d3576902ce2bc946215910a3",
".git/objects/4e/d53acb15102205c041eeea3c93e7e258c8b206": "2f6dfbc7c2f53569fa052ab9b6f9eab2",
".git/objects/52/6e034823a8d33bb8170996aa3ff1ba97cd3359": "1655e3f8399ffd7bf6afa398bf7ef0be",
".git/objects/55/2c644be18501bfcb87d752770feb4a3597dce4": "80c4cd22395c16f30528bb0e006a0e01",
".git/objects/5a/e5cc998b21c878b3ea0e480fd32fb71b92fcc8": "58447f2a69524dc82604fe84eff458b0",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/65/b09d6b036c0e9739a6feac66125f38383079ff": "c41ad53a735312303c7bf7773c957478",
".git/objects/6c/97f049b8917c872c2ff22a872bf4c82a2aa990": "309cca4558f5e6c8570e5a2f77b79ae7",
".git/objects/6d/a860c09240e7b9093fb58144f40db4b6a5b080": "45c9394c67fe93f8909ffbbdc73d8026",
".git/objects/6f/9802895d1fe37e1a3b855f91f8352646122712": "d2161d5a6cbe021bb1ed5db09b71c35d",
".git/objects/77/5ceee3e840da291a7d17010b2a1b90a6863cdb": "c6c6cc36b842295c592c4706163cfeba",
".git/objects/7b/c168d107838900ed6c7b4b6032ae59b9c0dc23": "426b0cf9672d058547cbea14d6911143",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/8a0f2c758101a54a621d17d7e452a7bb0c40bf": "e35d4cefad04ba588e90c771e6db2f60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9824391f86771bd879489e5a1f91952b033729": "036679962b3004fdcbb389757c601a83",
".git/objects/89/a6aee037080eb7b39f0ba78a8e1d68372fc67e": "de230b52880b92babb25326d702f5ceb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/16512f71108c56c602085d1bddab0513a6fad3": "e66b0e567c2431d4f52868a5212543e3",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/9b/72ad3d2fb84520ad7099d56a39cce096b5c46e": "845645525eaf37fd5e91135a3fb79340",
".git/objects/9c/ed981ea68e952d02484f82f8bd1f70d19437f8": "98c9d65f3e53938ba7ee3a470b19ee9b",
".git/objects/a0/41cde931ddba4216a33100d3aed0c0a5a88d00": "4ab6a5c0f7bd410b3ce3165bb6995c97",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a9/3436d307483a19f7072de0d290987fce12a46d": "682d410152fa964fc18b63efed6154bf",
".git/objects/ab/22d993603c4cab5f9c5ca0fd9fb5cc93ba5471": "db2f38e16754ea3409d1c35965c14739",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/962a84c3332404ca3fd0bc62a01b05a8a05694": "daf7863369e61c5998717f596af8a538",
".git/objects/c3/3c31a7348e1cc893bf5728b7f691cfa41c0149": "7efc726efdf7d13a89d8f5d40ebdda16",
".git/objects/c8/f280bb602861117c158d0c8e2ba99544050c9d": "42d68956d449ca59d738f82055c8b584",
".git/objects/cd/605f736a2dd20dc16469a1b84c68775fc4a29e": "a3702515e91908fc0a11a778109aa23c",
".git/objects/cf/15cfd713c1a1509f16ccba2d497dfc191072ad": "a7a9e455d3089dcba9c6cff0246f6b17",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/db/c2a3e6b38fb7bdcf879a2d37dec6296eebf26f": "1b1d2a21495cad8f97d8e4fd64604354",
".git/objects/e1/4763f21aa8946881636e4ed13d6faf4d1d282e": "f15ea6c5b4cb22c8e39056dfe1d1eff8",
".git/objects/e5/8be7bb660f6f4ad47098352b99e424de9c125a": "0072ea1c84a021c3a04b6191d03e8357",
".git/objects/e7/8cfc61d19885724930c862a3f176afafdab3ae": "df26441ed0044904724635560656cb1e",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/ee/9240ee4587862a698ebad803247b96842ef731": "da4018bde14ed0e7d3493658abf79155",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/3bf0841ab398470b59250f30790a03bae24198": "7945f4b3224be1148571c7c6f66b8a30",
".git/objects/fc/739b47a526cfc3e17edc20b21801d45e0f24ee": "0366d72db98bdb00e21d2dba748c8c64",
".git/objects/fd/073a79c1abd90360273d24740762d5a6fa9fd0": "d77d385e27d0d936b462f19928df141e",
".git/objects/fd/5ca5a792517675a12542cedbc6a7e82b6ebbaa": "26913502cbb2857efd0b739f95505c6d",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/master": "1fa2e6b1956cffe905f2a98be0f5256b",
".git/refs/remotes/origin/master": "1fa2e6b1956cffe905f2a98be0f5256b",
"assets/AssetManifest.json": "92c46b624f7efaa396ea8d523e67ea00",
"assets/assets/fonts/Dirga.ttf": "f7e69bd8fe94a9dcdd0fb8fceca49efd",
"assets/assets/fonts/Halaney.otf": "0a36cada90de5dda42361a6544b7f22b",
"assets/assets/fonts/Varela.ttf": "3166671c1a8144eea28664fc2f5eff67",
"assets/assets/images/background.png": "c520cd000ca122aa49d3676fdb873a9d",
"assets/assets/images/grove.png": "b1870423ad13e77cedc01b04a1bb1958",
"assets/assets/images/hero.png": "17269ef125d81df6112e25c15684b3de",
"assets/assets/images/login.png": "1638bb929d07cace08d69794c1b638c8",
"assets/assets/images/mnm.png": "a9aa2527cfea4f029c6f9ab24b1901bd",
"assets/assets/images/news_bite.png": "edb0c9d4e5be4faa2dcec12171657ef2",
"assets/assets/images/ocean_builder.png": "8cbbbbdfe179e99fa228cf1d8bd082c1",
"assets/assets/images/pod.png": "e78b44e861213877098afcfcbac0f6b2",
"assets/assets/images/souqcards.png": "faf52cc1e04bcbc5ab06d9dd1c0cef73",
"assets/assets/images/wella.png": "8f77f25cf03ba2b65f340b5a5b91eb6c",
"assets/FontManifest.json": "6cb27913b6ada864fa2e93dddf25a327",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "e2fdb7d7e7597a8de9d2b7cbeb42514d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "91d5502cc00c727b12806e2b65a28455",
"/": "91d5502cc00c727b12806e2b65a28455",
"main.dart.js": "f1a1b49167e7bd67b88e35f1eb88859b",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
