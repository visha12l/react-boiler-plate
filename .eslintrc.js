module.exports = {
    "extends": "airbnb",
    "rules": {
        // enable additional rules
        "max-len": ["error", { "code": 220 }],
        "one-var": ["error", "always"],
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    },
    "globals": {
      "React": true,
      "amplify": true,
      "jQuery": true,
      "isNaN": true,
      "parseInt": true,
    }
};
