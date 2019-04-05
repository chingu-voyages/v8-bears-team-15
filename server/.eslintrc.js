module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "max-len": [1, 120, 2],
    "indent": [1, 2],
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "new-cap": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "comma-dangle": 0,
    "no-underscore-dangle": ["error", {
      "allow": ["_events", "_id"]
    }],
    "curly": [1, "multi-line"],
    "arrow-body-style": 0,
    "no-shadow": [1, {
      "allow": ["req", "res", "err"]
    }],
    "no-undef": 0,
    "jsx-quotes": 1,
    "class-methods-use-this": 0,
    "import/no-unresolved": "off",
    "valid-jsdoc": [1, {
      "requireReturn": false,
      "requireReturnType": false,
      "requireParamDescription": false,
      "requireReturnDescription": false
    }],
    "require-jsdoc": [1, {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": false,
        "ClassDeclaration": false
      }
  }]
  }
};