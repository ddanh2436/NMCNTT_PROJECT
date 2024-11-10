// Product Tabs
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[content]');

tabs.forEach((tab) =>{
    tab.addEventListener('click',() =>{
        const target=document.querySelector(tab.dataset.target);
        console.log(target);
    })
})