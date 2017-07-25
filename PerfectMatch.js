// ==UserScript==
// @name       PerfectMatch
// @version    1.0
// @description  Add Perfect match
// @match      https://www.pixiv.net/search.php*
// @author     moxtsuan
// @license    MIT
// @grant      none
// ==/UserScript==

var url = location.href;
var target = document.getElementsByClassName('column-header');
var mode = 'tag';
if ( url.match(/s_mode=s_tag_full/) ) {
  mode = 'tag_full';
} else if ( url.match(/s_mode=s_tag/) ) {
  mode = 'tag';
} else if ( url.match(/s_mode=s_tc/) ) {
  mode = 'tc';
}
var tag = url.replace(/s_mode=s_(tag_full|tag|tc)/, 's_mode=s_tag');
var tag_full = url.replace(/s_mode=s_(tag_full|tag|tc)/, 's_mode=s_tag_full');
var tc = url.replace(/s_mode=s_(tag_full|tag|tc)/, 's_mode=s_tc');
var a_tag;
if ( mode == 'tag' ) {
  a_tag = document.createElement('p');
} else {
  a_tag = document.createElement('a');
  a_tag.setAttribute('href', tag);
}
a_tag.textContent = '部分一致';
var a_tag_full;
if ( mode == 'tag_full' ) {
  a_tag_full = document.createElement('p');
} else {
  a_tag_full = document.createElement('a');
  a_tag_full.setAttribute('href', tag_full);
}
a_tag_full.textContent = '完全一致';
var a_tc;
if ( mode == 'tc' ) {
  a_tc = document.createElement('p');
} else {
  a_tc = document.createElement('a');
  a_tc.setAttribute('href', tc);
}
a_tc.textContent = 'タイトルキャプション';
var div = document.createElement('div');
div.className = 's_mode';
div.appendChild(a_tag);
div.appendChild(a_tag_full);
div.appendChild(a_tc);
target[0].appendChild(div);
