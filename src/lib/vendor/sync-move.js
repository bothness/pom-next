function moveToMapPosition(master, clones) {
  var center = master.getCenter();
  var zoom = master.getZoom();
  var bearing = master.getBearing();
  var pitch = master.getPitch();
  clones.forEach(function(clone) {
    clone.jumpTo({
      center,
      zoom,
      bearing,
      pitch
    });
  });
}
function syncMaps() {
  var maps;
  var argLen = arguments.length;
  if (argLen === 1) {
    maps = arguments[0];
  } else {
    maps = [];
    for (var i = 0; i < argLen; i++) {
      maps.push(arguments[i]);
    }
  }
  var fns = [];
  maps.forEach(function(map, index) {
    fns[index] = sync.bind(null, map, maps.filter(function(o, i2) {
      return i2 !== index;
    }));
  });
  function on() {
    maps.forEach(function(map, index) {
      map.on("move", fns[index]);
    });
  }
  function off() {
    maps.forEach(function(map, index) {
      map.off("move", fns[index]);
    });
  }
  function sync(master, clones) {
    off();
    moveToMapPosition(master, clones);
    on();
  }
  on();
  return function() {
    off();
    fns = [];
  };
}
var mapboxGlSyncMove = syncMaps;
export default mapboxGlSyncMove;