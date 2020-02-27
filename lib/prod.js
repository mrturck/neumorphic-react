'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
require('react-dom');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var getLight = function getLight() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "topLeft";

  switch (direction) {
    case 'bottomRight':
      return {
        left: '-',
        right: "-",
        aLeft: '+',
        aRight: '+'
      };

    case 'bottomLeft':
      return {
        left: '+',
        right: "-",
        aLeft: '-',
        aRight: '+'
      };

    case 'topRight':
      return {
        left: '-',
        right: "+",
        aLeft: '+',
        aRight: '-'
      };

    case 'topLeft':
      return {
        left: '+',
        right: '+',
        aLeft: '-',
        aRight: '-'
      };

    default:
      return {
        left: '-',
        right: "-",
        aLeft: '+',
        aRight: '+'
      };
  }
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    width: 150px;\n    border-radius: 8px;\n    padding: 12px 24px;\n    text-align: center;\n\n    background: #ccd2ed;\n    box-shadow: inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    width: 150px;\n    border-radius: 8px;\n    padding: 12px 24px;\n    text-align: center;\n\n    background: #ccd2ed;\n    box-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * FIX ISSUE WITH INPUTS LOSING FOCUS
 * https://github.com/styled-components/styled-components/issues/540
 * 
*/

var Paper = function Paper(props) {
  var light = getLight(props.lighting);
  var RaisedPaper = styled.div(_templateObject());
  var InsetPaper = styled.div(_templateObject2());
  return React__default.createElement("div", null, props.inset ? React__default.createElement(InsetPaper, {
    style: props.style
  }, props.children) : React__default.createElement(RaisedPaper, {
    style: props.style
  }, props.children));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0px;\n  background: #ff0;\n  border-radius: 0;\n  min-height: 56px;\n  min-width: 100%;\n  width: 100%;\n  position: static;\n  background: #ccd2ed;\n  box-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var AppBar = function AppBar(props) {
  var light = getLight(props.lighting);
  var AppBarRoot = styled.div(_templateObject$1());
  return React__default.createElement(AppBarRoot, null, props.children);
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\nborder: none;\nborder-radius: 95px;\npadding: 12px 24px;\ntext-align: center;\n\nbackground: ", ";\nbox-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;\n\n&:hover {\nbox-shadow:  3px 3px 7px #adb3c9, -3px -3px 7px #ebf2ff;\n }\n\n&:active {\nbackground: #ccd2ed;\nbox-shadow: inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff;\n}\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\nborder: none;\nborder-radius: 95px;\npadding: 8px 12px;\ntext-align: center;\n\nbackground: linear-gradient(145deg, #dae1fe, #b8bdd5);\nbox-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;\n\n&:hover {\nbackground: linear-gradient(145deg, #b8bdd5, #dae1fe);\nbox-shadow:  3px 3px 5px #adb3c9, -3px -3px 5px #ebf2ff;\n }\n\n&:active {\nbackground: #ccd2ed;\nbox-shadow: inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff;\n}\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * FIX ISSUE WITH WEIRD BACKGROUND COLORS AT LEAST WITH PAPER COMPONENT
 * 
 */

/**
 * Button component
 * 
 * Use below link to figure out color conversions
 * https://www.hexcolortool.com/#7276a7
 * 
 * Study differences and how they vary with intensity
 * - hue seems to stay constant while saturation and value change
 * - style guidelines:
 *   - white background seems poor choice due to inability to create lighter shade for effect
 *   - use an off-white for base background
 * 
 */

var RoundedButton = styled.button(_templateObject$2());
var FlatButtom = styled.button(_templateObject2$1(), function (props) {
  return props.color ? props.color : '#ccd2ed';
});

var Button = function Button(props) {
  return React__default.createElement("div", {
    style: props.style
  }, props.flat ? React__default.createElement(FlatButtom, _extends({}, props, {
    style: props.style
  }), props.children) : React__default.createElement(RoundedButton, _extends({}, props, {
    style: props.style
  }), props.children));
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  font: bold 48px arial, sans-serif;\n  color: #dddddd;\n  text-shadow: ", "2px ", "2px 5px rgba(86, 86, 86, .8), ", "2px ", "2px 5px #fff;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  font: bold 48px arial, sans-serif;\n  background-color: #565656;\n  color: transparent;\n  text-shadow: ", "2px ", "2px 3px rgba(255,255,255,0.5);\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  &: hover {\n      text-shadow: ", "1px ", "1px 3px rgba(255,255,255,0.5);\n  }\n  &:active {\n    text-shadow: none;\n    color: #a8a8a8;\n    text-shadow: ", "0px ", "0px 2px rgba(255,255,255,0.5);\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * NOTES ON TEXTSHADOW EFFECTS
 * 
 * Move hover and active to Button type="text"
 */

var Typography = function Typography(props) {
  var variant = props.variant;
  var Component = variant || 'span';
  var light = getLight(props.lighting);
  var InsetTypography = styled(Component)(_templateObject$3(), light.left, light.right, light.left, light.right, light.left, light.right);
  var RaisedTypography = styled(Component)(_templateObject2$2(), light.left, light.right, light.left, light.right);
  return React__default.createElement("div", null, props.raised ? React__default.createElement(RaisedTypography, {
    style: props.style
  }, props.children, ">") : React__default.createElement(InsetTypography, {
    style: props.style
  }, props.children));
};

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 8px;\n  display: inline-block;\n  border-radius: 3px;\n  transition: all 150ms;\n  width: ", ";\n  height: ", ";\n\n  background: ", ";\n  box-shadow: ", ";\n\n   ", ":focus + & {\n    box-shadow: 0 0 0 3px pink;\n    background: #fff;\n\n  }\n\n  &:hover {\n      box-shadow: ", ";\n  }\n\n  &:active {\n    box-shadow: inset 1px 1px 3px #a7acc2, inset -1px -1px 3px #f1f8ff;\n\n  }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  // Hide checkbox visually but remain accessible to screen readers.\n  // Source: https://polished.js.org/docs/#hidevisually\n  display: inline-block;\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
/**
* Tutorial: https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
*/

var styles = {
  root: {
    display: 'flex'
  },
  label: {
    fontSize: 16,
    display: 'inline-block'
  }
};

var CheckboxRoot = function CheckboxRoot(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "checked"]);

  return React__default.createElement(CheckboxContainer, {
    className: className
  }, React__default.createElement(HiddenCheckbox, _extends({
    checked: checked
  }, props)), React__default.createElement(StyledCheckbox, _extends({
    checked: checked
  }, props)));
};

var HiddenCheckbox = styled.input.attrs({
  type: 'checkbox'
})(_templateObject$4());
var StyledCheckbox = styled.div(_templateObject2$3(), function (props) {
  return props.size ? "".concat(props.size, "px") : '16px';
}, function (props) {
  return props.size ? "".concat(props.size, "px") : '16px';
}, function (props) {
  return props.checked ? 'linear-gradient(145deg, #97a5e8, #4160e8)' : '#ccd2ed';
}, function (props) {
  return "".concat(props.light.left, "2px ").concat(props.light.right, "2px 3px #adb3c9,\n     ").concat(props.light.aLeft, "2px ").concat(props.light.aRight, "2px 3px #ebf2ff\n    ");
}, HiddenCheckbox, function (props) {
  return "".concat(props.light.left, "1px ").concat(props.light.right, "1px 3px #adb3c9,\n      ").concat(props.light.aLeft, "1px ").concat(props.light.aRight, "1px 3px #ebf2ff\n      ");
});
var CheckboxContainer = styled.div(_templateObject3());

var Checkbox = function Checkbox(props) {
  var light = getLight(props.lighting);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var handleChecked = function handleChecked() {
    return setChecked(!checked);
  };

  return React__default.createElement("label", {
    style: styles.root
  }, React__default.createElement(CheckboxRoot, _extends({
    checked: checked,
    onChange: handleChecked
  }, props, {
    light: light
  })), React__default.createElement(Typography, _extends({}, props, {
    style: styles.label
  }), props.label));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  padding: 12px;\n  width: 25%;\n  left: ", ";\n  right: ", ";\n  background: #ccd2ed;\n  box-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Stay on top */\n  top: 0; /* Stay at the top *\n  overflow-x: hidden; /* Disable horizontal scroll */\n  transition: 0.5s;\n\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var DrawerRoot = styled.div(_templateObject$5(), function (props) {
  return props.anchor == "right" ? false : 0;
}, function (props) {
  return props.anchor == "right" ? 0 : false;
});

var Drawer = function Drawer(props, _ref) {
  var _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? "left" : _ref$anchor;
  return React__default.createElement("div", null, props.open == true ? React__default.createElement(DrawerRoot, _extends({
    anchor: anchor
  }, props)) : false);
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n    padding: 0px 24px;\n    minWidth: 64px;\n    height: 48px;\n    fontSize: 18px;\n    margin-right: $ruler/2;\n    border: none;\n    background: #ccd2ed;\n    border-radius: 180px;\n    box-shadow: inset 5px 5px 5px #a7acc2, inset -5px -5px 5px #dae1fe;\n    box-sizing: border-box;\n    transition: all 0.2s ease-in-out;\n    appearance: none;\n    -webkit-appearance: none;\n\n    &:focus {\n      box-shadow: inset 2px 2px 2px #a7acc2, inset -2px -2px 2px #dae1fe;\n    }\n  "]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * NOTES
 * - use theme default font
 * - use theme default font color
 */

/**
 * Inspiration from https://codepen.io/swapnet/pen/QWwPVwE
 */

var Input = function Input(props, _ref) {
  var _ref$placeholder = _ref.placeholder;
  var light = getLight(props.lighting);
  var InsetInput = styled.input(_templateObject$6());
  return React__default.createElement(InsetInput, _extends({}, props, {
    style: props.style
  }), props.children);
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  height: 16px;\n  min-width: 200px;\n  background: #ccd2ed;\n  padding: 24px;\n  color: #565656;\n  font: bold 18px arial, sans-serif;\n  box-shadow: 5px 5px 7px #adb3c9;\n\n  &:hover {\n    background:#adb3c9;\n  }\n  &:first-child {\n    border-radius: 12px 12px 0px 0px;\n    border-bottom: 1px solid #adb3c9;\n\n    :hover {\n          background: #adb3c9\n\n    }\n  }\n\n  &:not(:first-child):not(:last-child) {\n    border-bottom: 1px solid #adb3c9;\n  }\n\n  &:last-child {\n    border-radius: 0px 0px 12px 12px;\n\n    :hover {\n      background: #adb3c9\n    }\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var MenuItem = styled.option(_templateObject$7());

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 8px;\n  margin-top: 3px;\n  display: inline-block;\n  border-radius: 180px;\n  transition: all 150ms;\n  width: ", ";\n  height: ", ";\n\n  background: ", ";\n  box-shadow: ", ";\n\n   ", ":focus + & {\n    box-shadow: 0 0 0 3px pink;\n    background: #fff;\n\n  }\n\n  &:hover {\n      box-shadow: ", ";\n  }\n\n  &:active {\n    box-shadow: inset 1px 1px 3px #a7acc2, inset -1px -1px 3px #f1f8ff;\n\n  }\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  "]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var styles$1 = {
  root: {
    display: 'flex',
    width: 'auto'
  },
  label: {
    fontSize: 16,
    display: 'inline-block'
  }
};

var RadioButtonRoot = function RadioButtonRoot(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "checked"]);

  return React__default.createElement(RadioButtonContainer, {
    className: className
  }, React__default.createElement(HiddenRadioButton, _extends({
    checked: checked
  }, props)), React__default.createElement(StyledRadioButton, _extends({
    checked: checked
  }, props)));
};

var HiddenRadioButton = styled.input.attrs({
  type: 'radio'
})(_templateObject$8());
var StyledRadioButton = styled.div(_templateObject2$4(), function (props) {
  return props.size ? "".concat(props.size, "px") : '12px';
}, function (props) {
  return props.size ? "".concat(props.size, "px") : '12px';
}, function (props) {
  return props.checked ? 'linear-gradient(145deg, #97a5e8, #4160e8)' : 'linear-gradient(145deg, #dae1fe, #b8bdd5)';
}, function (props) {
  return "".concat(props.light.left, "2px ").concat(props.light.right, "2px 3px #adb3c9,\n     ").concat(props.light.aLeft, "2px ").concat(props.light.aRight, "2px 3px #ebf2ff\n    ");
}, HiddenRadioButton, function (props) {
  return "".concat(props.light.left, "1px ").concat(props.light.right, "1px 3px #adb3c9,\n      ").concat(props.light.aLeft, "1px ").concat(props.light.aRight, "1px 3px #ebf2ff\n      ");
});
var RadioButtonContainer = styled.div(_templateObject3$1());

var RadioButton = function RadioButton(props) {
  var light = getLight(props.lighting);
  return React__default.createElement("div", null, React__default.createElement("label", {
    style: styles$1.root
  }, React__default.createElement(RadioButtonRoot, _extends({
    checked: props.selected,
    onClick: props.handleChecked
  }, props, {
    light: light
  })), React__default.createElement(Typography, _extends({}, props, {
    style: styles$1.label
  }), props.label)));
};

var ArrowUp = function ArrowUp(props) {
  return React__default.createElement("svg", {
    style: props.style,
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, React__default.createElement("path", {
    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
  }), React__default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var ArrowDown = function ArrowDown(props) {
  return React__default.createElement("svg", {
    style: props.style,
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, React__default.createElement("path", {
    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
  }), React__default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }));
};

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  position: absolute\n  display: inline-block;\n  background-color: #ccd2ed;\n  box-shadow:  ", ";\n  font: inherit;\n  color:white;\n  border:0;\n  height: 24px;\n  padding: 12px 8px;\n  &:hover {\n    box-shadow:  ", ";\n\n  }\n  "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  min-width: 300px;\n  height: 24px;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var styles$2 = {
  selectLabel: {
    fontSize: 18,
    verticalAlign: 'middle',
    display: 'inline',
    position: 'absolute'
  },
  arrow: {
    position: 'relative',
    "float": 'right',
    fill: '#565656',
    backgroundColor: '#565656',
    backgroundClip: 'text',
    color: 'transparent',
    filter: 'drop-shadow(3px 3px 5px rgba(255,255,255,0.5)',
    display: 'inline'
  }
};
var SelectContainer = styled.div(_templateObject$9());
var Hidden = styled.select(_templateObject2$5());
var StyledSelect = styled.div(_templateObject3$2(), function (props) {
  return !props.open ? '5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff' : 'inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff';
}, function (props) {
  return !props.open && '1px 1px 3px #adb3c9, -1px -1px 3px #ebf2ff';
});

var SelectRoot = function SelectRoot(props) {
  return React__default.createElement(SelectContainer, props, React__default.createElement(Hidden, null), React__default.createElement(StyledSelect, {
    open: props.open
  }, props.children));
};

var Select = function Select(props) {
  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleOpen = function handleOpen(e) {
    setOpen(!open);
  };

  return React__default.createElement("div", null, React__default.createElement(SelectRoot, {
    open: open,
    onClick: handleOpen,
    style: props.style
  }, React__default.createElement(Typography, {
    style: styles$2.selectLabel
  }, props.value), open ? React__default.createElement(ArrowDown, {
    style: styles$2.arrow
  }) : React__default.createElement(ArrowUp, {
    style: styles$2.arrow
  }), React__default.createElement("div", {
    style: {
      marginLeft: -8,
      marginTop: 48
    }
  }, open && props.children)));
};

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 24px;\n  background: ", ";\n  background-color: #ccd2ed;\n  box-shadow: ", ";\n  -webkit-transition: .4s;\n  -ms-transition: .4s;\n  transition: .4s;\n\n  &:focus {\n    box-shadow: 0 0 1px #2196F3;\n  }\n\n  &:before {\n    position: absolute;\n    content: \"\";\n    height: 24px;\n    width: 24px;\n    left: 6px;\n    border-radius: 180px;\n    box-shadow: ", ";\n    bottom: 4px;\n    background-color: #ccd2ed;\n    -webkit-transition: 0.4s;\n    -ms-transition: 0.4s;\n    transition: 0.4s ease;\n    -webkit-transform: ", ";\n    -ms-transform: ", ";\n    transform: ", "\n\n  }\n  \n  &:hover {\n    box-shadow: inset 1px 1px 3px #a7acc2, inset -1px -1px 3px #f1f8ff;\n  }\n\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  // Hide checkbox visually but remain accessible to screen readers.\n  // Source: https://polished.js.org/docs/#hidevisually\n  display: inline-block;\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  white-space: nowrap;\n  width: 1px;\n  -webkit-transform: ", ";\n  -ms-transform: ", ";\n  transform: ", "\n\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var styles$3 = {
  root: {
    margin: 4
  },
  label: {
    fontSize: 16,
    display: 'inline-block'
  }
};

var SwitchRoot = function SwitchRoot(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "checked"]);

  return React__default.createElement(SwitchContainer, {
    className: className
  }, React__default.createElement(HiddenSwitch, _extends({
    checked: checked
  }, props)), React__default.createElement(StyledSwitch, _extends({
    checked: checked
  }, props)));
};

var HiddenSwitch = styled.input.attrs({
  type: 'checkbox'
})(_templateObject$a(), function (props) {
  return props.checked ? 'translate(26px,0px)' : '';
}, function (props) {
  return props.checked ? 'translate(26px,0px)' : '';
}, function (props) {
  return props.checked && 'translate(26px,0px)';
});
var StyledSwitch = styled.div(_templateObject2$6(), function (props) {
  return props.checked ? 'linear-gradient(145deg, #97a5e8, #4160e8)' : '#ccd2ed';
}, function (props) {
  return !props.checked ? 'inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff' : '';
}, function (props) {
  return !props.checked && 'inset 5px 5px 7px #adb3c9, inset -5px -5px 7px #ebf2ff';
}, function (props) {
  return props.checked ? 'translateX(24px)' : '';
}, function (props) {
  return props.checked ? 'translateX(24px)' : '';
}, function (props) {
  return props.checked && 'translateX(24px)';
});
var SwitchContainer = styled.div(_templateObject3$3());

var Switch = function Switch(props) {
  var light = getLight(props.lighting);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var handleChecked = function handleChecked() {
    return setChecked(!checked);
  };

  return React__default.createElement("div", _defineProperty({
    style: styles$3.root
  }, "style", props.style), React__default.createElement("label", null, React__default.createElement(SwitchRoot, _extends({
    checked: checked,
    onChange: handleChecked
  }, props, {
    light: light
  })), React__default.createElement(Typography, _extends({}, props, {
    style: styles$3.label
  }), props.label)));
};

exports.AppBar = AppBar;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Drawer = Drawer;
exports.Input = Input;
exports.MenuItem = MenuItem;
exports.Paper = Paper;
exports.RadioButton = RadioButton;
exports.Select = Select;
exports.Switch = Switch;
exports.Typography = Typography;
