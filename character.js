const assert = require('assert');
const { prompt } = require('inquirer');
const Table = require('tec-table');
const { roll } = require('./helper');

var character = {};

const racePrompt = {
  type: 'list',
  name: 'raceChoice',
  message: 'Choose your race',
  choices: [
    'Dwarf +2 Con, +2 Wis, –2 Cha',
    'Elf +2 Dex, +2 Int, –2 Con',
    'Gnome +2 Con, +2 Cha, –2 Str',
    'Half Elf +2 to one ability score (your choice)',
    'Halfling +2 Dex, +2 Cha, –2 Str',
    'Half Orc +2 to one ability score (your choice)',
    'Human +2 to one ability score (your choice)'//,
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
      case 'Dwarf +2 Con, +2 Wis, –2 Cha':
        character.race = 'Dwarf';
        character.con += 2;
        character.wis += 2;
        character.cha -= 2;
        break;
      case 'Elf +2 Dex, +2 Int, –2 Con':
        character.race = 'Elf';
        character.dex += 2;
        character.int += 2;
        character.con -= 2;
        break;
      case 'Gnome +2 Con, +2 Cha, –2 Str':
        character.race = 'Gnome';
        character.con += 2;
        character.cha += 2;
        character.str -= 2;
        break;
      case 'Half Elf +2 to one ability score (your choice)':
        character.race = 'Half Elf';
        chooseRaceAbilityBonus();
        break;
      case 'Halfling +2 Dex, +2 Cha, –2 Str':
        character.race = 'Halfling'
        character.dex += 2;
        character.cha += 2;
        character.str -= 2;
        break;
      case 'Half Orc +2 to one ability score (your choice)':
        character.race = 'Half Orc';
        chooseRaceAbilityBonus();
        break;
      case 'Human +2 to one ability score (your choice)':
        character.race = 'human';
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

  if(character.race === 'human') {
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
    character.skillRanks = []
    answers.skills.forEach(function(skill) {
      character.skillRanks[skill] = 1;
    });

    console.info('You have chosen to put ranks in the following skills:\n' + character.skillRanks);
    console.info(character);
  });


}

const doNothing = (myVar) => {
  console.info("Testing." + myVar)
}

module.exports = { doNothing, startCreate };
