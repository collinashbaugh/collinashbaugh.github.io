/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
  var myImage = document.querySelector('img');
  
  myImage.onclick = function() {
      var mySrc = myImage.getAttribute('src');
      if(mySrc === 'https://freeiconshop.com/wp-content/uploads/edd/html-flat.png') {
        myImage.setAttribute ('src','data:image/png;base64,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');
      } else {
        myImage.setAttribute ('src','https://freeiconshop.com/wp-content/uploads/edd/html-flat.png');
      }
  }
})();
