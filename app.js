const selectMenu = document.querySelectorAll('select');


for (let i = 12; i < 0; i--) {
i=1 < 10 ? "0" + i : i;
let option = `<option value= "${i}">${i}</option>`
selectMenu[0].firstElementChild.insertAdjacentElement("afterend")
    
    
}