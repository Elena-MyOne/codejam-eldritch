import difficulties from "./data/difficulties";
import ancientsData from "./data/ancients";
import greenCardsData from './data/mythicCards/green';
import brownCardsData from './data/mythicCards/brown'
import blueCardsData from './data/mythicCards/blue';

const ancientContainer = document.querySelector('.ancient-container');
const azathoth = document.querySelector('.azathoth');
const cthulhu = document.querySelector('.cthulhu');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');

const shuffleButton = document.querySelector('.shuffle-button');
const game = document.querySelector('.game');

const difficultyContainer = document.querySelector('.difficulty-container');

let greenDot1, greenDot2, greenDot3;
let brownDot1, brownDot2, brownDot3;
let blueDot1, blueDot2, blueDot3;

let level;
let ancient;

function setCards(index) {
   greenDot1 = ancientsData[index].firstStage.greenCards;
   greenDot2 = ancientsData[index].secondStage.greenCards;
   greenDot3 = ancientsData[index].thirdStage.greenCards;

   brownDot1 = ancientsData[index].firstStage.brownCards;
   brownDot2 = ancientsData[index].secondStage.brownCards;
   brownDot3 = ancientsData[index].thirdStage.brownCards;

   blueDot1 = ancientsData[index].firstStage.blueCards;
   blueDot2 = ancientsData[index].secondStage.blueCards;
   blueDot3 = ancientsData[index].thirdStage.blueCards;
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
         ancient = 'azathoth';
      }
      if (target === cthulhu) {
         setCards(1);
         ancient = 'cthulhu';
      }
      if (target === iogSothoth) {
         setCards(2);
         ancient = 'iogSothoth';
      }
      if (target === shubNiggurath) {
         setCards(3);
         ancient = 'shubNiggurath';
      }
   }
})

//difficulty-container==============================================================

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
         level = difficulties[0].id
      }
      if (target.innerHTML === difficulties[1].name) {
         level = difficulties[1].id
      }
      if (target.innerHTML === difficulties[2].name) {
         level = difficulties[2].id
      }
      if (target.innerHTML === difficulties[3].name) {
         level = difficulties[3].id
      }
      if (target.innerHTML === difficulties[4].name) {
         level = difficulties[4].id
      }
      setCardsLevel()
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
                  <div class="dot green green1">${greenDot1}</div>
                  <div class="dot brown brown1">${brownDot1}</div>
                  <div class="dot blue blue1">${blueDot1}</div>
               </div>
         </div>
         <div class="stage-container">
            <div class="stage-text">Second stage</div>
               <div class="dots-container">
                  <div class="dot green green2">${greenDot2}</div>
                  <div class="dot brown brown2">${brownDot2}</div>
                  <div class="dot blue blue2">${blueDot2}</div>
               </div>
         </div>
         <div class="stage-container">
            <div class="stage-text">Third stage</div>
               <div class="dots-container">
                  <div class="dot green green3">${greenDot3}</div>
                  <div class="dot brown brown3">${brownDot3}</div>
                  <div class="dot blue blue3">${blueDot3}</div>
               </div>
         </div>
         <div class="deck"></div>
         <div class="last-card hidden"></div>
      </div>
   `
   showLastCard();
   showOrderCards();
   countStages();
}

function hideCurrentStage() {
   game.innerHTML = ''
}

//shuffle==============================================================
function getSetCards(set, difficulty) {
   return set.filter(item => {
            if (item.difficulty === difficulty) {
               return item.cardFace
            }
         }).map(item => item.id)
}

function shuffle(array) {
   return array.sort(() => Math.random() - 0.5);
}

const easyGreenCards = getSetCards(greenCardsData, 'easy');
const easyBrownCards = getSetCards(brownCardsData, 'easy');
const easyBlueCards = getSetCards(blueCardsData, 'easy');

const normalGreenCards = getSetCards(greenCardsData, 'normal');
const normalBrownCards = getSetCards(brownCardsData, 'normal');
const normalBlueCards = getSetCards(blueCardsData, 'normal');

const hardGreenCards = getSetCards(greenCardsData, 'hard');
const hardBrownCards = getSetCards(brownCardsData, 'hard');
const hardBlueCards = getSetCards(blueCardsData, 'hard');

const allGreenCards = [...easyGreenCards, ...normalGreenCards, ...hardGreenCards];
const allBrownCards = [...easyBrownCards, ...normalBrownCards, ...hardBrownCards];
const allBlueCards = [...easyBlueCards, ...normalBlueCards, ...hardBlueCards];

const noHardGreenCards = [...easyGreenCards, ...normalGreenCards];
const noHardBrownCards = [...easyBrownCards, ...normalBrownCards];
const noHardBlueCards = [...easyBlueCards, ...normalBlueCards];

const noEasyGreenCards = [ ...normalGreenCards, ...hardGreenCards];
const noEasyBrownCards = [ ...normalBrownCards, ...hardBrownCards];
const noEasyBlueCards = [ ...normalBlueCards, ...hardBlueCards];

let firstStage = [];
let secondStage = [];
let thirdStage = [];

let allCards = [];

function setCardsLevel() {
   if (level === 'simple') {
      orderCards(ancient, easyGreenCards, easyBrownCards, easyBlueCards, normalBrownCards, normalGreenCards);
   }
   if (level === 'easy') {
      orderCards(ancient, noHardGreenCards, noHardBrownCards, noHardBlueCards, noHardBrownCards, noHardGreenCards);
   }
   if (level === 'normal') {
      orderCards(ancient, allGreenCards, allBrownCards, allBlueCards, allBrownCards, allGreenCards);
   }
   if (level === 'hard') {
      orderCards(ancient, noEasyGreenCards, noEasyBrownCards, noEasyBlueCards, noEasyBrownCards, noEasyGreenCards);
   }
   if (level === 'expert') {
      orderCards(ancient, hardGreenCards, hardBrownCards, hardBlueCards, normalBrownCards, normalGreenCards);
   }
}

function orderCards(ancient, greenSet, brownSet, blueSet, brownSet2, greenSet2) {
   let greenRes = shuffle(greenSet);
   let greenResPlus = shuffle(greenSet2);
   let brawnRes = shuffle(brownSet);
   let brawnResPlus = shuffle(brownSet2);
   let blueRes = shuffle(blueSet);

   if (ancient === 'azathoth') {
      firstStage = [];
      secondStage = [];
      thirdStage = [];
      firstStage.push(['green', greenRes.pop()]);
      firstStage.push(['brown', brawnRes.pop()], ['brown', brawnRes.pop()]);
      firstStage.push(['blue', blueRes.pop()]);
      
      secondStage.push(['green', greenRes.pop()], ['green', greenRes.pop()]);
      secondStage.push(['brown', brawnRes.pop()], ['brown', brawnRes.pop()], ['brown', brawnRes.pop()]);
      secondStage.push(['blue', blueRes.pop()]);

      thirdStage.push(['green', greenRes.pop()], ['green', greenRes.pop()]);
      thirdStage.push(['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()]);
   }

   if (ancient === 'cthulhu') {
      firstStage = [];
      secondStage = [];
      thirdStage = [];
      firstStage.push(['brown', brawnRes.pop()], ['brown', brawnRes.pop()]);
      firstStage.push(['blue', blueRes.pop()], ['blue', blueRes.pop()]);

      secondStage.push(['green', greenRes.pop()]);
      secondStage.push(['brown', brawnRes.pop()], ['brown', brawnRes.pop()], ['brown', brawnRes.pop()]);

      thirdStage.push(['green', greenRes.pop()], ['green', greenRes.pop()], ['green', greenRes.pop()]);
      thirdStage.push(['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()]);
   }

   if (ancient === 'iogSothoth') {
      firstStage = [];
      secondStage = [];
      thirdStage = [];
      firstStage.push(['brown', brawnRes.pop()], ['brown', brawnRes.pop()]);
      firstStage.push(['blue', blueRes.pop()]);

      secondStage.push(['green', greenRes.pop()], ['green', greenRes.pop()]);
      secondStage.push(['brown', brawnRes.pop()], ['brown', brawnRes.pop()], ['brown', brawnRes.pop()]);
      secondStage.push(['blue', blueRes.pop()]);

      thirdStage.push(['green', greenRes.pop()], ['green', greenRes.pop()], ['green', greenRes.pop()]);
      thirdStage.push(['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()]);
   }

   if (ancient === 'shubNiggurath') {
      firstStage = [];
      secondStage = [];
      thirdStage = [];
      firstStage.push(['green', greenRes.pop()]);
      firstStage.push(['brown', brawnRes.pop()], ['brown', brawnRes.pop()]);
      firstStage.push(['blue', blueRes.pop()]);

      secondStage.push(['green', greenRes.pop()], ['green', greenRes.pop()], ['green', greenRes.pop()]);
      secondStage.push(['brown', brawnRes.pop()], ['brown', brawnRes.pop()]);
      secondStage.push(['blue', blueRes.pop()]);

      thirdStage.push(['green', greenRes.pop()], ['green',  greenResPlus.pop()]);
      thirdStage.push(['brown', brawnRes.pop()], ['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()], ['brown', brawnResPlus.pop()]);
   }

   shuffle(firstStage);
   shuffle(secondStage);
   shuffle(thirdStage); 
}

function showLastCard() {
   const deck = document.querySelector('.deck');
   const lastCard = document.querySelector('.last-card');

   deck.addEventListener('click', () => {
      lastCard.classList.remove('hidden');
   }, {'once': true})
}

function showOrderCards() {
   const deck = document.querySelector('.deck');
   const lastCard = document.querySelector('.last-card');

   allCards = [...firstStage, ...secondStage, ...thirdStage];

   let i = 0;

   deck.addEventListener('click', () => {
      if(i < allCards.length) {
         lastCard.style.backgroundImage = `url(assets/MythicCards/${allCards[i][0]}/${allCards[i][1]}.png)`;
      }

      i = i + 1;
   })
}

function countStages() {

   const deck = document.querySelector('.deck');
   
   let i = 0;

   deck.addEventListener('click', () => {

      runThroughStage(allCards, i)

      i = i + 1
   })

}

function runThroughStage(stage, i) {
   const green1 = document.querySelector('.green1');
   const green2 = document.querySelector('.green2');
   const green3 = document.querySelector('.green3');
   const brown1 = document.querySelector('.brown1');
   const brown2 = document.querySelector('.brown2');
   const brown3 = document.querySelector('.brown3');
   const blue1 = document.querySelector('.blue1');
   const blue2 = document.querySelector('.blue2');
   const blue3 = document.querySelector('.blue3');

   if(i < firstStage.length) {
      if (stage[i][0] === 'green'){
         let value = Number(green1.innerHTML) - 1;
         green1.innerHTML = value
      }
   
      if (stage[i][0] === 'brown'){
         let value = Number(brown1.innerHTML) - 1;
         brown1.innerHTML = value
      }
   
      if (stage[i][0] === 'blue'){
         let value = Number(blue1.innerHTML) - 1;
         blue1.innerHTML = value
      }
   }

   if(i >= firstStage.length &&  i < (firstStage.length + secondStage.length)) {
      if (stage[i][0] === 'green'){
         let value = Number(green2.innerHTML) - 1;
         green2.innerHTML = value
      }
   
      if (stage[i][0] === 'brown'){
         let value = Number(brown2.innerHTML) - 1;
         brown2.innerHTML = value
      }
   
      if (stage[i][0] === 'blue'){
         let value = Number(blue2.innerHTML) - 1;
         blue2.innerHTML = value
      }
   }

   if(i >= (firstStage.length + secondStage.length) &&  i < (firstStage.length + secondStage.length + thirdStage.length)) {
      if (stage[i][0] === 'green'){
         let value = Number(green3.innerHTML) - 1;
         green3.innerHTML = value
      }
   
      if (stage[i][0] === 'brown'){
         let value = Number(brown3.innerHTML) - 1;
         brown3.innerHTML = value
      }
   
      if (stage[i][0] === 'blue'){
         let value = Number(blue3.innerHTML) - 1;
         blue3.innerHTML = value
      }
   }

}