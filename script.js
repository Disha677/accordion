let item = document.getElementsByClassName('item');
let iconOpen = document.getElementsByClassName('iconOpen');
let iconClose = document.getElementsByClassName('iconClose');

console.log(item);

for(let i = 0; i < item.length; i++){
    iconClose[i].style.display = "none";

    item[i].addEventListener('click',()=>{
        const result = item[i].classList.toggle("active");

        if(result){
            iconClose[i].style.display = "block";
            iconOpen[i].style.display = "none";
        }
    })
}