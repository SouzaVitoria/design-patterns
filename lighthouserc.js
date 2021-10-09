module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'dom-size': ['error', { maxNumericValue: 3000 }],

        'csp-xss': 'off',
        'unsized-images': 'off',
        'uses-rel-preload': 'off',
        'uses-responsive-images': 'off',
        'uses-rel-preconnect': 'off',
        'preload-lcp-image': 'off',
        'offscreen-images': 'off',
        'unused-javascript': 'off',

        label: 'off',
        'content-width': 'off',
        'color-contrast': 'off',
        bypass: 'off',
        'tap-targets': 'off',

        'apple-touch-icon': 'off',
        'maskable-icon': 'off',
        'installable-manifest': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
      },
    },
    upload: {
      urlReplacementPatterns: [
        's/[0-9a-f]{12}$/HASH/',
        's#:[0-9]{3,5}/#:PORT/#',
        's/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/UUID/ig',
      ],
    },
  },
};