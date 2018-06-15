let noScroll = {
  isOn: false,

  on() {
    if (typeof document === 'undefined' || this.isOn) return;
    var doc = document.documentElement;
    doc.style.overflow = 'hidden';
    this.isOn = true;
  },

  off() {
    if (typeof document === 'undefined' || !this.isOn) return;
    var doc = document.documentElement;
    doc.style.overflow = '';
    this.isOn = false;
  }
}

export { noScroll };
