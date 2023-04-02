const main = document.getElementById("main");
const creator = document.getElementById("creator");
const mainMenuButton = document.getElementById("mainMenuButton");
const mainLogo = document.getElementById("mainLogo");
const picking = document.getElementById("picking");
const pickingQuo = document.getElementById("pickQuo");
const charmander = document.getElementById("char");
const pikachu = document.getElementById("piko");
const bulbasaur = document.getElementById("bulb");
const squirtle = document.getElementById("squir");
const hpBar = document.getElementById("hpBar");
const enemyHpBar = document.getElementById("enemyHpBar");
const enemyHp = document.getElementById("enemyHp");
const hp = document.getElementById("hp");
const attackMenus = document.getElementById("attackMenus");

const attackBut = document.getElementById("attackMenu1");
const attackBut1 = document.getElementById("attackMenu2");
const attackBut2 = document.getElementById("attackMenu3");
const attackBut3 = document.getElementById("attackMenu4");

const endScreen = document.getElementById("End");
const endScreen2 = document.getElementById("lose");
const attackMenu1 = document.getElementById("attackMenu1Text");
const attackMenu2 = document.getElementById("attackMenu2Text");
const attackMenu3 = document.getElementById("attackMenu3Text");
const attackMenu4 = document.getElementById("attackMenu4Text");

const attackMenu12 = document.getElementById("attackMenu12Text");
const attackMenu123 = document.getElementById("attackMenu123Text");

const attackMenu22 = document.getElementById("attackMenu22Text");
const attackMenu223 = document.getElementById("attackMenu223Text");

const attackMenu32 = document.getElementById("attackMenu32Text");
const attackMenu323 = document.getElementById("attackMenu323Text");

const attackMenu42 = document.getElementById("attackMenu42Text");
const attackMenu423 = document.getElementById("attackMenu423Text");

const callName = document.getElementById("callName");
const callAttack = document.getElementById("callAttack");

let prdelmonFile;
let prdelmonData;
window.onload = async () => {
  document.body.style.backgroundImage = "url(./res/img/background.jpg)";
  try {
    prdelmonFile = await fetch("./res/data/prdelmons.json");
    prdelmonData = await prdelmonFile.json();
  } catch (err) {
    console.log(err);
  }
};

mainMenuButton.onclick = () => {
  document.body.style.backgroundImage = "url(./res/img/ba.jpg)";
  picking.style.display = "flex";
  mainMenuButton.style.display = "none";
  pickingQuo.style.display = "flex";
};

let enemy;
let hpCounter;
let attackOne;
let attackTwo;
let attackThree;
let attackFour;
let useOne;
let useTwo;
let useThree;
let useFour;
let hpCounter2;
let enemyAttackOne;
let enemyAttackThree;
let enemyAttackTwo;
let enemyAttackFour;

const startFight = (selected) => {
  document.body.style.backgroundImage = "url(./res/img/fightBack.png)";
  picking.style.display = "none";
  pickingQuo.style.display = "none";
  creator.style.display = "none";
  mainLogo.style.display = "none";
  hp.style.display = "flex";
  enemyHp.style.display = "flex";
  hpBar.style.display = "flex";
  enemyHpBar.style.display = "flex";
  enemy = parseInt(Math.random() * prdelmonData.enemyPrdelmons.length, 10);
  const wrapper = document.createElement("div");
  document.body.appendChild(wrapper);
  wrapper.id = "wrapper";
  const prdelmon = document.createElement("img");
  wrapper.appendChild(prdelmon);
  const enemyPrdelmon = document.createElement("img");
  wrapper.appendChild(enemyPrdelmon);

  attackMenus.style.display = "flex";

  hpCounter = prdelmonData.enemyPrdelmons[enemy].hp;
  hpCounter2 = prdelmonData.prdelmons[selected].hp;
  attackOne = prdelmonData.prdelmons[selected].attacks[0].dmg;
  attackTwo = prdelmonData.prdelmons[selected].attacks[1].dmg;
  attackThree = prdelmonData.prdelmons[selected].attacks[2].dmg;
  attackFour = prdelmonData.prdelmons[selected].attacks[3].dmg;
  useOne = prdelmonData.prdelmons[selected].attacks[0].use;
  useTwo = prdelmonData.prdelmons[selected].attacks[1].use;
  useThree = prdelmonData.prdelmons[selected].attacks[2].use;
  useFour = prdelmonData.prdelmons[selected].attacks[3].use;

  hp.innerHTML = prdelmonData.enemyPrdelmons[enemy].hp;
  callName.innerHTML = prdelmonData.enemyPrdelmons[enemy].name;

  enemyHp.innerHTML = prdelmonData.prdelmons[selected].hp;
  attackMenu1.innerHTML = prdelmonData.prdelmons[selected].attacks[0].name;
  attackMenu12.innerHTML = prdelmonData.prdelmons[selected].attacks[0].dmg;
  attackMenu123.innerHTML = prdelmonData.prdelmons[selected].attacks[0].use;

  attackMenu2.innerHTML = prdelmonData.prdelmons[selected].attacks[1].name;
  attackMenu22.innerHTML = prdelmonData.prdelmons[selected].attacks[1].dmg;
  attackMenu223.innerHTML = prdelmonData.prdelmons[selected].attacks[1].use;

  attackMenu3.innerHTML = prdelmonData.prdelmons[selected].attacks[2].name;
  attackMenu32.innerHTML = prdelmonData.prdelmons[selected].attacks[2].dmg;
  attackMenu323.innerHTML = prdelmonData.prdelmons[selected].attacks[2].use;

  attackMenu4.innerHTML = prdelmonData.prdelmons[selected].attacks[3].name;
  attackMenu42.innerHTML = prdelmonData.prdelmons[selected].attacks[3].dmg;
  attackMenu423.innerHTML = prdelmonData.prdelmons[selected].attacks[3].use;

  enemyPrdelmon.id = enemy == 8 ? "legendary" : "enemyPrdelmon";
  enemyPrdelmon.src = prdelmonData.enemyPrdelmons[enemy].src;
  prdelmon.src = prdelmonData.prdelmons[selected].src;
  prdelmon.style.cursor = "auto";
  attackBut.style.cursor = "pointer";
  attackBut1.style.cursor = "pointer";
  attackBut2.style.cursor = "pointer";
  attackBut3.style.cursor = "pointer";

  switch (selected) {
    case 0:
      prdelmon.id = "char";

      break;
    case 1:
      prdelmon.id = "piko";

      break;
    case 2:
      prdelmon.id = "squir";

      break;
    case 3:
      prdelmon.id = "bulb";

      break;
  }
};

charmander.onclick = () => startFight(0);
pikachu.onclick = () => startFight(1);
squirtle.onclick = () => startFight(2);
bulbasaur.onclick = () => startFight(3);
let turn = 1;

attackBut.onclick = () => {
  if (useOne > 0) {
    hpCounter -= attackOne;
    hp.innerHTML = hpCounter;
    useOne--;
    let enemyAttack = Math.floor(Math.random() * 4);
    enemyAttackOne =
      prdelmonData.enemyPrdelmons[enemy].attacks[enemyAttack].dmg;
    hpCounter2 -= enemyAttackOne;
    enemyHp.innerHTML = hpCounter2;
    callAttack.innerHTML = prdelmonData.enemyPrdelmons[enemy].attacks[enemyAttack].name;

    if (hpCounter < 0) {
      endScreen.style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, 5000);
    } else if (hpCounter2 < 0)
    {
      endScreen2.style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
    else
    {
    }
  } else;
  {
  }
};

attackBut1.onclick = () => {
  if (useTwo > 0) {
    hpCounter -= attackTwo;
    hp.innerHTML = hpCounter;
    useTwo--;
    let enemyAttack = Math.floor(Math.random() * 4);
    enemyAttackOne =
      prdelmonData.enemyPrdelmons[enemy].attacks[enemyAttack].dmg;
    hpCounter2 -= enemyAttackOne;
    enemyHp.innerHTML = hpCounter2;
    callAttack.innerHTML = prdelmonData.enemyPrdelmons[enemy].attacks[enemyAttack].name;
    if (hpCounter < 0) {
      endScreen.style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, 5000);
    } else if (hpCounter2 < 0)
    {
      endScreen2.style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
    else
    {
    }
  } else;
  {
  }
};

attackBut2.onclick = () => {
  if (useThree > 0) {
    hpCounter -= attackThree;
    hp.innerHTML = hpCounter;
    useThree--;
    let enemyAttack = Math.floor(Math.random() * 4);
    enemyAttackOne =
      prdelmonData.enemyPrdelmons[enemy].attacks[enemyAttack].dmg;
    hpCounter2 -= enemyAttackOne;
    enemyHp.innerHTML = hpCounter2;
    callAttack.innerHTML = prdelmonData.enemyPrdelmons[enemy].attacks[enemyAttack].name;
    if (hpCounter < 0) {
      endScreen.style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, 5000);
    } else if (hpCounter2 < 0)
    {
      endScreen2.style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
    else
    {
    }
  } else;
  {
  }
};

attackBut3.onclick = () => {
  if (useFour > 0) {
    hpCounter -= attackFour;
    hp.innerHTML = hpCounter;
    useFour--;
    let enemyAttack = Math.floor(Math.random() * 4);
    enemyAttackOne =
      prdelmonData.enemyPrdelmons[enemy].attacks[enemyAttack].dmg;
    hpCounter2 -= enemyAttackOne;
    enemyHp.innerHTML = hpCounter2;
    callAttack.innerHTML = prdelmonData.enemyPrdelmons[enemy].attacks[enemyAttack].name;
    if (hpCounter < 0) {
      endScreen.style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, 5000);
    } else if (hpCounter2 < 0)
    {
      endScreen2.style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, 5000)
    }
    else
    {
    }
  } else;
  {
  }
};
