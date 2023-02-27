const zmiana = document.querySelector('.motyw');
zmiana.addEventListener('click', zmianaKlasy);


function zmianaKlasy(){
  const element = document.querySelector('.demo');
  element.classList.toggle('tlo');

  // const element5 = document.querySelector('.main');
  // element5.classList.toggle('gradient');

  const element7 = document.querySelector('.main');
  element7.classList.toggle('bg-dark');

  const element8 = document.querySelector('.main');
  element8.classList.toggle('text-light');

  const element15 = document.querySelector('.slonce');
  element15.classList.toggle('biMotyw');

  const element16 = document.querySelector('.ksiezyc');
  element16.classList.toggle('biMotyw');

  if(document.querySelector('.opis')==null){
    console.log(".opis nie istnieje");
  }else{
    const element17 = document.querySelector('.opis');
    element17.classList.toggle('darkP');
  }

  const element2 = document.querySelector('.drop');
  element2.classList.toggle('btn-outline-light');

  const element3 = document.querySelector('.drop');
  element3.classList.toggle('btn-dark');

  const element6 = document.querySelector('.drop');
  element6.classList.toggle('text-dark');

  const element9 = document.querySelector('.drop');
  element9.classList.toggle('text-light');

  const element4 = document.querySelector('.ciemne-menu');
  element4.classList.toggle('dropdown-menu-dark');

  const element10 = document.querySelector('.strzalka');
  element10.classList.toggle('strzalkaBlack');

  const element11 = document.querySelector('.strzalka');
  element11.classList.toggle('biMotyw');

  const element28 = document.querySelector('.strzalka2');
  element28.classList.toggle('strzalkaBlack');

  const element27 = document.querySelector('.strzalka2');
  element27.classList.toggle('biMotyw');

  const element12 = document.querySelector('.second');
  element12.classList.toggle('secondDiv');

  const element13 = document.querySelector('.karta1');
  element13.classList.toggle('kartaLight');

  const element14 = document.querySelector('.karta1');
  element14.classList.toggle('kartaDark');

  const element17 = document.querySelector('.karta2');
  element17.classList.toggle('kartaLight');

  const element18 = document.querySelector('.karta2');
  element18.classList.toggle('kartaDark');

  const element19 = document.querySelector('.karta3');
  element19.classList.toggle('kartaLight');

  const element20 = document.querySelector('.karta3');
  element20.classList.toggle('kartaDark');

  const element21 = document.querySelector('.karta4');
  element21.classList.toggle('kartaLight');

  const element22 = document.querySelector('.karta4');
  element22.classList.toggle('kartaDark');

  const element23 = document.querySelector('.mr');
  element23.classList.toggle('text-light');

  const element24 = document.querySelector('.navi');
  element24.classList.toggle('naviLight');

  const element25 = document.querySelector('.navi');
  element25.classList.toggle('naviDark');

  const element35 = document.querySelector('.projekty');
  element35.classList.toggle('third');

  const element26 = document.querySelector('.projekty');
  element26.classList.toggle('thirdDiv');

  const element29 = document.querySelector('.projekt1');
  element29.classList.toggle('projektCiemny');

  const element36 = document.querySelector('.uno');
  element36.classList.toggle('floating')

  const element30 = document.querySelector('.dos');
  element30.classList.toggle('floating')

  if(document.querySelector('.tres')==null){
    console.log(".tres nie istnieje");
  }else{
    const element31 = document.querySelector('.tres');
    element31.classList.toggle('floating')
  }

  if(document.querySelector('.quattro')==null){
    console.log(".quattro nie istnieje");
  }else{
    const element32 = document.querySelector('.quattro');
    element32.classList.toggle('floating') 
  }

  const element33 = document.querySelector('.login');
  element33.classList.toggle('bg-dark');

  const element34 = document.querySelector('.login');
  element34.classList.toggle('text-light');



} ;