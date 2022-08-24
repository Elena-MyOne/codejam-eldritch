import difficulties from "./data/difficulties";
import ancientsData from "./data/ancients"

const ancientContainer = document.querySelector('.ancient-container');
const azathoth = document.querySelector('.azathoth');
const cthulhu = document.querySelector('.cthulhu');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');

const deckContainer = document.querySelector('.deck-container');
const shuffleButton = document.querySelector('.shuffle-button');
const game = document.querySelector('.game');

let green1, green2, green3;
let brown1, brown2, brown3;
let blue1, blue2, blue3;

function setCards(index) {
   green1 = ancientsData[index].firstStage.greenCards;
   green2 = ancientsData[index].secondStage.greenCards;
   green3 = ancientsData[index].thirdStage.greenCards;

   brown1 = ancientsData[index].firstStage.brownCards;
   brown2 = ancientsData[index].secondStage.brownCards;
   brown3 = ancientsData[index].thirdStage.brownCards;

   blue1 = ancientsData[index].firstStage.blueCards;
   blue2 = ancientsData[index].secondStage.blueCards;
   blue3 = ancientsData[index].thirdStage.blueCards;
}

function toggleActiveAncient(elem) {
   const ancientCards = document.querySelectorAll('.ancient-card');
   ancientCards.forEach((item) => {
      item.classList.remove('active');
   })
   elem.classList.add('active')
}

ancientContainer.addEventListener('click', (e) => {
   let target = e.target;
   if (target.closest('.ancient-card')) {
      if (game.children) {
         hideCurrentStage();
      } 
      showDifficulties();
      toggleActiveAncient(target)
      if (target === azathoth) {
         setCards(0);
         console.log('azathoth')
      }
      if (target === cthulhu) {
         setCards(1);
         console.log('cthulhu')
      }
      if (target === iogSothoth) {
         setCards(2)
         console.log('iogSothoth')
      }
      if (target === shubNiggurath) {
         setCards(3)
         console.log('shubNiggurath')
      }
   }
})

//difficulty-container==============================================================
const difficultyContainer = document.querySelector('.difficulty-container');

function showDifficulties() {
   return difficultyContainer.innerHTML = 
      `<div class="difficulty simple">${difficulties[0].name}</div>
      <div class="difficulty easy">${difficulties[1].name}</div>
      <div class="difficulty normal">${difficulties[2].name}</div>
      <div class="difficulty hard">${difficulties[3].name}</div>
      <div class="difficulty expert">${difficulties[4].name}</div>`
}

function toggleActiveDifficulty(elem) {
   const difficultyColl = document.querySelectorAll('.difficulty');
   difficultyColl.forEach((item) => {
      item.classList.remove('active');
   })
   elem.classList.add('active')
}

difficultyContainer.addEventListener('click', (e) => {
   let target = e.target;
   if (target.closest('.difficulty')) {
      if (game.children) {
         hideCurrentStage();
      } 
      toggleActiveDifficulty(target);
      showShuffleBtn();
      if (target.innerHTML === difficulties[0].name) {
         console.log(difficulties[0].name)
      }
      if (target.innerHTML === difficulties[1].name) {
         console.log(difficulties[1].name)
      }
      if (target.innerHTML === difficulties[2].name) {
         console.log(difficulties[2].name)
      }
      if (target.innerHTML === difficulties[3].name) {
         console.log(difficulties[3].name)
      }
      if (target.innerHTML === difficulties[4].name) {
         console.log(difficulties[4].name)
      }
   }
})

//deck-container==============================================================

function showShuffleBtn() {
   shuffleButton.classList.remove('hidden')
}

function hideShuffleBtn() {
   shuffleButton.classList.add('hidden')
}

shuffleButton.addEventListener('click', showCurrentStage);

function showCurrentStage() {
   hideShuffleBtn();
   game.innerHTML = `
      <div class="current-state">
         <div class="stage-container">
            <div class="stage-text">First stage</div>
               <div class="dots-container">
                  <div class="dot green">${green1}</div>
                  <div class="dot brown">${brown1}</div>
                  <div class="dot blue">${blue1}</div>
               </div>
         </div>
         <div class="stage-container">
            <div class="stage-text">Second stage</div>
               <div class="dots-container">
                  <div class="dot green">${green2}</div>
                  <div class="dot brown">${brown2}</div>
                  <div class="dot blue">${blue2}</div>
               </div>
         </div>
         <div class="stage-container">
            <div class="stage-text">Third stage</div>
               <div class="dots-container">
                  <div class="dot green">${green3}</div>
                  <div class="dot brown">${brown3}</div>
                  <div class="dot blue">${blue3}</div>
               </div>
         </div>
         <div class="deck"></div>
         <div class="last-card"></div>
      </div>
   `
}

function hideCurrentStage() {
   game.innerHTML = ''
}

//   console.log('click')
//end==============================================================

