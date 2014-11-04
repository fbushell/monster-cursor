;(function(window, document) {
  var follower = (function() {

    return {
      init: function() {
        var cursor = document.getElementById('#cursor')
      },

      go: function(e) {
        var e = e || window.event;
        cursor.style.display = 'inline-block';
        cursor.style.left = e.clientX - 450 + 'px';
        cursor.style.top = e.clientY - 245 + 'px';
      }
    };
  })();

  window.onload = function() {
    follower.init();
    document.documentElement.onmousemove = follower.go
  }

})(window, document);
