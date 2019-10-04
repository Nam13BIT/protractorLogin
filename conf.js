exports.config = {
    framework: 'jasmine',
    directConnect: true,
    baseUrl: 'http://192.168.171.191:4200/#/login',
    specs: ['D:\protractorLogin\.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }