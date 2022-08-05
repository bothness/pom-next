import syncMove from "./sync-move";
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var domain;
function EventHandlers() {
}
EventHandlers.prototype = Object.create(null);
function EventEmitter() {
  EventEmitter.init.call(this);
}
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.usingDomains = false;
EventEmitter.prototype.domain = void 0;
EventEmitter.prototype._events = void 0;
EventEmitter.prototype._maxListeners = void 0;
EventEmitter.defaultMaxListeners = 10;
EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    if (domain.active)
      ;
  }
  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || void 0;
};
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== "number" || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};
function $getMaxListeners(that) {
  if (that._maxListeners === void 0)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].call(self, arg1, arg2, arg3);
  }
}
function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners2[i].apply(self, args);
  }
}
EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events2, domain2;
  var doError = type === "error";
  events2 = this._events;
  if (events2)
    doError = doError && events2.error == null;
  else if (!doError)
    return false;
  domain2 = this.domain;
  if (doError) {
    er = arguments[1];
    if (domain2) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain2;
      er.domainThrown = false;
      domain2.emit("error", er);
    } else if (er instanceof Error) {
      throw er;
    } else {
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
      err.context = er;
      throw err;
    }
    return false;
  }
  handler = events2[type];
  if (!handler)
    return false;
  var isFn = typeof handler === "function";
  len = arguments.length;
  switch (len) {
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }
  return true;
};
function _addListener(target, type, listener, prepend) {
  var m;
  var events2;
  var existing;
  if (typeof listener !== "function")
    throw new TypeError('"listener" argument must be a function');
  events2 = target._events;
  if (!events2) {
    events2 = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    if (events2.newListener) {
      target.emit("newListener", type, listener.listener ? listener.listener : listener);
      events2 = target._events;
    }
    existing = events2[type];
  }
  if (!existing) {
    existing = events2[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === "function") {
      existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
    } else {
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + type + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }
  return target;
}
function emitWarning(e) {
  typeof console.warn === "function" ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};
function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}
EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== "function")
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== "function")
    throw new TypeError('"listener" argument must be a function');
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events2, position, i, originalListener;
  if (typeof listener !== "function")
    throw new TypeError('"listener" argument must be a function');
  events2 = this._events;
  if (!events2)
    return this;
  list = events2[type];
  if (!list)
    return this;
  if (list === listener || list.listener && list.listener === listener) {
    if (--this._eventsCount === 0)
      this._events = new EventHandlers();
    else {
      delete events2[type];
      if (events2.removeListener)
        this.emit("removeListener", type, list.listener || listener);
    }
  } else if (typeof list !== "function") {
    position = -1;
    for (i = list.length; i-- > 0; ) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }
    if (position < 0)
      return this;
    if (list.length === 1) {
      list[0] = void 0;
      if (--this._eventsCount === 0) {
        this._events = new EventHandlers();
        return this;
      } else {
        delete events2[type];
      }
    } else {
      spliceOne(list, position);
    }
    if (events2.removeListener)
      this.emit("removeListener", type, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners2, events2;
  events2 = this._events;
  if (!events2)
    return this;
  if (!events2.removeListener) {
    if (arguments.length === 0) {
      this._events = new EventHandlers();
      this._eventsCount = 0;
    } else if (events2[type]) {
      if (--this._eventsCount === 0)
        this._events = new EventHandlers();
      else
        delete events2[type];
    }
    return this;
  }
  if (arguments.length === 0) {
    var keys = Object.keys(events2);
    for (var i = 0, key; i < keys.length; ++i) {
      key = keys[i];
      if (key === "removeListener")
        continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners("removeListener");
    this._events = new EventHandlers();
    this._eventsCount = 0;
    return this;
  }
  listeners2 = events2[type];
  if (typeof listeners2 === "function") {
    this.removeListener(type, listeners2);
  } else if (listeners2) {
    do {
      this.removeListener(type, listeners2[listeners2.length - 1]);
    } while (listeners2[0]);
  }
  return this;
};
EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events2 = this._events;
  if (!events2)
    ret = [];
  else {
    evlistener = events2[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === "function")
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }
  return ret;
};
EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === "function") {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events2 = this._events;
  if (events2) {
    var evlistener = events2[type];
    if (typeof evlistener === "function") {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}
function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
var events = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: EventEmitter,
  EventEmitter
});
var maplibreGlCompare = createCommonjsModule(function(module) {
  var EventEmitter2 = events.EventEmitter;
  function Compare(a, b, container, options) {
    this.options = options ? options : {};
    this._mapA = a;
    this._mapB = b;
    this._horizontal = this.options.orientation === "horizontal";
    this._onDown = this._onDown.bind(this);
    this._onMove = this._onMove.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._ev = new EventEmitter2();
    this._swiper = document.createElement("div");
    this._swiper.className = this._horizontal ? "compare-swiper-horizontal" : "compare-swiper-vertical";
    this._controlContainer = document.createElement("div");
    this._controlContainer.className = this._horizontal ? "maplibregl-compare maplibregl-compare-horizontal" : "maplibregl-compare";
    this._controlContainer.className = this._controlContainer.className;
    this._controlContainer.appendChild(this._swiper);
    if (typeof container === "string" && document.body.querySelectorAll) {
      var appendTarget = document.body.querySelectorAll(container)[0];
      if (!appendTarget) {
        throw new Error("Cannot find element with specified container selector.");
      }
      appendTarget.appendChild(this._controlContainer);
    } else if (container instanceof Element && container.appendChild) {
      container.appendChild(this._controlContainer);
    } else {
      throw new Error("Invalid container specified. Must be CSS selector or HTML element.");
    }
    this._bounds = b.getContainer().getBoundingClientRect();
    var swiperPosition = (this._horizontal ? this._bounds.height : this._bounds.width) / 2;
    this._setPosition(swiperPosition);
    this._clearSync = syncMove(a, b);
    this._onResize = function() {
      this._bounds = b.getContainer().getBoundingClientRect();
      if (this.currentPosition)
        this._setPosition(this.currentPosition);
    }.bind(this);
    b.on("resize", this._onResize);
    if (this.options && this.options.mousemove) {
      a.getContainer().addEventListener("mousemove", this._onMove);
      b.getContainer().addEventListener("mousemove", this._onMove);
    }
    this._swiper.addEventListener("mousedown", this._onDown);
    this._swiper.addEventListener("touchstart", this._onDown);
  }
  Compare.prototype = {
    _setPointerEvents: function(v) {
      this._controlContainer.style.pointerEvents = v;
      this._swiper.style.pointerEvents = v;
    },
    _onDown: function(e) {
      if (e.touches) {
        document.addEventListener("touchmove", this._onMove);
        document.addEventListener("touchend", this._onTouchEnd);
      } else {
        document.addEventListener("mousemove", this._onMove);
        document.addEventListener("mouseup", this._onMouseUp);
      }
    },
    _setPosition: function(x) {
      x = Math.min(x, this._horizontal ? this._bounds.height : this._bounds.width);
      var pos = this._horizontal ? "translate(0, " + x + "px)" : "translate(" + x + "px, 0)";
      this._controlContainer.style.transform = pos;
      this._controlContainer.style.WebkitTransform = pos;
      var clipA = this._horizontal ? "rect(0, 999em, " + x + "px, 0)" : "rect(0, " + x + "px, " + this._bounds.height + "px, 0)";
      var clipB = this._horizontal ? "rect(" + x + "px, 999em, " + this._bounds.height + "px,0)" : "rect(0, 999em, " + this._bounds.height + "px," + x + "px)";
      this._mapA.getContainer().style.clip = clipA;
      this._mapB.getContainer().style.clip = clipB;
      this.currentPosition = x;
    },
    _onMove: function(e) {
      if (this.options && this.options.mousemove) {
        this._setPointerEvents(e.touches ? "auto" : "none");
      }
      this._horizontal ? this._setPosition(this._getY(e)) : this._setPosition(this._getX(e));
    },
    _onMouseUp: function() {
      document.removeEventListener("mousemove", this._onMove);
      document.removeEventListener("mouseup", this._onMouseUp);
      this.fire("slideend", {currentPosition: this.currentPosition});
    },
    _onTouchEnd: function() {
      document.removeEventListener("touchmove", this._onMove);
      document.removeEventListener("touchend", this._onTouchEnd);
      this.fire("slideend", {currentPosition: this.currentPosition});
    },
    _getX: function(e) {
      e = e.touches ? e.touches[0] : e;
      var x = e.clientX - this._bounds.left;
      if (x < 0)
        x = 0;
      if (x > this._bounds.width)
        x = this._bounds.width;
      return x;
    },
    _getY: function(e) {
      e = e.touches ? e.touches[0] : e;
      var y = e.clientY - this._bounds.top;
      if (y < 0)
        y = 0;
      if (y > this._bounds.height)
        y = this._bounds.height;
      return y;
    },
    setSlider: function(x) {
      this._setPosition(x);
    },
    on: function(type, fn) {
      this._ev.on(type, fn);
      return this;
    },
    fire: function(type, data) {
      this._ev.emit(type, data);
      return this;
    },
    off: function(type, fn) {
      this._ev.removeListener(type, fn);
      return this;
    },
    remove: function() {
      this._clearSync();
      this._mapB.off("resize", this._onResize);
      var aContainer = this._mapA.getContainer();
      if (!!aContainer) {
        aContainer.style.clip = null;
        aContainer.removeEventListener("mousemove", this._onMove);
      }
      var bContainer = this._mapB.getContainer();
      if (!!bContainer) {
        bContainer.style.clip = null;
        bContainer.removeEventListener("mousemove", this._onMove);
      }
      this._swiper.removeEventListener("mousedown", this._onDown);
      this._swiper.removeEventListener("touchstart", this._onDown);
      this._controlContainer.remove();
    }
  };
  module.exports = Compare;
});
export default maplibreGlCompare;