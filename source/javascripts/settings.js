var MEME_SETTINGS = {
  creditText: 'Photo by', // Default "credits" text.
  creditSize: 12, // Font size for credit text.
  downloadName: 'share', // The name of the downloaded image file (will have a ".png" extension added).

  // Universal font family for texts:
  // Note that you'll need to included quoted font names as you would in CSS, ie: '"Knockout 28 B"'.
  fontFamily: 'Oswald',
  // Font family options: set to empty array to disable font selector.
  // These options may also be formatted as {text:'Knockout', value:'"Knockout 28 B"'}.
  fontFamilyOpts: [{
    text: 'Oswald - statesman.com',
    value: 'Oswald'
  }, {
    text: 'Georgia - politifact.com',
    value: 'Georgia'
  }, {
    text: 'Ubuntu - hookem.com',
    value: 'Ubuntu'
  }, {
    text: 'Roboto - 512tech.com',
    value: 'Roboto'
  }],

  // Font size of main headline:
  fontSize: 24,
  // Font size options: set to empty array to disable font-size selector.
  fontSizeOpts: [
    {text: 'Small text', value: 18},
    {text: 'Medium text', value: 24},
    {text: 'Large text', value: 36}
  ],
  // Font color options
  fontColor: '#fff',
  fontColorOpts: ['#fff', '#333', '#000'],

  headlineText: 'Write your own headline', // Default headline text.
  height: 378, // Canvas rendering height.
  imageScale: 1, // Background image scale.
  imageSrc: '', // Default background image path. MUST reside on host domain, or use base64 data.
  overlayAlpha: 0.5, // Opacity of image overlay.

  // Image overlay color, or blank ('') for no overlay:
  overlayColor: '',
  // Overlay color options: set to empty array to disable overlay options selector.
  overlayColorOpts: ['#000', '#777', '#1368b2', '#98012e', '#62b246', '#1955a5', '#BF5700', '#dd2228'],
  paddingRatio: 0.05, // Percentage of canvas width to use as edge padding.

  // Size options: these are some sane defaults for the three social networks.
  sizeOpts: [{
    label: 'Twitter',
    width: 755,
    height: 378
  }, {
    label: 'Facebook',
    width: 705,
    height: 369
  }, {
    label: 'Instagram',
    width: 612,
    height: 612
  }],

  // Text alignment: valid settings are "left", "center", and "right".
  textAlign: 'left',
  // Text alignment options: set to empty array to disable alignment picker.
  textAlignOpts: [
    {text: 'Align left', value: 'left'},
    {text: 'Align center', value: 'center'},
    {text: 'Align right', value: 'right'}
  ],

  textShadow: true, // Text shadow toggle.
  textShadowEdit: true, // Toggles text shadow control within the editor.
  watermarkAlpha: 1, // Opacity of watermark image.
  watermarkMaxWidthRatio: 0.25, // Maximum allowed width of watermark (percentage of total canvas width).

  // Path to the watermark image source, or blank for no watermark:
  watermarkSrc: (localStorage && localStorage.getItem('meme_watermark')) || 'source/images/statesman.png',

  // Watermark image options: set to empty array to disable watermark picker.
  // NOTE: only populate the "data" attributes with base64 data when concerned about Cross-Origin requests...
  // Otherwise, just leave "data" attributes blank and allow images to load from your server.
  watermarkOpts: [
    {text: 'Statesman', value: 'source/images/statesman.png', data: ''},
    {text: 'MyStatesman', value: 'source/images/mystatesman.png', data: ''},
    {text: 'Hookem.com (white)', value: 'source/images/hookem.png', data: ''},
    {text: 'Hookem.com (color)', value: 'source/images/hookem-color.png', data: ''},
    {text: 'Austin360', value: 'source/images/logo-austin360-white.png', data: ''},
    {text: 'Austin360 app', value: 'source/images/austin360app.png', data: ''},
    {text: '512tech (white)', value: 'source/images/512tech-white.png', data: ''},
    {text: '512tech (color)', value: 'source/images/512tech.png', data: ''},
    {text: 'Ahora Si', value: 'source/images/ahorasi.png', data: ''},
    {text: 'PolitiFact Texas (white)', value: 'source/images/politifact-white.png', data: ''},
    {text: 'PolitiFact Texas (color)', value: 'source/images/politifact.png', data: ''},
    {text: 'PolitiFact Texas (truth)', value: 'source/images/politifact-truth-o-meter.png', data: ''},
    {text: 'Austin answered', value: 'source/images/austin-answered-black.png', data: ''},
    {text: 'Bastrop Advertiser', value: 'source/images/bastrop.png', data: ''},
    {text: 'Lake Travis View', value: 'source/images/laketravis.png', data: ''},
    {text: 'Pflugerville Pflag', value: 'source/images/pflugerville.png', data: ''},
    {text: 'Round Rock Leader', value: 'source/images/roundrock.png', data: ''},
    {text: 'Smithville Times', value: 'source/images/smithville.png', data: ''},
    {text: 'Westlake Picayune', value: 'source/images/westlake.png', data: ''}
  ],

  width: 755 // Canvas rendering width.
};
