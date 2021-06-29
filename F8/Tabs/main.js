var $ = document.querySelector.bind(document);

var tabs = document.querySelectorAll('.tab-item');
var panes = document.querySelectorAll('.tab-pane');
var tabActive = document.querySelector('.tab-item.active');
var line = document.querySelector('.line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function() {
        document.querySelector('.tab-item.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.tab-pane.active').classList.remove('active');
        pane.classList.add('active');

        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';
    }
});