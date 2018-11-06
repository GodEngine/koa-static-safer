module.exports = async (ctx, next) => {
  if (/\w*:/i.test(decodeURIComponent(this.path))) {
    // console.log('dangerous request', this.request.url)
    this.redirect('/404')
    return false
  }
}
