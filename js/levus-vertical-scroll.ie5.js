"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LevusVerticalScroll = /*#__PURE__*/ function() {
    function LevusVerticalScroll(id) {
        _classCallCheck(this, LevusVerticalScroll);

        this.id = document.querySelector(id);
        this.scroll = this.id.querySelector('ul');
        this.elements = this.id.querySelectorAll('li');
        this.up = this.id.querySelector('.up');
        this.down = this.id.querySelector('.down');
    }

    _createClass(LevusVerticalScroll, [{
        key: "clone",
        value: function clone() {
            var _this = this;

            if (this.elements.length <= 14) {
                this.elements.forEach(function(element) {
                    var clone = element.cloneNode(true);

                    _this.scroll.append(clone);
                });
                this.elements = this.scroll.querySelectorAll('.levus-vertical-scroll li');
            }
        }
    }, {
        key: "buttons",
        value: function buttons() {
            this.up.style.display = this.down.style.display = 'block';
        }
    }, {
        key: "arrow",
        value: function arrow() {
            var _this2 = this;

            this.up.addEventListener('click', function() {
                var last = _this2.scroll.lastElementChild;

                _this2.scroll.prepend(last);

                _this2.scroll.style.transform = 'translateY(-60px)';
                _this2.scroll.style.transition = '';
                setTimeout(function() {
                    _this2.scroll.style.transform = 'translateY(0)';
                    _this2.scroll.style.transition = 'all .5s';
                }, 300);
            });
            this.down.addEventListener('click', function() {
                var first = _this2.scroll.firstElementChild;

                _this2.scroll.append(first);

                _this2.scroll.style.transform = 'translateY(60px)';
                _this2.scroll.style.transition = '';
                setTimeout(function() {
                    _this2.scroll.style.transform = 'translateY(0)';
                    _this2.scroll.style.transition = 'all .5s';
                }, 300);
            });
        }
    }, {
        key: "init",
        value: function init() {
            this.clone();
            this.buttons();
            this.arrow();
        }
    }]);

    return LevusVerticalScroll;
}();

document.querySelector('#scroll') && new LevusVerticalScroll('#scroll').init();