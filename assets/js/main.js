"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function ($) {
  $('.js-menu').click(function () {
    $('.js-menu-sub').animate({
      opacity: 'toggle'
    }, 500);
  });
  var isSoc = false;
  $('.js-social').click(function () {
    if (isSoc) {
      $('.js-soc').animate({
        right: "+=" + -100 + "%"
      }, 500);
    } else {
      $('.js-soc').animate({
        right: "-=" + -100 + "%"
      }, 500);
    }
    isSoc = !isSoc;
  });
  var $portfolio = $('.portfolio');
  $(document).ready(function () {
    $portfolio.slick({
      centerMode: true,
      focusOnSelect: true,
      slidesToShow: 3,
      arrows: false,
      adaptiveHeight: false,
      variableWidth: true,
      responsive: [{
        breakpoint: 490,
        settings: {}
      }]
    });
  });
  var $titlePortfolio = $('.portfolio-title-js');
  var $subTitlePortfolio = $('.portfolio-subtitle-js');
  $portfolio.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.glass-visible-js').css({
      opacity: 0
    });
    $('.clue-js').css({
      opacity: 0
    });
    $titlePortfolio.css({
      opacity: 0,
      top: '30px'
    });
    $('.portfolio-subtitle-js').css({
      opacity: 0,
      marginRight: '-80px'
    });
    $portfolio.next(nextSlide);
  });
  $portfolio.on('afterChange', function (event, slick, currentSlide) {
    $titlePortfolio.css({
      opacity: 1,
      top: 0
    });
    $('.slick-center .glass-visible-js').css({
      opacity: 1
    });
    $('.portfolio-subtitle-js').css({
      opacity: 1,
      marginRight: '-50px'
    });
    $titlePortfolio.text($(slick.$slides[currentSlide]).data('name'));
    var lastName = $(slick.$slides[currentSlide]).data('last-name');
    $subTitlePortfolio.text(lastName ? lastName : 'project');
  });
  $portfolio.on('wheel', function (e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  });
  $('.portfolio-modal-shadow-js').click(function () {
    $('.portfolio-modal-js').css({
      opacity: 0,
      pointerEvents: 'none'
    });
  });
  $('.portfolio-item-js').each(function () {
    $(this).find('.glass-visible-js').click(function () {
      $('.portfolio-modal-js').css({
        opacity: 1,
        pointerEvents: 'auto'
      });
      console.log($(this).closest('.portfolio-item-js').data('image'));
      $('.portfolio-modal-page-js').html("<img src=\"".concat($(this).closest('.portfolio-item-js').data('image'), "\" alt=\"\">"));
    });
  });
  if (window.matchMedia('(min-width: 1200px)')) {
    var currentPage = 1;
    var stopWheel = 0;
    var $clue = $('.clue-vertical-js');
    var $aboutWindow = $('.about-window-js');
    if ($aboutWindow.length > 0) {
      $('.page-js').on('wheel', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!stopWheel) {
                  _context.next = 4;
                  break;
                }
                e.preventDefault();
                e.stopImmediatePropagation();
                return _context.abrupt("return", false);
              case 4:
                $clue.css('opacity', 0);
                if (e.originalEvent.deltaY < 0) {
                  if (currentPage === 1) {
                    $aboutWindow[0].style.right = '0';
                    $aboutWindow[1].style.top = '200%';
                  } else if (currentPage === 2) {
                    $aboutWindow[1].style.right = '0';
                    $aboutWindow[2].style.top = '200%';
                  }
                  --currentPage;
                } else {
                  if (currentPage === 1) {
                    $aboutWindow[0].style.right = '-100%';
                    $aboutWindow[1].style.top = '50%';
                  } else if (currentPage === 2) {
                    $aboutWindow[1].style.right = '-100%';
                    $aboutWindow[2].style.top = '50%';
                  }
                  ++currentPage;
                }
                if (currentPage < 1) {
                  $clue.css('opacity', 0.5);
                  $clue.find('span').html('SCROLL DOWN');
                  currentPage = 1;
                }
                if (currentPage > 2) {
                  currentPage = 2;
                  $clue.css('opacity', 0.5);
                  $clue.find('span').html('SCROLL UP');
                }
                stopWheel = 1;
                _context.next = 11;
                return delay(500);
              case 11:
                stopWheel = 0;
              case 12:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    var $offerWindow = $('.offer-window-js');
    if ($offerWindow.length > 0) {
      $('.page-js').on('wheel', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!stopWheel) {
                  _context2.next = 4;
                  break;
                }
                e.preventDefault();
                e.stopImmediatePropagation();
                return _context2.abrupt("return", false);
              case 4:
                $clue.css('opacity', 0);
                if (e.originalEvent.deltaY < 0) {
                  $offerWindow.each(function (i) {
                    if (currentPage === i + 1) {
                      console.log(i);
                      $offerWindow[i].style.right = '0';
                      $offerWindow[i + 1].style.top = '200%';
                    }
                  });
                  // if (currentPage === 1) {
                  //     $offerWindow[0].style.right = '0';
                  //     $offerWindow[1].style.top = '200%';
                  // } else if (currentPage === 2) {
                  //     $offerWindow[1].style.right = '0';
                  //     $offerWindow[2].style.top = '200%';
                  // } else if (currentPage === 3) {
                  //     $offerWindow[2].style.right = '0';
                  //     $offerWindow[3].style.top = '200%';
                  // } else if (currentPage === 4) {
                  //     $offerWindow[3].style.right = '0';
                  //     $offerWindow[4].style.top = '200%';
                  // } else if (currentPage === 5) {
                  //     $offerWindow[4].style.right = '0';
                  //     $offerWindow[5].style.top = '200%';
                  // } else if (currentPage === 6) {
                  //     $offerWindow[5].style.right = '0';
                  //     $offerWindow[6].style.top = '200%';
                  // }
                  --currentPage;
                } else {
                  $offerWindow.each(function (i) {
                    if (currentPage === i + 1) {
                      $offerWindow[i].style.right = '-100%';
                      $offerWindow[i + 1].style.top = '50%';
                    }
                  });
                  // if (currentPage === 1) {
                  //     $offerWindow[0].style.right = '-100%';
                  //     $offerWindow[1].style.top = '50%';
                  // } else if (currentPage === 2) {
                  //     $offerWindow[1].style.right = '-100%';
                  //     $offerWindow[2].style.top = '50%';
                  // } else if (currentPage === 3) {
                  //     $offerWindow[2].style.right = '-100%';
                  //     $offerWindow[3].style.top = '50%';
                  // } else if (currentPage === 4) {
                  //     $offerWindow[3].style.right = '-100%';
                  //     $offerWindow[4].style.top = '50%';
                  // } else if (currentPage === 5) {
                  //     $offerWindow[4].style.right = '-100%';
                  //     $offerWindow[5].style.top = '50%';
                  // } else if (currentPage === 6) {
                  //     $offerWindow[5].style.right = '-100%';
                  //     $offerWindow[6].style.top = '50%';
                  // }
                  ++currentPage;
                }
                if (currentPage < 1) {
                  $clue.css('opacity', 0.5);
                  $clue.find('span').html('SCROLL DOWN');
                  currentPage = 1;
                }
                if (currentPage > $offerWindow.length - 1) {
                  currentPage = $offerWindow.length - 1;
                  $clue.css('opacity', 0.5);
                  $clue.find('span').html('SCROLL UP');
                }
                stopWheel = 1;
                _context2.next = 11;
                return delay(500);
              case 11:
                stopWheel = 0;
              case 12:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }
  function delay(time) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, time);
    });
  }
})(jQuery);
//# sourceMappingURL=main.js.map
