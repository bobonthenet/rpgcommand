const assert = require('assert');
const { prompt, Separator } = require('inquirer');
const Table = require('tec-table');
const { roll } = require('./helper');
const { skillSummary } = require('./tables');
const { feats } = require('./feats');

var character = {};

const racePrompt = {
  type: 'list',
  name: 'raceChoice',
  message: 'Choose your race',
  choices: [
    {
      name: 'Dwarf +2 Con, +2 Wis, –2 Cha',
      value: 'Dwarf'
    },
    {
      name: 'Elf +2 Dex, +2 Int, –2 Con',
      value: 'Elf'
    },
    {
      name: 'Gnome +2 Con, +2 Cha, –2 Str',
      value: 'Gnome'
    },
    {
      name: 'Half Elf +2 to one ability score (your choice)',
      value: 'Half Elf'
    },
    {
      name: 'Halfling +2 Dex, +2 Cha, –2 Str',
      value: 'Halfling'
    },
    {
      name: 'Half Orc +2 to one ability score (your choice)',
      value: 'Half Orc'
    },
    {
      name: 'Human +2 to one ability score (your choice)',
      value: 'Human'
    }//,
    //'Random'
  ]
}

const abilitiesPrompt = {
  type: 'list',
  name: 'abilityChoice',
  message: 'Are you happy with these ability scores?',
  choices: ['Keep these scores', 'reroll']
}

const raceAbilityBonusPrompt = {
  type: 'list',
  name: 'raceAbilityBonusChoice',
  message: 'Which ability score would you like to apply your bonus to?',
  choices: ['str', 'dex', 'con', 'int', 'wis', 'cha']
}

const classPrompt = {
  type: 'list',
  name: 'classChoice',
  message: 'Choose your character class.',
  choices: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"]
}

function featChoices() {
  let preVal = '';
  let choiceArray = [];
  feats.sort(function(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  });

  feats.forEach(function(feat){
    var metPre = true;
    if(feat.prerequisites.length === 0) {
      choiceArray.push({ name: `${feat.name} - ${feat.benefit}`.substring(0,80), value: feat.name });
    }
    else
    {
      feat.prerequisites.forEach(function(prereq){
        if(prereq.substring(0,3) === 'Str') {
          if(parseInt(prereq.substring(4)) > character.str) {
            metPre = false;
          }
        }
        if(prereq.substring(0,3) === 'Dex') {
          if(parseInt(prereq.substring(4)) > character.dex) {
            metPre = false;
          }
        }
        if(prereq.substring(0,3) === 'Con') {
          if(parseInt(prereq.substring(4)) > character.con) {
            metPre = false;
          }
        }
        if(prereq.substring(0,3) === 'Int') {
          if(parseInt(prereq.substring(4)) > character.int) {
            metPre = false;
          }
        }
        if(prereq.substring(0,3) === 'Wis') {
          if(parseInt(prereq.substring(4)) > character.wis) {
            metPre = false;
          }
        }
        if(prereq.substring(0,3) === 'Cha') {
          if(parseInt(prereq.substring(4)) > character.cha) {
            metPre = false;
          }
        }
      });
      if(feat.prerequisitesFeats.length > 0) { //TODO: This is way too simplified.
        metPre = false;
      }
      if(metPre === true) {
        choiceArray.push({ name: `${feat.name} - ${feat.benefit}`.substring(0,80), value: feat.name });
      }
    }


  });
  return choiceArray;
}

function startCreate() {
  console.info('First we roll for your abilities using the "heroic" method.')
  rollForAbilities();
}

function showAbilities() {
  console.info("Here are your ability scores.")
    const header = [
      {
        value: "Ability"
      },
      {
        value: 'Score'
      }
    ]

    const rows = [
      ["str", character.str],
      ["dex", character.dex],
      ["con", character.con],
      ["int", character.int],
      ["wis", character.wis],
      ["cha", character.cha]
    ]

    const t1 = Table(header,rows,{
        borderStyle : 1,
        paddingBottom : 0,
        headerAlignment : "center",
        alignment : "center",
        color : "white"
    });

    const str1 = t1.render();

    console.info(str1);
}

function rollForAbilities() {
  character.str = roll(2,6) + 6;
  character.dex = roll(2,6) + 6;
  character.con = roll(2,6) + 6;
  character.int = roll(2,6) + 6;
  character.wis = roll(2,6) + 6;
  character.cha = roll(2,6) + 6;

  showAbilities();

  prompt(abilitiesPrompt).then(answers => {
    if(answers.abilityChoice === 'reroll') {
      rollForAbilities();
    } else {
      chooseRace();
    }
  })
}

function chooseRaceAbilityBonus() {
  prompt(raceAbilityBonusPrompt).then(answers => {
    switch(answers.raceAbilityBonusChoice) {
      case 'str':
        character.str += 2;
        break;
      case 'dex':
        character.dex += 2;
        break;
      case 'con':
        character.con += 2;
        break;
      case 'int':
        character.int += 2;
        break;
      case 'wis':
        character.wis += 2;
        break;
      case 'cha':
        character.cha += 2;
        break;
    }
  })
}

function chooseRace() {
  console.info("Next you choose your race.")
  prompt(racePrompt).then(answers => {
    switch(answers.raceChoice) {
      case 'Dwarf':
        character.race = 'Dwarf';
        character.con += 2;
        character.wis += 2;
        character.cha -= 2;
        break;
      case 'Elf':
        character.race = 'Elf';
        character.dex += 2;
        character.int += 2;
        character.con -= 2;
        break;
      case 'Gnome':
        character.race = 'Gnome';
        character.con += 2;
        character.cha += 2;
        character.str -= 2;
        break;
      case 'Half Elf':
        character.race = 'Half Elf';
        chooseRaceAbilityBonus();
        break;
      case 'Halfling':
        character.race = 'Halfling'
        character.dex += 2;
        character.cha += 2;
        character.str -= 2;
        break;
      case 'Half Orc':
        character.race = 'Half Orc';
        chooseRaceAbilityBonus();
        break;
      case 'Human':
        character.race = 'Human';
        chooseRaceAbilityBonus();
        break;
    }

    console.info(`OK ${character.race},`);
    showAbilities();
    chooseClass();
  })
}

function chooseClass() {
  prompt(classPrompt).then(answers => {
    character.class = answers.classChoice;
    console.info(`Great! You are now a[n] ${character.race} ${character.class}.`)
    allocateSkillRanks();
  });
}

function numSkillRanks() {
  switch(character.class) {
    case 'Alchemist':
      ranksPerLevel = 4;
      break;
    case 'Barbarian':
      ranksPerLevel = 4;
      break;
    case 'Bard':
      ranksPerLevel = 6;
      break;
    case 'Cavalier':
      ranksPerLevel = 4;
      break;
    case 'Cleric':
      ranksPerLevel = 2;
      break;
    case 'Druid':
      ranksPerLevel = 4;
      break;
    case 'Fighter':
      ranksPerLevel = 2;
      break;
    case 'Gunslinger':
      ranksPerLevel = 4;
      break;
    case 'Inquisitor':
      ranksPerLevel = 6;
      break;
    case 'Magus':
      ranksPerLevel = 2;
      break;
    case 'Monk':
      ranksPerLevel = 4;
      break;
    case 'Ninja':
      ranksPerLevel = 8;
      break;
    case 'Oracle':
      ranksPerLevel = 4;
      break;
    case 'Paladin':
      ranksPerLevel = 2;
      break;
    case 'Ranger':
      ranksPerLevel = 6;
      break;
    case 'Rogue':
      ranksPerLevel = 8;
      break;
    case 'Samurai':
      ranksPerLevel = 4;
      break;
    case 'Sorcerer':
      ranksPerLevel = 2;
      break;
    case 'Summoner':
      ranksPerLevel = 2;
      break;
    case 'Witch':
      ranksPerLevel = 2;
      break;
    case 'Wizard':
      ranksPerLevel = 2;
      break;
  }

  if(character.int === 6 || character.int === 7) {
    ranksPerLevel += -2;
  } else if(character.int === 8 || character.int === 9) {
    ranksPerLevel += -1;
  } else if(character.int === 10 || character.int === 11) {
    ranksPerLevel += 0;
  } else if(character.int === 12 || character.int === 13) {
    ranksPerLevel += 1;
  } else if(character.int === 14 || character.int === 15) {
    ranksPerLevel += 2;
  } else if(character.int === 16 || character.int === 17) {
    ranksPerLevel += 3;
  } else if(character.int === 18 || character.int === 19) {
    ranksPerLevel += 4;
  } else if(character.int === 20) {
    ranksPerLevel += 5;
  }

  if(character.race === 'Human') {
    ranksPerLevel ++;
  }

  return ranksPerLevel;
}

function allocateSkillRanks() {
  var skillRanks = numSkillRanks();
  prompt([
    {
      type: 'checkbox',
      message: `Choose ${skillRanks} skills to put ranks in.`,
      name: 'skills',
      choices: [
        {
          name: 'Acrobatics'
        },
        {
          name: 'Appraise'
        },
        {
          name: 'Bluff'
        },
        {
          name: 'Climb'
        },
        {
          name: 'Craft'
        },
        {
          name: 'Diplomacy'
        },
        {
          name: 'Disable Device'
        },
        {
          name: 'Disguise'
        },
        {
          name: 'Escape Artist'
        },
        {
          name: 'Fly'
        },
        {
          name: 'Handle Animal'
        },
        {
          name: 'Heal'
        },
        {
          name: 'Intimidate'
        },
        {
          name: 'Knowledge (arcana)'
        },
        {
          name: 'Knowledge (dungeoneering)'
        },
        {
          name: 'Knowledge (engineering)'
        },
        {
          name: 'Knowledge (geography)'
        },
        {
          name: 'Knowledge (history)'
        },
        {
          name: 'Knowledge (local)'
        },
        {
          name: 'Knowledge (nature)'
        },
        {
          name: 'Knowledge (nobility)'
        },
        {
          name: 'Knowledge (planes)'
        },
        {
          name: 'Knowledge (religion)'
        },
        {
          name: 'Linguistics'
        },
        {
          name: 'Perception'
        },
        {
          name: 'Perform'
        },
        {
          name: 'Profession'
        },
        {
          name: 'Ride'
        },
        {
          name: 'Sense Motive'
        },
        {
          name: 'Sleight of Hand'
        },
        {
          name: 'Spellcraft'
        },
        {
          name: 'Stealth'
        },
        {
          name: 'Survival'
        },
        {
          name: 'Swim'
        },
        {
          name: 'Use Magic Device'
        }
      ],
      validate: function(answer) {
        if(answer.length !== skillRanks) {
          return `You must choose ${skillRanks} skills to put ranks in. Try Again.`
        }
        return true;
      }
    }
  ])
  .then(answers => {
    character.skillRanks = [];
    answers.skills.forEach(function(skill) {
      character.skillRanks[skill] = 1;
      if(skillSummary[skill][character.class] === "C") {
        character.skillRanks[skill] += 3;
      }
    });

    console.info('You have chosen to put ranks in the following skills:\n' + character.skillRanks);
    chooseFeats();
  });
}

function chooseFeats() {
  var numFeats = 1;
  if(character.race === "Human") {
    numFeats++;
  }
  if(character.class === "Fighter") {
    numFeats++;
  }

  prompt([
    {
      type: 'checkbox',
      message: `Choose ${numFeats} feats.`,
      name: 'feats',
      choices: featChoices(),
      validate: function(answer) {
        if(answer.length !== numFeats) {
          return `You must choose ${numFeats} feats. Try Again.`
        }
        return true;
      }
    }
  ])
  .then(answers => {
    character.feats = [];
    answers.feats.forEach(function(feat) {
      character.feats.push(feat);
    })

    calcHP();
    startingWealth()
    console.info("Here is your character so far.")
    console.info(character)
  });
}

function calcHP() { //TODO: Combine this with skill ranks.
  switch(character.class) {
    case 'Alchemist':
      character.hp = 8;
      break;
    case 'Barbarian':
      character.hp = 12;
      break;
    case 'Bard':
      character.hp = 8;
      break;
    case 'Cavalier':
      character.hp = 10;
      break;
    case 'Cleric':
      character.hp = 8;
      break;
    case 'Druid':
      character.hp = 8;
      break;
    case 'Fighter':
      character.hp = 10;
      break;
    case 'Gunslinger':
      character.hp = 10;
      break;
    case 'Inquisitor':
      character.hp = 8;
      break;
    case 'Magus':
      character.hp = 8;
      break;
    case 'Monk':
      character.hp = 8;
      break;
    case 'Ninja':
      character.hp = 8;
      break;
    case 'Oracle':
      character.hp = 8;
      break;
    case 'Paladin':
      character.hp = 10;
      break;
    case 'Ranger':
      character.hp = 10;
      break;
    case 'Rogue':
      character.hp = 8;
      break;
    case 'Samurai':
      character.hp = 10;
      break;
    case 'Sorcerer':
      character.hp = 6;
      break;
    case 'Summoner':
      character.hp = 8;
      break;
    case 'Witch':
      character.hp = 6;
      break;
    case 'Wizard':
      character.hp = 6;
      break;
  }
}

function startingWealth() { //TODO: Probably also want to combine this.
  switch(character.class) {
    case 'Alchemist':
      character.gold = roll(3,6) * 10;
      break;
    case 'Barbarian':
      character.gold = roll(3,6) * 10;
      break;
    case 'Bard':
      character.gold = roll(3,6) * 10;
      break;
    case 'Cavalier':
      character.gold = roll(5,6) * 10;
      break;
    case 'Cleric':
      character.gold = roll(4,6) * 10;
      break;
    case 'Druid':
      character.gold = roll(2,6) * 10;
      break;
    case 'Fighter':
      character.gold = roll(5,6) * 10;
      break;
    case 'Gunslinger':
      character.gold = roll(5,6) * 10;
      break;
    case 'Inquisitor':
      character.gold = roll(4,6) * 10;
      break;
    case 'Magus':
      character.gold = roll(4,6) * 10;
      break;
    case 'Monk':
      character.gold = roll(1,6) * 10;
      break;
    case 'Ninja':
      character.gold = roll(4,6) * 10;
      break;
    case 'Oracle':
      character.gold = roll(3,6) * 10;
      break;
    case 'Paladin':
      character.gold = roll(5,6) * 10;
      break;
    case 'Ranger':
      character.gold = roll(5,6) * 10;
      break;
    case 'Rogue':
      character.gold = roll(4,6) * 10;
      break;
    case 'Samurai':
      character.gold = roll(3,6) * 10;
      break;
    case 'Sorcerer':
      character.gold = roll(2,6) * 10;
      break;
    case 'Summoner':
      character.gold = roll(2,6) * 10;
      break;
    case 'Witch':
      character.gold = roll(3,6) * 10;
      break;
    case 'Wizard':
      character.gold = roll(2,6) * 10;
      break;
  }
}

const doNothing = (myVar) => {
  console.info("Testing." + myVar)
}

module.exports = { doNothing, startCreate };
