module.exports = {
  title: 'Vue2 Element Admin',
  /**
   * @type {string} your log picture url
   * @description logo picture url path
   */
  logoPictureUrl: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,
  /**
   * @type {string | array} 'prod' | ['prod', 'dev']
   * @description Need show err logs component.
   * The default is only used in the prod env
   * If you want to also use it in dev, you can pass ['prod', 'dev']
   */
  errorLog: 'prod'
}
