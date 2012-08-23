/* *
 * Sniffer to send back the parent window object
 */
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  console.log(request);
  if (request.action == "openPop"){    
    //sendResponse({dom : window});
    //Open popup from here
    _mobileView(request.options);
    sendResponse({message : 'done'});
  }
  else{
    
  }
});



/**
 * Open a popup
 */
function _mobileView(options){
  var popup = window.open(
  options.url,
  'mywindow',
  'width='+options.width+
    ',height='+options.height+
    ',toolbar=no,location=no,directories=no,statu s=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=yes')
}