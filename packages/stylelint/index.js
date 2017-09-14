module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-vendor-prefix': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-named': 'never',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': null,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'named-where-possible',
    'function-url-quotes': 'always',
    'indentation': 2,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-duplicate-selectors': true,
    'number-leading-zero': 'always',
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-max-class': 2,
    'selector-max-id': 0,
    'selector-max-type': [0, { 'ignore': ['child', 'descendant'] } ],
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'single',
    'string-quotes': 'double',
    'value-no-vendor-prefix': true,
  },
}

