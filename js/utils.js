function copyToClipboard(string_val) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(string_val).select();
  document.execCommand("copy");
  $temp.remove();
}
