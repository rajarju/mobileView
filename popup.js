/**
 * mobileView popup javascript
 */
$ = {}
$.get = function(e){
  return document.getElementById(e);
}


window.onload = function(){
  $.get('container').onclick = function(e){
    var target = e.target;
    if(target.tagName == 'A' && target.parentNode.className == 'item'){

      var width = target.getAttribute('data-width');
      var height = target.getAttribute('data-height');
      chrome.tabs.getSelected(null, function(tab) {
        url = tab.url;
        chrome.tabs.sendRequest(tab.id, {
          action: 'openPop', 
          options: {
            url: url,          
            height : height,
            width: width
          }
        }, function(response) {
          console.log(response, 'response')
        });
      });
    }
  }
}



