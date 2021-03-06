// Copyright 2016 The Sandpass Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {
  var onload = function() {
    var placeholder = '**********';
    var showingPassword = false;
    new Clipboard(document.getElementById('copypassword'));
    document.getElementById('showpassword').addEventListener('click', function(e) {
      showingPassword = !showingPassword;
      var el = document.getElementById('password');
      if (showingPassword) {
        e.target.textContent = 'Hide';
        el.textContent = el.dataset.value;
      } else {
        e.target.textContent = 'Show';
        el.textContent = placeholder;
      }
    });
  };
  if (document.readyState != 'loading') {
    onload();
  } else {
    document.addEventListener('DOMContentLoaded', onload);
  }
})();
