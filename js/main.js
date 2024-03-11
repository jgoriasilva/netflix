const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorders() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function hideTabs() {
  tabContentItems.forEach(item => item.classList.remove('show'));
  // tabContentItems.forEach(item => console.log(item.id));
}

function showTab(e){
  removeBorders()
  this.classList.add('tab-border');

  hideTabs();
  console.log(`${this.id}-content`)
  document.querySelector(`#${this.id}-content`).classList.add('show');
}

tabItems.forEach(item => item.addEventListener('click', showTab));
