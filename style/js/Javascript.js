document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('#pers a');
  let lastClicked = { h1: null, p: null };

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const currentClicked = this.parentNode.querySelector('#pers h1');
      const currentClicked2 = this.parentNode.querySelector('#pers p');

      if (lastClicked.h1 && lastClicked.p) {
        lastClicked.h1.classList.remove('active1');
        lastClicked.h1.classList.add('style-text');
        lastClicked.p.classList.remove('active');
        lastClicked.p.classList.add('style-text');
      }

      currentClicked.classList.add('active1');
      currentClicked.classList.remove('style-text');
      currentClicked2.classList.add('active');
      currentClicked2.classList.remove('style-text');

      lastClicked.h1 = currentClicked;
      lastClicked.p = currentClicked2;
    });
  });

  // Автоматически кликаем по элементу .viper
  const viperBlock = document.querySelector('.viper');
  if (viperBlock) {
    viperBlock.click();
  }

});




const navigationList = document.querySelector('.navigation-list');

navigationList.addEventListener('click', (event) => {
  const previousActiveLink = navigationList.querySelector('.main-buttons');
  const clickedLink = event.target.closest('a');

  if (clickedLink && clickedLink !== previousActiveLink) {
    if (previousActiveLink) {
      previousActiveLink.classList.remove('main-buttons');
      previousActiveLink.classList.add('button-main');
    }
    clickedLink.classList.remove('button-main');
    clickedLink.classList.add('main-buttons');
  }
});


const fightList = document.querySelector('.fight-list');
const infoFight = document.getElementById('info-fight');

fightList.addEventListener('click', () => {
    if (infoFight.style.display === 'none' || infoFight.style.display === '') {
        infoFight.style.display = 'block';
    }
});

fightList.addEventListener('click', (event) => {
    const currentFight = event.target.closest('.fights');

    if (currentFight) {
        const activeFight = fightList.querySelector('.fights-new');

        if (activeFight && activeFight !== currentFight) {
            activeFight.classList.remove('fights-new');
            activeFight.classList.add('fights');
        }

        currentFight.classList.remove('fights');
        currentFight.classList.add('fights-new');
    }
});



const skins = document.querySelectorAll('.skins');
const liElements = document.querySelectorAll('#pers');
let currentSkinIndex = -1; 

liElements.forEach((li, index) => {
  li.addEventListener('click', () => {
    if (currentSkinIndex !== -1) {
      skins[currentSkinIndex].style.display = 'none';
    }

    skins[index].style.display = 'block';

    currentSkinIndex = index;
  });
});
