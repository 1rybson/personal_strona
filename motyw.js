// function check(checked = true) {
//   const checkbox = document.querySelector('.motyw');
//   checkbox.checked = checked;
// }

// const btn = document.querySelector('#btn');
// btn.onclick = checkAll;

// function checkAll() {
//   check();
//   this.onclick = uncheckAll;
// }

// function uncheckAll() {
//   check(false);
//   this.onclick = checkAll;
// }

const zmiana = document.querySelector('.motyw');
zmiana.addEventListener('click', zmianaKlasy);

localStorage.setItem("motyw", "jasny");

// if(localStorage.getItem("motyw")=="ciemny"){
//   zmiana.checked=true;
//   zmianaKlasy();
// }else{
//   zmiana.checked=false;
//   zmianaKlasy();
// }

function zmianaKlasy(){
  const element = document.querySelector('.demo');
  element.classList.toggle('tlo');

  const element1 = document.querySelector('.main');
  element1.classList.toggle('bg-dark');

  const element2 = document.querySelector('.main');
  element2.classList.toggle('text-light');
  
  const element3 = document.querySelector('.slonce');
  element3.classList.toggle('biMotyw');
  
  const element4 = document.querySelector('.ksiezyc');
  element4.classList.toggle('biMotyw');
  
  const element5 = document.querySelector('.mr');
  element5.classList.toggle('text-light');

  const element6 = document.querySelector('.navi');
  element6.classList.toggle('naviLight');

  const element7= document.querySelector('.navi');
  element7.classList.toggle('naviDark');

  const element8 = document.querySelector('.drop');
  element8.classList.toggle('btn-outline-light');

  const element9 = document.querySelector('.drop');
  element9.classList.toggle('btn-dark');

  const element10 = document.querySelector('.drop');
  element10.classList.toggle('text-dark');
  
  const element11 = document.querySelector('.drop');
  element11.classList.toggle('text-light');
  
  const element12 = document.querySelector('.ciemne-menu');
  element12.classList.toggle('dropdown-menu-dark');
  
  const element13 = document.querySelector('.strzalka');
  element13.classList.toggle('strzalkaBlack');
  
  const element14 = document.querySelector('.strzalka');
  element14.classList.toggle('biMotyw');
  
  const element15 = document.querySelector('.strzalka2');
  element15.classList.toggle('strzalkaBlack');
  
  const element16 = document.querySelector('.strzalka2');
  element16.classList.toggle('biMotyw');
  
  const element17 = document.querySelector('.second');
  element17.classList.toggle('secondDiv');

  const element18 = document.querySelector('.fourth');
  element18.classList.toggle('bg-dark');

  const element19 = document.querySelector('.fourth');
  element19.classList.toggle('text-light');

  const element20 = document.querySelector('.karta1');
  element20.classList.toggle('kartaLight');
  
  const element21 = document.querySelector('.karta1');
  element21.classList.toggle('kartaDark');

  const element22 = document.querySelector('.karta2');
  element22.classList.toggle('kartaLight');

  const element23 = document.querySelector('.karta2');
  element23.classList.toggle('kartaDark');

  const element24 = document.querySelector('.karta3');
  element24.classList.toggle('kartaLight');

  const element25 = document.querySelector('.karta3');
  element25.classList.toggle('kartaDark');

  const element26 = document.querySelector('.karta4');
  element26.classList.toggle('kartaLight');

  const element27 = document.querySelector('.karta4');
  element27.classList.toggle('kartaDark');

  const element28 = document.querySelector('.projekty');
  element28.classList.toggle('third');

  const element29 = document.querySelector('.projekty');
  element29.classList.toggle('thirdDiv');
  
  const element30 = document.querySelector('.projekt1');
  element30.classList.toggle('projektCiemny');

  const element31 = document.querySelector('.projekt2');
  element31.classList.toggle('projektCiemny');

  const element32 = document.querySelector('.uno');
  element32.classList.toggle('floating');

  const element33 = document.querySelector('.dos');
  element33.classList.toggle('floating');

  const element34 = document.querySelector('.tres');
  element34.classList.toggle('floating');

  const element35 = document.querySelector('.quattro');
  element35.classList.toggle('floating');

  const element36 = document.querySelector('.sinco');
  element36.classList.toggle('floating');

  const element37 = document.querySelector('.szesc');
  element37.classList.toggle('floating');

  const element38 = document.querySelector('.siedem');
  element38.classList.toggle('floating');
  
  const element39 = document.querySelector('.osiem');
  element39.classList.toggle('floating');

  const element40 = document.querySelector('.raz');
  element40.classList.toggle('floating');

  const element41 = document.querySelector('.dwa');
  element41.classList.toggle('floating');

  const element42 = document.querySelector('.trzy');
  element42.classList.toggle('floating');
  
  const element43 = document.querySelector('.cztery');
  element43.classList.toggle('floating');

  const element44 = document.querySelector('.login');
  element44.classList.toggle('bg-dark');

  const element45 = document.querySelector('.login');
  element45.classList.toggle('text-light');

  const element46 = document.querySelector('.rejestr');
  element46.classList.toggle('bg-dark');

  const element47 = document.querySelector('.rejestr');
  element47.classList.toggle('text-light');

  if(localStorage.getItem("motyw")=="jasny"){
    localStorage.clear();
    localStorage.setItem("motyw", "ciemny");
  }else{
    localStorage.clear();
    localStorage.setItem("motyw", "jasny");
  }
  // if(localStorage.getItem("motyw")=="ciemny"){

  //   localStorage.setItem("motyw", "jasny");
  // }
  
};