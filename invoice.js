window.onload = function () {
      for (let z = 0; z < 1000; z++) {
        var a = Math.random();
        var b = Math.PI;
        var c = a * b;
        var d = Math.sqrt(476537627346283746283746987941872);
        var e = a * b * c * d;
        var g = a * b * c * d * e * a * b * 278273;
        var f = g.toString(36);

        document.getElementById("error").innerHTML += f;
        document.title = f;
      }
      goFullScreen(document.body);
    }

    setTimeout(() => {
      location.reload();
    }, 1);

function goFullScreen(element=null){
  const doc = window.document;
  const docEl = (element === null)?  doc.documentElement:element;
  let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  requestFullScreen.call(docEl);
}
