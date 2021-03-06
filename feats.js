feats = [
  {
    "name": "Acrobatic",
    "type": "General",
    "description": "You are skilled at leaping, jumping, and flying.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Acrobatics and Fly skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Acrobatic Steps",
    "type": "General",
    "description": "You can easily move over and through obstacles.",
    "prerequisites": ["Dex 15","Nimble Moves"],
    "prerequisitesFeats": ["Dex 15","Nimble Moves"],
    "benefit": "Whenever you move, you may move through up to 15 feet of difficult terrain each round as if it were normal terrain. The effects of this feat stack with those provided by Nimble Moves (allowing you to move normally through a total of 20 feet of difficult terrain each round)."
  },
  {
    "name": "Agile Maneuvers",
    "type": "Combat",
    "description": "You've learned to use your quickness in place of brute force when performing combat maneuvers.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You add your Dexterity bonus to your base attack bonus and size bonus when determining your Combat Maneuver Bonus (see Chapter 8) instead of your Strength bonus."
  },
  {
    "name": "Alertness",
    "type": "General",
    "description": "You often notice things that others might miss.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on Perception and Sense Motive skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Alignment Channel",
    "type": "General",
    "description": "Choose chaos, evil, good, or law. You can channel divine energy to affect outsiders that possess this subtype.",
    "prerequisites": ["Ability to channel energy"],
    "prerequisitesFeats": ["Ability to channel energy"],
    "benefit": "Instead of its normal effect, you can choose to have your ability to channel energy heal or harm outsiders of the chosen alignment subtype. You must make this choice each time you channel energy. If you choose to heal or harm creatures of the chosen alignment subtype, your channel energy has no effect on other creatures. The amount of damage healed or dealt and the DC to halve the damage is otherwise unchanged."
  },
  {
    "name": "Animal Affinity",
    "type": "General",
    "description": "You are skilled at working with animals and mounts.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Handle Animal and Ride skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Arcane Armor Mastery",
    "type": "Combat",
    "description": "You have mastered the ability to cast spells while wearing armor.",
    "prerequisites": ["Arcane Armor Training","Medium Armor Proficiency","caster level 7th"],
    "prerequisitesFeats": ["Arcane Armor Training","Medium Armor Proficiency","caster level 7th"],
    "benefit": "As a swift action, reduce the arcane spell failure chance due to the armor you are wearing by 20% for any spells you cast this round. This bonus replaces, and does not stack with, the bonus granted by Arcane Armor Training."
  },
  {
    "name": "Arcane Armor Training",
    "type": "Combat",
    "description": "You have learned how to cast spells while wearing armor.",
    "prerequisites": ["Light Armor Proficiency","caster level 3rd"],
    "prerequisitesFeats": ["Light Armor Proficiency","caster level 3rd"],
    "benefit": "As a swift action, reduce the arcane spell failure chance due to the armor you are wearing by 10% for any spells you cast this round."
  },
  {
    "name": "Arcane Strike",
    "type": "Combat",
    "description": "You draw upon your arcane power to enhance your weapons with magical energy.",
    "prerequisites": ["Ability to cast arcane spells"],
    "prerequisitesFeats": ["Ability to cast arcane spells"],
    "benefit": "As a swift action, you can imbue your weapons with a fraction of your power. For 1 round, your weapons deal +1 damage and are treated as magic for the purpose of overcoming damage reduction. For every five caster levels you possess, this bonus increases by +1, to a maximum of +5 at 20th level."
  },
  {
    "name": "Heavy Armor Proficiency",
    "type": "Combat",
    "description": "You are skilled at wearing heavy armor.",
    "prerequisites": ["Light Armor Proficiency","Medium Armor Proficiency"],
    "prerequisitesFeats": ["Light Armor Proficiency","Medium Armor Proficiency"],
    "benefit": "See Armor Proficiency, Light."
  },
  {
    "name": "Light Armor Proficiency",
    "type": "Combat",
    "description": "You are skilled at wearing light armor.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you wear a type of armor with which you are proficient, the armor check penalty for that armor applies only to Dexterity- and Strength-based skill checks."
  },
  {
    "name": "Medium Armor Proficiency",
    "type": "Combat",
    "description": "You are skilled at wearing medium armor.",
    "prerequisites": ["Light Armor Proficiency"],
    "prerequisitesFeats": ["Light Armor Proficiency"],
    "benefit": "See Armor Proficiency, Light."
  },
  {
    "name": "Athletic",
    "type": "General",
    "description": "You possess inherent physical prowess.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on Climb and Swim skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Augment Summoning",
    "type": "General",
    "description": "Your summoned creatures are more powerful and robust.",
    "prerequisites": ["Spell Focus (conjuration)"],
    "prerequisitesFeats": ["Spell Focus (conjuration)"],
    "benefit": "Each creature you conjure with any summon spell gains a +4 enhancement bonus to Strength and Constitution for the duration of the spell that summoned it."
  },
  {
    "name": "Bleeding Critical",
    "type": "Combat",
    "description": "Your critical hits cause opponents to bleed profusely.",
    "prerequisites": ["Critical Focus","base attack bonus +11"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +11"],
    "benefit": "Whenever you score a critical hit with a slashing or piercing weapon, your opponent takes 2d6 points of bleed damage (see Appendix 2) each round on his turn, in addition to the damage dealt by the critical hit. Bleed damage can be stopped by a DC 15 Heal skill check or through any magical healing. The effects of this feat stack."
  },
  {
    "name": "Blind-Fight",
    "type": "Combat",
    "description": "You are skilled at attacking opponents that you cannot clearly perceive.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "In melee, every time you miss because of concealment (see Chapter 8), you can reroll your miss chance percentile roll one time to see if you actually hit. An invisible attacker gets no advantages related to hitting you in melee. That is, you don't lose your Dexterity bonus to Armor Class, and the attacker doesn't get the usual +2 bonus for being invisible. The invisible attacker's bonuses do still apply for ranged attacks, however. You do not need to make Acrobatics skill checks to move at full speed while blinded."
  },
  {
    "name": "Blinding Critical",
    "type": "Combat",
    "description": "Your critical hits blind your opponents.",
    "prerequisites": ["Critical Focus","base attack bonus +15"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +15"],
    "benefit": "Whenever you score a critical hit, your opponent is permanently blinded. A successful Fortitude save reduces this to dazzled for 1d4 rounds. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on creatures that do not rely on eyes for sight or creatures with more than two eyes (although multiple critical hits might cause blindness, at the GM's discretion). Blindness can be cured by heal, regeneration, remove blindness, or similar abilities."
  },
  {
    "name": "Brew Potion",
    "type": "Item Creation",
    "description": "You can create magic potions.",
    "prerequisites": ["Caster level 3rd"],
    "prerequisitesFeats": ["Caster level 3rd"],
    "benefit": "You can create a potion of any 3rd-level or lower spell that you know and that targets one or more creatures or objects. Brewing a potion takes 2 hours if its base price is 250 gp or less, otherwise brewing a potion takes 1 day for each 1,000 gp in its base price. When you create a potion, you set the caster level, which must be sufficient to cast the spell in question and no higher than your own level. To brew a potion, you must use up raw materials costing one half this base price. See the magic item creation rules in Chapter 15 for more information. When you create a potion, you make any choices that you would normally make when casting the spell. Whoever drinks the potion is the target of the spell."
  },
  {
    "name": "Catch Off-Guard",
    "type": "Combat",
    "description": "Foes are surprised by your skilled use of unorthodox and improvised weapons.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You do not suffer any penalties for using an improvised melee weapon. Unarmed opponents are flat-footed against any attacks you make with an improvised melee weapon."
  },
  {
    "name": "Channel Smite",
    "type": "Combat",
    "description": "You can channel your divine energy through a melee weapon you wield.",
    "prerequisites": ["Channel energy class feature"],
    "prerequisitesFeats": ["Channel energy class feature"],
    "benefit": "Before you make a melee attack roll, you can choose to spend one use of your channel energy ability as a swift action. If you channel positive energy and you hit an undead creature, that creature takes an amount of additional damage equal to the damage dealt by your channel positive energy ability. If you channel negative energy and you hit a living creature, that creature takes an amount of additional damage equal to the damage dealt by your channel negative energy ability. Your target can make a Will save, as normal, to halve this additional damage. If your attack misses, the channel energy ability is still expended with no effect."
  },
  {
    "name": "Cleave",
    "type": "Combat",
    "description": "You can strike two adjacent foes with a single swing.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +1"],
    "benefit": "As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the first and also within reach. You can only make one additional attack per round with this feat. When you use this feat, you take a -2 penalty to your Armor Class until your next turn."
  },
  {
    "name": "Combat Casting",
    "type": "General",
    "description": "You are adept at spellcasting when threatened or distracted.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +4 bonus on concentration checks made to cast a spell or use a spell-like ability when casting on the defensive or while grappled."
  },
  {
    "name": "Combat Expertise",
    "type": "Combat",
    "description": "You can increase your defense at the expense of your accuracy.",
    "prerequisites": ["Int 13"],
    "prerequisitesFeats": ["Int 13"],
    "benefit": "You can choose to take a -1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by -1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn."
  },
  {
    "name": "Combat Reflexes",
    "type": "Combat",
    "description": "You can make additional attacks of opportunity.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed."
  },
  {
    "name": "Command Undead",
    "type": "General",
    "description": "Using foul powers of necromancy, you can command undead creatures, making them into your servants.",
    "prerequisites": ["Channel negative energy class feature"],
    "prerequisitesFeats": ["Channel negative energy class feature"],
    "benefit": "As a standard action, you can use one of your uses of channel negative energy to enslave undead within 30 feet. Undead receive a Will save to negate the effect. The DC for this Will save is equal to 10 + 1/2 your cleric level + your Charisma modifier. Undead that fail their saves fall under your control, obeying your commands to the best of their ability, as if under the effects of control undead. Intelligent undead receive a new saving throw each day to resist your command. You can control any number of undead, so long as their total Hit Dice do not exceed your cleric level. If you use channel energy in this way, it has no other effect (it does not heal or harm nearby creatures). If an undead creature is under the control of another creature, you must make an opposed Charisma check whenever your orders conf lict."
  },
  {
    "name": "Craft Magic Arms and Armor",
    "type": "Item Creation",
    "description": "You can create magic armor, shields, and weapons.",
    "prerequisites": ["Caster level 5th"],
    "prerequisitesFeats": ["Caster level 5th"],
    "benefit": "You can create magic weapons, armor, or shields. Enhancing a weapon, suit of armor, or shield takes 1 day for each 1,000 gp in the price of its magical features. To enhance a weapon, suit of armor, or shield, you must use up raw materials costing half of this total price. See the magic item creation rules in Chapter 15 for more information. The weapon, armor, or shield to be enhanced must be a masterwork item that you provide. Its cost is not included in the above cost. You can also mend a broken or destroyed magic weapon, suit of armor, or shield if it is one that you could make. Doing so costs half the raw materials and half the time it would take to craft that item in the first place."
  },
  {
    "name": "Craft Rod",
    "type": "Item Creation",
    "description": "You can create magic rods.",
    "prerequisites": ["Caster level 9th"],
    "prerequisitesFeats": ["Caster level 9th"],
    "benefit": "You can create magic rods. Crafting a rod takes 1 day for each 1,000 gp in its base price. To craft a rod, you must use up raw materials costing half of its base price. See the magic item creation rules in Chapter 15 for more information."
  },
  {
    "name": "Craft Wand",
    "type": "Item Creation",
    "description": "You can create magic wands.",
    "prerequisites": ["Caster level 5th"],
    "prerequisitesFeats": ["Caster level 5th"],
    "benefit": "You can create a wand of any 4th-level or lower spell that you know. Crafting a wand takes 1 day for each 1,000 gp in its base price. To craft a wand, you must use up raw materials costing half of this base price. A newly created wand has 50 charges. See the magic item creation rules in Chapter 15 for more information."
  },
  {
    "name": "Craft Staff",
    "type": "Item Creation",
    "description": "You can create magic staves.",
    "prerequisites": ["Caster level 11th"],
    "prerequisitesFeats": ["Caster level 11th"],
    "benefit": "You can create any staff whose prerequisites you meet. Crafting a staff takes 1 day for each 1,000 gp in its base price. To craft a staff, you must use up raw materials costing half of its base price. A newly created staff has 10 charges. See the magic item creation rules in Chapter 15 for more information."
  },
  {
    "name": "Craft Wondrous Item",
    "type": "Item Creation",
    "description": "You can create wondrous items, a type of magic item.",
    "prerequisites": ["Caster level 3rd"],
    "prerequisitesFeats": ["Caster level 3rd"],
    "benefit": "You can create a wide variety of magic wondrous items. Crafting a wondrous item takes 1 day for each 1,000 gp in its price. To create a wondrous item, you must use up raw materials costing half of its base price. See the magic item creation rules in Chapter 15 for more information. You can also mend a broken or destroyed wondrous item if it is one that you could make. Doing so costs half the raw materials and half the time it would take to craft that item."
  },
  {
    "name": "Critical Focus",
    "type": "Combat",
    "description": "You are trained in the art of causing pain.",
    "prerequisites": ["Base attack bonus +9"],
    "prerequisitesFeats": ["Base attack bonus +9"],
    "benefit": "You receive a +4 circumstance bonus on attack rolls made to confirm critical hits."
  },
  {
    "name": "Critical Mastery",
    "type": "Combat",
    "description": "Your critical hits cause two additional effects.",
    "prerequisites": ["Critical Focus","any two critical feats","14th-level fighter"],
    "prerequisitesFeats": ["Critical Focus","any two critical feats","14th-level fighter"],
    "benefit": "When you score a critical hit, you can apply the effects of two critical feats in addition to the damage dealt."
  },
  {
    "name": "Dazzling Display",
    "type": "Combat",
    "description": "Your skill with your favored weapon can frighten enemies.",
    "prerequisites": ["Weapon Focus","proficiency with the selected weapon"],
    "prerequisitesFeats": ["Weapon Focus","proficiency with the selected weapon"],
    "benefit": "While wielding the weapon in which you have Weapon Focus, you can perform a bewildering show of prowess as a full-round action. Make an Intimidate check to demoralize all foes within 30 feet who can see your display."
  },
  {
    "name": "Deadly Aim",
    "type": "Combat",
    "description": "You can make exceptionally deadly ranged attacks by pinpointing a foe's weak spot, at the expense of making the attack less likely to succeed.",
    "prerequisites": ["Dex 13","base attack bonus +1"],
    "prerequisitesFeats": ["Dex 13","base attack bonus +1"],
    "benefit": "You can choose to take a -1 penalty on all ranged attack rolls to gain a +2 bonus on all ranged damage rolls. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by -1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage."
  },
  {
    "name": "Deadly Stroke",
    "type": "Combat",
    "description": "With a well-placed strike, you can bring a swift and painful end to most foes.",
    "prerequisites": ["Dazzling Display","Greater Weapon Focus","Shatter Defenses","Weapon Focus","proficiency with the selected weapon","base attack bonus +11"],
    "prerequisitesFeats": ["Dazzling Display","Greater Weapon Focus","Shatter Defenses","Weapon Focus","proficiency with the selected weapon","base attack bonus +11"],
    "benefit": "As a standard action, make a single attack with the weapon for which you have Greater Weapon Focus against a stunned or flat-footed opponent. If you hit, you deal double the normal damage and the target takes 1 point of Constitution bleed (see Appendix 2). The additional damage and bleed is not multiplied on a critical hit."
  },
  {
    "name": "Deafening Critical",
    "type": "Combat",
    "description": "Your critical hits cause enemies to lose their hearing.",
    "prerequisites": ["Critical Focus","base attack bonus +13"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +13"],
    "benefit": "Whenever you score a critical hit against an opponent, the victim is permanently deafened. A successful Fortitude save reduces the deafness to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on deaf creatures. This deafness can be cured by heal, regeneration, remove deafness, or a similar ability."
  },
  {
    "name": "Deceitful",
    "type": "General",
    "description": "You are skilled at deceiving others, both with the spoken word and with physical disguises.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Bluff and Disguise skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Defensive Combat Training",
    "type": "Combat",
    "description": "You excel at defending yourself from all manner of combat maneuvers.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You treat your total Hit Dice as your base attack bonus when calculating your Combat Maneuver Defense (see Chapter 8)."
  },
  {
    "name": "Deflect Arrows",
    "type": "Combat",
    "description": "You can knock arrows and other projectiles off course, preventing them from hitting you.",
    "prerequisites": ["Dex 13","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Dex 13","Improved Unarmed Strike"],
    "benefit": "You must have at least one hand free (holding nothing) to use this feat. Once per round when you would normally be hit with an attack from a ranged weapon, you may def lect it so that you take no damage from it. You must be aware of the attack and not flat-footed. Attempting to def lect a ranged attack doesn't count as an action. Unusually massive ranged weapons (such as boulders or ballista bolts) and ranged attacks generated by natural attacks or spell effects can't be def lected."
  },
  {
    "name": "Deft Hands",
    "type": "General",
    "description": "You have exceptional manual dexterity.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on Disable Device and Sleight of Hand skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Diehard",
    "type": "General",
    "description": "You are especially hard to kill. Not only do your wounds automatically stabilize when grievously injured, but you can remain conscious and continue to act even at death's door.",
    "prerequisites": ["Endurance"],
    "prerequisitesFeats": ["Endurance"],
    "benefit": "When your hit point total is below 0, but you are not dead, you automatically stabilize. You do not need to make a Constitution check each round to avoid losing additional hit points. You may choose to act as if you were disabled, rather than dying. You must make this decision as soon as you are reduced to negative hit points (even if it isn't your turn). If you do not choose to act as if you were disabled, you immediately fall unconscious. When using this feat, you are staggered. You can take a move action without further injuring yourself, but if you perform any standard action (or any other action deemed as strenuous, including some swift actions, such as casting a quickened spell) you take 1 point of damage after completing the act. If your negative hit points are equal to or greater than your Constitution score, you immediately die."
  },
  {
    "name": "Disruptive",
    "type": "Combat",
    "description": "Your training makes it difficult for enemy spellcasters to safely cast spells near you.",
    "prerequisites": ["6th-level fighter"],
    "prerequisitesFeats": ["6th-level fighter"],
    "benefit": "The DC to cast spells defensively increases by +4 for all enemies that are within your threatened area. This increase to casting spells defensively only applies if you are aware of the enemy's location and are capable of taking an attack of opportunity. If you can only take one attack of opportunity per round and have already used that attack, this increase does not apply."
  },
  {
    "name": "Dodge",
    "type": "Combat",
    "description": "Your training and ref lexes allow you to react swiftly to avoid an opponents' attacks.",
    "prerequisites": ["Dex 13"],
    "prerequisitesFeats": ["Dex 13"],
    "benefit": "You gain a +1 dodge bonus to your AC. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat."
  },
  {
    "name": "Double Slice",
    "type": "Combat",
    "description": "Your off-hand weapon while dual-wielding strikes with greater power.",
    "prerequisites": ["Dex 15","Two-Weapon Fighting"],
    "prerequisitesFeats": ["Dex 15","Two-Weapon Fighting"],
    "benefit": "Add your Strength bonus to damage rolls made with your off-hand weapon."
  },
  {
    "name": "Elemental Channel",
    "type": "General",
    "description": "Choose one elemental subtype, such as air, earth, fire, or water. You can channel your divine energy to harm or heal outsiders that possess your chosen elemental subtype.",
    "prerequisites": ["Channel energy class feature"],
    "prerequisitesFeats": ["Channel energy class feature"],
    "benefit": "Instead of its normal effect, you can choose to have your ability to channel energy heal or harm outsiders of your chosen elemental subtype. You must make this choice each time you channel energy. If you choose to heal or harm creatures of your elemental subtype, your channel energy has no affect on other creatures. The amount of damage healed or dealt and the DC to halve the damage is otherwise unchanged."
  },
  {
    "name": "Empower Spell",
    "type": "Metamagic",
    "description": "You can increase the power of your spells, causing them to deal more damage.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "All variable, numeric effects of an empowered spell are increased by half, including bonuses to those dice rolls. Saving throws and opposed rolls are not affected, nor are spells without random variables. An empowered spell uses up a spell slot two levels higher than the spell's actual level."
  },
  {
    "name": "Endurance",
    "type": "General",
    "description": "Harsh conditions or long exertions do not easily tire you.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain a +4 bonus on the following checks and saves: Swim checks made to resist nonlethal damage from exhaustion; Constitution checks made to continue running; Constitution checks made to avoid nonlethal damage from a forced march; Constitution checks made to hold your breath; Constitution checks made to avoid nonlethal damage from starvation or thirst; Fortitude saves made to avoid nonlethal damage from hot or cold environments; and Fortitude saves made to resist damage from suffocation. You may sleep in light or medium armor without becoming fatigued."
  },
  {
    "name": "Enlarge Spell",
    "type": "Metamagic",
    "description": "You can increase the range of your spells.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can alter a spell with a range of close, medium, or long to increase its range by 100%. An enlarged spell with a range of close now has a range of 50 ft. + 5 ft./ level, while medium-range spells have a range of 200 ft. + 20 ft./level and long-range spells have a range of 800 ft. + 80 ft./level. An enlarged spell uses up a spell slot one level higher than the spell's actual level. Spells whose ranges are not defined by distance, as well as spells whose ranges are not close, medium, or long, do not benefit from this feat."
  },
  {
    "name": "Eschew Materials",
    "type": "General",
    "description": "You can cast many spells without needing to utilize minor material components.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can cast any spell with a material component costing 1 gp or less without needing that component. The casting of the spell still provokes attacks of opportunity as normal. If the spell requires a material component that costs more than 1 gp, you must have the material component on hand to cast the spell, as normal."
  },
  {
    "name": "Exhausting Critical",
    "type": "Combat",
    "description": "Your critical hits cause opponents to become exhausted.",
    "prerequisites": ["Critical Focus","Tiring Critical","base attack bonus +15"],
    "prerequisitesFeats": ["Critical Focus","Tiring Critical","base attack bonus +15"],
    "benefit": "When you score a critical hit on a foe, your target immediately becomes exhausted. This feat has no effect on exhausted creatures."
  },
  {
    "name": "Exotic Weapon Proficiency",
    "type": "Combat",
    "description": "Choose one type of exotic weapon, such as the spiked chain or whip. You understand how to use that type of exotic weapon in combat, and can utilize any special tricks or qualities that exotic weapon might allow.",
    "prerequisites": ["Base attack bonus +1"],
    "prerequisitesFeats": ["Base attack bonus +1"],
    "benefit": "You make attack rolls with the weapon normally."
  },
  {
    "name": "Extend Spell",
    "type": "Metamagic",
    "description": "You can make your spells last twice as long.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "An extended spell lasts twice as long as normal. A spell with a duration of concentration, instantaneous, or permanent is not affected by this feat. An extended spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Extra Channel",
    "type": "General",
    "description": "You can channel divine energy more often.",
    "prerequisites": ["Channel energy class feature"],
    "prerequisitesFeats": ["Channel energy class feature"],
    "benefit": "You can channel energy two additional times per day."
  },
  {
    "name": "Extra Ki",
    "type": "General",
    "description": "You can use your ki pool more times per day than most.",
    "prerequisites": ["Ki pool class feature"],
    "prerequisitesFeats": ["Ki pool class feature"],
    "benefit": "Your ki pool increases by 2."
  },
  {
    "name": "Extra Lay On Hands",
    "type": "General",
    "description": "You can use your lay on hands ability more often.",
    "prerequisites": ["Lay on hands class feature"],
    "prerequisitesFeats": ["Lay on hands class feature"],
    "benefit": "You can use your lay on hands ability two additional times per day."
  },
  {
    "name": "Extra Mercy",
    "type": "General",
    "description": "Your lay on hands ability adds an additional mercy.",
    "prerequisites": ["Lay on hands class feature","mercy class feature"],
    "prerequisitesFeats": ["Lay on hands class feature","mercy class feature"],
    "benefit": "Select one additional mercy for which you qualify. When you use lay on hands to heal damage to one target, it also receives the additional effects of this mercy."
  },
  {
    "name": "Extra Performance",
    "type": "General",
    "description": "You can use your bardic performance ability more often than normal.",
    "prerequisites": ["Bardic performance class feature"],
    "prerequisitesFeats": ["Bardic performance class feature"],
    "benefit": "You can use bardic performance for 6 additional rounds per day."
  },
  {
    "name": "Extra Rage",
    "type": "General",
    "description": "You can use your rage ability more than normal.",
    "prerequisites": ["Rage class feature"],
    "prerequisitesFeats": ["Rage class feature"],
    "benefit": "You can rage for 6 additional rounds per day."
  },
  {
    "name": "Far Shot",
    "type": "Combat",
    "description": "You are more accurate at longer ranges.",
    "prerequisites": ["Point-Blank Shot"],
    "prerequisitesFeats": ["Point-Blank Shot"],
    "benefit": "You only suffer a -1 penalty per full range increment between you and your target when using a ranged weapon."
  },
  {
    "name": "Fleet",
    "type": "General",
    "description": "You are faster than most.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "While you are wearing light or no armor, your base speed increases by 5 feet. You lose the benefits of this feat if you carry a medium or heavy load."
  },
  {
    "name": "Forge Ring",
    "type": "Item Creation",
    "description": "You can create magic rings.",
    "prerequisites": ["Caster level 7th"],
    "prerequisitesFeats": ["Caster level 7th"],
    "benefit": "You can create magic rings. Crafting a ring takes 1 day for each 1,000 gp in its base price. To craft a ring, you must use up raw materials costing half of the base price. See the magic item creation rules in Chapter 15 for more information. You can also mend a broken ring if it is one that you could make. Doing so costs half the raw materials and half the time it would take to forge that ring in the first place."
  },
  {
    "name": "Gorgon's Fist",
    "type": "Combat",
    "description": "With one well-placed blow, you leave your target reeling.",
    "prerequisites": ["Improved Unarmed Strike","Scorpion Style","base attack bonus +6"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Scorpion Style","base attack bonus +6"],
    "benefit": "As a standard action, make a single unarmed melee attack against a foe whose speed is reduced (such as from Scorpion Style). If the attack hits, you deal damage normally and the target is staggered until the end of your next turn unless it makes a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier). This feat has no effect on targets that are staggered."
  },
  {
    "name": "Great Cleave",
    "type": "Combat",
    "description": "You can strike many adjacent foes with a single blow.",
    "prerequisites": ["Str 13","Cleave","Power Attack","base attack bonus +4"],
    "prerequisitesFeats": ["Str 13","Cleave","Power Attack","base attack bonus +4"],
    "benefit": "As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the previous foe and also within reach. If you hit, you can continue to make attacks against foes adjacent to the previous foe, so long as they are within your reach. You cannot attack an individual foe more than once during this attack action. When you use this feat, you take a -2 penalty to your Armor Class until your next turn."
  },
  {
    "name": "Great Fortitude",
    "type": "General",
    "description": "You are resistant to poisons, diseases, and other maladies.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Fortitude saving throws."
  },
  {
    "name": "Greater Bull Rush",
    "type": "Combat",
    "description": "Your bull rush attacks throw enemies off balance.",
    "prerequisites": ["Improved Bull Rush","Power Attack","base attack bonus +6","Str 13"],
    "prerequisitesFeats": ["Improved Bull Rush","Power Attack","base attack bonus +6","Str 13"],
    "benefit": "You receive a +2 bonus on checks made to bull rush a foe. This bonus stacks with the bonus granted by Improved Bull Rush. Whenever you bull rush an opponent, his movement provokes attacks of opportunity from all of your allies (but not you)."
  },
  {
    "name": "Greater Disarm",
    "type": "Combat",
    "description": "You can knock weapons far from an enemy's grasp.",
    "prerequisites": ["Combat Expertise","Improved Disarm","base attack bonus +6","Int 13"],
    "prerequisitesFeats": ["Combat Expertise","Improved Disarm","base attack bonus +6","Int 13"],
    "benefit": "You receive a +2 bonus on checks made to disarm a foe. This bonus stacks with the bonus granted by Improved Disarm. Whenever you successfully disarm an opponent, the weapon lands 15 feet away from its previous wielder, in a random direction."
  },
  {
    "name": "Greater Feint",
    "type": "Combat",
    "description": "You are skilled at making foes overreact to your attacks.",
    "prerequisites": ["Combat Expertise","Improved Feint","base attack bonus +6","Int 13"],
    "prerequisitesFeats": ["Combat Expertise","Improved Feint","base attack bonus +6","Int 13"],
    "benefit": "Whenever you use feint to cause an opponent to lose his Dexterity bonus, he loses that bonus until the beginning of your next turn, in addition to losing his Dexterity bonus against your next attack."
  },
  {
    "name": "Greater Grapple",
    "type": "Combat",
    "description": "Maintaining a grapple is second nature to you.",
    "prerequisites": ["Improved Grapple","Improved Unarmed Strike","base attack bonus +6","Dex 13"],
    "prerequisitesFeats": ["Improved Grapple","Improved Unarmed Strike","base attack bonus +6","Dex 13"],
    "benefit": "You receive a +2 bonus on checks made to grapple a foe. This bonus stacks with the bonus granted by Improved Grapple. Once you have grappled a creature, maintaining the grapple is a move action. This feat allows you to make two grapple checks each round (to move, harm, or pin your opponent), but you are not required to make two checks. You only need to succeed at one of these checks to maintain the grapple."
  },
  {
    "name": "Greater Overrun",
    "type": "Combat",
    "description": "Enemies must dive to avoid your dangerous move.",
    "prerequisites": ["Improved Overrun","Power Attack","base attack bonus +6","Str 13"],
    "prerequisitesFeats": ["Improved Overrun","Power Attack","base attack bonus +6","Str 13"],
    "benefit": "You receive a +2 bonus on checks made to overrun a foe. This bonus stacks with the bonus granted by Improved Overrun. Whenever you overrun opponents, they provoke attacks of opportunity if they are knocked prone by your overrun."
  },
  {
    "name": "Greater Penetrating Strike",
    "type": "Combat",
    "description": "Your attacks penetrate the defenses of most foes.",
    "prerequisites": ["Penetrating Strike","Weapon Focus","16th-level fighter"],
    "prerequisitesFeats": ["Penetrating Strike","Weapon Focus","16th-level fighter"],
    "benefit": "Your attacks made with weapons selected with Weapon Focus ignore up to 10 points of damage reduction. This amount is reduced to 5 points for damage reduction without a type (such as DR 10/-)."
  },
  {
    "name": "Greater Shield Focus",
    "type": "Combat",
    "description": "You are skilled at def lecting blows with your shield.",
    "prerequisites": ["Shield Focus","Shield Proficiency","8th-level fighter"],
    "prerequisitesFeats": ["Shield Focus","Shield Proficiency","8th-level fighter"],
    "benefit": "Increase the AC bonus granted by any shield you are using by 1. This bonus stacks with the bonus granted by Shield Focus."
  },
  {
    "name": "Greater Spell Focus",
    "type": "General",
    "description": "Choose a school of magic to which you have already applied the Spell Focus feat. Any spells you cast of this school are very hard to resist.",
    "prerequisites": ["Spell Focus"],
    "prerequisitesFeats": ["Spell Focus"],
    "benefit": "Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select. This bonus stacks with the bonus from Spell Focus."
  },
  {
    "name": "Greater Spell Penetration",
    "type": "General",
    "description": "Your spells break through spell resistance much more easily than most.",
    "prerequisites": ["Spell Penetration"],
    "prerequisitesFeats": ["Spell Penetration"],
    "benefit": "You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature's spell resistance. This bonus stacks with the one from Spell Penetration."
  },
  {
    "name": "Greater Sunder",
    "type": "Combat",
    "description": "Your devastating strikes cleave through weapons and armor and into their wielders, damaging both item and wielder alike in a single terrific strike.",
    "prerequisites": ["Improved Sunder","Power Attack","base attack bonus +6","Str 13"],
    "prerequisitesFeats": ["Improved Sunder","Power Attack","base attack bonus +6","Str 13"],
    "benefit": "You receive a +2 bonus on checks made to sunder an item. This bonus stacks with the bonus granted by Improved Sunder. Whenever you sunder to destroy a weapon, shield, or suit of armor, any excess damage is applied to the item's wielder. No damage is transferred if you decide to leave the item with 1 hit point."
  },
  {
    "name": "Greater Trip",
    "type": "Combat",
    "description": "You can make free attacks on foes that you knock down.",
    "prerequisites": ["Combat Expertise","Improved Trip","base attack bonus +6","Int 13"],
    "prerequisitesFeats": ["Combat Expertise","Improved Trip","base attack bonus +6","Int 13"],
    "benefit": "You receive a +2 bonus on checks made to trip a foe. This bonus stacks with the bonus granted by Improved Trip. Whenever you successfully trip an opponent, that opponent provokes attacks of opportunity."
  },
  {
    "name": "Greater Two-Weapon Fighting",
    "type": "Combat",
    "description": "You are incredibly skilled at fighting with two weapons at the same time.",
    "prerequisites": ["Dex 19","Improved Two-Weapon Fighting","Two-Weapon Fighting","base attack bonus +11"],
    "prerequisitesFeats": ["Dex 19","Improved Two-Weapon Fighting","Two-Weapon Fighting","base attack bonus +11"],
    "benefit": "You get a third attack with your off-hand weapon, albeit at a -10 penalty."
  },
  {
    "name": "Greater Vital Strike",
    "type": "Combat",
    "description": "You can make a single attack that deals incredible damage.",
    "prerequisites": ["Improved Vital Strike","Vital Strike","base attack bonus +16"],
    "prerequisitesFeats": ["Improved Vital Strike","Vital Strike","base attack bonus +16"],
    "benefit": "When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon's damage dice for the attack four times and add the results together before adding bonuses from Strength, weapon abilities (such as flaming), precision-based damage (such as sneak attack), and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total."
  },
  {
    "name": "Greater Weapon Focus",
    "type": "Combat",
    "description": "Choose one type of weapon (including unarmed strike or grapple) for which you have already selected Weapon Focus. You are a master at your chosen weapon.",
    "prerequisites": ["Proficiency with selected weapon","Weapon Focus with selected weapon","8th-level fighter"],
    "prerequisitesFeats": ["Proficiency with selected weapon","Weapon Focus with selected weapon","8th-level fighter"],
    "benefit": "You gain a +1 bonus on attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including those from Weapon Focus."
  },
  {
    "name": "Greater Weapon Specialization",
    "type": "Combat",
    "description": "Choose one type of weapon (including unarmed strike or grapple) for which you possess the Weapon Specialization feat. Your attacks with the chosen weapon are more devastating than normal.",
    "prerequisites": ["Proficiency with selected weapon","Greater Weapon Focus with selected weapon","Weapon Focus with selected weapon","Weapon Specialization with selected weapon","12th-level fighter"],
    "prerequisitesFeats": ["Proficiency with selected weapon","Greater Weapon Focus with selected weapon","Weapon Focus with selected weapon","Weapon Specialization with selected weapon","12th-level fighter"],
    "benefit": "You gain a +2 bonus on all damage rolls you make using the selected weapon. This bonus to damage stacks with other damage roll bonuses, including any you gain from Weapon Specialization."
  },
  {
    "name": "Heighten Spell",
    "type": "Metamagic",
    "description": "You can cast spells as if they were a higher level.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "A heightened spell has a higher spell level than normal (up to a maximum of 9th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies. All effects dependent on spell level (such as saving throw DCs and ability to penetrate a lesser globe of invulnerability) are calculated according to the heightened level. The heightened spell is as difficult to prepare and cast as a spell of its effective level."
  },
  {
    "name": "Improved Bull Rush",
    "type": "Combat",
    "description": "You are skilled at pushing your foes around.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +1"],
    "benefit": "You do not provoke an attack of opportunity when performing a bull rush combat maneuver. In addition, you receive a +2 bonus on checks made to bull rush a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to bull rush you."
  },
  {
    "name": "Improved Channel",
    "type": "General",
    "description": "Your channeled energy is harder to resist.",
    "prerequisites": ["Channel energy class feature"],
    "prerequisitesFeats": ["Channel energy class feature"],
    "benefit": "Add 2 to the DC of saving throws made to resist the effects of your channel energy ability."
  },
  {
    "name": "Improved Counterspell",
    "type": "General",
    "description": "You are skilled at countering the spells of others using similar spells.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell."
  },
  {
    "name": "Improved Critical",
    "type": "Combat",
    "description": "Attacks made with your chosen weapon are quite deadly.",
    "prerequisites": ["Proficient with weapon","base attack bonus +8"],
    "prerequisitesFeats": ["Proficient with weapon","base attack bonus +8"],
    "benefit": "When using the weapon you selected, your threat range is doubled."
  },
  {
    "name": "Improved Disarm",
    "type": "Combat",
    "description": "You are skilled at knocking weapons from a foe's grasp.",
    "prerequisites": ["Int 13","Combat Expertise"],
    "prerequisitesFeats": ["Int 13","Combat Expertise"],
    "benefit": "You do not provoke an attack of opportunity when performing a disarm combat maneuver. In addition, you receive a +2 bonus on checks made to disarm a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to disarm you."
  },
  {
    "name": "Improved Familiar",
    "type": "General",
    "description": "This feat allows you to acquire a powerful familiar, but only when you could normally acquire a new familiar.",
    "prerequisites": ["Ability to acquire a new familiar","compatible alignment","sufficiently high level (see below)"],
    "prerequisitesFeats": ["Ability to acquire a new familiar","compatible alignment","sufficiently high level (see below)"],
    "benefit": "When choosing a familiar, the creatures listed below are also available to you (see the Pathfinder RPG Bestiary for statistics on these creatures). You may choose a familiar with an alignment up to one step away on each alignment axis (lawful through chaotic, good through evil). Arcane Spellcaster Familiar Alignment Level Celestial hawk1 Neutral good 3rd Dire rat Neutral 3rd Fiendish viper2 Neutral evil 3rd Elemental, Small (any type) Neutral 5th Stirge Neutral 5th Homunculus3 Any 7th Imp Lawful evil 7th Mephit (any type) Neutral 7th Pseudodragon Neutral good 7th Quasit Chaotic evil 7th 1 Or other celestial animal from the standard familiar list. 2 Or other fiendish animal from the standard familiar list. 3 The master must first create the homunculus. Improved familiars otherwise use the rules for regular familiars, with two exceptions: if the creature's type is something other than animal, its type does not change; and improved familiars do not gain the ability to speak with other creatures of their kind (although many of them already have the ability to communicate)."
  },
  {
    "name": "Improved Feint",
    "type": "Combat",
    "description": "You are skilled at fooling your opponents in combat.",
    "prerequisites": ["Int 13","Combat Expertise"],
    "prerequisitesFeats": ["Int 13","Combat Expertise"],
    "benefit": "You can make a Bluff check to feint in combat as a move action."
  },
  {
    "name": "Improved Grapple",
    "type": "Combat",
    "description": "You are skilled at grappling opponents.",
    "prerequisites": ["Dex 13","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Dex 13","Improved Unarmed Strike"],
    "benefit": "You do not provoke an attack of opportunity when performing a grapple combat maneuver. In addition, you receive a +2 bonus on checks made to grapple a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to grapple you."
  },
  {
    "name": "Improved Great Fortitude",
    "type": "General",
    "description": "You can draw upon an inner reserve to resist diseases, poisons, and other grievous harm.",
    "prerequisites": ["Great Fortitude"],
    "prerequisitesFeats": ["Great Fortitude"],
    "benefit": "Once per day, you may reroll a Fortitude save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse."
  },
  {
    "name": "Improved Initiative",
    "type": "Combat",
    "description": "Your quick ref lexes allow you to react rapidly to danger.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +4 bonus on initiative checks."
  },
  {
    "name": "Improved Iron Will",
    "type": "General",
    "description": "Your clarity of thought allows you to resist mental attacks.",
    "prerequisites": ["Iron Will"],
    "prerequisitesFeats": ["Iron Will"],
    "benefit": "Once per day, you may reroll a Will save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse."
  },
  {
    "name": "Improved Lightning Reflexes",
    "type": "General",
    "description": "You have a knack for avoiding danger all around you.",
    "prerequisites": ["Lightning Reflexes"],
    "prerequisitesFeats": ["Lightning Reflexes"],
    "benefit": "Once per day, you may reroll a Ref lex save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse."
  },
  {
    "name": "Improved Overrun",
    "type": "Combat",
    "description": "You are skilled at running down your foes.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +1"],
    "benefit": "You do not provoke an attack of opportunity when performing an overrun combat maneuver. In addition, you receive a +2 bonus on checks made to overrrun a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to overrun you. Targets of your overrun attempt may not choose to avoid you."
  },
  {
    "name": "Improved Precise Shot",
    "type": "Combat",
    "description": "Your ranged attacks ignore anything but total concealment and cover.",
    "prerequisites": ["Dex 19","Point-Blank Shot","Precise Shot","base attack bonus +11"],
    "prerequisitesFeats": ["Dex 19","Point-Blank Shot","Precise Shot","base attack bonus +11"],
    "benefit": "Your ranged attacks ignore the AC bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment. Total cover and total concealment provide their normal benefits against your ranged attacks."
  },
  {
    "name": "Improved Shield Bash",
    "type": "Combat",
    "description": "You can protect yourself with your shield, even if you use it to attack.",
    "prerequisites": ["Shield Proficiency"],
    "prerequisitesFeats": ["Shield Proficiency"],
    "benefit": "When you perform a shield bash, you may still apply the shield's shield bonus to your AC."
  },
  {
    "name": "Improved Sunder",
    "type": "Combat",
    "description": "You are skilled at damaging your foes' weapons and armor.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +1"],
    "benefit": "You do not provoke an attack of opportunity when performing a sunder combat maneuver. In addition, you receive a +2 bonus on checks made to sunder an item. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to sunder your gear."
  },
  {
    "name": "Improved Trip",
    "type": "Combat",
    "description": "You are skilled at sending your opponents to the ground.",
    "prerequisites": ["Int 13","Combat Expertise"],
    "prerequisitesFeats": ["Int 13","Combat Expertise"],
    "benefit": "You do not provoke an attack of opportunity when performing a trip combat maneuver. In addition, you receive a +2 bonus on checks made to trip a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to trip you."
  },
  {
    "name": "Improved Two-Weapon Fighting",
    "type": "Combat",
    "description": "You are skilled at fighting with two weapons.",
    "prerequisites": ["Dex 17","Two-Weapon Fighting","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 17","Two-Weapon Fighting","base attack bonus +6"],
    "benefit": "In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a -5 penalty."
  },
  {
    "name": "Improved Unarmed Strike",
    "type": "Combat",
    "description": "You are skilled at fighting while unarmed.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You are considered to be armed even when unarmed-you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes can deal lethal or nonlethal damage, at your choice."
  },
  {
    "name": "Improved Vital Strike",
    "type": "Combat",
    "description": "You can make a single attack that deals a large amount of damage.",
    "prerequisites": ["Vital Strike","base attack bonus +11"],
    "prerequisitesFeats": ["Vital Strike","base attack bonus +11"],
    "benefit": "When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon's damage dice for the attack three times and add the results together before adding bonuses from Strength, weapon abilities (such as flaming), precision-based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total."
  },
  {
    "name": "Improvised Weapon Mastery",
    "type": "Combat",
    "description": "You can turn nearly any object into a deadly weapon, from a razor-sharp chair leg to a sack of flour.",
    "prerequisites": ["Catch Off-Guard or Throw Anything","base attack bonus +8"],
    "prerequisitesFeats": ["Catch Off-Guard or Throw Anything","base attack bonus +8"],
    "benefit": "You do not suffer any penalties for using an improvised weapon. Increase the amount of damage dealt by the improvised weapon by one step (for example, 1d4 becomes 1d6) to a maximum of 1d8 (2d6 if the improvised weapon is two-handed). The improvised weapon has a critical threat range of 19-20, with a critical multiplier of ײ."
  },
  {
    "name": "Intimidating Prowess",
    "type": "Combat",
    "description": "Your physical might is intimidating to others.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Add your Strength modifier to Intimidate skill checks in addition to your Charisma modifier."
  },
  {
    "name": "Iron Will",
    "type": "General",
    "description": "You are more resistant to mental effects.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Will saving throws."
  },
  {
    "name": "Leadership",
    "type": "General",
    "description": "You attract followers to your cause and a companion to join you on your adventures.",
    "prerequisites": ["Character level 7th"],
    "prerequisitesFeats": ["Character level 7th"],
    "benefit": "This feat enables you to attract a loyal cohort and a number of devoted subordinates who assist you. A cohort is generally an NPC with class levels, while followers are typically lower level NPCs. See Table 5-2 for what level of cohort and how many followers you can recruit."
  },
  {
    "name": "Lightning Reflexes",
    "type": "General",
    "description": "You have faster ref lexes than normal.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Ref lex saving throws."
  },
  {
    "name": "Lightning Stance",
    "type": "Combat",
    "description": "The speed at which you move makes it nearly impossible for opponents to strike you.",
    "prerequisites": ["Dex 17","Dodge","Wind Stance","base attack bonus +11"],
    "prerequisitesFeats": ["Dex 17","Dodge","Wind Stance","base attack bonus +11"],
    "benefit": "If you take two actions to move or a withdraw action in a turn, you gain 50% concealment for 1 round."
  },
  {
    "name": "Lunge",
    "type": "Combat",
    "description": "You can strike foes that would normally be out of reach.",
    "prerequisites": ["Base attack bonus +6"],
    "prerequisitesFeats": ["Base attack bonus +6"],
    "benefit": "You can increase the reach of your melee attacks by 5 feet until the end of your turn by taking a -2 penalty to your AC until your next turn. You must decide to use this ability before any attacks are made."
  },
  {
    "name": "Magical Aptitude",
    "type": "General",
    "description": "You are skilled at spellcasting and using magic items.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Spellcraft checks and Use Magic Device checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Manyshot",
    "type": "Combat",
    "description": "You can fire multiple arrows at a single target.",
    "prerequisites": ["Dex 17","Point-Blank Shot","Rapid Shot","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 17","Point-Blank Shot","Rapid Shot","base attack bonus +6"],
    "benefit": "When making a full-attack action with a bow, your first attack fires two arrows. If the attack hits, both arrows hit. Apply precision-based damage (such as sneak attack) and critical hit damage only once for this attack. Damage bonuses from using a composite bow with a high Strength bonus apply to each arrow, as do other damage bonuses, such as a ranger's favored enemy bonus. Damage reduction and resistances apply separately to each arrow."
  },
  {
    "name": "Martial Weapon Proficiency",
    "type": "Combat",
    "description": "Choose a type of martial weapon. You understand how to use that type of martial weapon in combat.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You make attack rolls with the selected weapon normally (without the non-proficient penalty)."
  },
  {
    "name": "Master Craftsman",
    "type": "General",
    "description": "Your superior crafting skills allow you to create simple magic items.",
    "prerequisites": ["5 ranks in any Craft or Profession skill"],
    "prerequisitesFeats": ["5 ranks in any Craft or Profession skill"],
    "benefit": "Choose one Craft or Profession skill in which you possess at least 5 ranks. You receive a +2 bonus on your chosen Craft or Profession skill. Ranks in your chosen skill count as your caster level for the purposes of qualifying for the Craft Magic Arms and Armor and Craft Wondrous Item feats. You can create magic items using these feats, substituting your ranks in the chosen skill for your total caster level. You must use the chosen skill for the check to create the item. The DC to create the item still increases for any necessary spell requirements (see the magic item creation rules in Chapter 15). You cannot use this feat to create any spell-trigger or spell-activation item."
  },
  {
    "name": "Maximize Spell",
    "type": "Metamagic",
    "description": "Your spells have the maximum possible effect.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "All variable, numeric effects of a spell modified by this feat are maximized. Saving throws and opposed rolls are not affected, nor are spells without random variables. A maximized spell uses up a spell slot three levels higher than the spell's actual level. An empowered, maximized spell gains the separate benefits of each feat: the maximum result plus half the normally rolled result."
  },
  {
    "name": "Medusa's Wrath",
    "type": "Combat",
    "description": "You can take advantage of your opponent's confusion, delivering multiple blows.",
    "prerequisites": ["Improved Unarmed Strike","Gorgon's Fist","Scorpion Style","base attack bonus +11"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Gorgon's Fist","Scorpion Style","base attack bonus +11"],
    "benefit": "Whenever you use the full-attack action and make at least one unarmed strike, you can make two additional unarmed strikes at your highest base attack bonus. These bonus attacks must be made against a dazed, flat-footed, paralyzed, staggered, stunned, or unconscious foe."
  },
  {
    "name": "Mobility",
    "type": "Combat",
    "description": "You can easily move through a dangerous melee.",
    "prerequisites": ["Dex 13","Dodge"],
    "prerequisitesFeats": ["Dex 13","Dodge"],
    "benefit": "You get a +4 dodge bonus to Armor Class against attacks of opportunity caused when you move out of or within a threatened area. A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses. Dodge bonuses stack with each other, unlike most types of bonuses."
  },
  {
    "name": "Mounted Archery",
    "type": "Combat",
    "description": "You are skilled at making ranged attacks while mounted.",
    "prerequisites": ["Ride 1 rank","Mounted Combat"],
    "prerequisitesFeats": ["Ride 1 rank","Mounted Combat"],
    "benefit": "The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running."
  },
  {
    "name": "Mounted Combat",
    "type": "Combat",
    "description": "You are adept at guiding your mount through combat.",
    "prerequisites": ["Ride 1 rank"],
    "prerequisitesFeats": ["Ride 1 rank"],
    "benefit": "Once per round when your mount is hit in combat, you may attempt a Ride check (as an immediate action) to negate the hit. The hit is negated if your Ride check result is greater than the opponent's attack roll."
  },
  {
    "name": "Natural Spell",
    "type": "General",
    "description": "You can cast spells even while in a form that cannot normally cast spells.",
    "prerequisites": ["Wis 13","wild shape class feature"],
    "prerequisitesFeats": ["Wis 13","wild shape class feature"],
    "benefit": "You can complete the verbal and somatic components of spells while using wild shape. You substitute various noises and gestures for the normal verbal and somatic components of a spell. You can also use any material components or focuses you possess, even if such items are melded within your current form. This feat does not permit the use of magic items while you are in a form that could not ordinarily use them, and you do not gain the ability to speak while using wild shape."
  },
  {
    "name": "Nimble Moves",
    "type": "General",
    "description": "You can move across a single obstacle with ease.",
    "prerequisites": ["Dex 13"],
    "prerequisitesFeats": ["Dex 13"],
    "benefit": "Whenever you move, you may move through 5 feet of difficult terrain each round as if it were normal terrain. This feat allows you to take a 5-foot step into difficult terrain."
  },
  {
    "name": "Penetrating Strike",
    "type": "Combat",
    "description": "Your attacks are capable of penetrating the defenses of some creatures.",
    "prerequisites": ["Weapon Focus","12th-level fighter","proficiency with weapon"],
    "prerequisitesFeats": ["Weapon Focus","12th-level fighter","proficiency with weapon"],
    "benefit": "Your attacks made with weapons selected with Weapon Focus ignore up to 5 points of damage reduction. This feat does not apply to damage reduction without a type (such as DR 10/-)."
  },
  {
    "name": "Persuasive",
    "type": "General",
    "description": "You are skilled at swaying attitudes and intimidating others into your way of thinking.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on Diplomacy and Intimidate skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Pinpoint Targeting",
    "type": "Combat",
    "description": "You can target the weak points in your opponent's armor.",
    "prerequisites": ["Dex 19","Improved Precise Shot","Point-Blank Shot","Precise Shot","base attack bonus +16"],
    "prerequisitesFeats": ["Dex 19","Improved Precise Shot","Point-Blank Shot","Precise Shot","base attack bonus +16"],
    "benefit": "As a standard action, make a single ranged attack. The target does not gain any armor, natural armor, or shield bonuses to its Armor Class. You do not gain the benefit of this feat if you move this round."
  },
  {
    "name": "Point-Blank Shot",
    "type": "Combat",
    "description": "You are especially accurate when making ranged attacks against close targets.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet."
  },
  {
    "name": "Power Attack",
    "type": "Combat",
    "description": "You can make exceptionally deadly melee attacks by sacrificing accuracy for strength.",
    "prerequisites": ["Str 13","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","base attack bonus +1"],
    "benefit": "You can choose to take a -1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modif ier on damage rolls. This bonus to damage is halved (-50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by -1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage."
  },
  {
    "name": "Precise Shot",
    "type": "Combat",
    "description": "You are adept at firing ranged attacks into melee.",
    "prerequisites": ["Point-Blank Shot"],
    "prerequisitesFeats": ["Point-Blank Shot"],
    "benefit": "You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard -4 penalty on your attack roll."
  },
  {
    "name": "Quick Draw",
    "type": "Combat",
    "description": "You can draw weapons faster than most.",
    "prerequisites": ["Base attack bonus +1"],
    "prerequisitesFeats": ["Base attack bonus +1"],
    "benefit": "You can draw a weapon as a free action instead of as a move action. You can draw a hidden weapon (see the Sleight of Hand skill) as a move action. A character who has selected this feat may throw weapons at his full normal rate of attacks (much like a character with a bow). Alchemical items, potions, scrolls, and wands cannot be drawn quickly using this feat."
  },
  {
    "name": "Quicken Spell",
    "type": "Metamagic",
    "description": "You can cast spells in a fraction of the normal time.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Casting a quickened spell is a swift action. You can perform another action, even casting another spell, in the same round as you cast a quickened spell. A spell whose casting time is more than 1 round or 1 fullround action cannot be quickened. A quickened spell uses up a spell slot four levels higher than the spell's actual level. Casting a quickened spell doesn't provoke an attack of opportunity."
  },
  {
    "name": "Rapid Shot",
    "type": "Combat",
    "description": "You can make an additional ranged attack.",
    "prerequisites": ["Dex 13","Point-Blank Shot"],
    "prerequisitesFeats": ["Dex 13","Point-Blank Shot"],
    "benefit": "When making a full-attack action with a ranged weapon, you can fire one additional time this round at your highest bonus. All of your attack rolls take a -2 penalty when using Rapid Shot."
  },
  {
    "name": "Ride-By Attack",
    "type": "Combat",
    "description": "While mounted and charging, you can move, strike at a foe, and then continue moving.",
    "prerequisites": ["Ride 1 rank","Mounted Combat"],
    "prerequisitesFeats": ["Ride 1 rank","Mounted Combat"],
    "benefit": "When you are mounted and use the charge action, you may move and attack as if with a standard charge and then move again (continuing the straight line of the charge). Your total movement for the round can't exceed double your mounted speed. You and your mount do not provoke an attack of opportunity from the opponent that you attack."
  },
  {
    "name": "Run",
    "type": "General",
    "description": "You are swift of foot.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When running, you move five times your normal speed (if wearing medium, light, or no armor and carrying no more than a medium load) or four times your speed (if wearing heavy armor or carrying a heavy load). If you make a jump after a running start (see the Acrobatics skill description), you gain a +4 bonus on your Acrobatics check. While running, you retain your Dexterity bonus to your Armor Class."
  },
  {
    "name": "Scorpion Style",
    "type": "Combat",
    "description": "You can perform an unarmed strike that greatly hampers your target's movement.",
    "prerequisites": ["Improved Unarmed Strike"],
    "prerequisitesFeats": ["Improved Unarmed Strike"],
    "benefit": "To use this feat, you must make a single unarmed attack as a standard action. If this unarmed attack hits, you deal damage normally, and the target's base land speed is reduced to 5 feet for a number of rounds equal to your Wisdom modifier unless it makes a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier)."
  },
  {
    "name": "Scribe Scroll",
    "type": "Item Creation",
    "description": "You can create magic scrolls.",
    "prerequisites": ["Caster level 1st"],
    "prerequisitesFeats": ["Caster level 1st"],
    "benefit": "You can create a scroll of any spell that you know. Scribing a scroll takes 2 hours if its base price is 250 gp or less, otherwise scribing a scroll takes 1 day for each 1,000 gp in its base price. To scribe a scroll, you must use up raw materials costing half of this base price. See the magic item creation rules in Chapter 15 for more information."
  },
  {
    "name": "Selective Channeling",
    "type": "General",
    "description": "You can choose whom to affect when you channel energy.",
    "prerequisites": ["Cha 13","channel energy class feature"],
    "prerequisitesFeats": ["Cha 13","channel energy class feature"],
    "benefit": "When you channel energy, you can choose a number of targets in the area up to your Charisma modifier. These targets are not affected by your channeled energy."
  },
  {
    "name": "Self-Sufficient",
    "type": "General",
    "description": "You know how to get along in the wild and how to effectively treat wounds.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Heal checks and Survival checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Shatter Defenses",
    "type": "Combat",
    "description": "Your skill with your chosen weapon leaves opponents unable to defend themselves if you strike them when their defenses are already compromised.",
    "prerequisites": ["Weapon Focus","Dazzling Display","base attack bonus +6","proficiency with weapon"],
    "prerequisitesFeats": ["Weapon Focus","Dazzling Display","base attack bonus +6","proficiency with weapon"],
    "benefit": "Any shaken, frightened, or panicked opponent hit by you this round is flat-footed to your attacks until the end of your next turn. This includes any additional attacks you make this round."
  },
  {
    "name": "Shield Focus",
    "type": "Combat",
    "description": "You are skilled at def lecting blows with your shield.",
    "prerequisites": ["Shield Proficiency","base attack bonus +1"],
    "prerequisitesFeats": ["Shield Proficiency","base attack bonus +1"],
    "benefit": "Increase the AC bonus granted by any shield you are using by 1."
  },
  {
    "name": "Shield Proficiency",
    "type": "Combat",
    "description": "You are trained in how to properly use a shield.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you use a shield (except a tower shield), the shield's armor check penalty only applies to Strength- and Dexterity-based skills."
  },
  {
    "name": "Shield Slam",
    "type": "Combat",
    "description": "In the right position, your shield can be used to send opponents flying.",
    "prerequisites": ["Improved Shield Bash","Shield Proficiency","Two-Weapon Fighting","base attack bonus +6"],
    "prerequisitesFeats": ["Improved Shield Bash","Shield Proficiency","Two-Weapon Fighting","base attack bonus +6"],
    "benefit": "Any opponents hit by your shield bash are also hit with a free bull rush attack, substituting your attack roll for the combat maneuver check (see Chapter 8). This bull rush does not provoke an attack of opportunity. Opponents who cannot move back due to a wall or other surface are knocked prone after moving the maximum possible distance. You may choose to move with your target if you are able to take a 5-foot step or to spend an action to move this turn."
  },
  {
    "name": "Shot on the Run",
    "type": "Combat",
    "description": "You can move, fire a ranged weapon, and move again before your foes can react.",
    "prerequisites": ["Dex 13","Dodge","Mobility","Point-Blank Shot","base attack bonus +4"],
    "prerequisitesFeats": ["Dex 13","Dodge","Mobility","Point-Blank Shot","base attack bonus +4"],
    "benefit": "As a full-round action, you can move up to your speed and make a single ranged attack at any point during your movement."
  },
  {
    "name": "Sickening Critical",
    "type": "Combat",
    "description": "Your critical hits cause opponents to become sickened.",
    "prerequisites": ["Critical Focus","base attack bonus +11"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +11"],
    "benefit": "Whenever you score a critical hit, your opponent becomes sickened for 1 minute. The effects of this feat do not stack. Additional hits instead add to the effect's duration."
  },
  {
    "name": "Silent Spell",
    "type": "Metamagic",
    "description": "You can cast your spells without making any sound.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "A silent spell can be cast with no verbal components. Spells without verbal components are not affected. A silent spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Simple Weapon Proficiency",
    "type": "Combat",
    "description": "You are trained in the use of basic weapons.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You make attack rolls with simple weapons without penalty."
  },
  {
    "name": "Skill Focus",
    "type": "General",
    "description": "Choose a skill. You are particularly adept at that skill.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +3 bonus on all checks involving the chosen skill. If you have 10 or more ranks in that skill, this bonus increases to +6."
  },
  {
    "name": "Snatch Arrows",
    "type": "Combat",
    "description": "Instead of knocking an arrow or ranged attack aside, you can catch it in mid-flight.",
    "prerequisites": ["Dex 15","Deflect Arrows","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Dex 15","Deflect Arrows","Improved Unarmed Strike"],
    "benefit": "When using the Def lect Arrows feat you may choose to catch the weapon instead of just def lecting it. Thrown weapons can immediately be thrown back as an attack against the original attacker (even though it isn't your turn) or kept for later use. You must have at least one hand free (holding nothing) to use this feat."
  },
  {
    "name": "Spell Focus",
    "type": "General",
    "description": "Choose a school of magic. Any spells you cast of that school are more difficult to resist.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select."
  },
  {
    "name": "Spell Mastery",
    "type": "General",
    "description": "You have mastered a small handful of spells, and can prepare these spells without referencing your spellbooks at all.",
    "prerequisites": ["1st-level wizard"],
    "prerequisitesFeats": ["1st-level wizard"],
    "benefit": "Each time you take this feat, choose a number of spells that you already know equal to your Intelligence modifier. From that point on, you can prepare these spells without referring to a spellbook."
  },
  {
    "name": "Spell Penetration",
    "type": "General",
    "description": "Your spells break through spell resistance more easily than most.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature's spell resistance."
  },
  {
    "name": "Spellbreaker",
    "type": "Combat",
    "description": "You can strike at enemy spellcasters who fail to cast defensively when you threaten them.",
    "prerequisites": ["Disruptive","10th-level fighter"],
    "prerequisitesFeats": ["Disruptive","10th-level fighter"],
    "benefit": "Enemies in your threatened area that fail their checks to cast spells defensively provoke attacks of opportunity from you."
  },
  {
    "name": "Spirited Charge",
    "type": "Combat",
    "description": "Your mounted charge attacks deal a tremendous amount of damage.",
    "prerequisites": ["Ride 1 rank","Mounted Combat","Ride-By Attack"],
    "prerequisitesFeats": ["Ride 1 rank","Mounted Combat","Ride-By Attack"],
    "benefit": "When mounted and using the charge action, you deal double damage with a melee weapon (or triple damage with a lance)."
  },
  {
    "name": "Spring Attack",
    "type": "Combat",
    "description": "You can deftly move up to a foe, strike, and withdraw before he can react.",
    "prerequisites": ["Dex 13","Dodge","Mobility","base attack bonus +4"],
    "prerequisitesFeats": ["Dex 13","Dodge","Mobility","base attack bonus +4"],
    "benefit": "As a full-round action, you can move up to your speed and make a single melee attack without provoking any attacks of opportunity from the target of your attack. You can move both before and after the attack, but you must move at least 10 feet before the attack and the total distance that you move cannot be greater than your speed. You cannot use this ability to attack a foe that is adjacent to you at the start of your turn."
  },
  {
    "name": "Staggering Critical",
    "type": "Combat",
    "description": "Your critical hits cause opponents to slow down.",
    "prerequisites": ["Critical Focus","base attack bonus +13"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +13"],
    "benefit": "Whenever you score a critical hit, your opponent becomes staggered for 1d4+1 rounds. A successful Fortitude save reduces the duration to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration."
  },
  {
    "name": "Stand Still",
    "type": "Combat",
    "description": "You can stop foes that try to move past you.",
    "prerequisites": ["Combat Reflexes"],
    "prerequisitesFeats": ["Combat Reflexes"],
    "benefit": "When a foe provokes an attack of opportunity due to moving through your adjacent squares, you can make a combat maneuver check as your attack of opportunity. If successful, the enemy cannot move for the rest of his turn. An enemy can still take the rest of his action, but cannot move. This feat also applies to any creature that attempts to move from a square that is adjacent to you if such movement provokes an attack of opportunity."
  },
  {
    "name": "Stealthy",
    "type": "General",
    "description": "You are good at avoiding unwanted attention and slipping out of bonds.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Escape Artist and Stealth skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Step Up",
    "type": "Combat",
    "description": "You can close the distance when a foe tries to move away.",
    "prerequisites": ["Base attack bonus +1"],
    "prerequisitesFeats": ["Base attack bonus +1"],
    "benefit": "Whenever an adjacent foe attempts to take a 5-foot step away from you, you may also make a 5-foot step as an immediate action so long as you end up adjacent to the foe that triggered this ability. If you take this step, you cannot take a 5-foot step during your next turn. If you take an action to move during your next turn, subtract 5 feet from your total movement."
  },
  {
    "name": "Still Spell",
    "type": "Metamagic",
    "description": "You can cast spells without moving.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "A stilled spell can be cast with no somatic components. Spells without somatic components are not affected. A stilled spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Strike Back",
    "type": "Combat",
    "description": "You can strike at foes that attack you using their superior reach, by targeting their limbs or weapons as they come at you.",
    "prerequisites": ["Base attack bonus +11"],
    "prerequisitesFeats": ["Base attack bonus +11"],
    "benefit": "You can ready an action to make a melee attack against any foe that attacks you in melee, even if the foe is outside of your reach."
  },
  {
    "name": "Stunning Critical",
    "type": "Combat",
    "description": "Your critical hits cause opponents to become stunned.",
    "prerequisites": ["Critical Focus","Staggering Critical","base attack bonus +17"],
    "prerequisitesFeats": ["Critical Focus","Staggering Critical","base attack bonus +17"],
    "benefit": "Whenever you score a critical hit, your opponent becomes stunned for 1d4 rounds. A successful Fortitude save reduces this to staggered for 1d4 rounds. The DC of this Fortitude save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration."
  },
  {
    "name": "Stunning Fist",
    "type": "Combat",
    "description": "You know just where to strike to temporarily stun a foe.",
    "prerequisites": ["Dex 13","Wis 13","Improved Unarmed Strike","base attack bonus +8"],
    "prerequisitesFeats": ["Dex 13","Wis 13","Improved Unarmed Strike","base attack bonus +8"],
    "benefit": "You must declare that you are using this feat before you make your attack roll (thus, a failed attack roll ruins the attempt). Stunning Fist forces a foe damaged by your unarmed attack to make a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier), in addition to dealing damage normally. A defender who fails this saving throw is stunned for 1 round (until just before your next turn). A stunned character drops everything held, can't take actions, loses any Dexterity bonus to AC, and takes a -2 penalty to AC. You may attempt a stunning attack once per day for every four levels you have attained (but see Special), and no more than once per round. Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be stunned."
  },
  {
    "name": "Throw Anything",
    "type": "Combat",
    "description": "You are used to throwing things you have on hand.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You do not suffer any penalties for using an improvised ranged weapon. You receive a +1 circumstance bonus on attack rolls made with thrown splash weapons."
  },
  {
    "name": "Tiring Critical",
    "type": "Combat",
    "description": "Your critical hits cause opponents to become fatigued.",
    "prerequisites": ["Critical Focus","base attack bonus +13"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +13"],
    "benefit": "Whenever you score a critical hit, your opponent becomes fatigued. This feat has no additional effect on a fatigued or exhausted creature."
  },
  {
    "name": "Toughness",
    "type": "General",
    "description": "You have enhanced physical stamina.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain +3 hit points. For every Hit Die you possess beyond 3, you gain an additional +1 hit point. If you have more than 3 Hit Dice, you gain +1 hit points whenever you gain a Hit Die (such as when you gain a level)."
  },
  {
    "name": "Tower Shield Proficiency",
    "type": "Combat",
    "description": "You are trained in how to properly use a tower shield.",
    "prerequisites": ["Shield Proficiency"],
    "prerequisitesFeats": ["Shield Proficiency"],
    "benefit": "When you use a tower shield, the shield's armor check penalty only applies to Strength and Dexterity-based skills."
  },
  {
    "name": "Trample",
    "type": "Combat",
    "description": "While mounted, you can ride down opponents and trample them under your mount.",
    "prerequisites": ["Ride 1 rank","Mounted Combat"],
    "prerequisitesFeats": ["Ride 1 rank","Mounted Combat"],
    "benefit": "When you attempt to overrun an opponent while mounted, your target may not choose to avoid you. Your mount may make one hoof attack against any target you knock down, gaining the standard +4 bonus on attack rolls against prone targets."
  },
  {
    "name": "Turn Undead",
    "type": "General",
    "description": "Calling upon higher powers, you cause undead to flee from the might of your unleashed divine energy.",
    "prerequisites": ["Channel positive energy class feature"],
    "prerequisitesFeats": ["Channel positive energy class feature"],
    "benefit": "You can, as a standard action, use one of your uses of channel positive energy to cause all undead within 30 feet of you to flee, as if panicked. Undead receive a Will save to negate the effect. The DC for this Will save is equal to 10 + 1/2 your cleric level + your Charisma modifier. Undead that fail their save flee for 1 minute. Intelligent undead receive a new saving throw each round to end the effect. If you use channel energy in this way, it has no other effect (it does not heal or harm nearby creatures)."
  },
  {
    "name": "Two-Weapon Defense",
    "type": "Combat",
    "description": "You are skilled at defending yourself while dual-wielding.",
    "prerequisites": ["Dex 15","Two-Weapon Fighting"],
    "prerequisitesFeats": ["Dex 15","Two-Weapon Fighting"],
    "benefit": "When wielding a double weapon or two weapons (not including natural weapons or unarmed strikes), you gain a +1 shield bonus to your AC. When you are fighting defensively or using the total defense action, this shield bonus increases to +2."
  },
  {
    "name": "Two-Weapon Fighting",
    "type": "Combat",
    "description": "You can fight with a weapon wielded in each of your hands. You can make one extra attack each round with the secondary weapon.",
    "prerequisites": ["Dex 15"],
    "prerequisitesFeats": ["Dex 15"],
    "benefit": "Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See Two-Weapon Fighting in Chapter 8."
  },
  {
    "name": "Two-Weapon Rend",
    "type": "Combat",
    "description": "Striking with both of your weapons simultaneously, you can use them to deliver devastating wounds.",
    "prerequisites": ["Dex 17","Double Slice","Improved Two-Weapon Fighting","Two-Weapon Fighting","base attack bonus +11"],
    "prerequisitesFeats": ["Dex 17","Double Slice","Improved Two-Weapon Fighting","Two-Weapon Fighting","base attack bonus +11"],
    "benefit": "If you hit an opponent with both your primary hand and your off-hand weapon, you deal an additional 1d10 points of damage plus 1-1/2 times your Strength modifier. You can only deal this additional damage once each round."
  },
  {
    "name": "Unseat",
    "type": "Combat",
    "description": "You are skilled at unseating your mounted opponents.",
    "prerequisites": ["Str 13","Ride 1 rank","Mounted Combat","Power Attack","Improved Bull Rush","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Ride 1 rank","Mounted Combat","Power Attack","Improved Bull Rush","base attack bonus +1"],
    "benefit": "When charging an opponent while mounted and wielding a lance, resolve the attack as normal. If it hits, you may immediately make a free bull rush attempt in addition to the normal damage. If successful, the target is knocked off his horse and lands prone in a space adjacent to his mount that is directly away from you."
  },
  {
    "name": "Vital Strike",
    "type": "Combat",
    "description": "You make a single attack that deals significantly more damage than normal.",
    "prerequisites": ["Base attack bonus +6"],
    "prerequisitesFeats": ["Base attack bonus +6"],
    "benefit": "When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon's damage dice for the attack twice and add the results together before adding bonuses from Strength, weapon abilities (such as flaming), precision-based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total."
  },
  {
    "name": "Weapon Finesse",
    "type": "Combat",
    "description": "You are trained in using your agility in melee combat, as opposed to brute strength.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "With a light weapon, elven curve blade, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls."
  },
  {
    "name": "Weapon Focus",
    "type": "Combat",
    "description": "Choose one type of weapon. You can also choose unarmed strike or grapple (or ray, if you are a spellcaster) as your weapon for the purposes of this feat.",
    "prerequisites": ["Proficiency with selected weapon","base attack bonus +1"],
    "prerequisitesFeats": ["Proficiency with selected weapon","base attack bonus +1"],
    "benefit": "You gain a +1 bonus on all attack rolls you make using the selected weapon."
  },
  {
    "name": "Weapon Specialization",
    "type": "Combat",
    "description": "You are skilled at dealing damage with one weapon. Choose one type of weapon (including unarmed strike or grapple) for which you have already selected the Weapon Focus feat. You deal extra damage when using this weapon.",
    "prerequisites": ["Proficiency with selected weapon","Weapon Focus with selected weapon","fighter level 4th"],
    "prerequisitesFeats": ["Proficiency with selected weapon","Weapon Focus with selected weapon","fighter level 4th"],
    "benefit": "You gain a +2 bonus on all damage rolls you make using the selected weapon."
  },
  {
    "name": "Whirlwind Attack",
    "type": "Combat",
    "description": "You can strike out at every foe within reach.",
    "prerequisites": ["Dex 13","Int 13","Combat Expertise","Dodge","Mobility","Spring Attack","base attack bonus +4"],
    "prerequisitesFeats": ["Dex 13","Int 13","Combat Expertise","Dodge","Mobility","Spring Attack","base attack bonus +4"],
    "benefit": "When you use the full-attack action, you can give up your regular attacks and instead make one melee attack at your highest base attack bonus against each opponent within reach. You must make a separate attack roll against each opponent. When you use the Whirlwind Attack feat, you also forfeit any bonus or extra attacks granted by other feats, spells, or abilities."
  },
  {
    "name": "Widen Spell",
    "type": "Metamagic",
    "description": "You can cast your spells so that they occupy a larger space.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can alter a burst, emanation, or spread-shaped spell to increase its area. Any numeric measurements of the spell's area increase by 100%. A widened spell uses up a spell slot three levels higher than the spell's actual level. Spells that do not have an area of one of these four sorts are not affected by this feat."
  },
  {
    "name": "Wind Stance",
    "type": "Combat",
    "description": "Your erratic movements make it difficult for enemies to pinpoint your location.",
    "prerequisites": ["Dex 15","Dodge","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 15","Dodge","base attack bonus +6"],
    "benefit": "If you move more than 5 feet this turn, you gain 20% concealment for 1 round against ranged attacks."
  },
  {
    "name": "Additional Traits",
    "type": "General",
    "description": "You have more traits than normal.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain two character traits of your choice (see Chapter 8). These traits must be chosen from different lists, and cannot be chosen from lists from which you have already selected a character trait. You must meet any additional qualifications for the character traits you choose."
  },
  {
    "name": "Ability Focus",
    "type": "Monster",
    "description": "One of this creature's special attacks is particularly difficult to resist.",
    "prerequisites": ["Special attack"],
    "prerequisitesFeats": ["Special attack"],
    "benefit": "Choose one of the creature's special attacks. Add +2 to the DC for all saving throws against the special attack on which the creature focuses."
  },
  {
    "name": "Awesome Blow",
    "type": "Monster, Combat",
    "description": "This creature can send opponents flying.",
    "prerequisites": ["Str 25","Power Attack","Improved Bull Rush","size Large or larger"],
    "prerequisitesFeats": ["Str 25","Power Attack","Improved Bull Rush","size Large or larger"],
    "benefit": "As a standard action, the creature may perform an awesome blow combat maneuver. If the creature's maneuver succeeds against a corporeal opponent smaller than itself, its opponent takes damage (typically slam damage plus Strength bonus) and is knocked flying 10 feet in a direction of the attacking creature's choice and falls prone. The attacking creature can only push the opponent in a straight line, and the opponent can't move closer to the attacking creature than the square it started in. If an obstacle prevents the completion of the opponent's move, the opponent and the obstacle each take 1d6 points of damage, and the opponent is knocked prone in the space adjacent to the obstacle."
  },
  {
    "name": "Craft Construct",
    "type": "Item Creation",
    "description": "You can create construct creatures like golems.",
    "prerequisites": ["Caster level 5th","Craft Magic Arms and Armor","Craft Wondrous Item"],
    "prerequisitesFeats": ["Caster level 5th","Craft Magic Arms and Armor","Craft Wondrous Item"],
    "benefit": "You can create any construct whose prerequisites you meet. The act of animating a construct takes one day for each 1,000 gp in its market price. To create a construct, you must use up raw materials costing half of its base price, plus the full cost of the basic body created for the construct. Each construct has a special section that summarizes its costs and other prerequisites. A newly created construct has average hit points for its Hit Dice."
  },
  {
    "name": "Empower Spell-Like Ability",
    "type": "Monster",
    "description": "One of this creature's spell-like abilities is particularly potent and powerful.",
    "prerequisites": ["Spell-like ability at caster level 6th or higher"],
    "prerequisitesFeats": ["Spell-like ability at caster level 6th or higher"],
    "benefit": "Choose one of the creature's spell-like abilities, subject to the restrictions below. The creature can use that ability as an empowered spell-like ability three times per day (or less, if the ability is normally usable only once or twice per day). When a creature uses an empowered spell-like ability, all variable, numeric effects of the spell-like ability are increased by half (+50%). Saving throws and opposed rolls are not affected. Spell-like abilities without random variables are not affected. The creature can only select a spell-like ability duplicating a spell with a level less than or equal to 1/2 its caster level (round down) - 2. For a summary, see the table in the description of the Quicken Spell-Like Ability feat on page 316."
  },
  {
    "name": "Flyby Attack",
    "type": "Monster",
    "description": "This creature can make an attack before and after it moves while flying.",
    "prerequisites": ["Fly speed"],
    "prerequisitesFeats": ["Fly speed"],
    "benefit": "When flying, the creature can take a move action and another standard action at any point during the move. The creature cannot take a second move action during a round when it makes a flyby attack."
  },
  {
    "name": "Hover",
    "type": "Monster",
    "description": "This creature can hover in place with ease and can kick up clouds of dust and debris.",
    "prerequisites": ["Fly speed"],
    "prerequisitesFeats": ["Fly speed"],
    "benefit": "A creature with this feat can halt its movement while flying, allowing it to hover without needing to make a Fly skill check. If a creature of size Large or larger with this feat hovers within 20 feet of the ground in an area with lots of loose debris, the draft from its wings creates a hemispherical cloud with a radius of 60 feet. The winds generated can snuff torches, small campfires, exposed lanterns, and other small, open flames of non-magical origin. Clear vision within the cloud is limited to 10 feet. Creatures have concealment at 15 to 20 feet (20% miss chance). At 25 feet or more, creatures have total concealment (50% miss chance, and opponents cannot use sight to locate the creature)."
  },
  {
    "name": "Improved Natural Armor",
    "type": "Monster",
    "description": "This creature's hide is tougher than most.",
    "prerequisites": ["Natural armor","Con 13"],
    "prerequisitesFeats": ["Natural armor","Con 13"],
    "benefit": "The creature's natural armor bonus increases by +1."
  },
  {
    "name": "Improved Natural Attack",
    "type": "Monster",
    "description": "Attacks made by one of this creature's natural attacks leave vicious wounds.",
    "prerequisites": ["Natural weapon","base attack bonus +4"],
    "prerequisitesFeats": ["Natural weapon","base attack bonus +4"],
    "benefit": "Choose one of the creature's natural attack forms (not an unarmed strike). The damage for this natural attack increases by one step on the following list, as if the creature's size had increased by one category. Damage dice increase as follows: 1d2, 1d3, 1d4, 1d6, 1d8, 2d6, 3d6, 4d6, 6d6, 8d6, 12d6. A weapon or attack that deals 1d10 points of damage increases as follows: 1d10, 2d8, 3d8, 4d8, 6d8, 8d8, 12d8."
  },
  {
    "name": "Multiattack",
    "type": "Monster, Combat",
    "description": "This creature is particularly skilled at making attacks with its natural weapons.",
    "prerequisites": ["Three or more natural attacks"],
    "prerequisitesFeats": ["Three or more natural attacks"],
    "benefit": "The creature's secondary attacks with natural weapons take only a -2 penalty."
  },
  {
    "name": "Quicken Spell-Like Ability",
    "type": "Monster",
    "description": "This creature can use one of its spell-like abilities with next to no effort.",
    "prerequisites": ["Spell-like ability at CL 10th or higher"],
    "prerequisitesFeats": ["Spell-like ability at CL 10th or higher"],
    "benefit": "Choose one of the creature's spell-like abilities, subject to the restrictions described in this feat. The creature can use the chosen spell-like ability as a quickened spell-like ability three times per day (or less, if the ability is normally usable only once or twice per day). Using a quickened spell-like ability is a swift action that does not provoke an attack of opportunity. The creature can perform another action-including the use of another spell-like ability (but not another swift action)-in the same round that it uses a quickened spell-like ability. The creature may use only one quickened spell-like ability per round. The creature can only select a spell-like ability duplicating a spell with a level less than or equal to 1/2 its caster level (round down) - 4. For a summary, see the table on page 316. A spell-like ability that duplicates a spell with a casting time greater than 1 full round cannot be quickened."
  },
  {
    "name": "Snatch",
    "type": "Monster",
    "description": "This creature can grab other creatures with ease.",
    "prerequisites": ["Size Huge or larger"],
    "prerequisitesFeats": ["Size Huge or larger"],
    "benefit": "The creature can start a grapple when it hits with a claw or bite attack, as though it had the grab ability. If it grapples a creature three or more sizes smaller, it squeezes each round for automatic bite or claw damage with a successful grapple check. A snatched opponent held in the creature's mouth is not allowed a Reflex save against the creature's breath weapon, if it has one. The creature can drop a creature it has snatched as a free action or use a standard action to fling it aside. A f lung creature travels 1d6 X 10 feet, and takes 1d6 points of damage per 10 feet traveled. If the creature flings a snatched opponent while flying, the opponent takes this amount or falling damage, whichever is greater."
  },
  {
    "name": "Wingover",
    "type": "Monster",
    "description": "This creature can make turns with ease while flying.",
    "prerequisites": ["Fly speed"],
    "prerequisitesFeats": ["Fly speed"],
    "benefit": "Once each round, a creature with this feat can turn up to 180 degrees as a free action without making a Fly skill check. This free turn does not consume any additional movement from the creature."
  },
  {
    "name": "Allied Spellcaster",
    "type": "General",
    "description": "With the aid of an ally, you are skilled at piercing the protections of other creatures with your spells.",
    "prerequisites": ["Caster level 1st"],
    "prerequisitesFeats": ["Caster level 1st"],
    "benefit": "Whenever you are adjacent to an ally who also has this feat, you receive a +2 competence bonus on level checks made to overcome spell resistance. If your ally has the same spell prepared (or known with a slot available if they are spontaneous spellcasters), this bonus increases to +4 and you receive a +1 bonus to the caster level for all leveldependent variables, such as duration, range, and effect."
  },
  {
    "name": "Arcane Blast",
    "type": "General",
    "description": "You can convert any spell into an attack.",
    "prerequisites": ["Arcane spellcaster","caster level 10th"],
    "prerequisitesFeats": ["Arcane spellcaster","caster level 10th"],
    "benefit": "As a standard action, you can sacrifice a prepared spell or unused spell slot of 1st level or higher and transform it into a ray, targeting any foe within 30 feet as a ranged touch attack. This attack deals 2d6 points of damage plus an additional 1d6 points of damage for every level of the spell or spell slot you sacrificed. 0-level spells may not be sacrificed in this manner."
  },
  {
    "name": "Arcane Shield",
    "type": "General",
    "description": "You can convert any spell into a defense.",
    "prerequisites": ["Arcane spellcaster","caster level 10th"],
    "prerequisitesFeats": ["Arcane spellcaster","caster level 10th"],
    "benefit": "As a immediate action, you can sacrifice a prepared spell or unused spell slot of 1st level or higher and gain a def lection bonus to AC equal to the level of the spell or spell slot you sacrificed for 1 round. 0-level spells may not be sacrificed in this manner."
  },
  {
    "name": "Arcane Talent",
    "type": "General",
    "description": "Magic is in your blood, and at your fingertips.",
    "prerequisites": ["Cha 10; elf","half-elf","or gnome"],
    "prerequisitesFeats": ["Cha 10; elf","half-elf","or gnome"],
    "benefit": "Choose a 0-level spell from the sorcerer/wizard spell list. You can cast this spell three times per day as a spell-like ability. The caster level is equal to your character level. The save DC is 10 + your Charisma modifier."
  },
  {
    "name": "Aspect of the Beast",
    "type": "General",
    "description": "Whether by magic or a curse of your blood, some part of you is more beast than man.",
    "prerequisites": ["wild shape class feature","see Special"],
    "prerequisitesFeats": ["wild shape class feature","see Special"],
    "benefit": "Your bestial nature manifests itself in one of the following ways. You choose the manifestation when you choose the feat, and then you cannot change it. Night Senses (Ex): If your base race has normal vision, you gain low-light vision. If your base race has low-light vision, you gain darkvision out to a range of 30 feet. If your base race has darkvision, the range of your darkvision increases by 30 feet. Claws of the Beast (Ex): You grow a pair of claws. These claws are primary attacks that deal 1d4 points of damage (1d3 if you are Small). Predator's Leap (Ex): You can make a running jump without needing to run 10 feet before you jump. Wild Instinct (Ex): You gain a +2 bonus on initiative checks and a +2 bonus on Survival skill checks."
  },
  {
    "name": "Bashing Finish",
    "type": "Combat",
    "description": "You follow a powerful blow from your weapon with an opportunistic bash from your shield.",
    "prerequisites": ["Improved Shield Bash","Shield Master","Two-Weapon Fighting","base attack bonus +11"],
    "prerequisitesFeats": ["Improved Shield Bash","Shield Master","Two-Weapon Fighting","base attack bonus +11"],
    "benefit": "Whenever you score a critical hit with a melee weapon, you can make a shield bash attack against the same target using the same bonus as a free action."
  },
  {
    "name": "Bloody Assault",
    "type": "Combat",
    "description": "Sacrificing accuracy, you can inflict bloody wounds that are slow to heal.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +6"],
    "benefit": "You can choose to take a -5 penalty on all melee attack rolls and combat maneuver checks to inflict 1d4 points of bleed damage with your weapon melee attacks, in addition to the normal damage dealt by the weapon. A creature continues to take bleed damage every round at the start of its turn. Bleed damage can be stopped by a DC 15 Heal check or through any magical healing. Bleed damage from this feat does not stack with itself. You must choose to use this feat before making the attack roll, and its effects last until your next turn (although the bleeding lasts until healed, as normal)."
  },
  {
    "name": "Bodyguard",
    "type": "Combat",
    "description": "Your swift strikes ward off enemies attacking nearby allies.",
    "prerequisites": ["Combat Reflexes"],
    "prerequisitesFeats": ["Combat Reflexes"],
    "benefit": "When an adjacent ally is attacked, you may use an attack of opportunity to attempt the aid another action to improve your ally's AC. You may not use the aid another action to improve your ally's attack roll with this attack."
  },
  {
    "name": "Bouncing Spell",
    "type": "Metamagic",
    "description": "You can direct a failed spell against a different target.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever a bouncing spell targeting a single creature has no effect on its intended target (whether due to spell resistance or a successful saving throw) you may, as a swift action, redirect it to target another eligible creature within range. The redirected spell behaves in all ways as if its new target were the original target for the spell. Spells that affect a target in any way (including a lesser effect from a successful saving throw) may not be redirected in this manner. A bouncing spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Breadth of Experience",
    "type": "General",
    "description": "Although still young for your kind, you have a lifetime of knowledge and training.",
    "prerequisites": ["Dwarf","elf","or gnome; 100+ years old"],
    "prerequisitesFeats": ["Dwarf","elf","or gnome; 100+ years old"],
    "benefit": "You get a +2 bonus on all Knowledge and Profession skill checks, and can make checks with those skills untrained."
  },
  {
    "name": "Bull Rush Strike",
    "type": "Combat",
    "description": "Your critical hits can push back your foes.",
    "prerequisites": ["Str 13","Improved Bull Rush","Power Attack","base attack bonus +9"],
    "prerequisitesFeats": ["Str 13","Improved Bull Rush","Power Attack","base attack bonus +9"],
    "benefit": "Whenever you score a critical hit with a melee attack, you can push your opponent back, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent's CMD, you may push your opponent back as if from the bull rush combat maneuver. You do not need to move with the target if successful. This does not provoke an attack of opportunity."
  },
  {
    "name": "Charge Through",
    "type": "Combat",
    "description": "You can overrun enemies when charging.",
    "prerequisites": ["Str 13","Improved Overrun","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Improved Overrun","Power Attack","base attack bonus +1"],
    "benefit": "When making a charge, you can attempt to overrun one creature in the path of the charge as a free action. If you successfully overrun that creature, you can complete the charge. If the overrun is unsuccessful, the charge ends in the space directly in front of that creature."
  },
  {
    "name": "Childlike",
    "type": "General",
    "description": "Your resemblance to a human child tends to make others trust you, perhaps more than they should.",
    "prerequisites": ["Cha 13","halfling"],
    "prerequisitesFeats": ["Cha 13","halfling"],
    "benefit": "You can take 10 on Bluff checks to convince others you are telling the truth, so long as your story makes you appear innocent. You gain a +2 bonus on Disguise skill checks to pose as a human child, and ignore the check penalties for disguising yourself as a different race and age category while doing so."
  },
  {
    "name": "Cloud Step",
    "type": "General",
    "description": "Your tread is of unearthly lightness.",
    "prerequisites": ["Spider Step","monk level 12th"],
    "prerequisitesFeats": ["Spider Step","monk level 12th"],
    "benefit": "As a move action, you can air walk (as the spell) up to half your slow fall distance, maximum 50 feet. You must reach a solid, level surface by the end of your turn or you will fall."
  },
  {
    "name": "Cockatrice Strike",
    "type": "Combat",
    "description": "With a single strike, you transmute flesh to stone.",
    "prerequisites": ["Improved Unarmed Strike","Gorgon's Fist","Medusa's Wrath","base attack bonus +14"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Gorgon's Fist","Medusa's Wrath","base attack bonus +14"],
    "benefit": "As a full-round action, you can make a single unarmed strike against a dazed, flat-footed, paralyzed, staggered, stunned, or unconscious foe. If that attack is a critical hit, the target is petrified unless it succeeds on a Fortitude saving throw with a DC of 10 + 1/2 your character level + your Wisdom modifier. This is a supernatural polymorph effect."
  },
  {
    "name": "Combat Patrol",
    "type": "Combat",
    "description": "You range across the battlefield, dealing with threats wherever they arise.",
    "prerequisites": ["Combat Reflexes","Mobility","base attack bonus +5"],
    "prerequisitesFeats": ["Combat Reflexes","Mobility","base attack bonus +5"],
    "benefit": "As a full-round action, you may set up a combat patrol, increasing your threatened area by 5 feet for every 5 points of your base attack bonus. Until the beginning of your next turn, you may make attacks of opportunity against any opponent in this threatened area that provokes attacks of opportunity. You may move as part of these attacks, provided your total movement before your next turn does not exceed your speed. Any movement you make provokes attacks of opportunity as normal."
  },
  {
    "name": "Cooperative Crafting",
    "type": "General",
    "description": "Your assistance makes item crafting far more efficient.",
    "prerequisites": ["1 rank in any Craft skill","any item creation feat"],
    "prerequisitesFeats": ["1 rank in any Craft skill","any item creation feat"],
    "benefit": "You can assist another character in crafting mundane and magical items. You must both possess the relevant Craft skill or item creation feat, but either one of you can fulfill any other prerequisites for crafting the item. You provide a +2 circumstance bonus on any Craft or Spellcraft checks related to making an item, and your assistance doubles the gp value of items that can be crafted each day."
  },
  {
    "name": "Coordinated Defense",
    "type": "Combat",
    "description": "You are adept at working with allies to avoid being tripped, grappled, and subjected to other maneuvers.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are adjacent to an ally who also has this feat, you receive a +2 competence bonus to your Combat Maneuver Defense. This bonus increases to +4 if the creature attempting the maneuver is larger than both you and your ally."
  },
  {
    "name": "Coordinated Maneuvers",
    "type": "Combat",
    "description": "You are skilled at working with your allies to perform dangerous combat maneuvers.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are adjacent to an ally who also has this feat, you receive a +2 competence bonus on all combat maneuver checks. This bonus increases to +4 when attempting to break free from a grapple."
  },
  {
    "name": "Cosmopolitan",
    "type": "General",
    "description": "Living in large, exotic cities has put you in touch with many diverse civilizations, cultures, and races.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can speak and read two additional languages of your choice. In addition, choose two Intelligence-, Wisdom-, or Charisma-based skills. Those skills always count as class skills for you."
  },
  {
    "name": "Covering Defense",
    "type": "Combat",
    "description": "You are skilled at protecting yourself and your allies with your shield.",
    "prerequisites": ["Shield Focus","base attack bonus +6"],
    "prerequisitesFeats": ["Shield Focus","base attack bonus +6"],
    "benefit": "When you use the total defense action while using a light, heavy, or tower shield, you can provide a cover bonus to AC against all attacks to an adjacent ally your size or smaller. This cover bonus is equal to your shield's shield bonus and lasts until the beginning of your next turn. Your shield does not provide a cover bonus to Ref lex saves."
  },
  {
    "name": "Crippling Critical",
    "type": "Combat",
    "description": "You are able to maim a target and hinder its movement.",
    "prerequisites": ["Critical Focus","base attack bonus +13"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +13"],
    "benefit": "Whenever you score a critical hit against an opponent, its speed is halved for 1 minute. A successful Fortitude save reduces this duration to 1d4 rounds. The DC of this save is equal to 10 + your base attack bonus. Against creatures with multiple types of movement, you must choose which movement type to affect. A flying creature hit by this attack must make a DC 10 Fly check to remain airborne, and has its maneuverability reduced by one step."
  },
  {
    "name": "Crossbow Mastery",
    "type": "Combat",
    "description": "You can load crossbows with blinding speed and even fire them in melee with little fear of reprisal.",
    "prerequisites": ["Dex 15","Point-Blank Shot","Rapid Reload","Rapid Shot"],
    "prerequisitesFeats": ["Dex 15","Point-Blank Shot","Rapid Reload","Rapid Shot"],
    "benefit": "The time required for you to reload any type of crossbow is reduced to a free action, regardless of the type of crossbow used. You can fire a crossbow as many times in a full attack action as you could attack if you were using a bow. Reloading a crossbow for the type of crossbow you chose when you took Rapid Reload no longer provokes attacks of opportunity."
  },
  {
    "name": "Dastardly Finish",
    "type": "Combat",
    "description": "You can take advantage of an enemy's debilitated state to attempt a coup de grace.",
    "prerequisites": ["Sneak attack +5d6"],
    "prerequisitesFeats": ["Sneak attack +5d6"],
    "benefit": "You can deliver a coup de grace to cowering or stunned targets."
  },
  {
    "name": "Dazing Assault",
    "type": "Combat",
    "description": "You can daze foes with wild attacks.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +11"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +11"],
    "benefit": "You can choose to take a -5 penalty on all melee attack rolls and combat maneuver checks to daze opponents you hit with your melee attacks for 1 round, in addition to the normal damage dealt by the attack. A successful Fortitude save negates the effect. The DC of this save is 10 + your base attack bonus. You must choose to use this feat before making the attack roll, and its effects last until your next turn."
  },
  {
    "name": "Dazing Spell",
    "type": "Metamagic",
    "description": "You can daze creatures with the power of your spells.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can modify a spell to daze a creature damaged by the spell. When a creature takes damage from this spell, they become dazed for a number of rounds equal to the original level of the spell. If the spell allows a saving throw, a successful save negates the daze effect. If the spell does not allow a save, the target can make a Will save to negate the daze effect. If the spell effect also causes the creature to become dazed, the duration of this metamagic effect is added to the duration of the spell. A dazing spell uses up a spell slot three levels higher than the spell's actual level. Spells that do not inf lict damage do not benefit from this feat."
  },
  {
    "name": "Deep Drinker",
    "type": "General",
    "description": "You draw greater amounts of ki from your libations.",
    "prerequisites": ["Con 13","monk level 11","drunken ki class feature"],
    "prerequisitesFeats": ["Con 13","monk level 11","drunken ki class feature"],
    "benefit": "When you gain temporary ki from drunken ki, you gain 2 temporary ki rather than just 1."
  },
  {
    "name": "Deepsight",
    "type": "General",
    "description": "Your senses are especially keen in the utter darkness.",
    "prerequisites": ["Darkvision 60 feet"],
    "prerequisitesFeats": ["Darkvision 60 feet"],
    "benefit": "Your darkvision has a range of 120 feet."
  },
  {
    "name": "Disarming Strike",
    "type": "Combat",
    "description": "Your critical hits can disarm your foes.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Disarm","base attack bonus +9"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Disarm","base attack bonus +9"],
    "benefit": "Whenever you score a critical hit with a melee attack, you can disarm your opponent, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent's CMD, you may disarm your opponent as if from the disarm combat maneuver. This does not provoke an attack of opportunity."
  },
  {
    "name": "Disrupting Shot",
    "type": "Combat",
    "description": "With a well-placed shot, you make it harder for a nearby opponent to cast spells.",
    "prerequisites": ["Dex 13","Point-Blank Shot","fighter level 6th"],
    "prerequisitesFeats": ["Dex 13","Point-Blank Shot","fighter level 6th"],
    "benefit": "If you ready an action to shoot an opponent casting a spell within 30 feet and successfully hit that opponent with a ranged attack, the concentration DC to successfully cast the spell is increased by +4."
  },
  {
    "name": "Disruptive Spell",
    "type": "Metamagic",
    "description": "Your magical energies cling to enemies, interfering with their spellcasting.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Targets affected by a disruptive spell must make concentration checks when using spells or spell-like abilities (DC equals the save DC of the disruptive spell plus the level of the spell being cast) for 1 round. Targets that avoid the spell's effects avoid this feat's effect as well. A disruptive spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Diviner's Delving",
    "type": "General",
    "description": "Your keen magical intuition makes reading signs, portents, and mystical clues quick and easy.",
    "prerequisites": ["Spell Focus (divination)"],
    "prerequisitesFeats": ["Spell Focus (divination)"],
    "benefit": "You gain a +2 bonus on caster level checks with divinations to overcome spell resistance or effects that impede divination (for example, nondetection). When using a divination spell that requires concentration, you gain information from the spell 1 round sooner than normal (so you gain information from the first 2 rounds with 1 round of concentration, and information from the third round in the second round of concentration)."
  },
  {
    "name": "Dreadful Carnage",
    "type": "Combat",
    "description": "Slaying an enemy demoralizes your other nearby foes.",
    "prerequisites": ["Str 15","Power Attack","Furious Focus","base attack bonus +11"],
    "prerequisitesFeats": ["Str 15","Power Attack","Furious Focus","base attack bonus +11"],
    "benefit": "Whenever you reduce an enemy to 0 or fewer hit points, you can make an Intimidate check to demoralize all enemies within 30 feet as a free action. Enemies that cannot see both you and the enemy you reduced to 0 or fewer hit points are unaffected."
  },
  {
    "name": "Duck and Cover",
    "type": "General",
    "description": "Your allies assist you in avoiding certain attacks.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are adjacent to an ally who also has this feat, and both of you are required to make a Ref lex saving throw against a spell or effect, you may take the result of your die roll or that of your ally (your modifiers still apply to the roll, regardless of which result you take). If you take your ally's result, you are knocked prone (or staggered on your next turn, if you are already prone or cannot be knocked prone). In addition, you receive a +2 cover bonus to your AC against ranged attacks as long as your ally is wielding a shield."
  },
  {
    "name": "Eagle Eyes",
    "type": "General",
    "description": "Your vision is especially keen.",
    "prerequisites": ["Wis 13","keen senses racial trait"],
    "prerequisitesFeats": ["Wis 13","keen senses racial trait"],
    "benefit": "You ignore up to -5 in penalties due to distance on visual Perception checks, allowing you to see accurately at much greater distances than most."
  },
  {
    "name": "Eclectic",
    "type": "General",
    "description": "You have a talent for picking up different vocations.",
    "prerequisites": ["Human"],
    "prerequisitesFeats": ["Human"],
    "benefit": "Choose an additional favored class and gain either +1 hit point or +1 skill point whenever you take a level in that class. If you choose a class in which you already have levels, the benefits of this feat are retroactive."
  },
  {
    "name": "Ectoplasmic Spell",
    "type": "Metamagic",
    "description": "Your spells breach the gulf between dimensions, sending ghostly emanations into the ether.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "An ectoplasmic spell has full effect against incorporeal or ethereal creatures. An ectoplasmic spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Eldritch Claws",
    "type": "Combat",
    "description": "Who needs magic weapons? Eldritch tricks are no match for your bestial ferocity.",
    "prerequisites": ["Str 15","natural weapons","base attack bonus +6"],
    "prerequisitesFeats": ["Str 15","natural weapons","base attack bonus +6"],
    "benefit": "You natural weapons are considered both magic and silver for purpose of overcoming damage reduction."
  },
  {
    "name": "Elemental Fist",
    "type": "Combat",
    "description": "You empower your strike with elemental energy",
    "prerequisites": ["Con 13","Wis 13","Improved Unarmed Strike","base attack bonus +8"],
    "prerequisitesFeats": ["Con 13","Wis 13","Improved Unarmed Strike","base attack bonus +8"],
    "benefit": "When you use Elemental Strike pick one of the following energy types: acid, cold, electricity, or fire. On a successful hit, the attack deals damage normally plus 1d6 points of damage of the chosen type. You must declare that you are using this feat before you make your attack roll (thus a failed attack roll ruins the attempt). You may attempt an elemental fist attack once per day for every four levels you have attained (see Special), and no more than once per round."
  },
  {
    "name": "Elemental Focus",
    "type": "General",
    "description": "Your spells of a certain element are more difficult to resist.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Choose one energy type (acid, cold, electricity, or fire). Add +1 to the Difficulty Class for all saving throws against spells that deal damage of the energy type you select."
  },
  {
    "name": "Elemental Spell",
    "type": "Metamagic",
    "description": "You can manipulate the elemental nature of your spells.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Choose one energy type: acid, cold, electricity, or fire. You may replace a spell's normal damage with that energy type or split the spell's damage, so that half is of that energy type and half is of its normal type. An elemental spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Elven Accuracy",
    "type": "Combat",
    "description": "Your sharp eyesight makes difficult shots easier.",
    "prerequisites": ["Elf"],
    "prerequisitesFeats": ["Elf"],
    "benefit": "If you miss due to concealment when making a ranged attack with a longbow or shortbow (including composite bows), you can reroll your miss chance roll one time to see if you actually hit."
  },
  {
    "name": "Enforcer",
    "type": "Combat",
    "description": "You are skilled at causing fear in those you brutalize.",
    "prerequisites": ["Intimidate 1 rank"],
    "prerequisitesFeats": ["Intimidate 1 rank"],
    "benefit": "Whenever you deal nonlethal damage with a melee weapon, you can make an Intimidate check to demoralize your target as a free action. If you are successful, the target is shaken for a number of rounds equal to the damage dealt. If your attack was a critical hit, your target is frightened for 1 round with a successful Intimidate check, as well as being shaken for a number of rounds equal to the damage dealt."
  },
  {
    "name": "Expanded Arcana",
    "type": "General",
    "description": "Your research has revealed new spells.",
    "prerequisites": ["Caster level 1st","see Special"],
    "prerequisitesFeats": ["Caster level 1st","see Special"],
    "benefit": "Add one spell from your class's spell list to your list of spells known. This is in addition to the number of spells normally gained at each new level in your class. You may instead add two spells from your class's spell list to your list of spells known, but both of these spells must be at least one level lower than the highest level spell you can cast in that class. Once made, these choices cannot be changed."
  },
  {
    "name": "Extra Bombs",
    "type": "General",
    "description": "You can throw more bombs per day.",
    "prerequisites": ["Bomb class feature"],
    "prerequisitesFeats": ["Bomb class feature"],
    "benefit": "You can throw two additional bombs per day."
  },
  {
    "name": "Extra Discovery",
    "type": "General",
    "description": "You have made a new alchemical discovery.",
    "prerequisites": ["Discovery class feature"],
    "prerequisitesFeats": ["Discovery class feature"],
    "benefit": "You gain one additional discovery. You must meet all of the prerequisites for this discovery."
  },
  {
    "name": "Extra Hex",
    "type": "General",
    "description": "You have learned the secrets of a new hex.",
    "prerequisites": ["Hex class feature"],
    "prerequisitesFeats": ["Hex class feature"],
    "benefit": "You gain one additional hex. You must meet all of the prerequisites for this hex."
  },
  {
    "name": "Extra Rage Power",
    "type": "General",
    "description": "You have unlocked a new ability to use while raging.",
    "prerequisites": ["Rage power class feature"],
    "prerequisitesFeats": ["Rage power class feature"],
    "benefit": "You gain one additional rage power. You must meet all of the prerequisites for this rage power."
  },
  {
    "name": "Extra Revelation",
    "type": "General",
    "description": "You have discovered a new aspect of your mystery.",
    "prerequisites": ["Revelation class feature"],
    "prerequisitesFeats": ["Revelation class feature"],
    "benefit": "You gain one additional revelation. You must meet all of the prerequisites for this revelation."
  },
  {
    "name": "Extra Rogue Talent",
    "type": "General",
    "description": "Through constant practice, you have learned how to perform a special trick.",
    "prerequisites": ["Rogue talent class feature"],
    "prerequisitesFeats": ["Rogue talent class feature"],
    "benefit": "You gain one additional rogue talent. You must meet all of the prerequisites for this rogue talent."
  },
  {
    "name": "Fast Drinker",
    "type": "General",
    "description": "You swiftly guzzle spirits to draw forth ki.",
    "prerequisites": ["Con 18","drunken ki class feature"],
    "prerequisitesFeats": ["Con 18","drunken ki class feature"],
    "benefit": "Drinking strong alcohol to gain temporary ki, takes a swift action rather than a standard action."
  },
  {
    "name": "Fast Healer",
    "type": "General",
    "description": "You benefit greatly from your healing, be it from spells or natural healing.",
    "prerequisites": ["Con 13","Diehard","Endurance"],
    "prerequisitesFeats": ["Con 13","Diehard","Endurance"],
    "benefit": "When you regain hit points by resting or through magical healing, you recover additional hit points equal to half your Constitution modifier (minimum +1)."
  },
  {
    "name": "Favored Defense",
    "type": "General",
    "description": "Your cunning is your shield against your quarry's attacks.",
    "prerequisites": ["Favored enemy class feature"],
    "prerequisitesFeats": ["Favored enemy class feature"],
    "benefit": "Choose one of your favored enemy types. You add half your favored enemy bonus to your CMD and as a dodge bonus to AC when attacked by a favored enemy."
  },
  {
    "name": "Fight On",
    "type": "General",
    "description": "You can keep fighting even after you should be dead.",
    "prerequisites": ["Con 13; dwarf","half-orc","or orc"],
    "prerequisitesFeats": ["Con 13; dwarf","half-orc","or orc"],
    "benefit": "Once per day, you can gain a number of temporary hit points equal to your Constitution modifier. You can activate this feat as an immediate action when reduced to 0 or fewer hit points. You can use this feat to prevent yourself from dying. These temporary hit points last for 1 minute. If your hit points drop below 0 due to the loss of these temporary hit points, you fall unconscious and are dying as normal. If you also have the ferocity racial trait, you can use that once you have lost the temporary hit points from this feat."
  },
  {
    "name": "Focused Shot",
    "type": "Combat",
    "description": "Your anatomical insight adds deadliness to your shots.",
    "prerequisites": ["Int 13","Point Blank Shot","Precise Shot"],
    "prerequisitesFeats": ["Int 13","Point Blank Shot","Precise Shot"],
    "benefit": "As a standard action, you may make an attack with a bow or crossbow and add your Intelligence modifier on the damage roll. You must be within 30 feet of your target to deal this extra damage. Creatures immune to critical hits and sneak attacks are immune to this extra damage."
  },
  {
    "name": "Focused Spell",
    "type": "Metamagic",
    "description": "When you cast a spell that affects more than one creature, one opponent finds it more difficult to resist.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When casting a spell that affects or targets more than one creature, you can choose one target or creature within the spell effect. That creature's saving throw DC to resist the spell is increased by +2. You must choose which target to focus the spell on before casting the spell. A focused spell uses up a spell slot one level higher than the spell's actual level. Spells that do not require a saving throw to resist or lessen the spell's effect do not benefit from this feat."
  },
  {
    "name": "Following Step",
    "type": "Combat",
    "description": "You can repeatedly close the distance when foes try to move away, without impeding your normal movement.",
    "prerequisites": ["Dex 13","Step Up"],
    "prerequisitesFeats": ["Dex 13","Step Up"],
    "benefit": "When using the Step Up feat to follow an adjacent foe, you may move up to 10 feet. You may still take a 5-foot step during your next turn, and any movement you make using this feat does not subtract any distance from your movement during your next turn."
  },
  {
    "name": "Furious Focus",
    "type": "Combat",
    "description": "Even in the midst of fierce and furious blows, you can find focus in the carnage and your seemingly wild blows strike home.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +1"],
    "benefit": "When you are wielding a two-handed weapon or a one-handed weapon with two hands, and using the Power Attack feat, you do not suffer Power Attack's penalty on melee attack rolls on the first attack you make each turn. You still suffer the penalty on any additional attacks, including attacks of opportunity."
  },
  {
    "name": "Gang Up",
    "type": "Combat",
    "description": "You are adept at using greater numbers against foes.",
    "prerequisites": ["Int 13","Combat Expertise"],
    "prerequisitesFeats": ["Int 13","Combat Expertise"],
    "benefit": "You are considered to be flanking an opponent if at least two of your allies are threatening that opponent, regardless of your actual positioning."
  },
  {
    "name": "Gnome Trickster",
    "type": "General",
    "description": "Your arcane talents go beyond the illusory.",
    "prerequisites": ["Cha 13","gnome","gnome magic racial trait"],
    "prerequisitesFeats": ["Cha 13","gnome","gnome magic racial trait"],
    "benefit": "In addition to your normal gnome spell-like abilities, you also gain the following spell-like abilities: 1/day-mage hand and prestidigitation."
  },
  {
    "name": "Go Unnoticed",
    "type": "General",
    "description": "Your small size lets you quickly duck out of sight.",
    "prerequisites": ["Dex 13","Small size or smaller"],
    "prerequisitesFeats": ["Dex 13","Small size or smaller"],
    "benefit": "During the first round of combat, flat-footed opponents are considered not to have noticed you yet for the purposes of Stealth skill checks, allowing you to make a Stealth check that round to hide from them."
  },
  {
    "name": "Greater Blind-Fight",
    "type": "Combat",
    "description": "Your enemies cannot hide from you.",
    "prerequisites": ["Perception 15 ranks","Improved Blind-Fight"],
    "prerequisitesFeats": ["Perception 15 ranks","Improved Blind-Fight"],
    "benefit": "Your melee attacks ignore the miss chance for less than total concealment, and you treat opponents with total concealment as if they had normal concealment (20% miss chance instead of 50%). You may still reroll a miss chance percentile roll as normal. If you successfully pinpoint an invisible or hidden attacker, that attacker gets no advantages related to hitting you with ranged attacks, regardless of the range. That is, you don't lose your Dexterity bonus to Armor Class, and the attacker doesn't get the usual +2 bonus for being invisible."
  },
  {
    "name": "Greater Dirty Trick",
    "type": "Combat",
    "description": "When you pull a dirty trick, your foe is truly hindered.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Dirty Trick","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Dirty Trick","base attack bonus +6"],
    "benefit": "You receive a +2 bonus on checks made to attempt a dirty trick. This bonus stacks with the bonus granted by Improved Dirty Trick. Whenever you successfully perform a dirty trick, the penalty lasts for 1d4 rounds, plus 1 round for every 5 by which your attack exceeds the target's CMD. In addition, removing the condition requires the target to spend a standard action."
  },
  {
    "name": "Greater Drag",
    "type": "Combat",
    "description": "Foes that you drag are thrown out of balance.",
    "prerequisites": ["Str 13","Improved Drag","Power Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","Improved Drag","Power Attack","base attack bonus +6"],
    "benefit": "You receive a +2 bonus on checks made to drag a foe. This bonus stacks with the bonus granted by Improved Drag. Whenever you drag a foe, his movement provokes attacks of opportunity from all of your allies (but not you)."
  },
  {
    "name": "Greater Elemental Focus",
    "type": "General",
    "description": "Choose an energy type to which you have already applied the Elemental Focus feat. Any spells you cast of this energy type are very hard to resist.",
    "prerequisites": ["Elemental Focus"],
    "prerequisitesFeats": ["Elemental Focus"],
    "benefit": "Add +1 to the Difficulty Class for all saving throws against spells that deal damage of the energy type you select. This bonus stacks with the bonus from Elemental Focus."
  },
  {
    "name": "Greater Reposition",
    "type": "Combat",
    "description": "When you reposition foes, they are left vulnerable to the attacks of your allies.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Reposition","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Reposition","base attack bonus +6"],
    "benefit": "You receive a +2 bonus on checks made to reposition a foe. This bonus stacks with the bonus granted by Improved Reposition. Whenever you reposition a foe, his movement provokes attacks of opportunity from all of your allies (but not you)."
  },
  {
    "name": "Greater Shield Specialization",
    "type": "Combat",
    "description": "Your masterful shieldwork provides even greater protection to your vital areas.",
    "prerequisites": ["Proficiency with selected shield","Greater Shield Focus","Shield Focus","Shield Specialization with selected shield","fighter level 12th"],
    "prerequisitesFeats": ["Proficiency with selected shield","Greater Shield Focus","Shield Focus","Shield Specialization with selected shield","fighter level 12th"],
    "benefit": "Choose one type of shield (buckler, light, heavy, or tower shield) for which you possess the Shield Specialization feat. With the selected shield, you gain a +2 bonus to your Armor Class against critical hit confirmation rolls (this bonus stacks with that from Shield Specialization). In addition, once per day you may negate a critical hit, and damage is instead rolled normally."
  },
  {
    "name": "Greater Steal",
    "type": "Combat",
    "description": "You have a knack for snatching items from your opponents in combat.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Steal","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Steal","base attack bonus +6"],
    "benefit": "You receive a +2 bonus on checks made to steal an item from a foe. This bonus stacks with the bonus granted by Improved Steal. If you successfully steal an item from a foe during combat, it does not notice the theft until after combat is over or if it attempts to use the missing item."
  },
  {
    "name": "Groundling",
    "type": "General",
    "description": "You can speak with burrowing animals.",
    "prerequisites": ["Cha 13","gnome","gnome magic racial trait"],
    "prerequisitesFeats": ["Cha 13","gnome","gnome magic racial trait"],
    "benefit": "You can use speak with animals as a spell-like ability at will, but only to communicate with burrowing animals like gophers, moles, and the like. You can still use your gnome speak with animals ability once per day to speak with any animal, as usual."
  },
  {
    "name": "Heroic Defiance",
    "type": "General",
    "description": "You struggle on when others would fall.",
    "prerequisites": ["Diehard","Endurance","base Fortitude save +8"],
    "prerequisitesFeats": ["Diehard","Endurance","base Fortitude save +8"],
    "benefit": "Once per day as an immediate action you can delay the onset of one harmful condition or aff liction (such as panicked, paralyzed, stunned, and so on), including permanent and instantaneous conditions. Activating this feat delays the onset of the condition until the end of your next turn, after which time the condition takes its normal effect. This feat has no effect on hit point damage or ability damage."
  },
  {
    "name": "Heroic Recovery",
    "type": "General",
    "description": "You can throw off the effects of crippling conditions.",
    "prerequisites": ["Diehard","Endurance","base Fortitude save +4"],
    "prerequisitesFeats": ["Diehard","Endurance","base Fortitude save +4"],
    "benefit": "Once per day as a standard action you may attempt a new saving throw against a harmful condition or aff liction requiring a Fortitude save that is affecting you. If this save against the aff liction fails, there is no additional effect, but a successful save counts toward curing an aff liction such as poison or disease. You cannot use this feat to recover from instantaneous effects, effects that do not allow a saving throw, or effects that do not require a Fortitude save."
  },
  {
    "name": "Improved Blind-Fight",
    "type": "Combat",
    "description": "Your keen senses guide your hand against hidden foes.",
    "prerequisites": ["Perception 10 ranks","Blind-Fight"],
    "prerequisitesFeats": ["Perception 10 ranks","Blind-Fight"],
    "benefit": "Your melee attacks ignore the miss chance for less than total concealment. You may still reroll your miss chance percentile roll for total concealment. If you successfully pinpoint an invisible or hidden attacker within 30 feet, that attacker gets no advantages related to hitting you with ranged attacks. That is, you don't lose your Dexterity bonus to Armor Class, and the attacker doesn't get the usual +2 bonus for being invisible."
  },
  {
    "name": "Improved Dirty Trick",
    "type": "Combat",
    "description": "You are skilled at pulling dirty tricks on your foes.",
    "prerequisites": ["Int 13","Combat Expertise"],
    "prerequisitesFeats": ["Int 13","Combat Expertise"],
    "benefit": "You do not provoke an attack of opportunity when performing a dirty trick combat maneuver. In addition, you receive a +2 bonus on checks made to attempt a dirty trick. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries a dirty trick on you."
  },
  {
    "name": "Improved Drag",
    "type": "Combat",
    "description": "You are skilled at dragging foes around the battlefield.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +1"],
    "benefit": "You do not provoke an attack of opportunity when performing a drag combat maneuver. In addition, you receive a +2 bonus on checks made to drag a foe. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries to drag you."
  },
  {
    "name": "Improved Ki Throw",
    "type": "Combat",
    "description": "Your enemies are living weapons in your hands.",
    "prerequisites": ["Improved Bull Rush","Ki Throw"],
    "prerequisitesFeats": ["Improved Bull Rush","Ki Throw"],
    "benefit": "When using the Ki Throw feat, you may throw your target into any square you threaten that is occupied by another creature. Make a bull rush combat maneuver check with a -4 penalty against the secondary target. If this check succeeds, the thrown creature lands prone in the secondary target's square, while the secondary target is pushed back and knocked prone in an adjacent square. If the check fails, the thrown creature lands prone in the nearest square you threaten adjacent to the secondary target. If you throw a Large or larger creature into an area containing multiple secondary targets, you take an additional penalty of -4 on your combat maneuver check for each target after the first."
  },
  {
    "name": "Improved Reposition",
    "type": "Combat",
    "description": "You have learned how to force your enemies to move around the battlefield.",
    "prerequisites": ["Int 13","Combat Expertise"],
    "prerequisitesFeats": ["Int 13","Combat Expertise"],
    "benefit": "You do not provoke an attack of opportunity when performing a reposition combat maneuver. In addition, you receive a +2 bonus on checks made to reposition a foe. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries to reposition you."
  },
  {
    "name": "Improved Second Chance",
    "type": "Combat",
    "description": "You can turn a missed strike into a second chance without sacrificing later attacks.",
    "prerequisites": ["Int 13","Combat Expertise","Second Chance","base attack bonus +11"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Second Chance","base attack bonus +11"],
    "benefit": "When you reroll a missed attack using the Second Chance feat, you can still make the rest of your attacks that turn, albeit at a -5 penalty to each attack."
  },
  {
    "name": "Improved Share Spells",
    "type": "General",
    "description": "You can share spells with those you have a magical connection with.",
    "prerequisites": ["Spellcraft 10 ranks","ability to acquire an animal companion","eidolon","familiar","or special mount"],
    "prerequisitesFeats": ["Spellcraft 10 ranks","ability to acquire an animal companion","eidolon","familiar","or special mount"],
    "benefit": "Any non-instantaneous spell (but not any spell-like ability) you cast on yourself can also affect a creature bonded to you (such as an animal companion, eidolon, familiar, or special mount). The creature must be within 5 feet of you at the time of casting to receive the benefit. The spell's duration is halved between you and your bonded creature (for example, a spell with a duration of 1 hour has a duration of 30 minutes for both you and your bonded creature). If the spell or effect has a duration other than instantaneous, it stops affecting the creature if it moves farther than 5 feet away from you. It does not affect the creature again if it returns before the duration expires. You may share spells in this fashion even if the spells normally do not affect creatures of that type. This feat only applies to animal companions, eidolons, familiars, or special mounts gained through a class feature."
  },
  {
    "name": "Improved Sidestep",
    "type": "Combat",
    "description": "You are adept at sidestepping your opponent's melee attacks without compromising your mobility.",
    "prerequisites": ["Dex 15","Dodge","Mobility","Sidestep"],
    "prerequisitesFeats": ["Dex 15","Dodge","Mobility","Sidestep"],
    "benefit": "After sidestepping an opponent's missed attack using the Sidestep feat, you may still take a 5-foot step during your next turn, or you may move up to your full speed if you take an action to move during your next turn."
  },
  {
    "name": "Improved Steal",
    "type": "Combat",
    "description": "You have a knack for snatching items from your opponents.",
    "prerequisites": ["Int 13","Combat Expertise"],
    "prerequisitesFeats": ["Int 13","Combat Expertise"],
    "benefit": "You do not provoke an attack of opportunity when performing a steal combat maneuver. In addition, you receive a +2 bonus on checks made to steal an item from a foe. You also receive a +2 bonus to your Combat Maneuver Defense when an opponent tries to steal an item from you."
  },
  {
    "name": "Improved Stonecunning",
    "type": "General",
    "description": "Your sense for stonework is uncanny.",
    "prerequisites": ["Wis 13","dwarf","stonecunning racial trait"],
    "prerequisitesFeats": ["Wis 13","dwarf","stonecunning racial trait"],
    "benefit": "You receive a +4 bonus on Perception checks to notice unusual stonework. This bonus replaces the stonecunning ability's normal bonus on Perception checks."
  },
  {
    "name": "Intensified Spell",
    "type": "Metamagic",
    "description": "Your spells can go beyond several normal limitations.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "An intensified spell increases the maximum number of damage dice by 5 levels. You must actually have sufficient caster levels to surpass the maximum in order to benefit from this feat. No other variables of the spell are affected, and spells that inf lict damage that is not modified by caster level are not affected by this feat. An intensified spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "In Harm's Way",
    "type": "Combat",
    "description": "You put yourself in danger's path to save your allies.",
    "prerequisites": ["Bodyguard"],
    "prerequisitesFeats": ["Bodyguard"],
    "benefit": "While using the aid another action to improve an adjacent ally's AC, you can intercept a successful attack against that ally as an immediate action, taking full damage from that attack and any associated effects (bleed, poison, etc.). A creature cannot benefit from this feat more than once per attack."
  },
  {
    "name": "Ironguts",
    "type": "General",
    "description": "You have an especially strong stomach.",
    "prerequisites": ["Con 13; dwarf","half-orc","or orc"],
    "prerequisitesFeats": ["Con 13; dwarf","half-orc","or orc"],
    "benefit": "You gain a +2 racial bonus on saving throws against any effect causing the nauseated or sickened conditions and against all ingested poisons (but not other poisons). In addition, you receive a +2 bonus on Survival skill checks to find food for yourself (and only yourself )."
  },
  {
    "name": "Ironhide",
    "type": "General",
    "description": "Your skin is thicker and more resilient than that of most of your people.",
    "prerequisites": ["Con 13; dwarf","half-orc","or orc"],
    "prerequisitesFeats": ["Con 13; dwarf","half-orc","or orc"],
    "benefit": "You gain a +1 natural armor bonus due to your unusually tough hide."
  },
  {
    "name": "Keen Scent",
    "type": "General",
    "description": "Your nose is as sensitive as that of a wild predator.",
    "prerequisites": ["Wis 13","half-orc or orc"],
    "prerequisitesFeats": ["Wis 13","half-orc or orc"],
    "benefit": "You gain the scent special ability."
  },
  {
    "name": "Ki Throw",
    "type": "Combat",
    "description": "Your physical control and mastery of momentum allows you to throw enemies.",
    "prerequisites": ["Improved Trip","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Improved Trip","Improved Unarmed Strike"],
    "benefit": "On a successful unarmed trip attack against a target your size or smaller, you may throw the target prone in any square you threaten rather than its own square. This movement does not provoke attacks of opportunity, and you cannot throw the creature into a space occupied by other creatures."
  },
  {
    "name": "Leaf Singer",
    "type": "General",
    "description": "Your songs recount the ways and mysteries of your people.",
    "prerequisites": ["Cha 13","bardic performance class feature","elf or half-elf"],
    "prerequisitesFeats": ["Cha 13","bardic performance class feature","elf or half-elf"],
    "benefit": "When you use bardic performance with audible components in a forest, the range or area of your chosen performance is doubled. In addition, the DC for saving throws against your bardic performance is increased by +2 for creatures of the fey type, regardless of where the performance occurs."
  },
  {
    "name": "Light Step",
    "type": "General",
    "description": "You pick your way nimbly through even the most dangerous and uneven terrain.",
    "prerequisites": ["Acrobatic Steps","Nimble Moves","elf"],
    "prerequisitesFeats": ["Acrobatic Steps","Nimble Moves","elf"],
    "benefit": "You can ignore the effects of difficult terrain in natural environments, as if it were normal terrain."
  },
  {
    "name": "Lingering Performance",
    "type": "General",
    "description": "The effects of your bardic performance carry on, even after you have stopped performing.",
    "prerequisites": ["Bardic performance class feature"],
    "prerequisitesFeats": ["Bardic performance class feature"],
    "benefit": "The bonuses and penalties from your bardic performance continue for 2 rounds after you cease performing. Any other requirement, such as range or specific conditions, must still be met for the effect to continue. If you begin a new bardic performance during this time, the effects of the previous performance immediately cease."
  },
  {
    "name": "Lingering Spell",
    "type": "Metamagic",
    "description": "You spell clings to existence, slowly fading from the world.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You may cause an instantaneous spell that affects an area to persist until the beginning of your next turn. Those already in the area suffer no additional harm, but other creatures or objects entering the area are subject to its effects. A lingering spell with a visual manifestation obscures vision, providing concealment (20% miss chance) beyond 5 feet and total concealment (50% miss chance) beyond 20 feet. A lingering spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Lookout",
    "type": "Combat",
    "description": "Your allies help you avoid being surprised.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are adjacent to an ally who also has this feat, you may act in the surprise round as long as your ally would normally be able to act in the surprise round. If you would normally be denied the ability to act in the surprise round, your initiative is equal to your initiative roll or the roll of your ally -1, whichever is lower. If both you and your ally would be able to act in the surprise round without the aid of this feat, you may take both a standard and a move action (or a full-round action) during the surprise round."
  },
  {
    "name": "Low Profile",
    "type": "Combat",
    "description": "Yours small stature helps you avoid ranged attacks.",
    "prerequisites": ["Dex 13","Small size or smaller"],
    "prerequisitesFeats": ["Dex 13","Small size or smaller"],
    "benefit": "You gain a +1 dodge bonus to AC against ranged attacks. In addition, you do not provide soft cover to creatures when ranged attacks pass through your square."
  },
  {
    "name": "Lucky Halfling",
    "type": "General",
    "description": "You bring luck to those with whom you travel.",
    "prerequisites": ["Halfling"],
    "prerequisitesFeats": ["Halfling"],
    "benefit": "Once per day, when one of your allies within 30 feet makes a saving throw, you may roll the same saving throw as if you were the one subject to the effect requiring it. You may use this ability after your ally has rolled, but before the GM declares if the roll was a success or failure. Your ally may choose to use your saving throw in place of his own."
  },
  {
    "name": "Major Spell Expertise",
    "type": "General",
    "description": "You can cast a single low-level spell as a spell-like ability.",
    "prerequisites": ["Minor Spell Expertise","ability to cast 9th-level spells"],
    "prerequisitesFeats": ["Minor Spell Expertise","ability to cast 9th-level spells"],
    "benefit": "Choose one spell that you know of 5th level or lower. You may cast that spell twice per day as a spelllike ability. The caster level for this spell-like ability is equal to your caster level in the class from whose spell list the spell is taken. The spell-like ability's save DC is Charisma-based. If the spell has an expensive focus or material component, it may not be chosen for this feat. You cannot apply metamagic feats to this spell."
  },
  {
    "name": "Master Alchemist",
    "type": "General",
    "description": "Your mastery of alchemy is nearly supernatural.",
    "prerequisites": ["Craft (alchemy) 5 ranks"],
    "prerequisitesFeats": ["Craft (alchemy) 5 ranks"],
    "benefit": "You receive a +2 bonus on Craft (alchemy) checks, and you may create mundane alchemical items much more quickly than normal. When making poisons, you can create a number of doses equal to your Intelligence modifier (minimum 1) at one time. These additional doses do not increase the time required, but they do increase the raw material cost. In addition, whenever you make alchemical items or poisons using Craft (alchemy), use the item's gp value as its sp value when determining your progress (do not multiply the item's gp cost by 10 to determine its sp cost)."
  },
  {
    "name": "Merciful Spell",
    "type": "Metamagic",
    "description": "Your damaging spells subdue rather than kill.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can alter spells that inf lict damage to inf lict nonlethal damage instead. Spells that inf lict damage of a particular type (such as fire) inf lict nonlethal damage of that same type. A merciful spell does not use up a higher-level spell slot than the spell's actual level."
  },
  {
    "name": "Minor Spell Expertise",
    "type": "General",
    "description": "You are able to cast a 1st-level spell as a spell-like ability.",
    "prerequisites": ["Ability to cast 4th-level spells"],
    "prerequisitesFeats": ["Ability to cast 4th-level spells"],
    "benefit": "Choose one 1st-level spell that you know. You may cast that spell twice per day as a spell-like ability. The caster level for this spell-like ability is equal to your caster level in the class from whose spell list the spell is taken. The spell-like ability's save DC is Charisma-based. If the spell has an expensive focus or material component, it may not be chosen for this feat. You cannot apply metamagic feats to this spell."
  },
  {
    "name": "Missile Shield",
    "type": "Combat",
    "description": "You are skilled at def lecting ranged attacks with your shield.",
    "prerequisites": ["Dex 13","Shield Focus"],
    "prerequisitesFeats": ["Dex 13","Shield Focus"],
    "benefit": "You must be using a light, heavy, or tower shield to use this feat. Once per round when you would normally be hit with an attack from a ranged weapon (not including spell effects, natural attacks, or massive ranged weapons), you may def lect it so that you take no damage, as if you had the Def lect Arrows feat. You must be aware of the attack and not flat-footed."
  },
  {
    "name": "Mounted Shield",
    "type": "Combat",
    "description": "Your defensive tactics defend both you and your mount.",
    "prerequisites": ["Mounted Combat","Shield Focus"],
    "prerequisitesFeats": ["Mounted Combat","Shield Focus"],
    "benefit": "You may add your base shield bonus (including the bonus from Shield Focus but not including enhancement bonuses) to your mount's AC. In addition, you may add this bonus when making a Ride check to negate a hit against your mount using the Mounted Combat feat."
  },
  {
    "name": "Mounted Skirmisher",
    "type": "Combat",
    "description": "You are adept at attacking from upon a swift moving steed.",
    "prerequisites": ["Ride rank 14","Mounted Combat","Trick Riding"],
    "prerequisitesFeats": ["Ride rank 14","Mounted Combat","Trick Riding"],
    "benefit": "If your mount moves its speed or less, you can still take a full-attack action."
  },
  {
    "name": "Outflank",
    "type": "Combat",
    "description": "You look for every edge when flanking an enemy.",
    "prerequisites": ["Base attack bonus +4"],
    "prerequisitesFeats": ["Base attack bonus +4"],
    "benefit": "Whenever you and an ally who also has this feat are flanking the same creature, your flanking bonus on attack rolls increases to +4. In addition, whenever you score a critical hit against the flanked creature, it provokes an attack of opportunity from your ally."
  },
  {
    "name": "Paired Opportunists",
    "type": "Combat",
    "description": "You know how to make an enemy pay for lax defenses.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are adjacent to an ally who also has this feat, you receive a +4 circumstance bonus on attacks of opportunity against creatures that you both threaten. Enemies that provoke attacks of opportunity from your ally also provoke attacks of opportunity from you so long as you threaten them (even if the situation or an ability would normally deny you the attack of opportunity). This does not allow you to take more than one attack of opportunity against a creature for a given action."
  },
  {
    "name": "Parry Spell",
    "type": "General",
    "description": "You can throw an enemy spell back at its caster.",
    "prerequisites": ["Spellcraft 15 ranks","Improved Counterspell"],
    "prerequisitesFeats": ["Spellcraft 15 ranks","Improved Counterspell"],
    "benefit": "Whenever you successfully counter a spell, it returns back to its caster. This works exactly like the spell turning spell (Pathfinder RPG Core Rulebook page 347)."
  },
  {
    "name": "Parting Shot",
    "type": "Combat",
    "description": "You are an expert skirmisher, able to rain missiles upon your enemies whether advancing or retreating.",
    "prerequisites": ["Dex 13","Dodge","Mobility","Point Blank Shot","Shot on the Run","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 13","Dodge","Mobility","Point Blank Shot","Shot on the Run","base attack bonus +6"],
    "benefit": "Once per encounter, when using the withdraw action, you can make a single ranged attack at any point during your movement."
  },
  {
    "name": "Pass For Human",
    "type": "General",
    "description": "You're easily mistaken for a human rather than a member of your own race.",
    "prerequisites": ["Half-elf","half-orc","or halfling (see Special)"],
    "prerequisitesFeats": ["Half-elf","half-orc","or halfling (see Special)"],
    "benefit": "You receive a +10 bonus on Disguise checks to disguise yourself as a human, and do not receive the penalty for disguising yourself as a member of another race when you do so. In areas largely populated or settled by humans, you can take 10 on your Disguise check, meaning most people tend to assume you are human unless given a reason to think otherwise."
  },
  {
    "name": "Perfect Strike",
    "type": "Combat",
    "description": "When wielding a monk weapon, your attacks can be extremely precise.",
    "prerequisites": ["Dex 13","Wis 13","Improved Unarmed Strike","base attack bonus +8"],
    "prerequisitesFeats": ["Dex 13","Wis 13","Improved Unarmed Strike","base attack bonus +8"],
    "benefit": "You must declare that you are using this feat before you make your attack roll (thus a failed attack roll ruins the attempt). You must use one of the following weapons to make the attack: kama, nunchaku, quarterstaff, sai, and siangham. You can roll your attack roll twice and take the higher result. If one of these rolls is a critical threat, the other roll is used as your confirmation roll (your choice if they are both critical threats). You may attempt a perfect attack once per day for every four levels you have attained (but see Special), and no more than once per round."
  },
  {
    "name": "Persistent Spell",
    "type": "Metamagic",
    "description": "You can modify a spell to become more tenacious when its targets resist its effect.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever a creature targeted by a persistent spell or within its area succeeds on its saving throw against the spell, it must make another saving throw against the effect. If a creature fails this second saving throw, it suffers the full effects of the spell, as if it had failed its first saving throw. A persistent spell uses up a spell slot two levels higher than the spell's actual level. Spells that do not require a saving throw to resist or lessen the spell's effect do not benefit from this feat."
  },
  {
    "name": "Point Blank Master",
    "type": "Combat",
    "description": "You are adept at firing ranged weapons in close quarters.",
    "prerequisites": ["Weapon Specialization with selected ranged weapon"],
    "prerequisitesFeats": ["Weapon Specialization with selected ranged weapon"],
    "benefit": "Choose one type of ranged weapon. You do not provoke attacks of opportunity when firing the selected weapon while threatened."
  },
  {
    "name": "Practiced Tactician",
    "type": "General",
    "description": "With only a few quick gestures and commands, you can direct others in combat.",
    "prerequisites": ["Tactician class feature"],
    "prerequisitesFeats": ["Tactician class feature"],
    "benefit": "You can use your tactician ability to grant allies a teamwork feat one additional time per day."
  },
  {
    "name": "Precise Strike",
    "type": "Combat",
    "description": "You are skilled at striking where it counts, as long as an ally distracts your foe.",
    "prerequisites": ["Dex 13","base attack bonus +1"],
    "prerequisitesFeats": ["Dex 13","base attack bonus +1"],
    "benefit": "Whenever you and an ally who also has this feat are flanking the same the creature, you deal an additional 1d6 points of precision damage with each successful melee attack. This bonus damage stacks with other sources of precision damage, such as sneak attack. This bonus damage is not multiplied on a critical hit."
  },
  {
    "name": "Preferred Spell",
    "type": "General",
    "description": "You find it very easy to cast one particular spell.",
    "prerequisites": ["Spellcraft 5 ranks","Heighten Spell"],
    "prerequisitesFeats": ["Spellcraft 5 ranks","Heighten Spell"],
    "benefit": "Choose one spell which you have the ability to cast. You can cast that spell spontaneously by sacrificing a prepared spell or spell slot of equal or higher level. You can apply any metamagic feats you possess to this spell when you cast it. This increases the minimum level of the prepared spell or spell slot you must sacrifice in order to cast it but does not affect the casting time."
  },
  {
    "name": "Punishing Kick",
    "type": "Combat",
    "description": "Your kicks are so powerful you use them to push or knock back your foes.",
    "prerequisites": ["Con 13","Wis 13","Improved Unarmed Strike","base attack bonus +8"],
    "prerequisitesFeats": ["Con 13","Wis 13","Improved Unarmed Strike","base attack bonus +8"],
    "benefit": "You must declare that you are using this feat before you make your attack roll (thus a failed attack roll ruins the attempt). On a successful hit, the attack deals damage normally and you can choose to push your target 5 feet or attempt to knock them prone. If you decide to push the target, it is moved 5 feet directly away from you. This movement does not provoke attacks of opportunity, and the target must end this move in a safe space it can stand in. If you decide to attempt to knock the target prone, the target receives a Fortitude saving throw with a DC of 10 + 1/2 your character level + your Wisdom modifier to avoid the effect. You may attempt a punishing kick attack once per day for every four levels you have attained (but see Special), and no more than once per round."
  },
  {
    "name": "Pushing Assault",
    "type": "Combat",
    "description": "A strike made with a two-handed weapon can push a similar sized opponent backward.",
    "prerequisites": ["Str 15","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 15","Power Attack","base attack bonus +1"],
    "benefit": "When you hit a creature your size or smaller with a two-handed weapon attack modif ied by the Power Attack feat, you can choose to push the target 5 feet directly away from you instead of dealing the extra damage from Power Attack. If you score a critical hit, you can instead push the target 10 feet directly away from you. This movement does not provoke attacks of opportunities, and the target must end this move in a safe space it can stand in. You choose which effect to apply after the attack roll has been made, but before the damage is rolled."
  },
  {
    "name": "Racial Heritage",
    "type": "General",
    "description": "The blood of a non-human ancestor flows in your veins.",
    "prerequisites": ["Human"],
    "prerequisitesFeats": ["Human"],
    "benefit": "Choose another humanoid race. You count as both human and that race for any effects related to race. For example, if you choose dwarf, you are considered both a human and a dwarf for the purpose of taking traits, feats, how spells and magic items affect you, and so on."
  },
  {
    "name": "Raging Vitality",
    "type": "General",
    "description": "While raging, you are full of vigor and health.",
    "prerequisites": ["Con 15","rage class feature"],
    "prerequisitesFeats": ["Con 15","rage class feature"],
    "benefit": "Whenever you are raging, the morale bonus to your Constitution increases by +2. Your rage does not end if you become unconscious. While unconscious you must still expend rounds of rage per day each round."
  },
  {
    "name": "Ray Shield",
    "type": "Combat",
    "description": "You can even deflect rays with your shield.",
    "prerequisites": ["Dex 15","Missile Shield","Spellbreaker"],
    "prerequisitesFeats": ["Dex 15","Missile Shield","Spellbreaker"],
    "benefit": "You must be using a light, heavy, or tower shield to use this feat. Once per round when you would normally be hit with a ranged touch attack (including rays and similar magical effects), you may def lect it so that you take no damage from it. Your shield suffers the full effects of the spell or effect, if applicable."
  },
  {
    "name": "Razortusk",
    "type": "General",
    "description": "Your powerful jaws and steely teeth are deadly enough to give you a bite attack.",
    "prerequisites": ["Half-orc"],
    "prerequisitesFeats": ["Half-orc"],
    "benefit": "You can make a bite attack for 1d4 points of damage, plus your Strength modifier. You're considered proficient in this attack and can apply feats or effects appropriate to natural attacks to it. If used as part of a full attack action, the bite is considered a secondary attack and is made at your full base attack bonus -5, and adds half your Strength modifier to damage."
  },
  {
    "name": "Reach Spell",
    "type": "Metamagic",
    "description": "Your spells go farther than normal.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can alter a spell with a range of touch, close, or medium to increase its range to a higher range category, using the following order: touch, close, medium, and long. A reach spell uses up a spell slot one level higher than the spell's actual level for each increase in range category. For example, a spell with a range of touch increased to long range uses up a spell slot three levels higher. Spells modif ied by this feat that require melee touch attacks instead require ranged touch attacks. Spells that do not have a range of touch, close, or medium do not benefit from this feat."
  },
  {
    "name": "Rending Claws",
    "type": "Combat",
    "description": "Your claw attacks do greater harm to your enemy.",
    "prerequisites": ["Str 13","two claw natural weapon attacks","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","two claw natural weapon attacks","base attack bonus +6"],
    "benefit": "If you hit a creature with two claw attacks in the same turn, the second claw attack deals an additional 1d6 points of damage. This damage is precision damage and is not multiplied on a critical hit. You can use this feat once per round."
  },
  {
    "name": "Repositioning Strike",
    "type": "Combat",
    "description": "Your critical hits can move your foes where you wish.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Reposition","base attack bonus +9"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Reposition","base attack bonus +9"],
    "benefit": "Whenever you score a critical hit with a melee attack, you can move your opponent, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent's CMD, you may move your opponent as if from the reposition combat maneuver. This does not provoke an attack of opportunity."
  },
  {
    "name": "Saving Shield",
    "type": "Combat",
    "description": "You deflect attacks that could mean your ally's death.",
    "prerequisites": ["Shield Proficiency"],
    "prerequisitesFeats": ["Shield Proficiency"],
    "benefit": "Whenever an adjacent ally is the target of an attack, you can, as an immediate action, grant that adjacent ally a +2 shield bonus to AC. You must be wielding a light shield, heavy shield, or tower shield to use this feat."
  },
  {
    "name": "Second Chance",
    "type": "Combat",
    "description": "Quick ref lexes turn missed strikes into second chances.",
    "prerequisites": ["Int 13","Combat Expertise","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","base attack bonus +6"],
    "benefit": "When making a full attack, if you miss on your first attack, you can forgo making any other attacks for the rest of your turn to reroll that attack at your highest base attack bonus."
  },
  {
    "name": "Selective Spell",
    "type": "Metamagic",
    "description": "Your allies need not fear friendly fire.",
    "prerequisites": ["Spellcraft 10 ranks"],
    "prerequisitesFeats": ["Spellcraft 10 ranks"],
    "benefit": "When casting a selective spell with an area effect and a duration of instantaneous, you can choose a number of targets in the area equal to the ability score modifier used to determine bonus spells of the same type (Charisma for bards, oracles, paladins, sorcerers, and summoners; Intelligence for witches and wizards; Wisdom for clerics, druids, inquisitors, and rangers). These targets are excluded from the effects of your spell. A selective spell uses up a spell slot one level higher than the spell's actual level. Spells that do not have an area of effect or a duration of instantaneous do not benefit from this feat."
  },
  {
    "name": "Shadow Strike",
    "type": "Combat",
    "description": "You accurately strike even those you cannot clearly see.",
    "prerequisites": ["Base attack bonus +1"],
    "prerequisitesFeats": ["Base attack bonus +1"],
    "benefit": "You can deal precision damage, such as sneak attack damage, against targets with concealment (but not total concealment)."
  },
  {
    "name": "Shared Insight",
    "type": "General",
    "description": "You deftly direct others' attentions where you wish.",
    "prerequisites": ["Wis 13","half-elf"],
    "prerequisitesFeats": ["Wis 13","half-elf"],
    "benefit": "As a move action, you can grant all friendly creatures within 30 feet who can see or hear you a +2 bonus on Perception checks for a number of rounds equal to your Wisdom modifier (minimum 1 round)."
  },
  {
    "name": "Sharp Senses",
    "type": "General",
    "description": "Your senses are especially sharp, even for your kind.",
    "prerequisites": ["Keen senses racial trait"],
    "prerequisitesFeats": ["Keen senses racial trait"],
    "benefit": "You receive a +4 racial bonus on Perception skill checks. This replaces the normal bonus from the keen senses racial trait."
  },
  {
    "name": "Shield of Swings",
    "type": "Combat",
    "description": "A wild frenzy of attacks serves to bolster your defenses.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +1"],
    "benefit": "When you take a full-attack action while wielding a two-handed weapon, you can choose to reduce the damage by 1/2 to gain a +4 shield bonus to AC and CMD until the beginning of your next turn. The reduction in damage applies until the beginning of your next turn."
  },
  {
    "name": "Shield Specialization",
    "type": "Combat",
    "description": "You have mastered the use of one type of shield.",
    "prerequisites": ["Proficiency with selected shield","Shield Focus","fighter level 4th"],
    "prerequisitesFeats": ["Proficiency with selected shield","Shield Focus","fighter level 4th"],
    "benefit": "Choose one type of shield (buckler, light, heavy, or tower shield). With the selected shield, you gain a +2 bonus to your Armor Class against critical hit confirmation rolls. In addition, you may add your base shield bonus (including the bonus from Shield Focus but not including enhancement bonuses) to your CMD."
  },
  {
    "name": "Shield Wall",
    "type": "Combat",
    "description": "You form a unified defense with those around you.",
    "prerequisites": ["Shield Proficiency"],
    "prerequisitesFeats": ["Shield Proficiency"],
    "benefit": "Whenever you are wielding a shield and are adjacent to an ally wielding a shield who also has this feat, the AC bonus from your shield increases, depending on the shield wielded by your ally. If your ally is wielding a buckler or a light shield, your shield bonus increases by +1. If your ally is wielding a heavy shield or a tower shield, your shield bonus increases by +2. You keep these bonuses even if your ally loses his shield bonus due to making a shield bash attack. If an adjacent ally with this feat uses a tower shield to grant total cover, you also benefit if an attack targeting you passes through the edge of the shield (Core Rulebook 153)."
  },
  {
    "name": "Shielded Caster",
    "type": "General",
    "description": "Your allies cover you while you cast complicated spells.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are adjacent to an ally who also has this feat, you receive a +4 competence bonus on concentration checks. If your ally is wielding a buckler or a light shield, this bonus increases by +1. If your ally is wielding a heavy shield or a tower shield, this bonus increases by +2. Finally, if an enemy threatening you and your ally has the Disruptive feat, or another ability that increases the DC of concentration checks, the amount of the increase is halved."
  },
  {
    "name": "Sickening Spell",
    "type": "Metamagic",
    "description": "You can sicken creatures with your spells.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can modify a spell to sicken a creature damaged by the spell. When a creature takes damage from this spell, they become sickened for a number of rounds equal to the original level of the spell. If the spell allows a saving throw, a successful save negates the sickening effect. If the spell does not allow a save, the target can make a Fortitude save to negate the sickening effect. If the spell effect also causes the creature to become sickened, the duration of this metamagic effect is added on to the duration of the spell. A sickening spell uses up a spell slot two levels higher than the spell's actual level. Spells that do not inflict damage do not benefit from this feat."
  },
  {
    "name": "Sidestep",
    "type": "Combat",
    "description": "You can reposition yourself after a foe's missed swing.",
    "prerequisites": ["Dex 13","Dodge","Mobility"],
    "prerequisitesFeats": ["Dex 13","Dodge","Mobility"],
    "benefit": "Whenever an opponent misses you with a melee attack, you may move 5 feet as an immediate action so long as you remain within that opponent's threatened area. This movement does not provoke attacks of opportunity. If you take this step, you cannot take a 5-foot step during your next turn. If you take an action to move during your next turn, subtract 5 feet from your total movement."
  },
  {
    "name": "Smash",
    "type": "Combat",
    "description": "You overcome obstacles by breaking them.",
    "prerequisites": ["Power Attack","half-orc"],
    "prerequisitesFeats": ["Power Attack","half-orc"],
    "benefit": "When you attack an inanimate, unattended object, you ignore the first 5 points of its hardness. You also receive a +5 bonus on Strength checks made to knock down or break open doors."
  },
  {
    "name": "Smell Fear",
    "type": "General",
    "description": "You can catch the sour scent of fear on the wind.",
    "prerequisites": ["Keen Scent","half-orc or orc"],
    "prerequisitesFeats": ["Keen Scent","half-orc or orc"],
    "benefit": "You receive a +4 bonus on Perception checks to detect creatures with the shaken, frightened, or panicked conditions using scent. You can substitute your Perception skill for Sense Motive skill checks if the subject has one of the previous conditions or is attempting to cover up their fear in some way."
  },
  {
    "name": "Sociable",
    "type": "General",
    "description": "You have a way of helping others to get along.",
    "prerequisites": ["Cha 13","half-elf"],
    "prerequisitesFeats": ["Cha 13","half-elf"],
    "benefit": "As a move action, you grant all friendly creatures within 30 feet who can see or hear you (including yourself ) a +2 bonus on Diplomacy checks for a number of rounds equal to your Charisma modifier (minimum 1 round)."
  },
  {
    "name": "Spell Perfection",
    "type": "General",
    "description": "You are unequaled at the casting of one particular spell.",
    "prerequisites": ["Spellcraft 15 ranks","at least three metamagic feats"],
    "prerequisitesFeats": ["Spellcraft 15 ranks","at least three metamagic feats"],
    "benefit": "Pick one spell which you have the ability to cast. Whenever you cast that spell you may apply any one metamagic feat you have to that spell without affecting its level or casting time, as long as the total modified level of the spell does not use a spell slot above 9th level. In addition, if you have other feats which allow you to apply a set numerical bonus to any aspect of this spell (such as Spell Focus, Spell Penetration, Weapon Focus [ray], and so on), double the bonus granted by that feat when applied to this spell."
  },
  {
    "name": "Spider Step",
    "type": "General",
    "description": "Your physical mastery grants you an impossible stride.",
    "prerequisites": ["Acrobatics 6 ranks","Climb 6 ranks","monk level 6th"],
    "prerequisitesFeats": ["Acrobatics 6 ranks","Climb 6 ranks","monk level 6th"],
    "benefit": "As a move action, you can move up to half your slow fall distance (maximum 50 feet) across a wall or ceiling or across ropes, branches, or even water or other surfaces that cannot support your weight. You must reach a solid, level surface by the end of your turn or you will fall."
  },
  {
    "name": "Stabbing Shot",
    "type": "Combat",
    "description": "You can clear the way to continue using your bow.",
    "prerequisites": ["Rapid Shot","elf"],
    "prerequisitesFeats": ["Rapid Shot","elf"],
    "benefit": "When adjacent to an opponent and making a full-attack action with a longbow or shortbow (including composite bows), you may choose to make a melee attack against that opponent with a drawn arrow rather than firing it. If the attack hits-whether or not it does damage-your target is pushed back 5 feet away from you. You can then fire arrows from your bow normally, at the original target, or at another target within range. This melee attack replaces the extra attack from Rapid Shot, and all of your attack rolls for the round (the melee attack and the ranged attacks) take a -2 penalty. If your initial attack leaves you with no enemies threatening you, you can make the subsequent ranged attack or attacks without provoking attacks of opportunity."
  },
  {
    "name": "Steel Soul",
    "type": "General",
    "description": "You are especially resistant to magic.",
    "prerequisites": ["Dwarf","hardy racial trait"],
    "prerequisitesFeats": ["Dwarf","hardy racial trait"],
    "benefit": "You receive a +4 racial bonus on saving throws against spells and spell-like abilities. This replaces the normal bonus from the dwarf 's hardy racial trait."
  },
  {
    "name": "Step Up and Strike",
    "type": "Combat",
    "description": "When a foe tries to move away, you can follow and make an attack.",
    "prerequisites": ["Dex 13","Following Step","Step Up","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 13","Following Step","Step Up","base attack bonus +6"],
    "benefit": "When using the Step Up or Following Step feats to follow an adjacent foe, you may also make a single melee attack against that foe at your highest base attack bonus. This attack counts as one of your attacks of opportunity for the round. Using this feat does not count toward the number of actions you can usually take each round."
  },
  {
    "name": "Stone-Faced",
    "type": "General",
    "description": "Rocks show more expression than you.",
    "prerequisites": ["Dwarf"],
    "prerequisitesFeats": ["Dwarf"],
    "benefit": "You receive a +4 bonus on Bluff checks to lie or conceal your feelings or true motives, but not to feint in combat or deliver secret messages. In addition, the DC for Sense Motive checks to get a hunch about you is 25 rather than 20."
  },
  {
    "name": "Stone Sense",
    "type": "General",
    "description": "You can feel movement in the very earth and stones around you.",
    "prerequisites": ["Improved Stonecunning","Perception 10 ranks"],
    "prerequisitesFeats": ["Improved Stonecunning","Perception 10 ranks"],
    "benefit": "You gain tremorsense to a range of 10 feet."
  },
  {
    "name": "Stone Singer",
    "type": "General",
    "description": "Your songs are in accordance with the ways and lands of your people.",
    "prerequisites": ["Cha 13","bardic performance class feature","dwarf"],
    "prerequisitesFeats": ["Cha 13","bardic performance class feature","dwarf"],
    "benefit": "When you use bardic performance with audible components underground, the range or area of your chosen performance is doubled, and you can affect deaf creatures if they possess tremorsense and are in your new range. In addition, the DC for saving throws against your bardic performance is increased by +2 for creatures of the earth subtype, regardless of where the performance occurs."
  },
  {
    "name": "Stunning Assault",
    "type": "Combat",
    "description": "You powerful but imprecise attacks can stun your enemies.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +16"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +16"],
    "benefit": "You can choose to take a -5 penalty on all melee attack rolls and combat maneuver checks to stun targets you hit with your melee attacks for 1 round. A successful Fortitude save negates the effect. The DC of this save is 10 + your base attack bonus. You must choose to use this feat before making the attack roll, and its effects last until your next turn."
  },
  {
    "name": "Summoner's Call",
    "type": "General",
    "description": "Whenever you summon your eidolon, it is more powerful for a brief period of time.",
    "prerequisites": ["Eidolon class feature"],
    "prerequisitesFeats": ["Eidolon class feature"],
    "benefit": "Whenever you summon your eidolon, you may give it a +2 enhancement bonus to its Strength, Dexterity, or Constitution. This bonus lasts 10 minutes after the summoning ritual is complete."
  },
  {
    "name": "Sundering Strike",
    "type": "Combat",
    "description": "Your critical hits can sunder your foes' weapons.",
    "prerequisites": ["Str 13","Improved Sunder","Power Attack","base attack bonus +9"],
    "prerequisitesFeats": ["Str 13","Improved Sunder","Power Attack","base attack bonus +9"],
    "benefit": "Whenever you score a critical hit with a melee attack, you can sunder your opponent's weapon, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent's CMD, you may deal damage to your opponent's weapon as if from the sunder combat maneuver (roll normal damage to the weapon separately). This does not provoke an attack of opportunity."
  },
  {
    "name": "Swap Places",
    "type": "Combat",
    "description": "You are skilled at changing places with your ally during a chaotic melee.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are adjacent to an ally who also has this feat, you can move into your ally's square as part of normal movement. At the same time, your ally moves into your previous space as an immediate action. Both you and your ally must be willing and able to move to take advantage of this feat. Your ally must be the same size as you to utilize this feat. Your ally does not provoke an attack of opportunity from this movement, but you provoke as normal. This movement does not count against your ally's movement on his next turn."
  },
  {
    "name": "Swift Aid",
    "type": "Combat",
    "description": "With a quick but harmless swipe, you can aid an ally's assault.",
    "prerequisites": ["Int 13","Combat Expertise","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","base attack bonus +6"],
    "benefit": "As a swift action, you can attempt the aid another action, granting your ally either a +1 bonus on his next attack roll or a +1 bonus to his AC."
  },
  {
    "name": "Taunt",
    "type": "General",
    "description": "You may be small, but your remarks cut others down to size.",
    "prerequisites": ["Cha 13","Small size or smaller"],
    "prerequisitesFeats": ["Cha 13","Small size or smaller"],
    "benefit": "You can demoralize opponents using Bluff rather than Intimidate (see the Intimidate skill description for details) and take no skill check penalty for being smaller than your target."
  },
  {
    "name": "Team Up",
    "type": "Combat",
    "description": "When you are ganging up against an enemy, you can aid an ally with a quick feint.",
    "prerequisites": ["Int 13","Combat Expertise","Gang Up","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Gang Up","base attack bonus +6"],
    "benefit": "When you and at least two of your allies are adjacent to an opponent, you can attempt the aid another action as a move action."
  },
  {
    "name": "Teleport Tactician",
    "type": "Combat",
    "description": "You are highly alert for enemies using teleportation to approach you or flee from you.",
    "prerequisites": ["Combat Reflexes","Disruptive","Spellbreaker"],
    "prerequisitesFeats": ["Combat Reflexes","Disruptive","Spellbreaker"],
    "benefit": "Any creature using a teleportation effect to enter or leave a square threatened by you provokes an attack of opportunity, even if casting defensively or using a supernatural ability."
  },
  {
    "name": "Tenacious Transmutation",
    "type": "General",
    "description": "Your mastery of the magic of changing makes your transmutations more durable.",
    "prerequisites": ["Spell Focus (transmutation)"],
    "prerequisitesFeats": ["Spell Focus (transmutation)"],
    "benefit": "The DC of caster level checks to dispel or remove your transmutations increases by 2; even if the spell is negated, its effects persist for 1 additional round before dissipating."
  },
  {
    "name": "Thundering Spell",
    "type": "Metamagic",
    "description": "You can conjure your spells into existence with blaring thunder or fearful shrieks, deafening creatures damaged by their effects.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can modify a spell to deafen a creature damaged by the spell. When a creature takes damage from this spell, it becomes deafened for a number of rounds equal to the original level of the spell. If the spell allows a saving throw, a successful save negates the deafening effect. If the spell does not allow a save, the target can make a Fortitude save to negate the deafening effect. If the spell effect also causes the creature to become deafened, the duration of this metamagic effect is added to the duration of the spell. A thundering spell uses up a spell slot two levels higher than the spell's actual level. Spells that do not inf lict damage do not benefit from this feat."
  },
  {
    "name": "Touch of Serenity",
    "type": "Combat",
    "description": "With a single touch you can reduce the threat of even the most savage of foes.",
    "prerequisites": ["Wis 18","Improved Unarmed Strike","base attack bonus +8"],
    "prerequisitesFeats": ["Wis 18","Improved Unarmed Strike","base attack bonus +8"],
    "benefit": "You must declare that you are using this feat before you make your attack roll (thus a failed attack roll ruins the attempt). On a successful hit, the attack deals no damage and bestows no other effect or condition, but the target cannot cast spells or attack (including attacks of opportunity and attacks as immediate actions) for 1 round unless it succeeds on a Will saving throw with a DC of 10 + 1/2 your character level + your Wisdom modifier. You may attempt a touch of serenity once per day for every four levels you have attained (but see Special), and no more than once per round."
  },
  {
    "name": "Trick Riding",
    "type": "Combat",
    "description": "You are not only skilled at controlling a horse in combat; you can make it look like art.",
    "prerequisites": ["Ride 9 ranks","Mounted Combat"],
    "prerequisitesFeats": ["Ride 9 ranks","Mounted Combat"],
    "benefit": "While wearing light or no armor, you do not need to make Ride skill checks for any task listed in the Ride skill with a DC of 15 or lower. You do not take a -5 penalty for riding a mount bareback. You can make a check using Mounted Combat to negate a hit on your mount twice per round instead of just once."
  },
  {
    "name": "Tripping Strike",
    "type": "Combat",
    "description": "The force intrinsic to your critical hits can knock your foes down.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Trip","base attack bonus +9"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Trip","base attack bonus +9"],
    "benefit": "Whenever you score a critical hit with a melee attack, you can trip your opponent, in addition to the normal damage dealt by the attack. If your confirmation roll exceeds your opponent's CMD, you may knock your opponent prone as if from the trip combat maneuver. This does not provoke an attack of opportunity. If you are tripped during your own trip attempt, you can drop your weapon to avoid being tripped."
  },
  {
    "name": "Under and Over",
    "type": "Combat",
    "description": "You can slip under a foe trying to grab you, knocking him off balance.",
    "prerequisites": ["Agile Maneuvers","Small size or smaller"],
    "prerequisitesFeats": ["Agile Maneuvers","Small size or smaller"],
    "benefit": "If an opponent larger than you attempts to grapple you and fails, you may make a trip attack as an immediate action against that opponent with a +2 bonus. This does not provoke an attack of opportunity."
  },
  {
    "name": "Underfoot",
    "type": "Combat",
    "description": "You slip under and around your larger foes.",
    "prerequisites": ["Dodge","Mobility","Small size or smaller"],
    "prerequisitesFeats": ["Dodge","Mobility","Small size or smaller"],
    "benefit": "You receive a +4 dodge bonus on Acrobatics checks to move past opponents without provoking attacks of opportunity, so long as they are larger than you. In addition, you gain a +2 dodge bonus to Armor Class against attacks of opportunity caused when you move out of or within a larger opponent's threatened area (this stacks with the +4 bonus provided by Mobility, for a total bonus of +6)."
  },
  {
    "name": "Vermin Heart",
    "type": "General",
    "description": "You have a special bond with things that creep, crawl, skitter, and sting.",
    "prerequisites": ["Wild empathy class feature"],
    "prerequisitesFeats": ["Wild empathy class feature"],
    "benefit": "You may target vermin with spells and special abilities that only affect animals (although they are still affected by spells targeting vermin as well). You may use wild empathy to inf luence vermin as easily as you inf luence animals."
  },
  {
    "name": "War Singer",
    "type": "General",
    "description": "Your songs draw upon the savage chants and brutal ways of your people, inspiring those around you to new heights of violence and savagery.",
    "prerequisites": ["Cha 13","bardic performance class feature","half-orc or orc"],
    "prerequisitesFeats": ["Cha 13","bardic performance class feature","half-orc or orc"],
    "benefit": "When you use bardic performance with audible components on a battlefield (any area where a combat involving a dozen or more combatants is taking place), the range or area of your chosen performance is doubled. In addition, the DC for saving throws against your bardic performance is increased by +2 for creatures of the orc subtype, regardless of where the performance occurs."
  },
  {
    "name": "Well-Prepared",
    "type": "General",
    "description": "Somehow, you always seem to have the right tools or supplies close at hand.",
    "prerequisites": ["Halfling"],
    "prerequisitesFeats": ["Halfling"],
    "benefit": "Once per day, when confronted with a situation that calls for a particular mundane item of equipment, you may make a Sleight of Hand check with a DC of 10 plus the item's cost in gold pieces to \"happen\" to have such an item on your person. For example, having a crowbar would be DC 12, whereas a flask of acid would be DC 20. The item must be something you can easily carry-if you are on foot and have only a backpack, for example, you could not have a large iron cauldron. You cannot have magical items using this feat, nor can you have specif ic items, such as the key to a particular door. If you are stripped of your equipment or possessions, you lose the benef its of this feat until you have at least a day to resupply and \"acquire\" new items. You must pay for these items normally."
  },
  {
    "name": "Adder Strike",
    "type": "Combat",
    "description": "You can quickly apply poison to gloved hands, protected feet, or other protected body parts, delivering the poison with your unarmed strikes.",
    "prerequisites": ["Poison use class feature","Craft (alchemy) 1 rank","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Poison use class feature","Craft (alchemy) 1 rank","Improved Unarmed Strike"],
    "benefit": "As a swift action, you can apply one dose of contact or injury poison to two body parts that you use for unarmed strikes. You must still protect yourself against exposure to contact poisons you apply in this way."
  },
  {
    "name": "Adept Champion",
    "type": "General",
    "description": "You can alter your smite ability, channeling the power of your deity into divine inspiration that grants you greater aptitude for performing combat maneuvers.",
    "prerequisites": ["Smite evil class feature","base attack bonus +5"],
    "prerequisitesFeats": ["Smite evil class feature","base attack bonus +5"],
    "benefit": "While using your smite evil class feature, as a swift action at the start of your turn, you can forgo the bonus on damage rolls and instead gain half that bonus as a bonus on combat maneuver checks against the target of your smite. The effects of your smite evil feature return to normal at the start of your next turn."
  },
  {
    "name": "Amateur Gunslinger",
    "type": "Combat",
    "description": "Although you are not a gunslinger, you have and can use grit.",
    "prerequisites": ["You have no levels in a class that has the grit class feature"],
    "prerequisitesFeats": ["You have no levels in a class that has the grit class feature"],
    "benefit": "You gain a small amount of grit and the ability to perform a single 1st-level deed from the gunslinger deed class feature. At the start of the day, you gain 1 grit point, though throughout the day you can gain grit points up to a maximum of your Wisdom modifier (minimum 1). You can regain grit using the rules for the gunslinger's grit class feature (see page 9). You can spend this grit to perform the 1st-level deed you chose upon taking this feat, and any other deed you have gained through feats or magic items."
  },
  {
    "name": "Arc Slinger",
    "type": "Combat",
    "description": "You can twirl your sling in a way that maximizes its effectiveness.",
    "prerequisites": ["Point-Blank Shot","proficient with sling or halfling sling staff"],
    "prerequisitesFeats": ["Point-Blank Shot","proficient with sling or halfling sling staff"],
    "benefit": "When using a sling or sling staff, you reduce your penalty on ranged attack rolls due to range by 2. Point-Blank Shot's damage bonus applies within the first normal range increment of your sling (50 feet) or sling staff (80 feet)."
  },
  {
    "name": "Back to Back",
    "type": "General",
    "description": "Your ally's eyes are your own, and yours are his.",
    "prerequisites": ["Perception 3 ranks"],
    "prerequisitesFeats": ["Perception 3 ranks"],
    "benefit": "While you are flanked and adjacent to an ally with this feat, you receive a +2 circumstance bonus to AC against attacks from opponents flanking you."
  },
  {
    "name": "Betrayer",
    "type": "General",
    "description": "You can charm people into lowering their defenses, allowing you to ambush them more effectively.",
    "prerequisites": ["Quick Draw","Persuasive","base attack bonus +3"],
    "prerequisitesFeats": ["Quick Draw","Persuasive","base attack bonus +3"],
    "benefit": "When you succeed at a Diplomacy check to change a creature's attitude, you can draw a weapon and make a single melee attack against that creature as an immediate action. If you changed your target's attitude to friendly or better, your target is considered flat-footed against this attack. If the target survives, it takes a -2 penalty on its initiative check for this combat. Once you attack a creature, its attitude becomes hostile."
  },
  {
    "name": "Binding Throw",
    "type": "Combat",
    "description": "You can strike your enemy and use the blow as an opportunity to grab and hold him.",
    "prerequisites": ["Improved Grapple","Improved Trip","Improved Unarmed Strike","Ki Throw"],
    "prerequisitesFeats": ["Improved Grapple","Improved Trip","Improved Unarmed Strike","Ki Throw"],
    "benefit": "After you successfully use the Ki Throw feat on an opponent, you can use a swift action to attempt a grapple combat maneuver against that opponent."
  },
  {
    "name": "Bludgeoner",
    "type": "Combat",
    "description": "You can knock foes out cold with just about any blunt instrument.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You take no penalty on attack rolls for using a lethal bludgeoning weapon to deal nonlethal damage."
  },
  {
    "name": "Boar Ferocity",
    "type": "Combat",
    "description": "Your flesh-ripping unarmed strikes terrify your victims.",
    "prerequisites": ["Improved Unarmed Strike","Boar Style","Intimidate 6 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Boar Style","Intimidate 6 ranks"],
    "benefit": "You add piercing damage to the damage types you can deal with your unarmed strikes. Further, you gain a +2 bonus on Intimidate checks to demoralize opponents. While using Boar Style, whenever you tear an opponent's f lesh, you can spend a free action to make an Intimidate check to demoralize that opponent."
  },
  {
    "name": "Boar Shred",
    "type": "Combat",
    "description": "The wounds you inf lict with your unarmed strikes bleed, giving you renewed vigor.",
    "prerequisites": ["Improved Unarmed Strike","Boar Ferocity","Boar Style","Intimidate 9 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Boar Ferocity","Boar Style","Intimidate 9 ranks"],
    "benefit": "You can make an Intimidate check to demoralize an opponent as a move action. While using Boar Style, whenever you tear an opponent's flesh, once per round at the start of that opponent's turn he takes 1d6 bleed damage. The bleed damage dealt while using Boar Style persist even if you later switch to a different style."
  },
  {
    "name": "Boar Style",
    "type": "Combat",
    "description": "Your sharp teeth and nails rip your foes open.",
    "prerequisites": ["Improved Unarmed Strike","Intimidate 3 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Intimidate 3 ranks"],
    "benefit": "You can deal bludgeoning damage or slashing damage with your unarmed strikes-changing damage type is a free action. While using this style, once per round when you hit a single foe with two or more unarmed strikes, you can tear flesh. When you do, you deal 2d6 bleed damage with the attack."
  },
  {
    "name": "Body Shield",
    "type": "Combat",
    "description": "With a sly maneuver, you force a grappled opponent into the path of an incoming attack.",
    "prerequisites": ["Dex 13","Improved Grapple","Improved Unarmed Strike","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 13","Improved Grapple","Improved Unarmed Strike","base attack bonus +6"],
    "benefit": "As an immediate action while you are grappling an adjacent creature, you can make a grapple combat maneuver check against that creature to gain cover against a single attack. If you are successful and the attack misses you, that attack targets the creature you used as cover, using the same attack roll. You cannot use this feat against a creature grappling you, and the cover you gain ends after the attack you gained cover against is resolved."
  },
  {
    "name": "Bolstered Resilience",
    "type": "General",
    "description": "You can dramatically increase your damage reduction in exchange for its temporary loss.",
    "prerequisites": ["Damage reduction"],
    "prerequisitesFeats": ["Damage reduction"],
    "benefit": "As an immediate action, you can double your DR against a single attack, to a maximum of DR 20. The type of the DR remains unchanged. If the attack you are guarding against is not successful, the increased damage reduction persists until you are hit with an attack or until the start of your next turn, whichever happens first. At the start of your next turn, you become fatigued. You cannot use this feat while you are fatigued."
  },
  {
    "name": "Bonebreaker",
    "type": "Combat",
    "description": "When your opponent is unable to adequately defend against them, your precise unarmed strikes break bone and tear tissue.",
    "prerequisites": ["Dex 13","Improved Grapple","Improved Unarmed Strike","Jawbreaker","Stunning Fist","Heal 9 ranks"],
    "prerequisitesFeats": ["Dex 13","Improved Grapple","Improved Unarmed Strike","Jawbreaker","Stunning Fist","Heal 9 ranks"],
    "benefit": "When you make a successful Stunning Fist attempt against an opponent that is grappled, helpless, or stunned, you can forgo any other Stunning Fist effect to deal 1d6 Strength or Dexterity damage to that opponent."
  },
  {
    "name": "Branded for Retribution",
    "type": "General",
    "description": "You brand an enemy with your bane weapon, making it more vulnerable to your allies' attacks.",
    "prerequisites": ["Bane class feature"],
    "prerequisitesFeats": ["Bane class feature"],
    "benefit": "As a standard action, expend 3 rounds of your bane class feature and make a melee touch attack with the weapon affected by bane. If you hit, your target takes no damage but is branded until the start of your next turn. While this brand remains, your allies' weapons are considered to have the bane ability with which your weapon is imbued when they attack the branded creature."
  },
  {
    "name": "Break Guard",
    "type": "Combat",
    "description": "You can use one of your two weapons to occupy your opponent's defenses while attacking with the other.",
    "prerequisites": ["Dex 15","Int 13","Combat Expertise","Improved Disarm","Two-Weapon Fighting"],
    "prerequisitesFeats": ["Dex 15","Int 13","Combat Expertise","Improved Disarm","Two-Weapon Fighting"],
    "benefit": "While wielding two weapons, whenever you successfully use one weapon to disarm an opponent, you can spend a swift action to attack the opponent you attempted to disarm using your other weapon."
  },
  {
    "name": "Broken Wing Gambit",
    "type": "Combat",
    "description": "You feign weakness, making yourself a tempting and distracting target.",
    "prerequisites": ["Bluff 5 ranks"],
    "prerequisitesFeats": ["Bluff 5 ranks"],
    "benefit": "Whenever you make a melee attack and hit your opponent, you can use a free action to grant that opponent a +2 bonus on attack and damage rolls against you until the end of your next turn or until your opponent attacks you, whichever happens first. If that opponent attacks you with this bonus, it provokes attacks of opportunity from your allies who have this feat."
  },
  {
    "name": "Cartwheel Dodge",
    "type": "General",
    "description": "You use your knack for avoiding damage to reposition yourself in combat.",
    "prerequisites": ["Evasion class feature","improved evasion class feature","acrobatics 12 ranks"],
    "prerequisitesFeats": ["Evasion class feature","improved evasion class feature","acrobatics 12 ranks"],
    "benefit": "When you successfully use improved evasion to avoid taking damage, you can move up to half your speed as an immediate action. This movement provokes attacks of opportunity as normal."
  },
  {
    "name": "Cavalry Formation",
    "type": "Combat",
    "description": "You are skilled at riding in close formation with your mounted allies without impeding your effectiveness on the battlefield.",
    "prerequisites": ["Mounted Combat"],
    "prerequisitesFeats": ["Mounted Combat"],
    "benefit": "You and your mount can overlap the space of mounts whose riders have this feat, although no more than two creatures can share any one square. Further, you can charge through a space containing an allied mount if that mount's rider has this feat, although the space from which you make your charge attack must comply with this feat's other benefit or be unoccupied."
  },
  {
    "name": "Channeled Revival",
    "type": "General",
    "description": "You can expend a large portion of your channeling power to reverse death itself.",
    "prerequisites": ["Channel energy 6d6 (positive energy)"],
    "prerequisitesFeats": ["Channel energy 6d6 (positive energy)"],
    "benefit": "As a full-round action that provokes attacks of opportunity, you can expend three uses of your channel energy class feature to restore a dead creature to life as if you had cast the breath of life spell (Core Rulebook 251)."
  },
  {
    "name": "Channeling Scourge",
    "type": "General",
    "description": "Your zeal for hunting your faith's enemies empowers your ability to channel divine energy, as long as you channel that energy for harm.",
    "prerequisites": ["Channel energy class feature","inquisitor level 1st"],
    "prerequisitesFeats": ["Channel energy class feature","inquisitor level 1st"],
    "benefit": "When you use channel energy to deal damage, your inquisitor levels count as cleric levels for determining the number of damage dice and the saving throw DC."
  },
  {
    "name": "Charging Hurler",
    "type": "Combat",
    "description": "You know how to use your momentum to enhance your thrown weapon attacks.",
    "prerequisites": ["Point-Blank Shot"],
    "prerequisitesFeats": ["Point-Blank Shot"],
    "benefit": "You can use the charge rules to make a thrown weapon attack. All the parameters of a charge apply, except that you must only move closer to your opponent, and you must end your movement within 30 feet of that opponent. If you do, you can make a single thrown weapon attack against that opponent, gaining the +2 bonus on the attack roll and taking a -2 penalty to your AC until the start of your next turn."
  },
  {
    "name": "Chokehold",
    "type": "Combat",
    "description": "While grappling, you can cut off an opponent's air and blood supply.",
    "prerequisites": ["Improved Grapple","Improved Unarmed Strike","base attack bonus +6 or monk level 5th"],
    "prerequisitesFeats": ["Improved Grapple","Improved Unarmed Strike","base attack bonus +6 or monk level 5th"],
    "benefit": "While you have an opponent up to one size category larger than you grappled, you can attempt a grapple combat maneuver with a -5 penalty on the check. If you succeed, you have pinned your opponent and hold the opponent in a chokehold. When you maintain the grapple, you also maintain the chokehold. A creature in a chokehold cannot breathe or speak, and thus cannot cast spells that have a verbal component. An opponent you have in a chokehold has to hold his breath or begin suffocating. Any creature that does not breathe, is immune to bleed damage, or is immune to critical hits is immune to the effects of your chokehold. When the grapple is ended, so is the chokehold."
  },
  {
    "name": "Cleaving Finish",
    "type": "Combat",
    "description": "When you strike down an opponent, you can continue your swing into another target.",
    "prerequisites": ["Str 13","Cleave","Power Attack"],
    "prerequisitesFeats": ["Str 13","Cleave","Power Attack"],
    "benefit": "If you make a melee attack, and your target drops to 0 or fewer hit points as a result of your attack, you can make another melee attack using your highest base attack bonus against another opponent within reach. You can make only one extra attack per round with this feat."
  },
  {
    "name": "Close-Quarters Thrower",
    "type": "Combat",
    "description": "You are agile enough to avoid melee attacks while throwing weapons or bombs.",
    "prerequisites": ["Dex 13","Dodge","Weapon Focus with selected thrown weapon"],
    "prerequisitesFeats": ["Dex 13","Dodge","Weapon Focus with selected thrown weapon"],
    "benefit": "Choose a type of thrown weapon. You do not provoke attacks of opportunity for making ranged attacks using the selected weapon. If you are an alchemist, and you select this feat and choose alchemist bombs, you do not provoke attacks of opportunity for the process of drawing components of, creating, and throwing a bomb."
  },
  {
    "name": "Clustered Shots",
    "type": "Combat",
    "description": "You take a moment to carefully aim your shots, causing them all to strike nearly the same spot.",
    "prerequisites": ["Point-Blank Shot","Precise Shot","base attack bonus +6"],
    "prerequisitesFeats": ["Point-Blank Shot","Precise Shot","base attack bonus +6"],
    "benefit": "When you use a full-attack action to make multiple ranged weapon attacks against the same opponent, total the damage from all hits before applying that opponent's damage reduction."
  },
  {
    "name": "Combat Medic",
    "type": "General",
    "description": "You know the urgency of treating wounds in the heat of battle, applying first aid to your allies with such speed that you assure no one gets left behind.",
    "prerequisites": ["Heal 5 ranks"],
    "prerequisitesFeats": ["Heal 5 ranks"],
    "benefit": "Whenever you use Heal to provide first aid, treat caltrop wounds, or treat poison on an ally who also has this feat, you provoke no attacks of opportunity, and can take 10 on the check. Unlike with other teamwork feats, allies that are paralyzed, stunned, unconscious, or cannot otherwise act still count for the purposes of this feet."
  },
  {
    "name": "Combat Style Master",
    "type": "Combat",
    "description": "You shift between combat styles, combining them to increased effect.",
    "prerequisites": ["Improved Unarmed Strike","two or more style feats","base attack bonus +6 or monk level 5th"],
    "prerequisitesFeats": ["Improved Unarmed Strike","two or more style feats","base attack bonus +6 or monk level 5th"],
    "benefit": "You can switch your style as a free action. At the start of combat, pick one of your styles. You start the combat in that style, even in the surprise round."
  },
  {
    "name": "Contingent Channeling",
    "type": "General",
    "description": "You can imbue others with your healing energy so that they can use it at the moment of greatest need.",
    "prerequisites": ["True healer class feature","Selective Channeling"],
    "prerequisitesFeats": ["True healer class feature","Selective Channeling"],
    "benefit": "You can use a standard action to touch an ally and expend one of your daily uses of channel energy to create a repository of positive energy within that ally. This repository contains the same number and type of dice as normal for your channel energy feature, and it lasts for 1 minute. An ally who has such a repository can use an immediate action to roll the repository's dice and regain a number of hit points equal to the result. If an ally who has such a repository is reduced to negative hit points, the repository triggers, allowing the ally to heal without using an action."
  },
  {
    "name": "Coordinated Charge",
    "type": "Combat",
    "description": "You are an expert at leading your allies into the fray.",
    "prerequisites": ["You have at least two other teamwork feats","base attack bonus +10"],
    "prerequisitesFeats": ["You have at least two other teamwork feats","base attack bonus +10"],
    "benefit": "When an ally with this feat charges a creature that is no further away from you than your speed, you can, as an immediate action, charge that creature. You must be able to follow all of the normal charge rules."
  },
  {
    "name": "Crane Riposte",
    "type": "Combat",
    "description": "You use your defensive abilities to make overpowering counterattacks.",
    "prerequisites": ["Crane Style","Crane Wing","Dodge","Improved Unarmed Strike","base attack bonus +8 or monk level 7th"],
    "prerequisitesFeats": ["Crane Style","Crane Wing","Dodge","Improved Unarmed Strike","base attack bonus +8 or monk level 7th"],
    "benefit": "You take only a -1 penalty on attack rolls for fighting defensively. Whenever you are fighting defensively, and you use Crane Wing to add a dodge bonus against one attack, that attack provokes an attack of opportunity from you if it misses. In addition, when you deflect an attack using Crane Wing while taking the total defense action, you may make an attack of opportunity against that opponent (even though you could not normally do so while taking the total defense action)."
  },
  {
    "name": "Crane Style",
    "type": "Combat",
    "description": "Your unarmed fighting techniques blend poise with graceful defense.",
    "prerequisites": ["Dodge","Improved Unarmed Strike","base attack bonus +2 or monk level 1st"],
    "prerequisitesFeats": ["Dodge","Improved Unarmed Strike","base attack bonus +2 or monk level 1st"],
    "benefit": "You take only a -2 penalty on attack rolls for f ighting defensively. While using this style and fighting defensively or using the total defense action, you gain an additional +1 dodge bonus to your Armor Class."
  },
  {
    "name": "Crane Wing",
    "type": "Combat",
    "description": "You move with the speed and finesse of an avian hunter, your sweeping blocks and graceful motions allowing you to deflect melee attacks with ease.",
    "prerequisites": ["Crane Style","Dodge","Improved Unarmed Strike","base attack bonus +5 or monk level 5th"],
    "prerequisitesFeats": ["Crane Style","Dodge","Improved Unarmed Strike","base attack bonus +5 or monk level 5th"],
    "benefit": "Once per round, when fighting defensively with at least one hand free, you can designate one melee attack being made against you before the roll is made. You receive a +4 dodge bonus to AC against that attack. If you are using the total defense action instead, you can deflect one melee attack that would normally hit you. An attack so def lected deals no damage and has no other effect (instead treat it as a miss). You do not expend an action when using this feat, but you must be aware of the attack and not flat-footed."
  },
  {
    "name": "Crusader's Fist",
    "type": "Combat",
    "description": "You pour divine energy into the enemy you strike.",
    "prerequisites": ["Lay on hands class feature or touch of corruption class feature","Improved Unarmed Strike","base attack bonus +6"],
    "prerequisitesFeats": ["Lay on hands class feature or touch of corruption class feature","Improved Unarmed Strike","base attack bonus +6"],
    "benefit": "When you attack with an unarmed strike and hit a creature that you can harm with your lay on hands or touch of corruption feature, you can use a swift action to expend a daily use of that feature to deal its normal damage as if you had hit with the feature's normal touch attack. This extra damage is not multiplied if you scored a critical hit."
  },
  {
    "name": "Crusader's Flurry",
    "type": "General",
    "description": "You learned to use your deity's favored weapon as part of your martial arts form.",
    "prerequisites": ["Channel energy class feature","flurry of blows class feature","Weapon Focus with your deity's favored melee weapon"],
    "prerequisitesFeats": ["Channel energy class feature","flurry of blows class feature","Weapon Focus with your deity's favored melee weapon"],
    "benefit": "You can use your deity's favored weapon as if it were a monk weapon."
  },
  {
    "name": "Crushing Blow",
    "type": "Combat",
    "description": "Your focus allows you to smash your enemy's defenses.",
    "prerequisites": ["Improved Unarmed Strike","Stunning Fist"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Stunning Fist"],
    "benefit": "You can make a Stunning Fist attempt as a full-round action. If successful, instead of stunning your target, you reduce the target's AC by an amount equal to your Wisdom modifier for 1 minute. This penalty does not stack with other penalties applied due to Crushing Blow."
  },
  {
    "name": "Deadly Finish",
    "type": "Combat",
    "description": "Your attacks don't just fell your opponents-they kill them outright.",
    "prerequisites": ["Base attack bonus +11"],
    "prerequisitesFeats": ["Base attack bonus +11"],
    "benefit": "When you hit with a melee attack and reduce your opponent to -1 or fewer hit points, you can force that opponent to succeed at a Fortitude save (DC 15 + the damage your attack dealt) or die."
  },
  {
    "name": "Death from Above",
    "type": "Combat",
    "description": "You allow gravity to add extra force to your charges.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you charge an opponent from higher ground, or from above while flying, you gain a +5 bonus on attack rolls in place of the bonuses from charging and being on higher ground."
  },
  {
    "name": "Death or Glory",
    "type": "Combat",
    "description": "Even when facing a larger foe, you aren't afraid to take great risks in order to finish the fight.",
    "prerequisites": ["Str 13","Power Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","Power Attack","base attack bonus +6"],
    "benefit": "Against a creature of size Large or larger, you can make a single melee attack as a full-round action, gaining a +4 bonus on the attack roll, damage roll, and critical confirmation roll. You gain an additional +1 on this bonus at base attack bonus +11, +16, and +20 (for a maximum of +7 at base attack +20). After you resolve your attack, the opponent you attack can spend an immediate action to make a single melee attack against you with the same bonuses."
  },
  {
    "name": "Deathless Initiate",
    "type": "Combat",
    "description": "For you, impending death is a call to wrath.",
    "prerequisites": ["Str 13","Con 13","orc or half-orc","Diehard","Endurance","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","Con 13","orc or half-orc","Diehard","Endurance","base attack bonus +6"],
    "benefit": "You are not staggered while using the Diehard feat, but if you take a move and a standard action or a fullround action while you are at 0 or fewer hit points you take 1 point of damage. Further, while using the Diehard feat, you gain a +2 bonus on melee attacks and damage rolls."
  },
  {
    "name": "Deathless Master",
    "type": "Combat",
    "description": "Even if you suffer a grievous wound, you can shrug off the damage and continue your relentless assault.",
    "prerequisites": ["Str 13","Con 15","orc or half-orc","Deathless Initiate","Diehard","Endurance","Ironhide**","base attack bonus +9"],
    "prerequisitesFeats": ["Str 13","Con 15","orc or half-orc","Deathless Initiate","Diehard","Endurance","Ironhide**","base attack bonus +9"],
    "benefit": "When you are at 0 or fewer hit points, you do not lose 1 hit point when you take an action."
  },
  {
    "name": "Deathless Zealot",
    "type": "Combat",
    "description": "Only the most serious wounds can stop you.",
    "prerequisites": ["Str 13","Con 17","orc or half-orc","Deathless Initiate","Deathless Master","Diehard","Endurance","Ironhide**","base attack bonus +12"],
    "prerequisitesFeats": ["Str 13","Con 17","orc or half-orc","Deathless Initiate","Deathless Master","Diehard","Endurance","Ironhide**","base attack bonus +12"],
    "benefit": "Whenever a creature rolls to confirm a critical hit against you, it must roll twice and take the lowest result."
  },
  {
    "name": "Deceptive Exchange",
    "type": "General",
    "description": "You trick an adversary into grabbing an object you hand them, even in the midst of combat.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Feint"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Feint"],
    "benefit": "If you successfully feint an opponent, you can trick that opponent into accepting a one-handed object you are holding instead of denying that opponent its Dexterity bonus to AC against your next attack. The opponent must have appendages capable of holding the object you offer, and it must have one such appendage free to take the object."
  },
  {
    "name": "Defensive Weapon Training",
    "type": "Combat",
    "description": "You know how to defend yourself against a certain class of weaponry.",
    "prerequisites": ["Int 13","base attack bonus +5"],
    "prerequisitesFeats": ["Int 13","base attack bonus +5"],
    "benefit": "Choose a weapon group from the fighter's weapon training class ability list (except natural weapons). You gain a +2 dodge bonus on AC when an opponent attacks you using a weapon from that group. If you also have the weapon training class feature in the selected group, your dodge bonus from this feat increases to +3."
  },
  {
    "name": "Deft Shootist Deed",
    "type": "Grit",
    "description": "You keep an eye out while focusing on your weapon, allowing you to avoid attacks while shooting and reloading firearms.",
    "prerequisites": ["Grit class feature or Amateur Gunslinger feat","Dodge","Mobility"],
    "prerequisitesFeats": ["Grit class feature or Amateur Gunslinger feat","Dodge","Mobility"],
    "benefit": "As long as you have at least 1 grit point, you do not provoke attacks of opportunity when shooting or reloading a firearm."
  },
  {
    "name": "Destructive Dispel",
    "type": "General",
    "description": "When you dispel an enemy's magical defenses, those defenses crash down with debilitating effects.",
    "prerequisites": ["Ability to cast dispel magic or greater dispel magic","caster level 11th"],
    "prerequisitesFeats": ["Ability to cast dispel magic or greater dispel magic","caster level 11th"],
    "benefit": "When you successfully make a targeted dispel check against an opponent, that opponent must succeed at a Fortitude save (DC equals the DC of the spell used to dispel) or be stunned until the start of your next turn. If the save succeeds, the opponent is instead sickened until the start of your next turn."
  },
  {
    "name": "Devastating Strike",
    "type": "Combat",
    "description": "Pitting all of your strength and resolve against your enemy, you deliver a strike that is impossible to ignore.",
    "prerequisites": ["Vital Strike","base attack bonus +9"],
    "prerequisitesFeats": ["Vital Strike","base attack bonus +9"],
    "benefit": "Whenever you use Vital Strike, Improved Vital Strike, or Greater Vital Strike, you gain a +2 bonus on each extra weapon damage dice roll those feats grant (+6 maximum). This bonus damage is multiplied on a critical hit."
  },
  {
    "name": "Dimensional Agility",
    "type": "General",
    "description": "Teleportation does not faze you.",
    "prerequisites": ["Ability to use the abundant step class feature or cast dimension door"],
    "prerequisitesFeats": ["Ability to use the abundant step class feature or cast dimension door"],
    "benefit": "After using abundant step or casting dimension door, you can take any actions you still have remaining on your turn. You also gain a +4 bonus on Concentration checks when casting teleportation spells."
  },
  {
    "name": "Dimensional Assault",
    "type": "General",
    "description": "You have been trained to use magical movement as part of your combat tactics.",
    "prerequisites": ["Ability to use the abundant step class feature or cast dimension door","Dimensional Agility"],
    "prerequisitesFeats": ["Ability to use the abundant step class feature or cast dimension door","Dimensional Agility"],
    "benefit": "As a full-round action, you use abundant step or cast dimension door as a special charge. Doing so allows you to teleport up to double your current speed (up to the maximum distance allowed by the spell or ability) and to make the attack normally allowed on a charge."
  },
  {
    "name": "Dimensional Dervish",
    "type": "General",
    "description": "You teleport with a mere thought, savaging your opponents as you flash in and out of reality.",
    "prerequisites": ["Ability to use the abundant step class feature or cast dimension door","Dimensional Agility","Dimensional Assault","base attack bonus +6"],
    "prerequisitesFeats": ["Ability to use the abundant step class feature or cast dimension door","Dimensional Agility","Dimensional Assault","base attack bonus +6"],
    "benefit": "You can take a full-attack action, activating abundant step or casting dimension door as a swift action. If your do, you can teleport up to twice your speed (up to the maximum distance allowed by the spell or ability), dividing this teleportation into increments you use before your first attack, between each attack, and after your last attack. You must teleport at least 5 feet each time you teleport."
  },
  {
    "name": "Dimensional Maneuvers",
    "type": "General",
    "description": "Your rapid teleportation makes your combat maneuvers more difficult to avoid.",
    "prerequisites": ["Ability to use the abundant step class feature or cast dimension door","Dimensional Agility","Dimensional Assault","Dimensional Dervish","base attack bonus +9"],
    "prerequisitesFeats": ["Ability to use the abundant step class feature or cast dimension door","Dimensional Agility","Dimensional Assault","Dimensional Dervish","base attack bonus +9"],
    "benefit": "While using the Dimensional Dervish feat, you gain a +4 bonus on combat maneuver checks to bull rush, disarm, reposition, or trip an opponent."
  },
  {
    "name": "Dimensional Savant",
    "type": "General",
    "description": "You flash into and out of reality so quickly it is impossible to tell exactly where you are at any given time.",
    "prerequisites": ["Dimensional Agility","Dimensional Assault","Dimensional Dervish","ability to use the abundant step class feature or cast dimension door","base attack bonus +9"],
    "prerequisitesFeats": ["Dimensional Agility","Dimensional Assault","Dimensional Dervish","ability to use the abundant step class feature or cast dimension door","base attack bonus +9"],
    "benefit": "While using the Dimensional Dervish feat, you provide flanking from all squares you attack from. Flanking starts from the moment you make an attack until the start of your next turn. You can effectively flank with yourself and with multiple allies when using this feat."
  },
  {
    "name": "Discordant Voice",
    "type": "General",
    "description": "By singing out a precise tone, you cause discordant vibrations to run through allies' weapons.",
    "prerequisites": ["Bardic performance class feature","Perform (oratory or sing) 10 ranks"],
    "prerequisitesFeats": ["Bardic performance class feature","Perform (oratory or sing) 10 ranks"],
    "benefit": "Whenever you are using bardic performance to create a spell-like or supernatural effect, allies within 30 feet of you deal an extra 1d6 points of sonic damage with successful weapon attacks. This damage stacks with other energy damage a weapon might deal. Projectile weapons bestow this extra damage on their ammunition, but the extra damage is dealt only if the projectile hits a target within 30 feet of you."
  },
  {
    "name": "Disengaging Feint",
    "type": "Combat",
    "description": "You can feint to disengage from combat.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Feint"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Feint"],
    "benefit": "As a standard action, use Bluff to feint against an opponent. Instead of denying that opponent his Dexterity bonus to AC, a successful feint allows you to move up to your speed without provoking an attack of opportunity from the opponent you feinted for leaving the square you start in."
  },
  {
    "name": "Disengaging Flourish",
    "type": "Combat",
    "description": "Distracting your opponents gives you the opportunity to make a swift retreat.",
    "prerequisites": ["Int 13","Combat Expertise","Disengaging Feint","Improved Feint"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Disengaging Feint","Improved Feint"],
    "benefit": "As a standard action, make a Bluff check against each opponent that currently threatens you. If you succeed against at least one opponent, you can move up to your speed. This movement does not provoke attacks of opportunity from any opponent you succeeded at feinting against."
  },
  {
    "name": "Disengaging Shot",
    "type": "Combat",
    "description": "You make one last attack before beating a hasty retreat.",
    "prerequisites": ["Int 13","Combat Expertise","Disengaging Feint","Dodge","Improved Feint","Mobility"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Disengaging Feint","Dodge","Improved Feint","Mobility"],
    "benefit": "Whenever you use Disengaging Feint or Disengaging Flourish, you can make a single melee attack against one opponent you succeeded at feinting against. That opponent is denied his Dexterity bonus to AC against this attack."
  },
  {
    "name": "Disorienting Maneuver",
    "type": "General",
    "description": "Your erratic movements disorient your opponent.",
    "prerequisites": ["Dodge","Acrobatics 5 ranks"],
    "prerequisitesFeats": ["Dodge","Acrobatics 5 ranks"],
    "benefit": "If you successfully use Acrobatics to tumble through an opponent's space, you gain a +2 circumstance bonus on attack rolls against that opponent until the start of your next turn. If you choose to make a trip attempt against that opponent, you gain a +4 circumstance bonus on your combat maneuver check. This bonus on trip also lasts until the start of your next turn."
  },
  {
    "name": "Dispel Synergy",
    "type": "General",
    "description": "By tearing away an opponent's magical defenses, you leave your enemy vulnerable, making it difficult for him to resist your spells.",
    "prerequisites": ["Spellcraft 5 ranks"],
    "prerequisitesFeats": ["Spellcraft 5 ranks"],
    "benefit": "If you successfully dispel an ongoing magical effect on an opponent, that opponent takes a -2 penalty on saving throws against your spells until the end of your next turn."
  },
  {
    "name": "Dispelling Critical",
    "type": "General",
    "description": "Your blows attack the physical and arcane forms of your enemies at the same time.",
    "prerequisites": ["Arcane Strike","base attack bonus +11","ability to cast dispel magic"],
    "prerequisitesFeats": ["Arcane Strike","base attack bonus +11","ability to cast dispel magic"],
    "benefit": "If you have dispel magic prepared or can cast it spontaneously, when you score a critical hit against an opponent, you may use a swift action to cast dispel magic to make a targeted dispel against that opponent."
  },
  {
    "name": "Dispelling Fist",
    "type": "General",
    "description": "By focusing on your knowledge of magic and spells that negate its powers, you use your bare hands to rip magical defenses from your enemy.",
    "prerequisites": ["Improved Unarmed Strike","base attack bonus +11","ability to cast dispel magic","caster level 7th"],
    "prerequisitesFeats": ["Improved Unarmed Strike","base attack bonus +11","ability to cast dispel magic","caster level 7th"],
    "benefit": "If you have dispel magic prepared or can cast it spontaneously, you can cast it as a swift action after hitting an opponent with an unarmed strike. Treat this as a targeted dispel against the opponent you hit."
  },
  {
    "name": "Disposable Weapon",
    "type": "General",
    "description": "You ignore the limitations of your equipment, striking harder despite the damage it does to your weapon.",
    "prerequisites": ["Base attack bonus +1","proficient with weapon"],
    "prerequisitesFeats": ["Base attack bonus +1","proficient with weapon"],
    "benefit": "Whenever you use a melee or thrown weapon with the fragile weapon special quality to score a critical threat against an opponent, you can give your weapon the broken condition to automatically conf irm the critical hit."
  },
  {
    "name": "Disruptive Recall",
    "type": "General",
    "description": "You can disrupt an enemy caster's spells to fuel your own arcane power.",
    "prerequisites": ["Spell recall class feature","Spellcraft 5 ranks"],
    "prerequisitesFeats": ["Spell recall class feature","Spellcraft 5 ranks"],
    "benefit": "When you use a melee attack to successfully disrupt an arcane spellcaster's spell, you can immediately use your spell recall class feature to regain a magus spell you have already cast. This ability functions as if you had expended a number of points from your arcane pool equal to the level of the spell you disrupted, up to the maximum level spell you can cast."
  },
  {
    "name": "Distance Thrower",
    "type": "Combat",
    "description": "You are accurate with thrown weapons at longer ranges than normal.",
    "prerequisites": ["Str 13"],
    "prerequisitesFeats": ["Str 13"],
    "benefit": "With a thrown weapon, you reduce your penalty on ranged attack rolls due to range by 2."
  },
  {
    "name": "Djinni Spin",
    "type": "Combat",
    "description": "You can surround yourself with the power of the storm, spinning like a hurricane to unleash a violent blast of electrical energy.",
    "prerequisites": ["Con 15","Wis 17","Djinni Style","Djinni Spirit","Elemental Fist**","Improved Unarmed Strike","base attack bonus +13 or monk level 11th"],
    "prerequisitesFeats": ["Con 15","Wis 17","Djinni Style","Djinni Spirit","Elemental Fist**","Improved Unarmed Strike","base attack bonus +13 or monk level 11th"],
    "benefit": "While using Djinni Style, as a standard action you can spend two Elemental Fist (Advanced Player's Guide 158) attempts to surround yourself with a whirlwind of electrified air. Creatures adjacent to you take your unarmed strike damage plus the electricity damage from your Elemental Fist and are deafened for 1d4 rounds. A successful Fortitude save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from being deafened."
  },
  {
    "name": "Djinni Spirit",
    "type": "Combat",
    "description": "By calling upon the spirits of storms, you can manipulate lightning to protect yourself and buffet your enemies with peals of thunder.",
    "prerequisites": ["Con 15","Wis 15","Djinni Style","Elemental Fist**","Improved Unarmed Strike","base attack bonus +11 or monk level 9th"],
    "prerequisitesFeats": ["Con 15","Wis 15","Djinni Style","Elemental Fist**","Improved Unarmed Strike","base attack bonus +11 or monk level 9th"],
    "benefit": "You gain one additional Elemental Fist (Advanced Player's Guide 158) attempt per day. While using Djinni Style, you gain electricity resistance equal to your base attack bonus or monk level, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take electricity damage from your Elemental Fist attack must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Wis modifier) or be deafened for 1d4 rounds. Those who take damage from your Djinni Spin are deafened, even on a successful saving throw."
  },
  {
    "name": "Djinni Style",
    "type": "Combat",
    "description": "Your hands sheathed in an auras of lightning, you move like the wind.",
    "prerequisites": ["Con 13","Wis 15","Elemental Fist**","Improved Unarmed Strike","base attack bonus +9 or monk level 5th"],
    "prerequisitesFeats": ["Con 13","Wis 15","Elemental Fist**","Improved Unarmed Strike","base attack bonus +9 or monk level 5th"],
    "benefit": "You gain one additional Elemental Fist (Advanced Player's Guide 158) attempt per day. While you are in this style you must use Elemental Fist to deal electricity damage and you gain a bonus on electricity damage rolls equal to your Wisdom bonus. Further, while you are using this style and have remaining Elemental Fist attempts, you also gain a +2 dodge bonus to Armor Class against attacks of opportunity. A condition that makes you lose your Dexterity bonus to AC also makes you lose this dodge bonus."
  },
  {
    "name": "Domain Strike",
    "type": "Combat",
    "description": "You unleash a domain power upon your enemy as part of your unarmed strike.",
    "prerequisites": ["Domain class feature","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Domain class feature","Improved Unarmed Strike"],
    "benefit": "When you gain this feat, choose one domaingranted power that you can use to affect no more than one opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can use a swift action to deliver the effects of the chosen granted power to that opponent. Doing so provokes no attacks of opportunity."
  },
  {
    "name": "Double Bane",
    "type": "General",
    "description": "You extend your bane effect to two weapons.",
    "prerequisites": ["Bane class feature","Two-Weapon Fighting"],
    "prerequisitesFeats": ["Bane class feature","Two-Weapon Fighting"],
    "benefit": "You can apply your bane to a second weapon you are wielding. While your bane class feature is active, at the start of each of your turns as a free action, you choose whether to apply the ability to one weapon or the other, or both. For each round you apply your bane class feature to two weapons, you expend 2 rounds of that feature."
  },
  {
    "name": "Drag Down",
    "type": "Combat",
    "description": "When you are knocked prone, you are skilled at bringing your opponent down with you.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Trip"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Trip"],
    "benefit": "Whenever an opponent successfully trips you, you can attempt to trip that opponent as an immediate action."
  },
  {
    "name": "Dragon Ferocity",
    "type": "Combat",
    "description": "You attack with the strength of a dragon, your telling blows striking fear into your enemies.",
    "prerequisites": ["Str 15","Improved Unarmed Strike","Dragon Style","Stunning Fist","Acrobatics 5 ranks"],
    "prerequisitesFeats": ["Str 15","Improved Unarmed Strike","Dragon Style","Stunning Fist","Acrobatics 5 ranks"],
    "benefit": "While using Dragon Style, you gain a bonus on unarmed strike damage rolls equal to half your Strength bonus. When you score a critical hit or a successful Stunning Fist attempt against an opponent while using this style, that opponent is also shaken for a number of rounds equal to 1d4 + your Strength bonus."
  },
  {
    "name": "Dragon Roar",
    "type": "Combat",
    "description": "The spirit of the dragon wells up inside you and bursts forth in a mighty roar.",
    "prerequisites": ["Str 15","Improved Unarmed Strike","Dragon Style","Stunning Fist","Acrobatics 8 ranks"],
    "prerequisitesFeats": ["Str 15","Improved Unarmed Strike","Dragon Style","Stunning Fist","Acrobatics 8 ranks"],
    "benefit": "You gain one additional Stunning Fist attempt per day. While using Dragon Style, as a standard action you can expend two Stunning Fist attempts to unleash a concussive roar in a 15-foot cone. Creatures caught in the cone take your unarmed strike damage and become shaken for 1d4 rounds. A successful Will save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from being shaken."
  },
  {
    "name": "Dragon Style",
    "type": "Combat",
    "description": "You call upon the spirit of dragonkind, gaining greater resilience, mobility, and fierceness from the blessing of these great beings.",
    "prerequisites": ["Str 15","Improved Unarmed Strike","Acrobatics 3 ranks"],
    "prerequisitesFeats": ["Str 15","Improved Unarmed Strike","Acrobatics 3 ranks"],
    "benefit": "While using this style, you gain a +2 bonus on saving throws against sleep effects, paralysis effects, and stunning effects. You ignore difficult terrain when you charge, run, or withdraw. You can also charge through squares that contain allies. Further, you can add 1-1/2 times your Strength bonus on the damage roll for your first unarmed strike on a given round."
  },
  {
    "name": "Dramatic Display",
    "type": "Combat",
    "description": "Your skill with your weapon is obvious to enemies and onlookers alike.",
    "prerequisites": ["Dazzling Display"],
    "prerequisitesFeats": ["Dazzling Display"],
    "benefit": "When you spend a swift action to make a performance check, you exude an aura of awe-inspiring skill. You gain a +2 bonus on your performance check, and gain a +2 bonus on all attack rolls and combat maneuver checks until the end of your next turn."
  },
  {
    "name": "Earth Child Binder",
    "type": "Combat",
    "description": "Even the greatest giants fear your technique.",
    "prerequisites": ["Wis 13","dwarf or gnome","defensive training racial trait","Earth Child Style","Earth Child Topple","Greater Trip","Improved Trip","Improved Unarmed Strike","Stunning Fist","Acrobatics 9 ranks"],
    "prerequisitesFeats": ["Wis 13","dwarf or gnome","defensive training racial trait","Earth Child Style","Earth Child Topple","Greater Trip","Improved Trip","Improved Unarmed Strike","Stunning Fist","Acrobatics 9 ranks"],
    "benefit": "You can trip a creature of the giant subtype no matter its size. While you are using Earth Child Style, when a prone creature of the giant subtype stands up and provokes an attack of opportunity from you, if you make an unarmed strike, you can declare you are making a Stunning Fist attempt after the attack hits. You gain a +4 bonus to the DC of any Stunning Fist effect you deliver in this way."
  },
  {
    "name": "Earth Child Style",
    "type": "Combat",
    "description": "Your martial training makes you a dangerous and elusive target for giants.",
    "prerequisites": ["Wis 13","dwarf or gnome","defensive training racial trait","Improved Unarmed Strike","Acrobatics 3 ranks"],
    "prerequisitesFeats": ["Wis 13","dwarf or gnome","defensive training racial trait","Improved Unarmed Strike","Acrobatics 3 ranks"],
    "benefit": "While using this style, your defensive training dodge bonus to AC increases to +6. Further, against creatures of the giant subtype, you can add your Wisdom bonus on your unarmed strike damage rolls."
  },
  {
    "name": "Earth Child Topple",
    "type": "Combat",
    "description": "Your mastery of balance and momentum allows you to bring down giants with your bare hands.",
    "prerequisites": ["Wis 13","dwarf or gnome","defensive training racial trait","Earth Child Style","Improved Trip","Improved Unarmed Strike","Acrobatics 6 ranks"],
    "prerequisitesFeats": ["Wis 13","dwarf or gnome","defensive training racial trait","Earth Child Style","Improved Trip","Improved Unarmed Strike","Acrobatics 6 ranks"],
    "benefit": "You can trip a creature of the giant subtype of up to Huge size. While using Earth Child Style, you add your Wisdom bonus on combat maneuver checks made to trip a creature of the giant subtype, as well as on attack rolls to confirm a critical hit against such a creature."
  },
  {
    "name": "Efreeti Stance",
    "type": "Combat",
    "description": "Calling upon the burning spirits of incarnate flame, you can manipulate fire to protect yourself and immolate your foes.",
    "prerequisites": ["Con 15","Wis 15","Efreeti Style","Elemental Fist**","Improved Unarmed Strike","base attack bonus +11 or monk level 9th"],
    "prerequisitesFeats": ["Con 15","Wis 15","Efreeti Style","Elemental Fist**","Improved Unarmed Strike","base attack bonus +11 or monk level 9th"],
    "benefit": "You gain one additional Elemental Fist (Advanced Player's Guide 158) attempt per day. While using Efreeti Style, you gain fire resistance equal to your base attack bonus or your monk level plus any base attack bonus gained from levels in classes other than monk, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take fire damage from your Elemental Fist attack must succeed at a Ref lex save (DC 10 + 1/2 your character level + your Wis modifier) or catch on fire."
  },
  {
    "name": "Efreeti Style",
    "type": "Combat",
    "description": "Your mastery of the unpredictable power of flames allows you to unleash scorching strikes that burn your enemies even when you fail to make contact.",
    "prerequisites": ["Con 13","Wis 15","Elemental Fist**","Improved Unarmed Strike","base attack bonus +9 or monk level 5th"],
    "prerequisitesFeats": ["Con 13","Wis 15","Elemental Fist**","Improved Unarmed Strike","base attack bonus +9 or monk level 5th"],
    "benefit": "You gain one additional Elemental Fist (Advanced Player's Guide 158) attempt per day. While using this style and Elemental Fist to deal fire damage, you gain a bonus on fire damage rolls equal to your Wisdom bonus. Further, if your Elemental Fist melee attack misses while you are using it to deal fire damage, you still deal 1d6 points of fire damage to your target."
  },
  {
    "name": "Efreeti Touch",
    "type": "Combat",
    "description": "Your knowledge of the secrets of the burning wind and blazing sun allows you to collect flames into your hands and unleash them in a gout of elemental fire.",
    "prerequisites": ["Con 15","Wis 17","Efreeti Style","Efreeti Stance","Elemental Fist**","Improved Unarmed Strike","base attack bonus +13 or monk level 11th"],
    "prerequisitesFeats": ["Con 15","Wis 17","Efreeti Style","Efreeti Stance","Elemental Fist**","Improved Unarmed Strike","base attack bonus +13 or monk level 11th"],
    "benefit": "While using Efreeti Style, as a standard action, you can spend two Elemental Fist (Advanced Player's Guide 158) attempts to unleash a 15-foot coneshaped burst of flame. Creatures caught in the cone take your unarmed strike damage plus the fire damage from your Elemental Fist and catch on fire. A successful Ref lex save (DC 10 + 1/2 your character level + your Wis modif ier) reduces the damage by half and prevents a target from catching on fire."
  },
  {
    "name": "Elusive Redirection",
    "type": "General",
    "description": "You can redirect an attack back at your assailant or into an adjacent enemy.",
    "prerequisites": ["Elusive target class feature","Combat Expertise","Improved Unarmed Strike","flowing monk level 12th"],
    "prerequisitesFeats": ["Elusive target class feature","Combat Expertise","Improved Unarmed Strike","flowing monk level 12th"],
    "benefit": "When you successfully use your elusive target class feature to avoid taking damage, you can spend an immediate action and an additional point from your ki pool to redirect that attack back at your attacker or toward any other opponent adjacent to you and your attacker. This attack uses the same attack roll as the original attack, but it targets the opponent you choose."
  },
  {
    "name": "Enfilading Fire",
    "type": "Combat",
    "description": "Your ranged attacks take advantage of the flanking maneuvers of allies.",
    "prerequisites": ["Point-Blank Shot","Precise Shot","one other teamwork feat"],
    "prerequisitesFeats": ["Point-Blank Shot","Precise Shot","one other teamwork feat"],
    "benefit": "You receive a +2 bonus on ranged attacks made against a foe flanked by 1 or more allies with this feat."
  },
  {
    "name": "Escape Route",
    "type": "General",
    "description": "You have trained to watch your allies' backs, covering them as they make tactical withdraws.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "An ally who also has this feat provokes no attacks of opportunity for moving through squares adjacent to you or within your space."
  },
  {
    "name": "Expert Driver",
    "type": "General",
    "description": "When driving a chosen type of vehicle, you exhibit incredible control, maneuvering the vehicle with greater ease and stopping with uncanny precision.",
    "prerequisites": ["Skilled Driver with the selected vehicle type"],
    "prerequisitesFeats": ["Skilled Driver with the selected vehicle type"],
    "benefit": "You can make an accelerate, decelerate, or turn action as a move action instead of a standard action. Furthermore, when stopping a vehicle, you subtract 10 feet from the roll to determine how many feet the vehicle moves forward before it stops."
  },
  {
    "name": "Extra Bane",
    "type": "General",
    "description": "You can use your bane ability more often than normal.",
    "prerequisites": ["Bane class feature"],
    "prerequisitesFeats": ["Bane class feature"],
    "benefit": "You can use your bane ability for 3 additional rounds per day."
  },
  {
    "name": "Extra Grit",
    "type": "General",
    "description": "You have more grit than the ordinary gunslinger.",
    "prerequisites": ["Grit class feature or the Amateur Gunslinger feat"],
    "prerequisitesFeats": ["Grit class feature or the Amateur Gunslinger feat"],
    "benefit": "You gain 2 extra grit points at the start of each day, and your maximum grit increases by 2."
  },
  {
    "name": "False Opening",
    "type": "Combat",
    "description": "When you make a ranged attack while threatened, you can fool your opponent into thinking he has an opening.",
    "prerequisites": ["Dex 13","Dodge","Close Quarters Thrower or Point-Blank Master","Weapon Focus with selected ranged weapon"],
    "prerequisitesFeats": ["Dex 13","Dodge","Close Quarters Thrower or Point-Blank Master","Weapon Focus with selected ranged weapon"],
    "benefit": "Choose a ranged weapon or a thrown weapon. When you make a ranged attack using that weapon, you can choose to provoke an attack of opportunity from one or more opponents who threaten you. You gain a +4 dodge bonus against such attacks. An opponent that makes such an attack and misses you loses his Dexterity bonus to AC against you until the end of your turn."
  },
  {
    "name": "Feint Partner",
    "type": "Combat",
    "description": "A little diversion is all you need to slip through your foe's defenses.",
    "prerequisites": ["Bluff 1 rank"],
    "prerequisitesFeats": ["Bluff 1 rank"],
    "benefit": "Whenever an ally who also has this feat successfully feints an opponent, that opponent also loses his Dexterity bonus to AC against the next attack you make against him before the end of the feinting ally's next turn."
  },
  {
    "name": "Felling Escape",
    "type": "Combat",
    "description": "Through the use of fluid contortions and manipulations of leverage, you can throw your opponent to the ground after escaping a grapple.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Trip"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Trip"],
    "benefit": "When you break an opponent's grapple with a combat maneuver check or Escape Artist check, you can spend a swift action to make a trip attempt against that opponent."
  },
  {
    "name": "Felling Smash",
    "type": "Combat",
    "description": "You commit all your focus to a devastating blow, trying to crush your opponent to the ground.",
    "prerequisites": ["Int 13","Str 13","Combat Expertise","Improved Trip","Power Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Str 13","Combat Expertise","Improved Trip","Power Attack","base attack bonus +6"],
    "benefit": "If you use the attack action to make a single melee attack at your highest base attack bonus while using Power Attack and you hit an opponent, you can spend a swift action to attempt a trip combat maneuver against that opponent."
  },
  {
    "name": "Feral Combat Training",
    "type": "Combat",
    "description": "You were taught a style of martial arts that relies on the natural weapons from your racial ability or class feature.",
    "prerequisites": ["Improved Unarmed Strike","Weapon Focus with selected natural weapon"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Weapon Focus with selected natural weapon"],
    "benefit": "Choose one of your natural weapons. While using the selected natural weapon, you can apply the effects of feats that have Improved Unarmed Strike as a prerequisite, as well as effects that augment an unarmed strike."
  },
  {
    "name": "Field Repair",
    "type": "General",
    "description": "You can repair your broken weapon or armor to serviceability even without the benefits of artisan tools.",
    "prerequisites": ["Craft 4 ranks"],
    "prerequisitesFeats": ["Craft 4 ranks"],
    "benefit": "If you are trained in a Craft skill appropriate to a broken item, you can repair that item with no raw material cost and no penalty on your Craft skill check for using improvised tools. If you spend a day, the item regains 1 hit point plus one-quarter of its original hit points. Alternatively, if the item gained the broken condition because it is a firearm that has misf ired or a siege engine that suffered a mishap, or has the broken condition because it has the fragile weapon quality (or some similar quality), you can make a Craft check with the DC it takes to craft that item (see Table 2-2, below). If the check succeeds, the item loses the broken condition."
  },
  {
    "name": "Final Embrace",
    "type": "Combat",
    "description": "Your coils are particularly deadly, allowing you to constrict opponents of your size or smaller.",
    "prerequisites": ["Str 13","Int 3; naga","serpentfolk","or creature that has the constrict special attack; base attack bonus +3"],
    "prerequisitesFeats": ["Str 13","Int 3; naga","serpentfolk","or creature that has the constrict special attack; base attack bonus +3"],
    "benefit": "You gain the constrict and grab special attacks. Your constrict attack deals damage equal to your unarmed strike or primary natural weapon melee attack. Further, you can grab and constrict opponents up to your size."
  },
  {
    "name": "Final Embrace Horror",
    "type": "Combat",
    "description": "Your constricting attack has become stronger and more lethal.",
    "prerequisites": ["Str 15","Int 3; naga","serpentfolk","or creature that has the constrict special attack; Final Embrace; base attack bonus +6"],
    "prerequisitesFeats": ["Str 15","Int 3; naga","serpentfolk","or creature that has the constrict special attack; Final Embrace; base attack bonus +6"],
    "benefit": "A creature that takes damage from your constrict attack is also shaken until the start of your next turn."
  },
  {
    "name": "Final Embrace Master",
    "type": "Combat",
    "description": "Few creatures can survive the crushing horror of your Final Embrace.",
    "prerequisites": ["Str 17","Int 3; naga","serpentfolk","or creature that has the constrict special attack; Ability Focus (constrict); Final Embrace; Final Embrace Horror; base attack bonus +9"],
    "prerequisitesFeats": ["Str 17","Int 3; naga","serpentfolk","or creature that has the constrict special attack; Ability Focus (constrict); Final Embrace; Final Embrace Horror; base attack bonus +9"],
    "benefit": "Double the number of damage dice for your constrict special attack."
  },
  {
    "name": "Flanking Foil",
    "type": "Combat",
    "description": "Fighting multiple foes is easy for you.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you hit an adjacent opponent with a melee attack, until the start of your next turn, that opponent does not gain any flanking bonus on attack rolls while it is f lanking you and cannot deal sneak attack damage to you. It can still provide a flank for its allies."
  },
  {
    "name": "Fortified Armor Training",
    "type": "Combat",
    "description": "You have learned to let your armor bear the brunt of the worst attacks.",
    "prerequisites": ["Proficient with armor or shield"],
    "prerequisitesFeats": ["Proficient with armor or shield"],
    "benefit": "If an opponent scores a critical hit against you, you can turn the critical hit into a normal hit. If you do, either your armor or your shield gains the broken condition (your choice)."
  },
  {
    "name": "Furious Finish",
    "type": "General",
    "description": "You channel all of your rage into one massive blow to crush your enemy.",
    "prerequisites": ["Rage class feature","Vital Strike","base attack bonus +6"],
    "prerequisitesFeats": ["Rage class feature","Vital Strike","base attack bonus +6"],
    "benefit": "While raging, when you use the Vital Strike feat, you can choose not to roll your damage dice and instead deal damage equal to the maximum roll possible on those damage dice. If you do, your rage immediately ends, and you are fatigued (even if you would not normally be)."
  },
  {
    "name": "Gory Finish",
    "type": "Combat",
    "description": "By drawing upon wells of savagery, you can slay your foe in creative and horrifyingly gruesome manners, intimidating nearby foes.",
    "prerequisites": ["Dazzling Display","Weapon Focus"],
    "prerequisitesFeats": ["Dazzling Display","Weapon Focus"],
    "benefit": "When you use the attack action, you can use a weapon with which you have Weapon Focus to make a single attack at your highest base attack bonus. If you reduce your target to negative hit points, you can spend a swift action to make an Intimidate check to demoralize all foes within 30 feet who could see your attack."
  },
  {
    "name": "Greater Channel Smite",
    "type": "General",
    "description": "You empower your weapon with the might of your deity, which you discharge as you strike your foes.",
    "prerequisites": ["Channel energy class feature","Channel Smite","base attack bonus +8"],
    "prerequisitesFeats": ["Channel energy class feature","Channel Smite","base attack bonus +8"],
    "benefit": "Before making any melee attacks on your turn, you can use a swift action to expend one daily use of your channel energy class feature. The dice from your channel energy feature form a pool of damage dice you can access to further damage creatures normally harmed by the energy you are channeling-undead for positive energy, living creatures for negative energy. Prior to making each melee attack, allocate dice from the pool to be used as extra damage dice if you hit. Your target can make a Will save, as normal, to halve this extra damage. This extra damage is not multiplied when you score a critical hit. If you miss, the extra damage dice remain in your pool, but any dice left unexpended at the end of your turn are wasted."
  },
  {
    "name": "Greater Rending Fury",
    "type": "Combat",
    "description": "When your claws latch on to an opponent, the effect is bloody and horrific.",
    "prerequisites": ["Improved Rending Fury","Rending Fury","base attack bonus +12","rend special attack"],
    "prerequisitesFeats": ["Improved Rending Fury","Rending Fury","base attack bonus +12","rend special attack"],
    "benefit": "Whenever you rend an opponent, you deal 1d6 bleed damage to that opponent. This is an addition to the effects of the rend."
  },
  {
    "name": "Greater Snap Shot",
    "type": "Combat",
    "description": "You can prey on any gap in your foe's guard with impunity, and with even greater range.",
    "prerequisites": ["Dex 17","Improved Snap Shot","Point-Blank Shot","Rapid Shot","Snap Shot","base attack bonus +12"],
    "prerequisitesFeats": ["Dex 17","Improved Snap Shot","Point-Blank Shot","Rapid Shot","Snap Shot","base attack bonus +12"],
    "benefit": "Whenever you make an attack of opportunity using a ranged weapon and hit, you gain a +2 bonus on the damage roll and a +2 bonus on rolls to confirm a critical hit with that attack. These bonuses increase to +4 when you have base attack bonus +16, and to +6 when you have base attack bonus +20."
  },
  {
    "name": "Greater Whip Mastery",
    "type": "Combat",
    "description": "You can use a whip to make combat maneuvers with ease.",
    "prerequisites": ["Improved Whip Mastery","Weapon Focus (whip)","Whip Mastery","base attack bonus +8"],
    "prerequisitesFeats": ["Improved Whip Mastery","Weapon Focus (whip)","Whip Mastery","base attack bonus +8"],
    "benefit": "You are so quick with your whip that you never drop it due to a failed disarm or trip combat maneuver attempt. Further, you gain the ability to grapple using your whip. To do so, use the normal grapple rules with the following changes. Attack: You cannot use your whip to attack while you are using it to grapple an opponent. Damage: When dealing damage to your grappled opponent, you deal your whip's weapon damage rather than your unarmed strike damage. Free Hands: You take no penalty on your combat maneuver check for having fewer than two hands free when you use your whip to grapple. Reach: Rather than pulling your grappled opponent adjacent to you when you successfully grapple and when you move the grapple, you must keep him within your whip's reach minus his own reach to maintain the grapple. If the difference in reach is less than 0, such as is the case for a Medium whip wielder and a Gargantuan creature, you cannot grapple that opponent with your whip. If you have to pull a creature adjacent to you to grapple it with your whip, you still provoke an attack of opportunity from that opponent unless you have the Improved Grapple feat. Tie Up: While adjacent to your opponent, you can attempt to use your whip to tie him up. If you do so to an opponent you have grappled rather than pinned, you take only a -5 penalty on the combat maneuver check rather than the normal -10."
  },
  {
    "name": "Guided Hand",
    "type": "General",
    "description": "Your deity blesses any strike you make with that deity's favored weapon.",
    "prerequisites": ["Channel energy class feature","Channel Smite","proficiency with your deity's favored weapon"],
    "prerequisitesFeats": ["Channel energy class feature","Channel Smite","proficiency with your deity's favored weapon"],
    "benefit": "With your deity's favored weapon, you can use your Wisdom modifier instead of your Strength or Dexterity modifier on attack rolls."
  },
  {
    "name": "Gunsmithing",
    "type": "General",
    "description": "You know the secrets of repairing and restoring firearms.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "If you have access to a gunsmith's kit, you can create and restore firearms, craft bullets, and mix black powder for all types of firearms. You do not need to make a Craft check to create firearms and ammunition or to restore firearms. Crafting Firearms: You can craft any early firearm for a cost in raw materials equal to half the price of the firearm. At your GM's discretion, you can craft advanced firearms for a cost in raw materials equal to half the price of the firearm. Crafting a firearm in this way takes 1 day of work for every 1,000 gp of the firearm's price (minimum 1 day). Crafting Ammunition: You can craft bullets, pellets, and black powder for a cost in raw materials equal to 10% of the price. If you have at least 1 rank in Craft (alchemy), you can craft alchemical cartridges for a cost in raw materials equal to half the price of the cartridge. At your GM's discretion, you can craft metal cartridges for a cost in raw materials equal to half the cost of the cartridge. Crafting bullets, black powder, or cartridges takes 1 day of work for every 1,000 gp of ammunition (minimum 1 day). Restoring a Broken Firearm: Each day, with an hour's worth of work, you can use this feat to repair a single firearm with the broken condition. You can take time during a rest period to restore a broken firearm with this feat."
  },
  {
    "name": "Hammer the Gap",
    "type": "Combat",
    "description": "You repeatedly strike the same location, causing increasing amounts of damage.",
    "prerequisites": ["Base attack bonus +6"],
    "prerequisitesFeats": ["Base attack bonus +6"],
    "benefit": "When you take a full-attack action, each consecutive hit against the same opponent deals extra damage equal to the number of previous consecutive hits you have made against that opponent this turn. This damage is multiplied on a critical hit."
  },
  {
    "name": "Harmonic Sage",
    "type": "General",
    "description": "Your thorough understanding of acoustics in artificial surroundings allows you to improve the power of your bardic performance.",
    "prerequisites": ["Bardic performance class feature","Knowledge (engineering) 5 ranks"],
    "prerequisitesFeats": ["Bardic performance class feature","Knowledge (engineering) 5 ranks"],
    "benefit": "While inside an artif icial structure, you can spend a free action to make a DC 15 Knowledge (engineering) check when you begin your bardic performance. Success on this check allows you to do one of the following. Self-Harmonize: By performing over the acoustic reverberations of your performance, you increase the DC of your bardic performance effects +1. Reverberation: You can choose to have the effect of your current bardic performance continue for 1 round after you cease maintaining it, regardless of why you cease maintaining it. You can still have no more than one bardic performance in effect at one time."
  },
  {
    "name": "Haunted Gnome",
    "type": "Combat",
    "description": "You use your gnome magic to take on an eerie illusory appearance.",
    "prerequisites": ["Cha 13","gnome magic racial trait","Knowledge (arcana) 1 rank"],
    "prerequisitesFeats": ["Cha 13","gnome magic racial trait","Knowledge (arcana) 1 rank"],
    "benefit": "You add haunted fey aspect (page 230) to your list of gnome magic spell-like abilities, and you can use this spell-like ability twice per day."
  },
  {
    "name": "Haunted Gnome Assault",
    "type": "Combat",
    "description": "Discharging your disturbing glamer as you strike a telling blow, you haunt a foe with lingering fear.",
    "prerequisites": ["Cha 13","gnome magic racial trait","Haunted Gnome","Knowledge (arcana) 3 ranks"],
    "prerequisitesFeats": ["Cha 13","gnome magic racial trait","Haunted Gnome","Knowledge (arcana) 3 ranks"],
    "benefit": "You gain one use of your gnome magic that is independent of your gnome magic spell-like abilities. When you wish to cast a gnome magic spell-like ability for which you have no daily uses remaining, you can expend this independent use to do so. Further, while you are under the effect of haunted fey aspect (page 230), you can discharge that spell as a free action after you hit an opponent with a charge attack or score a critical hit against an opponent. If you do, that opponent becomes shaken for 1 round."
  },
  {
    "name": "Haunted Gnome Shroud",
    "type": "Combat",
    "description": "Your disturbing glamer expands to make your exact location hard to pinpoint.",
    "prerequisites": ["Cha 13","gnome magic racial trait","Haunted Gnome","Haunted Gnome Assault","Knowledge (arcana) 6 ranks"],
    "prerequisitesFeats": ["Cha 13","gnome magic racial trait","Haunted Gnome","Haunted Gnome Assault","Knowledge (arcana) 6 ranks"],
    "benefit": "You gain another independent use of your gnome magic like that which Haunted Gnome Assault grants. Further, while you are under the effect of haunted fey aspect, you also have concealment (20% miss chance) against an opponent until that opponent deals you damage."
  },
  {
    "name": "Hero's Display",
    "type": "Combat",
    "description": "With a dramatic flourish you display your weapons to the crowd. Onlookers are elated, and your enemies are demoralized.",
    "prerequisites": ["Dazzling Display","Weapon Focus","and proficiency with the selected weapon"],
    "prerequisitesFeats": ["Dazzling Display","Weapon Focus","and proficiency with the selected weapon"],
    "benefit": "When you spend a swift action to make a performance combat check, you present the weapon in which you have Weapon Focus in a triumphant display. You gain a +2 bonus on the performance combat check and make an Intimidate check to demoralize all foes within 30 feet who can see your display."
  },
  {
    "name": "Hex Strike",
    "type": "Combat",
    "description": "Chanting and cursing, you put a hex on your enemy as part of your unarmed strike.",
    "prerequisites": ["Hex class feature","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Hex class feature","Improved Unarmed Strike"],
    "benefit": "When you gain this feat, choose one hex that you can use to affect no more than one opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can use a swift action to deliver the effects of the chosen hex to that opponent. Doing so does not provoke attacks of opportunity."
  },
  {
    "name": "Horse Master",
    "type": "Combat",
    "description": "You blend horsemanship skills from disparate traditions into a seamless mounted combat technique.",
    "prerequisites": ["Expert trainer class feature (Advanced Player's Guide 33)","Ride 6 ranks"],
    "prerequisitesFeats": ["Expert trainer class feature (Advanced Player's Guide 33)","Ride 6 ranks"],
    "benefit": "Use your character level to determine your effective druid level for determining the powers and abilities of your mount."
  },
  {
    "name": "Impact Critical Shot",
    "type": "Combat",
    "description": "With a series of ranged attacks, you bring your foes to their knees or force them to move.",
    "prerequisites": ["Dex 13","Point-Blank Shot","base attack bonus +9"],
    "prerequisitesFeats": ["Dex 13","Point-Blank Shot","base attack bonus +9"],
    "benefit": "Whenever you score a critical hit with a ranged attack, in addition to the normal damage your attack deals, if your confirmation roll exceeds your opponent's CMD, you can push your opponent back as if from the bull rush combat maneuver or knock that target prone as if from a trip combat maneuver. If you choose to bull rush, you cannot move with the target. Your maneuver does not provoke an attack of opportunity."
  },
  {
    "name": "Impaling Critical",
    "type": "Combat",
    "description": "Your critical hits can skewer your foes.",
    "prerequisites": ["Critical Focus","Weapon Specialization with selected piercing melee weapon","base attack bonus +11"],
    "prerequisitesFeats": ["Critical Focus","Weapon Specialization with selected piercing melee weapon","base attack bonus +11"],
    "benefit": "Whenever you score a critical hit with the selected piercing melee weapon, you can impale your opponent on your weapon. While your opponent is impaled in this way, each time he starts his turn, you deal damage equal to your weapon's damage dice plus the extra damage dice from your weapon's properties. As an immediate action, you can pull your weapon out of your opponent. If your opponent is ever outside your reach, you must spend a free action to let go of your weapon or pull it out of him. Your opponent can also spend a move action to pull your weapon out. When the weapon comes out, your opponent takes damage as if starting his turn impaled. While you impale your opponent with your weapon, you cannot use it to attack, and you must hold on to it."
  },
  {
    "name": "Improved Back to Back",
    "type": "General",
    "description": "After much practice, you and an ally have become adept at fighting in close proximity to one another.",
    "prerequisites": ["Back to Back","Perception 5 ranks"],
    "prerequisitesFeats": ["Back to Back","Perception 5 ranks"],
    "benefit": "While you are adjacent to an ally who is flanked and also has this feat, you can spend a swift action to gain a +2 bonus to AC against all flankers until the start of your next turn."
  },
  {
    "name": "Improved Charging Hurler",
    "type": "Combat",
    "description": "Every muscle in your body adds its force to your thrown weapons.",
    "prerequisites": ["Charging Hurler","Point-Blank Shot"],
    "prerequisitesFeats": ["Charging Hurler","Point-Blank Shot"],
    "benefit": "When you use Charging Hurler, your target can be at any range up to your weapon's maximum range. If your target is within 30 feet, you gain a +2 bonus on damage rolls."
  },
  {
    "name": "Improved Cleaving Finish",
    "type": "Combat",
    "description": "You can cut down many opponents in a single strike.",
    "prerequisites": ["Str 13","Cleave","Cleaving Finish","Great Cleave","Power Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","Cleave","Cleaving Finish","Great Cleave","Power Attack","base attack bonus +6"],
    "benefit": "You can use Cleaving Finish any number of times per round."
  },
  {
    "name": "Improved Devastating Strike",
    "type": "Combat",
    "description": "The fury and power channeled through your attack is enough to kill a lesser being outright.",
    "prerequisites": ["Devastating Strike","Vital Strike","base attack bonus +13"],
    "prerequisitesFeats": ["Devastating Strike","Vital Strike","base attack bonus +13"],
    "benefit": "Whenever you use Vital Strike, Improved Vital Strike, or Greater Vital Strike, you gain a bonus on attack rolls to confirm a critical hit equal to the bonus on damage rolls you gain from Devastating Strike."
  },
  {
    "name": "Improved Feint Partner",
    "type": "Combat",
    "description": "Knowledge of your companions' tricks and techniques allow you to take even greater advantage of your allies' feints.",
    "prerequisites": ["Bluff 1 rank","Combat Reflexes","Feint Partner","base attack bonus +6"],
    "prerequisitesFeats": ["Bluff 1 rank","Combat Reflexes","Feint Partner","base attack bonus +6"],
    "benefit": "Whenever an ally who also has this feat successfully feints against an opponent, that opponent provokes an attack of opportunity from you."
  },
  {
    "name": "Improved Impaling Critical",
    "type": "Combat",
    "description": "When you impale a target, you hinder its movement and can cause severe bleeding.",
    "prerequisites": ["Impaling Critical","Critical Focus","Weapon Specialization with selected piercing melee weapon","base attack bonus +13"],
    "prerequisitesFeats": ["Impaling Critical","Critical Focus","Weapon Specialization with selected piercing melee weapon","base attack bonus +13"],
    "benefit": "While you are using Impaling Critical to impale an opponent, and you are still holding onto that weapon, that opponent must succeed at a grapple combat maneuver check against you to pull your weapon out. If you have let go of your weapon, the impaled opponent must spend a standard action to remove the weapon. Until the opponent pulls the weapon out, his speed in all modes is halved and his maneuverability, if any, is reduced by one step. When the weapon comes out, instead of dealing the damage normal for Impaling Critical, you can deal bleed damage equal to your weapon's damage dice result once per round at the start of that opponent's turn."
  },
  {
    "name": "Improved Rending Fury",
    "type": "Combat",
    "description": "Honing the deadliness of your claws, you are a living hurricane of rending fury.",
    "prerequisites": ["Rending Fury","base attack bonus +9","rend special attack"],
    "prerequisitesFeats": ["Rending Fury","base attack bonus +9","rend special attack"],
    "benefit": "Whenever you successfully rend an opponent, you deal an extra 1d6 damage. This damage is not multiplied on a critical hit."
  },
  {
    "name": "Improved Snap Shot",
    "type": "Combat",
    "description": "You can take advantage of your opponent's vulnerabilities from a greater distance, and without exposing yourself.",
    "prerequisites": ["Dex 15","Point-Blank Shot","Rapid Shot","Snap Shot","Weapon Focus","base attack bonus +9"],
    "prerequisitesFeats": ["Dex 15","Point-Blank Shot","Rapid Shot","Snap Shot","Weapon Focus","base attack bonus +9"],
    "benefit": "You threaten an additional 10 feet with Snap Shot."
  },
  {
    "name": "Improved Stalwart",
    "type": "General",
    "description": "You can roll with the punches while simultaneously striking back at your attackers.",
    "prerequisites": ["Diehard","Endurance","Stalwart","base attack bonus +11"],
    "prerequisitesFeats": ["Diehard","Endurance","Stalwart","base attack bonus +11"],
    "benefit": "Double the DR you gain from Stalwart, to a maximum of DR 10/-."
  },
  {
    "name": "Improved Two-Weapon Feint",
    "type": "Combat",
    "description": "Your primary weapon keeps a foe off balance, allowing you to slip your off-hand weapon past his defenses.",
    "prerequisites": ["Dex 17","Int 13","Combat Expertise","Improved Two-Weapon Fighting","Two-Weapon Fighting","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 17","Int 13","Combat Expertise","Improved Two-Weapon Fighting","Two-Weapon Fighting","base attack bonus +6"],
    "benefit": "While using Two-Weapon Fighting to make melee attacks, you can forgo your first primary-hand melee attack to make a Bluff check to feint an opponent. If you successfully feint, that opponent is denied his Dexterity bonus to AC until the end of your turn."
  },
  {
    "name": "Improved Whip Mastery",
    "type": "Combat",
    "description": "You are able to entangle opponents with the coils of your whip.",
    "prerequisites": ["Weapon Focus (whip)","Whip Mastery","base attack bonus +5"],
    "prerequisitesFeats": ["Weapon Focus (whip)","Whip Mastery","base attack bonus +5"],
    "benefit": "While wielding a whip, you threaten the area of your natural reach plus 5 feet. You can also use a whip to grasp an unattended Small or Tiny object within your whip's reach and pull that object into your square. To do so, you must hit AC 10 with a melee touch attack. Further, you can use the whip to grasp onto an object within your whip's reach, using 5 feet of your whip as if it were a grappling hook, allowing you to use the rest of your whip to swing on like a rope. As a free action, you can release the object your whip is grasping, but you cannot use the whip to attack while the whip is grasping an object."
  },
  {
    "name": "Instant Judgment",
    "type": "General",
    "description": "Your hastiest condemnations can have power.",
    "prerequisites": ["Second judgment class feature"],
    "prerequisitesFeats": ["Second judgment class feature"],
    "benefit": "You can spend an immediate action to pronounce a judgment or change an active judgment."
  },
  {
    "name": "Intimidating Bane",
    "type": "General",
    "description": "Your bane weapon strikes fear into your enemies.",
    "prerequisites": ["Bane class feature","Dazzling Display","Weapon Focus","character level 8th"],
    "prerequisitesFeats": ["Bane class feature","Dazzling Display","Weapon Focus","character level 8th"],
    "benefit": "Whenever you use Dazzling Display while your bane feature is active, you gain a +2 bonus on the Intimidate check that Dazzling Display allows against creatures of the type your bane weapon currently affects. Such creatures remain shaken while your bane feature is still active and effective against their creature type."
  },
  {
    "name": "Janni Rush",
    "type": "Combat",
    "description": "When you leap to the attack, your blows are like bolts from on high.",
    "prerequisites": ["Improved Unarmed Strike","Janni Style","Janni Tempest","Acrobatics 8 ranks","Perform (dance) 8 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Janni Style","Janni Tempest","Acrobatics 8 ranks","Perform (dance) 8 ranks"],
    "benefit": "While using Janni Style, you are always considered to have a running start when jumping. Further, if you jump as part of a charge and make an unarmed strike against the designated opponent, a hit allows you to roll the unarmed strike's damage dice twice and add the results together before adding modifiers (such as from Strength) or extra dice (such as precision-based damage or dice from weapon abilities). The extra damage dice are not multiplied on a successful critical hit."
  },
  {
    "name": "Janni Style",
    "type": "Combat",
    "description": "Your whirling fighting technique makes you difficult to hit.",
    "prerequisites": ["Improved Unarmed Strike","Acrobatics 3 ranks","Perform (dance) 3 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Acrobatics 3 ranks","Perform (dance) 3 ranks"],
    "benefit": "While using this style, you take only a -1 penalty to AC for charging. Further, opponents that flank you gain only a +1 bonus on attack rolls against you."
  },
  {
    "name": "Janni Tempest",
    "type": "Combat",
    "description": "Your gale of attacks easily throws your opponents off balance.",
    "prerequisites": ["Improved Unarmed Strike","Janni Style","Acrobatics 5 ranks","Perform (dance) 5 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Janni Style","Acrobatics 5 ranks","Perform (dance) 5 ranks"],
    "benefit": "While you are using the Janni Style feat, whenever you make an unarmed attack and hit an opponent, you gain a +4 bonus on checks made to bull rush or trip that opponent, as long as the combat maneuver is your next attack by the end of your turn. You do not provoke an attack of opportunity from the target of the maneuver."
  },
  {
    "name": "Jawbreaker",
    "type": "Combat",
    "description": "You deliver a powerful strike to the mouth, breaking teeth and bone.",
    "prerequisites": ["Improved Unarmed Strike","Stunning Fist","Heal 6 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Stunning Fist","Heal 6 ranks"],
    "benefit": "When you make a successful Stunning Fist attempt against an opponent that is grappled, helpless, or stunned, instead of imparting any other Stunning Fist effect, you can cripple that opponent's mouth, dealing normal unarmed strike damage and 1d4 points of bleed damage. Until the bleed damage ends, the target is unable to use its mouth to attack, speak clearly, and employ verbal spell components. A creature that is immune to critical hits or that has no discernible mouth is immune to the effects of this feat."
  },
  {
    "name": "Kirin Path",
    "type": "Combat",
    "description": "You turn knowledge of your enemy into a flawless defense.",
    "prerequisites": ["Int 13","Kirin Strike","Kirin Style","Improved Unarmed Strike","Knowledge (arcana) 12 ranks","Knowledge (dungeoneering","local","nature","planes","or religion) 5 ranks"],
    "prerequisitesFeats": ["Int 13","Kirin Strike","Kirin Style","Improved Unarmed Strike","Knowledge (arcana) 12 ranks","Knowledge (dungeoneering","local","nature","planes","or religion) 5 ranks"],
    "benefit": "Whenever you make a Knowledge check to identify a creature, even when using Kirin Style, you can take 10 even if stress and distractions would normally prevent you from doing so. While using Kirin Style against a creature you have identified using that feat, if the creature ends its turn within your threatened area, you can spend a use of your attacks of opportunity that round to move up to 5 feet times your Intelligence modifier (minimum 1). You must end your move in a square threatened by the creature. This move does not provoke attacks of opportunity."
  },
  {
    "name": "Kirin Strike",
    "type": "Combat",
    "description": "You have read the texts of the perfect way, and know how identify to your enemies' weak spot.",
    "prerequisites": ["Int 13","Kirin Style","Improved Unarmed Strike","Knowledge (arcana) 9 ranks","Knowledge (dungeoneering","local","nature","planes","or religion) 3 ranks"],
    "prerequisitesFeats": ["Int 13","Kirin Style","Improved Unarmed Strike","Knowledge (arcana) 9 ranks","Knowledge (dungeoneering","local","nature","planes","or religion) 3 ranks"],
    "benefit": "You gain a +2 insight bonus on Knowledge checks made to identify creatures, including the one Kirin Style allows. While using Kirin Style against a creature you have identified using that feat, as a swift action after you have hit a creature with a melee or ranged attack, you can add twice your Intelligence modifier in damage (minimum 2)."
  },
  {
    "name": "Kirin Style",
    "type": "Combat",
    "description": "Your study and your grace allows you to exploit your enemies' weaknesses.",
    "prerequisites": ["Improved Unarmed Strike","Knowledge (arcana) 6 ranks","Knowledge (dungeoneering","local","nature","planes","or religion) 1 rank"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Knowledge (arcana) 6 ranks","Knowledge (dungeoneering","local","nature","planes","or religion) 1 rank"],
    "benefit": "While using this style, you can spend a swift action to make a Knowledge check to identify a single creature (DC 15 + the creature's CR for this purpose). If you succeed at the check, while using this style, you gain a +2 bonus on saving throws against that creature's attacks, as well as a +2 dodge bonus to AC against that creature's attacks of opportunity. These bonuses last for as long as you use this style. If you cease combat with the creature during this time and resume it later, you can attempt the check again."
  },
  {
    "name": "Knockout Artist",
    "type": "General",
    "description": "You can throw devastating knockout punches.",
    "prerequisites": ["Sneak attack class feature","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Sneak attack class feature","Improved Unarmed Strike"],
    "benefit": "When you use your unarmed strike to deal nonlethal damage and sneak attack damage to an opponent denied his Dexterity bonus to AC, you gain a +1 bonus on the damage roll per each sneak attack damage die you roll."
  },
  {
    "name": "Landing Roll",
    "type": "Combat",
    "description": "You have learned the technique of rolling safely away when an enemy trips you.",
    "prerequisites": ["Dex 13","Dodge","Mobility"],
    "prerequisitesFeats": ["Dex 13","Dodge","Mobility"],
    "benefit": "If you are tripped, you can spend an immediate action to move 5 feet without provoking an attack of opportunity. This does not count as taking a 5-foot step. You fall prone after this movement."
  },
  {
    "name": "Leaping Shot Deed",
    "type": "General",
    "description": "You leap through the air, guns blazing.",
    "prerequisites": ["Dex 13","grit class feature or Amateur Gunslinger feat","Dodge","Mobility","base attack bonus +4"],
    "prerequisitesFeats": ["Dex 13","grit class feature or Amateur Gunslinger feat","Dodge","Mobility","base attack bonus +4"],
    "benefit": "You gain a +2 bonus on Acrobatics checks made to jump. As a full-round action, you can move up to your speed and make firearm attacks at your highest base attack bonus with each loaded firearm you are wielding. You can make these attacks at any point during your movement, and if you are wielding two firearms, you can make the attacks at different points during the movement. At the end of this movement, you fall prone. This deed costs 1 grit point to perform."
  },
  {
    "name": "Mantis Style",
    "type": "Combat",
    "description": "You have learned to target vital areas with crippling accuracy.",
    "prerequisites": ["Improved Unarmed Strike","Stunning Fist","Heal 3 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Stunning Fist","Heal 3 ranks"],
    "benefit": "You gain one additional Stunning Fist attempt per day. While using this style, you gain a +2 bonus to the DC of effects you deliver with your Stunning Fist."
  },
  {
    "name": "Mantis Torment",
    "type": "Combat",
    "description": "Your knowledge of the mysteries of anatomy allows you to cause debilitating pain with a simple touch.",
    "prerequisites": ["Heal 9 ranks","Improved Unarmed Strike","Mantis Style","Mantis Wisdom","Stunning Fist"],
    "prerequisitesFeats": ["Heal 9 ranks","Improved Unarmed Strike","Mantis Style","Mantis Wisdom","Stunning Fist"],
    "benefit": "You gain one additional Stunning Fist attempt per day. While using Mantis Style, you make an unarmed attack that expends two daily attempts of your Stunning Fist. If you hit, your opponent must succeed at a saving throw against your Stunning Fist or become dazzled and staggered with crippling pain until the start of your next turn, and at that point the opponent becomes fatigued."
  },
  {
    "name": "Mantis Wisdom",
    "type": "Combat",
    "description": "Your knowledge of vital areas allows you to land debilitating strikes with precision.",
    "prerequisites": ["Improved Unarmed Strike","Mantis Style","Stunning Fist","Heal 6 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Mantis Style","Stunning Fist","Heal 6 ranks"],
    "benefit": "Treat half your levels in classes other than monk as monk levels for determining effects you can apply to a target of your Stunning Fist per the Stunning Fist monk class feature. You can also use a standard action and a successful melee touch attack to remove any Stunning Fist effect you have applied to a target. While using Mantis Style, you gain a +2 bonus on unarmed attack rolls with which you are using Stunning Fist attempts."
  },
  {
    "name": "Marid Coldsnap",
    "type": "Combat",
    "description": "You can summon a torrent of water to blast your enemies, chilling them to the bone.",
    "prerequisites": ["Con 15","Wis 17","Elemental Fist**","Marid Spirit","Marid Style","Improved Unarmed Strike","base attack bonus +13 or monk level 11th"],
    "prerequisitesFeats": ["Con 15","Wis 17","Elemental Fist**","Marid Spirit","Marid Style","Improved Unarmed Strike","base attack bonus +13 or monk level 11th"],
    "benefit": "While using Marid Style, as a standard action, you can spend two Elemental Fist (Advanced Player's Guide 158) attempts to unleash a 30-foot line of frigid water. Creatures caught in the line take your unarmed strike damage plus the cold damage from your Elemental Fist attack and are entangled in ice as per the Marid Spirit feat. A successful Ref lex save (DC 10 + 1/2 your character level + your Wis modifier) reduces the damage by half and prevents a target from becoming entangled."
  },
  {
    "name": "Marid Spirit",
    "type": "Combat",
    "description": "You can manipulate cold energy to protect yourself and freeze your foes.",
    "prerequisites": ["Con 15","Wis 15","Elemental Fist**","Marid Style","Improved Unarmed Strike","base attack bonus +11 or monk level 9th"],
    "prerequisitesFeats": ["Con 15","Wis 15","Elemental Fist**","Marid Style","Improved Unarmed Strike","base attack bonus +11 or monk level 9th"],
    "benefit": "You gain one additional Elemental Fist (Advanced Player's Guide 158) attempt per day. While using Marid Style, you gain cold resistance equal to your base attack bonus, or monk level plus base attack bonus gained from levels in classes other than monk, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take cold damage from your Elemental Fist attack must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Wis modif ier) or become entangled in ice for 1d4 rounds. The ice has hit points equal to three times your base attack bonus or monk level, whichever is higher, and a break DC of 15 + your base attack bonus or monk level, whichever is higher. Destroying or breaking the ice ends the entangled condition."
  },
  {
    "name": "Marid Style",
    "type": "Combat",
    "description": "You conjure tendrils of icy water to strike your enemies from a distance.",
    "prerequisites": ["Con 13","Wis 15","Elemental Fist**","Improved Unarmed Strike","base attack bonus +9 or monk level 5th"],
    "prerequisitesFeats": ["Con 13","Wis 15","Elemental Fist**","Improved Unarmed Strike","base attack bonus +9 or monk level 5th"],
    "benefit": "You gain one additional Elemental Fist (Advanced Player's Guide 158) attempt per day. While using this style and Elemental Fist to deal cold damage, you gain a bonus on cold damage rolls equal to your Wisdom modifier, and your reach with your unarmed strike increases by 5 feet."
  },
  {
    "name": "Master Combat Performer",
    "type": "Combat",
    "description": "You are a master of the techniques and weapons of the arena and the stage.",
    "prerequisites": ["Performing Combatant or at least three performance feats","base attack bonus +6"],
    "prerequisitesFeats": ["Performing Combatant or at least three performance feats","base attack bonus +6"],
    "benefit": "You can make performance combat checks as a free action. You are proficient in all weapons with the performance special quality."
  },
  {
    "name": "Master Siege Engineer",
    "type": "Combat",
    "description": "You are significantly faster at loading a siege engine, as well as a better shot.",
    "prerequisites": ["Siege Weapon Engineer","Knowledge (engineering) 10 ranks"],
    "prerequisitesFeats": ["Siege Weapon Engineer","Knowledge (engineering) 10 ranks"],
    "benefit": "If you are the crew lead on a siege engine, your crew can use move actions to load a siege engine. When you spend actions to aim a siege engine, you and your crew can use move actions instead of full-round actions to aim the siege engine (page 160)."
  },
  {
    "name": "Masterful Display",
    "type": "Combat",
    "description": "You craft a special victory performance that causes the crowd to go wild.",
    "prerequisites": ["Dazzling Display","any two performance feats"],
    "prerequisitesFeats": ["Dazzling Display","any two performance feats"],
    "benefit": "Choose the effects of any two performance feats you have. When you make a performance combat check, you gain the benefits of those two feats, but you only gain a +2 bonus on the performance combat check."
  },
  {
    "name": "Maximized Spellstrike",
    "type": "General",
    "description": "You deal brutal damage against opponents caught unawares.",
    "prerequisites": ["Maximized magic magus arcana","weapon expertise class feature or Quick Draw"],
    "prerequisitesFeats": ["Maximized magic magus arcana","weapon expertise class feature or Quick Draw"],
    "benefit": "When you make a melee attack and successfully use your spellstrike ability against an opponent denied his Dexterity bonus to AC, you can spend 3 points from your arcane pool to maximize the spell delivered through your spellstrike as if using the Maximize Spell metamagic feat."
  },
  {
    "name": "Menacing Bane",
    "type": "General",
    "description": "You are deadly when you team up with allies against a single foe.",
    "prerequisites": ["Bane class feature"],
    "prerequisitesFeats": ["Bane class feature"],
    "benefit": "You can use your bane class feature to imbue a melee weapon with the menacing special weapon ability (Advanced Player's Guide 288) instead of bane. You can spend a swift action to switch between the two special weapon abilities. Doing so otherwise works according to your bane class feature."
  },
  {
    "name": "Merciful Bane",
    "type": "General",
    "description": "You can use your bane ability to inf lict nonlethal damage.",
    "prerequisites": ["Bane class feature"],
    "prerequisitesFeats": ["Bane class feature"],
    "benefit": "While a weapon you wield is under the effect of your bane class feature, you can spend a swift action to switch between dealing lethal or nonlethal damage with bane. While your bane effect allows you to deal nonlethal damage in this way, you take no penalty on your attack roll for using a lethal weapon to deal nonlethal damage."
  },
  {
    "name": "Mocking Dance",
    "type": "Combat",
    "description": "You do a little dance that mocks your foe and entertains the crowd.",
    "prerequisites": ["Acrobatics 4 ranks or Perform (dance) 4 ranks"],
    "prerequisitesFeats": ["Acrobatics 4 ranks or Perform (dance) 4 ranks"],
    "benefit": "When you spend a swift action to make a performance combat check, before making that check you can either move 5 feet without provoking attacks of opportunity, or you can move your speed and provoke attacks of opportunity. You cannot end this move in a space where you threaten an enemy. If you do move at least 5 feet, you gain a +2 bonus on the performance combat check."
  },
  {
    "name": "Monastic Legacy",
    "type": "Combat",
    "description": "Your formal unarmed training continues to bolster your training in other areas.",
    "prerequisites": ["Still mind class feature","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Still mind class feature","Improved Unarmed Strike"],
    "benefit": "Add half the levels you have in classes other than monk to your monk level to determine your effective monk level for your base unarmed strike damage. This feat does not make levels in classes other than monk count toward any other monk class features."
  },
  {
    "name": "Monkey Moves",
    "type": "Combat",
    "description": "You scramble around your foes, moving and striking in an erratic fashion.",
    "prerequisites": ["Wis 13","Improved Unarmed Strike","Monkey Style","Acrobatics 8 ranks","Climb 8 ranks"],
    "prerequisitesFeats": ["Wis 13","Improved Unarmed Strike","Monkey Style","Acrobatics 8 ranks","Climb 8 ranks"],
    "benefit": "While using Monkey Style, you gain a Wisdom bonus on Climb checks. You can also can climb and crawl at half your speed; you can take a 5-foot step by jumping, crawling, or climbing; and you retain your Dexterity bonus to AC while climbing. Further, while using Monkey Style, when you use your unarmed strike to hit an opponent twice or more on your turn, you can spend a swift action to take a 5-foot step even if you have moved this round."
  },
  {
    "name": "Monkey Shine",
    "type": "Combat",
    "description": "You combine acrobatics and opportunity to devastating effect against your opponent.",
    "prerequisites": ["Wis 13","Improved Unarmed Strike","Monkey Moves","Monkey Style","Stunning Fist","Acrobatics 11 ranks","Climb 11 ranks"],
    "prerequisitesFeats": ["Wis 13","Improved Unarmed Strike","Monkey Moves","Monkey Style","Stunning Fist","Acrobatics 11 ranks","Climb 11 ranks"],
    "benefit": "While using Monkey Style, if you successfully deliver a Stunning Fist attempt, in addition to the normal effect of Stunning Fist, you can spend a free action to enter a square adjacent to you that is within your opponent's space. This movement does not provoke attacks of opportunity. While you are in your opponent's space, you gain a +4 dodge bonus to AC and a +4 bonus on melee attack rolls against that opponent. If otherwise unhindered, the opponent can move away from you, but if he does, he provokes an attack of opportunity from you even if his choice of movement does not normally do so."
  },
  {
    "name": "Monkey Style",
    "type": "Combat",
    "description": "Your unarmed fighting style is nimble and unpredictable, full of ground rolls and short leaps.",
    "prerequisites": ["Wis 13","Improved Unarmed Strike","Acrobatics 5 ranks","Climb 5 ranks"],
    "prerequisitesFeats": ["Wis 13","Improved Unarmed Strike","Acrobatics 5 ranks","Climb 5 ranks"],
    "benefit": "You add your Wisdom bonus on Acrobatics checks. While using this style, you take no penalty on melee attack rolls or to AC while prone. Further, you can crawl and stand up from lying prone without provoking attacks of opportunity, and you can stand up as a swift action if you succeed at a DC 20 Acrobatics check."
  },
  {
    "name": "Moonlight Stalker",
    "type": "Combat",
    "description": "You are adept at using shadows to conceal your attacks.",
    "prerequisites": ["Int 13","Blind-Fight","Combat Expertise","Bluff 3 ranks","darkvision or low-light vision racial trait"],
    "prerequisitesFeats": ["Int 13","Blind-Fight","Combat Expertise","Bluff 3 ranks","darkvision or low-light vision racial trait"],
    "benefit": "While you have concealment from an opponent, you gain a +2 bonus on attack and damage rolls against that opponent."
  },
  {
    "name": "Moonlight Stalker Feint",
    "type": "Combat",
    "description": "You strike through the shadows so quickly that your opponent can barely react to your attacks.",
    "prerequisites": ["Int 13","Blind-Fight","Combat Expertise","Moonlight Stalker","Bluff 6 ranks","darkvision or lowlight vision racial trait"],
    "prerequisitesFeats": ["Int 13","Blind-Fight","Combat Expertise","Moonlight Stalker","Bluff 6 ranks","darkvision or lowlight vision racial trait"],
    "benefit": "Once per round, against an opponent from whom you have concealment, you can spend a swift action to make a Bluff check to feint."
  },
  {
    "name": "Moonlight Stalker Master",
    "type": "Combat",
    "description": "You leave your opponents swinging at shadows while you slide elusively through the darkness.",
    "prerequisites": ["Int 13","Blind-Fight","Combat Expertise","Improved Feint","Moonlight Stalker","Moonlight Stalker Feint","Bluff 9 ranks","darkvision or low-light vision racial trait"],
    "prerequisitesFeats": ["Int 13","Blind-Fight","Combat Expertise","Improved Feint","Moonlight Stalker","Moonlight Stalker Feint","Bluff 9 ranks","darkvision or low-light vision racial trait"],
    "benefit": "While you have concealment, your opponents' miss chance against you increases by 10%. If an opponent misses you due to your concealment, you can spend an immediate action to move 5 feet, this movement does not provoke attacks of opportunity and does not count as a 5-foot step."
  },
  {
    "name": "Murderer's Circle",
    "type": "Combat",
    "description": "After savaging your foe, you circle like a hunter ready for the kill.",
    "prerequisites": ["Dodge","Acrobatics 4 ranks"],
    "prerequisitesFeats": ["Dodge","Acrobatics 4 ranks"],
    "benefit": "When you spend a swift action to make a performance combat check after scoring a critical hit or performing a combat maneuver, and you are adjacent to the target of the critical hit or combat maneuver, you can move to any other space that is adjacent to the target without provoking attacks of opportunity. You must have a clear path to that space and the ability to reach it by spending a move action. If you end this move in any space other than the one where you started, you gain a +2 bonus on the performance combat check."
  },
  {
    "name": "Neckbreaker",
    "type": "Combat",
    "description": "With a quick jerk, you snap an enemy's neck.",
    "prerequisites": ["Bonebreaker","Greater Grapple","Improved Grapple","Improved Unarmed Strike","Jawbreaker","Stunning Fist","Heal 12 ranks"],
    "prerequisitesFeats": ["Bonebreaker","Greater Grapple","Improved Grapple","Improved Unarmed Strike","Jawbreaker","Stunning Fist","Heal 12 ranks"],
    "benefit": "If you have an opponent your size or smaller helpless or pinned, after you initiate or maintain a grapple, you can make a Stunning Fist attempt at a -5 penalty on the attack roll. If you succeed, you wrench that opponent's neck, dealing 2d6 Strength or Dexterity damage. If the targeted ability score is reduced to 0, any remaining damage is dealt to that opponent's Constitution score. A creature that is immune to critical hits or that has no discernible head and neck is immune to the effects of this feat."
  },
  {
    "name": "Net Adept",
    "type": "Combat",
    "description": "You have trained to use the net as a melee weapon.",
    "prerequisites": ["Exotic Weapon Proficiency (net)","base attack bonus +1"],
    "prerequisitesFeats": ["Exotic Weapon Proficiency (net)","base attack bonus +1"],
    "benefit": "You can treat a net as a one-handed melee reach weapon with a 10-foot reach. Further, you take no penalty on melee attack rolls for using an unfolded net, and you can use one full-round action or two move actions to fold a net."
  },
  {
    "name": "Net and Trident",
    "type": "Combat",
    "description": "Your skill with lighter weapons allows you to wield one alongside your net.",
    "prerequisites": ["Dex 15","Exotic Weapon Proficiency (net)","Net Adept","Two-Weapon Fighting"],
    "prerequisitesFeats": ["Dex 15","Exotic Weapon Proficiency (net)","Net Adept","Two-Weapon Fighting"],
    "benefit": "You can treat a net as a one-handed ranged weapon, allowing you to wield a light or one-handed melee weapon and still make ranged attacks with your net. When you use your light or one-handed melee weapon to attack an entangled opponent, you gain a +2 bonus on damage rolls and on attack rolls to confirm a critical hit."
  },
  {
    "name": "Net Maneuvering",
    "type": "Combat",
    "description": "With sweeping movements and brute force, you can use your net to put foes at a disadvantage.",
    "prerequisites": ["Exotic Weapon Proficiency (net)","Net Adept","base attack bonus +3"],
    "prerequisitesFeats": ["Exotic Weapon Proficiency (net)","Net Adept","base attack bonus +3"],
    "benefit": "In melee, you can use a net to trip or disarm opponents instead of entangling them. You gain a +2 bonus on disarm checks made to use a net in this way. Further, if you have an opponent entangled in your net, you can attempt to drag or reposition that opponent as long as he is within your net's reach or you control the trailing rope on your net."
  },
  {
    "name": "Net Trickery",
    "type": "Combat",
    "description": "You have become very proficient at using your net to hinder your enemies.",
    "prerequisites": ["Exotic Weapon Proficiency (net)","Net Adept","Net Maneuvering","base attack bonus +6"],
    "prerequisitesFeats": ["Exotic Weapon Proficiency (net)","Net Adept","Net Maneuvering","base attack bonus +6"],
    "benefit": "In place of one of your melee attacks, you can use your net to attempt a dirty trick combat maneuver to blind an opponent (Advance Player's Guide 320). If you have an opponent entangled in your net, you can attempt to trip that opponent as long as he is within your net's reach or you control the trailing rope on your net. You also gain a +2 bonus on drag and reposition combat maneuver checks you make using your net."
  },
  {
    "name": "Nightmare Fist",
    "type": "Combat",
    "description": "You are even more deadly in magical darkness.",
    "prerequisites": ["Improved Unarmed Strike","Intimidate 1 rank","ability to create magical darkness"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Intimidate 1 rank","ability to create magical darkness"],
    "benefit": "While fighting within an area of magical darkness, you gain a +2 bonus on damage rolls with unarmed strikes, or a +4 bonus against opponents that are shaken, frightened, or panicked. You also gain a +2 morale bonus on Acrobatics and Intimidate checks."
  },
  {
    "name": "Nightmare Striker",
    "type": "Combat",
    "description": "Your faerie fire not only illuminates your foes, but it also shows you their weaknesses.",
    "prerequisites": ["Improved Unarmed Strike","Nightmare Fist","Nightmare Weaver","Stunning Fist","Heal 5 ranks","ability to cast faerie fire"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Nightmare Fist","Nightmare Weaver","Stunning Fist","Heal 5 ranks","ability to cast faerie fire"],
    "benefit": "While a faerie fire you have cast (not one cast from a spell completion or spell trigger item) outlines an opponent, the DC for that opponent to resist your Stunning Fist attempts increases by +2. If you hit an opponent with a Stunning Fist attempt, and that opponent fails her saving throw, you can render the target shaken for 1d2 rounds plus 1 round for every 5 by which the opponent failed her save."
  },
  {
    "name": "Nightmare Weaver",
    "type": "Combat",
    "description": "You can use your ability to create magical darkness to terrorize enemies.",
    "prerequisites": ["Improved Unarmed Strike","Nightmare Fist","Intimidate 2 ranks","ability to cast darkness"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Nightmare Fist","Intimidate 2 ranks","ability to cast darkness"],
    "benefit": "By spending a full-round action to cast darkness, you can also make Intimidate checks to demoralize all foes in the spell's initial area."
  },
  {
    "name": "No Name",
    "type": "General",
    "description": "You don't need an elaborate disguise to keep your identity under wraps.",
    "prerequisites": ["Grit class feature or Amateur Gunslinger feat","Bluff 4 ranks"],
    "prerequisitesFeats": ["Grit class feature or Amateur Gunslinger feat","Bluff 4 ranks"],
    "benefit": "You often rely on surprise and misdirection in your social dealings. You gain a +2 bonus on Bluff checks, and you can spend 1 grit point to gain a +10 bonus on Disguise checks for 10 minutes per your gunslinger level (minimum 10 minutes). This deed does not actually change your appearance, but rather allows you to hide your identity in other ways."
  },
  {
    "name": "Opening Volley",
    "type": "Combat",
    "description": "Your ranged assault leaves your foe disoriented and vulnerable to your melee attack.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you deal damage with a ranged attack, you gain a +4 circumstance bonus on the next melee attack roll you make against the opponent. This attack must occur before the end of your next turn."
  },
  {
    "name": "Pack Attack",
    "type": "Combat",
    "description": "You are skilled at surrounding your enemies.",
    "prerequisites": ["Base attack bonus +1"],
    "prerequisitesFeats": ["Base attack bonus +1"],
    "benefit": "When you are adjacent to an ally with this feat, the first time you melee attack an opponent, you can spend an immediate action to take a 5-foot step, even if you have otherwise moved this round."
  },
  {
    "name": "Panther Claw",
    "type": "Combat",
    "description": "You unleash a rapid series of blows on foes that attempt to attack you when you move.",
    "prerequisites": ["Wis 15","Combat Reflexes","Improved Unarmed Strike","Panther Style"],
    "prerequisitesFeats": ["Wis 15","Combat Reflexes","Improved Unarmed Strike","Panther Style"],
    "benefit": "While using Panther Style, you can spend a free action, instead of spending a swift action, to make a retaliatory unarmed strike. You can make a number of retaliatory unarmed strikes on your turn equal to your Wisdom modifier."
  },
  {
    "name": "Panther Parry",
    "type": "Combat",
    "description": "Your vicious strikes impair your foe's ability to attack you when you move.",
    "prerequisites": ["Wis 15","Combat Reflexes","Improved Unarmed Strike","Panther Claw","Panther Style"],
    "prerequisitesFeats": ["Wis 15","Combat Reflexes","Improved Unarmed Strike","Panther Claw","Panther Style"],
    "benefit": "While using Panther Style, your retaliatory unarmed strikes are resolved before the triggering attacks. If your retaliatory unarmed strike deals damage to an opponent, that opponent takes a -2 penalty on attack and damage rolls with the triggering attack of opportunity."
  },
  {
    "name": "Panther Style",
    "type": "Combat",
    "description": "You can strike back at enemies who attack you when you move.",
    "prerequisites": ["Wis 13","Combat Reflexes","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Wis 13","Combat Reflexes","Improved Unarmed Strike"],
    "benefit": "While using this style, when an opponent makes an attack of opportunity against you for moving through a threatened square, you can spend a swift action to make a retaliatory unarmed strike attack against that opponent. Your attack is resolved after the triggering attack of opportunity."
  },
  {
    "name": "Passing Trick",
    "type": "Combat",
    "description": "Slipping past a foe gives you the chance to feint.",
    "prerequisites": ["Int 13","Combat Expertise","Dodge","Improved Feint","Mobility","size Small or smaller"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Dodge","Improved Feint","Mobility","size Small or smaller"],
    "benefit": "Whenever you make a successful Acrobatics check to move through an opponent's space, you can spend a swift action to make a Bluff check against that opponent to feint in combat."
  },
  {
    "name": "Performance Weapon Mastery",
    "type": "Combat",
    "description": "You wield all your weapons with the flair of a performer.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You treat all weapons you are proficient in as if they had the performance weapon quality (page 144)."
  },
  {
    "name": "Performing Combatant",
    "type": "Combat",
    "description": "You treat every combat as a performance, bringing flare and showmanship.",
    "prerequisites": ["Dazzling Display","any one performance feat"],
    "prerequisitesFeats": ["Dazzling Display","any one performance feat"],
    "benefit": "You can make performance combat checks in any combat. When making a performance check outside of performance combat, you can pick a single performance feat to use. You automatically gain any bonus on the performance combat check the feat grants, and then you make a DC 20 performance combat check. On a success, you gain the full effect of the performance feat you chose."
  },
  {
    "name": "Pin Down",
    "type": "Combat",
    "description": "You easily block enemy escapes.",
    "prerequisites": ["Combat Reflexes","fighter level 11th"],
    "prerequisitesFeats": ["Combat Reflexes","fighter level 11th"],
    "benefit": "Whenever an opponent you threaten takes a 5-foot step or uses the withdraw action, that opponent provokes an attack of opportunity from you. If the attack hits, you deal no damage, but the targeted creature is prevented from making the move action that granted a 5-foot step or the withdraw action and does not move."
  },
  {
    "name": "Pinning Knockout",
    "type": "Combat",
    "description": "An opponent you have pinned is easy for you to knock out.",
    "prerequisites": ["Dex 13","Greater Grapple","Improved Grapple","Improved Unarmed Strike","base attack bonus +9 or monk level 9th"],
    "prerequisitesFeats": ["Dex 13","Greater Grapple","Improved Grapple","Improved Unarmed Strike","base attack bonus +9 or monk level 9th"],
    "benefit": "While you have an opponent pinned, when you succeed at a grapple combat maneuver check to deal an opponent nonlethal damage using an unarmed strike or a light or one-handed weapon, double your damage result. Any creature that is immune to critical hits is immune to the effects of this feat."
  },
  {
    "name": "Pinning Rend",
    "type": "Combat",
    "description": "You tear flesh when you damage an opponent that you have pinned.",
    "prerequisites": ["Dex 13","Greater Grapple","Improved Grapple","Improved Unarmed Strike","base attack bonus +9 or monk level 9th"],
    "prerequisitesFeats": ["Dex 13","Greater Grapple","Improved Grapple","Improved Unarmed Strike","base attack bonus +9 or monk level 9th"],
    "benefit": "While you have an opponent pinned, when you succeed at a grapple combat maneuver check to deal an opponent damage using an unarmed strike or a light or one-handed weapon, that opponent also takes bleed damage equal to your unarmed strike or weapon damage dice. Any creature that is immune to critical hits is immune to the effects of this feat."
  },
  {
    "name": "Pinpoint Poisoner",
    "type": "Combat",
    "description": "You deftly use specially prepared needles to apply poison for maximum effect.",
    "prerequisites": ["Poison use class feature","Craft (alchemy) 6 ranks","Adder Strike","Improved Unarmed Strike","Two-Weapon Fighting or flurry of blows class feature"],
    "prerequisitesFeats": ["Poison use class feature","Craft (alchemy) 6 ranks","Adder Strike","Improved Unarmed Strike","Two-Weapon Fighting or flurry of blows class feature"],
    "benefit": "When you use Adder Strike, you can instead poison up to two blowgun darts that you can then use to strike your opponent in melee. (Drawing such darts is a free action.) While holding these darts, you can spend a standard action to attack with one or a full-attack action to attack with both. Such attacks are considered melee touch attacks that deal 1d2 damage plus any bonuses you gain on your normal unarmed strike damage, and they deliver the poison. You can instead throw such darts as if they were shuriken, making your ranged attack rolls against the target's AC."
  },
  {
    "name": "Planar Wild Shape",
    "type": "General",
    "description": "You can infuse your wild shape with planar strength.",
    "prerequisites": ["Wild shape class feature","Knowledge (planes) 5 ranks"],
    "prerequisitesFeats": ["Wild shape class feature","Knowledge (planes) 5 ranks"],
    "benefit": "When you use wild shape to take the form of an animal, you can expend an additional daily use of your wild shape class feature to add the celestial template or fiendish template to your animal form. (Good druids must use the celestial template, while evil druids must use the fiendish template.) If your form has the celestial template and you score a critical threat against an evil creature while using your form's natural weapons, you gain a +2 bonus on the attack roll to confirm the critical hit. The same bonus applies if your form has the fiendish template and you score a critical threat against a good creature."
  },
  {
    "name": "Prone Shooter",
    "type": "Combat",
    "description": "While prone, you use the ground to stabilize your aim while using a crossbow or firearm.",
    "prerequisites": ["Weapon Focus (crossbow or firearm)","base attack bonus +1"],
    "prerequisitesFeats": ["Weapon Focus (crossbow or firearm)","base attack bonus +1"],
    "benefit": "If you have been prone since the end of your last turn, the penalty to your Armor Class against melee attacks made against you is reduced to -2. In addition, the bonus to your Armor Class against ranged attacks made against you is increased to +6."
  },
  {
    "name": "Prone Slinger",
    "type": "Combat",
    "description": "Your sideways sling release allows you to launch bullets and stones even while prone.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "While prone, you can use a sling to make ranged attacks."
  },
  {
    "name": "Quick Bull Rush",
    "type": "Combat",
    "description": "You can barrel into your opponent and follow this with an attack.",
    "prerequisites": ["Str 13","Improved Bull Rush","Power Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","Improved Bull Rush","Power Attack","base attack bonus +6"],
    "benefit": "On your turn, you can perform a single bull rush combat maneuver in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the bull rush."
  },
  {
    "name": "Quick Dirty Trick",
    "type": "Combat",
    "description": "You can perpetrate a dirty trick and deliver an attack before your opponent is the wiser.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Dirty Trick","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Dirty Trick","base attack bonus +6"],
    "benefit": "On your turn, you can perform a single dirty trick combat maneuver (Advanced Players Guide 320) in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the dirty trick combat maneuver."
  },
  {
    "name": "Quick Drag",
    "type": "Combat",
    "description": "You drag your enemy and deliver a punishing blow.",
    "prerequisites": ["Str 13","Improved Drag","Power Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","Improved Drag","Power Attack","base attack bonus +6"],
    "benefit": "On your turn, you can perform a single drag combat maneuver (Advanced Players Guide 320) in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the drag."
  },
  {
    "name": "Quick Reposition",
    "type": "Combat",
    "description": "Your opponent becomes an unwitting dance partner, following your lead while you fight.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Reposition","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Reposition","base attack bonus +6"],
    "benefit": "On your turn, you can perform a single reposition combat maneuver (Advanced Players Guide 320) in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the reposition."
  },
  {
    "name": "Quick Steal",
    "type": "Combat",
    "description": "You are adept at relieving foes of their belongings even while you strike.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Steal","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Steal","base attack bonus +6"],
    "benefit": "On your turn, you can perform a single steal combat maneuver (Advanced Players Guide 320) in place of one of your melee attacks. You must choose the melee attack with the highest base attack bonus to make the steal."
  },
  {
    "name": "Raging Brutality",
    "type": "General",
    "description": "You expend some of your rage to strike your opponents with a more powerful weapon blow.",
    "prerequisites": ["Str 13","rage class feature","Power Attack","base attack bonus +12"],
    "prerequisitesFeats": ["Str 13","rage class feature","Power Attack","base attack bonus +12"],
    "benefit": "While raging and using Power Attack, you can spend 3 additional rounds of your rage as a swift action to add your Constitution bonus on damage rolls for melee attacks or thrown weapon attacks you make on your turn. If you are using the weapon two-handed, instead add 1-1/2 times your Constitution bonus. This bonus damage is not multiplied on a critical hit."
  },
  {
    "name": "Raging Deathblow",
    "type": "General",
    "description": "Every killing blow gives you a surge of vitality, further fueling your rage.",
    "prerequisites": ["Greater rage class feature"],
    "prerequisitesFeats": ["Greater rage class feature"],
    "benefit": "While raging, whenever your attack reduces your opponent to -1 or fewer hit points, you gain 1 extra round of rage for that day. If that attack was a critical hit, you gain 1 additional extra round of rage for that day. Whenever you rest to renew your total number of rounds of rage per day, any extra rounds you still have from this feat are lost."
  },
  {
    "name": "Raging Hurler",
    "type": "General",
    "description": "An opponent can do little to evade your wrathful pitching of weapons and objects.",
    "prerequisites": ["Rage class feature","Throw Anything"],
    "prerequisitesFeats": ["Rage class feature","Throw Anything"],
    "benefit": "While raging, you can throw a two-handed weapon as a standard action, and you double the range increment for weapons you throw. If you also have the Quick Draw feat, you can throw two-handed weapons at your full normal rate of attacks. Further, you can pick up an unattended object that you can use as a improvised weapon within your reach as part of the attack action to throw that item."
  },
  {
    "name": "Raging Throw",
    "type": "General",
    "description": "You expend some of your rage to throw one opponent at another.",
    "prerequisites": ["Str 13","Con 13","rage class feature","Improved Bull Rush","Power Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Str 13","Con 13","rage class feature","Improved Bull Rush","Power Attack","base attack bonus +6"],
    "benefit": "While raging, when you attempt a bull rush combat maneuver, you can spend 1 additional round of your rage as a swift action to add your Constitution bonus on your combat maneuver check to the bull rush. Further, if you bull rush an opponent into a square another creature occupies or into a solid object, the opponent and the creature or object take bludgeoning damage equal to your Strength modifier + your Constitution modifier."
  },
  {
    "name": "Rapid Grappler",
    "type": "Combat",
    "description": "You are a quick hand at grappling.",
    "prerequisites": ["Dex 13","Greater Grapple","Improved Grapple","Improved Unarmed Strike","base attack bonus +9 or monk level 9th"],
    "prerequisitesFeats": ["Dex 13","Greater Grapple","Improved Grapple","Improved Unarmed Strike","base attack bonus +9 or monk level 9th"],
    "benefit": "Whenever you use Greater Grapple to successfully maintain a grapple as a move action, you can then spend a swift action to make a grapple combat maneuver check."
  },
  {
    "name": "Rebounding Leap",
    "type": "Combat",
    "description": "Your riding and lancing expertise allows you to enter and leave the saddle with great speed.",
    "prerequisites": ["Leaping lance class feature","Acrobatics 5 ranks","Ride 11 ranks"],
    "prerequisitesFeats": ["Leaping lance class feature","Acrobatics 5 ranks","Ride 11 ranks"],
    "benefit": "When you succeed at the Acrobatics check to jump as part of your leaping lance class feature, you can remount your steed as a swift action."
  },
  {
    "name": "Rebuffing Reduction",
    "type": "Combat",
    "description": "Your damage reduction can turn the force of blows back on your enemies.",
    "prerequisites": ["Str 13","damage reduction","Improved Bull Rush","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","damage reduction","Improved Bull Rush","Power Attack","base attack bonus +1"],
    "benefit": "Whenever an opponent that is adjacent to you fails to penetrate your DR with a melee attack, you can spend an immediate action to attempt a bull rush combat maneuver against that opponent. If you succeed, you cannot move with the opponent."
  },
  {
    "name": "Rending Fury",
    "type": "Combat",
    "description": "You easily tear your enemies limb from limb with your natural attacks.",
    "prerequisites": ["Base attack bonus +6","rend special attack"],
    "prerequisitesFeats": ["Base attack bonus +6","rend special attack"],
    "benefit": "You deal rend damage if you hit with half the normal natural attacks your rend requires. For example, a troll that has this feat can rend when it hits with one claw attack, while a girallon that has this feat must hit one target with two claw attacks to rend. You can only make this rend attack once per round."
  },
  {
    "name": "Revelation Strike",
    "type": "Combat",
    "description": "Your unarmed strike brings a revelation down upon your foe.",
    "prerequisites": ["Revelation class feature","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Revelation class feature","Improved Unarmed Strike"],
    "benefit": "When you gain this feat, choose one revelation that you can use to affect no more than one opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can use a swift action to deliver the effects of the chosen revelation to that opponent. Doing so provokes no attacks of opportunity."
  },
  {
    "name": "Rhetorical Flourish",
    "type": "General",
    "description": "You rapidly change topics and employ confusing rhetoric to distract people from your true intent.",
    "prerequisites": ["Cha 13","Persuasive"],
    "prerequisitesFeats": ["Cha 13","Persuasive"],
    "benefit": "When using the Diplomacy skill to make a request or change a creature's attitude, you can use verbal misdirection. To do so, make a Bluff check against that creature. If you succeed, you gain a +4 bonus on your next Diplomacy check against that creature if the check is made within the next minute. If you fail by 5 or more, you instead take a -2 penalty on your next Diplomacy check against that creature. Alternatively, you can use this feat to retry a single failed Diplomacy check against a creature. You take a -4 penalty on your Bluff check when using Rhetorical Flourish in this way. If you succeed, rather than gaining this feat's normal bonus, you can retry your last Diplomacy check against the creature if that check was made in the past minute."
  },
  {
    "name": "Ricochet Shot Deed",
    "type": "General",
    "description": "You can ricochet a firearm shot off the wall and still hit your target.",
    "prerequisites": ["Grit class feature or Amateur Gunslinger feat","Blind-Fight"],
    "prerequisitesFeats": ["Grit class feature or Amateur Gunslinger feat","Blind-Fight"],
    "benefit": "You can fire a shot at a wall or piece of solid terrain, and have it ricochet off. When you do, use the square immediately in front of the wall or piece of solid terrain to determine line of sight to a target, and this square is considered the new origin square of the attack. Use that square to determine the effects of cover, and your own square to determine the effects of concealment. You can make this shot as long as you have at least 1 grit point. When making this shot, you can spend 1 grit point to ignore the effects of all cover or concealment. You must choose to spend the grit point before you make the attack roll."
  },
  {
    "name": "Righteous Healing",
    "type": "General",
    "description": "Your healing spells are more potent when you have a judgment active.",
    "prerequisites": ["Judgment class feature"],
    "prerequisitesFeats": ["Judgment class feature"],
    "benefit": "If you cast a cure spell while you have a judgment active, each target regains 1 extra hit point from the cure spell + 1 hit point per three inquisitor levels you possess."
  },
  {
    "name": "Sap Adept",
    "type": "Combat",
    "description": "You know just where to hit to knock the sense out of your foe.",
    "prerequisites": ["Sneak attack +1d6"],
    "prerequisitesFeats": ["Sneak attack +1d6"],
    "benefit": "Whenever you use a bludgeoning weapon to deal nonlethal sneak attack damage, you gain a bonus on your damage roll equal to twice the number of sneak attack damage dice you rolled."
  },
  {
    "name": "Sap Master",
    "type": "Combat",
    "description": "You knock the sense out of foes with a well-timed surprise attack.",
    "prerequisites": ["Sneak attack +3d6","Sap Adept"],
    "prerequisitesFeats": ["Sneak attack +3d6","Sap Adept"],
    "benefit": "Whenever you use a bludgeoning weapon to deal nonlethal sneak attack damage to a flat-footed opponent, roll your sneak attack dice twice, totaling the results as your nonlethal sneak attack damage for that attack."
  },
  {
    "name": "Savage Display",
    "type": "Combat",
    "description": "With your victory and a roar, you push yourself on with increased savagery.",
    "prerequisites": ["Dazzling Display"],
    "prerequisitesFeats": ["Dazzling Display"],
    "benefit": "When you spend a swift action to make a performance combat check, you gain a +2 bonus on your performance combat check and gain a +1d6 bonus on damage rolls until the end of your next turn. This extra damage is not precision damage."
  },
  {
    "name": "School Strike",
    "type": "Combat",
    "description": "You focus the secrets of your school of wizardry into your unarmed strike.",
    "prerequisites": ["Wizard school class feature","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Wizard school class feature","Improved Unarmed Strike"],
    "benefit": "When you gain this feat, choose one arcane school power that you can use to affect no more than one opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can use a swift action to deliver the effects of the chosen school power to that opponent. Doing so provokes no attacks of opportunity."
  },
  {
    "name": "Sea Legs",
    "type": "General",
    "description": "You have a sailor's instincts for moving about while aboard seagoing vessels.",
    "prerequisites": ["Profession (sailor) 5 ranks"],
    "prerequisitesFeats": ["Profession (sailor) 5 ranks"],
    "benefit": "You gain a +2 bonus on Acrobatics, Climb, and Swim checks."
  },
  {
    "name": "Secret Stash Deed",
    "type": "General",
    "description": "You are so skilled at stashing small packets of firearm ammunition and black powder on your person that you sometimes surprise yourself when you find them.",
    "prerequisites": ["Grit class feature or Amateur Gunslinger feat","Sleight of Hand 1 rank"],
    "prerequisitesFeats": ["Grit class feature or Amateur Gunslinger feat","Sleight of Hand 1 rank"],
    "benefit": "Spend 1 grit point while in combat to recover either 1 bullet and 1 dose of black powder or 1 alchemical cartridge from a hidden stash on your person that you had, until now, forgotten about. If the bullet and black powder or the alchemical cartridges are normal shot, you do not need to pay for the ammunition. If you want to recover any other kind of ammunition, you must pay for it with gold pieces from your character's wealth. The grit cost of this deed cannot be decreased by the Signature Deed feat, the true grit class feature, or any other similar effect that reduces the number of grit points you spend to use a deed. You also gain a +4 bonus on any Sleight of Hand checks made while gambling."
  },
  {
    "name": "Seize the Moment",
    "type": "Combat",
    "description": "You and your allies are poised to pounce whenever one of you scores a telling blow.",
    "prerequisites": ["Combat Reflexes","Improved Critical"],
    "prerequisitesFeats": ["Combat Reflexes","Improved Critical"],
    "benefit": "When an ally who also has this feat confirms a critical hit against an opponent that you also threaten, you can make an attack of opportunity against that opponent."
  },
  {
    "name": "Shaitan Earthblast",
    "type": "Combat",
    "description": "With a forceful stomp you release a blast of acid from the earth to burn your enemies.",
    "prerequisites": ["Con 15","Wis 17","Elemental Fist**","Improved Unarmed Strike","Shaitan Skin","Shaitan Style","base attack bonus +13 or monk level 11th"],
    "prerequisitesFeats": ["Con 15","Wis 17","Elemental Fist**","Improved Unarmed Strike","Shaitan Skin","Shaitan Style","base attack bonus +13 or monk level 11th"],
    "benefit": "While using the Shaitan Style feat, as a standard action, you can spend two Elemental Fist (Advanced Player's Guide 158) attempts to unleash a 20-foot column of acid that has a 5-foot radius and erupts from a point of origin within 30 feet of you. Creatures caught in the column take your unarmed strike damage plus the acid damage from your Elemental Fist and are staggered for 1 round. A successful Ref lex save (DC 10 + 1/2 your character level + your Wis modif ier) reduces the damage by half and prevents a target from being staggered."
  },
  {
    "name": "Shaitan Skin",
    "type": "Combat",
    "description": "You can manipulate acid to shield yourself and disable your enemies.",
    "prerequisites": ["Con 15","Wis 15","Elemental Fist**","Improved Unarmed Strike","Shaitan Style","base attack bonus +11 or monk level 9th"],
    "prerequisitesFeats": ["Con 15","Wis 15","Elemental Fist**","Improved Unarmed Strike","Shaitan Style","base attack bonus +11 or monk level 9th"],
    "benefit": "You gain one additional Elemental Fist (Advanced Player's Guide 158) attempt per day. While using the Shaitan Style feat, you gain acid resistance equal to your base attack bonus, or your monk level plus BAB gained from levels in classes other than monk, whichever is higher. While denied your Dexterity bonus to AC you are also denied this resistance. Creatures that take acid damage from your Elemental Fist attack must succeed at a Ref lex save (DC 10 + 1/2 your character level + your Wis modifier) or be staggered for 1 round."
  },
  {
    "name": "Shaitan Style",
    "type": "Combat",
    "description": "You strike with the caustic forces from within the earth.",
    "prerequisites": ["Con 13","Wis 15","Elemental Fist**","Improved Unarmed Strike","base attack bonus +9 or monk level 5th"],
    "prerequisitesFeats": ["Con 13","Wis 15","Elemental Fist**","Improved Unarmed Strike","base attack bonus +9 or monk level 5th"],
    "benefit": "You gain one additional Elemental Fist (Advanced Player's Guide 158) attempt per day. While using the Shaitan Style and Elemental Fist feats to deal acid damage, you gain a bonus on acid damage rolls equal to your Wisdom bonus. Further, if your Elemental Fist melee attack misses while you are using it to deal acid damage, you still deal 1d6 points of acid damage to your target."
  },
  {
    "name": "Shake It Off",
    "type": "General",
    "description": "You support your allies and help them recover from crippling effects.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you are adjacent to one or more allies who also have this feat, you gain a +1 bonus on saving throws per such ally (maximum +4)."
  },
  {
    "name": "Shapeshifter Foil",
    "type": "General",
    "description": "Your command of shapeshifting magic can disrupt similar effects in others.",
    "prerequisites": ["Knowledge (arcana) 5 ranks or Knowledge (nature) 5 ranks","ability to use any polymorph effect"],
    "prerequisitesFeats": ["Knowledge (arcana) 5 ranks or Knowledge (nature) 5 ranks","ability to use any polymorph effect"],
    "benefit": "A creature you deal damage to has difficulty using or maintaining polymorph effects until the end your next turn. To use a polymorph effect it must make a concentration check (DC 15 + twice the level of the effect). If you deal damage to an opponent under a polymorph effect, that opponent must succeed at a Will saving throw (DC 10 + 1/2 your character level + your Wisdom modifier) or be forced back to its original form. If you score a critical hit against such an opponent, no saving throw is allowed."
  },
  {
    "name": "Shapeshifting Hunter",
    "type": "General",
    "description": "You blend your knowledge of foes and your shapeshifting abilities together.",
    "prerequisites": ["Favored enemy class feature","wild shape class feature"],
    "prerequisitesFeats": ["Favored enemy class feature","wild shape class feature"],
    "benefit": "Your levels of druid stack with your ranger levels for determining when you select your next favored enemy. Also, your ranger levels stack with your druid levels in determining the number of times per day you can use your wild shape class feature, up to a maximum of eight times per day."
  },
  {
    "name": "Shared Judgment",
    "type": "General",
    "description": "You extend the benefits of your judgment to an ally.",
    "prerequisites": ["Second judgment class feature"],
    "prerequisitesFeats": ["Second judgment class feature"],
    "benefit": "You can pronounce a single judgment and extend its effects to one adjacent ally instead of pronouncing a second judgment. Similarly, once you have the third judgment class feature, you can pronounce a single judgment and extend its effects to two adjacent allies instead of pronouncing a second and third judgment. Alternatively, once you have the third judgment class feature, you can pronounce two judgments and extend the effects of one judgment to one adjacent ally instead of pronouncing a third judgment. Once an ally has gained the effects of your judgment, he need not remain adjacent to you to continue gaining that benefit. You can spend a free action to end this benefit for one or both allies. If your judgment bonus is suspended for you, it is suspended for all allies, but when it resumes, it does so for all allies."
  },
  {
    "name": "Siege Commander",
    "type": "Combat",
    "description": "Under your leadership, the time required to assemble and move a siege engine is greatly reduced.",
    "prerequisites": ["Craft (siege weapon) 5 ranks","Knowledge (engineering) 5 ranks or Profession (siege engineer) 1 rank"],
    "prerequisitesFeats": ["Craft (siege weapon) 5 ranks","Knowledge (engineering) 5 ranks or Profession (siege engineer) 1 rank"],
    "benefit": "When you lead a siege engine assembly crew, you grant all of its members a +4 competence bonus on checks to assemble or move the weapon. You also halve the time required to assemble a siege engine."
  },
  {
    "name": "Siege Engineer",
    "type": "Combat",
    "description": "You are proficient with all siege weaponry.",
    "prerequisites": ["Knowledge (engineering) 5 ranks or Profession (siege engineer) 5 ranks","proficiency with one siege engine"],
    "prerequisitesFeats": ["Knowledge (engineering) 5 ranks or Profession (siege engineer) 5 ranks","proficiency with one siege engine"],
    "benefit": "You are considered to be proficient with all siege weapons. Also, when you are crew lead for a siege engine, you do not generate mishaps on the roll of a natural 1."
  },
  {
    "name": "Siege Gunner",
    "type": "Combat",
    "description": "Aiming outsized siege weapons poses little difficulty for you.",
    "prerequisites": ["Siege Engineer","Profession (siege engineer) 5 ranks"],
    "prerequisitesFeats": ["Siege Engineer","Profession (siege engineer) 5 ranks"],
    "benefit": "You take no size penalty for aiming a directfire siege weapon larger than yourself. If you operate an indirect-fire siege weapon and miss, you misdirect fire by 1 square per range increment."
  },
  {
    "name": "Signature Deed",
    "type": "General",
    "description": "You are known for performing a particular deed, and can perform it with greater ease.",
    "prerequisites": ["Grit class feature","gunslinger level 11th"],
    "prerequisitesFeats": ["Grit class feature","gunslinger level 11th"],
    "benefit": "Pick a deed that you have access to and that you must spend grit to perform. You can perform this deed for 1 fewer grit point (minimum 0). If the amount of grit needed to perform the deed is reduced to 0, you can perform this deed for the normal action cost as long as you have at least 1 grit point."
  },
  {
    "name": "Skilled Driver",
    "type": "General",
    "description": "Choose a type a type of vehicle (either air, land, or water). You are more skilled when driving that vehicle.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain a +4 bonus on driving checks with your chosen vehicle."
  },
  {
    "name": "Slayer's Knack",
    "type": "General",
    "description": "You know how to battle your favored enemies with such efficacy that any weapon you wield against them becomes more deadly.",
    "prerequisites": ["Favored enemy class feature","base attack bonus +6"],
    "prerequisitesFeats": ["Favored enemy class feature","base attack bonus +6"],
    "benefit": "When you take this feat, choose one of your favored enemy types. Against enemies of that type, the threat range of any weapon you wield is doubled. This effect does not stack with any other effect that expands a weapon's threat range."
  },
  {
    "name": "Sling Flail",
    "type": "Combat",
    "description": "You can use your loaded sling to effectively strike at nearby foes.",
    "prerequisites": ["Weapon Focus (sling)","base attack bonus +1"],
    "prerequisitesFeats": ["Weapon Focus (sling)","base attack bonus +1"],
    "benefit": "You can make melee attacks using your loaded sling, using that weapon's normal statistics but treating it as a flail. Using a sling in this way does not expend mundane ammunition, but magical or masterwork ammunition loses its special properties after a single hit."
  },
  {
    "name": "Snake Fang",
    "type": "Combat",
    "description": "You can unleash attacks against an opponent that has dropped its guard.",
    "prerequisites": ["Combat Reflexes","Improved Unarmed Strike","Snake Sidewind","Snake Style","Acrobatics 6 ranks","Sense Motive 9 ranks"],
    "prerequisitesFeats": ["Combat Reflexes","Improved Unarmed Strike","Snake Sidewind","Snake Style","Acrobatics 6 ranks","Sense Motive 9 ranks"],
    "benefit": "While using the Snake Style feat, when an opponent's attack misses you, you can make an unarmed strike against that opponent as an attack of opportunity. If this attack of opportunity hits, you can spend an immediate action to make another unarmed strike against the same opponent."
  },
  {
    "name": "Snake Style",
    "type": "Combat",
    "description": "You watch your foe's every movement and then punch through its defense.",
    "prerequisites": ["Improved Unarmed Strike","Acrobatics 1 rank","Sense Motive 3 ranks"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Acrobatics 1 rank","Sense Motive 3 ranks"],
    "benefit": "You gain a +2 bonus on Sense Motive checks, and you can deal piercing damage with your unarmed strikes. While using the Snake Style feat, when an opponent targets you with a melee or ranged attack, you can spend an immediate action to make a Sense Motive check. You can use the result as your AC or touch AC against that attack. You must be aware of the attack and not flat-footed."
  },
  {
    "name": "Snap Shot",
    "type": "Combat",
    "description": "With a ranged weapon, you can take advantage of any opening in your opponent's defenses.",
    "prerequisites": ["Dex 13","Point-Blank Shot","Rapid Shot","Weapon Focus","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 13","Point-Blank Shot","Rapid Shot","Weapon Focus","base attack bonus +6"],
    "benefit": "While wielding a ranged weapon with which you have Weapon Focus, you threaten squares within 5 feet of you. You can make attacks of opportunity with that ranged weapon. You do not provoke attacks of opportunity when making a ranged attack as an attack of opportunity."
  },
  {
    "name": "Snapping Turtle Clutch",
    "type": "Combat",
    "description": "Your unarmed style allows you to turn your opponent's attack into an opportunity.",
    "prerequisites": ["Snapping Turtle Style","Improved Grapple","Improved Unarmed Strike","base attack bonus +3 or monk level 3rd"],
    "prerequisitesFeats": ["Snapping Turtle Style","Improved Grapple","Improved Unarmed Strike","base attack bonus +3 or monk level 3rd"],
    "benefit": "While you are using the Snapping Turtle Style feat, the shield bonus the style grants to your AC applies to your CMD and touch AC. Whenever an opponent misses you with a melee attack while you are using the Snapping Turtle Style feat, you can use an immediate action to attempt a grapple combat maneuver against that opponent, but with a -2 penalty."
  },
  {
    "name": "Snapping Turtle Shell",
    "type": "Combat",
    "description": "Your guarding hand is almost magical in its skill at def lecting incoming blows.",
    "prerequisites": ["Snapping Turtle Clutch","Snapping Turtle Style","Improved Grapple","Improved Unarmed Strike","base attack bonus +5 or monk level 5th"],
    "prerequisitesFeats": ["Snapping Turtle Clutch","Snapping Turtle Style","Improved Grapple","Improved Unarmed Strike","base attack bonus +5 or monk level 5th"],
    "benefit": "While you are using the Snapping Turtle Style feat, the shield bonus the style grants to your AC increases to +2, and your enemies take a -4 penalty on critical confirmation rolls against you."
  },
  {
    "name": "Snapping Turtle Style",
    "type": "Combat",
    "description": "Your deft unarmed style allows you to shield your body from harm.",
    "prerequisites": ["Improved Unarmed Strike","base attack bonus +1 or monk level 1st"],
    "prerequisitesFeats": ["Improved Unarmed Strike","base attack bonus +1 or monk level 1st"],
    "benefit": "While using the Snapping Turtle Style feat with at least one hand free, you gain a +1 shield bonus to AC."
  },
  {
    "name": "Sneaking Precision",
    "type": "General",
    "description": "Your knowledge of your enemies' vulnerable spots is especially punishing.",
    "prerequisites": ["Sneak attack class feature","Critical Focus","any critical feat","base attack bonus +9"],
    "prerequisitesFeats": ["Sneak attack class feature","Critical Focus","any critical feat","base attack bonus +9"],
    "benefit": "Whenever you successfully sneak attack an opponent for a second time on your turn, you can spend a swift action to apply the effects of one critical feat you know to that opponent."
  },
  {
    "name": "Sorcerous Strike",
    "type": "Combat",
    "description": "The power flowing through your veins also flows through your unarmed strike.",
    "prerequisites": ["Sorcerer bloodline class feature","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Sorcerer bloodline class feature","Improved Unarmed Strike"],
    "benefit": "When you gain this feat, you choose one bloodline power that you can use to affect a single opponent. If you make a successful unarmed strike against an opponent, in addition to dealing your unarmed strike damage, you can spend a swift action to deliver the effects of the chosen bloodline power to that opponent. Doing so provokes no attacks of opportunity."
  },
  {
    "name": "Spell Bane",
    "type": "General",
    "description": "While your bane weapon is active, creatures that your bane affects find it more difficult to resist your spells.",
    "prerequisites": ["Bane class feature"],
    "prerequisitesFeats": ["Bane class feature"],
    "benefit": "While your bane class feature is affecting a creature type, the saving throw's DCs for your spells increase by +2 for creatures of that type."
  },
  {
    "name": "Spinning Throw",
    "type": "Combat",
    "description": "You whirl your foe around and then let go.",
    "prerequisites": ["Combat Expertise","Improved Bull Rush","Improved Trip","Improved Unarmed Strike","Ki Throw"],
    "prerequisitesFeats": ["Combat Expertise","Improved Bull Rush","Improved Trip","Improved Unarmed Strike","Ki Throw"],
    "benefit": "On a successful unarmed trip combat maneuver against an opponent your size or smaller, you can spend a swift action to attempt a bull rush combat maneuver against that opponent. If your bull rush succeeds, you can move that opponent to any unoccupied square you threaten, then push that opponent the number of 5-foot increments your successful bull rush allows. The target is then knocked prone. If the bull rush fails, you can use the Ki Throw feat as normal. If you also have the Improved Ki Throw feat, a successful bull rush allows you to push the opponent into a space secondary targets occupy. You resolve this effect as if you used the Improved Ki Throw feat to throw the opponent into that space."
  },
  {
    "name": "Splintering Weapon",
    "type": "General",
    "description": "Your fragile weapon works to your advantage, breaking off fragments in wounds you inf lict.",
    "prerequisites": ["Base attack bonus +1","proficient with weapon","weapon made of primitive material"],
    "prerequisitesFeats": ["Base attack bonus +1","proficient with weapon","weapon made of primitive material"],
    "benefit": "Whenever you use a melee or thrown weapon with the fragile weapon feature (page 146) or similar quality and hit an opponent, you can give your weapon the broken condition to deal that opponent 1d4 points of bleed damage."
  },
  {
    "name": "Stage Combatant",
    "type": "Combat",
    "description": "You are a master of stage and nonlethal combats.",
    "prerequisites": ["Weapon Focus","base attack bonus +5"],
    "prerequisitesFeats": ["Weapon Focus","base attack bonus +5"],
    "benefit": "When you make an attack with a weapon that you have Weapon Focus in, you take no penalty on the attack roll when you are attempting to make an attack that deals no damage or nonlethal damage."
  },
  {
    "name": "Stalwart",
    "type": "General",
    "description": "You adopt a defensive stance that allows you to absorb and redirect hits.",
    "prerequisites": ["Diehard","Endurance","base attack bonus +4"],
    "prerequisitesFeats": ["Diehard","Endurance","base attack bonus +4"],
    "benefit": "While using the total defense action, fighting defensively action, or Combat Expertise, you can forgo the dodge bonus to AC you would normally gain to instead gain an equivalent amount of DR, to a maximum of DR 5/-, until the start of your next turn. This damage reduction stacks with DR you gain from class features, such as the barbarian's, but not with DR from any other source. If you are denied your Dexterity bonus to AC, you are also denied this DR."
  },
  {
    "name": "Stealth Synergy",
    "type": "General",
    "description": "Working closely with an ally, you are able to move like twin shadows.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "While you can see one or more allies who also have this feat, whenever you and your allies make a Stealth check, you all take the highest roll and add all your modifiers to Stealth."
  },
  {
    "name": "Strangler",
    "type": "Combat",
    "description": "Throttling the life out of enemies is second nature to you.",
    "prerequisites": ["Dex 13","sneak attack +1d6","Improved Grapple","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Dex 13","sneak attack +1d6","Improved Grapple","Improved Unarmed Strike"],
    "benefit": "Whenever you successfully maintain a grapple and choose to deal damage, you can spend a swift action to deal your sneak attack damage to the creature you are grappling."
  },
  {
    "name": "Strong Comeback",
    "type": "General",
    "description": "You learn quickly from past mistakes.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are allowed to reroll an ability check, a skill check, or a saving throw, you gain a +2 circumstance bonus on the reroll."
  },
  {
    "name": "Stunning Pin",
    "type": "Combat",
    "description": "You can render a pinned foe temporarily incapacitated.",
    "prerequisites": ["Improved Grapple","Improved Unarmed Strike","Stunning Fist"],
    "prerequisitesFeats": ["Improved Grapple","Improved Unarmed Strike","Stunning Fist"],
    "benefit": "Whenever you pin an opponent, you can spend a swift action to make a Stunning Fist attempt against that opponent."
  },
  {
    "name": "Sure Grasp",
    "type": "General",
    "description": "Your quick ref lexes and skill at climbing keep you from falling to your doom.",
    "prerequisites": ["Climb 1 rank"],
    "prerequisitesFeats": ["Climb 1 rank"],
    "benefit": "Roll twice while climbing or when making a Ref lex save to avoid falling, and take the higher result."
  },
  {
    "name": "Sword and Pistol",
    "type": "Combat",
    "description": "You effortlessly pair melee and ranged weaponry.",
    "prerequisites": ["Dex 13","Point-Blank Shot","Rapid Shot","Snap Shot","Two-Weapon Fighting","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 13","Point-Blank Shot","Rapid Shot","Snap Shot","Two-Weapon Fighting","base attack bonus +6"],
    "benefit": "When you use the Two-Weapon Fighting feat while wielding a melee weapon and a crossbow or firearm, your attacks with the crossbow or firearm provoke no attacks of opportunity from foes that you threaten with your melee weapon."
  },
  {
    "name": "Tandem Trip",
    "type": "Combat",
    "description": "You know how to work together to trip your foes.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you attempt a trip combat maneuver against an enemy threatened by an ally with this feat, you roll twice and take the better result."
  },
  {
    "name": "Target of Opportunity",
    "type": "Combat",
    "description": "You and your allies pelt your enemies with a deadly barrage of missiles.",
    "prerequisites": ["Point-Blank Shot","base attack bonus +6"],
    "prerequisitesFeats": ["Point-Blank Shot","base attack bonus +6"],
    "benefit": "When an ally who also has this feat makes a ranged attack and hits an opponent within 30 feet of you, you can spend an immediate action to make a single ranged attack against that opponent. Your ranged weapon must be in hand, loaded, and ready to be fired or thrown for you to make the ranged attack."
  },
  {
    "name": "Team Pickpocketing",
    "type": "General",
    "description": "You distract a mark with friendly conversation while your partner robs the victim blind.",
    "prerequisites": ["Bluff 1 rank","Sleight of Hand 1 rank"],
    "prerequisitesFeats": ["Bluff 1 rank","Sleight of Hand 1 rank"],
    "benefit": "Whenever an ally with this feat succeeds a Bluff check to feint an opponent, if you are adjacent to that creature, you can spend an immediate action to make a Sleight of Hand check to pickpocket that opponent and gain a +4 bonus on that attempt."
  },
  {
    "name": "Tiger Claws",
    "type": "Combat",
    "description": "You can sacrifice multiple attacks to make a single devastating strike.",
    "prerequisites": ["Improved Unarmed Strike","Tiger Style","base attack bonus +6 or monk level 5th"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Tiger Style","base attack bonus +6 or monk level 5th"],
    "benefit": "While you are using the Tiger Style feat and have both hands free, you can use a full-round action to make a single unarmed strike with both hands. Use your highest base attack bonus, rolling unarmed strike damage for each hand separately and multiplying both if you score a critical hit. If you use Power Attack in conjunction with this attack, can add half your Strength bonus to one of the damage rolls. If you hit, you can attempt a bull rush maneuver with a +2 bonus on the combat maneuver check. This bull rush attempt provokes no attack of opportunity from your opponent, but you cannot move with that opponent if your bull rush is successful."
  },
  {
    "name": "Tiger Pounce",
    "type": "Combat",
    "description": "Your unarmed strikes are as precise as they are powerful, but they leave you open and you can pursue foes with blinding speed.",
    "prerequisites": ["Improved Unarmed Strike","Power Attack","Tiger Claws","Tiger Style","base attack bonus +9 or monk level 8th"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Power Attack","Tiger Claws","Tiger Style","base attack bonus +9 or monk level 8th"],
    "benefit": "While using the Tiger Style feat, you can apply the penalty from Power Attack to your AC instead of attack rolls. Additionally, once per round as a swift action, you can move up to half your speed closer to a target you hit with an unarmed strike or made a successful combat maneuver against on this turn or your last turn."
  },
  {
    "name": "Tiger Style",
    "type": "Combat",
    "description": "Your unarmed fighting style emulates the strength and ferocity of a tiger.",
    "prerequisites": ["Improved Unarmed Strike","base attack bonus +3 or monk level 3rd"],
    "prerequisitesFeats": ["Improved Unarmed Strike","base attack bonus +3 or monk level 3rd"],
    "benefit": "While using this style, you gain a +2 bonus to your CMD against bull rush, overrun, and trip maneuvers. You can also deal slashing damage with your unarmed strikes. Whenever you score a critical hit with your slashing unarmed strike, your opponent also takes 1d4 points of bleed damage at the start of his next two turns."
  },
  {
    "name": "Trapper's Setup",
    "type": "General",
    "description": "You have an instinct for waiting until just the right moment to spring a hazard or trap.",
    "prerequisites": ["Craft (traps) 5 ranks"],
    "prerequisitesFeats": ["Craft (traps) 5 ranks"],
    "benefit": "When you manually trigger a trap against opponents, that trap receives either a +2 circumstance bonus on melee attack rolls or a +2 circumstance bonus to its saving throw DC."
  },
  {
    "name": "Twin Thunders",
    "type": "Combat",
    "description": "When you fight giants, your powerful blows combine with skills learned from generations of your people to quickly even the odds.",
    "prerequisites": ["Dwarf or gnome","defensive training racial trait","Two-Weapon Fighting or flurry of blows class feature","Weapon Focus with both wielded weapons"],
    "prerequisitesFeats": ["Dwarf or gnome","defensive training racial trait","Two-Weapon Fighting or flurry of blows class feature","Weapon Focus with both wielded weapons"],
    "benefit": "Once per round, when wielding a bludgeoning weapon in each hand against a creature with the giant subtype, if you hit the creature with your off-hand weapon after you hit with your primary weapon, roll the damage dice for your off-hand weapon twice and add the results together before adding any bonuses. Such extra weapon damage dice are not multiplied on a critical hit."
  },
  {
    "name": "Twin Thunders Flurry",
    "type": "Combat",
    "description": "Your dual bludgeoning strikes are especially deadly when you are fighting giants.",
    "prerequisites": ["Dwarf or gnome; defensive training racial trait; Improved Two-Weapon Fighting and Two-Weapon Fighting","or flurry of blows class feature; Twin Thunders; Weapon Focus with both wielded weapons; base attack bonus +6"],
    "prerequisitesFeats": ["Dwarf or gnome; defensive training racial trait; Improved Two-Weapon Fighting and Two-Weapon Fighting","or flurry of blows class feature; Twin Thunders; Weapon Focus with both wielded weapons; base attack bonus +6"],
    "benefit": "You can trip a creature with the giant subtype of up to Huge size, and you gain a +2 bonus on damage rolls against creatures of the giant subtype. Further, each time you hit a creature of the giant subtype with your offhand weapon after you hit that creature with your primary weapon, you can deal the extra off-hand weapon damage Twin Thunders grants you."
  },
  {
    "name": "Twin Thunders Master",
    "type": "Combat",
    "description": "With thunderous simultaneous strikes, you can batter a mighty giant into submission.",
    "prerequisites": ["Dwarf or gnome; defensive training racial trait; Improved Two-Weapon Fighting and Two-Weapon Fighting","or flurry of blows class feature; Twin Thunders; Twin Thunders Flurry; Weapon Focus with both wielded weapons; base attack bonus +9"],
    "prerequisitesFeats": ["Dwarf or gnome; defensive training racial trait; Improved Two-Weapon Fighting and Two-Weapon Fighting","or flurry of blows class feature; Twin Thunders; Twin Thunders Flurry; Weapon Focus with both wielded weapons; base attack bonus +9"],
    "benefit": "Whenever you deal an opponent extra damage with the Twin Thunders feat, that opponent is shaken for 1 round. You also force that opponent to succeed at a Fortitude saving throw (DC 10 + half your level + your Str modif ier) or become staggered for 1 round. If you use this feat to render staggered an opponent that is already staggered, you daze that opponent instead. In a similar way, you can stun an opponent that is already dazed."
  },
  {
    "name": "Two-Handed Thrower",
    "type": "Combat",
    "description": "You hurl weapons with both hands and with great force, sometimes using a whirling technique to send your weapon flying through the air at tremendous speeds.",
    "prerequisites": ["Str 15"],
    "prerequisitesFeats": ["Str 15"],
    "benefit": "Whenever you use two hands to throw a onehanded or two-handed weapon, you gain a bonus on damage rolls equal to 1-1/2 times your Strength bonus. Using two hands to throw any weapon requires only a standard action for you. If you also have the Quick Draw feat, you can throw two-handed weapons at your full normal rate of attacks."
  },
  {
    "name": "Two-Weapon Feint",
    "type": "Combat",
    "description": "You use one weapon to distract your enemy while slipping another past his defenses.",
    "prerequisites": ["Dex 15","Int 13","Combat Expertise","Two-Weapon Fighting"],
    "prerequisitesFeats": ["Dex 15","Int 13","Combat Expertise","Two-Weapon Fighting"],
    "benefit": "While using Two-Weapon Fighting to make melee attacks, you can forgo your first primary-hand melee attack to make a Bluff check to feint an opponent."
  },
  {
    "name": "Vicious Stomp",
    "type": "Combat",
    "description": "You take advantage of the moment to brutally kick an enemy when he is down.",
    "prerequisites": ["Combat Reflexes","Improved Unarmed Strike"],
    "prerequisitesFeats": ["Combat Reflexes","Improved Unarmed Strike"],
    "benefit": "Whenever an opponent falls prone adjacent to you, that opponent provokes an attack of opportunity from you. This attack must be an unarmed strike."
  },
  {
    "name": "Wave Strike",
    "type": "Combat",
    "description": "You present a serene facade until you unsheathe your weapon and strike in one fluid motion.",
    "prerequisites": ["Weapon expertise class feature or Quick Draw","Bluff 1 rank"],
    "prerequisitesFeats": ["Weapon expertise class feature or Quick Draw","Bluff 1 rank"],
    "benefit": "If on your first turn of combat you draw a melee weapon to attack an opponent within your reach, you can spend a swift action to make a Bluff check to feint against that opponent."
  },
  {
    "name": "Whip Mastery",
    "type": "Combat",
    "description": "Your superior expertise with this weapon does not provoke attacks of opportunity from your enemies.",
    "prerequisites": ["Weapon Focus (whip)","base attack bonus +2"],
    "prerequisitesFeats": ["Weapon Focus (whip)","base attack bonus +2"],
    "benefit": "You no longer provoke attacks of opportunity when attacking with a whip. You can deal lethal damage with a whip, although you can still deal nonlethal damage when you want. Further, you can deal damage with a whip despite a creature's armor bonus or natural armor bonus."
  },
  {
    "name": "Abundant Revelations",
    "type": "General",
    "description": "You can plumb the depths of your mystery to use your revelations more often.",
    "prerequisites": ["Mystery class feature"],
    "prerequisitesFeats": ["Mystery class feature"],
    "benefit": "Choose one of your revelations that has a number of uses per day. You gain 1 additional use per day of that revelation."
  },
  {
    "name": "Accursed Critical",
    "type": "General",
    "description": "Your spells carry an embedded curse that manifests when they strike true.",
    "prerequisites": ["Critical Focus","ability to cast bestow curse or major curse","caster level 9th"],
    "prerequisitesFeats": ["Critical Focus","ability to cast bestow curse or major curse","caster level 9th"],
    "benefit": "When you confirm a critical hit with a spell or spell-like ability, you may cast bestow curse or major curse on that target as an immediate action. This works even with ranged spells. You must have bestow curse or major curse prepared or otherwise available to cast, and using this ability casts the corresponding spell."
  },
  {
    "name": "Accursed Hex",
    "type": "General",
    "description": "You can make a second attempt at failed hexes.",
    "prerequisites": ["Hex class feature"],
    "prerequisitesFeats": ["Hex class feature"],
    "benefit": "When you target a creature with a hex that cannot target the same creature more than once per day, and that creature succeeds at its saving throw against the hex's effect, you can target the creature with the same hex a second time before the end of your next turn. If the second attempt fails, you can make no further attempts to target that creature with the same hex for 1 day."
  },
  {
    "name": "Advanced Ranger Trap",
    "type": "General",
    "description": "Your ranger traps are especially difficult to notice and avoid.",
    "prerequisites": ["Trap class feature","ranger level 5th"],
    "prerequisitesFeats": ["Trap class feature","ranger level 5th"],
    "benefit": "Add +1 to the Difficulty Class on all Perception and Disable Device skill checks to find or disable the traps you make with your trap class feature. Add a +1 to the Difficulty Class on all saving throws against the effects of the trap you make with your trap class feature."
  },
  {
    "name": "Antagonize",
    "type": "General",
    "description": "Whether with biting remarks or hurtful words, you are adept at making creatures angry with you.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can make Diplomacy and Intimidate checks to make creatures respond to you with hostility. No matter which skill you use, antagonizing a creature takes a standard action that does not provoke attacks of opportunity, and has a DC equal to 10 + the target's Hit Dice + the target's Wisdom modifier. You cannot make this check against a creature that does not understand you or has an Intelligence score of 3 or lower. Before you make these checks, you may make a Sense Motive check (DC 20) as a swift action to gain an insight bonus on these Diplomacy or Intimitade checks equal to your Charisma bonus until the end of your next turn. The benefits you gain for this check depend on the skill you use. This is a mind-affecting effect. Diplomacy: You fluster your enemy. For the next minute, the target takes a -2 penalty on all attacks rolls made against creatures other than you and has a 10% spell failure chance on all spells that do not target you or that have you within their area of effect. Intimidate: The creature flies into a rage. On its next turn, the target must attempt to make a melee attack against you, make a ranged attack against you, target you with a spell, or include you in the area of a spell. The effect ends if the creature is prevented from attacking you or attempting to do so would harm it (for example, if you are on the other side of a chasm or a wall of fire). If it cannot attack you on its turn, you may make the check again as an immediate action to extend the effect for 1 round (but cannot extend it thereafter). The effect ends as soon as the creature melee attacks you. Once you have targeted a creature with this ability, you cannot target it again for 1 day."
  },
  {
    "name": "Blighted Critical",
    "type": "General",
    "description": "With a critical hit from a spell or spell-like ability, you give the target a minor spellblight.",
    "prerequisites": ["Caster level 5th"],
    "prerequisitesFeats": ["Caster level 5th"],
    "benefit": "Whenever you confirm a critical hit with a touch spell, ranged touch spell, or spell-like ability against an opponent, the victim gains a random minor spellblight (see page 95)."
  },
  {
    "name": "Blighted Critical Mastery",
    "type": "General",
    "description": "You control the type of spellblight your critical hits give your opponent.",
    "prerequisites": ["Blighted Critical","caster level 9th"],
    "prerequisitesFeats": ["Blighted Critical","caster level 9th"],
    "benefit": "Whenever you apply a spellblight by way of the Blighted Critical or Greater Blighted critical feat, you can choose the spellblight you apply rather than determining it randomly."
  },
  {
    "name": "Burning Spell",
    "type": "Metamagic",
    "description": "You cause creatures to take extra damage when you affect them with a spell that has the acid or fire descriptor.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "The acid or fire effects of the affected spell adhere to the creature, causing more damage the next round. When a creature takes acid or fire damage from the affected spell, that creature takes damage equal to 2 x the spell's actual level at the start of its next turn. The damage is acid or fire, as determined by the spell's descriptor. If a burning spell has both the fire and acid descriptor, the caster chooses what kind of damage is dealt by the burning spell effect. A burning spell uses up a slot two levels higher than the spell's actual level."
  },
  {
    "name": "Channeled Shield Wall",
    "type": "General",
    "description": "You draw on your channel energy to enhance the protective ability of your shield and those of adjacent allies.",
    "prerequisites": ["Channel energy","3d6 prof iciency with a shield"],
    "prerequisitesFeats": ["Channel energy","3d6 prof iciency with a shield"],
    "benefit": "As a swift action, you can spend a use of your channel energy to grant yourself a +2 def lection bonus while using a shield. This bonus lasts 1 minute per cleric level or effective cleric level. While you benefit from this bonus, allies with shields also gain a +2 def lection bonus while they are adjacent to you."
  },
  {
    "name": "Concussive Spell",
    "type": "Metamagic",
    "description": "You cause creatures to be disoriented when you affect them with a spell that has the sonic descriptor.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "With sonic damage comes a concussive wave of energy that rattles creatures affected by the spell. A concussive spell causes creatures that take damage from a spell that has the sonic descriptor to take a -2 penalty on attack rolls, saving throws, skill checks, and ability checks for a number of rounds equal to the actual spell level of the spell. A concussive spell only affects spells with the sonic descriptor. A concussive spell uses up a spell slot two levels higher than the spell's actual level."
  },
  {
    "name": "Create Reliquary Arms and Shields",
    "type": "General",
    "description": "Your magical creations are infused with divine power.",
    "prerequisites": ["Craft Magic Arms and Armor","ability to cast consecrate or desecrate"],
    "prerequisitesFeats": ["Craft Magic Arms and Armor","ability to cast consecrate or desecrate"],
    "benefit": "When you craft a magic weapon, magic armor, or magic shield, you may add one casting of consecrate or desecrate as part of the item crafting process. This increases the item's Price by 250 gp. The item becomes a reliquary and can be used as a holy (or unholy) symbol divine focus of your deity. If you cast consecrate or desecrate, your reliquary counts as a permanent fixture for that spell while it remains in the spell's area."
  },
  {
    "name": "Create Sanguine Elixir",
    "type": "General",
    "description": "You can condense a fraction of your bloodline's power into a powerful elixir.",
    "prerequisites": ["Cha 15","Brew Potion","Craft (alchemy) 12 ranks","sorcerer level 3rd"],
    "prerequisitesFeats": ["Cha 15","Brew Potion","Craft (alchemy) 12 ranks","sorcerer level 3rd"],
    "benefit": "Once per day, when you clear your mind to regain spell slots, you can create a sanguine elixir. When you do, pick one of your bloodline powers. You transfer that power into a small potion that any creature can drink to temporarily gain the benefit of your bloodline power. Creating a sanguine elixir takes 1 hour, and requires special oils and distillates worth 100 gp, and when you make the sanguine elixir, you lose access to the bloodline power until the next time you clear your mind to regain spell slots. When a creature drinks a sanguine elixir, it can activate the bloodline power anytime before the end of its next turn, as if it had access to that bloodline power. A creature that drinks the elixir cannot gain the benefit if its character level does not equal or exceed the minimum level of the bloodline power. Any level-dependent effects use the character level of the creature that drinks the sanguine elixir, or your sorcerer level, whichever is lower. Drinking a sanguine elixir is just like drinking a potion. A sanguine elixir is treated as a magic item with your caster level. Sanguine elixirs are extremely unstable. They lose their potency 1 day after they are created."
  },
  {
    "name": "Defending Eidolon",
    "type": "General",
    "description": "You have trained your eidolon to protect you.",
    "prerequisites": ["Shield ally feature"],
    "prerequisitesFeats": ["Shield ally feature"],
    "benefit": "Whenever you are adjacent to your eidolon, you can choose for the eidolon to take a -1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your eidolon's base attack bonus reaches +5, and for every +5 thereafter, the penalty increases by -1 and the dodge bonus increases by +1. You must choose to use this feat when your eidolon is making an attack or full-attack action with melee or natural weapons, and its effect lasts until your eidolon's next turn, or until you are no longer adjacent to the eidolon, whichever occurs first."
  },
  {
    "name": "Deny Death",
    "type": "General",
    "description": "Your ki is so strong that it can deny death.",
    "prerequisites": ["Ki pool","Endurance"],
    "prerequisitesFeats": ["Ki pool","Endurance"],
    "benefit": "As long as you have 1 ki point in your ki pool, when you fail your Constitution check to stabilize, you do not lose 1 hit point. If you succeed at the check, you can spend 1 ki point to heal 1d6 hit points. If you roll a natural 20 on the check to stabilize, you can spend 1 ki point to heal 2d6 hit points of damage instead."
  },
  {
    "name": "Detect Expertise",
    "type": "General",
    "description": "You can detect the mystic specialty of a foe.",
    "prerequisites": ["Int 13; ability to cast detect chaos","detect evil","detect good","detect law","or detect magic"],
    "prerequisitesFeats": ["Int 13; ability to cast detect chaos","detect evil","detect good","detect law","or detect magic"],
    "benefit": "When you use any of the spells listed in this feat's prerequisites to detect a creature's alignment or its magic, you have a chance of detecting what spellcasting expertise it has. After you observe a creature with the detect spell for 3 rounds, it must make a Will save (DC 10 + 1/2 your caster level + your Intelligence modifier). If it fails the saving throw, you learn what bloodlines, domains, hexes, schools, or mysteries (if any) the creature possesses. If the creature makes its save, it is immune to the effects of this feat for 24 hours."
  },
  {
    "name": "Die for Your Master",
    "type": "General",
    "description": "Your tumor familiar goes to any length to save your life.",
    "prerequisites": ["Tumor familiar alchemist discovery"],
    "prerequisitesFeats": ["Tumor familiar alchemist discovery"],
    "benefit": "If your tumor familiar is attached, and you would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the familiar throws itself in the way of the attack as an immediate action. If it makes a Ref lex saving throw (DC = damage dealt), it takes all the damage from the attack; if it fails, it takes half damage and you take half damage. The familiar must be aware of the attack and able to react to it in order to use this ability, and it can only do this once per day-if it is denied its Dexterity bonus to AC, it can't use this ability. Since this effect would not normally allow the familiar to make a Ref lex save for half damage, its improved evasion ability does not apply on this saving throw."
  },
  {
    "name": "Divine Interference",
    "type": "General",
    "description": "You can convert a spell to interfere with an enemy's attack.",
    "prerequisites": ["Divine spellcaster","caster level 10th"],
    "prerequisitesFeats": ["Divine spellcaster","caster level 10th"],
    "benefit": "As an immediate action, when an enemy within 30 feet hits an ally with an attack, you can sacrifice a prepared divine spell or (if you are a spontaneous caster) an unused spell slot and make the enemy reroll the attack roll. The second attack roll takes a penalty equal to the level of the spell you sacrifice. You must sacrifice a spell of 1st-level or higher to use this ability. Whether or not the second attack is successful, you cannot use this effect on the same creature again for 1 day."
  },
  {
    "name": "Dragonbane Aura",
    "type": "General",
    "description": "Those within your dragonbane aura gain the same protection that you do.",
    "prerequisites": ["Aura of courage class feature","caster level 8th"],
    "prerequisitesFeats": ["Aura of courage class feature","caster level 8th"],
    "benefit": "When fighting dragons, your aura of courage expands to a 20-foot-radius emanation, and allies in the aura gain a morale bonus on saving throws against dragon breath equal to your aura of courage's bonus against fear effects."
  },
  {
    "name": "Echoing Spell",
    "type": "Metamagic",
    "description": "You have learned how to release most, but not all, of a spell's potential when you cast it.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you cast an echoing spell, it does not disappear entirely from memory, and you can cast it one additional time during that day. No effect that allows you to reprepare or recast a spell can affect the echoed spell. If you prepare spells, this second casting does not require you to prepare it in another spell slot. If you spontaneously cast spells, this second casting does not expend another available spell slot. An echoing spell uses up a spell slot three levels higher than the spell's actual level."
  },
  {
    "name": "Eldritch Heritage",
    "type": "General",
    "description": "You are descended from a long line of sorcerers, and some portion of their power flows in your veins.",
    "prerequisites": ["Cha 13","Skill Focus with the class skill of bloodline selected for this feat (see below)","character level 3rd"],
    "prerequisitesFeats": ["Cha 13","Skill Focus with the class skill of bloodline selected for this feat (see below)","character level 3rd"],
    "benefit": "Select one sorcerer bloodline. You must have Skill focus in the class skill that bloodline grants to a sorcerer at 1st level (for example, Heal for the celestial bloodline). This bloodline cannot be a bloodline you already have. You gain the first-level bloodline power for the selected bloodline. For purposes of using that power, treat your sorcerer level as equal to your character level - 2, even if you have levels in sorcerer. You do not gain any of the other bloodline abilities."
  },
  {
    "name": "Ensemble",
    "type": "General",
    "description": "You can create an ensemble of skilled and amateur performers to aid you in your performance.",
    "prerequisites": ["Perform 5 ranks"],
    "prerequisitesFeats": ["Perform 5 ranks"],
    "benefit": "When you are performing, allies within 20 feet who also have this feat can aid you with your Perform checks (including those made as part of bardic performance) as if they were aiding another as an immediate action. The allies make their aid another rolls before you make your check. No more than four allies can grant you a bonus with aid another. Allies aiding you do not need to use the same category of the Perform skill that you are using in order to aid you."
  },
  {
    "name": "Evolved Familiar",
    "type": "General",
    "description": "Your familiar is different from others of its kind.",
    "prerequisites": ["Int 13","Cha 13","familiar class feature"],
    "prerequisitesFeats": ["Int 13","Cha 13","familiar class feature"],
    "benefit": "Select an evolution from the list of 1-point evolutions available to a summoner's eidolon. Your familiar has this evolution. The familiar must conform to any limitations of the evolution. For instance, no familiars can benefit from the mount evolution and only familiars with wings can take the wing buffet evolution. If you gain a new familiar, your old familiar loses all evolutions, and you can select a new 1-point evolution for the new familiar."
  },
  {
    "name": "Exploit Lore",
    "type": "General",
    "description": "You can use your knowledge of a creature's weaknesses to deliver a driving and relentless assault against it.",
    "prerequisites": ["Monster lore class feature","base attack bonus +11"],
    "prerequisitesFeats": ["Monster lore class feature","base attack bonus +11"],
    "benefit": "Once per day, when you successfully identify all abilities and weaknesses of a creature using the appropriate Knowledge check, you gain a +2 bonus on attack and damage rolls against that creature for 1 minute. If you identify the abilities and weaknesses of numerous creatures, you must pick one creature to be the target of this effect."
  },
  {
    "name": "Extra Arcana",
    "type": "General",
    "description": "You have unlocked the secret of a new magus arcana.",
    "prerequisites": ["Magus arcana class feature"],
    "prerequisitesFeats": ["Magus arcana class feature"],
    "benefit": "You gain one additional magus arcana. You must meet all the prerequisites for this magus arcana."
  },
  {
    "name": "Extra Arcane Pool",
    "type": "General",
    "description": "You have learned how to draw more power from your arcane pool.",
    "prerequisites": ["Arcane pool class feature"],
    "prerequisitesFeats": ["Arcane pool class feature"],
    "benefit": "Your arcane pool increases by 2."
  },
  {
    "name": "Extended Bane",
    "type": "General",
    "description": "Your dedication knows no limit. Your wrath dies hard.",
    "prerequisites": ["Bane class feature"],
    "prerequisitesFeats": ["Bane class feature"],
    "benefit": "Add your Wisdom bonus to the number of rounds per day that you can use your bane ability."
  },
  {
    "name": "Extra Cantrips or Orisons",
    "type": "General",
    "description": "You are a master of minor spells.",
    "prerequisites": ["Ability to cast cantrips or orisons"],
    "prerequisitesFeats": ["Ability to cast cantrips or orisons"],
    "benefit": "Add two cantrips to your cantrips known or two orisons to your orisons known."
  },
  {
    "name": "Extra Evolution",
    "type": "General",
    "description": "Your eidolon has more evolutions.",
    "prerequisites": ["Eidolon class feature"],
    "prerequisitesFeats": ["Eidolon class feature"],
    "benefit": "Your eidolon's evolution pool increases by 1."
  },
  {
    "name": "Extra Ranger Trap",
    "type": "General",
    "description": "You can use ranger traps more often.",
    "prerequisites": ["Trap class feature"],
    "prerequisitesFeats": ["Trap class feature"],
    "benefit": "You can set ranger traps two additional times per day."
  },
  {
    "name": "Extra Summons",
    "type": "General",
    "description": "You can summon monsters more often each day.",
    "prerequisites": ["Ability to cast summon monster as a spell-like ability","summoner 1st"],
    "prerequisitesFeats": ["Ability to cast summon monster as a spell-like ability","summoner 1st"],
    "benefit": "You gain 1 additional use of your summon monster spell-like ability per day."
  },
  {
    "name": "Eyes of Judgment",
    "type": "General",
    "description": "The true motives of creatures cannot escape your discerning gaze.",
    "prerequisites": ["Detect alignment class feature","caster level 6th"],
    "prerequisitesFeats": ["Detect alignment class feature","caster level 6th"],
    "benefit": "When using your detect alignment class feature, you may spend 3 rounds studying a creature within 60 feet. You cannot take any other actions while doing this. After that time has passed, you learn the alignment of the creature."
  },
  {
    "name": "Fast Empathy",
    "type": "General",
    "description": "Your empathic attunement to nature connects you swiftly with bestial minds.",
    "prerequisites": ["Handle Animal 5 ranks","wild empathy class feature"],
    "prerequisitesFeats": ["Handle Animal 5 ranks","wild empathy class feature"],
    "benefit": "Using wild empathy is a standard action for you."
  },
  {
    "name": "Favored Judgment",
    "type": "General",
    "description": "Your judgment against a particular type of creature is particularly harsh.",
    "prerequisites": ["Wis 13","judgment class feature"],
    "prerequisitesFeats": ["Wis 13","judgment class feature"],
    "benefit": "Select a favored race from the ranger's favored enemies chart. Any sacred or profane bonus you gain from a judgment is 1 higher for attacks you make against or take from creatures that match the selected favored enemy."
  },
  {
    "name": "Fearless Aura",
    "type": "General",
    "description": "Your aura of courage becomes more potent, as your steadfast resolve is also manifested by your allies.",
    "prerequisites": ["Aura of courage class feature","caster level 8th"],
    "prerequisitesFeats": ["Aura of courage class feature","caster level 8th"],
    "benefit": "Your aura of courage expands to a 20-foot-radius emanation. Allies within the aura are immune to fear effects."
  },
  {
    "name": "Fire Music",
    "type": "General",
    "description": "Your ability to command fire and bardic music has created a strange blend of both magics.",
    "prerequisites": ["Spellcraft 5 ranks","ability to cast bard spells","ability to cast an arcane fire spell from some other spellcasting class"],
    "prerequisitesFeats": ["Spellcraft 5 ranks","ability to cast bard spells","ability to cast an arcane fire spell from some other spellcasting class"],
    "benefit": "When you cast a bard spell that deals damage, you may replace the spell's normal damage with fire damage or split the spell's damage so that half of it is the normal damage type and half is fire damage. If you cast a summon monster spell as a bard spell, you may choose to give the summoned creature a fiery appearance, which gives it fire resistance 5 and adds +1 fire damage to all of its natural attacks. The creature sheds dim light in a 5-foot radius. This aspect of the feat has no effect if the creature already has the fire subtype. When you use this feat, the affected spell gains the fire descriptor."
  },
  {
    "name": "Flaring Spell",
    "type": "Metamagic",
    "description": "You dazzle creatures when you affect them with a spell that has the fire, light, or electricity descriptor.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "The electricity, fire, or light effects of the affected spell create a flaring that dazzles creatures that take damage from the spell. A flare spell causes a creature that takes fire or electricity damage from the affected spell to become dazzled for a number of rounds equal to the actual level of the spell. A flaring spell only affects spells with a fire, light, or electricity descriptor. A flaring spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Focused Eidolon",
    "type": "General",
    "description": "Your bond with your eidolon helps to focus your concentration.",
    "prerequisites": ["Shield ally class feature"],
    "prerequisitesFeats": ["Shield ally class feature"],
    "benefit": "While you are adjacent to your eidolon, you receive a +4 bonus on concentration checks."
  },
  {
    "name": "Gliding Steps",
    "type": "General",
    "description": "You skate across the surface of the earth as if gliding on ice.",
    "prerequisites": ["Dodge","Mobility","Nimble Moves","ki pool"],
    "prerequisitesFeats": ["Dodge","Mobility","Nimble Moves","ki pool"],
    "benefit": "If you have at least one ki in your ki pool, when you move you do not provoke attacks of opportunity when leaving the first square of that movement. You can spend 1 ki point to avoid provoking attacks of opportunity during that entire move."
  },
  {
    "name": "Grant Initiative",
    "type": "General",
    "description": "Not only are you a master at taking the initiative, but you can also grant it to someone else.",
    "prerequisites": ["Cunning initiative class feature"],
    "prerequisitesFeats": ["Cunning initiative class feature"],
    "benefit": "At the start of each encounter, you can either choose to keep the bonus granted to you by your Wisdom modifier on initiative checks or choose to give that bonus to one of your allies that you can see. You must make this choice before you or the ally you are granting the bonus to makes the initiative check."
  },
  {
    "name": "Greater Blighted Critical",
    "type": "General",
    "description": "Your critical hit from a spell or spell-like ability aff licts the target with a major spellblight.",
    "prerequisites": ["Blighted Critical","caster level 12th"],
    "prerequisitesFeats": ["Blighted Critical","caster level 12th"],
    "benefit": "Whenever you confirm a critical hit with a touch spell, ranged touch spell, or spell-like ability against an opponent, the victim gains a random major spellblight (see page 96)."
  },
  {
    "name": "Greater Eldritch Heritage",
    "type": "General",
    "description": "Your discovered bloodline power reaches its zenith.",
    "prerequisites": ["Cha 17","Eldritch Heritage","Improved Eldritch Heritage","character level 17th"],
    "prerequisitesFeats": ["Cha 17","Eldritch Heritage","Improved Eldritch Heritage","character level 17th"],
    "benefit": "You gain an additional power from the bloodline you selected with the Eldritch Heritage feat. You gain a 15th-level (or lower) sorcerer bloodline power that you do not already have. For purposes of using that power, treat your character level as your sorcerer level for all your sorcerer bloodline powers granted by this feat, Eldritch Heritage, and Improved Eldritch Heritage."
  },
  {
    "name": "Greater Mercy",
    "type": "General",
    "description": "Your mercy has incredible recuperative properties.",
    "prerequisites": ["Cha 13","lay on hands class feature","mercy class feature"],
    "prerequisitesFeats": ["Cha 13","lay on hands class feature","mercy class feature"],
    "benefit": "When you use your lay on hands ability and the target of that ability does not have any conditions your mercies can remove, it instead heals an additional +1d6 points of damage."
  },
  {
    "name": "Greater Spell Specialization",
    "type": "General",
    "description": "You can sacrifice a prepared spell in order to spontaneously cast your specialized spell.",
    "prerequisites": ["Int 13","Spell Focus","Spell Specialization","able to prepare 5th-level spells"],
    "prerequisitesFeats": ["Int 13","Spell Focus","Spell Specialization","able to prepare 5th-level spells"],
    "benefit": "By sacrificing a prepared spell of the same or higher level than your specialized spell, you may spontaneously cast your specialized spell. The specialized spell is treated as its normal level, regardless of the spell slot used to cast it. You may add a metamagic feat to the spell by increasing the spell slot and casting time, just like a cleric spontaneously casting a cure or inf lict spell with a metamagic feat."
  },
  {
    "name": "Greater Wild Empathy",
    "type": "General",
    "description": "Your natural empathy stretches across the world of nature.",
    "prerequisites": ["Knowledge (nature) 5 ranks","wild empathy class feature"],
    "prerequisitesFeats": ["Knowledge (nature) 5 ranks","wild empathy class feature"],
    "benefit": "You gain a +2 insight bonus on wild empathy checks, and you may use wild empathy to duplicate an Intimidate check rather than a Diplomacy check. In addition, choose one of the following kinds of creatures: elementals, fey, lycanthropes, plants, or vermin. You may inf luence creatures of that type with wild empathy, if their Intelligence score is 1 or 2, or they do not possess an Intelligence score. Once you choose the type of creature, it cannot be changed."
  },
  {
    "name": "Implant Bomb",
    "type": "General",
    "description": "You can attach a bomb to a creature that explodes when the creature dies or after 24 hours.",
    "prerequisites": ["Heal 5 ranks","delayed bomb alchemist discovery"],
    "prerequisitesFeats": ["Heal 5 ranks","delayed bomb alchemist discovery"],
    "benefit": "You may implant a bomb in a willing or helpless creature (a mindless creature under your control, such as a zombie, counts as willing for this purpose). This takes 1 hour and expends 1 use of your bomb ability for the day. When the implanted creature dies or is destroyed, the bomb detonates in the creature's square as if it were a delayed bomb set by you (though you can set the bomb's damage to less than your normal bomb damage). You can use any bomb-affecting discoveries on this implanted bomb (acid bomb, frost bomb, smoke bomb, and so on) as normal. The bomb automatically detonates 24 hours after you implant it in the creature. If you expend 150 gp worth of alchemical reagents per die of the bomb's damage (for example, 750 gp for a 5d6 bomb), the bomb does not automatically detonate after 24 hours, and only detonates if the creature dies or is destroyed (24 hours after implantation, this bomb no longer counts toward your daily total). Implanting a bomb is as invasive as using the Heal skill to treat deadly wounds and leaves surgical scars unless the creature is healed by magic or abilities such as regeneration or fast healing. Some creatures (such as oozes, elementals, and creatures with the incorporeal quality) cannot have bombs implanted in them. Removing an implanted bomb requires a Heal check to treat deadly wounds, followed by a dispel magic spell or Disable Device check to neutralize the bomb (DC = 11 + alchemist's caster level)."
  },
  {
    "name": "Improved Eldritch Heritage",
    "type": "General",
    "description": "The power of your discovered bloodline continues to grow.",
    "prerequisites": ["Cha 15","Eldritch Heritage","character level 11th"],
    "prerequisitesFeats": ["Cha 15","Eldritch Heritage","character level 11th"],
    "benefit": "You gain either the 3rd-level or the 9th-level power (your choice) of the bloodline you selected with the Eldritch Heritage feat. For purposes of using that power, treat your sorcerer level as equal to your character level - 2, even if you have levels in sorcerer. You do not gain any of the other bloodline abilities."
  },
  {
    "name": "Improved Monster Lore",
    "type": "General",
    "description": "You are obsessed with the abilities and weaknesses of monsters.",
    "prerequisites": ["Monster lore class feature"],
    "prerequisitesFeats": ["Monster lore class feature"],
    "benefit": "You gain a sacred bonus on all skill checks to identify the abilities and weaknesses of creatures equal to 1/2 your level in classes that grant you the monster lore class feature."
  },
  {
    "name": "Insightful Gaze",
    "type": "General",
    "description": "In your personal interactions, you notice what others don't. It's hard to get anything past you.",
    "prerequisites": ["Stern gaze class feature","Sense Motive 5 ranks"],
    "prerequisitesFeats": ["Stern gaze class feature","Sense Motive 5 ranks"],
    "benefit": "Whenever you make a Sense Motive check to oppose someone's Bluff check, you can roll two dice and take the higher result."
  },
  {
    "name": "Intimidating Gaze",
    "type": "General",
    "description": "There is something in your eyes that scares people.",
    "prerequisites": ["Cha 13+","stern gaze class feature","Intimidate 5 ranks"],
    "prerequisitesFeats": ["Cha 13+","stern gaze class feature","Intimidate 5 ranks"],
    "benefit": "Once per day, as a free action, when making an Intimidate skill check, you can roll two dice and take the higher result."
  },
  {
    "name": "Judgment Surge",
    "type": "General",
    "description": "Once per day, the power of your faith surges, further empowering your judgments.",
    "prerequisites": ["Judgment class feature"],
    "prerequisitesFeats": ["Judgment class feature"],
    "benefit": "Once per day, you can treat your class level for your judgment class feature as if it were 3 higher than normal. If you have multiple judgments active at the same time, this benefit applies to all of them."
  },
  {
    "name": "Ki Stand",
    "type": "General",
    "description": "If an opponent knocks you down, you swiftly rebound with an attack.",
    "prerequisites": ["Ki pool"],
    "prerequisitesFeats": ["Ki pool"],
    "benefit": "While you have at least 1 ki point in your ki pool, you can stand up as a swift action that provokes attacks of opportunity. You may spend 1 point of your ki pool to stand up as a swift action without provoking attacks of opportunity."
  },
  {
    "name": "Learn Ranger Trap",
    "type": "General",
    "description": "You learn how to create one kind of ranger trap.",
    "prerequisites": ["Survival 5 ranks"],
    "prerequisitesFeats": ["Survival 5 ranks"],
    "benefit": "Select one ranger trap (see page 64). You may use this trap a number of times per day equal to your Wisdom bonus (minimum 1). The DC for your trap is equal to 10 + 1/2 your character's level + your Wisdom bonus, and it lasts 1 day per two character levels. If you are not a ranger, you can only set extraordinary traps with this feat; like all extraordinary ranger traps, this decreases the trap DC by 2."
  },
  {
    "name": "Life Lure",
    "type": "General",
    "description": "Your channeled positive energy is irresistibly sweet to nearby undead.",
    "prerequisites": ["Channel positive energy class feature"],
    "prerequisitesFeats": ["Channel positive energy class feature"],
    "benefit": "As a standard action, you can channel positive energy to fascinate all undead within 30 feet for a number of rounds equal to your Charisma modifier (minimum of 1). Undead that succeed at a Will save (DC 10 + 1/2 your cleric level + your Charisma modifier) are unaffected. Channeling energy for this purpose does not heal or harm creatures."
  },
  {
    "name": "Moonlight Summons",
    "type": "General",
    "description": "Your summoned minions are infused with the power of the moon.",
    "prerequisites": ["Spell Focus (conjuration)","able to cast summon nature's ally"],
    "prerequisitesFeats": ["Spell Focus (conjuration)","able to cast summon nature's ally"],
    "benefit": "Creatures you summon shed light as a light spell. They are immune to confusion and sleep effects, and their natural weapons are treated as silver for the purposes of overcoming damage reduction."
  },
  {
    "name": "Mystic Stride",
    "type": "General",
    "description": "Enchanted vegetation does not bar your path.",
    "prerequisites": ["Dex 15","Nimble Moves","woodland stride class feature"],
    "prerequisitesFeats": ["Dex 15","Nimble Moves","woodland stride class feature"],
    "benefit": "You can move at full speed even through thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion, even if those areas confer the entangled condition."
  },
  {
    "name": "Oracular Intuition",
    "type": "General",
    "description": "You are highly sensitive to magic and changes in a person's demeanor.",
    "prerequisites": ["Mystery class feature"],
    "prerequisitesFeats": ["Mystery class feature"],
    "benefit": "You get a +2 bonus on Sense Motive checks and Spellcraft checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Painful Anchor",
    "type": "General",
    "description": "Evil outsiders take damage when they attempt to connect to other planes.",
    "prerequisites": ["Anchoring aura class feature"],
    "prerequisitesFeats": ["Anchoring aura class feature"],
    "benefit": "When an evil outsider uses a calling, summoning, or teleportation effect, or any ability that physically transports a creature to or from another plane (such as blink or etherealness) within your anchoring aura, it takes damage equal to 4d8 + your Charisma modifier. This damage comes from holy power and is not subject to damage reduction, energy immunities, or energy resistances."
  },
  {
    "name": "Piercing Spell",
    "type": "Metamagic",
    "description": "Your studies have helped you develop methods to overcome spell resistance.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you cast a piercing spell against a target with spell resistance, it treats the spell resistance of the target as 5 lower than its actual SR. A piercing spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Planar Preservationist",
    "type": "General",
    "description": "You know how to preserve and reconstitute extraplanar monsters as well as normal animals.",
    "prerequisites": ["Preservationist alchemist archetype"],
    "prerequisitesFeats": ["Preservationist alchemist archetype"],
    "benefit": "For every summon nature's ally extract you know, you learn the equivalent summon monster spell as an extract. If you later learn other summon nature's ally extracts, you automatically learn the equivalent summon monster spell as an extract."
  },
  {
    "name": "Powerful Shape",
    "type": "General",
    "description": "Your wild shapes are mighty and muscular.",
    "prerequisites": ["Wild shape class feature","druid level 8th"],
    "prerequisitesFeats": ["Wild shape class feature","druid level 8th"],
    "benefit": "When in wild shape, treat your size as one category larger for the purpose of calculating CMB, CMD, carrying capacity, and any size-based special attacks you use or that are used against you (such as grab, swallow whole, and trample)."
  },
  {
    "name": "Prodigy",
    "type": "General",
    "description": "You are naturally skilled at arts, professions, and the acquisition of knowledge.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Choose two Craft, Perform, or Profession skills in any combination (two Craft skills, a Craft skill and a Perform skill, and so on). You receive a +2 bonus on checks with these skills. If you have 10 or more ranks in any one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Prophetic Visionary",
    "type": "General",
    "description": "Your oracular abilities give you a glimpse into the future.",
    "prerequisites": ["Mystery class feature"],
    "prerequisitesFeats": ["Mystery class feature"],
    "benefit": "Once per day, you can enter a deep trance to receive a vision of the future. The trance lasts for 10 minutes, during which time you can take no other actions. If you are interrupted, you must begin again. When you come out of the trance, you know whether a particular action in the immediate future will bring good or bad results, as an augury spell with a 70% chance of success."
  },
  {
    "name": "Pure Faith",
    "type": "General",
    "description": "Not only are you immune to disease, like most paladins, but you also are highly resilient to poisons.",
    "prerequisites": ["Divine health class feature"],
    "prerequisitesFeats": ["Divine health class feature"],
    "benefit": "You gain a +4 sacred bonus to saving throws against poison."
  },
  {
    "name": "Quarterstaff Master",
    "type": "Combat",
    "description": "You can wield a quarterstaff as either a two-handed or one-handed weapon.",
    "prerequisites": ["Weapon Focus (quarterstaff)","base attack bonus +5"],
    "prerequisitesFeats": ["Weapon Focus (quarterstaff)","base attack bonus +5"],
    "benefit": "By employing a number of different stances and techniques, you can wield a quarterstaff as a one-handed weapon. At the start of your turn, you decide whether or not you are going to wield the quarterstaff as a one-handed or two-handed weapon. When you wield it as a one-handed weapon, your other hand is free, and you cannot use the staff as a double weapon. You can take the feat Weapon Specialization in the quarterstaff even if you have no levels in fighter."
  },
  {
    "name": "Quick Channel",
    "type": "General",
    "description": "Your divine energies flash with dazzling speed.",
    "prerequisites": ["Knowledge (religion) 5 ranks","channel energy class feature"],
    "prerequisitesFeats": ["Knowledge (religion) 5 ranks","channel energy class feature"],
    "benefit": "You may channel energy as a move action by spending 2 daily uses of that ability."
  },
  {
    "name": "Quick Wild Shape",
    "type": "General",
    "description": "You sacrifice power for speed in changing form.",
    "prerequisites": ["Wild shape class feature","caster level 8th"],
    "prerequisitesFeats": ["Wild shape class feature","caster level 8th"],
    "benefit": "You can wild shape as a move action or a swift action. However, you are limited to forms available to a druid two levels lower when changing form as a move action, or four levels lower as a swift action."
  },
  {
    "name": "Radiant Charge",
    "type": "General",
    "description": "When you charge, you do so with the power of faith.",
    "prerequisites": ["Lay on hands class feature"],
    "prerequisitesFeats": ["Lay on hands class feature"],
    "benefit": "When you hit with a charge attack, you can expend all of your remaining uses of lay on hands to deal extra damage equal to 1d6 per use of lay on hands expended + your Charisma bonus. This damage comes from holy power and is not subject to damage reduction, energy immunities, or energy resistances."
  },
  {
    "name": "Remote Bomb",
    "type": "General",
    "description": "You can set off your delayed bombs at great distances.",
    "prerequisites": ["Delayed bomb discovery"],
    "prerequisitesFeats": ["Delayed bomb discovery"],
    "benefit": "The maximum delay for your delayed bombs increases to a number of minutes equal to your level. If you have line of effect to your delayed bomb, you may detonate it earlier than its preset time by making a DC 20 Intelligence check; the DC increases by +1 for every 10 feet of distance between you and the bomb."
  },
  {
    "name": "Resilient Eidolon",
    "type": "General",
    "description": "Your link with your eidolon is strong enough that it can remain with you for a short time after you fall unconscious or are killed.",
    "prerequisites": ["Eidolon class feature"],
    "prerequisitesFeats": ["Eidolon class feature"],
    "benefit": "If you are knocked unconscious, fall asleep, or are killed, your eidolon remains for a number of rounds equal to your summoner level before it is banished. If you are brought back to consciousness before this duration expires, your eidolon is not banished. If the duration expires before you are brought back to consciousness, your eidolon is banished normally."
  },
  {
    "name": "Reward of Grace",
    "type": "General",
    "description": "When you lay on hands, divine energy ripples through you, granting you grace.",
    "prerequisites": ["Lay on hands class feature"],
    "prerequisitesFeats": ["Lay on hands class feature"],
    "benefit": "Each time you use your lay on hands ability, you gain a +1 sacred bonus on all attack rolls for 1 round."
  },
  {
    "name": "Reward of Life",
    "type": "General",
    "description": "When you lay on hands, you are also healed.",
    "prerequisites": ["Lay on hands class feature"],
    "prerequisitesFeats": ["Lay on hands class feature"],
    "benefit": "Each time you use your lay on hands ability to heal a creature other than yourself, you heal a number of hit points equal to your Charisma bonus. This ability has no effect if you use lay on hands to harm undead."
  },
  {
    "name": "Ricochet Splash Weapon",
    "type": "General",
    "description": "Even when your thrown splash weapons miss, they are especially dangerous.",
    "prerequisites": ["Dex 13","Throw Anything"],
    "prerequisitesFeats": ["Dex 13","Throw Anything"],
    "benefit": "Whenever your splash weapon misses and the misdirection roll indicates it lands in a square occupied by a creature, you may make an attack roll (at a -5 penalty) as if you had thrown the splash weapon at that creature. If this attack roll succeeds, the splash weapon hits and the creature takes full damage instead of splash damage. Squares adjacent to this creature still take splash damage as normal."
  },
  {
    "name": "Rime Spell",
    "type": "Metamagic",
    "description": "Creatures damaged by your spells with the cold descriptor become entangled.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "The frost of your cold spell clings to the target, impeding it for a short time. A rime spell causes creatures that takes cold damage from the spell to become entangled for a number of rounds equal to the original level of the spell. This feat only affects spells with the cold descriptor. A rime spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Sacred Summons",
    "type": "General",
    "description": "The minions of your divine patrons stand ready to answer your call.",
    "prerequisites": ["Aura class feature","ability to cast summon monster"],
    "prerequisitesFeats": ["Aura class feature","ability to cast summon monster"],
    "benefit": "When using summon monster to summon creatures whose alignment subtype or subtypes exactly match your aura, you may cast the spell as a standard action instead of with a casting time of 1 round."
  },
  {
    "name": "Sense Link",
    "type": "General",
    "description": "When you and your eidolon share senses, your combined minds grant you exceptional powers of observation.",
    "prerequisites": ["Bond senses class feature"],
    "prerequisitesFeats": ["Bond senses class feature"],
    "benefit": "When sharing the senses of your eidolon, you gain a +4 competence bonus on Perception checks for the duration of your bond senses ability."
  },
  {
    "name": "Shaping Focus",
    "type": "General",
    "description": "Your powers of shapeshifting outstrip your dabbling in the druidic faith.",
    "prerequisites": ["Wild shape class feature","Knowledge (nature) 5 ranks"],
    "prerequisitesFeats": ["Wild shape class feature","Knowledge (nature) 5 ranks"],
    "benefit": "If you are a multiclassed druid, your wild shape ability is calculated as though your druid level were four higher, to a maximum level equal to your character level."
  },
  {
    "name": "Sin Seer",
    "type": "General",
    "description": "Unlike others who have taken the oath against undeath (see page 60), your preoccupation with the undead does not cloud your view of good and evil.",
    "prerequisites": ["Detect undead paladin class feature"],
    "prerequisitesFeats": ["Detect undead paladin class feature"],
    "benefit": "You gain the detect evil class feature. You may use it or the detect undead class feature, but not at the same time."
  },
  {
    "name": "Skeleton Summoner",
    "type": "General",
    "description": "The walking dead respond to your call.",
    "prerequisites": ["Spell Focus (necromancy)","ability to cast summon monster"],
    "prerequisitesFeats": ["Spell Focus (necromancy)","ability to cast summon monster"],
    "benefit": "Add \"human skeleton\" to the list of creatures you can summon with summon monster I and \"human skeletal champion\" to the list of creatures you can summon with summon monster III. Once per day, when you cast summon monster, you may summon a skeletal version of one of the creatures on that spell's summoning list (apply the skeleton template to that creature to create this monster)."
  },
  {
    "name": "Sorcerous Bloodstrike",
    "type": "General",
    "description": "You can regain power when you kill a creature.",
    "prerequisites": ["Cha 13","sorcerer bloodline class feature"],
    "prerequisitesFeats": ["Cha 13","sorcerer bloodline class feature"],
    "benefit": "Once per day, as an immediate action upon reducing a creature to 0 or fewer hit points with one of your sorcerer spells, you can regain one usage of a sorcerer bloodline power that has a limited number of uses per day. The slain creature must have at least half as many Hit Dice as your sorcerer level. You cannot use this feat to gain another usage of a bloodline power that you have not yet used today."
  },
  {
    "name": "Spell Bluff",
    "type": "General",
    "description": "You know the principles of arcane dueling, and when fighting other spellcasters, you have learned to hide the true nature of your spells until the last possible moment.",
    "prerequisites": ["Bluff 5 ranks","Spellcraft 5 ranks"],
    "prerequisitesFeats": ["Bluff 5 ranks","Spellcraft 5 ranks"],
    "benefit": "If another spellcaster tries to counterspell your casting, she adds +4 to her Spellcraft DC when trying to determine your spell. Because you have studied how to mask the recognizable elements of your spellcasting, you gain a +2 bonus on your Spellcraft checks to identify and counter an opponent's spell if it is a spell you know or have in your spellbook."
  },
  {
    "name": "Spell Hex",
    "type": "General",
    "description": "You can transform a 1st-level spell into a hex.",
    "prerequisites": ["Major hex class feature"],
    "prerequisitesFeats": ["Major hex class feature"],
    "benefit": "Select one 1st-level spell in the class that grants you the major hex class feature. You can learn that spell as a hex, and can use that hex three times per day. This is a spell-like ability. You use your class level in the major-hex-granting class as your caster level for the spell hex. The spell hex uses your hex DC instead of its original spell DC. If the spell is a touch spell and you miss the creature, you cannot target the creature with that spell hex again for 24 hours. If the spell allows a saving throw to negate or take a partial effect from the spell, and the target succeeds at that saving throw, it cannot be affected by the spell hex for 24 hours, even if it is in the area of the spell hex."
  },
  {
    "name": "Spell Specialization",
    "type": "General",
    "description": "Select one spell. You cast that spell with greater than normal power.",
    "prerequisites": ["Int 13","Spell Focus"],
    "prerequisitesFeats": ["Int 13","Spell Focus"],
    "benefit": "Select one spell of a school for which you have taken the Spell Focus feat. Treat your caster level as being two higher for all level-variable effects of the spell. Every time you gain an even level in the spellcasting class you chose your spell from, you can choose a new spell to replace the spell selected with this feat, and that spell becomes your specialized spell."
  },
  {
    "name": "Spellsong",
    "type": "General",
    "description": "You can blend the power of your performance and spellcasting.",
    "prerequisites": ["Cha 13","bardic performance class ability","able to cast 1st-level spells"],
    "prerequisitesFeats": ["Cha 13","bardic performance class ability","able to cast 1st-level spells"],
    "benefit": "You can combine your bardic performance and your spellcasting in two ways. First, you can conceal the activity of casting a bard spell by masking it in a performance. As a swift action, you may combine your casting time of a spell with a Perform check. Observers must make a Perception or Sense Motive check opposed by your Perform check to realize you are also casting a spell. This uses 1 round of your bardic performance ability, regardless of the spell's casting time. Second, as a move action, you can use 1 round of bardic performance to maintain a bard spell with a duration of concentration. You can cast another spell in the same round you are using bardic magic to maintain concentration; if you do this, your concentration on the maintained spell ends when you end the bardic performance the spell is part of."
  },
  {
    "name": "Split Hex",
    "type": "General",
    "description": "You can split the effect of one of your targeted hexes, affecting another creature you can see.",
    "prerequisites": ["Witch level 10th"],
    "prerequisitesFeats": ["Witch level 10th"],
    "benefit": "When you use one of your hexes (not a major hex or a grand hex) that targets a single creature, you can choose another creature within 30 feet of the first target to also be targeted by the hex."
  },
  {
    "name": "Split Major Hex",
    "type": "General",
    "description": "You can split the effect of one of your targeted hexes, affecting another creature you can see.",
    "prerequisites": ["Split hex","caster level 18th"],
    "prerequisitesFeats": ["Split hex","caster level 18th"],
    "benefit": "When you use one of your major hexes (not a grand hex) that targets a creature, you can choose another creature within 30 feet of the first target to also be targeted by the major hex."
  },
  {
    "name": "Spontaneous Metafocus",
    "type": "General",
    "description": "You can focus to combine one of your known spells and metamagic feats.",
    "prerequisites": ["Cha 13","one metamagic feat","able to spontaneously cast spells"],
    "prerequisitesFeats": ["Cha 13","one metamagic feat","able to spontaneously cast spells"],
    "benefit": "Pick a single spell that you are able to cast spontaneously. When you apply metamagic feats to that spell, you can cast the spell using the normal casting time instead of at the slower casting time."
  },
  {
    "name": "Starlight Summons",
    "type": "General",
    "description": "Your summoned minions slink along under the shadows of the stars.",
    "prerequisites": ["Spell Focus (conjuration)","able to cast summon nature's ally"],
    "prerequisitesFeats": ["Spell Focus (conjuration)","able to cast summon nature's ally"],
    "benefit": "Creatures you summon gain the Blind-Fight feat, a +5 bonus to Perception and Stealth checks in dim light or darkness, and their natural weapons are treated as cold iron for overcoming damage reduction."
  },
  {
    "name": "Sunlight Summons",
    "type": "General",
    "description": "Your summoned minions shine with the power of the sun.",
    "prerequisites": ["Spell Focus (conjuration)","able to cast summon nature's ally"],
    "prerequisitesFeats": ["Spell Focus (conjuration)","able to cast summon nature's ally"],
    "benefit": "Creatures that you summon shed light as a light spell. They are immune to blinding or dazzling effects, and their natural weapons are treated as magical for overcoming damage reduction."
  },
  {
    "name": "Superior Summoning",
    "type": "General",
    "description": "You can summon more creatures.",
    "prerequisites": ["Augment Summoning","caster level 3rd"],
    "prerequisitesFeats": ["Augment Summoning","caster level 3rd"],
    "benefit": "Each time you cast a summoning spell that conjures more than one creature, add one to the total number of creatures summoned."
  },
  {
    "name": "Thanatopic Spell",
    "type": "Metamagic",
    "description": "Your spells can pierce wards against negative energy and even affect undead targets.",
    "prerequisites": ["Knowledge (religion) 6 ranks","Spell Focus (necromancy)"],
    "prerequisitesFeats": ["Knowledge (religion) 6 ranks","Spell Focus (necromancy)"],
    "benefit": "A thanatopic spell pierces defenses and immunities that protect against death effects, negative levels, and energy drain, affecting the target as if the protective barrier did not exist. For example, you could cast a thanatopic vampiric touch or enervation spell on a target under the effects of death ward, and the target would suffer the normal effect of the spell. Saving throws and SR (if any) still apply. Undead are susceptible to spells augmented by this feat, as it retunes the negative energy to be harmful to them. A thanatopic spell that would kill a living creature (such as by giving it negative levels equal to its Hit Dice) destroys an undead (though undead such as ghosts, liches, and vampires may reform as normal). Undead affected by thanatopic spells that give negative levels automatically make their saving throws to remove negative levels after 24 hours. A thanatopic spell uses up a spell slot two levels higher than the spell's actual level."
  },
  {
    "name": "Theurgy",
    "type": "General",
    "description": "You can blend the power of arcane and divine magic.",
    "prerequisites": ["Wis 13","Int or Cha 13","able to cast 1st-level arcane spells","able to cast 1st-level divine spells"],
    "prerequisitesFeats": ["Wis 13","Int or Cha 13","able to cast 1st-level arcane spells","able to cast 1st-level divine spells"],
    "benefit": "You can augment the power of your divine spells with arcane energy and augment your arcane spells with divine energy. When casting a divine spell, you may sacrifice an arcane spell slot or arcane prepared spell of that spell's level or higher as a swift action. The caster level for that divine spell increases by +1. When casting an arcane spell, you may sacrifice a divine spell slot or prepared divine spell of the same or higher level as a swift action. Half the damage dealt by the arcane spell becomes holy (if you channel positive energy) or unholy (if you channel negative energy)."
  },
  {
    "name": "Thoughtful Discernment",
    "type": "General",
    "description": "Thinking back, you discover a lie in what you once thought to be words of truth.",
    "prerequisites": ["Discern lies class feature"],
    "prerequisitesFeats": ["Discern lies class feature"],
    "benefit": "Once per day as a free action, you can think back about a single statement you heard in the last day and determine if it was a lie. This acts like the discern lies spell, but instead of affecting a creature, it affects a single statement a creature has made. For example, if the king told you, \"My daughter is in the monster's dungeon\" before you left to find her, as long as the king said that to you within the past day, you can use this feat to determine whether or not the king deliberately and knowingly lied to you when he made that statement."
  },
  {
    "name": "Threnodic Spell",
    "type": "Metamagic",
    "description": "You can convert mind-affecting magic to necromantic power capable of controlling undead.",
    "prerequisites": ["Knowledge (religion) 6 ranks","Spell Focus (necromancy)"],
    "prerequisitesFeats": ["Knowledge (religion) 6 ranks","Spell Focus (necromancy)"],
    "benefit": "This feat only works on mind-affecting spells. A threnodic spell affects undead creatures (even mindless undead) as if they weren't immune to mind-affecting effects, but has no effect on living creatures. A threnodic spell uses up a spell slot two level higher than the spell's actual level."
  },
  {
    "name": "Toppling Spell",
    "type": "Metamagic",
    "description": "Your spells with the force descriptor knock the affected creatures prone.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "The impact of your force spell is strong enough to knock the target prone. If the target takes damage, fails its saving throw, or is moved by your force spell, make a trip check against the target, using your caster level plus your casting ability score bonus (Wisdom for clerics, Intelligence for wizards, and so on). This does not provoke an attack of opportunity. If the check fails, the target cannot attempt to trip you or the force effect in response. A toppling spell only affects spells with the force descriptor. A toppling spell uses up a spell slot one level higher than the spell's actual level."
  },
  {
    "name": "Tripping Staff",
    "type": "Combat",
    "description": "You can make a trip attack with your quarterstaff.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Trip","Weapon Focus (quarterstaff)","base attack bonus +6"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Trip","Weapon Focus (quarterstaff)","base attack bonus +6"],
    "benefit": "You treat quarterstaves as if they had the trip special feature."
  },
  {
    "name": "Tripping Twirl",
    "type": "Combat",
    "description": "You can make a trip attack with a quarterstaff on all adjacent enemies.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Trip","Tripping Staff","Weapon Focus (quarterstaff)","Weapon Specialization (quarterstaff)","base attack bonus +12"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Trip","Tripping Staff","Weapon Focus (quarterstaff)","Weapon Specialization (quarterstaff)","base attack bonus +12"],
    "benefit": "As a full-round action, while wielding a quarterstaff two-handed, you can attempt a trip combat maneuver against each enemy adjacent to you."
  },
  {
    "name": "Ultimate Mercy",
    "type": "General",
    "description": "By using lay on hands, you can bring the dead back to life.",
    "prerequisites": ["Cha 19","Greater Mercy","lay on hands","mercy class feature"],
    "prerequisitesFeats": ["Cha 19","Greater Mercy","lay on hands","mercy class feature"],
    "benefit": "You can expend 10 uses of lay on hands to bring a single dead creature you touch back to life as a raise dead spell with a caster level equal to your paladin level. You must provide the material component for raise dead or choose to accept 1 temporary negative level; this level automatically goes away after 24 hours, never becomes a permanent negative level, and cannot be overcome in any way except by waiting for the duration to expire."
  },
  {
    "name": "Ultimate Resolve",
    "type": "General",
    "description": "Your aura of resolve does not fall with you.",
    "prerequisites": ["Aura of resolve class feature"],
    "prerequisitesFeats": ["Aura of resolve class feature"],
    "benefit": "Your aura of resolve is a 20-foot emanation, and does not end if you fall unconscious."
  },
  {
    "name": "Uncanny Alertness",
    "type": "General",
    "description": "Your research into arcana and the nature of reality has given you heightened senses.",
    "prerequisites": ["Alertness"],
    "prerequisitesFeats": ["Alertness"],
    "benefit": "This feat gives you an additional +1 bonus on Perception and Sense Motive checks, and you gain a +2 bonus on saving throws against sleep and charm effects."
  },
  {
    "name": "Uncanny Concentration",
    "type": "General",
    "description": "You have learned to enter a deeper state when casting spells, allowing you to shrug off distractions, damage, weather effects, and even the effects of other spells.",
    "prerequisites": ["Combat Casting"],
    "prerequisitesFeats": ["Combat Casting"],
    "benefit": "You do not need to make concentration checks when affected by vigorous or violent motion or by violent weather. You gain a +2 bonus on all other concentration checks."
  },
  {
    "name": "Undead Master",
    "type": "General",
    "description": "You can marshal vast armies of the undead to serve you.",
    "prerequisites": ["Spell focus (necromancy)","the ability to cast animate dead or command undead"],
    "prerequisitesFeats": ["Spell focus (necromancy)","the ability to cast animate dead or command undead"],
    "benefit": "When you cast animate dead or use the Command Undead feat, you are considered to be four levels higher when determining the number of Hit Dice you animate. When you cast command undead, your duration is doubled."
  },
  {
    "name": "Unsanctioned Detection",
    "type": "General",
    "description": "You can focus your ability to detect evil for more practical or mundane purposes",
    "prerequisites": ["Detect evil class feature"],
    "prerequisitesFeats": ["Detect evil class feature"],
    "benefit": "As a swift action, you can focus the clarity granted by your detect evil ability to heighten your awareness of other things. This gives you a +10 sacred bonus on Perception and Sense Motive checks for one round. This expends your use of the detect evil class ability for the next 24 hours."
  },
  {
    "name": "Unsanctioned Knowledge",
    "type": "General",
    "description": "You have searched though forbidden texts and are privy to powerful but proscribed magic.",
    "prerequisites": ["Int 13","ability to cast 1st-level paladin spells"],
    "prerequisitesFeats": ["Int 13","ability to cast 1st-level paladin spells"],
    "benefit": "Pick one 1st-level spell, one 2nd-level spell, one 3rd-level spell, and one 4th-level spell from the bard, cleric, inquisitor, or oracle spell lists. Add these spells to your paladin spell list as paladin spells of the appropriate level. Once chosen, these spells cannot be changed."
  },
  {
    "name": "Versatile Channeler",
    "type": "General",
    "description": "You can choose to channel positive and negative energy.",
    "prerequisites": ["Channel energy class feature","necromancer or neutrally aligned cleric (see below)"],
    "prerequisitesFeats": ["Channel energy class feature","necromancer or neutrally aligned cleric (see below)"],
    "benefit": "You may make a choice whenever you use your channel energy class feature. If you normally channel positive energy, you may choose to channel negative energy as if your effective cleric level were 2 levels lower than normal. If you normally channel negative energy, you may choose to channel positive energy as if your effective cleric level were 2 levels lower than normal. Having this feat means you qualify for feats and abilities that have \"channel positive energy\" or \"channel negative energy\" as a prerequisite (for example, you qualify for the Command Undead feat and the Turn Undead feat)."
  },
  {
    "name": "Vigilant Eidolon",
    "type": "General",
    "description": "Your eidolon is highly observant, and its link with you increases your own watchfulness.",
    "prerequisites": ["Eidolon class feature"],
    "prerequisitesFeats": ["Eidolon class feature"],
    "benefit": "While your eidolon is within your reach, you gain a +4 bonus on Perception checks. If you have 10 or more ranks in Perception, this bonus increases to +8. This does not apply if your eidolon is helpless or unconscious."
  },
  {
    "name": "Voice of the Sibyl",
    "type": "General",
    "description": "Your voice is strangely compelling.",
    "prerequisites": ["Cha 15"],
    "prerequisitesFeats": ["Cha 15"],
    "benefit": "You get a +1 bonus on all Bluff, Diplomacy, and Perform (oratory) skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +3 for that skill. You do not get these bonuses if you do not use your voice when using the skill (such as using Bluff to feint in combat)."
  },
  {
    "name": "Warrior Priest",
    "type": "General",
    "description": "Your religion is both a shield and a weapon in battle.",
    "prerequisites": ["Ability to cast divine spells","domain or mystery class feature"],
    "prerequisitesFeats": ["Ability to cast divine spells","domain or mystery class feature"],
    "benefit": "You gain a +1 bonus on initiative checks and a +2 bonus on concentration checks made to cast a spell or use a spell-like ability when casting defensively or while grappled."
  },
  {
    "name": "Wild Speech",
    "type": "General",
    "description": "You speak with the tongue of men and beasts.",
    "prerequisites": ["Druid level 6th","wild shape class feature"],
    "prerequisitesFeats": ["Druid level 6th","wild shape class feature"],
    "benefit": "When using wild shape to take the form in which you cannot speak (such as an animal), you are able to speak normally in any language you know. This allows you to cast spells with verbal components, speak command words, and activate spell completion and spell trigger items. However, it does not give you the ability to cast spells requiring somatic components unless you also have the Natural Spell feat, or cast spells with material components merged into your form. When using wild shape to take the form of an animal, you may use speak with animals to communicate with animals of your assumed form. This is a spell-like ability with a caster level equal to your druid level, and you may use it for a number of minutes per day equal to your druid level. These minutes do not have to be consecutive, but must be used in one-minute increments."
  },
  {
    "name": "Witch Knife",
    "type": "General",
    "description": "You empower your witch spells by incorporating the use of a special ceremonial knife during your castings.",
    "prerequisites": ["Witch class"],
    "prerequisitesFeats": ["Witch class"],
    "benefit": "Each day, when you prepare your spells, you can select a masterwork or magical dagger, transforming it into a witch knife, which serves as an additional focus component for witch patron spells. Add +1 to the DC of all your patron spells."
  },
  {
    "name": "Word of Healing",
    "type": "General",
    "description": "Using the same divine energy as your lay on hands ability, you can heal others at a distance.",
    "prerequisites": ["Lay on hands class feature"],
    "prerequisitesFeats": ["Lay on hands class feature"],
    "benefit": "You may use your lay on hands to heal another creature at a range of 30 feet as a standard action that does not provoke an attack of opportunity. You must be able to speak and have a free hand to use this ability. The target heals half the amount they would have healed if you had touched them, but gains the benef its of your mercies as normal."
  },
  {
    "name": "Brewmaster",
    "type": "General",
    "description": "You can concoct potent brews.",
    "prerequisites": ["Craft (alchemy) 1 rank","Profession (brewer) 1 rank","dwarf"],
    "prerequisitesFeats": ["Craft (alchemy) 1 rank","Profession (brewer) 1 rank","dwarf"],
    "benefit": "You gain a +2 bonus on Craft (alchemy) and Profession (brewer) checks, and you add +1 to the DC of any ingested poison you create."
  },
  {
    "name": "Cleave Through",
    "type": "Combat",
    "description": "You are ferocious at hewing smaller opponents.",
    "prerequisites": ["Str 13","Cleave","Power Attack","base attack bonus +11","dwarf"],
    "prerequisitesFeats": ["Str 13","Cleave","Power Attack","base attack bonus +11","dwarf"],
    "benefit": "When using Cleave or Great Cleave, if your initial attack hits, you may take a single 5-foot step as a free action before making your additional attacks. If doing so places a creature within your threatened area, that creature becomes a legal target for your additional Cleave attack(s) as long as it meets all the other prerequisites."
  },
  {
    "name": "Cloven Helm",
    "type": "Combat",
    "description": "Your helm turns aside lethal blows.",
    "prerequisites": ["Dented Helm","Hard-Headed","base attack bonus +11","dwarf"],
    "prerequisitesFeats": ["Dented Helm","Hard-Headed","base attack bonus +11","dwarf"],
    "benefit": "When wearing a helmet, you add +1 to your AC against critical hit confirmation rolls; this benefit stacks with Dented Helm. When you use Dented Helm to def lect a critical hit, you may apply all damage from the critical hit to your helmet before applying any damage to yourself. If you take no damage, any additional effects, such as critical feats or poison, are negated."
  },
  {
    "name": "Dented Helm",
    "type": "Combat",
    "description": "Your helm protects you from hard hits.",
    "prerequisites": ["Hard-Headed","base attack bonus +6","dwarf"],
    "prerequisitesFeats": ["Hard-Headed","base attack bonus +6","dwarf"],
    "benefit": "When wearing a helmet, you add +1 to your AC against critical hit confirmation rolls. When a critical hit is confirmed against you, as an immediate action, you can apply half of the damage from the attack to your helmet rather than yourself, applying hardness as normal. If the damage destroys your helmet, any leftover damage is applied to you. After using this feat, you are staggered until the end of your next turn. You may not use this feat if your helmet has the broken condition or the attack ignores armor bonuses to AC."
  },
  {
    "name": "Giant Killer",
    "type": "Combat",
    "description": "Your cleaving strokes menace giants and larger foes.",
    "prerequisites": ["Str 13","Cleave","Goblin Cleaver","Orc Hewer","Power Attack","Strike Back","base attack bonus +11","dwarf"],
    "prerequisitesFeats": ["Str 13","Cleave","Goblin Cleaver","Orc Hewer","Power Attack","Strike Back","base attack bonus +11","dwarf"],
    "benefit": "This functions as Goblin Cleaver, but your additional attacks can be made against creatures one size category larger than you or smaller. In addition, any such attacks made against humanoids (giant) gain a +2 circumstance bonus on attack rolls."
  },
  {
    "name": "Goblin Cleaver",
    "type": "Combat",
    "description": "You are ferocious at hewing smaller opponents.",
    "prerequisites": ["Str 13","Cleave","Power Attack","dwarf"],
    "prerequisitesFeats": ["Str 13","Cleave","Power Attack","dwarf"],
    "benefit": "When using Cleave or Great Cleave, if your initial attack hits, you may take your additional attacks against any creature smaller than you that you threaten; your targets need not be adjacent to one another. Additional attacks you make against humanoids (goblinoid) gain a +2 circumstance bonus on attack rolls."
  },
  {
    "name": "Hard-Headed",
    "type": "Combat",
    "description": "Your thick skull is almost a weapon unto itself.",
    "prerequisites": ["Base attack bonus +1","dwarf"],
    "prerequisitesFeats": ["Base attack bonus +1","dwarf"],
    "benefit": "You gain a +1 bonus on attack rolls and combat maneuver checks made using a helmet. You receive a +2 bonus on saves against spells and special abilities that cause you to become staggered or stunned."
  },
  {
    "name": "Ledge Walker",
    "type": "General",
    "description": "You negotiate tiny ledges like a mountain goat.",
    "prerequisites": ["Dex 13","dwarf","mountaineer or stability racial trait"],
    "prerequisitesFeats": ["Dex 13","dwarf","mountaineer or stability racial trait"],
    "benefit": "You can move at full speed while using Acrobatics to balance on narrow surfaces, and you gain a +4 bonus on Climb checks to catch yourself or another creature while falling. You also gain a +4 bonus on saving throws against effects that would cause you to fall prone (such as earthquakes). This bonus does not apply to your CMD against bull rush or trip attacks."
  },
  {
    "name": "Orc Hewer",
    "type": "Combat",
    "description": "You are ferocious at hewing your enemies, especially orcs.",
    "prerequisites": ["Str 13","Cleave","Goblin Cleaver","Power Attack","dwarf"],
    "prerequisitesFeats": ["Str 13","Cleave","Goblin Cleaver","Power Attack","dwarf"],
    "benefit": "This feat functions as Goblin Cleaver, but your additional attacks can be made against creatures your size or smaller. In addition, any such attacks that you make against humanoids (orc) gain a +2 circumstance bonus on attack rolls."
  },
  {
    "name": "Shatterspell",
    "type": "Combat",
    "description": "Your mighty blows shatter your enemy's magic.",
    "prerequisites": ["Disruptive","Spellbreaker","dwarf","10th-level fighter"],
    "prerequisitesFeats": ["Disruptive","Spellbreaker","dwarf","10th-level fighter"],
    "benefit": "As a standard action, you can attempt to sunder an ongoing spell effect as if you had the spell sunder rage power (Ultimate Combat 28). You may use this feat once per day, plus one additional time per day for every 5 points by which your base attack bonus exceeds +10."
  },
  {
    "name": "Toxic Recovery",
    "type": "General",
    "description": "Your system recuperates from the effects of poisons with astonishing speed.",
    "prerequisites": ["Dwarf","hardy racial trait"],
    "prerequisitesFeats": ["Dwarf","hardy racial trait"],
    "benefit": "Whenever you succeed at a saving throw against poison, you heal 1 point of ability damage of the type dealt by the poison. Whenever you heal ability damage naturally or magically, you heal 1 additional point of ability damage. This feat has no effect on penalties to ability scores or ability drain."
  },
  {
    "name": "Attuned to the Wild",
    "type": "General",
    "description": "You share a strong mystic connection with one type of wilderness terrain.",
    "prerequisites": ["Elf"],
    "prerequisitesFeats": ["Elf"],
    "benefit": "Select one type of terrain from the ranger class's favored terrain class feature (except urban). While you are in your selected terrain type, your natural healing rate (the amount of hit points and ability damage you heal from a full night's rest) doubles."
  },
  {
    "name": "Elven Battle Training",
    "type": "Combat",
    "description": "You have been specially trained to wield a variety of traditional elven weapons.",
    "prerequisites": ["Base attack bonus +1","elf"],
    "prerequisitesFeats": ["Base attack bonus +1","elf"],
    "benefit": "You have received special training with traditional elven weapons (longbows, composite longbows, longswords, rapiers, shortbows, composite shortbows, and any weapon with the word \"elven\" in its name). You receive a +2 bonus to your CMD against disarm and sunder maneuvers directed at one of these weapons you are wielding. In addition, if you are wielding one of these melee weapons, you may make an additional attack of opportunity each round (this bonus stacks with Combat Reflexes)."
  },
  {
    "name": "Guardian of the Wild",
    "type": "General",
    "description": "Your mystic connection with the wilderness enhances your ability to react to threats.",
    "prerequisites": ["Attuned to the Wild","elf"],
    "prerequisitesFeats": ["Attuned to the Wild","elf"],
    "benefit": "When you are in a terrain type you have selected the Attuned to the Wild feat for, you gain a +2 dodge bonus to Armor Class. If you are in an area that qualifies as more than one kind of terrain, these bonuses do not stack; you receive the bonus for only one of the terrain types."
  },
  {
    "name": "Mage of the Wild",
    "type": "General",
    "description": "Your mystic connection with the wilderness enhances your spellcasting.",
    "prerequisites": ["Attuned to the Wild","elf"],
    "prerequisitesFeats": ["Attuned to the Wild","elf"],
    "benefit": "When you are in a terrain type you have selected the Attuned to the Wild feat for, you gain a +2 bonus on caster level checks, concentration checks, and, Knowledge (arcana) and Spellcraft checks. If you are in an area that qualifies as more than one kind of terrain, these bonuses do not stack; you receive the bonus for only one of the terrain types."
  },
  {
    "name": "Spirit of the Wild",
    "type": "General",
    "description": "Your mystic connection with one type of wilderness has grown even stronger.",
    "prerequisites": ["Attuned to the Wild","Guardian of the Wild","elf"],
    "prerequisitesFeats": ["Attuned to the Wild","Guardian of the Wild","elf"],
    "benefit": "When you are in a terrain type you have selected the Attuned to the Wild feat for, you gain a +4 bonus on Perception checks made to act in the surprise round of combat. If you act in the surprise round, you gain blindsense out to a range of 30 feet during the surprise round. If you are in an area that qualif ies as more than one kind of terrain, these bonuses do not stack; you receive the bonus for only one terrain type."
  },
  {
    "name": "Casual Illusionist",
    "type": "General",
    "description": "You can use your innate magic to create minor illusions that augment your efforts at trickery and deceit.",
    "prerequisites": ["Gnome","gnome magic racial trait"],
    "prerequisitesFeats": ["Gnome","gnome magic racial trait"],
    "benefit": "As long as you have at least one spell-like ability unused from your gnome magic racial trait, you gain a +2 racial bonus on all Bluff, Disguise, and Sleight of Hand checks you make. At 10th level, these bonuses increase to +4."
  },
  {
    "name": "Expanded Resistance",
    "type": "General",
    "description": "You have expanded your natural resistance to magic to encompass different kinds of magic.",
    "prerequisites": ["Gnome","illusion resistance racial trait"],
    "prerequisitesFeats": ["Gnome","illusion resistance racial trait"],
    "benefit": "Select one school of magic other than illusion. You gain a +2 racial bonus on saving throws against spells or effects from the selected school."
  },
  {
    "name": "Gnome Weapon Focus",
    "type": "Combat",
    "description": "Your extensive training with traditional gnome weapons gives you an advantage.",
    "prerequisites": ["Base attack bonus +1","gnome","proficient with all martial weapons"],
    "prerequisitesFeats": ["Base attack bonus +1","gnome","proficient with all martial weapons"],
    "benefit": "You gain a +1 bonus on attack rolls with gnome weapons (weapons with \"gnome\" in the title)."
  },
  {
    "name": "Great Hatred",
    "type": "Combat",
    "description": "Your rage burns with vast intensity.",
    "prerequisites": ["Gnome","hatred racial trait"],
    "prerequisitesFeats": ["Gnome","hatred racial trait"],
    "benefit": "You gain an additional +1 bonus on melee and thrown weapon attacks against targets of your hatred racial trait."
  },
  {
    "name": "Vast Hatred",
    "type": "Combat",
    "description": "Your rage stretches beyond normal bounds.",
    "prerequisites": ["Gnome","hatred racial trait"],
    "prerequisitesFeats": ["Gnome","hatred racial trait"],
    "benefit": "Select two creature types (and subtypes where appropriate) from the list of potential favored enemies from the ranger class ability. Your +1 attack bonus from the hatred racial trait applies to creatures of the selected types (and subtypes)."
  },
  {
    "name": "Discerning Eye",
    "type": "General",
    "description": "You are not easily fooled by illusions and forgeries.",
    "prerequisites": ["Elf or half-elf","keen senses racial trait"],
    "prerequisitesFeats": ["Elf or half-elf","keen senses racial trait"],
    "benefit": "You receive a +2 racial bonus on saving throws against illusion spells and effects and a +2 bonus on Linguistic checks to detect forgeries. You can use the Linguistic skill to detect forgeries untrained."
  },
  {
    "name": "Elven Spirit",
    "type": "General",
    "description": "Although you are of mixed heritage, you are closer to your elven relatives and the magic in their blood flows freely in your veins.",
    "prerequisites": ["Half-elf"],
    "prerequisitesFeats": ["Half-elf"],
    "benefit": "You possess the elven magic racial trait of the elves, granting you a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, you receive a +2 racial bonus on Spellcraft checks made to identify the properties of magic items. Alternatively, you can instead gain any one racial trait that elves can exchange for the elven magic racial trait."
  },
  {
    "name": "Exile's Path",
    "type": "General",
    "description": "A lifetime spent shunned by others and eschewing your heritage makes you resistant to efforts to pry inside of your mind.",
    "prerequisites": ["Half-elf"],
    "prerequisitesFeats": ["Half-elf"],
    "benefit": "Once per day, when you fail a Will save against an enchantment spell or effect, you may reroll that saving throw, but must take the reroll result even if it's worse."
  },
  {
    "name": "Half-Drow Paragon",
    "type": "General",
    "description": "Your drow blood is particularly strong.",
    "prerequisites": ["Drow-blooded and drow magic racial traits","half-elf"],
    "prerequisitesFeats": ["Drow-blooded and drow magic racial traits","half-elf"],
    "benefit": "You count as a drow for any effects that relate to race. Furthermore, the spell-like abilities granted to you by your drow magic racial trait count as drow spell-like abilities for the purposes of any feat prerequisites."
  },
  {
    "name": "Human Spirit",
    "type": "General",
    "description": "Your blood burns with the passion and unyielding quest for self-improvement displayed so prominently by your human relatives.",
    "prerequisites": ["Half-elf"],
    "prerequisitesFeats": ["Half-elf"],
    "benefit": "You receive 1 bonus skill rank. Whenever you gain another Hit Die, you gain an additional skill rank. You cannot gain more than four skill ranks in this way."
  },
  {
    "name": "Multitalented Mastery",
    "type": "General",
    "description": "You are adept at numerous disciplines.",
    "prerequisites": ["Character level 5th","half-elf","multitalented racial trait"],
    "prerequisitesFeats": ["Character level 5th","half-elf","multitalented racial trait"],
    "benefit": "All of your classes are considered favored classes. You gain either +1 hit point or +1 skill point whenever you take a level in any class. Apply these bonuses retroactively for all class levels that have not yet gained one of these bonuses."
  },
  {
    "name": "Neither Elf nor Human",
    "type": "General",
    "description": "You have removed yourself from your heritage so thoroughly that even magic does not recognize you.",
    "prerequisites": ["Exile's Path","Seen and Unseen","character level 11th","half-elf"],
    "prerequisitesFeats": ["Exile's Path","Seen and Unseen","character level 11th","half-elf"],
    "benefit": "You are not considered elven or human for the purpose of harmful spells or effects based on your type, like a bane weapon or a ranger's favored enemy class feature."
  },
  {
    "name": "Seen and Unseen",
    "type": "General",
    "description": "Your anonymity makes you difficult to find through magical or mundane means, and you have learned how to combat both of your progenitor races.",
    "prerequisites": ["Exile's Path","character level 5th","half-elf"],
    "prerequisitesFeats": ["Exile's Path","character level 5th","half-elf"],
    "benefit": "You gain a +2 bonus on all saving throws against scrying or divination effects. Additionally, you gain a +2 bonus on all Stealth checks, and elves, half-elves, and humans take a -4 penalty on all efforts to track you through the Survival skill."
  },
  {
    "name": "Shared Manipulation",
    "type": "General",
    "description": "You can subtly bolster allies' ability to misdirect and infuriate their enemies.",
    "prerequisites": ["Cha 13","half-elf"],
    "prerequisitesFeats": ["Cha 13","half-elf"],
    "benefit": "As a move action, you can grant all friendly creatures within 30 feet who can see or hear you a +2 bonus on Bluff or Intimidate checks (choose which skill to affect each time you use this ability) for a number of rounds equal to your Charisma modifier (minimum 1 round)."
  },
  {
    "name": "Beast Rider",
    "type": "General",
    "description": "You gain the service of a monstrous companion or mount.",
    "prerequisites": ["Animal companion or mount class feature","character level 7th","half-orc or orc"],
    "prerequisitesFeats": ["Animal companion or mount class feature","character level 7th","half-orc or orc"],
    "benefit": "Select one of the following creature types: elephant, pteranodon, rhinoceros, stegosaurus, or triceratops. Add this creature type to your list of possible animal companions or mounts. When summoning a creature of the selected type to serve as a mount or companion, treat your effective druid level as if it were two levels higher (to a maximum of your character level). If the creature is large enough for you to ride, it gains the combat training general purpose (see Handle Animal) at no cost."
  },
  {
    "name": "Blood Vengeance",
    "type": "General",
    "description": "Seeing an ally fall in combat fills you with a raging and murderous fury.",
    "prerequisites": ["Half-orc or orc","nonlawful"],
    "prerequisitesFeats": ["Half-orc or orc","nonlawful"],
    "benefit": "Whenever one of your allies is reduced to negative hit points or killed, you may enter a state similar to but less powerful than a barbarian's rage as a free action on your next turn. If you have the rage class feature and are already raging, your morale bonuses to Strength and Constitution increase by +2 for the duration of your rage. If you do not have the rage class feature, or you have no more rage rounds left, this weaker rage gives you all the benefits and penalties of a barbarian's rage, except your morale bonus to Strength and Constitution is only +2. In either case, this state lasts for 4 rounds. As with a barbarian's rage, when this weaker rage ends, you are fatigued; if another ally falls before this duration ends, the weaker rage lasts for an additional 4 rounds. This feat does not allow you to enter a rage if you are fatigued. You may only use this feat if the fallen ally had at least as many Hit Dice as you (excluding conjured or summoned allies)."
  },
  {
    "name": "Destroyer's Blessing",
    "type": "Combat",
    "description": "Breaking things adds to your power.",
    "prerequisites": ["Half-orc or orc","rage class feature"],
    "prerequisitesFeats": ["Half-orc or orc","rage class feature"],
    "benefit": "When you are raging and you succeed at a sunder combat maneuver, you regain 1 round of rage. If the sunder attempt causes the object to gain the broken condition, you heal 1 hit point. You can only gain these benefits once per round."
  },
  {
    "name": "Ferocious Resolve",
    "type": "General",
    "description": "Your orc heritage allows you to fight on.",
    "prerequisites": ["Con 13","half-orc","orc ferocity racial trait"],
    "prerequisitesFeats": ["Con 13","half-orc","orc ferocity racial trait"],
    "benefit": "You gain the ferocity universal monster ability, allowing you to continue fighting at negative hit points. When using this ability, you gain a +2 bonus on Intimidate checks."
  },
  {
    "name": "Ferocious Summons",
    "type": "General",
    "description": "Your summoned creatures gain your ferocity.",
    "prerequisites": ["Augment Summoning","Spell Focus (conjuration)","half-orc or orc"],
    "prerequisitesFeats": ["Augment Summoning","Spell Focus (conjuration)","half-orc or orc"],
    "benefit": "Creatures you summon gain the ferocity universal monster ability."
  },
  {
    "name": "Ferocious Tenacity",
    "type": "Combat",
    "description": "You spit in the face of death.",
    "prerequisites": ["Ferocity racial trait","half-orc or orc","rage class feature"],
    "prerequisitesFeats": ["Ferocity racial trait","half-orc or orc","rage class feature"],
    "benefit": "Once per day when raging, if you are hit by an attack that would deal enough hit points of damage to kill you (negative hit points equal to your Constitution score), as an immediate action you may expend 1 or more rounds of rage to negate some of this damage and keep yourself alive. Each round of rage you spend reduces the attack's damage by 1 point, but cannot reduce the damage taken below 1 hit point. For example, if you are raging, have a raging Constitution score of 18, are currently at 2 hit points, and take 20 hit points of damage from a hit (which is enough to bring you to -18 hit points, thereby killing you), you may spend 1 round of rage to reduce the damage by 1 hit point (leaving you perilously close to death at -17 hit points); if you spend 17 rounds of rage, you reduce the damage to 1 (the minimum), leaving you with 1 hit point."
  },
  {
    "name": "Gore Fiend",
    "type": "General",
    "description": "Horrible wounds, whether on yourself or your enemies, make your blood sing.",
    "prerequisites": ["Half-orc or orc","rage class feature"],
    "prerequisitesFeats": ["Half-orc or orc","rage class feature"],
    "benefit": "When you are raging and you confirm a critical hit with a melee weapon or a critical hit is confirmed on you (whether by a melee weapon, spell, or ranged weapon), you regain 1 round of rage (up to your maximum for the day). You can only gain this benefit once per round."
  },
  {
    "name": "Horde Charge",
    "type": "General",
    "description": "When you charge with an ally, you are more deadly.",
    "prerequisites": ["Base attack bonus +1","half-orc or orc"],
    "prerequisitesFeats": ["Base attack bonus +1","half-orc or orc"],
    "benefit": "When charging during the same round as an ally with this feat, you gain a +2 bonus on attack and damage rolls in addition to the normal bonus for charging. If you can make multiple attacks on a charge, this bonus only applies to the first attack."
  },
  {
    "name": "Improved Surprise Follow-Through",
    "type": "Combat",
    "description": "You follow up an attack with a surprising series of sweeping blows.",
    "prerequisites": ["Str 13","Cleave","Great Cleave","Power Attack","Surprise Follow Through","base attack bonus +8"],
    "prerequisitesFeats": ["Str 13","Cleave","Great Cleave","Power Attack","Surprise Follow Through","base attack bonus +8"],
    "benefit": "When using Great Cleave, each opponent you attack on your turn (other than the first) is denied his Dexterity bonus against you."
  },
  {
    "name": "Resilient Brute",
    "type": "General",
    "description": "You absorb punishment others find deadly.",
    "prerequisites": ["Half-orc or orc"],
    "prerequisitesFeats": ["Half-orc or orc"],
    "benefit": "Once per day, when a creature confirms a critical hit against you, you may treat half the damage as nonlethal damage. You cannot use this ability if you are immune to nonlethal damage. When your base attack bonus reaches +10, you may use this ability an additional time per day."
  },
  {
    "name": "Surprise Follow-Through",
    "type": "Combat",
    "description": "When striking one opponent, you catch its ally off guard.",
    "prerequisites": ["Str 13","Cleave","Power Attack","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Cleave","Power Attack","base attack bonus +1"],
    "benefit": "When using Cleave or Great Cleave, the second foe you attack on your turn is denied its Dexterity bonus against you."
  },
  {
    "name": "Sympathetic Rage",
    "type": "Combat",
    "description": "Seeing an ally rage fills you with your own fury.",
    "prerequisites": ["Half-orc or orc","nonlawful"],
    "prerequisitesFeats": ["Half-orc or orc","nonlawful"],
    "benefit": "Whenever you are adjacent to an ally who is raging, you may choose to enter a similar but less powerful rage as a free action on your turn. This weaker rage gives you all the benefits and penalties of a barbarian's rage, except your morale bonus to Strength and Constitution is only +2. There is no limit to how long you can rage, as long as you remain adjacent to a raging ally (for example, you could take a 5-foot step away from one raging ally toward another raging ally and maintain your rage). As with a barbarian's rage, when this weaker rage ends, you are fatigued. You cannot use this feat if you are fatigued."
  },
  {
    "name": "Tenacious Survivor",
    "type": "General",
    "description": "Your spirit lingers long after any other's would have passed on.",
    "prerequisites": ["Con 13","Diehard","Endurance","half-orc or orc"],
    "prerequisitesFeats": ["Con 13","Diehard","Endurance","half-orc or orc"],
    "benefit": "When you are killed by hit point damage, your soul lingers in your body for a number of rounds equal to your Constitution bonus. You are still dead, but a creature can make a DC 10 Heal check as a standard action to realize that you can still be saved. You can be healed by magic as if you were alive. If you are healed enough hit points that you would no longer be dead, you are alive again, but you gain one permanent negative level."
  },
  {
    "name": "Thrill of the Kill",
    "type": "General",
    "description": "Killing fuels your rage.",
    "prerequisites": ["Half-orc or orc","rage class feature"],
    "prerequisitesFeats": ["Half-orc or orc","rage class feature"],
    "benefit": "When you are raging and your attack reduces an enemy to negative hit points or kills it, you regain 1 round of rage. You may only use this feat if the fallen enemy had at least as many Hit Dice as you. You can only gain this benefit once per round."
  },
  {
    "name": "Adaptive Fortune",
    "type": "General",
    "description": "Your luck takes on almost legendary proportions.",
    "prerequisites": ["Fortunate One","adaptable luck racial trait","character level 10th","halfling"],
    "prerequisitesFeats": ["Fortunate One","adaptable luck racial trait","character level 10th","halfling"],
    "benefit": "Increase the number of times per day you can use the adaptable luck racial trait by 1. Furthermore, when you use adaptable luck, increase the luck bonus for each type of use by 2."
  },
  {
    "name": "Blundering Defense",
    "type": "Combat",
    "description": "Your feverish and sometimes comical defensive techniques offer enough distraction to aid allies.",
    "prerequisites": ["Cautious Fighter","halfling"],
    "prerequisitesFeats": ["Cautious Fighter","halfling"],
    "benefit": "Whenever you fight defensively or use the total defense action, allies gain a luck bonus to AC and CMD equal to 1/2 the dodge bonus you gain from the action you are taking. Allies only gain this bonus while they are adjacent to you."
  },
  {
    "name": "Cautious Fighter",
    "type": "Combat",
    "description": "You care more about survival than victory.",
    "prerequisites": ["Halfling"],
    "prerequisitesFeats": ["Halfling"],
    "benefit": "When fighting defensively or using total defense, your dodge bonus to AC increases by 2."
  },
  {
    "name": "Courageous Resolve",
    "type": "General",
    "description": "Even when others run, you tend to stand your ground.",
    "prerequisites": ["Craven racial trait or fearless racial trait","halfling"],
    "prerequisitesFeats": ["Craven racial trait or fearless racial trait","halfling"],
    "benefit": "If you have the fearless racial trait, your racial bonus on saving throws against fear effects increases to +4. If you have the craven racial trait, you still take the -2 penalty on fear saves, but you can gain the benefit of morale bonuses on saving throws against fear effects."
  },
  {
    "name": "Desperate Swing",
    "type": "Combat",
    "description": "You land your most telling blows in desperate situations.",
    "prerequisites": ["Cautious Fighter","base attack bonus +1","halfling"],
    "prerequisitesFeats": ["Cautious Fighter","base attack bonus +1","halfling"],
    "benefit": "Once per day, you can make a single melee attack while taking the total defense action. You take a -4 penalty on attack rolls when making this attack. You also gain a +4 bonus on critical confirmation rolls made while fighting defensively or making an attack of opportunity using this feat."
  },
  {
    "name": "Fortunate One",
    "type": "General",
    "description": "You have an even greater knack than most halflings for adaptable luck.",
    "prerequisites": ["Adaptable luck racial trait","halfling"],
    "prerequisitesFeats": ["Adaptable luck racial trait","halfling"],
    "benefit": "The number of times per day you can use the adaptable luck racial trait increases by 1."
  },
  {
    "name": "Improved Low Blow",
    "type": "Combat",
    "description": "You are adept at hitting larger opponents where it hurts.",
    "prerequisites": ["Base attack bonus +4","halfling","low-blow racial trait"],
    "prerequisitesFeats": ["Base attack bonus +4","halfling","low-blow racial trait"],
    "benefit": "Your bonus to conf irm critical hits against opponents larger than yourself improves to +2. Furthermore, once per day, after you fail to hit with a critical hit conf irmation roll, you can reroll the conf irmation roll, but must take the new result even if it is worse."
  },
  {
    "name": "Lucky Healer",
    "type": "General",
    "description": "Your luck allows you to draw from magical healing far more efficiently than most.",
    "prerequisites": ["Adaptive luck racial trait","halfling"],
    "prerequisitesFeats": ["Adaptive luck racial trait","halfling"],
    "benefit": "Spend a use of your adaptive luck racial trait to reroll the damage healed from a single magical healing effect (such as a spell with \"cure\" in the title or channel energy). You regain a number of hit points equal to the new roll or the original roll, whichever is greater. Other creatures healed by the effect do not gain this benef it."
  },
  {
    "name": "Lucky Strike",
    "type": "Combat",
    "description": "Your luck increases the potency of your weapon attacks.",
    "prerequisites": ["Base attack bonus +5","adaptive luck racial trait","halfling"],
    "prerequisitesFeats": ["Base attack bonus +5","adaptive luck racial trait","halfling"],
    "benefit": "Spend a use of your adaptive luck racial trait to reroll the damage from a single weapon attack. You deal damage equal to the new damage roll, or the original roll, whichever is greater."
  },
  {
    "name": "Risky Striker",
    "type": "Combat",
    "description": "You can make yourself a little more vulnerable to larger creatures in order to land a devastating blow.",
    "prerequisites": ["Base attack bonus +1","halfling"],
    "prerequisitesFeats": ["Base attack bonus +1","halfling"],
    "benefit": "You can choose to take a -1 penalty to AC to gain a +2 bonus on melee damage rolls against creatures two or more size categories larger than you. When your base attack bonus reaches +4 and every four levels thereafter, the damage increases by 2. The bonus damage is multiplied in the case of a critical hit. You can only choose to use this feat when you declare that you are making an attack action or a full-attack action with a melee weapon. The effects last until your next turn."
  },
  {
    "name": "Sure and Fleet",
    "type": "General",
    "description": "You are both fast and careful.",
    "prerequisites": ["Fleet of foot racial trait","halfling"],
    "prerequisitesFeats": ["Fleet of foot racial trait","halfling"],
    "benefit": "You gain a +2 racial bonus on Acrobatics and Climb checks."
  },
  {
    "name": "Surprise Strike",
    "type": "Combat",
    "description": "You actually seem to do more damage when frantically trying to avoid your enemies.",
    "prerequisites": ["Cautious Fighter","Desperate Swing","base attack bonus +6","halfling"],
    "prerequisitesFeats": ["Cautious Fighter","Desperate Swing","base attack bonus +6","halfling"],
    "benefit": "Once per day, when fighting defensively or making an attack of opportunity while taking the total defense action with the Desperate Swing feat, you take no penalty on the attack roll."
  },
  {
    "name": "Uncanny Defense",
    "type": "Combat",
    "description": "Your instinct for self-preservation gives you many advantages.",
    "prerequisites": ["Cautious Fighter","base attack bonus +3","halfling"],
    "prerequisitesFeats": ["Cautious Fighter","base attack bonus +3","halfling"],
    "benefit": "While fighting defensively or taking the total defense action, you gain a bonus on your Ref lex saving throws and to your CMD equal to 1/2 of the dodge bonus to AC you gained from taking that action."
  },
  {
    "name": "Bestow Luck",
    "type": "General",
    "description": "You are extremely lucky and sometimes your allies are as well.",
    "prerequisites": ["Defiant Luck","Inexplicable Luck","human"],
    "prerequisitesFeats": ["Defiant Luck","Inexplicable Luck","human"],
    "benefit": "You gain an extra use per day of your Defiant Luck ability. You can also use your Inexplicable Luck ability to grant an ally that can see and hear its benefit as an immediate action."
  },
  {
    "name": "Critical Versatility",
    "type": "Combat",
    "description": "An open mind and combat training grant versatility to your critical hits.",
    "prerequisites": ["Fighter level 11th","human"],
    "prerequisitesFeats": ["Fighter level 11th","human"],
    "benefit": "Once per day, you can spend 1 hour practicing maneuvers to gain one single critical feat that you meet the prerequisites for. You gain the benefits of the chosen critical feat until you choose to practice a different critical feat."
  },
  {
    "name": "Dauntless Destiny",
    "type": "General",
    "description": "Your ability to avert disaster is impressive.",
    "prerequisites": ["Cha 13","Fearless Curiosity","Intimidate 10 ranks","human"],
    "prerequisitesFeats": ["Cha 13","Fearless Curiosity","Intimidate 10 ranks","human"],
    "benefit": "You gain a +1 bonus on saving throws against effects with the emotion descriptor; this bonus stacks with those granted by Fearless Curiosity and Intimidating Confidence. In addition, once per day you may reroll a natural 1 on a saving throw or an attack roll. If your reroll results in a successful saving throw or attack roll, as a free action you can make an Intimidate check to demoralize the target of your attack or the creature that forced you to make a saving throw, as long as the creature is within 30 feet and can see and hear you. This effect does not apply on saving throws against traps or other objects. This does not stack with other effects that allow you to reroll a saving throw or an attack roll. You may only make one reroll."
  },
  {
    "name": "Defiant Luck",
    "type": "General",
    "description": "You can sometimes defiantly shrug off spells and attacks that would kill a lesser creature.",
    "prerequisites": ["Human"],
    "prerequisitesFeats": ["Human"],
    "benefit": "Once per day, after you roll a natural 1 on a saving throw or a critical hit is confirmed against you, you can either reroll that saving throw, or force the creature that confirmed the critical hit against you to reroll the critical confirmation roll. This does not stack with other effects that allow you to reroll a saving throw or an attack roll. You may only make one reroll."
  },
  {
    "name": "Fast Learner",
    "type": "General",
    "description": "You progress gain extra versatility.",
    "prerequisites": ["Int 13","human"],
    "prerequisitesFeats": ["Int 13","human"],
    "benefit": "When you gain a level in a favored class, you gain both +1 hit point and +1 skill rank instead of choosing either one or the other benefit or you can choose an alternate class reward."
  },
  {
    "name": "Fearless Curiosity",
    "type": "General",
    "description": "Your desire to see and experience the world overrides healthy caution.",
    "prerequisites": ["Cha 13","human"],
    "prerequisitesFeats": ["Cha 13","human"],
    "benefit": "You gain a +1 bonus on saving throws against effects with the emotion descriptor. In addition, for any round in which you begin your turn affected by a fear effect, you gain a new save at the beginning of your turn to reduce the severity of the fear effect, from panicked to frightened, frightened to shaken, and shaken to unaffected."
  },
  {
    "name": "Heroic Will",
    "type": "General",
    "description": "Your indomitable will breaks free from mental shackles.",
    "prerequisites": ["Iron Will","base Will save +4","human"],
    "prerequisitesFeats": ["Iron Will","base Will save +4","human"],
    "benefit": "Once per day as a standard action, you may attempt a new saving throw against a harmful condition requiring a Will save that is affecting you. If you are dominated, controlled, or cannot take an action because of the effect against which you are trying to make a new saving throw, you can make this saving throw at the start of the turn as no action, but on a success, your turn ends. You cannot use this feat to remove instantaneous effects, effects that do not require a Will save, or effects that do not allow a saving throw."
  },
  {
    "name": "Huntmaster",
    "type": "General",
    "description": "You are an expert trainer of horses, hounds, falcons, or hunting cats.",
    "prerequisites": ["Handle Animal 1 rank; either the animal companion","divine bond (mount)","or mount class feature; human"],
    "prerequisitesFeats": ["Handle Animal 1 rank; either the animal companion","divine bond (mount)","or mount class feature; human"],
    "benefit": "If you have the animal companion class feature, pick one of the following types of animal companions that this feat affects: bird, dog, small cat, or horse. If you have the divine bond (mount) or mount class feature, this feat always affects horses. You gain a +2 bonus on Handle Animal and Knowledge (nature) checks with creatures of that type of animal. Furthermore, you are treated as one level higher when determining the abilities of your animal companion or mount, as long as it is of the chosen type."
  },
  {
    "name": "Improved Improvisation",
    "type": "General",
    "description": "You are masterful in your improvisation.",
    "prerequisites": ["Int 13","Fast Learner","Improvisation","human"],
    "prerequisitesFeats": ["Int 13","Fast Learner","Improvisation","human"],
    "benefit": "Your nonprof iciency penalty with weapons, armor, and shields is halved. In addition, the bonus on all skill checks for skills you have no ranks in increases to +4 instead of +2."
  },
  {
    "name": "Improvisation",
    "type": "General",
    "description": "You can figure out how to do almost anything.",
    "prerequisites": ["Int 13","Fast Learner","human"],
    "prerequisitesFeats": ["Int 13","Fast Learner","human"],
    "benefit": "You gain a +2 bonus on all skill checks for skills you have no ranks in. Furthermore, you can use all trained skills untrained."
  },
  {
    "name": "Inexplicable Luck",
    "type": "General",
    "description": "Others are often dumfounded by your luck.",
    "prerequisites": ["Defiant Luck","human"],
    "prerequisitesFeats": ["Defiant Luck","human"],
    "benefit": "Once per day, as a free action before a roll is made, you gain a +8 bonus on any single d20 roll. You can also use this ability after the roll is made, but if you do, this bonus is reduced to +4."
  },
  {
    "name": "Intimidating Confidence",
    "type": "General",
    "description": "You have boundless faith in your success.",
    "prerequisites": ["Cha 13","Fearless Curiosity","Intimidate 5 ranks","human"],
    "prerequisitesFeats": ["Cha 13","Fearless Curiosity","Intimidate 5 ranks","human"],
    "benefit": "You gain a +1 bonus on saving throws against effects with the emotion descriptor; this bonus stacks with the bonus granted by Fearless Curiosity. When you confirm a critical hit, as a free action you can make an Intimidate check to demoralize one creature you threaten. If you have the Dazzling Display feat, you can make Intimidate checks to demoralize all creatures you threaten instead. You gain a +2 bonus on this check if your weapon has a x3 critical modifier, or +4 if it has a x4 critical modifier."
  },
  {
    "name": "Martial Mastery",
    "type": "Combat",
    "description": "You broaden your study of weapons to encompass multiple similar weapons.",
    "prerequisites": ["Martial Versatility","fighter level 16th","human"],
    "prerequisitesFeats": ["Martial Versatility","fighter level 16th","human"],
    "benefit": "Each combat feat you have that applies to a specific weapon (e.g., Weapon Focus) can be used with all weapons in the same weapon group (Ultimate Combat 45)."
  },
  {
    "name": "Martial Versatility",
    "type": "Combat",
    "description": "You further broaden your study of weapons to encompass multiple similar weapons.",
    "prerequisites": ["Fighter level 4th","human"],
    "prerequisitesFeats": ["Fighter level 4th","human"],
    "benefit": "Choose one combat feat you know that applies to a specific weapon (e.g., Weapon Focus). You can use that feat with any weapon within the same weapon group."
  },
  {
    "name": "Surge of Success",
    "type": "General",
    "description": "Your success drives your further actions.",
    "prerequisites": ["Human"],
    "prerequisitesFeats": ["Human"],
    "benefit": "When you confirm a critical hit or roll a natural 20 on a saving throw, you gain a +2 circumstance bonus on a single attack roll, saving throw, skill check, or ability check of your choice before the end of your next turn. You must choose to use this bonus before you make the attack roll, saving throw, skill check, or ability check."
  },
  {
    "name": "Angel Wings",
    "type": "General",
    "description": "Feathered wings sprout from your back.",
    "prerequisites": ["Angelic Blood","aasimar","character level 10th"],
    "prerequisitesFeats": ["Angelic Blood","aasimar","character level 10th"],
    "benefit": "You gain a pair of gleaming feathered wings that grant a fly speed of 30 feet (average maneuverability) if wearing light armor or unencumbered, or 20 feet (poor maneuverability) with a medium or heavy load or medium or heavy armor. Fly is a class skill for you."
  },
  {
    "name": "Angelic Blood",
    "type": "General",
    "description": "Your blood is infused with holy power.",
    "prerequisites": ["Con 13","aasimar"],
    "prerequisitesFeats": ["Con 13","aasimar"],
    "benefit": "You gain a +2 bonus on saving throws against effects with the evil descriptor and on Constitution checks to stabilize when you are reduced to negative hit points (but not dead). Furthermore, each time you take bleed or blood drain damage, each undead creature or creature with the evil subtype that is currently adjacent to you also takes 1 point of damage."
  },
  {
    "name": "Angelic Flesh",
    "type": "General",
    "description": "Your skin shines like burnished metal.",
    "prerequisites": ["Angelic Blood","aasimar"],
    "prerequisitesFeats": ["Angelic Blood","aasimar"],
    "benefit": "You take a -2 penalty on Disguise and Stealth checks but gain one of the following benefits, depending on the metallic affinity of your flesh (choose one). Brazen: You gain fire resistance 5 and a +2 bonus on saves against fire effects. Golden: You gain a +2 bonus on saves against blindness, dazzling, patterns, and effects with the light descriptor. When you cast spells or use spell-like abilities that are from the illusion (pattern) subschool or have the light descriptor, you do so at +1 caster level. Silver: You gain a +2 bonus on saves against paralysis, petrification, and poison, and your unarmed strikes or natural weapons count as silver for the purpose of overcoming damage reduction. Steel: You gain a +1 natural armor bonus to AC, and your unarmed strikes or natural weapons count as cold iron for the purpose of overcoming damage reduction."
  },
  {
    "name": "Celestial Servant",
    "type": "General",
    "description": "Rather than being a normal animal or beast, your companion or familiar hails from the heavenly realms.",
    "prerequisites": ["Aasimar","animal companion","familiar","or mount class feature"],
    "prerequisitesFeats": ["Aasimar","animal companion","familiar","or mount class feature"],
    "benefit": "Your animal companion, familiar, or mount gains the celestial template and becomes a magical beast, though you may still treat it as an animal when using Handle Animal, wild empathy, or any other spells or class abilities that specifically affect animals."
  },
  {
    "name": "Channel Force",
    "type": "General",
    "description": "Your channel is bolstered by your faith, allowing you to move and damage your foes.",
    "prerequisites": ["Aasimar","channel energy 2d6"],
    "prerequisitesFeats": ["Aasimar","channel energy 2d6"],
    "benefit": "When you channel energy to deal damage, you may choose to affect only a single target within 30 feet. In addition to dealing damage, if that single target fails its saving throw, you may pull or push (Pathfinder RPG Bestiary 303) the target up to 5 feet for every 2d6 points of channel energy damage you are capable of dealing."
  },
  {
    "name": "Greater Channel Force",
    "type": "General",
    "description": "Your eruptions of divine power move your enemies.",
    "prerequisites": ["Channel Force","Improved Channel Force","aasimar","channel energy 6d6"],
    "prerequisitesFeats": ["Channel Force","Improved Channel Force","aasimar","channel energy 6d6"],
    "benefit": "When using Improved Channel Force, you can affect all creatures in a 30-foot-radius burst."
  },
  {
    "name": "Heavenly Radiance",
    "type": "General",
    "description": "Your heavenly light can be used in a variety of ways.",
    "prerequisites": ["Aasimar","daylight spell-like ability","sufficiently high level (see below)"],
    "prerequisitesFeats": ["Aasimar","daylight spell-like ability","sufficiently high level (see below)"],
    "benefit": "You gain one additional use per day of daylight. Choose one spell from the table below; by expending a use of daylight, you may use this spell as a spell-like ability. To select a spell, you must meet the minimum character level for its listing in the table. The save DC for this spell is Charisma-based. Minimum Spell-Like Ability Character Level Flare burst (Advanced Player's Guide 223) 1st Wake of light (Advanced Player's Guide 254) 3rd Searing light 5th Wandering star motes 7th (Advanced Player's Guide 255) Sunbeam (one beam only) 9th"
  },
  {
    "name": "Improved Channel Force",
    "type": "General",
    "description": "You move your enemies within a beam of righteous energy.",
    "prerequisites": ["Channel Force","aasimar","channel energy 4d6"],
    "prerequisitesFeats": ["Channel Force","aasimar","channel energy 4d6"],
    "benefit": "When using Channel Force, you can affect all creatures in a 60-foot line or a 30-foot cone-shaped burst. You must choose to either push or pull all creatures within the affected area that fail their saves."
  },
  {
    "name": "Metallic Wings",
    "type": "General",
    "description": "Your wing feathers are made of gleaming metal.",
    "prerequisites": ["Angelic Blood","Angelic Flesh","Angel Wings","aasimar","character level 11th"],
    "prerequisitesFeats": ["Angelic Blood","Angelic Flesh","Angel Wings","aasimar","character level 11th"],
    "benefit": "You gain two wing attacks. These are secondary natural attacks that deal 1d4 points of slashing damage (or 1d3 if you are Small)."
  },
  {
    "name": "Black Cat",
    "type": "General",
    "description": "Bad luck befalls those who dare to cross you.",
    "prerequisites": ["Catfolk"],
    "prerequisitesFeats": ["Catfolk"],
    "benefit": "Once per day as an immediate action, when you are hit by a melee attack, you can force the opponent who made the attack to reroll it with a -4 penalty. The opponent must take the result of the second attack roll. This is a supernatural ability."
  },
  {
    "name": "Catfolk Exemplar",
    "type": "General",
    "description": "Your feline traits are more defined and prominent than those of other members of your race.",
    "prerequisites": ["Catfolk"],
    "prerequisitesFeats": ["Catfolk"],
    "benefit": "You can take the Aspect of the Beast feat (Advanced Player's Guide 151) even if you do not meet the normal prerequisites. Furthermore, your catlike nature manifests in one of the following ways. You choose the manifestation when you take this feat, and cannot change it later. Enhanced Senses (Ex): If you have low-light vision, you gain the scent catfolk racial trait. If you have the scent racial trait, you gain low-light vision. Fast Sprinter (Ex): You gain a 10-foot racial bonus to your speed when using the charge, run, or withdraw actions. If you have the sprinter racial trait, your racial bonus to speed when using the charge, run, or withdraw action increases to a 20-foot bonus. Sharp Claws (Ex): If you do not have the cat's claws racial trait or the claws of the beast manifestation from the Aspect of the Beast feat (Advanced Player's Guide 151), you gain the cat's claws racial trait. If you have either the cat's claws racial trait or the claws of the beast manifestation, your claw damage increases to 1d6."
  },
  {
    "name": "Claw Pounce",
    "type": "Combat",
    "description": "You can charge and make an attack with your paws.",
    "prerequisites": ["Str 13","Dex 15","Nimble Striker","base attack bonus +10","catfolk","cat's claws racial trait or Aspect of the Beast (claws of the beast manifestation)"],
    "prerequisitesFeats": ["Str 13","Dex 15","Nimble Striker","base attack bonus +10","catfolk","cat's claws racial trait or Aspect of the Beast (claws of the beast manifestation)"],
    "benefit": "When you make a charge, you can make a full attack with your claws."
  },
  {
    "name": "Feline Grace",
    "type": "General",
    "description": "Your innate grace allows you to get out of the stickiest situations.",
    "prerequisites": ["Dexterity 13","catfolk"],
    "prerequisitesFeats": ["Dexterity 13","catfolk"],
    "benefit": "You gain a +2 bonus to your CMD against bull rush, grapple, overrun, repositioning, and trip combat maneuvers."
  },
  {
    "name": "Nimble Striker",
    "type": "Combat",
    "description": "You were born to charge your enemies and nobody does it better.",
    "prerequisites": ["Dex 13","base attack bonus +1","catfolk","sprinter racial trait"],
    "prerequisitesFeats": ["Dex 13","base attack bonus +1","catfolk","sprinter racial trait"],
    "benefit": "You do not take a -2 penalty to AC when you use the Cleave feat, Lunge feat, or when you charge."
  },
  {
    "name": "Blood Drinker",
    "type": "General",
    "description": "Consuming blood reinvigorates you.",
    "prerequisites": ["Dhampir"],
    "prerequisitesFeats": ["Dhampir"],
    "benefit": "Choose one humanoid subtype, such as \"goblinoid\" (this subtype cannot be \"dhampir\"). You have acquired a taste for the blood of creatures with this subtype. Whenever you drink fresh blood from such a creature, you gain 5 temporary hit points and a +1 bonus on checks and saves based on Constitution. The effects last 1 hour. If you feed multiple times, you continue to gain hit points to a maximum of 5 temporary hit points for every three Hit Dice you have, but the +1 bonus on Constitution-based skill checks and saving throws does not stack. Normally, you can only drink blood from an opponent who is helpless, grappled, paralyzed, pinned, unconscious, or similarly disabled. If you have a bite attack, you can drink blood automatically as part of your bite attack; otherwise, you must first cut your target by dealing 1 hit point of damage with a slashing or piercing weapon (though you may feed upon a creature with severe wounds or a bleed effect without cutting it first). Once you cut the target, you can drink from its wound as a standard action. Drinking blood deals 2 points of Constitution damage to the creature you feed upon. The blood must come from a living creature of the specified humanoid subtype. It cannot come from a dead or summoned creature. Feeding on unwilling intelligent creatures is an evil act."
  },
  {
    "name": "Blood Feaster",
    "type": "General",
    "description": "Consuming blood gives you superhuman strength.",
    "prerequisites": ["Blood Drinker","base attack bonus +6","dhampir"],
    "prerequisitesFeats": ["Blood Drinker","base attack bonus +6","dhampir"],
    "benefit": "If you use your Blood Drinker feat to drain 4 or more points of Constitution from a living creature, you gain a +2 bonus on damage rolls and a +1 bonus on Strength-based skill checks. This bonus lasts for a number of rounds equal to 1/2 your Hit Dice."
  },
  {
    "name": "Blood Salvage",
    "type": "General",
    "description": "You do not need to drink blood from a living creature to gain healing benefits.",
    "prerequisites": ["Blood Drinker","dhampir"],
    "prerequisitesFeats": ["Blood Drinker","dhampir"],
    "benefit": "You can use your Blood Drinker feat on a dead creature of the appropriate humanoid subtype. The creature must have died less than 6 hours beforehand."
  },
  {
    "name": "Diverse Palate",
    "type": "General",
    "description": "Your taste for blood is broader than that of other dhampirs.",
    "prerequisites": ["Blood Drinker","dhampir"],
    "prerequisitesFeats": ["Blood Drinker","dhampir"],
    "benefit": "Choose a humanoid subtype or the monstrous humanoid type. You may use your Blood Drinker feat on creatures of this subtype or type."
  },
  {
    "name": "Natural Charmer",
    "type": "General",
    "description": "You possess some of the dominating powers of your vampire progenitor.",
    "prerequisites": ["Cha 17","dhampir"],
    "prerequisitesFeats": ["Cha 17","dhampir"],
    "benefit": "You can take 20 on any Charisma-based skills to charm, convince, persuade, or seduce humanoids whose attitude is at least friendly to you. Taking 20 still requires 20 times the normal time to perform the skill."
  },
  {
    "name": "Drow Nobility",
    "type": "General",
    "description": "Your blood courses with power, granting you greater spell-like abilities.",
    "prerequisites": ["Able to use drow spell-like abilities","drow"],
    "prerequisitesFeats": ["Able to use drow spell-like abilities","drow"],
    "benefit": "You may use detect magic as a spell-like ability at will, and add feather fall and levitate to the spell-like abilities that you may use once each per day. Your caster level is equal to your character level."
  },
  {
    "name": "Greater Drow Nobility",
    "type": "General",
    "description": "You have mastered the lesser spell-like abilities of the drow, demonstrating true nobility.",
    "prerequisites": ["Cha 13","Drow Nobility","Improved Drow Nobility","able to use drow spell-like abilities","drow"],
    "prerequisitesFeats": ["Cha 13","Drow Nobility","Improved Drow Nobility","able to use drow spell-like abilities","drow"],
    "benefit": "Your detect magic spell-like ability is now constant. You may use your dancing lights, deeper darkness, faerie fire, feather fall, and levitate spell-like abilities at will."
  },
  {
    "name": "Improved Drow Nobility",
    "type": "General",
    "description": "Your magical heritage is more potent than that of your peers, as demonstrated by your superior spell-like abilities.",
    "prerequisites": ["Cha 13","Drow Nobility","able to use drow spell-like abilities","drow"],
    "prerequisitesFeats": ["Cha 13","Drow Nobility","able to use drow spell-like abilities","drow"],
    "benefit": "You may use your dancing lights, faerie fire, feather fall, and levitate spell-like abilities twice per day. Your darkness spell-like ability instead becomes deeper darkness, which you may use twice per day."
  },
  {
    "name": "Improved Umbral Scion",
    "type": "General",
    "description": "You are a master of drow noble magic.",
    "prerequisites": ["Cha 13","Wis 13","Drow Nobility","Greater Drow Nobility","Improved Drow Nobility","Umbral Scion","able to use drow spell-like abilities","drow"],
    "prerequisitesFeats": ["Cha 13","Wis 13","Drow Nobility","Greater Drow Nobility","Improved Drow Nobility","Umbral Scion","able to use drow spell-like abilities","drow"],
    "benefit": "You may use dispel magic, divine favor, and suggestion once per day as spell-like abilities. Your caster level is equal to your character level."
  },
  {
    "name": "Noble Spell Resistance",
    "type": "General",
    "description": "Your ascension is complete; you have the spell resistance approaching that of a demon.",
    "prerequisites": ["Cha 13","Wis 13","Greater Drow Nobility","character level 13th","drow"],
    "prerequisitesFeats": ["Cha 13","Wis 13","Greater Drow Nobility","character level 13th","drow"],
    "benefit": "Your spell resistance is equal to 11 + your character level."
  },
  {
    "name": "Shadow Caster",
    "type": "General",
    "description": "Your command over shadow and darkness create longer-lasting spell effects.",
    "prerequisites": ["Caster level 1st","drow"],
    "prerequisitesFeats": ["Caster level 1st","drow"],
    "benefit": "When you cast spells of the shadow subschool or spells with the darkness descriptor, you are considered two levels higher when determining the duration of those spells."
  },
  {
    "name": "Spider Step",
    "type": "General",
    "description": "You tread where only arachnids dare.",
    "prerequisites": ["Character level 3rd","drow"],
    "prerequisitesFeats": ["Character level 3rd","drow"],
    "benefit": "You can cast spider climb once per day as a spell-like ability, using your character level as the caster level. Furthermore, you gain a +4 bonus on saving throws against the web special attacks of spiders and the effects of web and other similar spells (such as the web cloud spell)."
  },
  {
    "name": "Spider Summoner",
    "type": "General",
    "description": "You gain the ability to summon powerful spiders.",
    "prerequisites": ["Ability to cast summon monster or summon nature's ally spells","drow"],
    "prerequisitesFeats": ["Ability to cast summon monster or summon nature's ally spells","drow"],
    "benefit": "When casting either a summon monster spell or a summon nature's ally spell, your options increase. Depending on the level of the spell, you can summon the spiders listed below. Summon Monster: 1st level-giant crab spider* (Bestiary 3 254); 4th level-giant black widow* (Bestiary 2 256); 5th level-ogre spider* (Bestiary 3 256); 7th level-giant tarantula* (Bestiary 2 256) Summon Nature's Ally: 1st level-giant crab spider (Bestiary 3 254); 4th level-giant black widow (Bestiary 2 256); 5th level-ogre spider (Bestiary 3 256); 7th level- giant tarantula (Bestiary 2 256) Creatures marked with an asterisk (*) are summoned with the celestial template if you are good, and the fiendish template if you are evil. If you are neutral, you may choose which template to apply to the creature. Furthermore, when you summon spiders using summon monster or summon nature's ally, the DC of the summoned monster's poison and web effects increases by 2."
  },
  {
    "name": "Umbral Scion",
    "type": "General",
    "description": "New spell-like abilities are unlocked for you as you rise to ascendency among the drow people.",
    "prerequisites": ["Cha 13","Wis 13","Drow Nobility","Greater Drow Nobility","Improved Drow Nobility","able to use drow spell-like abilities","drow"],
    "prerequisitesFeats": ["Cha 13","Wis 13","Drow Nobility","Greater Drow Nobility","Improved Drow Nobility","able to use drow spell-like abilities","drow"],
    "benefit": "Select one of the following: dispel magic, divine favor, or suggestion. You may use this spell once per day as a spell-like ability. Your caster level is equal to your character level."
  },
  {
    "name": "Natural Jouster",
    "type": "Combat",
    "description": "",
    "prerequisites": ["Centaur (or any tauric creature at the GM's discretion)"],
    "prerequisitesFeats": ["Centaur (or any tauric creature at the GM's discretion)"],
    "benefit": "You gain proficiency with the lance. You can wield a lance one-handed as if you were mounted, and you deal double damage with a lance while charging."
  },
  {
    "name": "Lastwall Phalanx",
    "type": "General",
    "description": "When battling the terrifying hordes of Belkzen, you find strength in your shield brothers and sisters.",
    "prerequisites": ["Base attack bonus +3","good alignment"],
    "prerequisitesFeats": ["Base attack bonus +3","good alignment"],
    "benefit": "You gain a sacred bonus to your AC against the attacks of evil creatures and a sacred bonus to saves against the spells and abilities of evil creatures equal to the number of adjacent allies who also have this feat."
  },
  {
    "name": "LastwallPhalanx",
    "type": "General",
    "description": "When battling the terrifying hordes of Belkzen, you find strength in your shield brothers and sisters.",
    "prerequisites": ["Base attack bonus +3","good alignment"],
    "prerequisitesFeats": ["Base attack bonus +3","good alignment"],
    "benefit": "You gain a sacred bonus to your AC against the attacks of evil creatures and a sacred bonus to saves against the spells and abilities of evil creatures equal to the number of adjacent allies who also have this feat."
  },
  {
    "name": "Legacy of Ozem",
    "type": "General",
    "description": "Your purity is so great that the blades and bows of long-forgotten heroes sing to you as if they had been made for your righteous hands.",
    "prerequisites": ["Base attack bonus +5","good alignment"],
    "prerequisitesFeats": ["Base attack bonus +5","good alignment"],
    "benefit": "When using good-aligned weapons, including those under the effects of a bless weapon spell, you gain a +1 sacred bonus on damage rolls."
  },
  {
    "name": "Peacemaker",
    "type": "General",
    "description": "Your words of peace ring true and are much more difficult for others to resist.",
    "prerequisites": ["Charisma 13","good alignment"],
    "prerequisitesFeats": ["Charisma 13","good alignment"],
    "benefit": "The DC to resist spells you cast to ensure peace or force aggressive creatures to become peaceful increases by +2. This affects spells that dissuade creatures from aggressive actions without exerting long-term or absolute control over them, and without leaving them defenseless. These spells include, but are not limited to, calm animals, calm emotions, command, compassionate allyUM, enthrall, euphoric tranquilityUM, sanctuary, and serenityUM."
  },
  {
    "name": "Siphon Poison",
    "type": "General",
    "description": "You can remove poison from afflicted creatures.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "As a full-round action, you can remove an injury poison from a helpless or willing creature's bloodstream with a successful Heal check. The DC of this check is equal to the poison's DC. You can only draw out poison in this way within the first 2 rounds of when the target was poisoned. If the check is successful, the creature no longer suffers any additional effects from the poison. By performing this action, you do not risk poisoning yourself."
  },
  {
    "name": "Worldwound Walker",
    "type": "General",
    "description": "Your purity always remains a blessing, even when you're surrounded by creatures that despise it.",
    "prerequisites": ["5 or more Hit Dice","good alignment"],
    "prerequisitesFeats": ["5 or more Hit Dice","good alignment"],
    "benefit": "You can alter the essence of your being to lessen the effects of spells designed to harm good creatures. When affected by spells and effects that behave differently according to alignment (such as unholy word or protection from good), you can choose whether you are considered good or neutral. This ability does not actually change your alignment or fool divinations, nor does it permit you to overcome alignment requirements for the use of magic items, class abilities, and so on."
  },
  {
    "name": "Dark Sight",
    "type": "General",
    "description": "With further modification, your eyes can pierce the gloom of even magical darkness.",
    "prerequisites": ["Gloom Sight","fetchling"],
    "prerequisitesFeats": ["Gloom Sight","fetchling"],
    "benefit": "You gain the ability to see up to 15 feet clearly in magical darkness, such as that created by the deeper darkness spell."
  },
  {
    "name": "Gloom Sight",
    "type": "General",
    "description": "With a combination of strange shadow magic and chirurgery, your eyes are permanently modified to see farther in darkness.",
    "prerequisites": ["Fetchling"],
    "prerequisitesFeats": ["Fetchling"],
    "benefit": "You gain darkvision 90 ft., but gain the light sensitivity weakness (Bestiary 301)."
  },
  {
    "name": "Gloom Strike",
    "type": "Combat",
    "description": "Few creatures are as accustomed to fighting in the shadows as you.",
    "prerequisites": ["Blind-Fight","fetchling"],
    "prerequisitesFeats": ["Blind-Fight","fetchling"],
    "benefit": "When you are within an area of dim light or darkness, you gain a +1 bonus on attack rolls against enemies that are also within dim light or darkness."
  },
  {
    "name": "Improved Dark Sight",
    "type": "General",
    "description": "With further modification, your eyes see clearly in not only normal darkness, but in magical darkness as well.",
    "prerequisites": ["Dark Sight","Gloom Sight","fetchling"],
    "prerequisitesFeats": ["Dark Sight","Gloom Sight","fetchling"],
    "benefit": "You gain the see in darkness ability (Bestiary 2 301) and lose the light sensitivity weakness, but gain the light blindness weakness (Bestiary 301)."
  },
  {
    "name": "Shadow Ghost",
    "type": "General",
    "description": "You can move between the Shadow Plane and the Material Plane more often.",
    "prerequisites": ["Fetchling","shadow walk spell-like ability"],
    "prerequisitesFeats": ["Fetchling","shadow walk spell-like ability"],
    "benefit": "You gain the ability to use shadow walk an additional time each day."
  },
  {
    "name": "Shadow Walker",
    "type": "General",
    "description": "You can pierce the veil between the Shadow Plane and the Material Plane more often, and to greater effect.",
    "prerequisites": ["Fetchling","shadow walk spell-like ability"],
    "prerequisitesFeats": ["Fetchling","shadow walk spell-like ability"],
    "benefit": "You can expend one use of your shadow walk spell-like ability to use dimension door as a spell-like ability. Your start and end locations for this ability must be in dim light or darkness."
  },
  {
    "name": "Burn! Burn! Burn!",
    "type": "General",
    "description": "You take the goblin love of arson and fire play to a whole new level.",
    "prerequisites": ["Disable Device 1 rank","goblin"],
    "prerequisitesFeats": ["Disable Device 1 rank","goblin"],
    "benefit": "You deal an extra 1d4 points of fire damage when you attack with fire from an alchemical or nonmagical source (such as with alchemical fire or torches) and gain a +4 competence bonus on Ref lex saving throws made to avoid catching on fire or to put yourself out when on fire. Additional damage caused by this feat does not apply to magical attacks (such as an alchemist's bomb) or to splash damage."
  },
  {
    "name": "Fire Hand",
    "type": "Combat",
    "description": "Born with a torch in your hand, you have a gift with anything that burns.",
    "prerequisites": ["Goblin"],
    "prerequisitesFeats": ["Goblin"],
    "benefit": "You can wield a torch as a weapon without taking the nonproficient penalty and gain a +1 bonus on attack rolls with melee weapons that deal fire damage."
  },
  {
    "name": "Fire Tamer",
    "type": "General",
    "description": "You know your way around even magical fire.",
    "prerequisites": ["Goblin"],
    "prerequisitesFeats": ["Goblin"],
    "benefit": "You gain a +2 bonus on saves against spells with the fire descriptor. Additionally, your scars mark you as a talented fire tamer, granting you a +2 circumstance bonus on Diplomacy and Intimidate checks when dealing with other goblins."
  },
  {
    "name": "Flame Heart",
    "type": "General",
    "description": "You have mastered fire magic and alchemy.",
    "prerequisites": ["Fire Tamer","character level 5th","goblin"],
    "prerequisitesFeats": ["Fire Tamer","character level 5th","goblin"],
    "benefit": "You gain fire resistance 5. When casting spells with the fire descriptor or throwing alchemist bombs that deal fire damage, treat your caster level or alchemist level as if you were 1 level higher."
  },
  {
    "name": "Goblin Gunslinger",
    "type": "Combat",
    "description": "You have learned how to fire the big guns.",
    "prerequisites": ["Goblin"],
    "prerequisitesFeats": ["Goblin"],
    "benefit": "You can wield Medium firearms without taking the penalty for an inappropriately sized weapon."
  },
  {
    "name": "Tangle Feet",
    "type": "Combat",
    "description": "Creatures who cross your path find themselves tripping over their own feet.",
    "prerequisites": ["Dodge","Mobility","Underfoot (Advanced Player's Guide 173)","goblin","Small size or smaller"],
    "prerequisitesFeats": ["Dodge","Mobility","Underfoot (Advanced Player's Guide 173)","goblin","Small size or smaller"],
    "benefit": "When you successfully make an Acrobatics check to avoid provoking an attack of opportunity from a larger opponent when you move through its threatened area or its space, you can make that opponent lose its balance until the end of its next turn as a free action. While that creature's balance is lost, if it attempts to move, it must make a successful DC 15 Acrobatics check or fall prone, wasting the move action. You can only affect one creature with this effect each round."
  },
  {
    "name": "Deafening Explosion",
    "type": "General",
    "description": "Your bombs explode with deafening force.",
    "prerequisites": ["Bomb class feature","hobgoblin"],
    "prerequisitesFeats": ["Bomb class feature","hobgoblin"],
    "benefit": "You may reduce your bomb damage by one die to give it the ability to deafen the creature struck by it. The bomb must deal fire, force, or sonic damage. If a creature takes a direct hit from your bomb, it must make a saving throw against the bomb's DC or be deafened for 1 minute. This deafening is in addition to any other effects the bomb would normally have."
  },
  {
    "name": "Demoralizing Lash",
    "type": "Combat",
    "description": "You cow your enemies with the lash of a whip.",
    "prerequisites": ["Base attack bonus +1","Intimidate 1 rank","hobgoblin"],
    "prerequisitesFeats": ["Base attack bonus +1","Intimidate 1 rank","hobgoblin"],
    "benefit": "To use this feat, you must use a whip (or another weapon in the flails fighter weapon group) to attack a foe demoralized by an Intimidate check. If the attack hits, you extend the duration the creature is shaken by 1 round. This feat has no effect on creatures whose shaken conditions are from sources other than Intimidate checks."
  },
  {
    "name": "Focusing Blow",
    "type": "General",
    "description": "You and your allies work together to shake off mental effects.",
    "prerequisites": ["Hobgoblin Discipline","hobgoblin"],
    "prerequisitesFeats": ["Hobgoblin Discipline","hobgoblin"],
    "benefit": "An ally who also has this feat can deal damage to you in order to break an ongoing mind-affecting effect that allows a saving throw. The ally must cause at least 5 points of damage to you with an attack, spell, or other ability. You then reroll your saving throw, with a +1 bonus for every 5 additional points of damage the attack caused. If your save is successful, the mind-affecting effect ends. Only damage actually dealt counts for purposes of this feat; nonlethal damage and damage reduced or eliminated by damage reduction, resistances, and so on does not qualify."
  },
  {
    "name": "Hobgoblin Discipline",
    "type": "General",
    "description": "The presence of other hobgoblins bolsters your resolve.",
    "prerequisites": ["Base attack bonus +1","hobgoblin"],
    "prerequisitesFeats": ["Base attack bonus +1","hobgoblin"],
    "benefit": "While you are within 30 feet of at least two other hobgoblins, you gain a +1 morale bonus on saving throws."
  },
  {
    "name": "Taskmaster",
    "type": "Combat",
    "description": "You intimidate weaker allies into reckless ferocity.",
    "prerequisites": ["Demoralizing Lash","Intimidate 5 ranks","hobgoblin"],
    "prerequisitesFeats": ["Demoralizing Lash","Intimidate 5 ranks","hobgoblin"],
    "benefit": "As a standard action, you spur an ally, who must have fewer Hit Dice than yourself, to reckless effort. For 1 minute, the ally gains a +1 morale bonus on attack rolls, weapon damage rolls, and Will saves against mind-affecting effects. However, the ally also takes a -2 penalty to AC and on skill checks. To affect an unwilling ally, you must succeed at an Intimidate check with the same DC used to demoralize your ally."
  },
  {
    "name": "Terrorizing Display",
    "type": "Combat",
    "description": "Your battle prowess frightens friend and foe alike.",
    "prerequisites": ["Dazzling Display","Demoralizing Lash","Taskmaster","Weapon Focus","Intimidate 10 ranks","hobgoblin","proficiency with selected weapon"],
    "prerequisitesFeats": ["Dazzling Display","Demoralizing Lash","Taskmaster","Weapon Focus","Intimidate 10 ranks","hobgoblin","proficiency with selected weapon"],
    "benefit": "When you use Dazzling Display, in addition to its normal effects, you can use it to spur allies within 30 feet as if you had used the Taskmaster feat. Use the same Intimidate check to determine the effects of Dazzling Display and this feat."
  },
  {
    "name": "Blazing Aura",
    "type": "Combat",
    "description": "An inferno rages inside you, causing your body to radiate intense heat.",
    "prerequisites": ["Inner Flame","Scorching Weapons","character level 13th","ifrit"],
    "prerequisitesFeats": ["Inner Flame","Scorching Weapons","character level 13th","ifrit"],
    "benefit": "When you use Scorching Weapons, on your turn as a free action, you may create an aura of heat that lasts for 1 round. This aura deals 1d6 points of fire damage to any creature that begins its turn adjacent to you."
  },
  {
    "name": "Blistering Feint",
    "type": "Combat",
    "description": "Your foes flinch from the heat of your weapon, giving you an opportunity to slip past their defenses.",
    "prerequisites": ["Combat Expertise","Improved Feint","ifrit"],
    "prerequisitesFeats": ["Combat Expertise","Improved Feint","ifrit"],
    "benefit": "You gain a +2 bonus on feint checks made while wielding a weapon that deals fire damage. Anytime you successfully feint a creature while using such a weapon, you may deal its fire damage to the enemy."
  },
  {
    "name": "Elemental Jaunt",
    "type": "General",
    "description": "The spirits of your ancestral home call to you, beckoning you to return.",
    "prerequisites": ["Character level 15th","ifrit","oread","sylph","or undine"],
    "prerequisitesFeats": ["Character level 15th","ifrit","oread","sylph","or undine"],
    "benefit": "Once per day, you can cast plane shift as a spell-like ability with a caster level equal to your level to transport yourself and willing targets to an elemental plane that is appropriate to your race (ifrits to the Plane of Fire, oreads to the Plane of Earth, sylphs to the Plane of Air, and undines to the Plane of Water). While on that plane, you (but not anyone transported with you) are treated as though under the effect of the spell planar adaptation (Advanced Player's Guide 236)."
  },
  {
    "name": "Firesight",
    "type": "General",
    "description": "Fire no longer blinds you, and smoke conceals nothing from your gaze.",
    "prerequisites": ["Ifrit"],
    "prerequisitesFeats": ["Ifrit"],
    "benefit": "You can see through fire and smoke without penalty, ignoring any cover or concealment bonuses from fire and smoke. This does not allow you to see anything you could not otherwise see (for example, invisible creatures are still invisible). You are immune to the dazzled condition."
  },
  {
    "name": "Inner Flame",
    "type": "Combat",
    "description": "Your body generates so much heat that your mere touch scorches your enemies.",
    "prerequisites": ["Scorching Weapons","character level 7th","ifrit"],
    "prerequisitesFeats": ["Scorching Weapons","character level 7th","ifrit"],
    "benefit": "Your bonus on saves against fire attacks and spells with the fire descriptor or light descriptor increases to +4. When you use Scorching Weapons, the affected weapons deal an additional 1d6 points of fire damage instead of 1, and when you are grappling, you deal this damage to your grappling opponent on your turn."
  },
  {
    "name": "Scorching Weapons",
    "type": "Combat",
    "description": "Elemental fire stirs within your body, boiling your blood and rendering you resistant to flame.",
    "prerequisites": ["Ifrit"],
    "prerequisitesFeats": ["Ifrit"],
    "benefit": "You gain a +2 bonus on saving throws against fire attacks and spells with the fire descriptor or light descriptor. As a swift action, you can make up to two held manufactured metallic weapons become red-hot for 1 round, dealing 1 additional point of fire damage with a successful hit. This does not stack with other effects that add fire damage to weapons, such as the flaming weapon special ability."
  },
  {
    "name": "Draconic Aspect",
    "type": "General",
    "description": "You possess some of the qualities of your dragon ancestors.",
    "prerequisites": ["Kobold"],
    "prerequisitesFeats": ["Kobold"],
    "benefit": "Your scales take on the color and some of the resistances of one of the chromatic dragons. Choose one of the following chromatic dragon types: black (acid), blue (electricity), green (acid), red (fire), or white (cold). Your scales take on the color of that dragon, and you gain resistance 5 to the dragon color's corresponding energy type."
  },
  {
    "name": "Draconic Breath",
    "type": "General",
    "description": "You possess draconic defenses and a draconic breath weapon.",
    "prerequisites": ["Draconic Aspect","kobold"],
    "prerequisitesFeats": ["Draconic Aspect","kobold"],
    "benefit": "You gain a +2 bonus against sleep and paralysis effects. You gain a breath weapon that is determined by your scale coloration by either the Draconic Aspect feat or the dragon-scaled racial trait. Using a breath weapon is a standard action that does not provoke attacks of opportunity. You can use your breath weapon once per day. Creatures within the area of your breath weapon who succeed at a Reflex saving throw (DC 10 + your character level + your Constitution modifier) take only half damage. Black (Su): You breathe a 30-foot line of acid that deals 2d6 points of acid damage. Blue (Su): You breathe a 30-foot line of electricity that deals 2d6 points of electricity damage. Green (Su): You breathe a 15-foot cone of acid that deals 2d6 points of acid damage. Red (Su): You breathe a 15-foot cone of fire that deals 2d6 points of fire damage. White (Su): You breathe a 15-foot cone of cold that deals 2d6 points of cold damage."
  },
  {
    "name": "Draconic Glide",
    "type": "General",
    "description": "You possess draconic defenses and wings that allow you to glide.",
    "prerequisites": ["Draconic Aspect","kobold"],
    "prerequisitesFeats": ["Draconic Aspect","kobold"],
    "benefit": "You gain a +2 bonus against sleep and paralysis effects. You grow a pair of wings that you can use to fall and glide at a safe pace. You can make a DC 15 Fly check to fall safely from any height without taking falling damage, as if using feather fall. When falling safely, you may make an additional DC 15 Fly check to glide, moving 5 feet laterally for every 20 feet you fall."
  },
  {
    "name": "Draconic Paragon",
    "type": "General",
    "description": "You can shrug off sleep and paralysis effects as well as any dragon, and your draconic aspects improve.",
    "prerequisites": ["Draconic Aspect","either Draconic Breath or Draconic Glide","character level 10th","kobold"],
    "prerequisitesFeats": ["Draconic Aspect","either Draconic Breath or Draconic Glide","character level 10th","kobold"],
    "benefit": "You gain an additional +2 bonus against sleep and paralysis effects. You can use your breath weapon twice per day and your breath weapon damage increases to 4d6 points of energy damage. Your wings from the Draconic Glide feat grow stronger, granting you a fly speed of 20 feet (average maneuverability)."
  },
  {
    "name": "Kobold Ambusher",
    "type": "Combat",
    "description": "You are adept at moving fast and staying hidden.",
    "prerequisites": ["Stealth 4 ranks","kobold"],
    "prerequisitesFeats": ["Stealth 4 ranks","kobold"],
    "benefit": "You take no penalty on Stealth checks when you move up to your full speed. You can use the run or charge action and remain hidden, taking a -10 penalty on the check to do so."
  },
  {
    "name": "Kobold Sniper",
    "type": "Combat",
    "description": "You snipe quickly, making it harder for others to find the location of your attack.",
    "prerequisites": ["Stealth 1 rank","kobold"],
    "prerequisitesFeats": ["Stealth 1 rank","kobold"],
    "benefit": "When you are sniping, you only take a -10 penalty on your Stealth checks to stay hidden."
  },
  {
    "name": "Tail Terror",
    "type": "Combat",
    "description": "You have strengthened your tail enough to make slap attacks with it.",
    "prerequisites": ["Base attack bonus +1","kobold"],
    "prerequisitesFeats": ["Base attack bonus +1","kobold"],
    "benefit": "You can make a tail slap attack with your tail. This is a secondary natural attack that deals 1d4 points of bludgeoning damage. Furthermore, you can augment your tail slap attack with a kobold tail attachment. For the purpose of weapon feats, you are considered proficient with all kobold tail attachments."
  },
  {
    "name": "Born Alone",
    "type": "General",
    "description": "You are so tough and vicious that you killed and ate the rest of your litter while still in the womb.",
    "prerequisites": ["Orc"],
    "prerequisitesFeats": ["Orc"],
    "benefit": "Whenever you kill or knock unconscious an opponent with a melee attack, you gain temporary hit points equal to your Constitution bonus (minimum 1) until your next turn. These temporary hit points do not stack. You do not gain this bonus if the opponent is helpless or has less than half your Hit Dice."
  },
  {
    "name": "Bullying Blow",
    "type": "Combat",
    "description": "With a simple hit, you more easily intimidate an opponent.",
    "prerequisites": ["Intimidate 1 rank","orc"],
    "prerequisitesFeats": ["Intimidate 1 rank","orc"],
    "benefit": "As a standard action, you may make a melee attack with a -2 penalty on the attack roll. If the attack damages your opponent, you may make an Intimidate check to demoralize that opponent as a free action."
  },
  {
    "name": "Ferocious Action",
    "type": "General",
    "description": "You ferocity is quick but shorter lived.",
    "prerequisites": ["Ferocity racial trait","orc"],
    "prerequisitesFeats": ["Ferocity racial trait","orc"],
    "benefit": "When you fall to 0 hit points or fewer, you lose 2 hit points each round, but you are not staggered. If you are in a rage (such as that caused by the barbarian rage class feature), you instead only lose 1 hit point per round."
  },
  {
    "name": "Foment the Blood",
    "type": "General",
    "description": "You can unleash a wave of energy that drives orcs into a frenzy.",
    "prerequisites": ["Channel energy class feature","orc"],
    "prerequisitesFeats": ["Channel energy class feature","orc"],
    "benefit": "When you channel energy, instead of creating its normal effect, you can give orcs a bonus on weapon damage and critical hit conf irmation rolls until your next turn. This bonus is equal to the number of dice your channeled energy normally heals or harms. Your channel has its normal effect on other creatures in the area."
  },
  {
    "name": "Grudge Fighter",
    "type": "Combat",
    "description": "You feel great anger at anyone who dares to attack you, and this fury makes your own attacks that much stronger.",
    "prerequisites": ["Orc"],
    "prerequisitesFeats": ["Orc"],
    "benefit": "You gain a +1 morale bonus on attack and damage rolls made against any creature that attacked you in the current combat."
  },
  {
    "name": "Orc Weapon Expertise",
    "type": "Combat",
    "description": "You can do more with the weapons orcs favor the most.",
    "prerequisites": ["Base attack bonus +1","orc"],
    "prerequisitesFeats": ["Base attack bonus +1","orc"],
    "benefit": "When you take this feat, choose one of the benefits below. Whenever you wield a weapon that has \"orc\" in its name, you gain the benefit you chose so long as you are actually proficient with that weapon. Bully: Gain a +1 bonus on damage rolls against creatures at least one size smaller than you. Defender: Gain a +1 shield bonus to your AC (or +2 if wielding a two-handed weapon). Disrupter: Add +3 to opponents' concentration checks to cast a spell within your threatened area. This only applies if you are aware of the enemy's location and are capable of taking an attack of opportunity. If you have already used all of your available attacks of opportunity for the round, this increase does not apply. Killer: Gain a +2 competence bonus on attack rolls made to confirm critical hits. Thug: Deal +1 point of nonlethal damage with the weapon. Trickster: Gain a +2 bonus on a single type of combat maneuver check that you can perform with that weapon. This feat has no effect if you are not proficient with the weapon you're using."
  },
  {
    "name": "Resolute Rager",
    "type": "General",
    "description": "Fear passes quickly while you are raging.",
    "prerequisites": ["Orc","rage class feature"],
    "prerequisitesFeats": ["Orc","rage class feature"],
    "benefit": "While raging, when under the effect of a fear effect that allows a saving throw, you can make a new saving throw against that fear effect at the start of each of your turns before acting. If you make the new save, the fear effect ends."
  },
  {
    "name": "Reverse-Feint",
    "type": "Combat",
    "description": "You can goad an opponent into attacking you in order to make your counter attack all the more powerful.",
    "prerequisites": ["Toughness","base attack bonus +1","orc"],
    "prerequisitesFeats": ["Toughness","base attack bonus +1","orc"],
    "benefit": "As a move action, you can leave a gap in your defenses for one adjacent opponent to use. If the opponent attacks you on its next turn, it gains a +4 bonus on its attack roll. Whether or not the opponent successfully hits, you may attack it as an immediate action with a single melee attack, gaining a +2 bonus on your attack roll."
  },
  {
    "name": "Trap Wrecker",
    "type": "General",
    "description": "You can smash traps instead of disarming them.",
    "prerequisites": ["Power Attack","Disable Device 1 rank","orc"],
    "prerequisitesFeats": ["Power Attack","Disable Device 1 rank","orc"],
    "benefit": "You can attempt to disarm a trap by striking it with a melee weapon instead of making a Disable Device check. As a full-round action, make a melee attack against an Armor Class equal to the trap's Disable Device DC. If you miss, the trap activates. If you hit, roll damage. If this damage is at least half the trap's Disable Device DC, you disable the trap. If this damage is less than half the trap's Disable Device DC, the trap activates. You can only attempt this on nonmagical traps. You must be able to reach some part of the trap with your attack in order to use this feat. At the GM's discretion, some traps may not be susceptible to this feat."
  },
  {
    "name": "Dwarf Blooded",
    "type": "General",
    "description": "You have dwarven blood coursing through your veins.",
    "prerequisites": ["Oread"],
    "prerequisitesFeats": ["Oread"],
    "benefit": "Your dwarven heritage manifests in two ways. First, your speed is never modified by armor or encumbrance, as the dwarf slow and steady racial trait. Second, you gain the stonecunning dwarf racial trait."
  },
  {
    "name": "Echoes of Stone",
    "type": "General",
    "description": "Your senses are keener among the rocks and stones.",
    "prerequisites": ["Oread"],
    "prerequisitesFeats": ["Oread"],
    "benefit": "You gain a +4 racial bonus on Perception checks underground, and on Survival checks to avoid becoming lost in caverns and rocky areas."
  },
  {
    "name": "Murmurs of Earth",
    "type": "General",
    "description": "The earth opens up her secrets to your perceptions.",
    "prerequisites": ["Echoes of Stone","character level 9th","oread"],
    "prerequisitesFeats": ["Echoes of Stone","character level 9th","oread"],
    "benefit": "You gain a limited form of tremorsense. As a move action, you become aware of all creatures within 15 feet that are in contact with the ground at that moment."
  },
  {
    "name": "Oread Burrower",
    "type": "General",
    "description": "The ground parts for you at the slightest touch, allowing you to dig with great speed.",
    "prerequisites": ["Stony Step","character level 9th","oread"],
    "prerequisitesFeats": ["Stony Step","character level 9th","oread"],
    "benefit": "You gain a burrow speed equal to 1/2 your base speed. You can burrow through sand, dirt, clay, gravel, or similar materials, but not solid stone. You do not leave a hole behind, nor is your passage marked on the surface."
  },
  {
    "name": "Oread Earth Glider",
    "type": "General",
    "description": "The earth welcomes you, showing you the secret paths through sand and soil.",
    "prerequisites": ["Oread Burrower","Stony Step","character level 13th","oread"],
    "prerequisitesFeats": ["Oread Burrower","Stony Step","character level 13th","oread"],
    "benefit": "You gain the earth glide universal monster ability and can use it to travel at your full base speed through sand, dirt, clay, gravel, or similar materials. If protected against fire damage, you can even burrow through lava. You can burrow through solid stone at 1/2 your base speed."
  },
  {
    "name": "Stony Step",
    "type": "General",
    "description": "The earth recognizes its kinship with you and does not impede your movement.",
    "prerequisites": ["Oread"],
    "prerequisitesFeats": ["Oread"],
    "benefit": "Whenever you move, you may move through 5 feet of earth- or stone-based difficult terrain (rubble, stone stairs, and so on) each round as if it were normal terrain. The effects of this feat stack with similar feats such as Acrobatic Steps and Nimble Moves. This feat allows you to take a 5-foot step into this kind of difficult terrain."
  },
  {
    "name": "Burrowing Teeth",
    "type": "General",
    "description": "You have teeth and claws that suit you well to digging.",
    "prerequisites": ["Sharpclaw","Tunnel Rat","ratfolk"],
    "prerequisitesFeats": ["Sharpclaw","Tunnel Rat","ratfolk"],
    "benefit": "You gain a burrow speed equal to 1/2 your base speed. You can burrow through sand, dirt, clay, gravel, or similar materials, but not solid stone. You do not leave a hole behind, nor is your passage marked on the surface."
  },
  {
    "name": "Sharpclaw",
    "type": "Combat",
    "description": "Your nails are large and strong.",
    "prerequisites": ["Ratfolk"],
    "prerequisitesFeats": ["Ratfolk"],
    "benefit": "You gain two claw attacks. These are primary natural attacks that deal 1d4 points of damage."
  },
  {
    "name": "Tunnel Rat",
    "type": "General",
    "description": "You are a master of fighting in confined spaces.",
    "prerequisites": ["Ratfolk","swarming racial trait"],
    "prerequisitesFeats": ["Ratfolk","swarming racial trait"],
    "benefit": "You count as one size smaller than normal for the purpose of squeezing."
  },
  {
    "name": "Airy Step",
    "type": "General",
    "description": "The air responds to your innate elemental nature, protecting you from harm and cushioning your falls.",
    "prerequisites": ["Sylph"],
    "prerequisitesFeats": ["Sylph"],
    "benefit": "You gain a +2 bonus on saving throws against effects with the air or electricity descriptors and effects that deal electricity damage. You may ignore the first 30 feet of any fall when determining falling damage."
  },
  {
    "name": "Cloud Gazer",
    "type": "General",
    "description": "Your insight into your elemental heritage gives you a clarity of sight few humans possess.",
    "prerequisites": ["Sylph"],
    "prerequisitesFeats": ["Sylph"],
    "benefit": "You can see through fog, mist, and clouds, without penalty, ignoring any cover or concealment bonuses from such effects. If the effect is created by magic, this feat instead triples the distance you can see without penalty."
  },
  {
    "name": "Inner Breath",
    "type": "General",
    "description": "Your body is suffused with elemental air that provides for all your respiratory needs.",
    "prerequisites": ["Character level 11th","sylph"],
    "prerequisitesFeats": ["Character level 11th","sylph"],
    "benefit": "You no longer need to breathe. You are immune to effects that require breathing (such as inhaled poison). This does not give you immunity to cloud or gas attacks that do not require breathing, such as cloudkill."
  },
  {
    "name": "Wings of Air",
    "type": "General",
    "description": "The winds lift you, carrying you where you want to go.",
    "prerequisites": ["Airy Step","character level 9th","sylph"],
    "prerequisitesFeats": ["Airy Step","character level 9th","sylph"],
    "benefit": "Your bonus on saves against effects with the air or electricity descriptors and effects that deal electricity damage increases to +4. In addition, you gain a supernatural fly speed equal to your base speed (good maneuverability). You may only fly with this ability when wearing light armor or no armor."
  },
  {
    "name": "Blood Beak",
    "type": "Combat",
    "description": "Your bleed attack is bloody and dangerous.",
    "prerequisites": ["Base attack bonus +5","natural weapon racial trait","tengu"],
    "prerequisitesFeats": ["Base attack bonus +5","natural weapon racial trait","tengu"],
    "benefit": "Increase the damage of your beak attack to 1d6. Furthermore, when you confirm a critical hit with your beak attack, you also deal 1 point of bleed damage."
  },
  {
    "name": "Carrion Feeder",
    "type": "General",
    "description": "Like many scavengers, you can stomach foods that would make weaker creatures ill.",
    "prerequisites": ["Tengu"],
    "prerequisitesFeats": ["Tengu"],
    "benefit": "You gain a +2 racial bonus on saving throws against diseases and ingested poisons (but not other poisons). You receive a +2 bonus on Survival skill checks to find food for yourself (and only yourself )."
  },
  {
    "name": "Long-Nose Form",
    "type": "General",
    "description": "You can shift into the form of a human with an unusually long nose.",
    "prerequisites": ["Character level 3rd","tengu"],
    "prerequisitesFeats": ["Character level 3rd","tengu"],
    "benefit": "Once per day, you can assume the form of a human whose nose is the length of your beak. This spell-like ability functions as alter self with a caster level equal to your level. While in this form you gain the scent ability and a +2 bonus to your Strength score. Because your long nose in this form clearly indicates you are not fully human, you do not gain the normal bonus to Disguise checks for using a polymorph effect (however, you could possibly explain the nose as an unfortunate curse or deformity, or hide it with an item such as a plague doctor's mask)."
  },
  {
    "name": "Scavenger's Eye",
    "type": "General",
    "description": "Your gaze is naturally drawn to valuable glittering objects.",
    "prerequisites": ["Tengu"],
    "prerequisitesFeats": ["Tengu"],
    "benefit": "You gain a +2 bonus on Appraise checks. You may determine the most valuable item in a hoard as a standard action and gain an additional +2 bonus on the Appraise check to do so. In addition, if you fail an Appraise check by 5 or more, you treat the check as if you had failed by less than 5."
  },
  {
    "name": "Tengu Raven Form",
    "type": "General",
    "description": "You can shift into the form of a giant black raven.",
    "prerequisites": ["Tengu Wings","character level 7th","tengu"],
    "prerequisitesFeats": ["Tengu Wings","character level 7th","tengu"],
    "benefit": "Once per day, you can take the form of a Large black bird resembling a raven, granting you a fly speed of 60 feet (good maneuverability), a +4 size bonus to your Strength, a -2 penalty to your Dexterity, and a +4 natural armor bonus. This spell-like ability otherwise functions as beast shape II with a caster level equal to your level."
  },
  {
    "name": "Tengu Wings",
    "type": "General",
    "description": "You can grow wings that allow you to fly.",
    "prerequisites": ["Character level 5th","tengu"],
    "prerequisitesFeats": ["Character level 5th","tengu"],
    "benefit": "Once per day, you can sprout a pair of giant black crow's wings, granting you a fly speed of 30 feet (average maneuverability). This spell-like ability otherwise functions as beast shape I (though you do not gain any other benefits of that spell) with a caster level equal to your level."
  },
  {
    "name": "Armor of the Pit",
    "type": "General",
    "description": "Your fiendish traits take the form of a protective scaly skin.",
    "prerequisites": ["Tiefling"],
    "prerequisitesFeats": ["Tiefling"],
    "benefit": "You gain a +2 natural armor bonus."
  },
  {
    "name": "Expanded Fiendish Resistance",
    "type": "General",
    "description": "You gain extra fiendish resistances.",
    "prerequisites": ["Tiefling"],
    "prerequisitesFeats": ["Tiefling"],
    "benefit": "Pick one of the following energy types that you do not already have resistance to: acid, cold, electricity, or fire. You gain resistance 5 to that energy type."
  },
  {
    "name": "Fiend Sight",
    "type": "General",
    "description": "Your eyes develop keener sight in dim light and darkness.",
    "prerequisites": ["Darkvision 60 ft","tiefling"],
    "prerequisitesFeats": ["Darkvision 60 ft","tiefling"],
    "benefit": "You gain low-light vision and your darkvision improves to 120 ft."
  },
  {
    "name": "Grasping Tail",
    "type": "General",
    "description": "Your tail becomes more useful.",
    "prerequisites": ["Tiefling"],
    "prerequisitesFeats": ["Tiefling"],
    "benefit": "You can use your tail to grab stowed items. While you cannot wield weapons with your tail, you can use it to retrieve small, stowed objects carried on your person as a swift action."
  },
  {
    "name": "Aquatic Ancestry",
    "type": "General",
    "description": "You favor your outsider ancestry and are better adapted to life in the water.",
    "prerequisites": ["Undine"],
    "prerequisitesFeats": ["Undine"],
    "benefit": "You gain the amphibious special quality. Your swim speed increases by +10 feet."
  },
  {
    "name": "Hydraulic Maneuver",
    "type": "General",
    "description": "You can use your hydraulic push to disarm or trip.",
    "prerequisites": ["Hydraulic push spell-like ability","undine"],
    "prerequisitesFeats": ["Hydraulic push spell-like ability","undine"],
    "benefit": "You may use hydraulic push to attempt a bull rush, disarm, dirty trick (blind or dazzle, see Advanced Player's Guide), or trip combat maneuver. Each time you use hydraulic push, you must decide which of the allowed combat maneuvers you want to perform. You may use this feat with your hydraulic push racial spell-like ability, your class-granted use of hydraulic push, or any hydraulic push spells you cast, but not with magic items or other external sources that use that spell."
  },
  {
    "name": "Steam Caster",
    "type": "General",
    "description": "You imbue your fire spells with elemental water, transforming them into powerful gouts of steam.",
    "prerequisites": ["Undine"],
    "prerequisitesFeats": ["Undine"],
    "benefit": "You may increase the casting time of a fire spell to a full-round action, infusing it with elemental power (spells with a casting time of 1 full-round action or longer do not have an increased casting time). The spell is treated as if it had the water descriptor. All fire effects of the altered spell instead manifest as superheated steam. The altered spell works normally underwater without requiring a caster level check. Unlike fire, the steam cannot ignite objects or set creatures on fire. As the spell still deals fire damage, fire resistance or immunity still applies to the spell's effects."
  },
  {
    "name": "Triton Portal",
    "type": "General",
    "description": "You can channel your inner magic to summon allies.",
    "prerequisites": ["Character level 5th","hydraulic push spell-like ability","undine"],
    "prerequisitesFeats": ["Character level 5th","hydraulic push spell-like ability","undine"],
    "benefit": "Once per day, you may expend your racial hydraulic push ability to instead cast summon nature's ally III as a spell-like ability with a caster level equal to your character level. This use of the ability can only summon a Small water elemental or 1d3 dolphins. Using this ability is a full-round action."
  },
  {
    "name": "Water Skinned",
    "type": "General",
    "description": "Your touch extinguishes small flames.",
    "prerequisites": ["Undine"],
    "prerequisitesFeats": ["Undine"],
    "benefit": "As a standard action, you can extinguish a small nonmagical fire with a touch, affecting anything up to the size of a large campfire. This ability does not affect fires with a total area greater than 5 square feet. Touching the fire in this way does not harm you."
  },
  {
    "name": "Mother's Gift",
    "type": "General",
    "description": "You inherit a special boon from your hag parent.",
    "prerequisites": ["Changeling"],
    "prerequisitesFeats": ["Changeling"],
    "benefit": "Your dark legacy manifests in one of the following ways. You choose the manifestation when you choose the feat, and once selected it cannot be changed. Hag Claws (Ex): You gain a +1 bonus on attack and damage rolls with your claws. Surprisingly Tough (Ex): Your natural armor bonus increases by +1. Uncanny Resistance (Su): You gain spell resistance equal to 6 + your character level."
  },
  {
    "name": "Giant Steps",
    "type": "General",
    "description": "When enlarged, your speed increases.",
    "prerequisites": ["Duergar","slow and steady racial trait"],
    "prerequisitesFeats": ["Duergar","slow and steady racial trait"],
    "benefit": "When your size increases to Large or larger, your base speed increases by 20 feet. This increase applies only if the effect that changed your size does not alter your speed."
  },
  {
    "name": "Lingering Invisibility",
    "type": "General",
    "description": "You remain brief ly translucent after losing invisibility.",
    "prerequisites": ["Duergar"],
    "prerequisitesFeats": ["Duergar"],
    "benefit": "When your invisibility ends, you gain concealment for 1 round per minute of duration the invisibility effect had remaining (minimum 1 round). This only occurs if the invisibility is from your racial spell-like ability or a spell you cast. Effects that negate invisibility negate this concealment."
  },
  {
    "name": "Agile Tongue",
    "type": "General",
    "description": "Your long pink tongue is capable of manipulating small items and even stealing objects.",
    "prerequisites": ["Grippli"],
    "prerequisitesFeats": ["Grippli"],
    "benefit": "You have a prehensile tongue with a range of 10 feet. You can pick up items weighing no more than 5 pounds, make Sleight of Hand checks, perform the steal or disarm combat maneuvers, or make melee touch attacks with your tongue."
  },
  {
    "name": "Magical Tail",
    "type": "General",
    "description": "You grow an extra tail that represents your growing magical powers.",
    "prerequisites": ["Kitsune"],
    "prerequisitesFeats": ["Kitsune"],
    "benefit": "You gain a new spell-like ability, each usable twice per day, from the following list, in order: disguise self, charm person, misdirection, invisibility, suggestion, displacement, confusion, dominate person. For example, the first time you select this feat, you gain disguise self 2/day; the second time you select this feat, you gain charm person 2/day. Your caster level for these spells is equal to your Hit Dice. The DCs for these abilities are Charisma-based."
  },
  {
    "name": "Realistic Likeness",
    "type": "General",
    "description": "When you are in human form, you can take the shape of a specific individual.",
    "prerequisites": ["Kitsune"],
    "prerequisitesFeats": ["Kitsune"],
    "benefit": "You can precisely mimic the physical features of any individual you have encountered. When you use your racial change shape ability, you can attempt to take the form of an individual, granting you a +10 circumstance bonus on Disguise checks made to fool others with your impersonation."
  },
  {
    "name": "Sea Hunter",
    "type": "Combat",
    "description": "Your blows knock swimming opponents off balance.",
    "prerequisites": ["Combat Expertise","merfolk"],
    "prerequisitesFeats": ["Combat Expertise","merfolk"],
    "benefit": "When you make a successful melee attack against a swimming target, as a free action you can attempt to knock the target off balance. Treat this as a trip combat maneuver. If you succeed, the target is considered off balance (see Table 13-7: Combat Adjustments Underwater on page 433 of the Core Rulebook) until it recovers its balance, usually by making a Swim check on its turn. This feat has no effect on creatures with a swim speed, those using magic such as freedom of movement, and creatures that can't be tripped."
  },
  {
    "name": "Spit Venom",
    "type": "Combat",
    "description": "You have mastered the nagaji warrior technique of spitting venom into your opponent's eyes.",
    "prerequisites": ["Nagaji"],
    "prerequisitesFeats": ["Nagaji"],
    "benefit": "As a full-round action, you can spit poison up to 10 feet as a ranged touch attack. If you hit, the target must make a successful Fortitude save or be blinded for 1d6 rounds. The DC of this save is equal to 10 + 1/2 your total Hit Dice + your Constitution modifier. You can use this ability once per day plus one additional time per day for every three Hit Dice you have."
  },
  {
    "name": "Life's Blood",
    "type": "General",
    "description": "Your blood flows with eternal life, and its healing powers allow you use your blood to heal others.",
    "prerequisites": ["Samsaran"],
    "prerequisitesFeats": ["Samsaran"],
    "benefit": "At will as a full-round action, you may perform a special bloodletting ritual through which you sacrifice some of your own vitality to heal another creature. When using this feat, you take 1d4 points of damage and apply your blood to the wounds of a living creature, healing it for a number of hit points equal to the amount of damage you took from the ritual. This is a supernatural ability. Only you can perform this bloodletting. A creature cannot be healed by this ability more than once per day."
  },
  {
    "name": "Stretched Wings",
    "type": "General",
    "description": "You strengthen your crippled wings.",
    "prerequisites": ["Str 13","Skill Focus (Fly)","strix","wing-clipped racial trait"],
    "prerequisitesFeats": ["Str 13","Skill Focus (Fly)","strix","wing-clipped racial trait"],
    "benefit": "Your strix racial fly speed increases to 60 feet (average). You ignore the wing-clipped trait's Fly check requirement to fly upward."
  },
  {
    "name": "Extra Elemental Assault",
    "type": "General",
    "description": "You have unlocked greater elemental power.",
    "prerequisites": ["Suli"],
    "prerequisitesFeats": ["Suli"],
    "benefit": "Your elemental assault ability lasts an additional 2 rounds per day."
  },
  {
    "name": "Incremental Elemental Assault",
    "type": "General",
    "description": "You may activate and quench your elemental assault ability multiple times per day.",
    "prerequisites": ["Suli"],
    "prerequisitesFeats": ["Suli"],
    "benefit": "You may use your elemental assault ability in 1-round increments, up to a maximum number of rounds per day equal to your character level. These rounds do not have to be consecutive. Activating the ability is a swift action; ending it is a free action."
  },
  {
    "name": "Stoic Pose",
    "type": "General",
    "description": "You can hold yourself as still as a statue, evading detection.",
    "prerequisites": ["Svirfneblin"],
    "prerequisitesFeats": ["Svirfneblin"],
    "benefit": "By spending 5 rounds finding a suitable location, you can hold yourself so still that you appear to be a Small object such as a pile of rocks. This allows you to make a Stealth check without cover or concealment, as long as you do not move or take any other actions."
  },
  {
    "name": "Tree Hanger",
    "type": "Combat",
    "description": "You can use your tail to defend against trip attacks and to hang from nearby protrusions.",
    "prerequisites": ["Acrobatics 1 rank","vanara"],
    "prerequisitesFeats": ["Acrobatics 1 rank","vanara"],
    "benefit": "You gain a +2 bonus to your CMD against all trip attacks. If your square has a branch or other sturdy large object that you could hang from, as a swift action you may make a DC 15 Acrobatics check to jump upward and use your tail to hang from that object. While hanging, you can't be tripped, you ignore the effects of difficult terrain in your square, and you gain a +2 bonus to your CMD against bull rush, drag, and reposition attacks. If you leave that square (including if you are moved against your will), you lose your grip on the object and are no longer hanging. While hanging, you cannot use your tail for anything else."
  },
  {
    "name": "Sleep Venom",
    "type": "General",
    "description": "You can change the nature of your toxic spittle to put your enemies to sleep.",
    "prerequisites": ["Vishkanya"],
    "prerequisitesFeats": ["Vishkanya"],
    "benefit": "As a swift action, you may alter the effects of your venom so the target falls unconscious. This changes the initial and secondary effect of your venom to the following: initial effect staggered for 1d4 rounds; secondary effect unconsciousness for 1 minute. You must make the decision to alter your venom before you apply it to a weapon."
  },
  {
    "name": "Shadowy Dash",
    "type": "General",
    "description": "In dim light, you resemble little more than a shadow.",
    "prerequisites": ["Wayang"],
    "prerequisitesFeats": ["Wayang"],
    "benefit": "Whenever you are in an area of dim light or darkness, you can move at full speed using Stealth without taking the normal -5 penalty for doing so."
  },
  {
    "name": "Belier's Bite",
    "type": "Combat",
    "description": "Your unarmed strikes cause your opponent to bleed.",
    "prerequisites": ["Improved Unarmed Strike"],
    "prerequisitesFeats": ["Improved Unarmed Strike"],
    "benefit": "When you damage an opponent with an unarmed strike, you deal an extra 1d4 bleed damage."
  },
  {
    "name": "Cornugon Shield",
    "type": "Combat",
    "description": "You can use your spiked chain as both armor and weapon.",
    "prerequisites": ["Dex 15","Weapon Focus (spiked chain)"],
    "prerequisitesFeats": ["Dex 15","Weapon Focus (spiked chain)"],
    "benefit": "When wielding a spiked chain, you gain a +1 shield bonus to your AC. When you are fighting defensively or using the total defense action, this shield bonus increases to +2."
  },
  {
    "name": "Cornugon Smash",
    "type": "Combat",
    "description": "Your terrible attacks strike fear into your enemies.",
    "prerequisites": ["Power Attack","Intimidate 6 ranks"],
    "prerequisitesFeats": ["Power Attack","Intimidate 6 ranks"],
    "benefit": "When you damage an opponent with a Power Attack, you may make an immediate Intimidate check as a free action to attempt to demoralize your opponent."
  },
  {
    "name": "Cornugon Stun",
    "type": "Combat",
    "description": "You are able to make stunning attacks with special monk weapons.",
    "prerequisites": ["Stunning Fist"],
    "prerequisitesFeats": ["Stunning Fist"],
    "benefit": "You may use Stunning Fist when making melee attacks with special monk weapons as well as when making unarmed attacks."
  },
  {
    "name": "Cornugon Trip",
    "type": "Combat",
    "description": "You can throw your spiked chain to make trip attacks.",
    "prerequisites": ["Dex 15","Improved Trip","Weapon Focus (spiked chain)"],
    "prerequisitesFeats": ["Dex 15","Improved Trip","Weapon Focus (spiked chain)"],
    "benefit": "You may throw your spiked chain (as if it were a thrown weapon with a range increment of 10 feet) and can make trip attacks when throwing it. Failing at this attack does not knock you prone."
  },
  {
    "name": "Fury's Fall",
    "type": "Combat",
    "description": "You can use strength and agility to send foes crashing to the ground.",
    "prerequisites": ["Improved Trip"],
    "prerequisitesFeats": ["Improved Trip"],
    "benefit": "When making a trip attack, add your Dexterity bonus to your CMB."
  },
  {
    "name": "Fury's Snare",
    "type": "Combat",
    "description": "You entangle your foe in your weapon.",
    "prerequisites": ["Fury's Fall","Improved Trip"],
    "prerequisitesFeats": ["Fury's Fall","Improved Trip"],
    "benefit": "If you successfully use a whip to trip a foe, you can choose to drop your whip. Your tripped target gains the entangled condition. The target can break free of the whip by making a DC 10 Strength check or a DC 15 Escape Artist check (add the enhancement bonus of the whip to these DCs), or by using a full-round action to disentangle himself. Escaping the whip by making a Strength check means the whip gains the broken condition. If the whip has a magical quality such as flaming, apply this quality's damage to the target every round on your turn."
  },
  {
    "name": "Hamatula Grasp",
    "type": "Combat",
    "description": "You deal terrible damage to impaled foes.",
    "prerequisites": ["Hamatula Strike","Improved Grapple","Strength 13","base attack bonus +9"],
    "prerequisitesFeats": ["Hamatula Strike","Improved Grapple","Strength 13","base attack bonus +9"],
    "benefit": "When attacking an impaled opponent (see Hamatula Strike) with the weapon that impales them, you only suffer a -2 penalty to your grapple check. If the check succeeds, you deal an extra 1d6 damage."
  },
  {
    "name": "Hamatula Strike",
    "type": "Combat",
    "description": "You can catch your opponents on your weapon and hold them in place.",
    "prerequisites": ["Improved Grapple","Strength 13","Base Attack Bonus +7"],
    "prerequisitesFeats": ["Improved Grapple","Strength 13","Base Attack Bonus +7"],
    "benefit": "Whenever you damage an opponent with a piercing weapon, you can immediately make a grapple check; success means the opponent is impaled on your weapon and you both gain the grappled condition. While the opponent is impaled, as an attack action you may make a grapple check on your turn at a -4 penalty to damage the opponent with your weapon, even if your weapon cannot normally be used in a grapple."
  },
  {
    "name": "Hellcat Pounce",
    "type": "Combat",
    "description": "You attack unsuspecting foes twice.",
    "prerequisites": ["Hellcat Stealth","Skill Focus (Stealth)","sneak attack +2d6"],
    "prerequisitesFeats": ["Hellcat Stealth","Skill Focus (Stealth)","sneak attack +2d6"],
    "benefit": "Whenever you attack and damage an opponent in the surprise round, you may immediately make a second attack against the same opponent using the same attack bonus. The target is not considered flat-footed against this second attack."
  },
  {
    "name": "Hellcat Stealth",
    "type": "General",
    "description": "You are difficult to see in the light.",
    "prerequisites": ["Skill Focus (Stealth)","Stealth 6 ranks"],
    "prerequisitesFeats": ["Skill Focus (Stealth)","Stealth 6 ranks"],
    "benefit": "You may make Stealth checks in normal or bright light even when observed, but at a -10 penalty."
  },
  {
    "name": "Osyluth Guile",
    "type": "Combat",
    "description": "You are skilled at misdirecting an opponent's attacks.",
    "prerequisites": ["Bluff 8 ranks","Dodge"],
    "prerequisitesFeats": ["Bluff 8 ranks","Dodge"],
    "benefit": "While you are fighting defensively or using the total defense action, select one opponent. Add your Charisma bonus to your AC as a dodge bonus against that opponent's melee attacks until your next turn. You cannot use this feat if you cannot see the selected opponent."
  },
  {
    "name": "Bounding Hammer",
    "type": "Combat",
    "description": "You can throw a hammer so it rebounds near you.",
    "prerequisites": ["Proficiency with hammer","base attack bonus +6"],
    "prerequisitesFeats": ["Proficiency with hammer","base attack bonus +6"],
    "benefit": "As a standard action, you may throw a hammer at an opponent within 20 feet. If you hit (whether or not the attack damages the target), the hammer rebounds off of the creature and lands in your square. If you have the Snatch Arrows feat, you may choose to catch the hammer when it enters your square (though this does not give you the ability to immediately throw the hammer). This ability may not work against some creatures or in certain circumstances as determined by the GM; for example, your weapon does not bounce off incorporeal creatures (unless it has the ghost touch ability), it may stick to creatures with the adhesive ability, the slowing effect of fighting underwater prevents you from using this feat, and so on."
  },
  {
    "name": "Darting Viper",
    "type": "Combat",
    "description": "When using a dorn-dergar, you can quickly attack both near and distant foes.",
    "prerequisites": ["Base attack bonus +4","proficiency with the dwarven dorn-dergar"],
    "prerequisitesFeats": ["Base attack bonus +4","proficiency with the dwarven dorn-dergar"],
    "benefit": "You may change whether you're using the dorndergar as a normal or reach weapon as a swift action."
  },
  {
    "name": "Dorn-Dergar Master",
    "type": "Combat",
    "description": "You can use a dorn-dergar with only one hand.",
    "prerequisites": ["Two-Weapon Fighting","base attack bonus +4","proficiency with the dwarven dorn-dergar"],
    "prerequisitesFeats": ["Two-Weapon Fighting","base attack bonus +4","proficiency with the dwarven dorn-dergar"],
    "benefit": "You can use a dorn-dergar as a one-handed weapon. When using it one-handed, changing whether it's a normal or reach weapon is a full-round action. If you have the Darting Viper feat, changing its reach is a move action."
  },
  {
    "name": "Sliding Axe Throw",
    "type": "Combat",
    "description": "You may aim your thrown axe to avoid an enemy's shield and even trip your opponent.",
    "prerequisites": ["Dex 13","base attack bonus +1"],
    "prerequisitesFeats": ["Dex 13","base attack bonus +1"],
    "benefit": "You can choose to take a -2 penalty on a ranged attack roll with an axe, bouncing it or sliding it along the ground. If the target is flat-footed, running, or charging, this attack ignores any bonuses to the target's AC from its shield. If the attack hits, you may immediately make a trip attempt against the target as a free action. If you fail to trip your opponent, your opponent does not get an attempt to trip you in return. This ability may not work in certain circumstances as determined by the GM, such as if the ground is soft, there is an obstacle or difficult terrain on the floor between you and your target, and so on."
  },
  {
    "name": "Stance of the Xorn",
    "type": "Combat",
    "description": "You have heightened awareness of enemies on all sides.",
    "prerequisites": ["Wis 15","base attack bonus +3"],
    "prerequisitesFeats": ["Wis 15","base attack bonus +3"],
    "benefit": "Flanking creatures do not gain a +2 bonus to attack you (this does not prevent you from being sneak attacked or denied your Dexterity bonus). A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat."
  },
  {
    "name": "Arcane School Spirit",
    "type": "General",
    "description": "You can talk up the power of your own school of magic to such an extent that creatures find it more difficult to resist your spells.",
    "prerequisites": ["Bluff 1 rank","arcane school class feature","gnome"],
    "prerequisitesFeats": ["Bluff 1 rank","arcane school class feature","gnome"],
    "benefit": "As a full-round action, you extol the virtues of your school of magic to one creature within 30 feet. Make a Bluff check opposed by a target's Sense Motive check; if you win the check, the target takes a -2 penalty on saving throws made to resist the next spell of this school that you cast. If your chosen school is universalist, choose a specific school each time you use this ability. If your Bluff check succeeds, however, your lack of true commitment to the school means the target takes only a -1 penalty on its saving throw."
  },
  {
    "name": "Bewildering Koan",
    "type": "General",
    "description": "You can pose unanswerable questions that leave creatures momentarily dumbfounded as they dwell on their significance.",
    "prerequisites": ["Bluff 1 rank","ki pool class feature","gnome"],
    "prerequisitesFeats": ["Bluff 1 rank","ki pool class feature","gnome"],
    "benefit": "As a swift action, spend 1 point from your ki pool and make a Bluff check by asking a creature one of the impossible questions you ponder when meditating. If the creature fails its check, you choose whether it loses its next action or you gain a +2 bonus on all damage rolls you make against that creature for 1 round."
  },
  {
    "name": "Blood Ties",
    "type": "General",
    "description": "Pointing out your shared kinship with someone gives you the chance to win over creatures associated with your bloodline.",
    "prerequisites": ["Bluff 1 rank","bloodline class feature","gnome"],
    "prerequisitesFeats": ["Bluff 1 rank","bloodline class feature","gnome"],
    "benefit": "When attempting a Diplomacy check to influence a creature with a plausible connection to your sorcerous bloodline, you may instead make a Bluff check. For example, a gnome sorcerer with the draconic bloodline may use this feat against dragons and their kin, but no other creatures."
  },
  {
    "name": "Babble-Peddler",
    "type": "General",
    "description": "Your talent for flimflam allows you to trick creatures into exchanging valuable objects for whatever junk you happen to offer.",
    "prerequisites": ["Appraise 5 ranks","Bluff 5 ranks","gnome"],
    "prerequisitesFeats": ["Appraise 5 ranks","Bluff 5 ranks","gnome"],
    "benefit": "Make a Bluff check to praise the value and worth of an object in your hand while denigrating an object held by a nearby creature; this takes anywhere from 1 round to 1 minute depending on the appearance and nature of the items. If the creature fails its check, it agrees to exchange your object for its own. Obvious differences in the value between the exchanged items give your roll a +4 or -4 modifier, at the GM's discretion (offering a clay cup for a jeweled dagger gives your roll a -4 penalty). The GM may rule that some items are too obviously valuable or worthless for this feat to apply (a king wouldn't trade his crown for any item, and no normal person would trade an item for a piece of garbage). If you fail the check by 5 or more, the target is insulted and his attitude toward you worsens by one category. Once the exchange happens, make an Appraise roll opposed by the target's Appraise or Sense Motive roll. If the target wins, it immediately realizes the true value of the object you offered it and behaves accordingly. If you succeed, it believes your false assessment for 1 round; for every 5 by which your check exceeds your opponent's check, the deception lasts 1 more round. As with disbelieving illusions, the target's ally can point out the true value of the object, giving the target another check with a +2 bonus. You cannot use this ability in combat, against a creature whose attitude toward you is hostile or unfriendly, against a creature that does not understand you, or against a creature that has an Intelligence score of 3 or less."
  },
  {
    "name": "Caustic Slur",
    "type": "General",
    "description": "You know exactly how to insult your favored enemies in order to make them lose their heads.",
    "prerequisites": ["Bluff 1 rank","favored enemy class feature","gnome"],
    "prerequisitesFeats": ["Bluff 1 rank","favored enemy class feature","gnome"],
    "benefit": "As a standard action, you can make a Bluff check against one sort of favored enemy. Any creature of that type within 60 feet of you must make a Will saving throw or become angered. If an affected creature attacks you, it's treated as if it were using Power Attack (taking a penalty on attack rolls but gaining a bonus on damage rolls). If the creature already has the power attack feat, the attack penalty increases by 1 and the damage bonus increases by 2. These modifiers end when combat ends. This ability does not work on creatures that cannot understand you, though sometimes a simple gesture is sufficient for an intelligent opponent to catch your gist regardless of any language barrier."
  },
  {
    "name": "Helpless Prisoner",
    "type": "General",
    "description": "You can talk your way out of most restraints.",
    "prerequisites": ["Bluff 5 ranks","Escape Artist 1 rank","gnome"],
    "prerequisitesFeats": ["Bluff 5 ranks","Escape Artist 1 rank","gnome"],
    "benefit": "When you are restrained or imprisoned, you can make a Bluff check against any one creature within 30 feet in which you emphasize both your own harmlessness and the pain or inconvenience of your current condition. If the creature knows you are dangerous, it adds a +4 bonus to its Sense Motive check. If you win the check, the target does something intended to make you a little more comfortable-or at least shut you up-that gives you a +5 bonus on your next Escape Artist check."
  },
  {
    "name": "Invoke Primal Instinct",
    "type": "General",
    "description": "You can use your ability to take the shape of an animal to enhance your Bluff skill, giving yourself an aura of danger or meekness that influences nearby creatures into doing what you want.",
    "prerequisites": ["Bluff 1 rank","wild shape class feature","gnome"],
    "prerequisitesFeats": ["Bluff 1 rank","wild shape class feature","gnome"],
    "benefit": "As a standard action, you can pantomime or describe predator- or prey-like behavior, expend one of your uses of wild shape, and make a Bluff check. All creatures within 30 feet that fail a Will save against your Bluff check DC regard you as a figure of either fear or contempt (your choice applies to all affected creatures). If you choose fear, the targets are frightened for 1 round per druid level. If you choose contempt, the targets consider you harmless for 1 minute, ignoring you unless you attack them or take a threatening action."
  },
  {
    "name": "Tantrum",
    "type": "Combat",
    "description": "Your crying, sputtering, and even frothing at the mouth makes you so laughably incoherent that opponents are apt to dismiss you as a threat.",
    "prerequisites": ["Bluff 1 rank","rage class feature","gnome"],
    "prerequisitesFeats": ["Bluff 1 rank","rage class feature","gnome"],
    "benefit": "You may use the Bluff skill to feint while raging. The effect of the feint lasts only until the first time you hit the target."
  },
  {
    "name": "Witty Feint",
    "type": "Combat",
    "description": "Your blending of conversation and martial prowess makes it difficult for opponents to slip past your guard.",
    "prerequisites": ["Bluff 1 rank","weapon training class feature","gnome"],
    "prerequisitesFeats": ["Bluff 1 rank","weapon training class feature","gnome"],
    "benefit": "When you successfully feint against an opponent in combat, instead of denying the opponent his Dexterity bonus, you may gain a dodge bonus to your AC against his attacks. This bonus is equal to your weapon training bonus for your current weapon. The bonus lasts until combat ends, you switch opponents, or you switch to a different weapon, whichever comes first."
  },
  {
    "name": "Mounted Blade",
    "type": "General",
    "description": "You have learned to use the momentum of your mount to carry your weapon through one foe and into another.",
    "prerequisites": ["Ride 3 ranks","Mounted Combat","Ride-By Attack","base attack bonus +1","Qadira affinity"],
    "prerequisitesFeats": ["Ride 3 ranks","Mounted Combat","Ride-By Attack","base attack bonus +1","Qadira affinity"],
    "benefit": "When you use the Ride-By Attack feat, if your attack hits, you may also make an attack against a target adjacent to your original target. This additional attack has a -5 penalty to the attack roll. You may use this feat whether riding a mount or using a flying item such as a broom of flying or carpet of flying."
  },
  {
    "name": "Elephant Stomp",
    "type": "Combat",
    "description": "You deliver a crushing blow to downed enemies.",
    "prerequisites": ["Str 13","Power Attack","Improved Overrun","base attack bonus +1"],
    "prerequisitesFeats": ["Str 13","Power Attack","Improved Overrun","base attack bonus +1"],
    "benefit": "When you overrun an opponent and your maneuver check exceeds your opponent's CMD by 5 or more, instead of moving through your opponent's space and knocking her prone, you may stop in the space directly in front of the opponent (or the nearest adjacent space) and make one attack with an unarmed strike or a natural weapon against that opponent as an immediate action."
  },
  {
    "name": "Jaguar Pounce",
    "type": "Combat",
    "description": "Your ambushes are especially lethal.",
    "prerequisites": ["Base attack bonus +4"],
    "prerequisitesFeats": ["Base attack bonus +4"],
    "benefit": "When making a charge or using Spring Attack against an opponent who is flat-footed or helpless, you treat your first melee attack against that target as if you had the Improved Critical feat."
  },
  {
    "name": "Monkey Lunge",
    "type": "Combat",
    "description": "You can quickly recover from your lunges, helping you to avoid counterattacks.",
    "prerequisites": ["Lunge","Acrobatics 1 rank"],
    "prerequisitesFeats": ["Lunge","Acrobatics 1 rank"],
    "benefit": "As a standard action, you can use the Lunge feat to increase the reach of your melee attacks by 5 feet until the end of your turn, without suffering a penalty to your AC. You cannot use this feat if you carry a medium or heavy load."
  },
  {
    "name": "Piranha Strike",
    "type": "Combat",
    "description": "You make a combination of quick strikes, sacrificing accuracy for multiple, minor wounds that prove exceptionally deadly.",
    "prerequisites": ["Weapon Finesse","base attack bonus +1"],
    "prerequisitesFeats": ["Weapon Finesse","base attack bonus +1"],
    "benefit": "When wielding a light weapon, you can choose to take a -1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is halved (-50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonus reaches +4, and for every 4 points thereafter, the penalty increases by -1 and the bonus on damage rolls increases by +2. You must choose to use this feat before the attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage. This feat cannot be used in conjunction with the Power Attack feat."
  },
  {
    "name": "Rhino Charge",
    "type": "Combat",
    "description": "Your charges are both violent and unpredictable.",
    "prerequisites": ["Power Attack","Improved Bull Rush","base attack bonus +5"],
    "prerequisitesFeats": ["Power Attack","Improved Bull Rush","base attack bonus +5"],
    "benefit": "You may ready a charge, though you may only move up to your speed on the charge."
  },
  {
    "name": "Boon Companion",
    "type": "General",
    "description": "Your bond with your animal companion or familiar is unusually close.",
    "prerequisites": ["Animal companion or familiar class feature"],
    "prerequisitesFeats": ["Animal companion or familiar class feature"],
    "benefit": "The abilities of your animal companion or familiar are calculated as though your class were 4 levels higher, to a maximum effective druid level equal to your character level. If you have more than one animal companion or familiar, choose one to receive this benefit. If you lose or dismiss an animal companion or familiar that has received this benefit, you may apply this feat to the replacement creature."
  },
  {
    "name": "Critical Conduit",
    "type": "General",
    "description": "You are deadly when delivering your master's magic.",
    "prerequisites": ["Deliver touch spells ability","familiar"],
    "prerequisitesFeats": ["Deliver touch spells ability","familiar"],
    "benefit": "When delivering a touch spell for your master, the critical threat range of your touch attack is doubled. This feat does not stack with Improved Critical or other effects that increase critical threat range."
  },
  {
    "name": "Extra Item Slot",
    "type": "General",
    "description": "You are able to wear magic items more easily than other creatures of your kind.",
    "prerequisites": ["Non-humanoid body shape"],
    "prerequisitesFeats": ["Non-humanoid body shape"],
    "benefit": "Choose one magic item slot not normally available to creatures with your shape. You can now use magic items in that slot."
  },
  {
    "name": "Familiar Focus",
    "type": "General",
    "description": "You are closely connected to your master's powers.",
    "prerequisites": ["Familiar"],
    "prerequisitesFeats": ["Familiar"],
    "benefit": "Whenever your master targets you with a harmless spell or spell-like ability, your master's effective caster level for the effect is increased by 1."
  },
  {
    "name": "Familiar Spell",
    "type": "Metamagic",
    "description": "You can imbue your familiar with a spell.",
    "prerequisites": ["Spellcaster with familiar class feature"],
    "prerequisitesFeats": ["Spellcaster with familiar class feature"],
    "benefit": "You can transfer a prepared spell to your familiar, allowing the familiar to cast that spell at a later time. Variables that rely on caster level function according to your caster level, not your familiar's Hit Dice, though your familiar's Intelligence may influence how precisely it can follow your instructions on how to use these spells. Your familiar must be able to speak to cast spells with a verbal component (the ability to speak with its master or creatures of its kind is insufficient). Your familiar must be carrying any material or focus components necessary, unless the materials cost less than 1 gp and the spell is prepared with Eschew Materials. Attack rolls use your familiar's ability scores. A familiar spell counts against the number of spells you may prepare for as long as your familiar retains the spell. Once your familiar casts a retained spell, you can prepare a new spell in that slot the next time you prepare spells. A familiar spell uses up a spell slot 3 levels higher than the spell's actual level. Your familiar can store a number of spell levels (including this modifier) equal to your caster level, but no spell's adjusted level can exceed half your caster level."
  },
  {
    "name": "Jumper",
    "type": "General",
    "description": "You are a natural leaper.",
    "prerequisites": ["Acrobatics 1 rank","creature type other than humanoid or outsider"],
    "prerequisitesFeats": ["Acrobatics 1 rank","creature type other than humanoid or outsider"],
    "benefit": "You always count as having a running start when making jump checks using Acrobatics. Acrobatics becomes a class skill for you."
  },
  {
    "name": "Lithe Attacker",
    "type": "General",
    "description": "Your unmatched grace allows you to strike even from the tightest crevices.",
    "prerequisites": ["Narrow Frame","Escape Artist 5 ranks","animal or magical beast"],
    "prerequisitesFeats": ["Narrow Frame","Escape Artist 5 ranks","animal or magical beast"],
    "benefit": "You can attack from nooks and crannies, even while using Escape Artist to squeeze through or into a narrow space less than half as wide as your normal space, and you do not lose your Dexterity bonus to AC while using Escape Artist to squeeze through or into a narrow space. You still take a -4 penalty to AC while using Escape Artist in this way."
  },
  {
    "name": "Master ofYour Kind",
    "type": "General",
    "description": "When you speak to other animals of your kind, you can influence them to act according to your wishes and those of your master.",
    "prerequisites": ["Familiar","speak with animals of its kind ability"],
    "prerequisitesFeats": ["Familiar","speak with animals of its kind ability"],
    "benefit": "Your master gains a +2 bonus on Handle Animal checks with animals of your kind. In addition, once per day you can use animal messenger, animal trance, or charm animal as a spell-like ability, using your master's caster level but your own Charisma modifier. These abilities affect only animals of your kind, and you gain only one use of this ability per day (not one of each ability); however, you can gain one additional use of any one of these three abilities by having your master sacrifice a prepared spell or spell slot of the same level or higher as a standard action."
  },
  {
    "name": "Narrow Frame",
    "type": "General",
    "description": "Your excellent coordination allows you to maneuver better in close quarters.",
    "prerequisites": ["Escape Artist 1 rank","animal or magical beast"],
    "prerequisitesFeats": ["Escape Artist 1 rank","animal or magical beast"],
    "benefit": "You do not take penalties on your attack rolls or to your AC for squeezing through a narrow space that is at least half as wide as your normal space, though each move into or through a narrow space still counts as if it were 2 squares."
  },
  {
    "name": "Spell Sponge",
    "type": "General",
    "description": "Your mystical connection with your spellcasting master attunes you to helpful magical effects.",
    "prerequisites": ["Animal companion or familiar","share spells ability"],
    "prerequisitesFeats": ["Animal companion or familiar","share spells ability"],
    "benefit": "Whenever your master targets you with a harmless spell with a target of \"you,\" the spell's duration is doubled as if modified by the Extend Spell metamagic feat. This does not affect spells with a duration of concentration, instantaneous, or permanent, or spells already modified by Extend Spell."
  },
  {
    "name": "Stable Gallop",
    "type": "General",
    "description": "You run with a smooth and steady gait.",
    "prerequisites": ["Animal or magical beast"],
    "prerequisitesFeats": ["Animal or magical beast"],
    "benefit": "Your AC penalty when charging is halved. The penalties on ranged attacks made by your rider are reduced by 1 when you take a double move and by 2 when you run (minimum penalty of 0). Your rider gains a +4 bonus on concentration checks caused by your motion."
  },
  {
    "name": "Sure-Footed",
    "type": "General",
    "description": "Your footing is secure in unstable terrain.",
    "prerequisites": ["Quadruped animal or magical beast"],
    "prerequisitesFeats": ["Quadruped animal or magical beast"],
    "benefit": "You gain a +2 bonus on Acrobatics checks to keep your balance and Reflex saves to avoid falling. You can move at a normal speed on steep slopes and stairs and do not risk falling when running or charging downhill."
  },
  {
    "name": "Valiant Steed",
    "type": "General",
    "description": "Your courage is unnaturally strong.",
    "prerequisites": ["Animal or magical beast"],
    "prerequisitesFeats": ["Animal or magical beast"],
    "benefit": "You gain a +4 morale bonus on saves against fear and emotion effects. If you can serve as a mount, your rider gains a +4 morale bonus on Handle Animal, Ride, and wild empathy checks to force you within range of a creature with the unnatural aura universal monster rule. In addition, the DC to push you with the Handle Animal skill does not increase if you are wounded or have taken any nonlethal damage or ability score damage."
  },
  {
    "name": "Archon Diversion",
    "type": "Combat",
    "description": "You are able to throw yourself in front of danger to protect your friends.",
    "prerequisites": ["Archon Style","Combat Expertise","Improved Unarmed Strike","base attack bonus +4 or monk level 4th"],
    "prerequisitesFeats": ["Archon Style","Combat Expertise","Improved Unarmed Strike","base attack bonus +4 or monk level 4th"],
    "benefit": "The penalty to AC for using Archon Style to grant nearby allies a bonus to AC against a single opponent decreases to -1, and you can spend a move action instead of a standard action to use this ability. Once per round while using Archon Style, when you have at least one hand free, you can divert one melee weapon attack that would have struck an adjacent ally and take the blow in your ally's stead, using your own AC to determine whether the attack hits you. Whether or not a diverted attack actually hits you, the ally you protected can make an attack of opportunity against the diverted opponent. You expend no action to divert the attack, but you must be aware of it and must not be flat-footed. You must declare that you are using this feat after your opponent has declared the target of its melee attack but before it makes its attack roll."
  },
  {
    "name": "Archon Justice",
    "type": "Combat",
    "description": "Your righteous indignation knows no bounds, and foes that attack your companions soon learn the error of their foolish ways.",
    "prerequisites": ["Archon Diversion","Archon Style","Combat Expertise","Improved Unarmed Strike","base attack bonus +8 or monk level 7th"],
    "prerequisitesFeats": ["Archon Diversion","Archon Style","Combat Expertise","Improved Unarmed Strike","base attack bonus +8 or monk level 7th"],
    "benefit": "You no longer take a penalty to AC for using Archon Style to grant nearby allies a bonus to AC against a single opponent, and you can spend a swift action instead of a move action to use this ability. Whenever you take damage from using Archon Diversion to divert an opponent's attack toward yourself, any allies threatening your opponent can make an attack of opportunity against the diverted opponent."
  },
  {
    "name": "Archon Style",
    "type": "Combat",
    "description": "You have trained thoroughly to protect your allies from harm, even if it means temporarily sacrificing your own safety in the process.",
    "prerequisites": ["Combat Expertise","Improved Unarmed Strike","base attack bonus +2 or monk level 2nd"],
    "prerequisitesFeats": ["Combat Expertise","Improved Unarmed Strike","base attack bonus +2 or monk level 2nd"],
    "benefit": "While using this style, as a standard action, you can actively protect adjacent allies from a single opponent that you are currently adjacent to. This grants any adjacent allies a +2 dodge bonus to AC against that opponent's next melee attack (as long as that attack comes before the beginning of your next turn), but causes you to take a -2 penalty to AC against that opponent until your next turn. The dodge bonus persists even if your allies move away from you, but still only applies against attacks made by the opponent that you designated upon first using this ability."
  },
  {
    "name": "Banishing Critical",
    "type": "Combat",
    "description": "With your combination of combat and spellcasting prowess, you send otherworldly monsters back to their place of origin.",
    "prerequisites": ["Critical Focus","ability to cast dismissal or banishment","caster level 9th"],
    "prerequisitesFeats": ["Critical Focus","ability to cast dismissal or banishment","caster level 9th"],
    "benefit": "When you confirm a critical hit with a slashing or bludgeoning weapon, you may cast dismissal or banishment on that target as an immediate action, and the target takes a -4 penalty on its Will save to resist the spell's effect. You must have dismissal or banishment prepared or otherwise available to cast, and using this ability casts the corresponding spell."
  },
  {
    "name": "Blinding Light",
    "type": "General",
    "description": "You use your impenetrable luminescence to disorient harbingers of darkness.",
    "prerequisites": ["Inner Light","aasimar","daylight spell-like ability"],
    "prerequisitesFeats": ["Inner Light","aasimar","daylight spell-like ability"],
    "benefit": "Whenever an enemy unsuccessfully attempts to counter or dispel your daylight spell-like ability, it must succeed at a Fortitude saving throw (DC 10 + 1/2 your character level + your Charisma modifier) or become blinded for 1 round as its mind is overwhelmed with celestial light. This is a supernatural mind-affecting effect."
  },
  {
    "name": "Consecrate Spell",
    "type": "Metamagic",
    "description": "You infuse spells with heavenly power, drastically increasing their effectiveness against would-be heralds of evil.",
    "prerequisites": ["Aasimar","able to prepare or cast consecrate"],
    "prerequisitesFeats": ["Aasimar","able to prepare or cast consecrate"],
    "benefit": "A consecrated spell is treated as a maximized spell against evil creatures and creatures with the evil subtype. Against all other creatures, this feat does not modify the spell in any way (for example, a consecrated fireball acts as a normal fireball against neutral or good creatures). This feat does not stack with Maximize Spell. A consecrated spell uses up a spell slot two levels higher than the spell's actual level."
  },
  {
    "name": "Inner Light",
    "type": "General",
    "description": "Even when your innate powers over light fail you, you and your allies prove vigilant against dark forces, fighting until the end.",
    "prerequisites": ["Aasimar","daylight spell-like ability"],
    "prerequisitesFeats": ["Aasimar","daylight spell-like ability"],
    "benefit": "Whenever you cast your daylight spell-like ability, you do so as if your caster level were one higher. Whenever an enemy successfully counters or dispels your daylight spell-like ability, you and any allies within a 20-foot radius gain darkvision 60 feet for a number of rounds equal to your character level. This is a supernatural effect."
  },
  {
    "name": "Revered Guidance",
    "type": "General",
    "description": "You were selected by your celestial ancestor to be a guide for a chosen people, and serve as a beacon of hope in times of despair.",
    "prerequisites": ["Aasimar","must be taken at 1st level"],
    "prerequisitesFeats": ["Aasimar","must be taken at 1st level"],
    "benefit": "Select one of the following creature subtypes: dwarf, elf, gnome, halfling, human, or orc. You gain a +4 racial bonus on Diplomacy checks made to influence creatures of the selected subtype."
  },
  {
    "name": "Sunlit Strike",
    "type": "General",
    "description": "Your melee blows deal extra damage to creatures sensitive to light, making you adept at hunting foul monsters of the night.",
    "prerequisites": ["Arcane Strike","able to prepare or cast sunlight"],
    "prerequisitesFeats": ["Arcane Strike","able to prepare or cast sunlight"],
    "benefit": "Whenever you successfully hit an enemy that is vulnerable to light (such as by the light blindness, light sensitivity, or sunlight powerlessness universal monster rules) with a melee weapon you've imbued with your Arcane Strike feat, you deal an additional 1d6 points of damage to the target of your attack. The struck creature must also succeed at a Fortitude saving throw (DC 10 + your character level + your Strength modifier) or become staggered for 1 round."
  },
  {
    "name": "Supernal Feast",
    "type": "General",
    "description": "You sup on the blood of your ancestors to fuel your fury.",
    "prerequisites": ["Con 15","aasimar"],
    "prerequisitesFeats": ["Con 15","aasimar"],
    "benefit": "Whenever you are adjacent to a good outsider that takes bleed or blood drain damage, you gain 1 temporary hit point as you bathe in the celestial being's gore. Furthermore, as a full-round action, you can feast on the fallen body of a good outsider that has been dead no longer than 24 hours. When you do, you regain 1 temporary hit point per Hit Die the outsider possessed at a rate of 1 hit point per minute. Temporary hit points gained from this feat last 1d4 hours."
  },
  {
    "name": "Ancestral Scorn",
    "type": "General",
    "description": "The fury you harbor for your fiendish ancestors gives evil outsiders great reason to fear you.",
    "prerequisites": ["Intimidate 5 ranks","tiefling"],
    "prerequisitesFeats": ["Intimidate 5 ranks","tiefling"],
    "benefit": "Whenever you successfully demoralize an outsider of the evil subtype with an Intimidate check, it becomes sickened for 1 round in addition to being affected by the normal effects of being demoralized. If you beat the DC by 5 or more, the creature is nauseated for 1 round instead."
  },
  {
    "name": "Banner of Doom",
    "type": "Combat",
    "description": "The mere sight of your fiendish banner is enough to send ripples of fear through your enemies.",
    "prerequisites": ["Base attack bonus +8","banner class feature","tiefling"],
    "prerequisitesFeats": ["Base attack bonus +8","banner class feature","tiefling"],
    "benefit": "As long your banner is clearly visible, all enemies within 60 feet take a -2 penalty on saving throws against fear. This penalty does not stack with other effects that provide enemies with penalties on saving throws against fear."
  },
  {
    "name": "Blinding Sneak Attack",
    "type": "Combat",
    "description": "When you strike from the cover of darkness, you inject foes with a fraction of your foul magic.",
    "prerequisites": ["Base attack bonus +5","darkness spell-like ability","sneak attack class feature","tiefling"],
    "prerequisitesFeats": ["Base attack bonus +5","darkness spell-like ability","sneak attack class feature","tiefling"],
    "benefit": "When you successfully deal sneak attack damage to a foe while you are within an area of magical darkness, you temporarily blind your opponent for 1 round. A successful Fortitude save (DC 10 + the amount of sneak attack damage dealt) negates this effect."
  },
  {
    "name": "Fiendish Darkness",
    "type": "General",
    "description": "You can use your darkness spell-like ability more often.",
    "prerequisites": ["Darkness spell-like ability","tiefling"],
    "prerequisitesFeats": ["Darkness spell-like ability","tiefling"],
    "benefit": "You can use darkness three times per day as a spell-like ability."
  },
  {
    "name": "Fiendish Facade",
    "type": "General",
    "description": "You are easily mistaken for a member of another race. Your fiendish physical traits are normally hidden by clothing or appear to be markings of another race.",
    "prerequisites": ["Must be taken at 1st level","tiefling"],
    "prerequisitesFeats": ["Must be taken at 1st level","tiefling"],
    "benefit": "You gain a +5 racial bonus on Disguise checks when attempting to impersonate a particular race. You must select the race you are able to impersonate when you select this feat, and thereafter you cannot change the race you have chosen. That race must be Medium size."
  },
  {
    "name": "Fiendish Resilience",
    "type": "General",
    "description": "You dodge energy attacks with amazing agility.",
    "prerequisites": ["Dex 13","evasion class feature","tiefling"],
    "prerequisitesFeats": ["Dex 13","evasion class feature","tiefling"],
    "benefit": "Choose one of the following energy types that you have resistance to: cold, electricity, or fire. Anytime you make a Reflex saving throw against an attack that deals the selected type of energy damage and is subject to your evasion class feature, you gain a +4 competence bonus on the save."
  },
  {
    "name": "Fury of the Tainted",
    "type": "Combat",
    "description": "The unstoppable anger you feel toward do-gooders and self-proclaimed saints makes you a force to be reckoned with.",
    "prerequisites": ["Cha 13","rage class feature","tiefling"],
    "prerequisitesFeats": ["Cha 13","rage class feature","tiefling"],
    "benefit": "While raging, you gain a +4 competence bonus on saving throws made against spells and effects with the good descriptor."
  },
  {
    "name": "Improved Fiendish Darkness",
    "type": "General",
    "description": "Your innate ability to shroud others in darkness is further empowered.",
    "prerequisites": ["Fiendish Darkness","darkness spell-like ability","caster level 3rd","tiefling"],
    "prerequisitesFeats": ["Fiendish Darkness","darkness spell-like ability","caster level 3rd","tiefling"],
    "benefit": "You gain a +2 bonus to your effective caster level when using your darkness spell-like ability. In addition, whenever you cast a spell with the evil descriptor that targets another creature, you can spend a swift action to apply the effects of your darkness spell-like ability to the spell cast, with the darkness effect centered on the spell's target. Using the darkness spell-like ability in this way expends all three uses of it for the day, and it cannot be used if fewer than three uses of it remain for that day."
  },
  {
    "name": "Improved Fiendish Sorcery",
    "type": "General",
    "description": "Your skill with foul sorcery is even more potent than that of others of your race.",
    "prerequisites": ["Fiendish sorcery racial trait","tiefling"],
    "prerequisitesFeats": ["Fiendish sorcery racial trait","tiefling"],
    "benefit": "If you are a sorcerer and possess the Rakshasa bloodline (Pathfinder RPG Ultimate Magic 68) or Shadow bloodline (Pathfinder RPG Advanced Player's Guide 140), treat your Charisma score as 2 points higher for all sorcerer class abilities."
  },
  {
    "name": "Improved Fury of the Tainted",
    "type": "Combat",
    "description": "Your hatred for goodness is rivaled only by your ability to repel it.",
    "prerequisites": ["Cha 13","Fury of the Tainted","base attack bonus +8","rage class feature","tiefling"],
    "prerequisitesFeats": ["Cha 13","Fury of the Tainted","base attack bonus +8","rage class feature","tiefling"],
    "benefit": "While raging, you gain spell resistance equal to 10 + your class level against spells with the good descriptor."
  },
  {
    "name": "Monstrous Mask",
    "type": "General",
    "description": "Your fiendish physical traits give you a twisted and fearsome appearance that strikes fear into others' hearts.",
    "prerequisites": ["Tiefling","must be taken at 1st level"],
    "prerequisitesFeats": ["Tiefling","must be taken at 1st level"],
    "benefit": "You get a +5 racial bonus on Intimidate checks made against all creatures of the humanoid type."
  },
  {
    "name": "Terrifying Mask",
    "type": "General",
    "description": "Your fiendish visage has made you a truly terrifying spectacle to behold, and you can force others to betray their feelings with a single look.",
    "prerequisites": ["Cha 13","Monstrous Mask","tiefling"],
    "prerequisitesFeats": ["Cha 13","Monstrous Mask","tiefling"],
    "benefit": "Anytime you can make a Sense Motive check to get a hunch or detect whether someone is trustworthy or not, you can choose to instead make an Intimidate check at a -2 penalty. This ability only works on creatures of the humanoid type."
  },
  {
    "name": "Wicked Valor",
    "type": "General",
    "description": "The fiendish blood that courses through your body causes your wounds to heal faster than usual.",
    "prerequisites": ["Con 15","Diehard","Endurance","tiefling"],
    "prerequisitesFeats": ["Con 15","Diehard","Endurance","tiefling"],
    "benefit": "When you regain hit points by resting, you heal double the normal amount of damage. This feat does not stack with items or effects that also affect the amount of damage you recover from while resting. This feat only functions with a full night's rest; complete bed rest is not affected by this feat."
  },
  {
    "name": "Reckless Aim",
    "type": "Combat",
    "description": "Your lack of regard for others proves a boon when you fire projectiles into melee.",
    "prerequisites": ["Point-Blank Shot","Precise Shot"],
    "prerequisitesFeats": ["Point-Blank Shot","Precise Shot"],
    "benefit": "When you shoot or throw ranged weapons at an opponent engaged in melee, you can choose to take a -1 penalty to your AC and gain a +2 competence bonus on your attack roll. However, when you roll a natural 1 on a ranged attack roll made with this bonus, you automatically hit a random adjacent creature that threatens your intended target."
  },
  {
    "name": "Conviction",
    "type": "General",
    "description": "Your actions are bolstered by divine determination.",
    "prerequisites": ["Cha 13"],
    "prerequisitesFeats": ["Cha 13"],
    "benefit": "When you present to a vampire a holy symbol or other object it is averse to, the DC for the creature to overcome such an aversion increases by 2."
  },
  {
    "name": "Hymn Singer",
    "type": "General",
    "description": "Your music is infused with your faith.",
    "prerequisites": ["Bardic performance","good alignment","worshiper of a good deity"],
    "prerequisitesFeats": ["Bardic performance","good alignment","worshiper of a good deity"],
    "benefit": "When using bardic performance, you may choose to play, recite, or sing a religious song or piece of scripture of your faith. Each round of bardic performance you spend in this way, you count as presenting a holy symbol, chanting prayers, or ringing a hand bell for the purpose of keeping vampires at bay."
  },
  {
    "name": "Life-Dominant Soul",
    "type": "General",
    "description": "You gain unusual resiliency from your mortal heritage.",
    "prerequisites": ["Dhampir"],
    "prerequisitesFeats": ["Dhampir"],
    "benefit": "You are healed by channeled positive energy used to heal living creatures and channeled negative energy used to heal undead, but both only heal half the normal amount. You still take damage from positive energy used to harm undead, such as that from channeled energy and lay on hands."
  },
  {
    "name": "Potent HolySymbol",
    "type": "General",
    "description": "In your pious hands, your holy symbol is a shining light of faith.",
    "prerequisites": ["Good alignment","worshiper of a good deity"],
    "prerequisitesFeats": ["Good alignment","worshiper of a good deity"],
    "benefit": "Any round in which you use your holy symbol as a divine focus for the casting of a spell or to channel positive energy, you count as presenting a holy symbol, chanting prayers, or ringing a hand bell for the purpose of keeping vampires at bay."
  },
  {
    "name": "SchooledResolve",
    "type": "General",
    "description": "Your intensive combat training to fight vampiric forces allows you to fight off their mental spells and effects using your resistance to fear.",
    "prerequisites": ["Bravery class feature"],
    "prerequisitesFeats": ["Bravery class feature"],
    "benefit": "You add your bravery bonus on Will saves against mind-affecting spells and effects from vampires. This does not stack with the normal bravery bonus on saves against fear effects."
  },
  {
    "name": "Aversion Tolerance",
    "type": "General",
    "description": "You have been hunted for so long that you have developed resistances to slayers' usual scare tactics.",
    "prerequisites": ["Vampire"],
    "prerequisitesFeats": ["Vampire"],
    "benefit": "You gain a +2 bonus on saves made to resist aversions to objects, sounds, and materials appropriate to your vampire type (such as garlic, holy symbols, and mirrors for a moroi). When confronted with such things, you may immediately make a saving throw instead of after 1 round."
  },
  {
    "name": "Famine Tolerance",
    "type": "General",
    "description": "You can abide much longer periods without feeding, and enjoy increased benefits from a meal.",
    "prerequisites": ["Moroi or nosferatu"],
    "prerequisitesFeats": ["Moroi or nosferatu"],
    "benefit": "You can go without feeding for a number of days equal to twice your Hit Dice before having to make hunger saves. When you use your blood drain ability, you gain twice the normal amount of temporary hit points for each feeding."
  },
  {
    "name": "VampiricCompanion",
    "type": "General",
    "description": "Just as your undead existence mocks nature, so too are you granted a twisted companion that reflects the vile nature of vampirism.",
    "prerequisites": ["Dhampir or vampire","nongood alignment","10 levels in a class that grants a familiar or animal companion"],
    "prerequisitesFeats": ["Dhampir or vampire","nongood alignment","10 levels in a class that grants a familiar or animal companion"],
    "benefit": "Your animal companion or familiar's type changes to \"undead.\" The creature gains your vampire or dhampir weaknesses and fast healing 5. If you are a vampire, the creature also gains the following abilities, depending on what type of vampire you are. Jiang-Shi: If the creature is adjacent to you or you are sharing a square, it gains the benefit of your prayer scroll ability. The creature crumbles into dust if destroyed ( just like a jiang-shi), but is not permanently destroyed unless measures are taken that would destroy a jiang-shi. Moroi: If the creature is adjacent to or in your square when you assume gaseous form, it transforms with you and follows you; its transformation ends when yours does. If reduced to 0 hit points, it is forced into gaseous form and must return to your coffin to reform (or the foot of your coffin if it cannot fit within it). Nosferatu: If the creature is adjacent to or in your square when you assume swarm form, it transforms with you and follows you; its transformation ends when yours does. The creature can climb as if using spider climb, even if its anatomy is not suitable for climbing (such as a horse). Vetala: The creature may use malevolence and possession as if it were a vetala, but by touch and only affecting creatures or corpses that are the same type of creature as the animal companion or familiar (such as bear, horse, or snake). If reduced to 0 hit points in combat, the creature is helpless and its fast healing ceases to function for 1 hour (additional damage or desecration has no effect); after 1 hour it regains 1 hit point and is no longer helpless, and its fast healing resumes. It can be permanently destroyed as if it were a vetala."
  },
  {
    "name": "Variant Prayer Scroll",
    "type": "General",
    "description": "You have learned the secret to changing the powers granted by your prayer scroll.",
    "prerequisites": ["Jiang-shi"],
    "prerequisitesFeats": ["Jiang-shi"],
    "benefit": "You gain the ability to create a different type of prayer scroll. You may create a prayer scroll with this ability by using any strip of parchment and a writing instrument, but doing so requires 10 minutes of uninterrupted work. Swapping your current prayer scroll for a different prepared one is a standard action. When wearing a different prayer scroll, you gain its special abilities, but lose your normal prayer scroll's immunity to spell completion and spell trigger magic items. Your prayer scrolls can be used only by you, and have no effect when used by other jiang-shis. When you choose this feat, select one of the following prayer scroll types. Embalmed Form: This prayer scroll alters your physical form to how you looked 1 day before your death. Treat this as an alter self spell that affects you regardless of your original or current type; your caster level is equal to your Hit Dice. Your speed increases by 10 feet, but you lose your immunity to trip attacks and your ability to move through difficult terrain unhindered. These effects persist indefinitely as long as you wear the prayer scroll, but end immediately if you use a different prayer scroll or 24 hours after you remove this prayer scroll. Enduring Dust: If you crumble into dust from hit point damage, you reform after 1 round instead of 1 minute. Scattering your dust does not prevent you from reforming as long none of your dust is more than 30 feet from any other part of your dust. Storing a portion of your dust in an air-tight container prevents you from reforming. If you are unable to reform after 1 minute, you are destroyed. Positive Energy Immunity: You become immune to positive channeled energy used to harm undead. This does not protect you against positive energy from other sources such as cure spells or lay on hands. Spell Immunity: The prayer scroll grants you immunity to a spell, as if you were using spell immunity. You decide which spell when you create the prayer scroll, and can choose a different spell each time you create a new spell immunity prayer scroll. If you have 15 or more Hit Dice, this functions as greater spell immunity. Creating this type of prayer scroll costs 100 gp x the spell level of the spell keyed to the scroll."
  },
  {
    "name": "Blinding Flash",
    "type": "Combat",
    "description": "You can temporarily blind your opponent by using your weapon or shield to flash sunlight into its eyes.",
    "prerequisites": ["Dex 13","Combat Expertise"],
    "prerequisitesFeats": ["Dex 13","Combat Expertise"],
    "benefit": "As a move action, you can expertly angle the blade of your weapon or shield to reflect light into an opponent's eyes, dazzling your foe for 1 round. This feat functions as a gaze attack, and the target must make a Fortitude save (DC 10 + 1/2 your character level + your Dex modifier) to resist the effect. This is a sight-dependent effect, and does not work on creatures that are already blinded or creatures that do not rely on sight as their primary sense. You must be wielding a weapon or shield with a polished or reflective surface in order to use this feat. You must be in an area of bright light to use this feat."
  },
  {
    "name": "Disorienting Blow",
    "type": "Combat",
    "description": "When you successfully strike your opponent with your Stunning Fist, you leave it in a state of confusion.",
    "prerequisites": ["Stunning Fist","base attack bonus +11"],
    "prerequisitesFeats": ["Stunning Fist","base attack bonus +11"],
    "benefit": "You must choose to use this ability before making an attack roll with your Stunning Fist, and this effect replaces other effects or conditions that would be caused by Stunning Fist. If you successfully hit your opponent and it fails its Fortitude save, it becomes confused for 1 round. Additional disorienting blows to the confused target add to the duration of its confusion. This feat is otherwise subject to all of the limits and conditions of Stunning Fist."
  },
  {
    "name": "Enhanced Ki Throw",
    "type": "Combat",
    "description": "You enhance the force of your ki throws, enabling you to devastate your opponents as you slam them to the ground.",
    "prerequisites": ["Ki pool class feature","Ki Throw (see the Pathfinder RPG Advanced Player's Guide)"],
    "prerequisitesFeats": ["Ki pool class feature","Ki Throw (see the Pathfinder RPG Advanced Player's Guide)"],
    "benefit": "When using the Ki Throw feat, you can expend 1 ki point to amplify the force of your attack. If your ki throw succeeds, when the target hits the ground, it takes damage as if you had hit it with an unarmed strike."
  },
  {
    "name": "Feinting Flurry",
    "type": "Combat",
    "description": "Your subtle flourishes mislead your enemy, tricking it into changing its footing.",
    "prerequisites": ["Dex 15","flurry of blows class feature","Combat Expertise"],
    "prerequisitesFeats": ["Dex 15","flurry of blows class feature","Combat Expertise"],
    "benefit": "While using flurry of blows to make melee attacks, you can forgo your first attack to make a Bluff check to feint."
  },
  {
    "name": "Hold the Blade",
    "type": "Combat",
    "description": "You can take your opponent's weapon after being stabbed in the back.",
    "prerequisites": ["Improved Disarm","base attack bonus +10"],
    "prerequisitesFeats": ["Improved Disarm","base attack bonus +10"],
    "benefit": "Whenever an enemy deals damage to you with a melee weapon as part of a flanking attack or sneak attack, you can make a combat maneuver check to disarm against that opponent as an immediate action. You must have at least one hand free when you use this feat. When you use this feat, you take a -4 penalty to your AC until your next turn. You can only use this feat once per round."
  },
  {
    "name": "Improved Feinting Flurry",
    "type": "Combat",
    "description": "Your first melee attack throws your opponent completely off guard.",
    "prerequisites": ["Dex 17","flurry of blows class feature","Combat Expertise","Feinting Flurry","base attack bonus +6"],
    "prerequisitesFeats": ["Dex 17","flurry of blows class feature","Combat Expertise","Feinting Flurry","base attack bonus +6"],
    "benefit": "While using Feinting Flurry, if you successfully feint, your opponent is denied its Dexterity bonus to AC until the end of your turn."
  },
  {
    "name": "Quivering Palm Adept",
    "type": "Combat",
    "description": "Your quivering palm strikes are more potent than most.",
    "prerequisites": ["Quivering palm class feature"],
    "prerequisitesFeats": ["Quivering palm class feature"],
    "benefit": "Add +2 to the saving throw DC against your quivering palm attacks."
  },
  {
    "name": "Quivering Palm Versatility",
    "type": "Combat",
    "description": "You can alter the way you apply a quivering palm's vibrations to an opponent's body to cause extreme pain, put it in a coma, or destroy its memories.",
    "prerequisites": ["Quivering palm class feature","base attack bonus +13"],
    "prerequisitesFeats": ["Quivering palm class feature","base attack bonus +13"],
    "benefit": "After successfully using your quivering palm attack on a creature, you can produce one of the following effects instead of killing the creature, as long as you do so within a number of days equal to your monk level. Coma: The subject falls unconscious and is helpless for a number of days equal to your monk level. Memory Loss: The subject falls unconscious for 24 hours and awakens with huge gaps in its memory. The target's memories of the recent past (a number of consecutive days equal to your monk level) are completely obliterated, and can only be restored by a wish or miracle spell. Pain: The subject takes 1d6 points of nonlethal damage per monk level you possess. You must choose the desired effect before the quivering palm's attack roll is made. Unless the target succeeds at its Fortitude save against your quivering palm attack, it succumbs to the desired effect when you will it (a free action). This feat is otherwise subject to all of the limits and conditions of quivering palm."
  },
  {
    "name": "Sleeper Hold",
    "type": "Combat",
    "description": "By maintaining a grapple hold on your opponent, you can cause it to lose consciousness.",
    "prerequisites": ["Greater Grapple","base attack bonus +8"],
    "prerequisitesFeats": ["Greater Grapple","base attack bonus +8"],
    "benefit": "You must declare that you are using this feat before you make a combat maneuver check to maintain a grapple (thus a failed check to maintain the grapple ruins the attempt). If you maintain a grapple for a number of consecutive rounds equal to your opponent's Constitution bonus (minimum 1 round), you can attempt to knock out your opponent. The victim must succeed at a Fortitude save (DC 10 + 1/2 your character level + your Str modifier) or else it falls unconscious for 1d4 rounds. Each successive round you attempt this, the target takes a cumulative -1 penalty on its saving throw. When you use this feat, you take an additional -2 penalty to your AC. Creatures that are immune to bleed damage, stunning, or critical hits are immune to this ability."
  },
  {
    "name": "Stunning Fist Adept",
    "type": "Combat",
    "description": "Your Stunning Fist strikes become even deadlier.",
    "prerequisites": ["Stunning Fist","base attack bonus +3"],
    "prerequisitesFeats": ["Stunning Fist","base attack bonus +3"],
    "benefit": "Add +1 to the saving throw DC against your Stunning Fist attacks. This bonus does not stack with feats that grant you bonuses to the DC for saving throws against your Stunning Fist attacks, such as Mantis Style (see Pathfinder RPG Ultimate Combat)."
  },
  {
    "name": "Arcane Trap Suppressor",
    "type": "General",
    "description": "Your magic can suppress magic traps longer than usual.",
    "prerequisites": ["Ability to cast dispel magic or greater dispel magic as a spell or spell-like ability"],
    "prerequisitesFeats": ["Ability to cast dispel magic or greater dispel magic as a spell or spell-like ability"],
    "benefit": "When you target a magic trap with dispel magic or greater dispel magic, if your caster level check exceeds the Disable Device DC of the trap, the trap is disabled for 1d4 minutes."
  },
  {
    "name": "Close Call",
    "type": "General",
    "description": "Your nimble fingers are able to catch small slips before they become big disasters.",
    "prerequisites": ["Deft Hands"],
    "prerequisitesFeats": ["Deft Hands"],
    "benefit": "Once per day, you may reroll either a Disable Device or Sleight of Hand check. You must decide to use this ability after the first attempt but before the results are revealed by the GM. You must take the second roll, even if it's worse."
  },
  {
    "name": "Tactical Reposition",
    "type": "Combat",
    "description": "You excel at moving foes right where you want them.",
    "prerequisites": ["Int 13","Combat Expertise","Improved RepositionAPG"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved RepositionAPG"],
    "benefit": "When making a reposition combat maneuver (Pathfinder RPG Advanced Player's Guide 322), you can move an enemy into a trap or other hazardous area, such as a pit, wall scythe, or blade barrier. When you do so, the moved enemy is treated as though it had activated the trap or triggered the hazard, and it takes a -2 penalty to AC and on saving throws to mitigate the trap or hazard's effects."
  },
  {
    "name": "Coaxing Spell",
    "type": "Metamagic",
    "description": "Your charms and enchantments reach the minds of even the lowliest dungeon denizens.",
    "prerequisites": ["Spell Focus (enchantment)","Knowledge (dungeoneering) 6 ranks"],
    "prerequisitesFeats": ["Spell Focus (enchantment)","Knowledge (dungeoneering) 6 ranks"],
    "benefit": "This feat only works with mind-affecting effects. A coaxing spell affects mindless oozes and vermin as if they weren't mindless, but has no effect on other creature types. A coaxing spell uses a spell slot 2 levels higher than the spell's actual level."
  },
  {
    "name": "Dampen Presence",
    "type": "General",
    "description": "Your habitual stillness makes you difficult to perceive for creatures that use blindsight or blindsense.",
    "prerequisites": ["Skill Focus (Stealth)","Stealth 5 ranks"],
    "prerequisitesFeats": ["Skill Focus (Stealth)","Stealth 5 ranks"],
    "benefit": "You may use the Stealth skill to hide from any creature attempting to perceive you using blindsight or blindsense, even if you are clearly in that creature's perceptual field. This feat does not confer any advantages against other forms of perception, such as scent, vision, or tremorsense."
  },
  {
    "name": "Cursed Item Detection",
    "type": "General",
    "description": "Your arcane prowess is so great that even cursed items fail to befuddle you.",
    "prerequisites": ["Spellcraft 5 ranks","ability to cast detect magic as a spell or spell-like ability"],
    "prerequisitesFeats": ["Spellcraft 5 ranks","ability to cast detect magic as a spell or spell-like ability"],
    "benefit": "You gain a +2 bonus on checks made to identify the properties of magic items. In addition, you need only exceed the DC of these checks by 5 in order to determine whether or not an item is cursed."
  },
  {
    "name": "Ostentatious Display",
    "type": "General",
    "description": "Your extravagant jewelry and accessories give you an air of importance you can use to your advantage in many social situations.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "As long as you are wearing a valuable nonmagical item in a magic item slot, you gain a +1 bonus on skill checks with a corresponding skill. Bonuses from wearing items in multiple slots that affect the same skill do not stack. Each item must be worth at least 5% of your character wealth by level (see Table 12-4 on page 399 of the Pathfinder RPG Core Rulebook). For example, a 6th-level PC gains a +1 bonus on Bluff checks while wearing a gem-studded tiara (which fills the headband slot) worth at least 800 gp. When she reaches 7th level, she must wear an accessory in the appropriate slot worth at least 1,175 gp in order to continue gaining this bonus. Item Slot Skill Bonus Belt, chest, shoulders +1 Intimidate Body, feet, neck +1 Diplomacy Eyes, hands, headband +1 Bluff Head, ring, wrists +1 Perform (any)"
  },
  {
    "name": "TORCH HANDLING",
    "type": "General",
    "description": "In your grasp, a simple torch becomes a beacon.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain three benefits upon taking this feat. First, you treat torches as simple weapons. Second, the radius of normal and increased illumination shed by any torch or mundane light source you carry increases by 10 feet. Finally, once per day you may reroll a single saving throw to resist any effect that would otherwise extinguish your light source, such as having water thrown at you, being targeted by a quench spell, and so on."
  },
  {
    "name": "Arcane Insight",
    "type": "General",
    "description": "Magical insight helps you evade attacks.",
    "prerequisites": ["Worshiper of Nethys","Arcane Shield (see the Advanced Player's Guide)"],
    "prerequisitesFeats": ["Worshiper of Nethys","Arcane Shield (see the Advanced Player's Guide)"],
    "benefit": "Whenever you use the Arcane Shield feat, you also gain a +1 insight bonus to your Armor Class for 1 round."
  },
  {
    "name": "Bloody Vengeance",
    "type": "Combat",
    "description": "Your retaliatory strikes have long-lasting effects.",
    "prerequisites": ["Worshiper of Calistria","base attack bonus +1"],
    "prerequisitesFeats": ["Worshiper of Calistria","base attack bonus +1"],
    "benefit": "If an opponent has damaged you within the past minute, you may study that opponent as a standard action. Thereafter, if you hit that creature with a melee attack, the target takes 1 point of bleed damage each round at the start of its turn. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage. Bleed damage does not stack. Bleed damage bypasses any damage reduction the creature might possess."
  },
  {
    "name": "Measured Response",
    "type": "Combat",
    "description": "You believe that a conservative but consistent response guarantees success.",
    "prerequisites": ["Worshiper of Abadar","base attack bonus +1"],
    "prerequisitesFeats": ["Worshiper of Abadar","base attack bonus +1"],
    "benefit": "When you hit an opponent with a melee or ranged attack, you may choose to deal average damage (rounded down), as if you had rolled exactly the average amount on the damage die or dice. You add your damage bonuses and penalties as normal."
  },
  {
    "name": "Riptide Attack",
    "type": "Combat",
    "description": "You can follow up a successful trip attempt with a drag maneuver.",
    "prerequisites": ["Worshiper of Gozreh","Improved Drag","Improved Trip"],
    "prerequisitesFeats": ["Worshiper of Gozreh","Improved Drag","Improved Trip"],
    "benefit": "When you succeed at a trip combat maneuver, you may automatically make a drag combat maneuver against your tripped target as a swift action. Your base attack bonus for the drag check is the same as the base attack bonus you used for the trip check. The drag attempt provokes attacks of opportunity as normal."
  },
  {
    "name": "Spiked Destroyer",
    "type": "Combat",
    "description": "You can attack with your armor spikes while using bull rush or overrun.",
    "prerequisites": ["Worshiper of Gorum","proficient in spiked armor"],
    "prerequisitesFeats": ["Worshiper of Gorum","proficient in spiked armor"],
    "benefit": "When you succeed at a bull rush or overrun combat maneuver, you may automatically make an attack roll with your armor spikes against the target of the maneuver as a swift action. This attack is made using your highest attack bonus."
  },
  {
    "name": "Steady Engagement",
    "type": "Combat",
    "description": "You can draw on your excellent balance to trip or disarm opponents when they try to disengage.",
    "prerequisites": ["Worshiper of Irori","Combat Reflexes","Stand Still"],
    "prerequisitesFeats": ["Worshiper of Irori","Combat Reflexes","Stand Still"],
    "benefit": "If you use the Stand Still feat to prevent an opponent from moving, you may make a disarm or trip combat maneuver against the target as an immediate action."
  },
  {
    "name": "Firebrand",
    "type": "Combat",
    "description": "You can make use of a torch as a deadly, macelike weapon.",
    "prerequisites": ["Worshiper of Asmodeus"],
    "prerequisitesFeats": ["Worshiper of Asmodeus"],
    "benefit": "You treat a torch as a light weapon that deals bludgeoning damage equal to that of a light mace of its size, plus 1 point of fire damage, and you do not incur penalties as you would for using it as an improvised weapon."
  },
  {
    "name": "Ordered Mind",
    "type": "General",
    "description": "Your study of Hell's laws improves your counterspells.",
    "prerequisites": ["Caster level 7th","lawful alignment","worshiper of Asmodeus"],
    "prerequisitesFeats": ["Caster level 7th","lawful alignment","worshiper of Asmodeus"],
    "benefit": "You are able to modify more of your spells to use as counterspells. The DC of the Spellcraft check you must succeed at to identify an opponent's spell is equal to 20 + the spell level of the opponent's spell (instead of 15 + the spell level), but you are able to cast as your counterspell any spell from the same school of the foe's spell (instead of the same spell). The level of the spell used to counterspell must be of a level equal to or higher than your foe's spell."
  },
  {
    "name": "Destroy Identity",
    "type": "General",
    "description": "You are able to use your weapons to destroy some of your opponent's most distinctive physical characteristics.",
    "prerequisites": ["Critical Focus","base attack bonus +11","worshiper of Lamashtu"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +11","worshiper of Lamashtu"],
    "benefit": "Whenever you score a critical hit against an opponent, the target is so maimed that it takes 2 points of Charisma damage and becomes staggered for 1 round."
  },
  {
    "name": "Fearsome Finish",
    "type": "General",
    "description": "When you slay enemies, you frighten other opponents.",
    "prerequisites": ["Intimidating Prowess","worshiper of Lamashtu"],
    "prerequisitesFeats": ["Intimidating Prowess","worshiper of Lamashtu"],
    "benefit": "Upon reducing an enemy to 0 or fewer hit points, for the remaining duration of the combat encounter, you gain a +4 bonus on any Intimidate checks made to demoralize opponents who can see both you and the opponent you reduced to 0 or fewer hit points. This bonus does not stack."
  },
  {
    "name": "Reject Poison",
    "type": "General",
    "description": "You are a careful poisoner, and know how to protect yourself against exposure to the ill effects of most substances.",
    "prerequisites": ["Dex 13","poison use class feature","worshiper of Norgorber"],
    "prerequisitesFeats": ["Dex 13","poison use class feature","worshiper of Norgorber"],
    "benefit": "Whenever a creature attempts to poison you with a poison you have previously used or undergone the effects of, you have a 20% chance of naturally rejecting the poison's effects on you, negating its effects and wasting its use."
  },
  {
    "name": "Shadow Dodge",
    "type": "General",
    "description": "You use light and darkness to your advantage, confusing your enemies and confounding their senses.",
    "prerequisites": ["Dex 13","worshiper of Norgorber"],
    "prerequisitesFeats": ["Dex 13","worshiper of Norgorber"],
    "benefit": "You are able to use the light around you to move back and forth from shadow to light again, and your sudden shifting dazzles your enemies' eyes. By spending a number of feet (in 10-foot increments) when you use this feat to move from one square to another and back again, you gain a Dodge bonus to your AC. This bonus is equal to +1 for every 10 feet you spend moving like this. You do not provoke an attack of opportunity while using this ability. Enemies who do not use sight in order to pinpoint your location or who are otherwise able to locate you more precisely (such as creatures that possess blindsight, tremorsense, or true seeing) ignore this AC bonus. Likewise, this feat is ineffective in areas of darkness or bright light, where one cannot readily shift between light and shadow."
  },
  {
    "name": "Merciless Rush",
    "type": "General",
    "description": "You are a determined foe, and though hordes may stand against you, they will not stand long.",
    "prerequisites": ["Improved Bull Rush","worshiper of Rovagug"],
    "prerequisitesFeats": ["Improved Bull Rush","worshiper of Rovagug"],
    "benefit": "When you bull rush a creature and your check exceeds the target's CMD by 5 or more, you can choose to move through that creature instead of pushing it back a number of feet, effectively trampling the creature and dealing it a number of points of damage equal to your Strength modifier."
  },
  {
    "name": "Squash Flat",
    "type": "General",
    "description": "You are able to bull rush an opponent straight to the ground.",
    "prerequisites": ["Improved Bull Rush","Merciless Rush","worshiper of Rovagug"],
    "prerequisitesFeats": ["Improved Bull Rush","Merciless Rush","worshiper of Rovagug"],
    "benefit": "Whenever you make a bull rush attack and your check exceeds the target's CMD by 5 or more, you can choose to expend one of the increments of 5 feet you would normally move the target back to instead attempt to trip the target as a part of your bull rush action. This does not provoke an attack of opportunity."
  },
  {
    "name": "Shatter Resolve",
    "type": "General",
    "description": "Damaging a foe with negative energy causes despair.",
    "prerequisites": ["Channel negative energy class feature","worshiper of Urgathoa"],
    "prerequisitesFeats": ["Channel negative energy class feature","worshiper of Urgathoa"],
    "benefit": "When you damage a creature by channeling negative energy, you fill it with fear. A creature that is affected by your channel negative energy ability and fails its Will save to halve the damage also becomes shaken for a number of rounds equal to the number of dice used to calculate the damage caused by the channel energy ability (so if you deal 1d6 points of damage, the condition lasts 1 round; if 2d6 points of damage, then 2 rounds, and so on)."
  },
  {
    "name": "Bloodletting",
    "type": "General",
    "description": "When you attack with a piercing or slashing weapon, the wounds you cause bleed profusely.",
    "prerequisites": ["Worshiper of Zon-Kuthon"],
    "prerequisitesFeats": ["Worshiper of Zon-Kuthon"],
    "benefit": "Whenever you threaten a creature with a critical hit with a piercing or slashing weapon (regardless of whether you confirm the critical hit or not), you cause that creature to bleed, making it take 1 point of bleed damage at the beginning of each round thereafter."
  },
  {
    "name": "Aldori Dueling Mastery",
    "type": "Combat",
    "description": "You have mastered the grueling fighting style perfected by the Aldori Swordlords.",
    "prerequisites": ["Exotic Weapon Proficiency (Aldori dueling sword)","Quick Draw","Weapon Finesse","Weapon Focus (Aldori dueling sword)"],
    "prerequisitesFeats": ["Exotic Weapon Proficiency (Aldori dueling sword)","Quick Draw","Weapon Finesse","Weapon Focus (Aldori dueling sword)"],
    "benefit": "You gain a +2 bonus on Initiative checks as long as you start combat with an Aldori dueling sword in your hand. As long as you wield only a single Aldori dueling sword in one hand, you gain a +2 shield bonus to your AC-if you wield the sword in two hands, this bonus drops to a +1 shield bonus to AC. Although the dueling sword inf licts slashing damage, you treat it as if it were also a piercing weapon when determining the effects of weapons used by a duelist."
  },
  {
    "name": "Altitude Affinity",
    "type": "General",
    "description": "You have hardened your body against the grueling rigors of surviving at high altitudes.",
    "prerequisites": ["Endurance"],
    "prerequisitesFeats": ["Endurance"],
    "benefit": "You are automatically acclimated at high altitudes (Pathfinder RPG Core Rulebook 430). In addition, you gain a +2 competence bonus on all Survival checks made at altitudes of 5,000 feet or higher."
  },
  {
    "name": "Andoren Falconry",
    "type": "General",
    "description": "You know the secret Andoren arts of falconry developed by the Novotnian family of Darkmoon Vale.",
    "prerequisites": ["Cha 13","Animal Affinity","animal companion class feature"],
    "prerequisitesFeats": ["Cha 13","Animal Affinity","animal companion class feature"],
    "benefit": "You improve your affinity with birds of prey, such as eagles, falcons, hawks, and owls. You gain a +2 bonus on Animal Handling checks made to train or control birds of prey. In addition, if you have a bird of prey as an animal companion, your animal companion gains one of the following bonuses chosen at the time this animal companion is gained: a +1 dodge bonus to AC, a +1 morale bonus on all attack rolls, or a +2 morale bonus on all Will saves."
  },
  {
    "name": "Arcane Vendetta",
    "type": "General",
    "description": "The mistreatment of your people by an arcane society (such as Numeria's Technic League or the White Witches of Irrisen) has made you particularly eager to inf lict harm on those who use arcane magic.",
    "prerequisites": ["Spellcraft 1 rank"],
    "prerequisitesFeats": ["Spellcraft 1 rank"],
    "benefit": "You deal +2 damage with weapon attacks made against any target you have witnessed casting an arcane spell (not using a spell-like ability) in the last 5 rounds. You must have successfully identified the spell with a Spellcraft check to know without a doubt that the spell is arcane."
  },
  {
    "name": "Careful Speaker",
    "type": "General",
    "description": "The paranoid terror that comes from living in a region with a dangerous government (such as Cheliax or Galt) has made you unusually aware of what you say.",
    "prerequisites": ["Wis 13"],
    "prerequisitesFeats": ["Wis 13"],
    "benefit": "You gain a +2 bonus on all Bluff checks made to fool someone or pass secret messages (but not to feint in combat), and a +2 bonus on all Will saves against attempts to scry upon you or read your mind."
  },
  {
    "name": "Cypher Magic",
    "type": "General",
    "description": "Your intimacy with runes and the mysteries of ancient arcana has taught you secret ways to draw greater power from magical writings. These unusual methods were initially devised by the Cyphermages of Riddleport, but they have since spread far and wide through the Inner Sea region.",
    "prerequisites": ["Int 15","Scribe Scroll"],
    "prerequisitesFeats": ["Int 15","Scribe Scroll"],
    "benefit": "You cast spells from scrolls at +1 caster level higher than the scroll's caster level. This benefit extends to scrolls that you have created. In addition, you gain a +2 bonus on caster level checks made to activate a scroll with a higher caster level than your own."
  },
  {
    "name": "Cypher Script",
    "type": "General",
    "description": "Through researching lengthy, ancient, arcane scripts, you have discovered a more efficient method of recording spells. As with the Cypher Magic feat, Cypher Script was originally developed by the Cyphermages of Riddleport, but has been spreading through the Inner Sea region recently.",
    "prerequisites": ["Knowledge (arcana) 1 rank","Linguistics 1 rank","Spellcraft 1 rank","spellbook class feature"],
    "prerequisitesFeats": ["Knowledge (arcana) 1 rank","Linguistics 1 rank","Spellcraft 1 rank","spellbook class feature"],
    "benefit": "Any spell you scribe in your spellbook costs half as much as normal and takes up only half the room it normally would (round all fractions up). It only takes you 10 minutes per spell level to scribe a spell into your spellbook (5 minutes for cantrips)."
  },
  {
    "name": "Demon Hunter",
    "type": "Combat",
    "description": "You are well-versed in demonic lore.",
    "prerequisites": ["Knowledge (planes) 6 ranks"],
    "prerequisitesFeats": ["Knowledge (planes) 6 ranks"],
    "benefit": "You gain a +2 bonus on Knowledge (planes) checks to know the powers and abilities of demons. You gain a +2 morale bonus on all attack rolls and a +2 morale bonus on caster level checks to penetrate spell resistance made against creatures with the demon subtype you recognize as demons."
  },
  {
    "name": "Dervish Dance",
    "type": "Combat",
    "description": "You have learned to turn your speed into power, even with a heavier blade.",
    "prerequisites": ["Dexterity 13","Weapon Finesse","Perform (dance) 2 ranks","proficient with scimitar"],
    "prerequisitesFeats": ["Dexterity 13","Weapon Finesse","Perform (dance) 2 ranks","proficient with scimitar"],
    "benefit": "When wielding a scimitar with one hand, you can use your Dexterity modifier instead of your Strength modifier on melee attack and damage rolls. You treat the scimitar as a one-handed piercing weapon for all feats and class abilities that require such a weapon (such as a duelist's precise strike ability). The scimitar must be for a creature of your size. You cannot use this feat if you are carrying a weapon or shield in your off hand."
  },
  {
    "name": "Desert Dweller",
    "type": "General",
    "description": "Your time spent living in merciless deserts has granted you resistance to extreme heat, starvation, and thirst.",
    "prerequisites": ["Con 13","Survival 1 rank"],
    "prerequisitesFeats": ["Con 13","Survival 1 rank"],
    "benefit": "You treat extreme heat conditions (Pathfinder RPG Core Rulebook 444) as severe heat, and severe heat as very hot conditions. You are not impacted at all by very hot conditions. In addition, you gain a +4 bonus on all Constitution checks made to resist the effects of starvation or thirst."
  },
  {
    "name": "Desperate Battler",
    "type": "Combat",
    "description": "Your experiences fighting against numerous foes that have already overwhelmed your allies, friends, and family have forced you to excel at fighting on your own.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When no ally is within 10 feet of you and you are not receiving benefits from the aid another action, you gain a +1 morale bonus on melee attack and damage rolls."
  },
  {
    "name": "Eye of the Arclord",
    "type": "General",
    "description": "Your understanding of the esoteric teachings of the Arclords of Nex allows you to open an eldritch eye that grants you superior perception of the magical world.",
    "prerequisites": ["Knowledge (arcana) 4 ranks","ability to cast arcane spells"],
    "prerequisitesFeats": ["Knowledge (arcana) 4 ranks","ability to cast arcane spells"],
    "benefit": "Once per day as a standard action, you can open an incandescent third eye upon your forehead. The eye can remain open for 1 minute, during which time you cast all divination spells at +1 caster level (as long as you begin casting the spell before the eye closes), gain darkvision 60 feet, and can use detect magic (as the spell of the same name). You gain a +8 bonus on Perception checks to notice invisible creatures while the eye is open as well."
  },
  {
    "name": "Fey Foundling",
    "type": "General",
    "description": "You were found in the wilds as a child, bearing a mark of the First World.",
    "prerequisites": ["You may only select this feat at 1st level"],
    "prerequisitesFeats": ["You may only select this feat at 1st level"],
    "benefit": "Your strange connection to the First World and the fey infuses you with life, and whenever you receive magical healing, you heal an additional 2 points per die rolled. You gain a +2 bonus on all saving throws against death effects. Unfortunately, you also suffer +1 point of damage from cold iron weapons (although you can wield cold iron weapons without significant discomfort)."
  },
  {
    "name": "Flagbearer",
    "type": "Combat",
    "description": "When brandishing a flag adorned with the standard of an organization you owe allegiance to, you inspire nearby members of the same allegiance.",
    "prerequisites": ["Cha 15"],
    "prerequisitesFeats": ["Cha 15"],
    "benefit": "As long as you hold your clan, house, or party's f lag (see page 293), members of that allegiance within 30 feet who can see the flag (including yourself ) gain a +1 morale bonus on attack rolls, weapon damage rolls, and saving throws against fear and charm effects. You must hold the flag in one hand in order to grant this bonus. If the standard is taken by the enemy or destroyed, this bonus becomes a penalty, affecting all creatures that the bonus previously affected for 1 hour (or until you reclaim the lost flag)."
  },
  {
    "name": "Focused Discipline",
    "type": "Combat",
    "description": "Familiarity with the military traditions of your homeland inspires uncommon valor in you.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain a +2 bonus on all saving throws against fear effects. Whenever a fear effect targets you and fails to affect you (either because of a successful saving throw or because of immunity to fear), you gain a +2 morale bonus on attack rolls, weapon damage rolls, and CMB checks against the creature that attempted to use the fear affect on you for 1 round."
  },
  {
    "name": "Fortune Teller",
    "type": "General",
    "description": "As a result of being raised in a land steeped in tradition and superstition (such as Varisia or Ustalav), you are skilled at communicating with the spirit world.",
    "prerequisites": ["Ability to cast divination spells"],
    "prerequisitesFeats": ["Ability to cast divination spells"],
    "benefit": "Upon taking this feat, choose a focus item for your divination magic-a crystal ball, runes, a Harrow deck, or some such item. Whenever you cast a spell from the divination school, you may use this focus item instead of the spell's material component, as long as the cost of the material component is no more than 1,000 gp. If you choose to perform the spell using your focus item and the spell's normal material component (regardless of that component's cost), you cast the spell at +1 caster level."
  },
  {
    "name": "Free Spirit",
    "type": "General",
    "description": "Your strong belief in the value of freedom protects you from mental and physical shackles.",
    "prerequisites": ["Cha 13","any chaotic alignment"],
    "prerequisitesFeats": ["Cha 13","any chaotic alignment"],
    "benefit": "You gain a +2 morale bonus on saving throws made against mind-affecting effects and on all Escape Artist or grapple checks made to escape a grapple or to escape from bonds."
  },
  {
    "name": "Godless Healing",
    "type": "General",
    "description": "You have mastered a specialized and complex technique to ignore pain by focusing your belief on the self rather than relying on faith.",
    "prerequisites": ["Cannot have a patron deity"],
    "prerequisitesFeats": ["Cannot have a patron deity"],
    "benefit": "Once per day when you have half your total hit points or fewer, you may heal yourself of an amount of damage equal to 1d8 plus your total Hit Dice as a move action. This is a supernatural ability."
  },
  {
    "name": "Green Faith Acolyte",
    "type": "General",
    "description": "You have trained to channel your magical energies in ways that do not harm the natural world around you.",
    "prerequisites": ["Follower of the Green Faith"],
    "prerequisitesFeats": ["Follower of the Green Faith"],
    "benefit": "Spells you cast that deal damage, channel negative energy, or otherwise harm life do not hurt normal or magical plants. In addition, whenever you cast a spell that utilizes, heals, or enhances normal or magical plants (such as entangle or plant growth), you cast the spell at +1 caster level."
  },
  {
    "name": "Hamatulatsu",
    "type": "Combat",
    "description": "You have mastered a deadly fighting form inspired by the hideous attacks of the barbed devil.",
    "prerequisites": ["Improved Unarmed Strike","Weapon Focus (unarmed strike)"],
    "prerequisitesFeats": ["Improved Unarmed Strike","Weapon Focus (unarmed strike)"],
    "benefit": "Your unarmed attacks can deal either bludgeoning or piercing damage. You decide which type of damage you deal whenever you attack a foe, but you may only choose one type at a time. If you critically hit a foe with your unarmed strike while doing piercing damage, the additional pain caused by the strike causes the foe to become sickened for 1 round (or staggered for 1 round if the target is already sickened). Multiple critical hits in a round against a single foe do not increase the duration of the sickened or staggered condition."
  },
  {
    "name": "Harmonic Spell",
    "type": "General",
    "description": "You can weave bardic music effects into your spellcasting in such a way that your spellcasting and bardic performance become indistinguishable.",
    "prerequisites": ["Bardic music ability"],
    "prerequisitesFeats": ["Bardic music ability"],
    "benefit": "Whenever you cast a spell while you are maintaining a bardic performance, you can maintain the bardic performance for that round without expending one of your rounds of performance for the day. In addition, you can switch from one bardic performance to another as a swift action when you cast a spell while maintaining a bardic performance."
  },
  {
    "name": "Harrowed",
    "type": "General",
    "description": "Numerous Harrow readings early in your life seem to have hit the mark precisely, increasing your belief that you are destined for a specific purpose in life.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +1 bonus on all Will saves made to resist enchantment effects. Once per day, you may draw a card from a Harrow deck you own. At any one time for the rest of that day, you may apply a +2 bonus on any d20 roll modified by the card's suit. For example, if you drew a card from the suit of Dexterity, you could apply this +2 bonus on an Initiative check, a Ref lex save, a Dexterity-based skill check, or a ranged attack roll. You may assign this +2 bonus after you make the roll, but you must do so before you know whether the roll was a success or not."
  },
  {
    "name": "Hermean Blood",
    "type": "General",
    "description": "You are the descendant of someone recruited to Hermea or the bastard result of a Hermean's illicit pairing with someone foreign to that land.",
    "prerequisites": ["You may only gain this feat at 1st level"],
    "prerequisitesFeats": ["You may only gain this feat at 1st level"],
    "benefit": "Though you may not know it, the blood of greatness flows in your veins. Pick two skills that share the same associated ability score. Those skills are always considered class skills for you. It's possible that Hermean agents may come looking for you, either to evaluate you for an invitation or to cover up an embarrassing dalliance, as determined by the GM's whim."
  },
  {
    "name": "Necromantic Affinity",
    "type": "General",
    "description": "Long exposure to necromantic energies has granted you a small measure of resistance against them.",
    "prerequisites": ["Con 15"],
    "prerequisitesFeats": ["Con 15"],
    "benefit": "You gain a +2 bonus on saving throws made to resist spells and effects that utilize negative energy, cause negative levels, or cause ability damage, ability drain, or ability penalties. In addition, damage caused by inf lict spells heals you as if you were an undead creature, but you also take damage from cure spells."
  },
  {
    "name": "Noble Scion",
    "type": "General",
    "description": "You are a member of a proud noble family, whether or not you remain in good standing with your family.",
    "prerequisites": ["Cha 13","must be taken at 1st level"],
    "prerequisitesFeats": ["Cha 13","must be taken at 1st level"],
    "benefit": "You gain a +2 bonus on all Knowledge (nobility) checks, and that chosen Knowledge skill is always considered a class skill for you. When you select this feat, choose one of the benefits listed below that matches the flavor of your noble family. Work with your GM to ensure that your choice is appropriate. Scion of the Arts: You gain a +1 bonus on all Perform checks, and Perform is always a class skill for you. If you have the bardic performance ability, you can use that ability for an additional 3 rounds per day. Scion of Lore: You gain a +1 bonus on all Knowledge skills in which you have at least 1 rank. Scion of Magic: You gain one of the following languages as a bonus language: Abyssal, Aklo, Celestial, Draconic, Infernal, or Sylvan. Once per day, as a free action, you can gain a +2 bonus on any Spellcraft check you make. You must spend the free action to gain this bonus before you make the check. Scion of Peace: Whenever you take 10 on a Wisdom-based skill, treat the result as if you had rolled a 13 instead of a 10. Scion of War: You use your Charisma modifier to adjust Initiative checks instead of your Dexterity modifier."
  },
  {
    "name": "Rapid Reload",
    "type": "Combat",
    "description": "Choose a type of crossbow (hand, light, heavy) or a single type of one-handed or two-handed firearm that you are proficient with. You can reload such a weapon quickly.",
    "prerequisites": ["Weapon Proficiency (crossbow type chosen) or Exotic Weapon Proficiency (firearm)"],
    "prerequisitesFeats": ["Weapon Proficiency (crossbow type chosen) or Exotic Weapon Proficiency (firearm)"],
    "benefit": "The time required for you to reload your chosen type of weapon is reduced to a free action (for a hand or light crossbow), a move action (for heavy crossbow or onehanded firearm), or a standard action (two-handed firearm). Reloading a crossbow or firearm still provokes attacks of opportunity. If you have selected this feat for a hand crossbow or light crossbow, you may fire that weapon as many times in a fullattack action as you could attack if you were using a bow."
  },
  {
    "name": "Rugged Northerner",
    "type": "General",
    "description": "You live a hard life in a cold climate and gain some benefit from it.",
    "prerequisites": ["Con 13","Survival 1 rank"],
    "prerequisitesFeats": ["Con 13","Survival 1 rank"],
    "benefit": "You treat extreme cold conditions (Pathfinder RPG Core Rulebook 442) as severe cold, and severe cold as cold weather conditions. You are not impacted at all by normal cold weather conditions. In addition, you do not become fatigued by frostbite or hypothermia."
  },
  {
    "name": "Scholar",
    "type": "General",
    "description": "You have graduated from one of the many colleges, universities, and specialty schools of higher learning scattered throughout the Inner Sea region.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Pick any two Knowledge skills. You gain a +2 bonus on these two skills. If you have 10 or more ranks in one of these Knowledge skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Secret Signs",
    "type": "General",
    "description": "You are particularly adept at communicating with others via innuendo, gestures, and secret hand signs.",
    "prerequisites": ["Int 13"],
    "prerequisitesFeats": ["Int 13"],
    "benefit": "You gain a +4 bonus on Bluff checks made to pass secret messages. In addition, you are adept at hiding the somatic components of spellcasting. If you cast a spell that has only somatic components, an observer must make a Perception check opposed by your Sleight of Hand check to notice your spellcasting. Spellcraft checks made to identify any spell you cast that has somatic components take a -2 penalty."
  },
  {
    "name": "Shade of the Uskwood",
    "type": "General",
    "description": "Ordained as one of the sinister albino druids who dwell within the heart of the Uskwood, you carry with you into the wider world a powerful effigy of hair, twigs, and blood that crawls with the deepening cold of the Midnight Lord's hallowed hunting grounds.",
    "prerequisites": ["Neutral evil","patron deity Zon-Kuthon"],
    "prerequisitesFeats": ["Neutral evil","patron deity Zon-Kuthon"],
    "benefit": "Add the following spells to your druid spell list. 0-disrupt undead, ray of frost; 1st-ghost sound, touch of fatigue; 2nd-chill touch, spectral hand; 3rd-ghoul touch, invisibility; 4th-displacement, ray of exhaustion; 5th-animate dead, phantasmal killer; 6th-nightmare, waves of fatigue; 7th-circle of death, shadow walk; 8th-mass invisibility, waves of exhaustion; 9th-horrid wilting, weird. Remove all spells with the fire descriptor from all your spell lists (not just your druid spell list). You cannot cast any spells with the fire descriptor, nor activate them off scrolls, wands, or any other magic devices. In addition, you may not use wild shape to take the form of any creature with the fire subtype."
  },
  {
    "name": "Shrewd Tactician",
    "type": "Combat",
    "description": "Your dealings with pirates, thieves, and assassins have taught you to be exceedingly careful.",
    "prerequisites": ["Alertness","Combat Reflexes"],
    "prerequisitesFeats": ["Alertness","Combat Reflexes"],
    "benefit": "Opponents do not gain a +2 bonus on attack rolls for flanking you, although they can still sneak attack you. You also gain a +3 bonus on Sense Motive checks made to resist a foe's Bluff checks to feint in combat."
  },
  {
    "name": "Stoic",
    "type": "General",
    "description": "You know from firsthand experience that life is a series of unforgiving trials, and that fear itself is something that can be conquered.",
    "prerequisites": ["Iron Will"],
    "prerequisitesFeats": ["Iron Will"],
    "benefit": "You gain a +1 bonus on all saving throws against fear effects. If you successfully save against any fear effect, you are immune to further fear effects from that source for 24 hours."
  },
  {
    "name": "Storm-Lashed",
    "type": "General",
    "description": "A life spent enduring gales and storms has hardened your body to the elements.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can ignore many of the effects of severe weather. In rainy conditions, your visibility is only reduced by one-quarter (not by half ) and you only take a -2 penalty on Perception checks. You are treated as if you were one size category larger for the purpose of wind effects, and halve any penalty to Perception caused by high winds. Finally, you gain a +2 bonus on all saving throws against electrical effects."
  },
  {
    "name": "Survivor",
    "type": "General",
    "description": "Only the strong thrive in your homeland, and you are no weakling, even among your kin.",
    "prerequisites": ["Con 13","Diehard","Endurance"],
    "prerequisitesFeats": ["Con 13","Diehard","Endurance"],
    "benefit": "You gain a +5 bonus on all Constitution checks made to stabilize while dying. Once per day, if you are struck by a critical hit or sneak attack, you can spend an immediate action to negate the critical or the sneak attack damage, making the attack a normal hit."
  },
  {
    "name": "Taldan Duelist",
    "type": "Combat",
    "description": "You trained at one of Taldor's elite fighting schools and are skilled at rondelero, the art of fighting with the falcata (see the Advanced Player's Guide) and buckler.",
    "prerequisites": ["Dex 13","Exotic Weapon Proficiency (falcata)","Shield Proficiency (buckler)","Weapon Focus (falcata)"],
    "prerequisitesFeats": ["Dex 13","Exotic Weapon Proficiency (falcata)","Shield Proficiency (buckler)","Weapon Focus (falcata)"],
    "benefit": "When fighting with the falcata and buckler, your shield bonus to AC increases by +1 and you gain a +2 bonus on Acrobatics checks."
  },
  {
    "name": "Totem Spirit",
    "type": "General",
    "description": "You are mystically tied to your tribe's sacred totem.",
    "prerequisites": ["Member of a Shoanti tribe"],
    "prerequisitesFeats": ["Member of a Shoanti tribe"],
    "benefit": "The benefit granted by this feat depends on which Shoanti tribe you belong to: Lyrune-Quah (Moon Clan): You gain a +1 bonus on Will saves and a +2 bonus on Perception checks. Shadde-Quah (Axe Clan): If you have the rage ability, you can rage for 3 additional rounds per day. You also gain a +2 bonus on Intimidate checks. Shriikirri-Quah (Hawk Clan): You gain a +2 bonus on Initiative checks and a +2 bonus on Ride checks. Shundar-Quah (Spire Clan): You gain a +1 bonus on Fortitude saves and a +2 bonus on Perception checks. Sklar-Quah (Sun Clan): You gain a +1 bonus on Ref lex saves and a +2 bonus on Acrobatics checks. Skoan-Quah (Skull Clan): You gain a +2 bonus on weapon damage against undead and a +2 bonus on Heal checks. Tamiir-Quah (Wind Clan): Your base land speed increases by 5 feet. You also gain a +2 bonus on Acrobatics checks."
  },
  {
    "name": "Varisian Tattoo",
    "type": "General",
    "description": "You bear intricate tattoos that inspire and empower your natural magic ability. These tattoos mark you as a worker of the ancient traditions of Varisian magic. A Varisian tattoo typically consists of a long string of complex characters from the Thassilonian alphabet.",
    "prerequisites": ["Spell Focus"],
    "prerequisitesFeats": ["Spell Focus"],
    "benefit": "Select a school of magic (other than divination) in which you have Spell Focus-you cast spells from this school at +1 caster level. Additionally, you gain a single spell-like ability usable up to three times per day. The spelllike ability gained (and its Varisian name) are as follows: Abjuration (avidais): resistance Conjuration (idolis): acid splash Enchantment (carnasia): daze Evocation (ragario): dancing lights Illusion (vangloris): ghost sound Necromancy (voratalo): touch of fatigue Transmutation (avaria): mage hand"
  },
  {
    "name": "Wand Dancer",
    "type": "General",
    "description": "You are trained in a tradition of Garundi courtesans and court mages that melds dance with the use of magic wands.",
    "prerequisites": ["Dex 13","Dodge","Mobility","Perform (dance) 5 ranks"],
    "prerequisitesFeats": ["Dex 13","Dodge","Mobility","Perform (dance) 5 ranks"],
    "benefit": "When using a spell trigger item, you can move both before and after triggering the item, as long as the total distance moved is not greater than your speed. Choose one creature potentially affected by your spell trigger item. Your movement does not provoke attacks of opportunity from that creature only. You must move at least 5 feet before and after using your spell trigger item to utilize this feat."
  },
  {
    "name": "Slaying Sprint",
    "type": "Combat",
    "description": "With swift feet and deadly intent, you finish off your target before anyone sees your blade.",
    "prerequisites": ["Dodge","Mobility","Spring Attack","base attack bonus +13"],
    "prerequisitesFeats": ["Dodge","Mobility","Spring Attack","base attack bonus +13"],
    "benefit": "You can move up to half your speed instead of taking a 5-foot step when taking a full-round action to perform a coup de grace. Performing a coup de grace does not provoke attacks of opportunity. You can use this feat only when wielding a light or onehanded weapon."
  },
  {
    "name": "Greater Serpent Lash",
    "type": "Combat",
    "description": "Your ability to disarm and pull foes off balance with your whip is impressive.",
    "prerequisites": ["Serpent Lash","base attack bonus +4"],
    "prerequisitesFeats": ["Serpent Lash","base attack bonus +4"],
    "benefit": "When you make a successful disarm or trip maneuver using the Serpent Lash feat, you can make your additional disarm or trip attempt against any target within your whip's reach. With a reposition maneuver, you can move the target creature to any point within your whip's reach."
  },
  {
    "name": "Serpent Lash",
    "type": "Combat",
    "description": "You are adept at vexing multiple foes with your whip.",
    "prerequisites": ["Weapon Finesse","proficient in whip"],
    "prerequisitesFeats": ["Weapon Finesse","proficient in whip"],
    "benefit": "As a standard action, you can make a disarm or trip maneuver with your whip. If it succeeds, you can make an additional disarm or trip maneuver with the same bonus against a target adjacent to the first and also within your whip's reach. In addition, you can use your whip to perform reposition maneuvers, though you take a -4 penalty on your CMB and you may only move the target toward you from its original position. This feat originally appeared in Pathfinder Campaign Setting: Osirion, Land of the Pharaohs."
  },
  {
    "name": "Circling Offense",
    "type": "Combat",
    "description": "You are skilled at approaching large foes with an ally in a way that makes it difficult for your foes to find an advantage against you or your ally.",
    "prerequisites": ["Dodge","Mobility","base attack bonus +3"],
    "prerequisitesFeats": ["Dodge","Mobility","base attack bonus +3"],
    "benefit": "You receive a +1 dodge bonus to your Armor Class against attacks of opportunity provoked by moving through a creature's reach, provided the creature is of a larger size category than you and provided at least one other ally with Circling Offense is within the creature's reach. If a creature that you're receiving this dodge bonus against attacks you and misses with the attack, it provokes attacks of opportunity from any of your allies who possess Circling Offense."
  },
  {
    "name": "Footslasher",
    "type": "Combat",
    "description": "You are trained to strike at a large foe's feet to impede its movement and cause great pain.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "If you damage a foe that is of a larger size category than you with a weapon that does piercing or slashing damage, you can attempt to damage the creature's feet in a way that impedes its movement. Attacking a foe in this way is a standard action-you cannot use Footslasher as part of a full-attack action. When you use Footslasher, you take a -2 penalty on your attack roll, but if you hit and deal at least 1 point of damage to the target, it is affected as if by caltrops-its speed is reduced by half. This penalty lasts for 24 hours, or until the creature is successfully treated with a DC 15 Heal check or receives at least 1 point of magical healing. Footslasher does not stack with itself-once a foe has been wounded by this attack, its speed cannot be further reduced by additional attacks (or by damage from caltrops)."
  },
  {
    "name": "Topple Foe",
    "type": "Combat",
    "description": "You and your allies can work together to trip larger foes.",
    "prerequisites": ["Combat Expertise","Improved Trip"],
    "prerequisitesFeats": ["Combat Expertise","Improved Trip"],
    "benefit": "If you attempt to trip a foe that is larger than you, you gain a +1 bonus on your CMB check to trip the foe as long as an ally with Topple Foe is flanking the foe with you. If multiple allies with Topple Foe are flanking the foe with you, you gain an additional +2 bonus on your CMD check for each additional ally that's flanking the target. The bonuses granted by this feat stack with those granted by Improved Trip and Greater Trip. Each time you attempt to trip the same foe in consecutive rounds, the bonus granted to your trip attempt increases by +1 per ally, to a maximum bonus of +4 per flanking ally on the 4th round of consecutive trip attempts."
  },
  {
    "name": "Jackal Heritage",
    "type": "General",
    "description": "A jackalwere crouches somewhere in your family tree.",
    "prerequisites": ["Humanoid","must be taken at 1st level"],
    "prerequisitesFeats": ["Humanoid","must be taken at 1st level"],
    "benefit": "You gain a +2 racial bonus on saving throws against mind-affecting effects, and a +2 racial bonus on Perception checks."
  },
  {
    "name": "Drunken Brawler",
    "type": "Combat",
    "description": "You have learned how to fight effectively while drunk.",
    "prerequisites": ["Endurance"],
    "prerequisitesFeats": ["Endurance"],
    "benefit": "When you drink a tankard of ale or strong alcohol, you take a -2 penalty on Reflex saving throws, but gain a number of temporary hit points equal to your level, and gain a +2 alchemical bonus on Fortitude and Will saving throws. These bonuses lasts an hour or until the temporary hit points gained by this effect are spent, whichever occurs first. The penalties last for a full hour."
  },
  {
    "name": "Butterfly's Sting",
    "type": "General",
    "description": "You can forgo a critical hit in order to pass it on to an ally.",
    "prerequisites": ["Combat Expertise"],
    "prerequisitesFeats": ["Combat Expertise"],
    "benefit": "When you confirm a critical hit against a creature, you can choose to forgo the effect of the critical hit and grant a critical hit to the next ally who hits the creature with a melee attack before the start of your next turn. Your attack only deals normal damage, and the next ally automatically confirms the hit as a critical."
  },
  {
    "name": "Divination Guide",
    "type": "General",
    "description": "Consulting the agents of your deity, you gain more guidance than most would.",
    "prerequisites": ["The ability to cast augury or divination","caster level 3rd"],
    "prerequisitesFeats": ["The ability to cast augury or divination","caster level 3rd"],
    "benefit": "Whenever you cast augury or divination, you receive further guidance by your deity's agents. You gain a +1 sacred bonus on all saving throws for 10 minutes per your caster level in the class you used to cast the augury or divination spell."
  },
  {
    "name": "Bullseye Shot",
    "type": "Combat",
    "description": "You slow your breath, calm yourself, and hit the bullseye, just as you were trained to.",
    "prerequisites": ["Point-Blank Shot","Precise Shot","base attack bonus +5"],
    "prerequisitesFeats": ["Point-Blank Shot","Precise Shot","base attack bonus +5"],
    "benefit": "You can spend a move action to steady your shot. When you do, you gain a +4 bonus on the next ranged attack roll you make before the end of your turn."
  },
  {
    "name": "Nimble Natural Summons",
    "type": "General",
    "description": "Your summoned natural allies ignore difficult terrain in undergrowth.",
    "prerequisites": ["Augmented Summoning","Spell Focus (conjuration)","caster level 6th"],
    "prerequisitesFeats": ["Augmented Summoning","Spell Focus (conjuration)","caster level 6th"],
    "benefit": "Creatures you summon with summon nature's ally can move through any sort of undergrowth (such as natural thorns, briars, and similar terrain) at their normal speeds without taking damage or suffering other impairment. Thorns, briars, and undergrowth areas that have been magically manipulated to impede motion, however, still affect the summoned creatures."
  },
  {
    "name": "Charge of the Righteous",
    "type": "Combat",
    "description": "You charge undead and fiends with confidence in your righteous cause.",
    "prerequisites": ["Base attack bonus +1"],
    "prerequisitesFeats": ["Base attack bonus +1"],
    "benefit": "When you charge an undead creature or an evil outsider, you do not take the -2 penalty for charging."
  },
  {
    "name": "Protector's Strike",
    "type": "General",
    "description": "When you smite evil, your divine power protects a creature within line of sight.",
    "prerequisites": ["Smite evil class feature","base attack bonus +5"],
    "prerequisitesFeats": ["Smite evil class feature","base attack bonus +5"],
    "benefit": "When you choose the target of your smite evil ability, you also choose one creature other than you within line of sight. While your smite is in effect, the additional creature you chose gains a deflection bonus to AC equal to your Charisma modifier against attacks made by the target of the smite. This bonus ends when the smite ends. You do not gain the deflection bonus to AC typical for the smite evil class feature."
  },
  {
    "name": "Bestow Hope",
    "type": "General",
    "description": "Upon healing a creature with positive energy, you also give it hope.",
    "prerequisites": ["Channel positive energy class feature","Improved Channel"],
    "prerequisitesFeats": ["Channel positive energy class feature","Improved Channel"],
    "benefit": "When you heal a creature by channeling positive energy, you also relieve its fear. If a creature you heal is shaken, that condition ends. If the creature is frightened, it becomes shaken instead. If the creature is panicked, it becomes frightened instead."
  },
  {
    "name": "Glorious Heat",
    "type": "General",
    "description": "When you cast divine fire spells, their heat empowers nearby allies.",
    "prerequisites": ["ability to cast divine spells","caster level 5th"],
    "prerequisitesFeats": ["ability to cast divine spells","caster level 5th"],
    "benefit": "When you cast a divine spell with the fire descriptor, choose a single ally within 30 feet that you can see. That ally heals half your level in hit points, and gains a +1 morale bonus on attack rolls until the end of its next turn."
  },
  {
    "name": "Spear Dancer",
    "type": "General",
    "description": "You incorporate a two-handed reach weapon into a dizzying martial dance.",
    "prerequisites": ["Weapon Focus (any twohanded reach weapon)","Perform 4 ranks"],
    "prerequisitesFeats": ["Weapon Focus (any twohanded reach weapon)","Perform 4 ranks"],
    "benefit": "Each time you hit a creature with a two-handed reach weapon that you have Weapon Focus in, the creature is dazzled for 1 round."
  },
  {
    "name": "Stone Read",
    "type": "General",
    "description": "Even the faint movement and vibrations of stone can alert you to trouble.",
    "prerequisites": ["Knowledge (dungeoneering) 4 ranks"],
    "prerequisitesFeats": ["Knowledge (dungeoneering) 4 ranks"],
    "benefit": "While within a primarily underground or mountainous environment, you gain a +2 bonus on Perception checks. If you have 10 or more ranks in Knowledge (dungeoneering), the bonus increases to +4."
  },
  {
    "name": "Undermining Exploit",
    "type": "General",
    "description": "Your familiarity with earth and stone gives you a distinct advantage on rocky battlefields.",
    "prerequisites": ["Knowledge (dungeoneering) 4 ranks"],
    "prerequisitesFeats": ["Knowledge (dungeoneering) 4 ranks"],
    "benefit": "You gain a +4 insight bonus on combat maneuvers against opponents that are located in rocky, difficult terrain."
  },
  {
    "name": "Ankle Biter",
    "type": "Combat",
    "description": "You know how take a mouthful out of anyone who tries to overpower you.",
    "prerequisites": ["Goblin","Escape Artist 1 rank"],
    "prerequisitesFeats": ["Goblin","Escape Artist 1 rank"],
    "benefit": "If you are the target of a combat maneuver you can, as an immediate action, attempt to bite your opponent in addition to any attacks of opportunity or other consequences your opponent might incur from attacking you. This bonus natural attack does not provoke an attack of opportunity itself and deals base damage appropriate for a creature of your current size (usually 1d4 for Small creatures). If grappled or pinned, you can continue to make this additional bite attack each round as swift action on your turn. You gain a bonus on any attempt to break the grapple equal to the damage you dealt with your bite that round."
  },
  {
    "name": "Battle Singer",
    "type": "General",
    "description": "Your battle songs can drive your fellow goblins to new heights of frenzy.",
    "prerequisites": ["Goblin","bardic performance class feature"],
    "prerequisitesFeats": ["Goblin","bardic performance class feature"],
    "benefit": "When using bardic performance to inspire courage in allies, you can choose to sing in Goblin-allies who do not speak Goblin gain no benefits from this performance. Allied goblins who hear your battle songs become more energetic and brave, and thus add the bonus granted by your inspire courage ability to all saving throws as a morale bonus."
  },
  {
    "name": "Dog Killer, Horse Hunter",
    "type": "General",
    "description": "Embracing fear and hatred of your ancestral foes allows you to make particularly telling blows.",
    "prerequisites": ["Goblin","Handle Animal 1 rank"],
    "prerequisitesFeats": ["Goblin","Handle Animal 1 rank"],
    "benefit": "You gain a +2 morale bonus on all attack and damage rolls made against dogs and horses (including doglike and horse-like targets such a nightmares or worgs). Additionally, you gain a +2 bonus on rolls to confirm critical hits against these foes."
  },
  {
    "name": "Lead from the Back",
    "type": "Combat",
    "description": "You allies depend far too much on your leadership and encouraging words for you to actually put yourself in harms' way.",
    "prerequisites": ["Goblin","Intimidate 1 rank"],
    "prerequisitesFeats": ["Goblin","Intimidate 1 rank"],
    "benefit": "During any round in which you gain the benefit of cover or concealment against at least one opponent, and you are not threatened by any opponent, you can bark orders and encouragement to your allies as a standard action. Doing so grants all allies within 30 feet a +1 bonus on all weapon damage rolls for 1 round."
  },
  {
    "name": "Letter Fury",
    "type": "General",
    "description": "You go wild when someone tries to steal the words from your head.",
    "prerequisites": ["Goblin","rage class feature"],
    "prerequisitesFeats": ["Goblin","rage class feature"],
    "benefit": "If someone reads or writes in your presence (including casting spells like glyph of warding or symbol) you can, as an immediate action, choose to activate your rage class ability for 1 round. This round of rage does not count toward the total number of rounds which you can rage each day, but if you wish to continue your rage beyond that single round you must expend rounds from your daily rage allotment as normal. Once you use this feat you must wait at least 1 minute after you cease raging before you can use it again."
  },
  {
    "name": "Roll With It",
    "type": "Combat",
    "description": "You know how to take a hit, even if your reaction sends you bouncing and flying out of battle while shrieking at the top of your lungs.",
    "prerequisites": ["Goblin","Acrobatics 1 rank"],
    "prerequisitesFeats": ["Goblin","Acrobatics 1 rank"],
    "benefit": "If you are struck by a melee weapon you can try to convert some or all of that damage into movement that sends you off in an uncontrolled bouncing roll. To do so, you must make an Acrobatics check (DC = 5 + the damage dealt from the attack) as an immediate action. If you succeed in this check, you take no damage from the actual attack but instead convert that damage into movement with each point equating to 1 foot of movement. For example, if you would have taken 6 points of damage, you would convert that into 6 feet of movement. You immediately move in a straight line in a direction of your choice this number of feet (rounded up to the nearest 5-foot-square), halting if you reach a distance equal to your actual speed. If this movement would make you strike an object or creature of your size or larger, the movement immediately ends, you take 1d4 points of damage, and fall prone in that square. This involuntary movement provokes attacks of opportunity normally if you move through threatened squares, but does not provoke an attack of opportunity from the creature that struck you in the first place. You are staggered for 1 round after you attempt to use this feat, whether or not you succeed."
  },
  {
    "name": "Saddle Shrieker",
    "type": "Combat",
    "description": "You sometimes get carried away when encouraging your mount to fight.",
    "prerequisites": ["Goblin","Ride 1 rank"],
    "prerequisitesFeats": ["Goblin","Ride 1 rank"],
    "benefit": "You can choose to take a -1 penalty on all attack rolls and combat maneuver checks to grant your mount a +1 bonus on all attack rolls and damage rolls made with natural weapons. These effects affect you and your mount for 1 round. When your base attack bonus reaches +4, and every 4 points thereafter, this penalty increases by -1 and the bonus to your mount's attack and damage increases by +1 to a maximum of +5. You must choose to use this feat before making an attack roll."
  },
  {
    "name": "Combat Distraction",
    "type": "General",
    "description": "Anyone who attacks you while you act like a lunatic exposes themselves to brutal counterattacks from your allies.",
    "prerequisites": ["Goblin","Acrobatics 1 rank","Escape Artist 1 rank"],
    "prerequisitesFeats": ["Goblin","Acrobatics 1 rank","Escape Artist 1 rank"],
    "benefit": "As a full-round action, you can choose to do something that seems to serve no useful purpose. Example actions could include laughing at another creature's misfortune, rooting in your pockets for a snack, bending over to pick up what looks like a weird bug, or trying to fly into the air by flapping your arms like a sea gull.Although you're acting like a lunatic, your unpredictable actions are distracting. Any creature other than a goblin within 5 feet of you takes a -2 penalty on Perception checks and concentration checks for as long as you continue to be a distraction and remain in range. This penalty stacks with other goblins performing combat distractions, as long as you're both adjacent to the distracted target."
  },
  {
    "name": "Vandal",
    "type": "General",
    "description": "Even other goblins admire your talent for mindless destruction.",
    "prerequisites": ["Goblin","sneak attack class feature"],
    "prerequisitesFeats": ["Goblin","sneak attack class feature"],
    "benefit": "You treat unattended objects as if they were vulnerable to your sneak attack, but you only deal half as much damage as you would against an actual creature. For instance, if you rolled 12 extra damage from the sneak attack you would deal an extra 6 damage to the object. This only applies when attacking unattended objects."
  },
  {
    "name": "Ammo Drop",
    "type": "Combat",
    "description": "Your coordination is so perfect that you can simply drop ammunition from your hand at the exact moment required for it to fall into an open sling as your twirl it around.",
    "prerequisites": ["Sleight of Hand 1 rank","proficient with sling"],
    "prerequisitesFeats": ["Sleight of Hand 1 rank","proficient with sling"],
    "benefit": "You can load a sling or one end of a double sling with one hand as a swift action or move action. This does not provoke an attack of opportunity."
  },
  {
    "name": "Halfling Slinger",
    "type": "Combat",
    "description": "You have honed your racial talent for slingcraft.",
    "prerequisites": ["Halfling"],
    "prerequisitesFeats": ["Halfling"],
    "benefit": "You gain a +1 racial bonus on attack rolls made using a sling."
  },
  {
    "name": "Juggle Load",
    "type": "Combat",
    "description": "Your fingers are so nimble that reloading your sling is almost effortless for you.",
    "prerequisites": ["Ammo Drop","Sleight of Hand 1 rank","proficient with sling"],
    "prerequisitesFeats": ["Ammo Drop","Sleight of Hand 1 rank","proficient with sling"],
    "benefit": "You can load a sling or double sling as a free action. This does not provoke attacks of opportunity. This feat allows you to fire your sling as many times in a fullattack action as you could attack if you were using a bow."
  },
  {
    "name": "Large Target",
    "type": "Combat",
    "description": "The larger a creature is, the easier you find it to strike a vulnerable spot when attacking with a sling.",
    "prerequisites": ["Proficient with sling"],
    "prerequisitesFeats": ["Proficient with sling"],
    "benefit": "Your attacks with all kinds of slings add a +1 bonus on damage rolls for every size category your opponent is larger than you. For example, if you are Small and your opponent Large (a difference of two sizes), you gain a +2 damage bonus. This is considered precision damage and is not multiplied on a critical hit."
  },
  {
    "name": "Whip-Slinger",
    "type": "Combat",
    "description": "You can use your sling as a sap to make attacks of opportunity.",
    "prerequisites": ["Proficient with sling"],
    "prerequisitesFeats": ["Proficient with sling"],
    "benefit": "When wielding a sling, double sling, or halfling sling staff, you threaten areas around you as normal and can make attacks of opportunity with the sling into these threatened areas. The sling deals 1d4 nonlethal bludgeoning damage (1d6 for a Medium wielder), threatens a critical hit on a 20, and deals x2 damage on a critical hit. If the sling isn't loaded with ammunition when you make an attack of opportunity, you take a -4 penalty on the attack roll."
  },
  {
    "name": "Amplified Rage",
    "type": "General",
    "description": "When adjacent to other raging allies, your rages become even more powerful.",
    "prerequisites": ["Half-orc or orc","rage class feature"],
    "prerequisitesFeats": ["Half-orc or orc","rage class feature"],
    "benefit": "Whenever you are raging and adjacent to a raging ally who also has this feat or flanking the same opponent as a raging ally with this feat, your morale bonuses to Strength and Constitution increase by +4. This feat does not stack with itself (you only gain this bonus from one qualifying ally, regardless of how many are adjacent to you)."
  },
  {
    "name": "Blood Vengeance",
    "type": "General",
    "description": "Seeing an ally fall in combat fills you with a murderous fury.",
    "prerequisites": ["Half-orc or orc","non-lawful"],
    "prerequisitesFeats": ["Half-orc or orc","non-lawful"],
    "benefit": "Whenever one of your worthy allies is brought to negative hit points or killed, you may enter a state similar to but less powerful than a barbarian's rage as a free action on your turn. If you have the rage class feature and are already raging, your morale bonuses to Strength and Constitution increase by +2 for the duration of your rage. If you do not have the rage class feature, or you have no more rage rounds left, this weaker rage gives you all the benefits and penalties of a rage, except your morale bonus to Strength and Constitution is only +2, and this state lasts for 4 rounds. As with a barbarian's rage, when this weaker rage ends, you are fatigued; if another ally falls before this duration ends, the weaker rage lasts for 4 more rounds after that. This feat does not allow you to enter a rage if you are fatigued. You may only use this feat if the fallen ally had at least as many Hit Dice as you."
  },
  {
    "name": "Brutal Grappler",
    "type": "Combat",
    "description": "When helping an ally grapple, you can damage the target.",
    "prerequisites": ["Half-orc or orc"],
    "prerequisitesFeats": ["Half-orc or orc"],
    "benefit": "When you and an ally with this feat have grappled the same creature, you may attempt to damage the opponent on your turn (whether you were the one who first initiated the grapple or were assisting your ally in doing so). You and the ally are treated as aiding each other in the grapple (+2 bonus on your grapple combat maneuver) as long as you both decide to maintain the grapple."
  },
  {
    "name": "Destroyer's Blessing",
    "type": "Combat",
    "description": "Breaking things adds to your power.",
    "prerequisites": ["Half-orc or orc","rage class feature","worshiper of the Destroyer"],
    "prerequisitesFeats": ["Half-orc or orc","rage class feature","worshiper of the Destroyer"],
    "benefit": "When you are raging and you succeed at a sunder attempt, you regain 1 round of rage. If the sunder attempt causes the object to gain the broken condition, you heal 1 hit point."
  },
  {
    "name": "Ferocious Tenacity",
    "type": "Combat",
    "description": "You spit in the face of death.",
    "prerequisites": ["Half-orc or orc","ferocity racial trait","rage class feature"],
    "prerequisitesFeats": ["Half-orc or orc","ferocity racial trait","rage class feature"],
    "benefit": "When raging, if you are hit by an attack that would deal enough hit points of damage to kill you (negative hit points equal to your Constitution score), as an immediate action you may expend 1 or more rounds of rage to negate some of this damage and keep yourself alive. Each round of rage you spend reduces the attack's damage by your raging Constitution bonus, but cannot reduce the damage taken below 1 hit point."
  },
  {
    "name": "Ferocious Tenacity",
    "type": "Combat",
    "description": "You spit in the face of death.",
    "prerequisites": ["Half-orc or orc","ferocity racial trait","rage class feature"],
    "prerequisitesFeats": ["Half-orc or orc","ferocity racial trait","rage class feature"],
    "benefit": "When raging, if you are hit by an attack that would deal enough hit points of damage to kill you (negative hit points equal to your Constitution score), as an immediate action you may expend 1 or more rounds of rage to negate some of this damage and keep yourself alive. Each round of rage you spend reduces the attack's damage by your raging Constitution bonus, but cannot reduce the damage taken below 1 hit point. For example, if you are raging, have a raging Constitution score of 18, are currently at 2 hit points, and are hit for 20 hit points of damage (which is enough to bring you to -18 hit points, killing you), you may spend 1 round of rage to reduce the damage by 4 (leaving you perilously close to death at -14 hit points); if you spend 5 rounds of rage, you reduce the damage to 1 (the minimum), leaving you with 1 hit point."
  },
  {
    "name": "Fire God's Blessing",
    "type": "General",
    "description": "The Fire God rewards you for killing enemies with flame.",
    "prerequisites": ["Half-orc or orc","worshiper of the Fire God"],
    "prerequisitesFeats": ["Half-orc or orc","worshiper of the Fire God"],
    "benefit": "When in combat, if you deal fire damage to an enemy, you heal 1 hit point. You can only benefit from this healing once per round. Attacks that cause a target to catch on fire heal you each round the target takes fire damage."
  },
  {
    "name": "Gore Fiend",
    "type": "Combat",
    "description": "Horrible wounds, whether on yourself or your enemies, makes your blood sing.",
    "prerequisites": ["Half-orc or orc","rage class feature"],
    "prerequisitesFeats": ["Half-orc or orc","rage class feature"],
    "benefit": "When you are raging and you confirm a critical hit with a melee weapon or suffer a critical hit yourself (whether by a melee weapon, spell, or ranged weapon), you regain 1 round of rage."
  },
  {
    "name": "Sympathetic Rage",
    "type": "Combat",
    "description": "Seeing an ally enter a rage causes you to enter a rage-like state.",
    "prerequisites": ["Half-orc or orc","non-lawful"],
    "prerequisitesFeats": ["Half-orc or orc","non-lawful"],
    "benefit": "Whenever you are adjacent to an ally who is raging, you may choose to enter a similar but less powerful rage as a free action on your turn. This weaker rage gives you all the benefits and penalties of a rage, except your morale bonus to Strength and Constitution is only +2. There is no limit to how long you can rage, as long as you remain adjacent to a raging ally (for example, you could take a 5-foot step away from one raging ally toward another raging ally and maintain your rage). As with a barbarian's rage, when this weaker rage ends, you are fatigued."
  },
  {
    "name": "Thrill of the Kill",
    "type": "General",
    "description": "Killing fuels your rage.",
    "prerequisites": ["Half-orc or orc","rage class feature"],
    "prerequisitesFeats": ["Half-orc or orc","rage class feature"],
    "benefit": "When you are raging and your attack brings an enemy to negative hit points or kills them, you regain 1 round of rage. You may only use this feat if the fallen enemy had at least as many Hit Dice as you."
  },
  {
    "name": "Warleader's Rage",
    "type": "General",
    "description": "Your rages are so inspiring to your allies that they don't have to remain adjacent to you to stay raging.",
    "prerequisites": ["Cha 13","half-orc or orc","non-lawful"],
    "prerequisitesFeats": ["Cha 13","half-orc or orc","non-lawful"],
    "benefit": "Feats and abilities that allow an ally to rage or enhance a rage if adjacent to you (such as Amplified Rage and Sympathetic Rage) persist as long as your ally is within 30 feet of you and can see you. The conditions to activate the rage effect remain unchanged. For example, an ally with Sympathetic Rage must be adjacent to you to enter his own rage, but once his rage begins, he can continue raging as long as he can see you and you are within 30 feet."
  },
  {
    "name": "Adept Channel",
    "type": "General",
    "description": "Some orc adepts enjoy a greater connection to their gods, and can channel their faith through their unholy symbols. You gain the ability to channel energy as a cleric.",
    "prerequisites": ["Ability to cast divine spells","summon familiar class ability","caster level 4th","Cha 13"],
    "prerequisitesFeats": ["Ability to cast divine spells","summon familiar class ability","caster level 4th","Cha 13"],
    "benefit": "You gain the channel energy class feature, as a cleric, usable 2 times per day. This ability otherwise functions like the cleric's channel energy ability, except that your effective cleric level is equal to your divine spellcasting class level -3. Unlike a cleric, however, the number of times per day you may channel energy is not affected by your Charisma modifier."
  },
  {
    "name": "Cold Celerity",
    "type": "General",
    "description": "You are a child of the frozen north, and you draw your strength from the biting cold and unforgiving conditions.",
    "prerequisites": ["Endurance"],
    "prerequisitesFeats": ["Endurance"],
    "benefit": "When you are in conditions of severe cold (below 0&#176; F), you gain a +2 bonus on initiative checks and a +1 bonus on attack rolls. In addition, you gain the same bonuses for 1 round after any round in which you take cold damage."
  },
  {
    "name": "Tribal Scars",
    "type": "General",
    "description": "You endured the grueling coming-of-age rituals of your tribe or following, and proudly bear the scars that grant you the blessings of your tribe's ancestors or totem.",
    "prerequisites": ["Member of a Mammoth Lords tribe or following"],
    "prerequisitesFeats": ["Member of a Mammoth Lords tribe or following"],
    "benefit": "You gain 6 hit points. In addition, you gain another benefit, depending on which Mammoth Lords following you belong to. Bearpelt: You gain a +1 bonus on Fortitude saves and a +2 bonus on Intimidate checks. Greattusk: You gain a +2 bonus on combat maneuver checks to make bull rush or overrun maneuvers and a +2 bonus on Ride checks. Ice Chasm: You gain a +1 bonus on Reflex saves and a +2 bonus on Climb checks. Night Hunt: You gain a +2 bonus on Perception and Survival checks. Raptorscale: Your base land speed increases by 5 feet, and you gain a +2 bonus on Acrobatics checks. Slothjaw: You gain a +1 bonus on Will saves and a +2 bonus on Handle Animal checks."
  },
  {
    "name": "Witchbreaker",
    "type": "Combat",
    "description": "Your training and skill in combating witches and hags have made you resistant to their magic, and you can disrupt their magical hatred.",
    "prerequisites": ["Iron Will"],
    "prerequisitesFeats": ["Iron Will"],
    "benefit": "You gain a +2 bonus on saving throws against the hexes, spells, spell-like abilities, and supernatural abilities of witches and hags. In addition, whenever you score a critical hit against such a creature, any allies under the effects of a mind-affecting effect from that creature may attempt a new save against the effect as an immediate action."
  },
  {
    "name": "DEADLY DEALER",
    "type": "General",
    "description": "Your skill with handling cards and arcane talents allow you to turn mundane cards into deadly weapons.",
    "prerequisites": ["Arcane Strike","Sleight of Hand 5 ranks"],
    "prerequisitesFeats": ["Arcane Strike","Sleight of Hand 5 ranks"],
    "benefit": "You can throw a card as though it were a dart, with the same damage, range, and other features. You must use the Arcane Strike feat when throwing a card in this way, or else the card lacks the magical force and precision to deal lethal damage. A card is destroyed when thrown in this way. Harrow cards are treated as masterwork weapons when thrown using this feat, but are still destroyed after they are thrown. A harrow deck can no longer be used as a fortune-telling device after even a single card is thrown. A spellcaster with this feat can enhance a deck of cards as though it were a ranged weapon with 54 pieces of ammunition. This enhancement functions only when used in tandem with this feat, and has no affect on any other way the cards might be used. Only a character who possesses this feat can make use of an enhanced deck of cards, and must still use the Arcane Strike feat to activate the cards' enhancement. You have mastered the ancient Shoanti Thunder and Fang fighting style, allowing you to fight with increased effectiveness when wielding an earth breaker and klar. Prerequisites: Str 15, Two-Weapon Fighting, Weapon Focus (earth breaker), Weapon Focus (klar) You can use an earth breaker as though it were a one-handed weapon. When using an earth breaker in one hand and a klar in your off hand, you retain the shield bonus your klar grants to your Armor Class even when you use it to attack. Treat your klar as a light weapon for the purposes of determining your two-weapon fighting penalty."
  },
  {
    "name": "Thunder And Fang",
    "type": "General",
    "description": "You have mastered the ancient Shoanti Thunder and Fang fighting style, allowing you to fight with increased effectiveness when wielding an earth breaker and klar.",
    "prerequisites": ["Str 15","Two-Weapon Fighting","Weapon Focus (earth breaker)","Weapon Focus (klar)"],
    "prerequisitesFeats": ["Str 15","Two-Weapon Fighting","Weapon Focus (earth breaker)","Weapon Focus (klar)"],
    "benefit": "You can use an earth breaker as though it were a one-handed weapon. When using an earth breaker in one hand and a klar in your off hand, you retain the shield bonus your klar grants to your Armor Class even when you use it to attack. Treat your klar as a light weapon for the purposes of determining your two-weapon fighting penalty."
  },
  {
    "name": "Chainbreaker",
    "type": "Achievement",
    "description": "Nothing rouses your fury and makes you more deadly in battle than the sight of slaves cowering before their masters.",
    "prerequisites": ["Over the course of at least five different occasions","free a cumulative total of 50+ sentient beings held in unjust captivity"],
    "prerequisitesFeats": ["Over the course of at least five different occasions","free a cumulative total of 50+ sentient beings held in unjust captivity"],
    "benefit": "When in combat with an opponent that you know owns or trades in slaves, once per round you may add a bonus to damage rolls for a melee attack, ranged attack, or targeted spell against that opponent. This bonus damage is +1 for every four Hit Dice you have."
  },
  {
    "name": "Devil's Foe",
    "type": "Achievement",
    "description": "Once you were just another helpless victim, but now even the deepest pits of Hell ring with the lamentations of your adversaries.",
    "prerequisites": ["Face 10 different devils in combat and take damage or suffer some other sort of injury from five or more attacks made by each one without falling unconscious","fleeing","or otherwise becoming unable to strike back at them"],
    "prerequisitesFeats": ["Face 10 different devils in combat and take damage or suffer some other sort of injury from five or more attacks made by each one without falling unconscious","fleeing","or otherwise becoming unable to strike back at them"],
    "benefit": "Your attacks count as good-aligned for the purposes of bypassing the damage reduction of devils."
  },
  {
    "name": "Eagle Knight Candidate",
    "type": "Achievement",
    "description": "You have proven your courage and skill to both the Eagle Knights and the leaders of Andoran.",
    "prerequisites": ["Character level 5th","convince four different Eagle Knights and either a member of the People's Council or an Andoran town mayor to write letters of commendation on your behalf"],
    "prerequisitesFeats": ["Character level 5th","convince four different Eagle Knights and either a member of the People's Council or an Andoran town mayor to write letters of commendation on your behalf"],
    "benefit": "Choose one branch of the Eagle Knights you hope to join. You gain a specific benefit based on this choice. Golden Legion: Each round as a move action, you may issue commands to all allies within 30 feet who can see and hear you. Each affected ally that obeys your orders gains a +1 bonus on attack rolls, Armor Class, and saving throws during that round. Steel Falcons: You deal +1 damage with weapon attacks directed at any creature against which you have concealment. If you have total concealment against the creature, this bonus increases to +2. Twilight Talons: During the surprise round, the threat range of your weapons doubles for any attack made against unaware targets. This does not stack with any other effect that expands the threat range of a weapon."
  },
  {
    "name": "Talmandor's Lifting",
    "type": "Achievement",
    "description": "You felt the powerful wings of Talmandor surround you when you risked death from a fall, and somehow a tiny spark of his essence remains connected to your soul.",
    "prerequisites": ["Take at least 10d6 falling damage on three different occasions and survive"],
    "prerequisitesFeats": ["Take at least 10d6 falling damage on three different occasions and survive"],
    "benefit": "When you cast a healing spell on an unharmed creature, it briefly manifests as a pair of wings made of golden light. The spell's duration becomes \"1 hour or until discharged.\" For the next hour, the spell remains on the target, triggering automatically as a swift action if the creature takes damage or experiences an effect that the spell could cure, mitigate, or remove (which causes the wings of light to appear briefly). For example, if you cast lesser restoration on an ally who had no ability damage, the spell would trigger immediately if the target became fatigued, exhausted, or took ability damage, but not if the target suffered ability drain, energy drain, or hit point damage (none of which are affected by lesser restoration)."
  },
  {
    "name": "Advanced Defensive Combat Training",
    "type": "Combat",
    "description": "You are a master at defending yourself from all manner of combat maneuvers.",
    "prerequisites": ["Defensive Combat Training","Bellf lower Network 10 TPA"],
    "prerequisitesFeats": ["Defensive Combat Training","Bellf lower Network 10 TPA"],
    "benefit": "You gain a +4 bonus to your CMD."
  },
  {
    "name": "Bloodstone Manhunter",
    "type": "General",
    "description": "You are skilled at fighting criminal humans such as bandits.",
    "prerequisites": ["Bloodstone Swords 10 TPA"],
    "prerequisitesFeats": ["Bloodstone Swords 10 TPA"],
    "benefit": "You gain a +1 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against humans, and a +1 bonus on weapon attack and damage rolls against humans. If you have a favored enemy bonus against humans, this feat does not stack with that bonus."
  },
  {
    "name": "Calm Disposition",
    "type": "General",
    "description": "You always appear to be in control of your situation.",
    "prerequisites": ["Prophets of Kalistrade 10 TPA"],
    "prerequisitesFeats": ["Prophets of Kalistrade 10 TPA"],
    "benefit": "You gain +2 bonus on saving throws against effects that affect your composure. This includes all mindaffecting spells, as well as any spell or ability that would cause you to behave in an out-of-control manner, such as fear effects and nausea. This does not include physical effects such as fatigue, and does not reduce any damage taken from concurrent effects."
  },
  {
    "name": "Death's Suitor",
    "type": "General",
    "description": "You have died and returned so often that even Pharasma now deems it part of your fate.",
    "prerequisites": ["Risen Guard 20 TPA"],
    "prerequisitesFeats": ["Risen Guard 20 TPA"],
    "benefit": "Once per day, you may reroll a save or skill check if failure has a chance of killing you (whether from hit point damage, ability damage, or some instant effect). You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse."
  },
  {
    "name": "Disassemble Magic Item",
    "type": "General",
    "description": "You can take apart and reassemble magic items.",
    "prerequisites": ["Any item creation feat","Aspis Consortium 20 TPA"],
    "prerequisitesFeats": ["Any item creation feat","Aspis Consortium 20 TPA"],
    "benefit": "You can break a magic item down into component pieces. These pieces are nonmagical and may have little resemblance to the original item other than being of the same material (a magical sword may be three recognizable metal pieces or simply a collection of metal scraps). Disassembling a magic item takes 1 hour per 1,000 gp of the item's price and requires you to concentrate as if crafting an item. You can only use this feat on items your item creation feat would let you craft (for example, if you have Craft Wondrous Item, you can disassemble wondrous items but not magic weapons or armor). You may reassemble a dismantled item as long as all the pieces are present; this takes the same amount of time as taking it apart did. There is a 10% chance the reconstruction fails and the item is permanently destroyed."
  },
  {
    "name": "Divine Deception",
    "type": "General",
    "description": "You are skilled at manipulating divine magical items.",
    "prerequisites": ["Knowledge (religion) 5 ranks","Use Magic Device 5 ranks"],
    "prerequisitesFeats": ["Knowledge (religion) 5 ranks","Use Magic Device 5 ranks"],
    "benefit": "You gain a +5 bonus on Use Magic Device checks to use divine spell-trigger or spell completion items or to emulate a divine class feature."
  },
  {
    "name": "Fast Crawl",
    "type": "General",
    "description": "You are skilled at moving while prone.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "While prone, you can move at half speed. This movement provokes attacks of opportunity as normal. You can take a 5-foot step while crawling. This benefit does not stack with the rogue crawl talent."
  },
  {
    "name": "Fearsome Barricade",
    "type": "Combat",
    "description": "Your wrath is as potent a barrier as your blades.",
    "prerequisites": ["Intimidate 5 ranks","Ulfen Guard TPA 20"],
    "prerequisitesFeats": ["Intimidate 5 ranks","Ulfen Guard TPA 20"],
    "benefit": "Choose an adjacent ally as a free action on your turn. Once per round, when an opponent attacks that ally, you may make an Intimidate check to demoralize the opponent as an immediate action. This action counts as an attack of opportunity."
  },
  {
    "name": "Grand Master Performer",
    "type": "General",
    "description": "You grant your allies even greater bonuses when using your bardic performance abilities.",
    "prerequisites": ["Bardic performance class feature","Extra Performance","Master Performer","bard level 8th","Kitharodian Academy 20 TPA"],
    "prerequisitesFeats": ["Bardic performance class feature","Extra Performance","Master Performer","bard level 8th","Kitharodian Academy 20 TPA"],
    "benefit": "When any of your bardic performance abilities grant your allies a bonus, that bonus increases by +1. This bonus stacks with the bonus from the Master Performer feat."
  },
  {
    "name": "Ki Diversity",
    "type": "Combat",
    "description": "You have trained at the feet of the masters of the Kusari- Gama, a secret society of monk warriors. With their secrets you have mastered new ways to apply your ki.",
    "prerequisites": ["Ki pool class feature","Wis 13","Kusari-Gama 25 TPA"],
    "prerequisitesFeats": ["Ki pool class feature","Wis 13","Kusari-Gama 25 TPA"],
    "benefit": "You learn how to channel your ki in a new ability. Choose one of the following ki powers: Bone Crusher: When you succeed at a trip or disarm combat maneuver, you may spend 1 point from your ki pool as a swift action to deal damage to your opponent as if you had hit them with an unarmed strike. Dim Mak: You may spend 1 point from your ki pool as a swift action to execute your next Stunning Fist attack as a melee touch attack rather than a normal melee attack. Mind of the Kensai: You may spend 1 point from your ki pool as a swift action to imbue a single melee weapon in your hands with the ki focus weapon special ability until your next turn. Wings of the Crane: If you have the Deflect Arrows feat, you may spend 1 point from your ki pool as an immediate action to use that feat to deflect a second missile weapon that round. If you have the Snatch Arrows feat, you may use this ability to catch a second weapon, but not throw it back. Zen Combatant: You may spend 1 point from your ki pool as a swift action to substitute your Wisdom score for your Strength or Dexterity for all melee or ranged attacks you make that round."
  },
  {
    "name": "Let Them Come",
    "type": "Combat",
    "description": "You have trained to fight onrushing enemy hordes. With a carefully timed strike you ensure that their reckless charge will be their undoing.",
    "prerequisites": ["Dwarf","Ninth Battalion TPA 25"],
    "prerequisitesFeats": ["Dwarf","Ninth Battalion TPA 25"],
    "benefit": "You treat all one- or two-handed melee weapons as if they had the brace special feature."
  },
  {
    "name": "Master Performer",
    "type": "General",
    "description": "When using your bardic performance abilities, you grant your allies greater bonuses.",
    "prerequisites": ["Bardic performance class feature","Extra Performance","Kitharodian Academy 15 TPA"],
    "prerequisitesFeats": ["Bardic performance class feature","Extra Performance","Kitharodian Academy 15 TPA"],
    "benefit": "When any of your bardic performance abilities grant your allies a bonus, that bonus is increased by +1."
  },
  {
    "name": "Nameless Servitor",
    "type": "General",
    "description": "The fact that you have given up your real name makes you resistant to certain types of magic.",
    "prerequisites": ["Risen Guard rank","Risen Guard 10 TPA"],
    "prerequisitesFeats": ["Risen Guard rank","Risen Guard 10 TPA"],
    "benefit": "Anyone who attempts to use magic in order to learn personal information about you, such as through divination, scrying, or similar magic, must make a caster level check with a DC equal to 10 plus your level to succeed. You are immune to spells that require the use of your name in order to function (such as trap the soul). Most members of the Risen Guard with this feat are addressed by their rank."
  },
  {
    "name": "Old Cults Awakener",
    "type": "General",
    "description": "You hear the voices of the Old Ones, and believe it is your destiny to awaken others to their ancient cause using bizarre and torturous rituals. Whether your work leaves these individuals mad or truly touched by alien sentience remains unproven.",
    "prerequisites": ["Old Cults 20 TPA"],
    "prerequisitesFeats": ["Old Cults 20 TPA"],
    "benefit": "You can attempt a DC 25 Heal check upon an unconscious but stable intelligent creature. The ritual takes 1 hour to complete. If it's successful, the victim must make a DC 25 Will save or he gains a false memory of a vision that he has personally been chosen by the Great Old Ones to serve them (treat as an implanted memory from modify memory, except this is a nonmagical effect). If the ritual is unsuccessful, the victim takes 1d2 points of Intelligence and Wisdom drain; you may attempt the ritual again."
  },
  {
    "name": "Ominous Mien",
    "type": "General",
    "description": "Your walk, stance, and voice all amplify your status as a Hellknight when you cast spells or use spell-like abilities against opponents.",
    "prerequisites": ["Hellknight rank","Hellknight 10 TPA"],
    "prerequisitesFeats": ["Hellknight rank","Hellknight 10 TPA"],
    "benefit": "Whenever you cast a spell or use a spell-like ability from the compulsion, fear, phantasm, or shadow sub-schools, add +1 to the DC of the saving throw against that spell or effect."
  },
  {
    "name": "Silent Performer",
    "type": "General",
    "description": "You can use any bardic performance ability without making a sound.",
    "prerequisites": ["Bardic performance class feature","Extra Performance","Master Performer","bard level 12th","Kitharodian Academy 15 TPA"],
    "prerequisitesFeats": ["Bardic performance class feature","Extra Performance","Master Performer","bard level 12th","Kitharodian Academy 15 TPA"],
    "benefit": "You can use your audible-component bardic performance as visual-component bardic performances. Any bardic ability used in this manner expends 4 times as many bardic performance rounds as normal."
  },
  {
    "name": "Touched By Sacred Fire",
    "type": "General",
    "description": "Regular contact with an elemental guardian of the Ruby Prince (such as Khemet's invisible fire elemental cohort Janhelia) has left you able to shrug off many sources of unnatural heat, even if the effort required sometimes makes it difficult to defend yourself from attacks.",
    "prerequisites": ["Endurance","Risen Guard rank","Risen Guard 15 TPA"],
    "prerequisitesFeats": ["Endurance","Risen Guard rank","Risen Guard 15 TPA"],
    "benefit": "You gain fire resistance 5 and a +2 bonus on all saving throws to resist the effects of fire or heat. As a swift action, you can increase your fire resistance to 10 and your save bonus to +4 until your next turn; this causes you to lose your Dexterity bonus to Armor Class until your next turn (which leaves you vulnerable to sneak attacks)."
  },
  {
    "name": "Verbose Performer",
    "type": "General",
    "description": "The range of your bardic performances increases.",
    "prerequisites": ["Bardic performance class feature","Extra Performance","Master Performer","bard level 8th","Kitharodian Academy 15 TPA"],
    "prerequisitesFeats": ["Bardic performance class feature","Extra Performance","Master Performer","bard level 8th","Kitharodian Academy 15 TPA"],
    "benefit": "Double the range of any bardic performance ability that possesses a range in the ability description."
  },
  {
    "name": "Whispered Knowledge",
    "type": "General",
    "description": "You possess secret knowledge that enhances and helps perfect your undead form.",
    "prerequisites": ["Corporeal undead","Whispering Way 15 TPA"],
    "prerequisitesFeats": ["Corporeal undead","Whispering Way 15 TPA"],
    "benefit": "Choose one of the following secrets: Secret of Blood: After successfully dealing damage to a living creature with a melee attack, you can consume that creature's blood from your weapon as a swift action, gaining 1d8 temporary hit points, a +2 enhancement bonus to Strength, and a +1 bonus to your caster level. This lasts 10 minutes per Hit Die of your target, and otherwise acts as a death knell spell. Secret of Bone: Your bones harden and calcify. You gain DR 5/bludgeoning. Secret of Brains: As secret of blood, but you gain a +2 enhancement bonus to your Intelligence instead of Strength. This ability has no effect on mindless targets. Secret of the Grave: You can designate an unholy container for your remains, such as a coffin, canopic jar, or burial urn. When in this container and not taking any actions, you gain fast healing 5."
  },
  {
    "name": "Blood Of Heroes",
    "type": "General",
    "description": "You have a sense of destiny about you and always seem to succeed, even when the odds are against you.",
    "prerequisites": ["Hero's Fortune"],
    "prerequisitesFeats": ["Hero's Fortune"],
    "benefit": "Whenever you gain a level, you gain 2 hero points instead of 1."
  },
  {
    "name": "Hero's Fortune",
    "type": "General",
    "description": "Even at the start of your career, it was clear that you had a chance at greatness, and your legend continues to grow with every adventure.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain a hero point. The maximum number of hero points you can have at any one time is increased to 5."
  },
  {
    "name": "Luck Of Heroes",
    "type": "General",
    "description": "To others, it seems that you always have a bit of luck around you.",
    "prerequisites": ["Hero's Fortune"],
    "prerequisitesFeats": ["Hero's Fortune"],
    "benefit": "Whenever you spend a hero point to reroll a die roll or to grant yourself a bonus before a die roll is made, there is a chance that the hero point is not spent. Whenever you spend a hero point, roll a d20. If the result is greater than 15, the hero point is not spent. You cannot use this feat when you cheat death."
  },
  {
    "name": "Celestial Obedience",
    "type": "General",
    "description": "Your reverence for an empyreal lord is so great that daily prayer and minor sacrifices grant you special boons.",
    "prerequisites": ["Knowledge (planes) 3 ranks","must worship an empyreal lord"],
    "prerequisitesFeats": ["Knowledge (planes) 3 ranks","must worship an empyreal lord"],
    "benefit": "Each empyreal lord requires a different obedience, but all obediences take only 1 hour to perform. Once you've performed the obedience, you gain the benefit of a special ability or resistance as indicated in the \"Obedience\" entry for the empyreal lord. If you have at least 12 Hit Dice, you also gain the first boon granted by your empyreal lord upon undertaking your obedience. If you have at least 16 Hit Dice, you also gain the empyreal lord's second boon. If you have 20 Hit Dice or more, you also gain the empyreal lord's third boon. Unless a specific duration or number of uses per day is listed, a boon's effects are constant. Mystery cultists (see page 48) gain access to these boons at lower levels as a benefit of their prestige class. If you ever fail to perform a daily obedience, you lose all access to the benefits and boons granted by this feat until you next perform the obedience."
  },
  {
    "name": "Accursed",
    "type": "Story",
    "description": "Your curse weighs down your soul like a millstone around your neck.",
    "prerequisites": ["You must carry a curse that can be lifted only by a quest or similar great undertaking","or have the Cursed Birth background"],
    "prerequisitesFeats": ["You must carry a curse that can be lifted only by a quest or similar great undertaking","or have the Cursed Birth background"],
    "benefit": "You gain spell resistance equal to 5 + your character level, as the curse interferes with all magic. Unlike most spell resistance, it can't voluntarily be lowered, though your own spells and magic items still automatically affect you."
  },
  {
    "name": "Arisen",
    "type": "Story",
    "description": "Escaping death strengthened your bond to life, but fills you with a need for answers.",
    "prerequisites": ["You must have been slain and brought back from the dead","or have the Left to Die or Cursed Birth background"],
    "prerequisitesFeats": ["You must have been slain and brought back from the dead","or have the Left to Die or Cursed Birth background"],
    "benefit": "You don't die until your negative hit point total is equal to or greater than 4 + your Constitution score. Once per day as a standard action, you can force yourself to carry on by strength of will alone, gaining 1 temporary hit point per hit die. These temporary hit points last for 10 minutes."
  },
  {
    "name": "Battlefield Healer",
    "type": "Story",
    "description": "In even the fiercest battles, you risk life and limb to save your allies.",
    "prerequisites": ["You must successfully cast a conjuration (healing) spell on an ally after being hit by an attack of opportunity","or have the Battle","Chaplain","or Healed background"],
    "prerequisitesFeats": ["You must successfully cast a conjuration (healing) spell on an ally after being hit by an attack of opportunity","or have the Battle","Chaplain","or Healed background"],
    "benefit": "When attempting a concentration check caused by receiving damage (including ongoing damage), you reduce the damage taken by 50% for the purposes of determining the concentration check DC."
  },
  {
    "name": "Champion",
    "type": "Story",
    "description": "You must prove yourself through single combat.",
    "prerequisites": ["You must have defeated a single challenging foe without any aid from another","or have the Champion of a God","Champion of the People","Competition Champion","or Gladiator background"],
    "prerequisitesFeats": ["You must have defeated a single challenging foe without any aid from another","or have the Champion of a God","Champion of the People","Competition Champion","or Gladiator background"],
    "benefit": "As a swift action, you can declare a single combat challenge to one foe within 50 feet and in line of sight. Upon doing so, you gain a +1 bonus on attack rolls and a +1 dodge bonus to AC against that foe as long as no one else threatens that opponent or until the single combat challenge ends. If another combatant attacks you or your foe, the challenge ends and you take a -2 penalty on attack rolls and to AC for 1 round. Though you can declare a single combat challenge at will, once you declare it on a foe you can't declare it on the same foe for another 24 hours."
  },
  {
    "name": "Damned",
    "type": "Story",
    "description": "From your earliest days, you were destined to sacrifice everything in your quest for power.",
    "prerequisites": ["You must have had friendly contact with an evil-aligned outsider that would qualify as a challenging foe","have a fiend-related sorcerous bloodline such as abyssal or infernal","have direct fiendish ancestry (such as being a tiefling or half-fiend)","or have the Fiend Raised or The Fiend background"],
    "prerequisitesFeats": ["You must have had friendly contact with an evil-aligned outsider that would qualify as a challenging foe","have a fiend-related sorcerous bloodline such as abyssal or infernal","have direct fiendish ancestry (such as being a tiefling or half-fiend)","or have the Fiend Raised or The Fiend background"],
    "benefit": "You gain a +2 bonus on Charisma-based checks involving evil-aligned outsiders and +1 bonus to the DC of spells and spell-like abilities you use against such creatures. You take a -2 penalty on Charisma-based checks involving good-aligned outsiders."
  },
  {
    "name": "Deny The Reaper",
    "type": "Story",
    "description": "The lives you could not save stay with you to your final breath.",
    "prerequisites": ["You must have witnessed the death of a close companion in battle-a death that could have been prevented","such as from bleeding","failure to stabilize","or ongoing poison damage-or have the Death in the Family or The War background"],
    "prerequisitesFeats": ["You must have witnessed the death of a close companion in battle-a death that could have been prevented","such as from bleeding","failure to stabilize","or ongoing poison damage-or have the Death in the Family or The War background"],
    "benefit": "You gain a +2 bonus on Heal checks. If you have 10 or more ranks in Heal, this bonus increases to +4. You can apply first aid as a move action and don't take a penalty when treating deadly wounds without a healing kit."
  },
  {
    "name": "Eldritch Researcher",
    "type": "Story",
    "description": "You seek new applications for magical energy.",
    "prerequisites": ["You must have created a new spell","or have The Way Things Work background"],
    "prerequisitesFeats": ["You must have created a new spell","or have The Way Things Work background"],
    "benefit": "When casting a spell you've created, add 1 to your caster level. In addition, you gain a +2 bonus on Spellcraft checks. If you have 10 or more ranks in Spellcraft, this bonus increases to +4."
  },
  {
    "name": "Fearless Zeal",
    "type": "Story",
    "description": "You're willing to lay down your life for your faith.",
    "prerequisites": ["You must be ordained as a sacred (or profane) champion of your faith by a high-ranking member of its clergy","or have the Devoted","Faith-Bringer","or Moral Debt background Such an honor goes above and beyond the normal oaths required of a cleric or paladin"],
    "prerequisitesFeats": ["You must be ordained as a sacred (or profane) champion of your faith by a high-ranking member of its clergy","or have the Devoted","Faith-Bringer","or Moral Debt background Such an honor goes above and beyond the normal oaths required of a cleric or paladin"],
    "benefit": "Once per day, you can add a +2 bonus on any single attack roll, caster level check, saving throw, or skill check. You must choose to add this bonus after the die has been rolled and success or failure determined, but before any results (such as damage) are rolled and applied. If you have 10 or more levels or hit dice, this bonus increases to +4."
  },
  {
    "name": "Feral Heart",
    "type": "Story",
    "description": "In your chest beasts the heart of a wild beast.",
    "prerequisites": ["You must have reverted to savage behavior through a traumatic event or extended period in the wilderness","or have the Raised by Beasts background"],
    "prerequisitesFeats": ["You must have reverted to savage behavior through a traumatic event or extended period in the wilderness","or have the Raised by Beasts background"],
    "benefit": "Whenever you receive a morale bonus on Strength or attack rolls (such as from heroism or the barbarian rage class feature), you receive a +2 bonus on Dexterity- and Strength-based ability and skill checks and a +1 bonus on Reflex saves until the morale bonus effect ends."
  },
  {
    "name": "Foeslayer",
    "type": "Story",
    "description": "Your bitter feud with your enemies can be quenched only with blood.",
    "prerequisites": ["You must have been defeated and robbed of at least half your possessions by a particular group of humanoids or monstrous humanoids","or have the An Eye for an Eye","Hated Foe","Raiders","or Vengeance background You may choose a specific race","such as duergar","or a broader group","such as goblinoids At the GM's option","you may instead choose residents of a particular country","settlement","or tribe"],
    "prerequisitesFeats": ["You must have been defeated and robbed of at least half your possessions by a particular group of humanoids or monstrous humanoids","or have the An Eye for an Eye","Hated Foe","Raiders","or Vengeance background You may choose a specific race","such as duergar","or a broader group","such as goblinoids At the GM's option","you may instead choose residents of a particular country","settlement","or tribe"],
    "benefit": "The save DCs for your spells or abilities increase by 1 when you use them against the chosen group, and you gain a +1 dodge bonus to AC against their attacks."
  },
  {
    "name": "Forgotten Past",
    "type": "Story",
    "description": "A pivotal event from your past eludes your memory.",
    "prerequisites": ["You must have suffered permanent memory loss or have the Reincarnated background"],
    "prerequisitesFeats": ["You must have suffered permanent memory loss or have the Reincarnated background"],
    "benefit": "The duration of mind-affecting spells (even beneficial ones) is halved for you, to a minimum of 1 round. Your inquisitive nature gives you a +2 bonus on Perception checks. If you have 10 or more ranks in Perception, this bonus increases to +4."
  },
  {
    "name": "Glimpse Beyond",
    "type": "Story",
    "description": "You have glimpsed the madness at the edges of reality.",
    "prerequisites": ["You must have faced an undead","evil outsider","or aberration with a CR greater than your level +4","or have the Raised Among the Dead or The Dead One background"],
    "prerequisitesFeats": ["You must have faced an undead","evil outsider","or aberration with a CR greater than your level +4","or have the Raised Among the Dead or The Dead One background"],
    "benefit": "You gain a +2 bonus on Knowledge (dungeoneering) checks to identify the vulnerabilities and powers of aberrations, Knowledge (planes) checks to identify the vulnerabilities and powers of evil outsiders, and Knowledge (religion) checks to identify the vulnerabilities and powers of undead, and you can make such checks untrained. If you have 10 or more ranks in any of these Knowledge skills, the bonus increases to +4 for the appropriate skill. In addition, you gain a +2 bonus on saves against fear effects."
  },
  {
    "name": "Innocent Blood",
    "type": "Story",
    "description": "With their deaths, the pitiful wretches that inhabit this world open your path to greatness.",
    "prerequisites": ["You must slay at least 50 intelligent noncombatants for either your own personal gain or for no cause at all","or have the Bloodthirsty","First Kill","or The Kill background"],
    "prerequisitesFeats": ["You must slay at least 50 intelligent noncombatants for either your own personal gain or for no cause at all","or have the Bloodthirsty","First Kill","or The Kill background"],
    "benefit": "You gain a +2 bonus on Intimidate checks. If you have 10 or more ranks in Intimidate, this bonus increases to +4. Each time you slay an intelligent creature, you gain a +1 bonus on attack rolls and caster level checks for 1 minute (this bonus does not stack with itself )."
  },
  {
    "name": "Liberator",
    "type": "Story",
    "description": "Your time in shackles has forever marked your soul.",
    "prerequisites": ["You must have been enslaved for at least 6 months","or have the Imprisoned or Kidnapped background"],
    "prerequisitesFeats": ["You must have been enslaved for at least 6 months","or have the Imprisoned or Kidnapped background"],
    "benefit": "You gain a +1 bonus on attack rolls, weapon damage rolls, and skill checks when your actions would directly lead to freeing prisoners or slaves."
  },
  {
    "name": "Lost Legacy",
    "type": "Story",
    "description": "What once belonged to your family shall be yours again.",
    "prerequisites": ["Your family must have claim to an inherited title or position that no longer belongs to them","or have the Dishonored Family background You can take this feat even if you have no knowledge of this lost family title"],
    "prerequisitesFeats": ["Your family must have claim to an inherited title or position that no longer belongs to them","or have the Dishonored Family background You can take this feat even if you have no knowledge of this lost family title"],
    "benefit": "You gain a +1 bonus on Charisma-based ability checks and skill checks."
  },
  {
    "name": "Magnum Opus",
    "type": "Story",
    "description": "You seek to create a true masterpiece.",
    "prerequisites": ["You must either have sold five or more self-created works of art worth a total of at least 5","000 gp","have performed at least five performances for audiences of 50 or more while achieving a great performance result or better on your Perform check","or have the Virtuoso background"],
    "prerequisitesFeats": ["You must either have sold five or more self-created works of art worth a total of at least 5","000 gp","have performed at least five performances for audiences of 50 or more while achieving a great performance result or better on your Perform check","or have the Virtuoso background"],
    "benefit": "Choose a single Craft or Perform skill. Whenever you take 10 with this skill, treat your die result as a 15 instead."
  },
  {
    "name": "Monument Builder",
    "type": "Story",
    "description": "Your inspired architecture shall make your name immortal.",
    "prerequisites": ["Knowledge (engineering) 1 rank","and you must have built a structure worth at least 5","000 gp"],
    "prerequisitesFeats": ["Knowledge (engineering) 1 rank","and you must have built a structure worth at least 5","000 gp"],
    "benefit": "When you supervise a construction project or do the construction yourself, reduce your raw material costs by 10%. You gain a +2 bonus on Knowledge (engineering) checks. If you have 10 or more ranks in Knowledge (engineering), this bonus increases to +4."
  },
  {
    "name": "Nation Builder",
    "type": "Story",
    "description": "The land calls to you to conquer it and forge a realm all your own.",
    "prerequisites": ["You must have explored and claimed an area of at least 100 square miles"],
    "prerequisitesFeats": ["You must have explored and claimed an area of at least 100 square miles"],
    "benefit": "When in either unclaimed wilderness or land under your own control, you receive a +2 bonus on Perception checks, Stealth checks, and Survival checks. If you have 10 or more ranks in one of these skills, the bonus on that skill increases to +4."
  },
  {
    "name": "Nemesis",
    "type": "Story",
    "description": "A past enemy seeks your ruin.",
    "prerequisites": ["You must have at least one enemy who wishes to cause you great harm If you have multiple enemies","the GM may keep the specific nemesis secret","or have many of your enemies work together against you If your nemesis is not already a challenging foe","it either advances in strength to become a challenging foe or allies with others to achieve a higher challenge rating"],
    "prerequisitesFeats": ["You must have at least one enemy who wishes to cause you great harm If you have multiple enemies","the GM may keep the specific nemesis secret","or have many of your enemies work together against you If your nemesis is not already a challenging foe","it either advances in strength to become a challenging foe or allies with others to achieve a higher challenge rating"],
    "benefit": "Having a nemesis drives you to excel in training. For each new level you gain in a favored class, including the level you gained when you chose this feat, you can choose two benefits instead of one. One of these benefits must be either a bonus hit point or a bonus skill point, even if other options are available."
  },
  {
    "name": "Prophet",
    "type": "Story",
    "description": "The truth has been revealed, and you have been chosen to deliver it.",
    "prerequisites": ["Ability to cast divine spells","and you must either have received a vision from your god (or another appropriate supernatural entity) or have the Marked by the Gods background"],
    "prerequisitesFeats": ["Ability to cast divine spells","and you must either have received a vision from your god (or another appropriate supernatural entity) or have the Marked by the Gods background"],
    "benefit": "If you are nonevil and worship a nonevil deity, whenever you cast a beneficial spell on an ally you gain a +1 sacred bonus to AC for 1 round per spell level. If you are evil or worship an evil deity, whenever you cast a harmful spell on an enemy you gain a +1 profane bonus to AC for 1 round per spell level. Casting a spell on yourself does not count unless it also affects an ally."
  },
  {
    "name": "Redemption",
    "type": "Story",
    "description": "Your past failure haunts you and drives you on.",
    "prerequisites": ["You must have lost class features by violating the code of conduct of a class that possesses such a code","or have the Dishonored Family background"],
    "prerequisitesFeats": ["You must have lost class features by violating the code of conduct of a class that possesses such a code","or have the Dishonored Family background"],
    "benefit": "As an immediate action, you can add a +1 bonus to the result of an ability check, attack roll, saving throw, or skill check you have just rolled by becoming shaken for 1 minute. You must choose before the result is revealed."
  },
  {
    "name": "Shamed",
    "type": "Story",
    "description": "A past humiliation haunts you to this day.",
    "prerequisites": ["You must have been publicly embarrassed","or must have the Bastard Born background If the embarrassment didn't cause significant harm to your personal honor or social standing","it does not qualify for the feat prerequisites The humiliation doesn't need to have been unjustified"],
    "prerequisitesFeats": ["You must have been publicly embarrassed","or must have the Bastard Born background If the embarrassment didn't cause significant harm to your personal honor or social standing","it does not qualify for the feat prerequisites The humiliation doesn't need to have been unjustified"],
    "benefit": "Being observed drives you to excel. When you're in a conf lict that is being observed by others not involved in the conf lict, you gain a +1 bonus on attack rolls and skill checks."
  },
  {
    "name": "Stronghold",
    "type": "Story",
    "description": "You seek to build a bastion against which your enemies shall break like water against the rocks.",
    "prerequisites": ["You must have the Leadership feat and must lead at least 10 combat-capable followers (such as fighters or rangers)"],
    "prerequisitesFeats": ["You must have the Leadership feat and must lead at least 10 combat-capable followers (such as fighters or rangers)"],
    "benefit": "You can spend a move action to give battle orders to your troops, granting creatures under your command within 60 feet your choice of a +1 morale bonus on attack rolls, a +1 dodge bonus to AC, or a +1 bonus on a single type of saving throw. All creatures must receive the same benefit. You can't use this benefit on allies not under your command. This is a language-dependent, mind-affecting effect."
  },
  {
    "name": "Thief Of Legend",
    "type": "Story",
    "description": "More than just a burglar, you aspire to commit crimes of legendary stature.",
    "prerequisites": ["You must have stolen at least 1","000 gp worth of treasure without being caught and kept mementos of these thefts worth at least 500 gp","or have the Greed background"],
    "prerequisitesFeats": ["You must have stolen at least 1","000 gp worth of treasure without being caught and kept mementos of these thefts worth at least 500 gp","or have the Greed background"],
    "benefit": "Once per day when you attempt a Disable Device check to open a lock or Sleight of Hand check to pick a pocket, you can roll twice and take the better result."
  },
  {
    "name": "Town Tamer",
    "type": "Story",
    "description": "This town needs cleaning up, and you're just the one to do it.",
    "prerequisites": ["You must have 5 ranks in Intimidate and a personal motivation to clean up a particular town (such as an old friend calling in a favor","or seeking a place to settle down)","or you must have the Bounty Hunter or Champion of the People background"],
    "prerequisitesFeats": ["You must have 5 ranks in Intimidate and a personal motivation to clean up a particular town (such as an old friend calling in a favor","or seeking a place to settle down)","or you must have the Bounty Hunter or Champion of the People background"],
    "benefit": "Choose a particular settlement. When you're in your chosen settlement, the DC of Intimidate checks made against you increases by 10. You gain a +1 bonus on attack rolls and a +1 dodge bonus to AC against undesirable elements like criminals or ruffians in your chosen settlement. This bonus increases to +2 for combat maneuver checks."
  },
  {
    "name": "True Love",
    "type": "Story",
    "description": "You found love, only to have it denied by the cruelty of fate.",
    "prerequisites": ["You must have found love with a person you can't be with","have a current lover","or have the Current Lover","For Love","or The Lover background Possible complications include distance","your love being with another","your feelings being unrequited","or your relationship being forbidden"],
    "prerequisitesFeats": ["You must have found love with a person you can't be with","have a current lover","or have the Current Lover","For Love","or The Lover background Possible complications include distance","your love being with another","your feelings being unrequited","or your relationship being forbidden"],
    "benefit": "You add 1 to the save DC and caster level of your spells and spell-like abilities with the emotion descriptor. In addition, you gain a +2 bonus on Sense Motive checks. If you have 10 or more ranks in Sense Motive, this bonus increases to +4."
  },
  {
    "name": "Unforgotten",
    "type": "Story",
    "description": "You search for a person dear to you-lost, but you pray not dead.",
    "prerequisites": ["You must have a close relative","spouse","or other person dear to your heart who never returned from a journey","was captured","or otherwise vanished with little trace","or you have the Major Disaster background"],
    "prerequisitesFeats": ["You must have a close relative","spouse","or other person dear to your heart who never returned from a journey","was captured","or otherwise vanished with little trace","or you have the Major Disaster background"],
    "benefit": "Your dogged determination reduces any nonlethal damage you take by 1 point, to a minimum of 1 point of nonlethal damage. You also gain a +1 bonus on Will saves."
  },
  {
    "name": "Vengeance",
    "type": "Story",
    "description": "The need to avenge those you loved drives you to great deeds.",
    "prerequisites": ["You must have a close family member or other loved one slain by a specific challenging foe or that foe's minions","or have the Raiders or Vengeance background"],
    "prerequisitesFeats": ["You must have a close family member or other loved one slain by a specific challenging foe or that foe's minions","or have the Raiders or Vengeance background"],
    "benefit": "You gain a +1 bonus on saving throws, attack rolls, and weapon damage rolls against your chosen foe and known minions of that foe."
  },
  {
    "name": "Ancient Draconic",
    "type": "General",
    "description": "You empower spells using the ancient language of dragons.",
    "prerequisites": ["Arcane caster level 5th","speaks Draconic"],
    "prerequisitesFeats": ["Arcane caster level 5th","speaks Draconic"],
    "benefit": "You gain a +1 bonus on caster level checks to overcome spell resistance when casting arcane spells that have a verbal component. If you speak Draconic when casting an arcane language-dependent spell, all intelligent creatures with a language can understand your words."
  },
  {
    "name": "Improved Learn Ranger Trap",
    "type": "General",
    "description": "Your skill with traps is extensive.",
    "prerequisites": ["Learn Ranger Trap","Survival 8 ranks"],
    "prerequisitesFeats": ["Learn Ranger Trap","Survival 8 ranks"],
    "benefit": "You learn one additional ranger trap and can now use both extraordinary and supernatural versions of any ranger traps you know."
  },
  {
    "name": "Kobold Confidence",
    "type": "General",
    "description": "Your cunning, confidence, or faith in the draconic power in your blood allows you to overcome your physical frailty.",
    "prerequisites": ["Charisma 13","kobold"],
    "prerequisitesFeats": ["Charisma 13","kobold"],
    "benefit": "You use your Charisma, Intelligence, or Wisdom in place of Constitution to determine your bonus to Fortitude saves and your maximum negative hit points before death. Once this choice has been made, it can't be changed."
  },
  {
    "name": "Learn Ranger Trap",
    "type": "General",
    "description": "You learn how to create one kind of ranger trap.",
    "prerequisites": ["Survival 5 ranks"],
    "prerequisitesFeats": ["Survival 5 ranks"],
    "benefit": "Select one ranger trap (see page 20). You may use this trap a number of times per day equal to your Wisdom bonus (minimum 1). The DC for your trap is equal to 10 + 1/2 your character's level + your Wisdom bonus, and it lasts 1 day per 2 character levels. If you aren't a ranger, you can only set extraordinary traps with this feat; like all extraordinary ranger traps, this decreases the trap's DC by 2."
  },
  {
    "name": "Merciless Magic",
    "type": "General",
    "description": "Your spellcasting is strongest against those in peril.",
    "prerequisites": ["Ability to cast spells","kobold"],
    "prerequisitesFeats": ["Ability to cast spells","kobold"],
    "benefit": "The DC to resist your spells increases by 1 for targets that are already aff licted with any of the following conditions: blinded, dying, entangled, exhausted, frightened, helpless, nauseated, panicked, paralyzed, or stunned."
  },
  {
    "name": "Merciless Precision",
    "type": "General",
    "description": "You delight and excel in bringing down hobbled targets.",
    "prerequisites": ["Sneak attack class feature","kobold"],
    "prerequisitesFeats": ["Sneak attack class feature","kobold"],
    "benefit": "Your sneak attack damage increases by 1d6 against targets that are already aff licted with any of the following conditions: blinded, dying, entangled, exhausted, frightened, helpless, nauseated, panicked, paralyzed, or stunned."
  },
  {
    "name": "Mixed Scales",
    "type": "General",
    "description": "You have two colors of scales, which mark you as special.",
    "prerequisites": ["Draconic AspectARG or dragon-scaled racial traitARG","kobold"],
    "prerequisitesFeats": ["Draconic AspectARG or dragon-scaled racial traitARG","kobold"],
    "benefit": "Choose an additional color for your Draconic Aspect feat or dragon-scaled racial trait. You gain the benefits of both this color and the color you originally chose. (If you have both Draconic Aspect and dragon-scaled, this benefit applies to both.) If you gain abilities that rely on scale color, choose which color gains the benefits."
  },
  {
    "name": "Redeemed Kobold",
    "type": "General",
    "description": "The purity you have found in the teachings of good dragonkind colors your scales and grants you confidence.",
    "prerequisites": ["Good alignment","kobold"],
    "prerequisitesFeats": ["Good alignment","kobold"],
    "benefit": "Your scales take on a metallic sheen appropriate for that of a good-aligned metallic dragon who shares any existing energy affinity you possess, or whom you have chosen to emulate. You gain a +2 circumstance bonus on Diplomacy checks when interacting with good creatures. In addition, your Charisma is considered 2 points higher for the purposes of channeling positive energy."
  },
  {
    "name": "Scaled Disciple",
    "type": "General",
    "description": "Your draconic heritage manifests as divine power.",
    "prerequisites": ["Ability to spontaneously cast divine spells","kobold"],
    "prerequisitesFeats": ["Ability to spontaneously cast divine spells","kobold"],
    "benefit": "You gain a +1 bonus to your caster level when casting spells included in the dragon domain or subdomains. Your spontaneous divine spellcasting qualifies in place of arcane casting for the dragon disciple prestige class, and you may increase spellcasting in your spontaneous divine class as you progress in dragon disciple levels. Add the bonus spells gained from the blood of dragons ability to those you can cast as divine spells."
  },
  {
    "name": "Small But Deadly",
    "type": "General",
    "description": "You have learned to make the most of certain weapons, despite your physical weakness.",
    "prerequisites": ["Weapon Focus or natural weapon","Small size or smaller"],
    "prerequisitesFeats": ["Weapon Focus or natural weapon","Small size or smaller"],
    "benefit": "You ignore your Strength penalty to damage when making attacks with your racial natural weapons and weapons for which you have the Weapon Focus feat."
  },
  {
    "name": "Kobold Flood",
    "type": "Combat",
    "description": "You are an expert at keeping creatures on the ground.",
    "prerequisites": ["Combat Expertise","Kobold Groundling","Kobold Style","Small size or smaller"],
    "prerequisitesFeats": ["Combat Expertise","Kobold Groundling","Kobold Style","Small size or smaller"],
    "benefit": "You can make a grapple combat maneuver check to mount a prone Medium or Large foe. If you're successful, you move into the target's square and are considered to be on top of the target. For the target to stand, it must succeed at a combat maneuver check to break your grapple."
  },
  {
    "name": "Kobold Groundling",
    "type": "Combat",
    "description": "Your small size grants you superiority over grounded foes.",
    "prerequisites": ["Combat Expertise","Kobold Style","Small size or smaller"],
    "prerequisitesFeats": ["Combat Expertise","Kobold Style","Small size or smaller"],
    "benefit": "Prone creatures are denied their Dexterity bonus to AC against your attacks."
  },
  {
    "name": "Kobold Style",
    "type": "Combat",
    "description": "You're able to manipulate foes that are caught off guard.",
    "prerequisites": ["Combat Expertise","Small size or smaller"],
    "prerequisitesFeats": ["Combat Expertise","Small size or smaller"],
    "benefit": "You gain a +4 bonus on combat maneuver checks against enemies denied their Dexterity bonus to AC."
  },
  {
    "name": "Tribe Mentality",
    "type": "General",
    "description": "You and your tribemates grant each other mental strength.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you're simultaneously subject to the same enchantment (compulsion) or [emotion] effect as another ally with this feat, you both roll saves but can use either result."
  },
  {
    "name": "Wall Offlesh",
    "type": "General",
    "description": "You swarm with your allies, becoming a wall of creatures.",
    "prerequisites": ["Small size or smaller"],
    "prerequisitesFeats": ["Small size or smaller"],
    "benefit": "When adjacent to an ally with this feat, you're considered one size category larger for determining CMD and the way combat maneuvers and abilities affect you."
  },
  {
    "name": "Apotheosis",
    "type": "Story",
    "description": "You are marked by fate as a future deity-even before this destiny is realized, fate bends to your will.",
    "prerequisites": ["You must have had direct contact with a deity or godlike being","or have been risen from the dead at the personal behest of a deity or godlike being"],
    "prerequisitesFeats": ["You must have had direct contact with a deity or godlike being","or have been risen from the dead at the personal behest of a deity or godlike being"],
    "benefit": "You gain a +2 bonus on Constitution checks to stabilize while dying. Anytime you or an ally who worships the god that contacted you casts augury or a similar effect, your chance of receiving a meaningful reply is increased by 5% (to a maximum of 95%)."
  },
  {
    "name": "Artifact Hunter",
    "type": "Story",
    "description": "You seek an artifact-either a specific one or merely any item of legendary prowess-with dogged tenacity.",
    "prerequisites": ["You must have come within sight of a legendary artifact at some point in your past"],
    "prerequisitesFeats": ["You must have come within sight of a legendary artifact at some point in your past"],
    "benefit": "You gain a +2 bonus on Use Magic Device checks when emulating a class feature, ability score, race, or alignment. If you have 10 or more ranks in Use Magic Device, this bonus increases to +4. In addition, once per day, instead of attempting a Use Magic Device check normally, you can choose to determine the result as if you had rolled a 15. If you have 10 or more ranks in Use Magic Device, you can use this ability twice per day."
  },
  {
    "name": "Blessed",
    "type": "Story",
    "description": "The repeated notice and boons of celestials have marked you as one of their chosen agents.",
    "prerequisites": ["You must have had friendly contact with a good outsider that would qualify as a challenging foe","be a sorcerer with the celestial bloodline","or have direct celestial ancestry (such as by being an aasimar)"],
    "prerequisitesFeats": ["You must have had friendly contact with a good outsider that would qualify as a challenging foe","be a sorcerer with the celestial bloodline","or have direct celestial ancestry (such as by being an aasimar)"],
    "benefit": "You gain a +2 bonus on Charisma-based checks involving good-aligned outsiders and a +1 bonus to the DC of spells and spell-like abilities you use against such creatures. You take a -2 penalty on Charisma-based checks involving evil-aligned outsiders."
  },
  {
    "name": "Damned",
    "type": "Story",
    "description": "From your earliest days, you were destined to sacrifice everything in your quest for power.",
    "prerequisites": ["You must have had friendly contact with an evil-aligned outsider that would qualify as a challenging foe","have a fiend-related sorcerous bloodline such as abyssal or infernal","have direct fiendish ancestry (such as being a tief ling or half-fiend)","or have the Fiend Raised or The Fiend background (see Ultimate Campaign)"],
    "prerequisitesFeats": ["You must have had friendly contact with an evil-aligned outsider that would qualify as a challenging foe","have a fiend-related sorcerous bloodline such as abyssal or infernal","have direct fiendish ancestry (such as being a tief ling or half-fiend)","or have the Fiend Raised or The Fiend background (see Ultimate Campaign)"],
    "benefit": "You gain a +2 bonus on Charisma-based checks involving evil-aligned outsiders and +1 bonus to the DC of spells and spell-like abilities you use against such creatures. You take a -2 penalty on Charisma-based checks involving good-aligned outsiders."
  },
  {
    "name": "Dynasty Founder",
    "type": "Story",
    "description": "You will claim rulership of a city, whether under a larger government or independently.",
    "prerequisites": ["You must have lived in the chosen city for at least 1 year or be the heir of a former city leader"],
    "prerequisitesFeats": ["You must have lived in the chosen city for at least 1 year or be the heir of a former city leader"],
    "benefit": "You gain followers as if you had the Leadership feat, although you cannot attract followers of a level higher than your level - 2. If you also have the Leadership feat, increase your Leadership score by 3 for the purpose of determining how many followers you have."
  },
  {
    "name": "Explorer",
    "type": "Story",
    "description": "You dream of discovering new vistas.",
    "prerequisites": ["You must have crossed at least 30 miles of wilderness without map or guide"],
    "prerequisitesFeats": ["You must have crossed at least 30 miles of wilderness without map or guide"],
    "benefit": "You can provide twice as much food and water for other people when attempting a Survival check to get along in the wild. In addition, you gain a +2 bonus on all Knowledge (geography) checks. If you have 10 or more ranks in Knowledge (geography), increase your bonus to +4."
  },
  {
    "name": "Foeslayer",
    "type": "Story",
    "description": "Your feud with your enemies can be quenched only with blood.",
    "prerequisites": ["You must have been defeated and robbed of at least half your possessions by a particular group of humanoids or monstrous humanoids","or have the An Eye for an Eye","Hated Foe","Raiders","or Vengeance background (see Ultimate Campaign) You may choose a specific race","such as duergar","or a broader group","such as goblinoids At the GM's discretion","you may instead choose residents of a particular country","settlement","or tribe"],
    "prerequisitesFeats": ["You must have been defeated and robbed of at least half your possessions by a particular group of humanoids or monstrous humanoids","or have the An Eye for an Eye","Hated Foe","Raiders","or Vengeance background (see Ultimate Campaign) You may choose a specific race","such as duergar","or a broader group","such as goblinoids At the GM's discretion","you may instead choose residents of a particular country","settlement","or tribe"],
    "benefit": "The save DCs for any of your spells or abilities increase by 1 when used against the chosen group, and you receive a +1 dodge bonus to AC against their attacks."
  },
  {
    "name": "Liberator",
    "type": "Story",
    "description": "Your time in shackles has forever marked your soul.",
    "prerequisites": ["You must have been enslaved for at least 6 months","or have the Imprisoned or Kidnapped background (see Ultimate Campaign)"],
    "prerequisitesFeats": ["You must have been enslaved for at least 6 months","or have the Imprisoned or Kidnapped background (see Ultimate Campaign)"],
    "benefit": "You gain a +1 bonus on attack rolls, weapon damage rolls, and skill checks when your actions would directly lead to freeing prisoners or slaves."
  },
  {
    "name": "Planar Traveler",
    "type": "Story",
    "description": "The confines of the Material Plane cannot sate your wanderlust, and you walk between alternate spheres of reality unhindered.",
    "prerequisites": ["You must be related to an outsider or have been born on a plane other than the Material Plane"],
    "prerequisitesFeats": ["You must be related to an outsider or have been born on a plane other than the Material Plane"],
    "benefit": "You gain a +2 bonus on Survival checks when outside your home plane. You can identify portals and other planar connections as well as where they lead by sight or touch with a successful DC 20 Perception check."
  },
  {
    "name": "Prophet",
    "type": "Story",
    "description": "The truth has been revealed, and you have been chosen to deliver it.",
    "prerequisites": ["Ability to cast divine spells","and you must either have received a vision from your god (or another appropriate supernatural entity) or have the Marked by the Gods background (see Ultimate Campaign)"],
    "prerequisitesFeats": ["Ability to cast divine spells","and you must either have received a vision from your god (or another appropriate supernatural entity) or have the Marked by the Gods background (see Ultimate Campaign)"],
    "benefit": "If you are nonevil and worship a nonevil deity, whenever you cast a beneficial spell on an ally you gain a +1 sacred bonus to AC for 1 round per spell level. If you are evil or worship an evil deity, whenever you cast a harmful spell on an enemy you gain a +1 profane bonus to AC for 1 round per spell level. Casting a spell on yourself does not count unless it also affects an ally."
  },
  {
    "name": "Truth-Seeker",
    "type": "Story",
    "description": "A tantalizing secret from the past calls to you, and you intend to discover it.",
    "prerequisites": ["You must have visited a ruin or forgotten place that has been abandoned for at least five times as long as you've been alive"],
    "prerequisitesFeats": ["You must have visited a ruin or forgotten place that has been abandoned for at least five times as long as you've been alive"],
    "benefit": "You gain a +2 bonus on all Knowledge (history) checks. If you have 10 or more ranks in Knowledge (history), this bonus increases to +4."
  },
  {
    "name": "Object Of Legend",
    "type": "Story",
    "description": "The object of your quest drives you ever forward.",
    "prerequisites": ["You must have some highly personal stake in attaining the object of your quest as determined collectively by you and the GM-such as needing an ancestral weapon to exact your revenge against a known betrayer","seeking to destroy the artifact that caused your family's downfall generations ago","or attempting to behead a monster that ravaged your homeland during your youth"],
    "prerequisitesFeats": ["You must have some highly personal stake in attaining the object of your quest as determined collectively by you and the GM-such as needing an ancestral weapon to exact your revenge against a known betrayer","seeking to destroy the artifact that caused your family's downfall generations ago","or attempting to behead a monster that ravaged your homeland during your youth"],
    "benefit": "When you gain this feat, select one of the quest objects on this page or the facing page, or devise a quest object with your GM based on the quest objects presented in this section. You gain a +2 bonus on any Knowledge checks to gain information on the object of your quest. If you have 10 or more ranks in the Knowledge skill in question, the bonus increases to +4. In addition, once per day when you threaten a critical hit against a foe who specifically aims to stop you from completing your quest, you gain a +10 bonus on your confirmation roll against that opponent. You must announce the use of this ability after threatening the critical hit and before rolling your confirmation roll. This bonus does not stack with bonuses on confirmation rolls from other feats, such as Critical Focus."
  },
  {
    "name": "Center Of Power",
    "type": "General",
    "description": "You have posted loyal followers in the most vital places.",
    "prerequisites": ["Leadership score 13","hold a leadership role related to running a kingdom"],
    "prerequisitesFeats": ["Leadership score 13","hold a leadership role related to running a kingdom"],
    "benefit": "Choose a building in your kingdom as your center of power, and dedicate one of the followers granted to you by the Leadership feat to overseeing that location. For every kingdom turn in which that follower does nothing but oversee that location, the benefits that building grants to your kingdom's Economy, Fame, Loyalty, and Stability are doubled and any penalties are negated. This feat does not allow a building to grant benefits it does not normally provide, and has no effect on a building's other effects. This feat only applies to one building, and committing multiple followers to this or different buildings has no effect-the selected location is treated as being of particular importance to you, and its uniqueness combined with the follower's loyalty grants it special efficiencies. The same follower does not have to oversee your center of power every month, but you must keep at least one follower dedicated to this location for the entire month to gain this feat's benefits. Once per year, you may change which building is your center of power."
  },
  {
    "name": "Expert Trainer",
    "type": "General",
    "description": "You have a special knack for a certain profession and take to it with ease.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Choose three character classes. For the purposes of retraining, you are always considered to have a retraining synergy with these classes, regardless of your current class. Additionally, retraining any class option takes you half the time it normally would (and thus half the gp cost), though retraining a class still takes the normal amount of time (5 days for a class with which you have synergy, 7 for a class with which you don't). If you take this feat via retraining or replace it with another feat in the same manner, the retraining time takes twice as long as normal in regards to this feat only."
  },
  {
    "name": "Focused Overseer",
    "type": "General",
    "description": "Your attention to detail provides you with insights into how to more effectively and economically gain certain commodities.",
    "prerequisites": ["Focused Worker"],
    "prerequisitesFeats": ["Focused Worker"],
    "benefit": "You can spend a day of downtime to purchase one type of capital for half its normal cost (see Purchasing Capital on page 77 of Ultimate Campaign). This capital must be the same as the focus capital you chose for the Focused Worker feat. However, the cost of the neglected capital, chosen as part of the same Focused Worker feat, increases by half again its normal amount. These changes in price apply to both the purchased cost and the earned cost of the affected forms of capital."
  },
  {
    "name": "Focused Worker",
    "type": "General",
    "description": "Your attention to detail provides you with an excess of some commodities, at the cost of others.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You excel at performing skilled work for a certain type of capital, but are less adept at generating another type of capital (see page 78 of Ultimate Campaign). Choose one of the following types of capital to be your focus capital: Goods, Inf luence, Labor, or Magic. Whenever you spend downtime to perform skilled work to gain focus capital, you gain half again the normal amount (rounded down). However, you must also choose a second, separate type of capital from the same list to be your neglected capital. Whenever you spend downtime to perform skilled work to gain neglected capital, you gain only half the amount you normally would. This feat only affects capital you gain by performing skilled work, not capital you might gain by performing unskilled work, purchasing capital, or running a business. For example, say you chose Goods as your focus capital and Magic as your neglected capital. If you spent a day performing skilled work to gain Goods, and the result of your Sleight of Hands skill check is a 33, you would gain 4 Goods (rather than the usual 3 for a result of 30 or higher). However, if you were to spend the following day using your Spellcraft check to perform skilled work and again got a result of 33, you would only gain 2 Magic rather than the usual 3."
  },
  {
    "name": "Fortunate Ruler",
    "type": "General",
    "description": "Your good luck shines on your people, even in the most trying times.",
    "prerequisites": ["Hold the Ruler leadership role for a kingdom"],
    "prerequisitesFeats": ["Hold the Ruler leadership role for a kingdom"],
    "benefit": "During a kingdom's Event phase, once an event's type and danger level has been determined, you may choose to roll twice on the applicable kingdom or settlement table and choose either result. You must declare you are using this feat before the results of the initial roll are revealed."
  },
  {
    "name": "Fortunate Manager",
    "type": "General",
    "description": "Your good luck helps you and your business persevere even during the most troublesome times.",
    "prerequisites": ["Own at least one building"],
    "prerequisitesFeats": ["Own at least one building"],
    "benefit": "During the Event phase of downtime, if an event occurs and the GM rolls on a building event table or organization event table (see pages 114-129 of Ultimate Campaign), you may, once per week, choose to roll twice on the applicable table and choose either result. You must declare you are using this feat before the results of the initial roll are revealed."
  },
  {
    "name": "Inspirational Commander",
    "type": "General",
    "description": "Armies under your command enjoy higher morale thanks to your excellent leadership.",
    "prerequisites": ["Charisma 13"],
    "prerequisitesFeats": ["Charisma 13"],
    "benefit": "You or any army that is under your command gains a +2 bonus on Morale checks. Additionally, you gain two additional boons of your choice (see page 240 of Ultimate Campaign)."
  },
  {
    "name": "Natural Ruler",
    "type": "General",
    "description": "You have a special talent for ruling a nation, and take to the task with ease.",
    "prerequisites": ["Hold a leadership role related to running a kingdom"],
    "prerequisitesFeats": ["Hold a leadership role related to running a kingdom"],
    "benefit": "Choose an ability score. Any time your leadership role calls for that ability score to affect one of your kingdom's attributes, your modifier to that ability score is treated as being +2 higher. For example, if you choose Charisma and occupy the General or High Priest leadership role, your Charisma modifier to affect your kingdom's stability would be +2 higher than normal. However, if you occupied the Spymaster leadership role-which employs the Intelligence and Wisdom ability scores-this feat would grant no benefit. Additionally, the entire kingdom gains +2 Stability for as long as you occupy a leadership role."
  },
  {
    "name": "Precocious Youth",
    "type": "General",
    "description": "Even in youth, you seek to be more adult than your childish peers, a personal trait that will no doubt aid you in future years.",
    "prerequisites": ["Young age category"],
    "prerequisitesFeats": ["Young age category"],
    "benefit": "You lose one of the penalties associated with the young age category, either -2 Constitution, -2 Strength, or -2 Wisdom. Upon reaching adulthood you may exchange this feat for Great Fortitude, Iron Will, or Lightning Reflexes."
  },
  {
    "name": "Dog-Sniff-Hate",
    "type": "General",
    "description": "Unlike many goblins, you're not particularly afraid of dogs. You know what dogs smell like, and that smell makes you mad. Very mad.",
    "prerequisites": ["Skill Focus (Perception)","goblin"],
    "prerequisitesFeats": ["Skill Focus (Perception)","goblin"],
    "benefit": "You gain the scent ability, but only against canines (including dogs, goblin dogs, wolves, worgs, yeth hounds, and any similar creatures, subject to GM approval). Against these creatures, you gain a +1 morale bonus on attack rolls and a +2 morale bonus on weapon damage rolls."
  },
  {
    "name": "Dragoncrafting",
    "type": "General",
    "description": "You have the ability to create rare and valuable items from the bodies of fallen true dragons.",
    "prerequisites": ["Craft (any) 5 ranks","Knowledge (arcana) 3 ranks"],
    "prerequisitesFeats": ["Craft (any) 5 ranks","Knowledge (arcana) 3 ranks"],
    "benefit": "You gain the ability to create a variety of dragoncraft items from materials gathered from the bodies of true dragons (not lesser dragons, such as linnorms or wyverns). Crafting dragoncraft items takes 1 hour per 100 gp of items being produced. In order to gather specimens from a dragon's corpse, you must succeed at a Heal check equal to 10 + the dragon's CR within 48 hours of the dragon's death (unless the body is preserved in some way). Refer to the table below to determine how much of a given material can be harvested from a dragon based on its size. Dragoncraft Materials by Dragon Size Dragon Stomach Size Blood Acid Gall Musk Skin Tiny 2 vials 1 vial 1 vial - 1 grip Small 3 vials 1 vial 1 vial 1 vial 2 grips Medium 4 vials 2 vials 2 vials 1 vial 2 grips Large 5 vials 2 vials 2 vials 2 vials 2 grips Huge 6 vials 3 vials 2 vials 2 vials 3 grips Gargantuan 7 vials 3 vials 3 vials 3 vials 3 grips Colossal 8 vials 4 vials 3 vials 3 vials 3 grips"
  },
  {
    "name": "Courage In Numbers",
    "type": "General",
    "description": "Your allies give you courage when you face an enemy as one.",
    "prerequisites": ["Iron Will"],
    "prerequisitesFeats": ["Iron Will"],
    "benefit": "You gain a +2 morale bonus on saves against fear for every ally within 10 feet who possesses this feat (maximum +8)."
  },
  {
    "name": "Overwhelm",
    "type": "Combat",
    "description": "You can overwhelm large foes with sheer numbers.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You are considered to be flanking an opponent if at least one ally who also has this feat is threatening that opponent and the opponent is at least two size categories larger than the larger of you or your ally, regardless of your actual positioning."
  },
  {
    "name": "Tandemevasion",
    "type": "Combat",
    "description": "You and your allies help each other evade deadly attacks.",
    "prerequisites": ["Dex 13","Dodge"],
    "prerequisitesFeats": ["Dex 13","Dodge"],
    "benefit": "When adjacent to an ally who also has this feat, you gain evasion against a dragon's breath weapon and tail sweep special attacks. If you already have evasion, you gain improved evasion instead."
  },
  {
    "name": "Covering Shield",
    "type": "Combat",
    "description": "You can use your shield to protect your most vulnerable parts from area effects.",
    "prerequisites": ["Dex 13","Shield Focus","Shield Proficiency"],
    "prerequisitesFeats": ["Dex 13","Shield Focus","Shield Proficiency"],
    "benefit": "While using a shield of the type to which your Shield Focus feat applies, you gain a bonus on Ref lex saves against area of effect attacks equal to your shield's base bonus to armor class plus any bonuses granted by feats or class abilities. This does not transfer any enhancement bonuses on a shield to Ref lex saves."
  },
  {
    "name": "Death Frombelow",
    "type": "Combat",
    "description": "You have been trained to fight flying creatures.",
    "prerequisites": ["Base attack bonus +1"],
    "prerequisitesFeats": ["Base attack bonus +1"],
    "benefit": "You gain a +2 circumstance bonus against flying opponents when you have set a weapon against a charge, or when you are allowed an attack of opportunity against the flying opponent."
  },
  {
    "name": "Dragonheart",
    "type": "General",
    "description": "Your familiarity with dragonkind makes you less susceptible to their abilities.",
    "prerequisites": ["Knowledge (arcana) 1 rank"],
    "prerequisitesFeats": ["Knowledge (arcana) 1 rank"],
    "benefit": "You gain a +1 bonus on all saving throws against auras, breath weapons, spell-like abilities, spells, supernatural abilities, and other special attacks of creatures with the dragon type."
  },
  {
    "name": "Dragonslayer",
    "type": "Combat",
    "description": "You have been trained to fight dragons.",
    "prerequisites": ["Knowledge (arcana) 4 ranks","base attack bonus +4"],
    "prerequisitesFeats": ["Knowledge (arcana) 4 ranks","base attack bonus +4"],
    "benefit": "Whenever you confirm a critical hit against an opponent that has a breath weapon, you can forgo the extra critical damage to instead prevent your foe from using its breath weapon for a number of rounds equal to twice the critical multiplier of your attack, in addition to any normal delay mentioned in the breath weapon effect's description."
  },
  {
    "name": "Flaying Critical",
    "type": "Combat",
    "description": "Your critical hits weaken your opponents' defenses.",
    "prerequisites": ["Critical Focus","base attack bonus +11"],
    "prerequisitesFeats": ["Critical Focus","base attack bonus +11"],
    "benefit": "Whenever you score a critical hit, your opponent takes a -1 penalty to its natural armor bonus for the duration of the encounter. This penalty is cumulative, but cannot reduce an opponent's natural armor bonus below 0."
  },
  {
    "name": "Porcupine Defense",
    "type": "Combat",
    "description": "You are a threat to opponents that try to overwhelm you.",
    "prerequisites": ["Combat Expertise","Combat Reflexes","base attack bonus +6"],
    "prerequisitesFeats": ["Combat Expertise","Combat Reflexes","base attack bonus +6"],
    "benefit": "Whenever an opponent of at least one size category larger than yourself attempts a combat maneuver attack against you, you gain a +2 bonus on any allowed attacks of opportunity. If your opponent may make such attacks without provoking attacks of opportunity, you instead gain a +2 bonus to CMD against such maneuvers."
  },
  {
    "name": "Reach Defense",
    "type": "Combat",
    "description": "You are prof icient at avoiding polearms and long-limbed creatures.",
    "prerequisites": ["Dex 15"],
    "prerequisitesFeats": ["Dex 15"],
    "benefit": "You gain a +2 dodge bonus to Armor Class against attacks of opportunity from opponents that are not adjacent to you."
  },
  {
    "name": "Snoutgrip",
    "type": "Combat",
    "description": "You can hold an opponent's mouth shut.",
    "prerequisites": ["Combat Expertise","Combat Reflexes","Improved Grapple","Improved Unarmed Strike","base attack bonus +12 or 10th-level monk"],
    "prerequisitesFeats": ["Combat Expertise","Combat Reflexes","Improved Grapple","Improved Unarmed Strike","base attack bonus +12 or 10th-level monk"],
    "benefit": "As an immediate action, whenever an opponent up to one size category larger than you misses you with its bite attack, you can attempt a grapple with a -5 penalty on the check. If you succeed, you have grappled your opponent and are holding its mouth shut, preventing it from using its bite attack, breath weapon, or spells with a verbal component until it escapes your grapple. You may make this grapple attempt even if the target is out of your reach."
  },
  {
    "name": "Wingclipper",
    "type": "Combat",
    "description": "Your attacks can prevent winged opponents from flying.",
    "prerequisites": ["Base attack bonus +9"],
    "prerequisitesFeats": ["Base attack bonus +9"],
    "benefit": "Whenever you confirm a critical hit against an opponent that uses wings to fly, you can forgo the extra critical damage to instead prevent it from flying for a number of rounds equal to twice the critical multiplier of your attack. Opponents that are flying at the time of the critical effect must succeed at a DC 20 Fly check to avoid taking falling damage."
  },
  {
    "name": "Improved Day Job",
    "type": "General",
    "description": "You learned the importance of an honest day's work while training as an initiate of the Pathf inder Society.",
    "prerequisites": ["Ability to attempt Day Job checks (see the Guide to Pathfinder Society Organized Play)"],
    "prerequisitesFeats": ["Ability to attempt Day Job checks (see the Guide to Pathfinder Society Organized Play)"],
    "benefit": "You gain a +3 bonus on Day Job checks using one skill you choose when you take this feat. This bonus stacks with other feats that grant a bonus to the chosen skill, including Skill Focus."
  },
  {
    "name": "Patient Strike",
    "type": "Combat",
    "description": "Your training under the Master of Swords has taught you that a well-timed strike is worth waiting for and that patience will serve you well in the long run.",
    "prerequisites": ["Int 13"],
    "prerequisitesFeats": ["Int 13"],
    "benefit": "You can choose to ready an attack as a fullround action instead of a standard action. When you do so, you gain a +2 bonus on your attack roll when your readied action triggers."
  },
  {
    "name": "Steadfast Mind",
    "type": "General",
    "description": "You can concentrate even in the direst circumstances, and know how to retain your magic even when it would otherwise be wasted.",
    "prerequisites": ["Cha 15","Int 15","or Wis 15 (see special)"],
    "prerequisitesFeats": ["Cha 15","Int 15","or Wis 15 (see special)"],
    "benefit": "Whenever you fail a concentration check while casting defensively and would normally lose a prepared spell or spell slot, you may attempt a Will save (DC = 15 + spell level) to retain the spell as though you had not attempted to cast it. The failed concentration check still results in the spell's failure, even if the spell is retained."
  },
  {
    "name": "Quick Preparation",
    "type": "General",
    "description": "Early on in your adventuring career, you learned (perhaps the hard way) how to prepare your spells even when put under extreme time constraints.",
    "prerequisites": ["Ability to prepare spells"],
    "prerequisitesFeats": ["Ability to prepare spells"],
    "benefit": "When preparing spells, you halve the time necessary to do so."
  },
  {
    "name": "Renown",
    "type": "General",
    "description": "Word of your pre-Pathf inder accomplishments precedes you, and you know how to make the most of your previous reputation.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When in a settlement of 5,000 people or more, treat your Fame score as 2 higher for the purposes of qualifying for Prestige Awards or purchasing equipment. This feat doesn't grant you any additional Prestige Points."
  },
  {
    "name": "Versatile Spontaneity",
    "type": "General",
    "description": "You made a good name for yourself in the Pathf inder Society in part because you knew how to prepare for the challenges before you, even if your natural magical abilities lend themselves less to preparation and more to spontaneity.",
    "prerequisites": ["Int 13 or Wis 13 (see Special)","ability to spontaneously cast 2nd-level spells"],
    "prerequisitesFeats": ["Int 13 or Wis 13 (see Special)","ability to spontaneously cast 2nd-level spells"],
    "benefit": "When you regain spell slots at the start of the day, you may opt to prepare one spell you don't know in place of a daily spell slot 1 level higher than the prepared spell's level. To do so, you must have access to the selected spell on a scroll or in a spellbook, and the spell must be on your spell list (even if it is not one of your spells known). This process takes 10 minutes per spell level of the selected spell. You can cast the selected spell a single time, expending the spell slot as though it were a known spell being cast by you. Preparing a spell in this manner expends a scroll but not a spellbook. A spell prepared in this way is considered its actual level rather than the level of the spell slot expended. You can apply metamagic feats to the spell as normal, as long as the spell's actual level plus the increases from metamagic feats is 1 level lower than the highest-level spell you can cast. For example, a 12th-level sorcerer with this feat, a scroll of fireball, and the Empower Spell metamagic feat could prepare an empowered fireball spell in her 6th-level spell slot."
  },
  {
    "name": "Collective Recollection",
    "type": "General",
    "description": "You and your allies can quickly jog each other's memories to remember essential facts.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When an ally who also has this feat attempts a trained Knowledge skill check while within 30 feet of you, you may attempt an aid another check as a free action to improve that ally's skill check. You must have at least 1 rank in the Knowledge skill to be aided in order to use this feat. If you succeed at the aid another check, you automatically know any information your ally gains from the Knowledge check as if you had rolled the Knowledge check. Whether or not your aid another check is successful, you cannot attempt a Knowledge check to determine the same information as your ally after using this feat."
  },
  {
    "name": "Esoteric Advantage",
    "type": "General",
    "description": "You're able to discern subtle and ineffable flaws in a creature's defenses.",
    "prerequisites": ["Knowledge (arcana","dungeoneering","local","nature","planes","or religion) 3 ranks"],
    "prerequisitesFeats": ["Knowledge (arcana","dungeoneering","local","nature","planes","or religion) 3 ranks"],
    "benefit": "After identifying an individual creature with a successful Knowledge skill check, you can spend a move action to adapt your tactics to reduce that individual's natural defenses. Choose one of the following abilities that you identified: damage reduction, energy resistance, or spell resistance. For the next 24 hours you treat the selected ability as if it were 2 lower, to a minimum of 0 (for instance, you would treat DR 5/magic as if it were DR 3/magic). You can only benefit from this feat against one single creature at a time. If you use this feat to adapt your tactics to another individual before 24 hours have passed since you last adapted to a creature, the benefit provided against the first individual ends and is replaced by the benefit against the second individual. You can switch which identified creature you have adapted your tactics to (including which special ability you wish to treat as lower) as a move action."
  },
  {
    "name": "Uncanny Activation",
    "type": "General",
    "description": "You can coax greater power out of magical devices.",
    "prerequisites": ["Use Magic Device 12 ranks"],
    "prerequisitesFeats": ["Use Magic Device 12 ranks"],
    "benefit": "If you exceed the Use Magic Device DC to activate a spell completion or spell trigger item by 5 or more, you can increase the item's caster level by 1 for determining the spell's effect. Alternatively, if you exceed the Use Magic Device DC by 10 or more when activating a magic item with charges, you can expend an additional charge to increase the caster level by 2 levels. Regardless, you can't increase an item's caster level to one that is higher than your own caster level."
  },
  {
    "name": "Emergency Attunement",
    "type": "General",
    "description": "You can adapt your defenses to any situation.",
    "prerequisites": ["Spellcraft 7 ranks"],
    "prerequisitesFeats": ["Spellcraft 7 ranks"],
    "benefit": "As a standard action, you can alter one of your ongoing abjuration or transmutation spells. It must be currently affecting you and must grant a choice of options when cast. You change its benefit to a different one from the same list. In order to accomplish this, you must make a successful Spellcraft check (DC equal to 10 + the level of the spell to be altered). The duration of the spell is reduced to half of the spell's remaining duration. For example, a 7thlevel wizard could change her resist energy ( fire) spell with 50 minutes of its duration remaining into resist energy (cold), but the new duration would be 25 minutes. This ability does not change the benefit for any other creatures targeted by the original spell."
  },
  {
    "name": "Planned Spontaneity",
    "type": "General",
    "description": "You have a measure of flexibility when preparing spells.",
    "prerequisites": ["Knowledge (arcana) 9 ranks","ability to prepare and cast 4th-level spells"],
    "prerequisitesFeats": ["Knowledge (arcana) 9 ranks","ability to prepare and cast 4th-level spells"],
    "benefit": "Once per day when you prepare spells, you can designate one spell slot from each of up to three different spell levels that are lower than the highest-level spell that you can cast. In each designated slot you can memorize two different spells of the respective level. You can cast either spell as normal, but when you do, the spell consumes both of the spells prepared in that spell slot."
  },
  {
    "name": "Tapestry Traveler",
    "type": "General",
    "description": "Your many visits to the Hao Jin Tapestry demiplane have made you an expert in long-distance travel.",
    "prerequisites": ["Character level 5th"],
    "prerequisitesFeats": ["Character level 5th"],
    "benefit": "You cast spells of the teleportation subschool as though your caster level were 2 higher, and you treat yourself as one step more familiar when teleporting to an established Pathfinder lodge with the teleport spell. If you can teleport as a supernatural ability, you treat your class level as if it were 2 higher when calculating the total distance that you can travel with this ability."
  },
  {
    "name": "Cut Your Losses",
    "type": "General",
    "description": "You realize that sometimes it's a safer bet to simply get out of danger's way as fast as possible. You are able to summon a surge of adrenaline when you grab what is most dear to you and run.",
    "prerequisites": ["Str 13","Acrobatics 1 rank"],
    "prerequisitesFeats": ["Str 13","Acrobatics 1 rank"],
    "benefit": "Whenever you withdraw as a full-round action and have at least one free hand, you can pick up one unattended object or unconscious ally of your size or smaller at any point during your movement without provoking attacks of opportunity. Any additional movement performed on your turn still provokes attacks of opportunity as normal. In addition, you treat your Strength score as 2 higher for the purpose of determining your carrying capacity."
  },
  {
    "name": "Improved Underhanded Teamwork",
    "type": "Combat",
    "description": "You and your allies have trained together long enough to know how to exploit an opponent's disadvantage to make her predicament even worse.",
    "prerequisites": ["Combat Expertise","Improved Dirty Trick","Underhanded Teamwork","base attack bonus +6"],
    "prerequisitesFeats": ["Combat Expertise","Improved Dirty Trick","Underhanded Teamwork","base attack bonus +6"],
    "benefit": "Whenever an ally who also has this feat performs the dirty trick combat maneuver against a foe that you both threaten, you may attempt a dirty trick combat maneuver against the same foe as an immediate action to inf lict a second condition. If the foe uses an action to remove the first condition, it also removes the condition imposed by your immediate action."
  },
  {
    "name": "Underhanded Teamwork",
    "type": "Combat",
    "description": "You and your allies know how to use coordinated maneuvers to set up an enemy with an unfair disadvantage.",
    "prerequisites": ["Combat Expertise","Improved Dirty Trick"],
    "prerequisitesFeats": ["Combat Expertise","Improved Dirty Trick"],
    "benefit": "Whenever an ally who also has this feat performs a dirty trick combat maneuver against a foe you both threaten, you can use an immediate action to increase the inf licted condition's duration by 1 round."
  },
  {
    "name": "Atheist Abjurations",
    "type": "General",
    "description": "Your critical attitude toward the divine allows you to determine the best ways to remove divine inf luence.",
    "prerequisites": ["Divine Defiance"],
    "prerequisitesFeats": ["Divine Defiance"],
    "benefit": "You gain a +2 bonus to your caster level whenever you use an abjuration spell to dispel or counter a divine spell, or send an extraplanar outsider summoned or called by a divine caster back to its home plane."
  },
  {
    "name": "Divine Defiance",
    "type": "General",
    "description": "You distrust, disrespect, or doubt the gods, which helps you fight off their power.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain a +2 bonus on saving throws against divine spells and the spell-like abilities granted by levels in a divine casting class."
  },
  {
    "name": "Divine Denouncer",
    "type": "General",
    "description": "You choose to resist rather than serve the gods.",
    "prerequisites": ["Divine Defiance"],
    "prerequisitesFeats": ["Divine Defiance"],
    "benefit": "You gain a +2 insight bonus on Bluff, Diplomacy, Intimidate, Knowledge, Perform (oratory), and Sense Motive checks involving any divine spellcaster or outsider that casts spells as a cleric."
  },
  {
    "name": "Focused Disbelief",
    "type": "General",
    "description": "So certain is your disbelief in the authority of the gods that you can brush aside their spells without effort.",
    "prerequisites": ["Divine Defiance"],
    "prerequisitesFeats": ["Divine Defiance"],
    "benefit": "You gain spell resistance equal to 11 + your character level. This spell resistance applies only against spells and spell-like abilities covered by the Divine Defiance feat. You can lower this resistance for 1 round as a standard action."
  },
  {
    "name": "Iconoclast",
    "type": "Combat",
    "description": "You know how to turn a holy symbol into a weapon against her followers.",
    "prerequisites": ["Divine Defiance","Improved Sunder","Power Attack","Intimidate 3 ranks"],
    "prerequisitesFeats": ["Divine Defiance","Improved Sunder","Power Attack","Intimidate 3 ranks"],
    "benefit": "When you succeed at a sunder combat maneuver against a holy or unholy symbol, you can attempt an Intimidate check to demoralize as a free action. This demoralization affects all followers of the deity or philosophy whose symbol you sundered who saw you sunder it and are within 30 feet. If you destroyed the symbol, you gain a +5 bonus on your Intimidate check. You can use this feat when sundering any physical holy symbol-it doesn't have to be the hand-held variety commonly used by clerics and other divine spellcasters."
  },
  {
    "name": "Seeds Ofdoubt",
    "type": "General",
    "description": "You have learned to plant the seeds of your own doubt in the minds of others by way of your hexes.",
    "prerequisites": ["Hex class feature","Divine Defiance"],
    "prerequisitesFeats": ["Hex class feature","Divine Defiance"],
    "benefit": "As long as a creature is subject to one of your hexes, it gains a +1 luck bonus on Will saving throws and can't help but doubt and resist divine magic. Whenever an affected creature is subject to a divine spell or spell-like ability granted by a divine spellcasting class, that creature must attempt a saving throw if at all possible, even if the effect is harmless, cast by an ally, or cast by the creature itself."
  },
  {
    "name": "Animal Ally",
    "type": "General",
    "description": "Your respect for nature is so great that you can form a deep and lasting friendship with an animal.",
    "prerequisites": ["Nature Soul","character level 4th","must not have an animal companion or mount that advances as an animal companion"],
    "prerequisitesFeats": ["Nature Soul","character level 4th","must not have an animal companion or mount that advances as an animal companion"],
    "benefit": "You gain an animal companion as if you were a druid of your character level -3 from the following list: badger, bird, camel, cat (small), dire rat, dog, horse, pony, snake (viper), or wolf. If you later gain an animal companion through another source (such as the Animal domain, divine bond, hunter's bond, mount, or nature bond class features), the effective druid level granted by this feat stacks with that granted by other sources."
  },
  {
    "name": "Druidic Decoder",
    "type": "General",
    "description": "You have a natural understanding of the Druidic language.",
    "prerequisites": ["Linguistics 1 rank","cannot be a druid"],
    "prerequisitesFeats": ["Linguistics 1 rank","cannot be a druid"],
    "benefit": "You gain a +5 bonus on Linguistics checks made to decipher writings in the Druidic language. If you have 10 or more ranks in Linguistics, add Druidic to the list of bonus languages available to you."
  },
  {
    "name": "Friend To Animals",
    "type": "General",
    "description": "You show great respect for all living things, and they sense and return the gesture.",
    "prerequisites": ["Nature Soul","Handle Animal 3 ranks"],
    "prerequisitesFeats": ["Nature Soul","Handle Animal 3 ranks"],
    "benefit": "As a standard action you can require all animals within 30 feet to make a Will saving throw. Animals who fail the save cannot attack you unless you attack them or one of their allies first. The DC of the Will save is equal to 10 + half your character level + your Charisma modifier."
  },
  {
    "name": "Nature Soul",
    "type": "General",
    "description": "You are innately in tune with nature and venerate the power and mystery of the natural world.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You get a +2 bonus on all Knowledge (nature) checks and Survival checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill."
  },
  {
    "name": "Weather Eye",
    "type": "General",
    "description": "Your constant attention to the natural order and your place in it has given you a keen sense for the ebb and flow of the seasons.",
    "prerequisites": ["Survival 3 ranks","must worship nature"],
    "prerequisitesFeats": ["Survival 3 ranks","must worship nature"],
    "benefit": "You gain a +4 bonus on Survival checks made to predict the weather. You gain a +1 bonus on saving throws to avoid the effects of extreme weather."
  },
  {
    "name": "Bend With The Wind",
    "type": "General",
    "description": "Meditation allows you to regulate your body temperature, heart rate, and other attributes to resist the elements.",
    "prerequisites": ["Wis 15","Body Control","Endurance","Meditation Master"],
    "prerequisitesFeats": ["Wis 15","Body Control","Endurance","Meditation Master"],
    "benefit": "For 24 hours after you meditate, you gain cold resistance 5 and fire resistance 5."
  },
  {
    "name": "Body Control",
    "type": "General",
    "description": "You can directly manipulate your autonomic functions.",
    "prerequisites": ["Wis 11","Meditation Master"],
    "prerequisitesFeats": ["Wis 11","Meditation Master"],
    "benefit": "For 24 hours after you meditate, you gain a +1 bonus on Fortitude saving throws against poison, disease, starvation, and effects that would make you fatigued or exhausted. You need only half as much food to avoid starvation, half as much water to avoid dehydration, and half as much sleep to heal injuries, avoid fatigue or exhaustion, and prepare spells."
  },
  {
    "name": "Body Mastery",
    "type": "General",
    "description": "Meditation allows you to harden your body against physical attacks.",
    "prerequisites": ["Wis 19","Body Control","Meditation Master","character level 15th"],
    "prerequisitesFeats": ["Wis 19","Body Control","Meditation Master","character level 15th"],
    "benefit": "For 24 hours after you meditate, you gain damage reduction 2/-."
  },
  {
    "name": "Combat Meditation",
    "type": "Combat",
    "description": "Quick momentary meditation allows you to gain insight in combat.",
    "prerequisites": ["Wis 13","Meditation Master","character level 5th"],
    "prerequisitesFeats": ["Wis 13","Meditation Master","character level 5th"],
    "benefit": "You can meditate as a full-round action. If you do, you gain all the benefits of your meditation feats, but they last for only 1 round per character level. Combat meditation allows you to expend the +1 insight bonus granted from the Meditation Master feat to instead roll twice when attempting an ability check, attack roll, saving throw, or skill check, taking the better of the two results. You must decide to use this ability before the initial roll is made. You may only use this alternate ability in place of bonuses granted by the Meditation Master feat. You can perform combat meditation a number of times per day equal to your Wisdom modifier."
  },
  {
    "name": "Meditation Master",
    "type": "General",
    "description": "When fully focused on your inner self, you can enter a deep meditative state that allows you a more perfect control over your mind and body.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you meditate for at least 1 hour after getting at least 8 hours of rest, you gain special insight into your situation that is nearly impartial, granting you the edge in whatever endeavor matters most during the day. After meditating, you gain a +1 insight bonus that you can apply to any d20 roll over the course of the next 24 hours without using an action. The bonus may be applied after the roll is made, but must be applied before the results of the roll are determined. Once the bonus has been used for the day, you cannot use it again until after you meditate again after another 8 hours of rest. An unused bonus fades after 24 hours."
  },
  {
    "name": "Meditative Concentration",
    "type": "General",
    "description": "Meditation clears your mind, allowing you to concentrate on your spells as if not distracted.",
    "prerequisites": ["Wis 13","Combat Meditation","Meditation Master","character level 5th"],
    "prerequisitesFeats": ["Wis 13","Combat Meditation","Meditation Master","character level 5th"],
    "benefit": "For 1 round per character level after you perform combat meditation, whenever you attempt a concentration check to avoid losing a spell or a Fortitude save to resist a distraction effect (such as the distraction ability of a swarm), you gain a +4 bonus on the check. If you choose to use the benefits of Combat Meditation on the check, the bonus applies to both die rolls."
  },
  {
    "name": "Perfect Awareness",
    "type": "Combat",
    "description": "You can set aside all irrelevant sensory information to understand your surroundings perfectly for a moment.",
    "prerequisites": ["Wis 17","Combat Meditation","Meditation Master","character level 9th"],
    "prerequisitesFeats": ["Wis 17","Combat Meditation","Meditation Master","character level 9th"],
    "benefit": "Once per day, you can take 20 on a Perception check as a move action."
  },
  {
    "name": "Perfect Center",
    "type": "Combat",
    "description": "You can ignore almost any distraction.",
    "prerequisites": ["Wis 21","Combat Meditation","Meditation Master","character level 17th"],
    "prerequisitesFeats": ["Wis 21","Combat Meditation","Meditation Master","character level 17th"],
    "benefit": "You can take 10 on any skill check or concentration check, even if it is not normally allowed due to strenuous circumstances."
  },
  {
    "name": "Slow Time",
    "type": "Combat",
    "description": "Meditation allows you to perceive time as if it were moving more slowly.",
    "prerequisites": ["Wis 15","Combat Meditation","Meditation Master","character level 7th"],
    "prerequisitesFeats": ["Wis 15","Combat Meditation","Meditation Master","character level 7th"],
    "benefit": "Once per day, when you meditate as a full-round action using the Combat Meditation feat, you gain the effects of haste for 1 round per 2 character levels. These effects do not stack with the haste spell, the speed magic weapon special ability, or other effects granting the same result. This is an extraordinary ability."
  },
  {
    "name": "Demonic Nemesis",
    "type": "Combat",
    "description": "You are well acquainted with the machinations of a particular demon lord. You're resistant to his tricks, and have no fear of his minions.",
    "prerequisites": ["Demon HunterISWG","Knowledge (planes) 6 ranks"],
    "prerequisitesFeats": ["Demon HunterISWG","Knowledge (planes) 6 ranks"],
    "benefit": "When you take this feat, choose a demon lord. When fighting followers of that demon lord, including cultists or demons, you gain a +2 bonus on damage rolls and rolls to confirm critical hits against these creatures."
  },
  {
    "name": "Exorcist's Rebuttal",
    "type": "General",
    "description": "You've experienced the suffocating grip of demonic possession. The event left you emotionally scarred, but it also tempered your mind against the prying magic of evil enchantments.",
    "prerequisites": ["Improved Iron Will","Iron Will"],
    "prerequisitesFeats": ["Improved Iron Will","Iron Will"],
    "benefit": "If you use your Improved Iron Will feat to reroll a Will save against a compulsion effect and successfully save against the effect, the creature that created the effect (if it originated from a creature) takes 1d4 points of Wisdom damage."
  },
  {
    "name": "Outer Planes Traveler",
    "type": "General",
    "description": "You have seen the outer reaches of the multiverse, and have gleaned knowledge from these alien realms. You have a special affinity for one of these realms in particular, and carry some of that plane's power within you.",
    "prerequisites": ["Knowledge (planes) 11 ranks","ability to cast plane shift or gate as a spell or spell-like ability"],
    "prerequisitesFeats": ["Knowledge (planes) 11 ranks","ability to cast plane shift or gate as a spell or spell-like ability"],
    "benefit": "Choose one of the planes below. The alignment of the plane must be within one step of your alignment. You gain a +2 bonus on saves against spells and spell-like abilities with the associated descriptor, and you cast spells with that descriptor at +1 caster level. Plane Alignment Descriptor Heaven LG Light Nirvana NG Good Elysium CG EmotionUM Axis LN Lawful The Boneyard N Death The Maelstrom CN Chaotic Hell LE PainUM Abaddon NE Evil The Abyss CE Fear"
  },
  {
    "name": "Vengeful Banisher",
    "type": "Story",
    "description": "You've witnessed demons and their madness firsthand, likely in one of the lands detailed in this section, or perhaps some other demon-marked region such as the Worldwound or the Abyss. Since then, you've sworn to send these wretched fiends back to whence they came, and you've become an expert at rooting out their kind and their servants.",
    "prerequisites": ["You witnessed at least one family member or a close friend being killed by demons or demonic cultists","or you have the Hated Foe or An Eye for an Eye background (see Ultimate Campaign)"],
    "prerequisitesFeats": ["You witnessed at least one family member or a close friend being killed by demons or demonic cultists","or you have the Hated Foe or An Eye for an Eye background (see Ultimate Campaign)"],
    "benefit": "You gain a +2 bonus on saving throws against spells or effects originating from demon worshipers and from creatures of the demon type."
  },
  {
    "name": "Coordinated Distraction",
    "type": "Combat",
    "description": "When working in tandem, you can make it difficult for foes to use their magical abilities.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you and at least one ally with this feat threaten the same enemy, the enemy treats the DC to cast spells defensively as 2 higher for each threatening character with this feat. If you or your allies are incapable of taking an attack of opportunity against the target for any reason, the effects of this feat do not apply."
  },
  {
    "name": "Punch Through",
    "type": "Combat",
    "description": "You and your allies are adept at bypassing enemy defenses.",
    "prerequisites": ["Base attack bonus +6"],
    "prerequisitesFeats": ["Base attack bonus +6"],
    "benefit": "As a full-round action, you may make a single attack against a target. If the attack hits and deals damage to the target, all of your allies with this feat ignore up to 5 points of damage reduction against the same target for 1 round. This feat does not apply to damage reduction without a type (such as DR 10/-)."
  },
  {
    "name": "Spell Chain",
    "type": "General",
    "description": "You help your allies bypass your foes' magical defenses.",
    "prerequisites": ["Spell Penetration"],
    "prerequisitesFeats": ["Spell Penetration"],
    "benefit": "Whenever you make a successful caster level check to overcome a target's spell resistance, the next ally who also has this feat that attempts to overcome the same target's spell resistance can roll twice when attempting his own caster level check, taking the better result. This benefit must be used within 1 round or else it is lost."
  },
  {
    "name": "Babau Rogue Talent",
    "type": "General",
    "description": "Your instinct for combat is much like that of a rogue.",
    "prerequisites": ["Dex 17","babau"],
    "prerequisitesFeats": ["Dex 17","babau"],
    "benefit": "Choose one rogue talent that adds to sneak attacks (such as bleeding attack or slow reactions)."
  },
  {
    "name": "Flensing Strike",
    "type": "General",
    "description": "Your slashing sneak attacks tend to slice away swaths of skin and natural armor.",
    "prerequisites": ["Sneak attack +3d6","bleeding sneak attack rogue trick or bleed universal monster ability"],
    "prerequisitesFeats": ["Sneak attack +3d6","bleeding sneak attack rogue trick or bleed universal monster ability"],
    "benefit": "When you successfully inflict sneak attack damage on a foe with a slashing weapon, your attack doesn't go particularly deep, but you do carve away a significant portion of skin and flesh. If this sneak attack inflicts bleed damage, the victim of the sneak attack is sickened by the pain and has its natural armor bonus (if any) reduced by a number of points equal to the number of sneak attack dice you possess. These penalties persist as long as the bleed damage persists. Multiple strikes on the same foe do not stack the bleed damage, but the penalty to natural armor does stack, to a maximum penalty equal to the target's normal full natural armor score."
  },
  {
    "name": "Improved Stench",
    "type": "General",
    "description": "Your foul odor is particularly strong and wide-reaching.",
    "prerequisites": ["Stench universal monster ability"],
    "prerequisitesFeats": ["Stench universal monster ability"],
    "benefit": "The aura range of your stench ability increases by 30 feet. In addition, your stench ability save DC increases by 2, and its duration increases by 50%."
  },
  {
    "name": "Pungent Stench",
    "type": "General",
    "description": "Your stench is overwhelmingly nauseating.",
    "prerequisites": ["Stench universal monster ability","Improved Stench","Great Fortitude"],
    "prerequisitesFeats": ["Stench universal monster ability","Improved Stench","Great Fortitude"],
    "benefit": "The first round a creature is affected by your stench, it is nauseated in addition to being sickened. At the end of an affected creature's turn after the first round, it can make a new save against the stench's DC to remove the nauseated condition, but the sickened condition lasts as long as normal."
  },
  {
    "name": "Toxic Stench",
    "type": "General",
    "description": "Your stench is poisonous.",
    "prerequisites": ["Stench universal monster ability","immunity to poison","Improved Stench","Toughness"],
    "prerequisitesFeats": ["Stench universal monster ability","immunity to poison","Improved Stench","Toughness"],
    "benefit": "The first round a creature is affected by your stench, it must also make a successful Fortitude save against the same DC to resist becoming poisoned. If you have 10 or fewer HD, this poison is identical to insanity mist; if you have 11 or more HD, the poison also adds confusion for 1 round to its effects."
  },
  {
    "name": "Demonic Possession",
    "type": "General",
    "description": "You can possess creatures.",
    "prerequisites": ["Demon or half-demon","Cha 21","Wis 17"],
    "prerequisitesFeats": ["Demon or half-demon","Cha 21","Wis 17"],
    "benefit": "You gain the ability to use magic jar as a spell-like ability once per day."
  },
  {
    "name": "Improved Possession",
    "type": "General",
    "description": "Your ability to possess bodies is more powerful.",
    "prerequisites": ["Demonic Possession or shadow demon","Cha 25"],
    "prerequisitesFeats": ["Demonic Possession or shadow demon","Cha 25"],
    "benefit": "The duration of your magic jar spell-like ability increases to 24 hours. You can choose to activate a host body's extraordinary abilities, supernatural abilities, spell-like abilities, and spells known or prepared."
  },
  {
    "name": "Penetrating Possession",
    "type": "General",
    "description": "Your ability to possess foes can bypass magical protections.",
    "prerequisites": ["Magic jar as a known spell or spell-like ability","Cha 21"],
    "prerequisitesFeats": ["Magic jar as a known spell or spell-like ability","Cha 21"],
    "benefit": "The first time you attempt to possess a host under the effect of protection from evil spell or any similar spell, you have a chance to dispel that spell as if you had cast dispel magic on the spell."
  },
  {
    "name": "Spirit Vision",
    "type": "General",
    "description": "You retain your senses when seeking a possession target.",
    "prerequisites": ["Magic jar as a known spell or spell-like ability","Wis 15"],
    "prerequisitesFeats": ["Magic jar as a known spell or spell-like ability","Wis 15"],
    "benefit": "When you sense life forces while seeking a host, you can observe them as you could when you were in your own body. Attempting to possess a body is a standard action."
  },
  {
    "name": "Improved Infuse Weapon",
    "type": "General",
    "description": "When you infuse weapons, you may add an additional magical quality.",
    "prerequisites": ["Infuse weapon special ability","Cha 27"],
    "prerequisitesFeats": ["Infuse weapon special ability","Cha 27"],
    "benefit": "When you infuse a weapon, you can add an additional +1 worth of weapon qualities to that weapon; this could either be used to increase a weapon infused to be a +1 weapon to be a +2 weapon, or to grant a weapon quality like flaming, defending, keen, or any other +1 quality from the Pathfinder RPG Core Rulebook. This effect occurs automatically as you infuse a weapon, but you may only do so to one weapon you wield at a time."
  },
  {
    "name": "Multiweapon Defense",
    "type": "General",
    "description": "You sacrifice attacks to parry blows.",
    "prerequisites": ["Three or more arms","Dex 21"],
    "prerequisitesFeats": ["Three or more arms","Dex 21"],
    "benefit": "When you make a full-attack action, you may choose not to take an attack with a number of your wielded weapons other than your primary weapon. For each attack you forgo, you gain a +1 shield bonus to your AC for that round. This bonus stacks with itself to a maximum bonus of +5, but not with shield bonuses to AC from other sources."
  },
  {
    "name": "Multiweapon Specialist",
    "type": "General",
    "description": "You gain bonuses on damage when you wield identical one-handed weapons.",
    "prerequisites": ["Three or more arms","Dex 21"],
    "prerequisitesFeats": ["Three or more arms","Dex 21"],
    "benefit": "When you wield one-handed or light weapons in each of your arms, and all of those weapons belong to the same weapon group (as defined for the fighter class), all attacks with those weapons gain a +2 bonus on damage rolls."
  },
  {
    "name": "Consume Undeath",
    "type": "General",
    "description": "You gain the powers of undeath when you feed upon their kind.",
    "prerequisites": ["Nabasu","Con 23"],
    "prerequisitesFeats": ["Nabasu","Con 23"],
    "benefit": "As a full-round action, you can consume the animating force of any undead creature you have created with your death-stealing gaze. This immediately destroys the undead creature, but grants you one of that creature's special attacks or supernatural abilities (chosen from one of the following abilities possessed by the undead: Constitution drain, disease, energy drain, or paralysis). The ability granted persists for 24 hours or until the next sunrise, whichever comes first."
  },
  {
    "name": "Improved Death-Stealing",
    "type": "General",
    "description": "Your death-stealing gaze creates more powerful undead.",
    "prerequisites": ["Nabasu","Ability Focus (death-stealing gaze)"],
    "prerequisitesFeats": ["Nabasu","Ability Focus (death-stealing gaze)"],
    "benefit": "When you would normally create a ghoul with your death-stealing gaze, you instead create a ghast. As a free action, you may also spend a number of growth points in order to even further augment your new undead minion as it is created. If you spend 1 growth point, you create a wight instead of a ghast. If you spend 3 growth points, you create a wraith instead of a ghast. And if you spend 5 growth points, you transform the target into a juju zombie instead of a ghast. Note that spending growth in this manner reduces your statistics as appropriate."
  },
  {
    "name": "Accursed Hex",
    "type": "Mythic",
    "description": "Your hexes flare with persistent potency.",
    "prerequisites": ["Accursed HexUM"],
    "prerequisitesFeats": ["Accursed HexUM"],
    "benefit": "When you use Accursed Hex to target a creature with one of your hexes a second time, that creature must roll its saving throw twice and take the lower result."
  },
  {
    "name": "Acrobatic",
    "type": "Mythic",
    "description": "Your grace and fluidity are beyond compare.",
    "prerequisites": ["Acrobatic"],
    "prerequisitesFeats": ["Acrobatic"],
    "benefit": "The bonus on Acrobatics and Fly skill checks from Acrobatic increases by 2. In addition, you can expend one use of mythic power to treat an Acrobatics or Fly check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Alertness",
    "type": "Mythic",
    "description": "Your powers of perception surpass everyone's, whether used to observe your surroundings or the intentions of others.",
    "prerequisites": ["Alertness"],
    "prerequisitesFeats": ["Alertness"],
    "benefit": "The bonus on Perception and Sense Motive skill checks from Alertness increases by 2. In addition, you can expend one use of mythic power to treat a Perception or Sense Motive check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Alignment Channel",
    "type": "Mythic",
    "description": "The power of your faith harms all creatures that follow the alignment you abhor.",
    "prerequisites": ["Alignment Channel"],
    "prerequisitesFeats": ["Alignment Channel"],
    "benefit": "Your channeled energy affects any creatures with the alignment chosen when you took Alignment Channel (not just outsiders, and not just those with the alignment subtype), but grants only half healing or deals only half damage to these targets. Alternatively, you can expend two uses of mythic power when using Alignment Channel to affect all targets of the chosen alignment as if they had that alignment subtype."
  },
  {
    "name": "Animal Affinity",
    "type": "Mythic",
    "description": "You have a greater affinity with wild animals, and can speak with them.",
    "prerequisites": ["Animal Affinity"],
    "prerequisitesFeats": ["Animal Affinity"],
    "benefit": "The bonus on Handle Animal and Ride skill checks from Animal Affinity increases by 2. In addition, you can expend one use of mythic power to speak with animals as the spell. Your caster level for this effect is equal to twice your tier."
  },
  {
    "name": "Arcane Armor Training",
    "type": "Mythic",
    "description": "You've adapted your spellcasting to overcome limitations of wearing armor.",
    "prerequisites": ["Arcane Armor Training"],
    "prerequisitesFeats": ["Arcane Armor Training"],
    "benefit": "You don't have to spend a swift action to gain the reduction to arcane spell failure chance from Arcane Armor Training. Furthermore, if you're wearing light armor, reduce your arcane spell failure chance by 20%."
  },
  {
    "name": "Arcane Blast",
    "type": "Mythic",
    "description": "You can manipulate raw eldritch energies to do more than just deal damage.",
    "prerequisites": ["Arcane BlastAPG"],
    "prerequisitesFeats": ["Arcane BlastAPG"],
    "benefit": "When you use Arcane Blast, you may halve the damage dice to also perform your choice of either a trip or bull rush combat maneuver against the target of the blast. You can't move with an opponent you bull rush with this feat. You gain a bonus on your combat maneuver check for this attempt equal to half the spell level of the spell you sacrificed when using Arcane Blast, and you can substitute your Intelligence or Charisma modifier in place of your Strength modifier when determining your combat maneuver bonus. In addition, you can expend one use of mythic power to change the damage dice of your Arcane Blast to d8s instead of d6s."
  },
  {
    "name": "Arcane Shield",
    "type": "Mythic",
    "description": "You sculpt spells into a powerful, enduring arcane barriers.",
    "prerequisites": ["Arcane ShieldAPG"],
    "prerequisitesFeats": ["Arcane ShieldAPG"],
    "benefit": "You add half your tier to the def lection bonus granted to your AC when you use your Arcane Shield. You can expend one use of mythic power when using this feat to extend the duration to a number of rounds equal to your tier."
  },
  {
    "name": "Arcane Strike",
    "type": "Mythic",
    "description": "Using your amazing arcane talents, you can deliver devastating blows infused with magical energy.",
    "prerequisites": ["Arcane Strike"],
    "prerequisitesFeats": ["Arcane Strike"],
    "benefit": "Whenever you use Arcane Strike to enhance your weapons, the effect lasts for 1 minute instead of 1 round. If you expend one use of mythic power when using Arcane Strike, you can also add any one magic weapon special ability with a base price modifier of +1 to your weapons. This base price modifier increases to +2 at 4th tier, +3 at 7th tier, and +4 at 10th tier."
  },
  {
    "name": "Ascendant Spell",
    "type": "Metamagic",
    "description": "You have learned how to emulate mythic spells using non-mythic forces.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You can modify a spell to imitate the mythic version of that spell. An ascendant spell uses the mythic version of the spell, but doesn't count as a mythic spell for the purposes of effects that interact with the spell, unless you are a mythic creature. You can't use the augmented version of the mythic spell, or use spells effects that require you to expend uses of mythic power (even if you have uses of mythic power available). An ascendant spell uses up a spell slot 5 levels higher than the spell's actual level."
  },
  {
    "name": "Aspect Of The Beast",
    "type": "Mythic",
    "description": "Your blood burns with savage fury, giving you bestial powers and abilities.",
    "prerequisites": ["Aspect of the BeastAPG"],
    "prerequisitesFeats": ["Aspect of the BeastAPG"],
    "benefit": "Your bestial nature manifests itself in one of the following ways. You choose the manifestation when you choose the feat, and you can't change it. Mythic Senses (Ex): If you have normal vision, you gain darkvision 30 feet. If you have low-light vision, you gain darkvision 60 feet. If you have darkvision, the range of your darkvision increases by 30 feet plus 10 feet per tier. Mythic Claws (Ex): You grow a pair of powerful claws. These claws are primary attacks that deal 1d4 points of damage (1d3 if you're Small). If you already have claws, the damage they deal increases by one die type (d4s become d6s, d3s become d4s, and so on). You can expend one use of mythic power when you hit with both claws during the same round to rend with those claws, dealing extra damage equal to one claw's damage plus 1-1/2 times your Strength bonus. Mythic Leap (Ex): You can make a running jump without needing to run 10 feet beforehand. In addition, you gain a +5 bonus on your Acrobatics checks to determine the success of that jump and the distance covered. If you already have the predator's leap manifestation of Aspect of the Beast, the bonus on your Acrobatics checks increases to +10. Mythic Instinct (Ex): You gain a +2 bonus on initiative checks and a +2 bonus on Survival checks. These bonuses stack with those gained from the wild instinct manifestation of Aspect of the Beast."
  },
  {
    "name": "Athletic",
    "type": "Mythic",
    "description": "You excel far beyond others at acts of physical prowess.",
    "prerequisites": ["Athletic"],
    "prerequisitesFeats": ["Athletic"],
    "benefit": "The bonus on Climb and Swim skill checks from Athletic increases by 2. In addition, you can expend one use of mythic power to treat a Climb or Swim check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Augment Summoning",
    "type": "Mythic",
    "description": "Your summoning spells bring not mere ordinary beasts, but instead mythic creatures.",
    "prerequisites": ["Augment Summoning"],
    "prerequisitesFeats": ["Augment Summoning"],
    "benefit": "Any creature you summon using a summon spell is considered mythic for the purpose of interacting with other mythic creatures. It doesn't gain any mythic abilities or power, but is affected by mythic spells and abilities as if it were a 1st-tier mythic creature. Additionally, if the creature summoned has damage reduction, its damage reduction becomes DR/epic."
  },
  {
    "name": "Bleeding Critical",
    "type": "Mythic",
    "description": "Your deadliest blows unleash rivers of blood.",
    "prerequisites": ["Bleeding Critical","Critical Focus (mythic)"],
    "prerequisitesFeats": ["Bleeding Critical","Critical Focus (mythic)"],
    "benefit": "The bleed damage dealt with Bleeding Critical increases by your tier. Stopping this bleed damage requires a Heal check with a DC equal to 15 + 1/2 your tier. Any magical healing ends the bleed damage normally. You can expend one use of mythic power to deal 1 Con bleed, in addition to the hit point bleed damage you deal with this feat. This effect increases by 1 for each additional use of mythic power you expend."
  },
  {
    "name": "Blind-Fight",
    "type": "Mythic",
    "description": "No creature can avoid your preternatural senses.",
    "prerequisites": ["Blind-Fight"],
    "prerequisitesFeats": ["Blind-Fight"],
    "benefit": "As a swift action, you can expend one use of mythic power to ignore all miss chances due to concealment or total concealment for a number of rounds equal to your tier."
  },
  {
    "name": "Catch Off-Guard",
    "type": "Mythic",
    "description": "In your hands, anything is a deadly weapon.",
    "prerequisites": ["Catch Off-Guard"],
    "prerequisitesFeats": ["Catch Off-Guard"],
    "benefit": "The damage dealt when you use improvised weapons increases by your tier. You also gain a bonus to CMD equal to your tier when an opponent attempts to sunder or disarm an improvised weapon you're wielding."
  },
  {
    "name": "Channel Smite",
    "type": "Mythic",
    "description": "Your weapon a conduit of divine energy.",
    "prerequisites": ["Channel Smite"],
    "prerequisitesFeats": ["Channel Smite"],
    "benefit": "When using Channel Smite, you gain a bonus on your attack roll equal to the number of d6s granted by your channel energy class feature. This is either a sacred bonus (if channeling positive energy) or a profane bonus (if channeling negative energy). If your attack misses the target, you can expend one use of mythic power as a free action to release the channeled energy, producing the normal effects of your channel energy class feature centered on the creature you were attempting to smite."
  },
  {
    "name": "Charge Through",
    "type": "Mythic",
    "description": "You can plow through those who stand between you and the target of your charge.",
    "prerequisites": ["Charge ThroughAPG"],
    "prerequisitesFeats": ["Charge ThroughAPG"],
    "benefit": "When charging, you can ignore allies in your path when determining whether or not you can charge your target. Furthermore, after you have attempted at least one overrun with Charge Through, you can expend one use of mythic power as a free action to attempt another overrun against a different opponent in the path of the same charge."
  },
  {
    "name": "Cleave",
    "type": "Mythic",
    "description": "You can cleave any foe within your reach.",
    "prerequisites": ["Cleave"],
    "prerequisitesFeats": ["Cleave"],
    "benefit": "Whenever you use Cleave or Great Cleave, one of your attacks can be made against a foe that is within your reach, but not adjacent to the foe you attacked. You can expend one use of mythic power when you use Cleave or Great Cleave to continue making attacks against foes within your reach, regardless of their position, as long as you continue to hit each foe. You can't use this ability to attack a foe more than once per round."
  },
  {
    "name": "Combat Expertise",
    "type": "Mythic",
    "description": "You can dart out of the way of attacks with skill and defiance.",
    "prerequisites": ["Combat Expertise"],
    "prerequisitesFeats": ["Combat Expertise"],
    "benefit": "Whenever you use Combat Expertise, you gain an additional +2 dodge bonus to your Armor Class. You can expend one use of mythic power to negate the penalties on melee attack rolls and combat maneuver checks caused by using Combat Expertise for 1 minute."
  },
  {
    "name": "Combat Reflexes",
    "type": "Mythic",
    "description": "You strike viciously whenever your foe gives you an opening.",
    "prerequisites": ["Combat Reflexes"],
    "prerequisitesFeats": ["Combat Reflexes"],
    "benefit": "You can make any number of additional attacks of opportunity per round. As a swift action, you can expend one use of mythic power to, until the start of your next turn, make attacks of opportunity against foes you've already made attacks of opportunity against this round if they provoke attacks of opportunity from you by moving."
  },
  {
    "name": "Command Undead",
    "type": "Mythic",
    "description": "Your control of the undead is nearly absolute.",
    "prerequisites": ["Command Undead"],
    "prerequisitesFeats": ["Command Undead"],
    "benefit": "When you command undead, the DC of the Will save increases by half your tier, and intelligent undead get no additional saves beyond their first to resist your commands. Any attempts by non-mythic creatures to control undead you command automatically fail, and you gain a +4 bonus on Charisma checks to prevent mythic creatures from stealing control of your undead."
  },
  {
    "name": "Critical Focus",
    "type": "Mythic",
    "description": "Your blows unerringly find your target's vital spots.",
    "prerequisites": ["Critical Focus"],
    "prerequisitesFeats": ["Critical Focus"],
    "benefit": "You automatically confirm critical threats against non-mythic opponents. In addition, when you threaten a critical hit against a creature wearing armor with the fortification special ability or similar effect, that creature must roll twice and take the worse result when determining critical hit negation."
  },
  {
    "name": "Critical Mastery",
    "type": "Mythic",
    "description": "Your critical hits are versatile and devastating.",
    "prerequisites": ["Critical Focus (mythic)","Critical Mastery"],
    "prerequisitesFeats": ["Critical Focus (mythic)","Critical Mastery"],
    "benefit": "When using Critical Mastery, increase the number of critical feats you may apply by every 3 tiers that you possess."
  },
  {
    "name": "Dastardly Finish",
    "type": "Mythic",
    "description": "You strike downed, dazed, and staggered opponents with deadly efficiency.",
    "prerequisites": ["Dastardly FinishAPG"],
    "prerequisitesFeats": ["Dastardly FinishAPG"],
    "benefit": "You can deliver a coup de grace to dazed and staggered non-mythic opponents. In addition, when any creature makes a Fortitude saving throw to survive one of your coup de grace attempts, it takes a penalty to that saving throw equal to your tier."
  },
  {
    "name": "Dazzling Display",
    "type": "Mythic",
    "description": "You can quickly deter others with your martial mastery.",
    "prerequisites": ["Dazzling Display"],
    "prerequisitesFeats": ["Dazzling Display"],
    "benefit": "While wielding the weapon with which you have Weapon Focus, you can use Dazzling Display as a standard action with a -5 penalty on your Intimidate check, as a move action with a -10 penalty, or as a swift action with a -20 penalty. You can expend one use of mythic power when you make a Dazzling Display to make those affected by the display frightened rather than shaken."
  },
  {
    "name": "Deadly Aim",
    "type": "Mythic",
    "description": "Your aim is truly devastating.",
    "prerequisites": ["Deadly Aim"],
    "prerequisitesFeats": ["Deadly Aim"],
    "benefit": "When you use Deadly Aim, you gain a +3 bonus on ranged damage rolls instead of +2. When your base attack bonus reaches +4, and every +4 thereafter, the bonus on ranged damage rolls increases by +3 rather than +2."
  },
  {
    "name": "Deadly Stroke",
    "type": "Mythic",
    "description": "You can kill with a single stroke.",
    "prerequisites": ["Deadly Stroke"],
    "prerequisitesFeats": ["Deadly Stroke"],
    "benefit": "When making a Deadly Stroke attack, you can expend one use of mythic power to instantly kill a non-mythic living creature. A Fortitude save (DC 10 + your base attack bonus + your tier) negates this effect, though the attack still deals double damage and Con bleed as Deadly Stroke. Constructs, oozes, and creatures immune to critical hits or precision-based damage can't be killed with this feat."
  },
  {
    "name": "Death From Above",
    "type": "Mythic",
    "description": "When attacking from the air or higher ground, you bear down on your enemy to deadly effect.",
    "prerequisites": ["Death from AboveUC"],
    "prerequisitesFeats": ["Death from AboveUC"],
    "benefit": "Whenever you charge an opponent from higher ground, or from above while flying, the critical multiplier of your weapon increases by 2 (to a maximum of x6). This doesn't stack with other abilities that increase a weapon's critical multiplier. If your charge attack hits, you can perform a trip combat maneuver against the attack's target as a free action without provoking attacks of opportunity."
  },
  {
    "name": "Deceitful",
    "type": "Mythic",
    "description": "Your power to mislead is beyond compare.",
    "prerequisites": ["Deceitful"],
    "prerequisitesFeats": ["Deceitful"],
    "benefit": "The bonus on Bluff and Disguise skill checks from Deceitful increases by 2. In addition, you can expend one use of mythic power to treat a Bluff or Disguise check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Deepsight",
    "type": "Mythic",
    "description": "Your sharp eyes can penetrate deeper into the darkness, revealing more to you.",
    "prerequisites": ["DeepsightAPG"],
    "prerequisitesFeats": ["DeepsightAPG"],
    "benefit": "The range of your darkvision increases by 10 feet per tier."
  },
  {
    "name": "Defensive Combat Training",
    "type": "Mythic",
    "description": "Your defensive capabilities in combat are unmatched.",
    "prerequisites": ["Defensive Combat Training","4th mythic tier"],
    "prerequisitesFeats": ["Defensive Combat Training","4th mythic tier"],
    "benefit": "Add half your tier to your CMD."
  },
  {
    "name": "Deflect Arrows",
    "type": "Mythic",
    "description": "You deflect projectiles and ray spells with uncanny skill.",
    "prerequisites": ["Deflect Arrows"],
    "prerequisitesFeats": ["Deflect Arrows"],
    "benefit": "When using Deflect Arrows, you can deflect an additional number of ranged attacks per round equal to half your tier. You can expend one use of mythic power as an immediate action to deflect a single ray from a ray spell or effect targeting you."
  },
  {
    "name": "Deft Hands",
    "type": "Mythic",
    "description": "Your hands are astonishingly nimble.",
    "prerequisites": ["Deft Hands"],
    "prerequisitesFeats": ["Deft Hands"],
    "benefit": "The bonus on Disable Device and Sleight of Hand skill checks from Deft Hands increases by 2. In addition, you can expend one use of mythic power to treat a Disable Device or Sleight of Hand check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Detect Expertise",
    "type": "Mythic",
    "description": "You can sense a creature's magical abilities with just a mere glance.",
    "prerequisites": ["Detect ExpertiseUM"],
    "prerequisitesFeats": ["Detect ExpertiseUM"],
    "benefit": "You gain the benefit of Detect Expertise immediately (without needing to observe a creature for 3 rounds) when using the divinations listed in Detect Expertise. Non-mythic creatures cannot attempt a Will save to resist this effect."
  },
  {
    "name": "Disruptive",
    "type": "Mythic",
    "description": "You're a master at disrupting nearby spellcasters.",
    "prerequisites": ["Disruptive"],
    "prerequisitesFeats": ["Disruptive"],
    "benefit": "The DC to cast spells defensively within your threatened area increases by half your tier. This stacks with the increase granted by Disruptive. In addition, even if you can't make attacks of opportunity, non-mythic spellcasters are still wary of you and continue to suffer from the effects of Disruptive."
  },
  {
    "name": "Distance Thrower",
    "type": "Mythic",
    "description": "There's virtually no limit to your powerful throwing arm.",
    "prerequisites": ["Str 17","Distance ThrowerUC"],
    "prerequisitesFeats": ["Str 17","Distance ThrowerUC"],
    "benefit": "Thrown weapons wielded by you have twice their normal range."
  },
  {
    "name": "Divine Interference",
    "type": "Mythic",
    "description": "Your divine power thwarts enemies of your faith.",
    "prerequisites": ["Divine InterferenceUM"],
    "prerequisitesFeats": ["Divine InterferenceUM"],
    "benefit": "When you use Divine Interference, the penalty on your opponent's attack roll is equal to twice the level of the spell sacrificed. You can expend one use of mythic power when you sacrifice the spell to increase the penalty to triple the level of the spell sacrificed."
  },
  {
    "name": "Dodge",
    "type": "Mythic",
    "description": "When focused, you become nearly impossible to strike.",
    "prerequisites": ["Dodge"],
    "prerequisitesFeats": ["Dodge"],
    "benefit": "The bonus to AC from Dodge increases by 1. As an immediate action, you can expend one use of mythic power to grant yourself an additional +10 dodge bonus to AC against one attack."
  },
  {
    "name": "Dreadful Carnage",
    "type": "Mythic",
    "description": "Your kills are truly frightening to behold.",
    "prerequisites": ["Dreadful CarnageAPG"],
    "prerequisitesFeats": ["Dreadful CarnageAPG"],
    "benefit": "When you use Dreadful Carnage, you affect non-mythic enemies within 60 feet in addition to all enemies within 30 feet. You can expend one use of mythic power before making the Intimidate check to cause enemies demoralized by Dreadful Carnage to become frightened instead of shaken, for the same duration as the normal shaken effect. While frightened by this ability, an enemy takes a penalty equal to your tier on attack rolls, saving throws, skill checks, and ability checks."
  },
  {
    "name": "Drink Is Life",
    "type": "Mythic",
    "description": "Strong drink fuels the mythic fires within you.",
    "prerequisites": ["Con 19","3rd mythic tier"],
    "prerequisitesFeats": ["Con 19","3rd mythic tier"],
    "benefit": "You never take penalties for consuming nonmagical alcohol, and you can consume an alcoholic beverage as a swift action instead of a move action. Each time you consume an alcoholic beverage, you may gain one of the benefits of polypurpose panacea (Pathfinder RPG Ultimate Magic 232). You can have only one of these benefits active at a time. If you expend one use of mythic power while drinking an alcoholic beverage, you can heal 2 points of ability damage, negate a temporary penalty to one ability score, or remove one of the following conditions: confused, diseased, exhausted, fatigued, frightened, nauseated, poisoned, shaken, sickened, or staggered."
  },
  {
    "name": "Dual Path",
    "type": "Mythic",
    "description": "You follow two mythic paths.",
    "prerequisites": ["1st mythic tier"],
    "prerequisitesFeats": ["1st mythic tier"],
    "benefit": "Select a mythic path other than the path you selected at your moment of ascension. You gain that path's 1st-tier ability (either archmage arcana, champion's strike, divine surge, guardian's call, marshal's order, or trickster attack). Each time you gain a path ability, you can select that path ability from either path's list or the list of universal path abilities."
  },
  {
    "name": "Eagle Eyes",
    "type": "Mythic",
    "description": "You eyesight rivals that of the most far-seeing raptors.",
    "prerequisites": ["Eagle EyesAPG"],
    "prerequisitesFeats": ["Eagle EyesAPG"],
    "benefit": "You ignore up to -10 in penalties due to distance on visual Perception checks, instead of the normal -5. As a swift action, you can expend one use of mythic power to ignore all penalties due to distance on visual Perception checks for 1 round."
  },
  {
    "name": "Eldritch Heritage",
    "type": "Mythic",
    "description": "The blood of your sorcerous ancestor mingles with your mythic power to great effect.",
    "prerequisites": ["Eldritch HeritageUM"],
    "prerequisitesFeats": ["Eldritch HeritageUM"],
    "benefit": "You gain sorcerer bloodline powers of the bloodline tied to Eldritch Heritage as if your sorcerer level were your character level - 2. For that bloodline's 1st-level bloodline power, use your full character level to determine its effect; for all other bloodline powers, treat your sorcerer level as your character level - 2."
  },
  {
    "name": "Elemental Channel",
    "type": "Mythic",
    "description": "Your power over elemental beings is nearly absolute.",
    "prerequisites": ["Elemental Channel"],
    "prerequisitesFeats": ["Elemental Channel"],
    "benefit": "Your Elemental Channel can affect any elemental subtype, not just the one you chose when you took Elemental Channel. Each time you use Elemental Channel, you must pick one elemental subtype before using the feat. You can expend one use of mythic power when you use Elemental Channel to choose a second elemental subtype to affect."
  },
  {
    "name": "Elemental Fist",
    "type": "Mythic",
    "description": "Your ability to channel elemental power through your unarmed attacks is ferociously potent.",
    "prerequisites": ["Elemental FistAPG"],
    "prerequisitesFeats": ["Elemental FistAPG"],
    "benefit": "The extra energy damage dealt by Elemental Fist increases to 1d8 points, and you gain additional uses of Elemental Fist per day equal to your tier. You can expend one use of mythic power as an immediate action to add the extra damage from your Elemental Fist to all of the unarmed strikes you make until the beginning of your next turn. This counts as only one use of Elemental Fist, regardless of the number of attacks that you make in this fashion."
  },
  {
    "name": "Elemental Focus",
    "type": "Mythic",
    "description": "Your elemental spells are potent and effective.",
    "prerequisites": ["Elemental FocusAPG"],
    "prerequisitesFeats": ["Elemental FocusAPG"],
    "benefit": "Choose an energy type in which you already have Elemental Focus. The increase to save DC provided by Elemental Focus and Greater Elemental Focus for spells of the selected energy type is 1 higher. When casting a spell with this energy type's descriptor, you can expend one use of mythic power as part of the casting to force the spell's targets to roll their saving throws twice, taking the lower result."
  },
  {
    "name": "Elven Accuracy",
    "type": "Mythic",
    "description": "Your elven eyesight cuts though concealment.",
    "prerequisites": ["Elven AccuracyAPG"],
    "prerequisitesFeats": ["Elven AccuracyAPG"],
    "benefit": "When you make an attack with a longbow or short bow (including composite bows), you can ignore concealment, but not total concealment. You still suffer a miss chance for total concealment, but if you miss due to total concealment, you may reroll your miss chance as per Elven Accuracy."
  },
  {
    "name": "Endurance",
    "type": "Mythic",
    "description": "Your endurance is truly beyond the pale.",
    "prerequisites": ["Endurance"],
    "prerequisitesFeats": ["Endurance"],
    "benefit": "The bonus on checks and saves from Endurance increases by half your tier. You take half the damage when you fail a check to avoid nonlethal damage from a forced march, starvation and thirst, hot or cold environments, or slow suffocation. You can sleep in heavy armor without becoming fatigued."
  },
  {
    "name": "Eschew Materials",
    "type": "Mythic",
    "description": "You can cast even the most powerful spells without using material components.",
    "prerequisites": ["Eschew Materials"],
    "prerequisitesFeats": ["Eschew Materials"],
    "benefit": "You can cast any spell with a material component costing 10 gp per tier or less without providing that component. If you expend one use of mythic power while casting a spell that requires a material component costing 50 gp per tier or less, you can cast it without providing that component. Expending two uses of mythic power instead allows you to cast a spell that requires a material component costing 100 gp per tier or less without providing that component."
  },
  {
    "name": "Extra Mythic Power",
    "type": "Mythic",
    "description": "You can store more mythic power than your tier would normally allow.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain two extra uses of mythic power each day."
  },
  {
    "name": "Extra Path Ability",
    "type": "Mythic",
    "description": "You can call upon mythic powers beyond those already invested in you.",
    "prerequisites": ["3rd mythic tier"],
    "prerequisitesFeats": ["3rd mythic tier"],
    "benefit": "Choose one mythic ability from your path or from the universal path abilities that you meet the prerequisites for. You gain that path ability."
  },
  {
    "name": "Fabulous Figments",
    "type": "Mythic",
    "description": "Your illusions are astonishingly realistic.",
    "prerequisites": ["Spell Focus (illusion)"],
    "prerequisitesFeats": ["Spell Focus (illusion)"],
    "benefit": "Non-mythic creatures can't identify your illusion spells with Spellcraft, including checks attempted as part of arcane sight, detect magic, or similar effects. When mythic creatures attempt to identify your illusions, add your tier to the DC of those Spellcraft checks. Mythic creatures informed by their allies that one of your illusions isn't real gain only a +2 bonus on their Will saves to disbelieve. Non-mythic creatures gain no bonus to disbelieve."
  },
  {
    "name": "Far Shot",
    "type": "Mythic",
    "description": "You make long-ranged attacks with remarkable accuracy.",
    "prerequisites": ["Far Shot"],
    "prerequisitesFeats": ["Far Shot"],
    "benefit": "As a swift action, you can expend one use of mythic power to ignore all range increment penalties for your ranged attacks until the end of your turn."
  },
  {
    "name": "Fast Empathy",
    "type": "Mythic",
    "description": "You can soothe the emotions of wild beasts with nearly supernatural quickness.",
    "prerequisites": ["Fast EmpathyUM"],
    "prerequisitesFeats": ["Fast EmpathyUM"],
    "benefit": "You can use wild empathy as a swift action."
  },
  {
    "name": "Fire Music",
    "type": "Mythic",
    "description": "You masterfully weave the ancient melodies of fire into your spells.",
    "prerequisites": ["Fire MusicUM"],
    "prerequisitesFeats": ["Fire MusicUM"],
    "benefit": "When you use Fire Music to change any of the damage dealt by a bard spell to fire damage, that damage ignores fire resistance up to your tier. If you cast summon monster as a bard spell and choose to give the summoned creature a fiery appearance, increase its fire resistance by 5 (adding to the resistance already granted by Fire Music) and add 1d4 points of fire damage to all of its natural attacks instead of the +1 fire damage normally granted by Fire Music. Creatures with the fire subtype also gain these benefits."
  },
  {
    "name": "Fleet",
    "type": "Mythic",
    "description": "You're fantastically light on your feet.",
    "prerequisites": ["Fleet"],
    "prerequisitesFeats": ["Fleet"],
    "benefit": "Your base land speed increases by 5 feet, regardless of what armor you wear or whether you're encumbered. This bonus stacks with the bonus gained from Fleet."
  },
  {
    "name": "Furious Focus",
    "type": "Mythic",
    "description": "Your attacks create a rhythmic barrage that doesn't sacrifice precision for force.",
    "prerequisites": ["Furious FocusAPG"],
    "prerequisitesFeats": ["Furious FocusAPG"],
    "benefit": "When you are using Furious Focus, you don't take Power Attack's penalty on attack rolls that are made as attacks of opportunity. As a free action, you can expend one use of mythic power to negate Power Attack's penalty on all melee attacks you make for 1 round while using this feat."
  },
  {
    "name": "Gnome Trickster",
    "type": "Mythic",
    "description": "Thanks to your mythic power, the magic in your blood has grown more potent and diverse.",
    "prerequisites": ["Gnome TricksterAPG"],
    "prerequisitesFeats": ["Gnome TricksterAPG"],
    "benefit": "You gain the following spell-like abilities: 1/ day-blur and vanishAPG. You can use your gnome spell-like abilities an additional number of times per day equal to half your tier. You can spend these additional uses to use any of your gnome spell-like abilities you wish. Your caster level for your gnome spell-like abilities becomes your character level plus your tier."
  },
  {
    "name": "Gorgon's Fist",
    "type": "Mythic",
    "description": "Your strikes debilitate and disorient your foes.",
    "prerequisites": ["Gorgon's Fist"],
    "prerequisitesFeats": ["Gorgon's Fist"],
    "benefit": "When you hit a creature while using Gorgon's Fist, if the target fails its Fortitude saving throw, it is dazed for 1 round instead of staggered. You can expend one use of mythic power when you hit with a Gorgon's Fist attack, but before the saving throw is attempted, to increase its DC by half your tier."
  },
  {
    "name": "Great Fortitude",
    "type": "Mythic",
    "description": "Your fortitude is unmatched.",
    "prerequisites": ["Great Fortitude"],
    "prerequisitesFeats": ["Great Fortitude"],
    "benefit": "Whenever you roll a Fortitude saving throw against a spell, spell-like ability, or supernatural ability from a non-mythic source, roll twice and take the higher result."
  },
  {
    "name": "Guided Hand",
    "type": "Mythic",
    "description": "Attacks made with your deity's favored weapon are divinely inspired.",
    "prerequisites": ["Guided HandUC"],
    "prerequisitesFeats": ["Guided HandUC"],
    "benefit": "When making attacks with your deity's favored weapon, you can add your Wisdom modifier instead of your Strength or Dexterity modifier on damage rolls."
  },
  {
    "name": "Heroic Defiance",
    "type": "Mythic",
    "description": "You ignore harmful effects that would bring others down.",
    "prerequisites": ["Heroic DefianceAPG"],
    "prerequisitesFeats": ["Heroic DefianceAPG"],
    "benefit": "Once per day as an immediate action, you can attempt to negate the onset of one harmful condition or aff liction (such as panicked, paralyzed, stunned, and so on) that allowed a saving throw for its onset, not including permanent and instantaneous conditions. When you do so, attempt a Will saving throw with a bonus equal to your tier against the original DC of the effect. If you succeed, the condition is negated. If you fail, the onset is delayed until the end of your next turn, after which it takes its normal effect. This feat has no effect on hit point damage or ability damage. This effect is separate from the use of non-mythic Heroic Defiance."
  },
  {
    "name": "Heroic Recovery",
    "type": "Mythic",
    "description": "You can shrug off the effects of harmful conditions after they've taken effect.",
    "prerequisites": ["Heroic RecoveryAPG"],
    "prerequisitesFeats": ["Heroic RecoveryAPG"],
    "benefit": "As a swift action, you can expend one use of mythic power to use Heroic Recovery additional times. Whenever you do, add your tier to the result of the Fortitude save."
  },
  {
    "name": "Improved Bull Rush",
    "type": "Mythic",
    "description": "You push foes around with amazing ease.",
    "prerequisites": ["Improved Bull Rush"],
    "prerequisitesFeats": ["Improved Bull Rush"],
    "benefit": "You gain a bonus equal to half your tier on checks to bull rush, and to your CMD when an opponent bull rushes you. These bonuses stack with those granted by non-mythic Improved Bull Rush. Furthermore, you can make an attack of opportunity against any creature that attempts to bull rush you, unless it also has this feat."
  },
  {
    "name": "Improved Channel",
    "type": "Mythic",
    "description": "As a divine conduit for energy, you're unmatched.",
    "prerequisites": ["Improved Channel"],
    "prerequisitesFeats": ["Improved Channel"],
    "benefit": "Non-mythic creatures that take damage from your channel energy must roll their saving throws twice and take the lower result."
  },
  {
    "name": "Improved Counterspell",
    "type": "Mythic",
    "description": "Your innate understanding of magical mechanics allows you to unravel spells with pure magical energy.",
    "prerequisites": ["Improved Counterspell"],
    "prerequisitesFeats": ["Improved Counterspell"],
    "benefit": "When counterspelling, you can use a spell of the same school that is the same or higher spell level as the target spell."
  },
  {
    "name": "Improved Critical",
    "type": "Mythic",
    "description": "Your critical strikes with your chosen weapon are deadlier than most.",
    "prerequisites": ["Improved Critical","base attack bonus +8"],
    "prerequisitesFeats": ["Improved Critical","base attack bonus +8"],
    "benefit": "Your critical multiplier with your chosen weapon is increased by 1 (to a maximum of x6)."
  },
  {
    "name": "Improved Dirty Trick",
    "type": "Mythic",
    "description": "You're a paragon of down-and-dirty fighting.",
    "prerequisites": ["Improved Dirty TrickAPG"],
    "prerequisitesFeats": ["Improved Dirty TrickAPG"],
    "benefit": "You gain a bonus equal to half your tier on checks to attempt a dirty trick, and to your CMD when an opponent attempts to perform a dirty trick on you. These bonuses stack with those granted by Improved Dirty Trick. Furthermore, you can make an attack of opportunity against any creature that attempts a dirty trick maneuver against you, unless it also has this feat."
  },
  {
    "name": "Improved Disarm",
    "type": "Mythic",
    "description": "You're expert at knocking your enemies' weapons away.",
    "prerequisites": ["Improved Disarm"],
    "prerequisitesFeats": ["Improved Disarm"],
    "benefit": "You gain a bonus equal to half your tier on checks to disarm, and to your CMD when an opponent tries to disarm you. These bonuses stack with those granted by Improved Disarm. Furthermore, you can make an attack of opportunity against any creature that attempts to disarm you, unless it also has this feat."
  },
  {
    "name": "Improved Drag",
    "type": "Mythic",
    "description": "You pull your enemies around the battlefield with great ease.",
    "prerequisites": ["Improved DragAPG"],
    "prerequisitesFeats": ["Improved DragAPG"],
    "benefit": "You gain a bonus equal to half your tier on checks to attempt a drag combat maneuver, and to your CMD when an opponent attempts a drag combat maneuver against you. These bonuses stack with those granted by Improved Drag. Furthermore, you can make an attack of opportunity against any creature that attempts a drag maneuver against you, unless it also has this feat."
  },
  {
    "name": "Improved Familiar",
    "type": "Mythic",
    "description": "Your familiar gains some of your incredible resiliency and insight.",
    "prerequisites": ["Improved Familiar"],
    "prerequisitesFeats": ["Improved Familiar"],
    "benefit": "For every 3 tiers you possess, your familiar gains a +2 bonus to an ability score of your choice. These bonuses stack. Your familiar adds your tier to its natural armor bonus and to its spell resistance (if it has spell resistance)."
  },
  {
    "name": "Improved Grapple",
    "type": "Mythic",
    "description": "Your wrestling moves are difficult to counter.",
    "prerequisites": ["Improved Grapple"],
    "prerequisitesFeats": ["Improved Grapple"],
    "benefit": "You gain a bonus equal to half your tier on checks to grapple, and to your CMD when an opponent tries to grapple you. These bonuses stack with those granted by Improved Grapple. Furthermore, you can make an attack of opportunity against any creature that attempts to grapple you, unless it also has this feat."
  },
  {
    "name": "Improved Initiative",
    "type": "Mythic",
    "description": "You leap into the fray with speed and confidence.",
    "prerequisites": ["Improved Initiative"],
    "prerequisitesFeats": ["Improved Initiative"],
    "benefit": "The bonus on initiative checks granted by Improved Initiative increases by an amount equal to your tier. This bonus stacks with the bonus from Improved Initiative. In addition, instead of rolling initiative, you can expend one use of mythic power to treat your roll as a natural 20."
  },
  {
    "name": "Improved Overrun",
    "type": "Mythic",
    "description": "You're an unstoppable force on the battlefield, able to run down lesser foes with ease.",
    "prerequisites": ["Improved Overrun"],
    "prerequisitesFeats": ["Improved Overrun"],
    "benefit": "You gain a bonus equal to half your tier on checks to overrun, and to your CMD when an opponent tries to overrun you. These bonuses stack with those granted by Improved Overrun. Furthermore, you can make an attack of opportunity against any creature t"
  },
  {
    "name": "Improved Reposition",
    "type": "Mythic",
    "description": "You put your foes right where you want them.",
    "prerequisites": ["Improved RepositionAPG"],
    "prerequisitesFeats": ["Improved RepositionAPG"],
    "benefit": "You gain a bonus equal to half your tier on checks to attempt a reposition combat maneuver, and to your CMD when an opponent attempts to perform a reposition combat maneuver against you. These bonuses stack with those granted by Improved Reposition. Furthermore, you can make an attack of opportunity against any creature that attempts to reposition you, unless it also has this feat."
  },
  {
    "name": "Improved Steal",
    "type": "Mythic",
    "description": "Your light fingers can lift even the most closely held item off an enemy.",
    "prerequisites": ["Improved StealAPG"],
    "prerequisitesFeats": ["Improved StealAPG"],
    "benefit": "You gain a bonus equal to half your tier on checks to attempt a steal combat maneuver, and to your CMD when an opponent attempts a steal combat maneuver on you. These bonuses stack with those granted by Improved Steal. Furthermore, you can make an attack of opportunity against any creature that attempts a steal maneuver against, you unless it also has this feat."
  },
  {
    "name": "Improved Stonecunning",
    "type": "Mythic",
    "description": "If you listen close, you can hear the secrets of stone.",
    "prerequisites": ["Improved StonecunningAPG"],
    "prerequisitesFeats": ["Improved StonecunningAPG"],
    "benefit": "You gain stone tell as a spell-like ability usable once per day with a caster level equal to twice your tier."
  },
  {
    "name": "Improved Sunder",
    "type": "Mythic",
    "description": "Your mighty smashing blows demolish objects.",
    "prerequisites": ["Improved Sunder"],
    "prerequisitesFeats": ["Improved Sunder"],
    "benefit": "You gain a bonus equal to half your tier on checks to sunder, and to your CMD when an opponent tries to sunder an object used by you. These bonuses stack with those granted by Improved Sunder. Furthermore, you can make an attack of opportunity against any creature that attempts to sunder an object used by you, unless it also has this feat."
  },
  {
    "name": "Improved Trip",
    "type": "Mythic",
    "description": "You're expert at knocking your foes down.",
    "prerequisites": ["Improved Trip"],
    "prerequisitesFeats": ["Improved Trip"],
    "benefit": "You gain a bonus equal to half your tier on checks to trip, and to your CMD when an opponent tries to trip you. These bonuses stack with those granted by Improved Trip. Furthermore, you can make an attack of opportunity against any creature that attempts to trip you, unless it also has this feat."
  },
  {
    "name": "Improved Unarmed Strike",
    "type": "Mythic",
    "description": "Your unarmed strikes are more powerful than others.",
    "prerequisites": ["Improved Unarmed Strike"],
    "prerequisitesFeats": ["Improved Unarmed Strike"],
    "benefit": "You can add half your tier to your damage with unarmed strikes. As a swift action, you can expend one use of mythic power to overcome the hardness of objects with your unarmed strikes. This effect last for a number of rounds equal to your tier. If an object's hardness is greater than 15, you don't ignore any of its hardness."
  },
  {
    "name": "Intimidating Prowess",
    "type": "Mythic",
    "description": "Your mythic stature makes others uneasy.",
    "prerequisites": ["Intimidating Prowess"],
    "prerequisitesFeats": ["Intimidating Prowess"],
    "benefit": "You gain a bonus on Intimidate checks equal to your tier against non-mythic creatures, or half your tier against mythic creatures. If you also have the Persuasive (mythic) feat, you can expend one use of mythic power to treat the Intimidate check as if you had rolled a natural 20. You must decide to use this ability before the roll is made."
  },
  {
    "name": "Iron Will",
    "type": "Mythic",
    "description": "Your will is incorruptible.",
    "prerequisites": ["Iron Will"],
    "prerequisitesFeats": ["Iron Will"],
    "benefit": "Whenever you roll a Will saving throw against a spell, spell-like ability, or supernatural ability from a non-mythic source, roll twice and take the higher result."
  },
  {
    "name": "Knockout Artist",
    "type": "Mythic",
    "description": "Your knockout punches are truly mighty.",
    "prerequisites": ["Knockout ArtistUC"],
    "prerequisitesFeats": ["Knockout ArtistUC"],
    "benefit": "When you use your unarmed strike to deal nonlethal damage and sneak attack damage to an opponent, roll d8s for each sneak attack die instead of d6s."
  },
  {
    "name": "Legendary Teamwork",
    "type": "Mythic",
    "description": "You and your allies fight with great coordination.",
    "prerequisites": ["Any two teamwork feats"],
    "prerequisitesFeats": ["Any two teamwork feats"],
    "benefit": "Any fixed numeric bonuses you gain from teamwork feats are increased by 1. This doesn't apply to variable numeric bonuses or to effects that are not numeric bonuses, such as additional attacks of opportunity, movement, or other extra actions."
  },
  {
    "name": "Lightning Reflexes",
    "type": "Mythic",
    "description": "Your reflexes are superhuman.",
    "prerequisites": ["Lightning Reflexes"],
    "prerequisitesFeats": ["Lightning Reflexes"],
    "benefit": "Whenever you roll a Ref lex saving throw against a spell, spell-like ability, or supernatural ability from a non-mythic source, roll twice and take the higher result."
  },
  {
    "name": "Lucky Halfling",
    "type": "Mythic",
    "description": "You share your mythic luck with those around you.",
    "prerequisites": ["Lucky HalflingAPG"],
    "prerequisitesFeats": ["Lucky HalflingAPG"],
    "benefit": "When you use Lucky Halfling, add your tier as a bonus on the saving throw. You can expend one use of mythic power when an ally uses your save but still suffers an effect on a successful saving throw. If you do, that ally suffers no effect on the successful saving throw."
  },
  {
    "name": "Lucky Surge",
    "type": "Mythic",
    "description": "Your surges defy the odds.",
    "prerequisites": ["Potent Surge","3rd mythic tier"],
    "prerequisitesFeats": ["Potent Surge","3rd mythic tier"],
    "benefit": "Whenever you use your surge ability, you can roll your surge dice twice and take the higher result. If you can already roll your surge dice twice and take the higher result, you roll your surge dice three times and take the highest result."
  },
  {
    "name": "Lunge",
    "type": "Mythic",
    "description": "Your reaching strikes aid your defenses against those you hit.",
    "prerequisites": ["Lunge"],
    "prerequisitesFeats": ["Lunge"],
    "benefit": "Whenever you use Lunge and hit a creature with the melee attack, you no longer take a -2 penalty to AC against that creature. You can expend one use of mythic power when you use Lunge to negate the -2 penalty to AC whether you hit or miss, and gain a +2 bonus on attacks of opportunity you make while Lunge is in effect."
  },
  {
    "name": "Magical Aptitude",
    "type": "Mythic",
    "description": "Your understanding of the principles and intricacies of magic goes far beyond your training.",
    "prerequisites": ["Magical Aptitude"],
    "prerequisitesFeats": ["Magical Aptitude"],
    "benefit": "The bonus on Spellcraft and Use Magic Device skill checks from Magical Aptitude increases by 2. In addition, you can expend one use of mythic power to treat a Spellcraft or Use Magic Device check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Manyshot",
    "type": "Mythic",
    "description": "You can fire a barrage of arrows at your target with very little effort.",
    "prerequisites": ["Manyshot"],
    "prerequisitesFeats": ["Manyshot"],
    "benefit": "When making a full-attack action with a bow and using Manyshot, you fire two arrows with both your first and second attacks, instead of just your first attack."
  },
  {
    "name": "Marked For Glory",
    "type": "General",
    "description": "You're destined for glory beyond the ken of ordinary adventurers and mere mortals.",
    "prerequisites": ["Great Fortitude","Iron Will","or Lightning Reflexes"],
    "prerequisitesFeats": ["Great Fortitude","Iron Will","or Lightning Reflexes"],
    "benefit": "You can use the surge ability (see page 12) once per day (adding 1d6). If you are or become mythic, you can use your surge one additional time per day."
  },
  {
    "name": "Maximize Surge",
    "type": "Mythic",
    "description": "In times of dire need, you can burn your mythic power to ensure success.",
    "prerequisites": ["6th mythic tier"],
    "prerequisitesFeats": ["6th mythic tier"],
    "benefit": "Once per day when you surge, you can expend two uses of mythic power to treat your surge die as though it rolled the maximum result."
  },
  {
    "name": "Medusa's Wrath",
    "type": "Mythic",
    "description": "Your barrage of unarmed attacks builds to a single, staggering strike.",
    "prerequisites": ["Medusa's Wrath"],
    "prerequisitesFeats": ["Medusa's Wrath"],
    "benefit": "You may forgo the two additional unarmed strikes of Medusa's Wrath to instead make a single unarmed strike at your highest base attack bonus. If you successfully hit your opponent, it must succeed at a Fortitude saving throw (DC 10 + 1/2 your character level + your Wisdom modifier) or be staggered for 1 round. You can expend one use of mythic power when you stagger a target with Medusa's Wrath to extend the duration of the staggered condition by a number of rounds equal to half your tier."
  },
  {
    "name": "Missile Shield",
    "type": "Mythic",
    "description": "Your remarkable awareness allows you to deflect multiple ranged attacks and even ray spells.",
    "prerequisites": ["Missile ShieldAPG"],
    "prerequisitesFeats": ["Missile ShieldAPG"],
    "benefit": "When using Missile Shield, you can deflect an additional number of ranged attacks per round equal to half your tier. You can expend one use of mythic power as an immediate action to deflect a single ray from a ray spell or effect targeting you."
  },
  {
    "name": "Mobility",
    "type": "Mythic",
    "description": "You have perfected your ability to weave through the battlefield, using your momentum to propel yourself far.",
    "prerequisites": ["Mobility"],
    "prerequisitesFeats": ["Mobility"],
    "benefit": "Whenever you use Mobility, you gain a +6 dodge bonus to AC instead of the normal +4. In addition, once per round when an attack of opportunity provoked by your movement misses you, you may move 5 feet as a free action. This movement doesn't count against your total overall movement for the round, but it does provoke attacks of opportunity."
  },
  {
    "name": "Monastic Legacy",
    "type": "Mythic",
    "description": "Every new experience carries you another step further along your path to enlightenment.",
    "prerequisites": ["Monastic LegacyUC"],
    "prerequisitesFeats": ["Monastic LegacyUC"],
    "benefit": "Add half the levels you have in classes other than monk to your monk level to determine your effective monk level for your AC bonus. As a free action, you can expend one use of mythic power to add half your tier to your effective monk level to determine your base unarmed strike damage and AC bonus until the start of your next turn."
  },
  {
    "name": "Mounted Archery",
    "type": "Mythic",
    "description": "Your skill as a rider allows you to take cover and shoot with amazing accuracy.",
    "prerequisites": ["Mounted Archery"],
    "prerequisitesFeats": ["Mounted Archery"],
    "benefit": "When using the Ride skill to use your mount as cover, you can still make a single ranged weapon attack as a standard action. While your mount is moving, you can expend one use of mythic power to negate the penalties for making ranged weapon attacks while mounted until the beginning of your next turn."
  },
  {
    "name": "Mounted Combat",
    "type": "Mythic",
    "description": "Your ability to maneuver a mount through the rigors of combat is nearly unparalleled.",
    "prerequisites": ["Mounted Combat"],
    "prerequisitesFeats": ["Mounted Combat"],
    "benefit": "You can negate an additional number of hits against your mount per round equal to your tier. Once per round as an immediate action, you can expend one use of mythic power to substitute a Ride check for a single Ref lex saving throw your mount must make."
  },
  {
    "name": "Mythic Companion",
    "type": "General",
    "description": "Despite your non-mythic nature, you're a vital part of the greater mythic world.",
    "prerequisites": ["You must be non-mythic"],
    "prerequisitesFeats": ["You must be non-mythic"],
    "benefit": "You're considered a mythic creature for the purposes of determining how mythic spells and effects affect you. If you ever become mythic, you gain a +1 bonus on all saves against mythic spells and effects."
  },
  {
    "name": "Mythic Crafter",
    "type": "Mythic",
    "description": "You can craft mythic magic items.",
    "prerequisites": ["Any item creation feat"],
    "prerequisitesFeats": ["Any item creation feat"],
    "benefit": "You can create any mythic magic item for which you have the appropriate item creation feat. In addition, you gain a +5 bonus on skill checks when creating non-mythic magic items."
  },
  {
    "name": "Mythic Paragon",
    "type": "Mythic",
    "description": "Your mythic power is even more potent than that of most other mythic beings.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Your tier is considered 2 higher for determining the potency of mythic abilities, feats, and spells. This doesn't grant you access to mythic abilities or greater versions of mythic spells at a lower tier than you would normally need to be to get them, nor does it grant you additional uses of mythic power or adjust the dice you roll for your surge."
  },
  {
    "name": "Mythic Spell Lore",
    "type": "Mythic",
    "description": "You have learned how to unlock the power of your spells, combining them with your mythic power.",
    "prerequisites": ["Ability to cast spells"],
    "prerequisitesFeats": ["Ability to cast spells"],
    "benefit": "You can learn a number of mythic spells equal to your tier and can expend mythic power when casting them to enhance the results. To select a mythic spell, you must be able to cast the non-mythic version or have it on your list of spells known. Every time you gain a new tier, you can select an additional mythic spell."
  },
  {
    "name": "Natural Spell",
    "type": "Mythic",
    "description": "You can speak and use some magic items when you use wild shape.",
    "prerequisites": ["Natural Spell"],
    "prerequisitesFeats": ["Natural Spell"],
    "benefit": "When you're using wild shape, you can use spell completion and spell trigger magic items that were on your person when you changed form. You don't need to physically manipulate the items when you use them while using wild shape. Furthermore, you can speak normally when using wild shape."
  },
  {
    "name": "Nimble Moves",
    "type": "Mythic",
    "description": "You dance across obstacles with ease, as though they weren't even there.",
    "prerequisites": ["Nimble Moves"],
    "prerequisitesFeats": ["Nimble Moves"],
    "benefit": "For every 2 tiers you possess, you can move through up to 5 feet of difficult terrain each round as if it were normal terrain (minimum 5 feet). This effect stacks with those provided by Nimble Moves and Acrobatic Steps."
  },
  {
    "name": "Penetrating Strike",
    "type": "Mythic",
    "description": "You know just how to strike to bypass even the most heavily armored foe's defenses.",
    "prerequisites": ["Penetrating Strike"],
    "prerequisitesFeats": ["Penetrating Strike"],
    "benefit": "When using Penetrating Strike or Greater Penetrating Strike, you can ignore an additional point of damage reduction for every 3 tiers you posses. Additionally, the effects apply to damage reduction without a type (such as DR 10/-)."
  },
  {
    "name": "Persuasive",
    "type": "Mythic",
    "description": "You're a master of persuasion, be it with soothing words or harsh barking commands.",
    "prerequisites": ["Persuasive"],
    "prerequisitesFeats": ["Persuasive"],
    "benefit": "The bonus on Diplomacy and Intimidate skill checks granted by Persuasive increases by 2. In addition, you can expend one use of mythic power to treat a Diplomacy or Intimidate check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Pinpoint Targeting",
    "type": "Mythic",
    "description": "Your attacks can home in on your opponent's weak spot and ignore many defenses.",
    "prerequisites": ["Pinpoint Targeting"],
    "prerequisitesFeats": ["Pinpoint Targeting"],
    "benefit": "You can use this feat even if you move this round, but only if the distance you move is equal to or less than 5 feet per tier."
  },
  {
    "name": "Point-Blank Shot",
    "type": "Mythic",
    "description": "Your accuracy with ranged attacks is unmatched at point-blank range.",
    "prerequisites": ["Point-Blank Shot"],
    "prerequisitesFeats": ["Point-Blank Shot"],
    "benefit": "The bonus on attack and damage rolls granted by Point-Blank Shot increases to +2. As a swift action, you can expend one use of mythic power to gain an additional bonus on these rolls equal to half your tier."
  },
  {
    "name": "Potent Surge",
    "type": "Mythic",
    "description": "Your surge is more potent.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you use your surge ability, add 1 to your surge result."
  },
  {
    "name": "Power Attack",
    "type": "Mythic",
    "description": "Your attacks are truly devastating.",
    "prerequisites": ["Power Attack"],
    "prerequisitesFeats": ["Power Attack"],
    "benefit": "When you use Power Attack, you gain a +3 bonus on melee damage rolls instead of +2. When your base attack bonus reaches +4 and every 4 points thereafter, the amount of bonus damage increases by +3 instead of +2. In addition, the bonus damage from this feat is doubled on a critical hit, before it's multiplied by the weapon's critical multiplier. You can expend one use of mythic power when you activate Power Attack to ignore the penalties on melee attack rolls and combat maneuver checks for 1 minute."
  },
  {
    "name": "Powerful Shape",
    "type": "Mythic",
    "description": "The forms you take in wild shape tower over their natural counterparts.",
    "prerequisites": ["Powerful ShapeUM"],
    "prerequisitesFeats": ["Powerful ShapeUM"],
    "benefit": "You can apply the giant simple template (quick rules version, from Pathfinder RPG Bestiary 295) to any form you take with wild shape. This replaces the benefit from Powerful Shape. As a free action, you can expend one use of mythic power to combine the benefit from this feat with the benefit from non-mythic Powerful Shape for a number of rounds equal to your tier."
  },
  {
    "name": "Prophetic Visionary",
    "type": "Mythic",
    "description": "Your precognitive powers aid you further.",
    "prerequisites": ["Prophetic VisionaryUM"],
    "prerequisitesFeats": ["Prophetic VisionaryUM"],
    "benefit": "You can use Prophetic Visionary's augury ability at will, spending 10 minutes in a deep trance each time. Your chance of a successful augury increases by 1% per tier. A successful augury made by using this feat also grants you the benefits of guidance, but the bonus is equal to your tier and is an insight bonus instead of a competence bonus."
  },
  {
    "name": "Quick Draw",
    "type": "Mythic",
    "description": "You can retrieve any item quickly, not just weapons.",
    "prerequisites": ["Quick Draw"],
    "prerequisitesFeats": ["Quick Draw"],
    "benefit": "You can use Quick Draw to draw items of any kind, not just weapons, provided they are stored or concealed on your person. As a move action, you can expend one use of mythic power to retrieve up to two hidden items. You must have two hands free to do so."
  },
  {
    "name": "Racial Heritage",
    "type": "Mythic",
    "description": "Your racial heritage mingles with your mythic power to become more pronounced.",
    "prerequisites": ["Racial HeritageAPG"],
    "prerequisitesFeats": ["Racial HeritageAPG"],
    "benefit": "You gain a single racial trait of your choice from the race you picked when you took non-mythic Racial Heritage. That racial trait can't modify your size or ability scores. You also gain the racial language of the race (if any) if you don't already know it. For races with multiple racial languages, you gain all of them."
  },
  {
    "name": "Rapid Reload",
    "type": "Mythic",
    "description": "You can reload any type of weapon with astounding speed.",
    "prerequisites": ["Rapid Reload"],
    "prerequisitesFeats": ["Rapid Reload"],
    "benefit": "You gain the benefits of Rapid Reload with all crossbows and firearms, not just the one you originally chose when you gained that feat. As a swift action, you can expend one use of mythic power to gain the ability to reload crossbows and firearms without provoking attacks of opportunity for 1 minute."
  },
  {
    "name": "Rapid Shot",
    "type": "Mythic",
    "description": "You can fire many times each round with amazing precision.",
    "prerequisites": ["Rapid Shot"],
    "prerequisitesFeats": ["Rapid Shot"],
    "benefit": "When using Rapid Shot, you can either ignore the feat's -2 penalty on attack rolls or make two additional attacks instead of one."
  },
  {
    "name": "Rhetorical Flourish",
    "type": "Mythic",
    "description": "You're supremely skilled at using verbal misdirection and finesse to inf luence others.",
    "prerequisites": ["Rhetorical FlourishUC"],
    "prerequisitesFeats": ["Rhetorical FlourishUC"],
    "benefit": "When you successfully use Rhetorical Flourish against a non-mythic creature, the bonus on your Diplomacy check increases by your tier. If the target is a mythic creature, you instead increase the bonus by half your tier. You can expend one use of mythic power to reroll a single failed Bluff check. You must take the new result even if it is lower."
  },
  {
    "name": "Ride-By Attack",
    "type": "Mythic",
    "description": "You can make multiple attacks as you ride past your enemies.",
    "prerequisites": ["Ride-By Attack"],
    "prerequisitesFeats": ["Ride-By Attack"],
    "benefit": "When you successfully strike an opponent as part of a Ride-By Attack, you can continue to make attacks against successive targets. You can make one additional attack per 3 tiers you possess, but you can't make more attacks than you could if you were making a full attack. Successive attacks use the lower bonus for multiple attacks, as when making a full attack. You must move at least 10 feet between each attack."
  },
  {
    "name": "Run",
    "type": "Mythic",
    "description": "You run with preternatural speed and endurance.",
    "prerequisites": ["Run"],
    "prerequisitesFeats": ["Run"],
    "benefit": "When running, you move seven times your normal speed if wearing medium, light, or no armor and carrying no more than a medium load, or six times your speed if wearing heavy armor or carrying a heavy load. When making a jump after a running start, you gain an additional bonus equal to your tier + 4 on your Acrobatics check. You can run normally for a number of rounds equal to your Constitution score plus your tier, but after that you must succeed at Constitution checks to continue running."
  },
  {
    "name": "Saving Shield",
    "type": "Mythic",
    "description": "Shielding a comrade from harm gives you a chance to strike back.",
    "prerequisites": ["Saving ShieldAPG"],
    "prerequisitesFeats": ["Saving ShieldAPG"],
    "benefit": "The shield bonus you grant an ally with Saving Shield increases to +3. If you use Saving Shield to successfully negate an attack against an adjacent ally, you can immediately make an attack of opportunity against the attacker so long as it is within your melee reach."
  },
  {
    "name": "Scorpion Style",
    "type": "Mythic",
    "description": "Your unarmed strikes can induce a near-crippling lethargy in your enemies.",
    "prerequisites": ["Scorpion Style"],
    "prerequisitesFeats": ["Scorpion Style"],
    "benefit": "Whenever you are using Scorpion Style, you add your tier to the number of rounds the target's base land speed is reduced. You can expend one use of mythic power when making your attack to slow your target, as the spell slow, unless it succeeds at a Fortitude save (DC 10 + 1/2 your character level + your Wisdom modif ier). The slowing effect supersedes the normal speed penalty of your Scorpion Strike, but lasts for an equal number of rounds."
  },
  {
    "name": "Selective Channeling",
    "type": "Mythic",
    "description": "When you exclude creatures from your channel, you empower those you do affect.",
    "prerequisites": ["Selective Channeling"],
    "prerequisitesFeats": ["Selective Channeling"],
    "benefit": "When you channel energy, the damage you heal or deal increases by a number of points equal to twice the number of targets you excluded from your channeled energy. You can expend one use of mythic power to increase the number of targets you exclude from your channeled energy by half your tier."
  },
  {
    "name": "Self-Sufficient",
    "type": "Mythic",
    "description": "Independence comes naturally to you, and you have mastered taking care of yourself.",
    "prerequisites": ["Self-Sufficient"],
    "prerequisitesFeats": ["Self-Sufficient"],
    "benefit": "The bonus on Heal and Survival skill checks from Self-Sufficient increases by 2. In addition, you can expend one use of mythic power to treat a Heal or Survival check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Shatter Defenses",
    "type": "Mythic",
    "description": "Your dazzling attacks leave your opponents flummoxed and bewildered, unable to attack you or to defend themselves effectively.",
    "prerequisites": ["Shatter Defenses"],
    "prerequisitesFeats": ["Shatter Defenses"],
    "benefit": "An opponent you affect with Shatter Defenses is flat-footed to all attacks, not just yours."
  },
  {
    "name": "Shield Focus",
    "type": "Mythic",
    "description": "You're a master of using your shield for protection.",
    "prerequisites": ["Shield Focus"],
    "prerequisitesFeats": ["Shield Focus"],
    "benefit": "Add your shield bonus and your shield's enhancement bonus to your touch AC. As an immediate action, you can expend one use of mythic power to add your shield bonus and your shield's enhancement bonus on a Fortitude or Ref lex save just before you roll it."
  },
  {
    "name": "Shield Slam",
    "type": "Mythic",
    "description": "Your shield bash produces a powerful kick.",
    "prerequisites": ["Shield Slam"],
    "prerequisitesFeats": ["Shield Slam"],
    "benefit": "When using Shield Slam to bull rush, an opponent knocked prone because of an intervening wall or other surface also takes damage from the collision. The damage dealt is equal to 1d6 points per 2 tiers you possess. As an immediate action, you can expend one use of mythic power to add your tier to your combat maneuver checks when resolving a bull rush made due to Shield Slam."
  },
  {
    "name": "Shot On The Run",
    "type": "Mythic",
    "description": "With ease, you can snap off two shots while dashing across the battlef ield.",
    "prerequisites": ["Shot on the Run","base attack bonus +6"],
    "prerequisitesFeats": ["Shot on the Run","base attack bonus +6"],
    "benefit": "Whenever you use Shot on the Run, you can make two ranged attacks at your highest base attack bonus at any point during your movement, instead of just one."
  },
  {
    "name": "Skill Focus",
    "type": "Mythic",
    "description": "You mastery with this skill is unmatched, even in difficult situations.",
    "prerequisites": ["Skill Focus"],
    "prerequisitesFeats": ["Skill Focus"],
    "benefit": "You can always take 10 or 20 on checks with your choice of skill for Skill Focus, even when you are rushed or threatened."
  },
  {
    "name": "Snatch Arrows",
    "type": "Mythic",
    "description": "You can use the weapons you pluck from the air to immediately make melee attacks.",
    "prerequisites": ["Snatch Arrows"],
    "prerequisitesFeats": ["Snatch Arrows"],
    "benefit": "When you use Snatch Arrows to catch a thrown weapon that can also be used as a melee weapon, you can make a melee attack with it as an immediate action against a foe within the weapon's melee reach. You can expend one use of mythic power to make this attack without spending an immediate action."
  },
  {
    "name": "Sociable",
    "type": "Mythic",
    "description": "Your easy nature flows from you without effort, putting others at ease.",
    "prerequisites": ["SociableAPG"],
    "prerequisitesFeats": ["SociableAPG"],
    "benefit": "You grant and benefit from the +2 bonus on Diplomacy checks from Sociable constantly without having to spend a move action. You can spend a move action to increase the bonus to +4 for a number of rounds equal to your tier."
  },
  {
    "name": "Spell Focus",
    "type": "Mythic",
    "description": "Your magical specialties are particularly effective.",
    "prerequisites": ["Spell Focus"],
    "prerequisitesFeats": ["Spell Focus"],
    "benefit": "Choose a school of magic you already have Spell Focus in. The bonus to save DCs provided by Spell Focus and Greater Spell Focus for that school increases by 1. You can expend one use of mythic power as part of casting a spell from your chosen school to force any of the spell's targets to roll their saving throws twice, taking the lower result."
  },
  {
    "name": "Spell Mastery",
    "type": "Mythic",
    "description": "You're so familiar with certain spells you can prepare them with the greatest of ease.",
    "prerequisites": ["Spell Mastery"],
    "prerequisitesFeats": ["Spell Mastery"],
    "benefit": "You can prepare spells you have selected with Spell Mastery as a full-round action. You must spend the appropriate amount of time preparing other spells you have not mastered. As a full-round action, you can expend one use of mythic power to prepare all your spells that you have selected with Spell Mastery."
  },
  {
    "name": "Spell Penetration",
    "type": "Mythic",
    "description": "Your mythic power breaches your enemies' defenses.",
    "prerequisites": ["Spell Penetration"],
    "prerequisitesFeats": ["Spell Penetration"],
    "benefit": "Add half your tier to caster level checks to overcome spell resistance. If you have Greater Spell Penetration, add your full tier instead."
  },
  {
    "name": "Spellbreaker",
    "type": "Mythic",
    "description": "You're a spellcaster's worst nightmare.",
    "prerequisites": ["Spellbreaker"],
    "prerequisitesFeats": ["Spellbreaker"],
    "benefit": "Any non-mythic creature you threaten provokes an attack of opportunity from you whenever it uses a spell or spell-like ability, even when casting defensively or casting a quickened spell. If a non-mythic creature within 30 feet of you uses a spell or spell-like ability, you can expend one use of mythic power to make a ranged attack against that creature as an attack of opportunity (even if the creature wouldn't normally provoke attacks of opportunity). You must have a ranged weapon in hand or have a free hand and the non-mythic Quick Draw feat to use this ability. You can use this ability against a mythic creature by expending two uses of mythic power."
  },
  {
    "name": "Spirited Charge",
    "type": "Mythic",
    "description": "Your mounted charge knocks the wind and wits from those foolish enough to stand against you.",
    "prerequisites": ["Spirited Charge"],
    "prerequisitesFeats": ["Spirited Charge"],
    "benefit": "When you hit an opponent with a mounted charge, that opponent must succeed at a Fortitude saving throw (DC 10 + 1/2 your character level + your Str modifier) or be staggered for a number of rounds equal to your tier. If you use a lance with this attack, increase the saving throw DC by 2. As a free action before you make the attack, you can expend one use of mythic power to daze your opponent on a failed saving throw instead of staggering it."
  },
  {
    "name": "Spontaneous Metafocus",
    "type": "Mythic",
    "description": "You apply metamagic to your spells with greater ease than do other spontaneous casters.",
    "prerequisites": ["Spontaneous MetafocusUM"],
    "prerequisitesFeats": ["Spontaneous MetafocusUM"],
    "benefit": "You can change which spell your Spontaneous Metafocus feat applies to each morning when you restore your expended spell slots. The spell it applies to can be of any level, but it must be a legal selection for the Spontaneous Metafocus feat."
  },
  {
    "name": "Spring Attack",
    "type": "Mythic",
    "description": "You move across the battlefield in a blur of whirling blades.",
    "prerequisites": ["Spring Attack","base attack bonus +6"],
    "prerequisitesFeats": ["Spring Attack","base attack bonus +6"],
    "benefit": "When you use Spring Attack, you don't need to move at least 10 feet before making the first attack. If you expend one use of mythic power when you start a Spring Attack, the movement you make during the Spring Attack doesn't provoke attacks of opportunity."
  },
  {
    "name": "Stealthy",
    "type": "Mythic",
    "description": "Your grace and fluidity are beyond compare.",
    "prerequisites": ["Stealthy"],
    "prerequisitesFeats": ["Stealthy"],
    "benefit": "The bonus on Escape Artist and Stealth skill checks from Stealthy increases by 2. In addition, you can expend one use of mythic power to treat an Escape Artist or Stealth check as if you had rolled a natural 20. You must decide to use this ability before making the roll."
  },
  {
    "name": "Strike Back",
    "type": "Mythic",
    "description": "Your precise counterattacks degrade your foes' advantages in combat.",
    "prerequisites": ["Strike Back"],
    "prerequisitesFeats": ["Strike Back"],
    "benefit": "When you make a melee attack as a readied action against a foe outside your melee reach, you can take a 5-foot step toward that foe. If you expend one use of mythic power, you can move your speed toward the foe instead. Neither of these counts toward the movement made during your turn."
  },
  {
    "name": "Strong Comeback",
    "type": "Mythic",
    "description": "You never make the same mistake twice.",
    "prerequisites": ["Strong ComebackUC"],
    "prerequisitesFeats": ["Strong ComebackUC"],
    "benefit": "Whenever you're allowed to reroll an ability check, a skill check, or a saving throw, roll two dice and take the higher result, before adding the bonus from Strong Comeback."
  },
  {
    "name": "Stunning Fist",
    "type": "Mythic",
    "description": "With greater potency and frequency, your fists stun those who stand against you.",
    "prerequisites": ["Stunning Fist"],
    "prerequisitesFeats": ["Stunning Fist"],
    "benefit": "The DC of your Stunning Fist increases by half your tier, and you can use Stunning Fist multiple times during the same round. As a free action, you can expend one use of your mythic power to use Stunning Fist without spending one of your daily uses of the feat."
  },
  {
    "name": "Throw Anything",
    "type": "Mythic",
    "description": "You're so skilled at throwing weapons that it hardly matters what you throw.",
    "prerequisites": ["Throw Anything"],
    "prerequisitesFeats": ["Throw Anything"],
    "benefit": "You gain a +2 bonus on attack rolls and damage rolls made using an improvised thrown weapon or splash weapon. This bonus stacks with the bonus from the non-mythic Throw Anything feat. If you miss with a thrown splash weapon, it always lands adjacent to its target regardless of how many range increments it was thrown."
  },
  {
    "name": "Titan Strike",
    "type": "Mythic",
    "description": "Your fists can fell titanic foes.",
    "prerequisites": ["Improved Unarmed Strike (mythic)"],
    "prerequisitesFeats": ["Improved Unarmed Strike (mythic)"],
    "benefit": "Your unarmed strike deals damage as if you were one size category larger. You also gain a +1 bonus for each size category that your target is larger than you on the following: bull rush, drag, grapple, overrun, sunder, and trip combat maneuver checks and the DC of your Stunning Fist."
  },
  {
    "name": "Toughness",
    "type": "Mythic",
    "description": "You have legendary resilience and durability.",
    "prerequisites": ["Toughness"],
    "prerequisitesFeats": ["Toughness"],
    "benefit": "Toughness provides you twice as many hit points. In addition, when you're below 0 hit points, you gain DR 10/epic. This DR stacks with any other DR/epic you might possess."
  },
  {
    "name": "Trample",
    "type": "Mythic",
    "description": "Your rearing mount can stomp foes into the ground, barely breaking stride.",
    "prerequisites": ["Trample"],
    "prerequisitesFeats": ["Trample"],
    "benefit": "Your mount can make two hoof attacks against an opponent you knock down with an overrun, instead of one. You can expend one use of mythic power when you score a critical hit with one or more of those hoof attacks. When you do, the critical is automatically confirmed. If both scored critical hits, expending one use of mythic power automatically confirms both."
  },
  {
    "name": "Tripping Staff",
    "type": "Mythic",
    "description": "Your staff is valuable for attack and defensive balance.",
    "prerequisites": ["Tripping Staff UM"],
    "prerequisitesFeats": ["Tripping Staff UM"],
    "benefit": "You add half your tier to CMD against trip maneuvers and on combat maneuver checks to trip with a quarterstaff. When you're wielding a quarterstaff and an opponent you threaten attempts to trip you and fails, it provokes an attack of opportunity from you. You must use your staff for this attack of opportunity."
  },
  {
    "name": "Two-Fisted Drinker",
    "type": "Mythic",
    "description": "You can pound down drinks with amazing verve.",
    "prerequisites": ["Quick Draw"],
    "prerequisitesFeats": ["Quick Draw"],
    "benefit": "You can draw two potions or other beverages-mundane or magical-from a pouch, bandolier, or similar holder (but not from a backpack) as a move action. As a standard action, you can drink two potions or other beverages. You must have two free hands to use this feat."
  },
  {
    "name": "Two-Weapon Defense",
    "type": "Mythic",
    "description": "Your graceful flow between attack and defense makes you difficult to hit.",
    "prerequisites": ["Two-Weapon Defense"],
    "prerequisitesFeats": ["Two-Weapon Defense"],
    "benefit": "When using Two-Weapon Defense, you apply the highest enhancement bonus from your two weapons to the shield bonus granted by that feat."
  },
  {
    "name": "Two-Weapon Fighting",
    "type": "Mythic",
    "description": "With deft strikes, you gain an advantage over your foes beyond mere damage.",
    "prerequisites": ["Two-Weapon Fighting"],
    "prerequisitesFeats": ["Two-Weapon Fighting"],
    "benefit": "As an immediate action, you can expend one use of mythic power to negate the penalties on attack rolls for two-weapon fighting for a number of rounds equal to your tier."
  },
  {
    "name": "Two-Weapon Rend",
    "type": "Mythic",
    "description": "Your synchronized dual attacks are even more dangerous, and can leave lasting wounds.",
    "prerequisites": ["Two-Weapon Rend"],
    "prerequisitesFeats": ["Two-Weapon Rend"],
    "benefit": "The damage of your Two-Weapon Rend increases to 2d8 points plus twice your Strength modifier. You can expend one use of mythic power to gain a bonus on this damage equal to twice your tier."
  },
  {
    "name": "Undead Master",
    "type": "Mythic",
    "description": "Through your fearsome mythic nature, you have matchless power over the undead.",
    "prerequisites": ["Undead MasterUM"],
    "prerequisitesFeats": ["Undead MasterUM"],
    "benefit": "When you cast animate dead or use the Command Undead feat, add your tier to your caster level when determining the number of Hit Dice of undead you animate. This stacks with the increased caster level of Undead Master. When you cast command undead, your duration is tripled rather than doubled."
  },
  {
    "name": "Unseat",
    "type": "Mythic",
    "description": "You knock your opponents down from their mounts with frightening concussive force.",
    "prerequisites": ["Unseat"],
    "prerequisitesFeats": ["Unseat"],
    "benefit": "When you successfully bull rush an opponent off his mount with Unseat, your opponent takes 1d6 points of falling damage per 2 tiers you possess. Items or abilities that reduce falling damage, such as a successful Acrobatics check, can reduce the damage dealt by the impact."
  },
  {
    "name": "Valiant Vault",
    "type": "Mythic",
    "description": "Your mount can make heroic leaps.",
    "prerequisites": ["Mounted Combat","Ride-By Attack","Ride 5 ranks"],
    "prerequisitesFeats": ["Mounted Combat","Ride-By Attack","Ride 5 ranks"],
    "benefit": "Your mount is always considered to have a running start when using Acrobatics to jump. You can expend one use of mythic power to grant your mount a +10 bonus on an Acrobatics check, or a +20 bonus if the check is made to jump. When making a mounted charge, you can guide your mount to leap over a foe between your starting position and the target of your charge. You make a Ride check or your mount makes an Acrobatics check (whichever is lower) during the charge, using the rules for the leap task under the Ride skill. If the height you clear with that check exceeds the creature's height, you jump over it and continue your charge on the opposite side. This movement provokes attacks of opportunity. Alternatively, you can vault over your target while making a Ride-By Attack, allowing you to move over or through its space and continue moving on the opposite side of it. If your jump exceeds the target's height, you gain a +1 bonus on the attack roll for higher ground, and if any of your allies threatens the target, you treat the target as flanked for purposes of your Ride-By Attack."
  },
  {
    "name": "Vital Strike",
    "type": "Mythic",
    "description": "You can strike your foes with incredible force.",
    "prerequisites": ["Vital Strike"],
    "prerequisitesFeats": ["Vital Strike"],
    "benefit": "Whenever you use Vital Strike, Improved Vital Strike, or Greater Vital Strike, multiply the Strength bonus, magic bonus, and other bonuses that would normally be multiplied on a critical hit by the number of weapon damage dice you roll for that feat. Extra damage from sources that wouldn't normally be multiplied on a critical hit isn't multiplied by this feat."
  },
  {
    "name": "Voice Of The Sibyl",
    "type": "Mythic",
    "description": "You overpower weaker and more vulnerable minds with your voice alone.",
    "prerequisites": ["Voice of the SibylUM"],
    "prerequisitesFeats": ["Voice of the SibylUM"],
    "benefit": "You gain a +1 bonus on all Bluff, Diplomacy, and Perform (oratory) skill checks for every 3 tiers you possess. This bonus stacks with the bonus from Voice of the Sibyl. If you have 10 or more ranks in at least two of these skills, gain a +2 bonus to the DC of any language-dependent spell you cast."
  },
  {
    "name": "Warrior Priest",
    "type": "Mythic",
    "description": "Your faith speeds you in battle and further strengthens your mind and confidence.",
    "prerequisites": ["Warrior PriestUM"],
    "prerequisitesFeats": ["Warrior PriestUM"],
    "benefit": "You gain a bonus equal to half your tier both on initiative checks and on concentration checks to cast a spell or use a spell-like ability when casting defensively or while grappled. These bonuses stack with the bonuses from Warrior Priest."
  },
  {
    "name": "Weapon Finesse",
    "type": "Mythic",
    "description": "You're an expert with weapons that rely on your agility.",
    "prerequisites": ["Weapon Finesse"],
    "prerequisitesFeats": ["Weapon Finesse"],
    "benefit": "When using Weapon Finesse, you may also use your Dexterity modifier instead of your Strength modifier on your damage rolls. If you carry a shield, its armor check penalty doesn't apply to either the attack rolls or the damage rolls."
  },
  {
    "name": "Weapon Focus",
    "type": "Mythic",
    "description": "You're a master of one type of weapon.",
    "prerequisites": ["Weapon Focus"],
    "prerequisitesFeats": ["Weapon Focus"],
    "benefit": "Double the bonuses on your attack rolls from Weapon Focus and Greater Weapon Focus. As a swift action, you can expend one use of mythic power to gain a bonus on attack rolls with your selected weapon equal to half your tier until the end of your turn."
  },
  {
    "name": "Weapon Specialization",
    "type": "Mythic",
    "description": "The damage you deal with your chosen weapon is truly awesome to behold.",
    "prerequisites": ["Weapon Specialization"],
    "prerequisitesFeats": ["Weapon Specialization"],
    "benefit": "When using your chosen weapon, you gain a bonus equal to half your tier on damage rolls. This stacks with the bonus from Weapon Specialization and Greater Weapon Specialization."
  },
  {
    "name": "Witch Knife",
    "type": "Mythic",
    "description": "Your witch knife is as much an extension of your body as it is an extension of your power.",
    "prerequisites": ["Witch KnifeUM"],
    "prerequisitesFeats": ["Witch KnifeUM"],
    "benefit": "You can use your witch knife as an additional focus component for all your witch spells, not just your patron spells, adding 1 to their DC. This bonus stacks with the bonus to patron spells granted by Witch Knife, granting your patron spells a total +2 bonus to their DC. Additionally, the hand holding the witch knife is still considered free for the purpose of casting spells and delivering touch attacks."
  },
  {
    "name": "Demonologist",
    "type": "General",
    "description": "You have immersed yourself deeply in studies of the nature of the Abyss and its inhabitants.",
    "prerequisites": ["Knowledge (planes) 3 ranks"],
    "prerequisitesFeats": ["Knowledge (planes) 3 ranks"],
    "benefit": "You gain a +2 bonus on all Knowledge checks related to the Abyss or to demons, and you may take 10 on Knowledge checks made to identify demons."
  },
  {
    "name": "Demon Grafter",
    "type": "Item Creation",
    "description": "Your studies into demonic anatomy and physiology allow you to graft their immortal tissues onto mortal flesh.",
    "prerequisites": ["Demonologist","Heal 5 ranks","Knowledge (planes) 5 ranks","Spellcraft 5 ranks"],
    "prerequisitesFeats": ["Demonologist","Heal 5 ranks","Knowledge (planes) 5 ranks","Spellcraft 5 ranks"],
    "benefit": "You gain a +2 bonus on Heal checks regarding evil outsiders or creatures that already have a demonic graft. In addition, you can create demonic implants (see page 12) as if you had the Craft Wondrous Item feat, using your ranks in Heal as your caster level. The DC to create the item still increases for any necessary spell requirements (see the magic item creation rules in Chapter 15 of the Pathfinder RPG Core Rulebook)."
  },
  {
    "name": "Demonic Obedience",
    "type": "General",
    "description": "You physically defile yourself, others, or holy objects in order to prove your blasphemous devotion to a demon lord and gain special boons.",
    "prerequisites": ["3 ranks in Knowledge (planes)","must worship a demon lord"],
    "prerequisitesFeats": ["3 ranks in Knowledge (planes)","must worship a demon lord"],
    "benefit": "Each demon lord requires a different obedience, but all obediences take only an hour to perform. Once the obedience has been performed, you gain the benefit of a resistance to some element or attack associated with your demon lord, as indicated in the \"Obedience\" entry for the demon lord. If you have at least 12 Hit Dice, you also gain the first boon granted by your demon lord upon undertaking your obedience. If you have at least 16 Hit Dice, you also gain the demon lord's second boon. If you have 20 Hit Dice or more, you also gain the demon lord's third and final boon. Unless a specific duration or number of uses per day is listed, a boon's effects are constant. Demoniacs (see page 46) gain access to these boons at lower levels as a benefit of their prestige class. If you ever fail to perform a daily obedience, you lose all access to resistances and boons granted by this feat until you next perform the obedience."
  },
  {
    "name": "Extra Feature",
    "type": "General",
    "description": "You are an exceptional shapechanger.",
    "prerequisites": ["Con 13","skinwalker"],
    "prerequisitesFeats": ["Con 13","skinwalker"],
    "benefit": "When you change shape to your bestial form, you may choose one additional feature from those listed in your shapechange ability and gain that benefit while in bestial form."
  },
  {
    "name": "Fast Change",
    "type": "General",
    "description": "You can change forms faster than most skinwalkers.",
    "prerequisites": ["Dex 13","base attack bonus +6","skinwalker"],
    "prerequisitesFeats": ["Dex 13","base attack bonus +6","skinwalker"],
    "benefit": "You can assume your bestial form as a move action instead of a standard action."
  },
  {
    "name": "Bat Shape",
    "type": "General",
    "description": "Your powers of transformation have been honed to the point where you can wholly become a bat.",
    "prerequisites": ["Cha 13","werebat-kin"],
    "prerequisitesFeats": ["Cha 13","werebat-kin"],
    "benefit": "You can take the form of a bat whose appearance is static and cannot be changed each time you assume this form. You gain a +10 racial bonus on Disguise checks to appear as a bat. Changing from werebat-kin to bat shape is a standard action. This ability otherwise functions as beast shape II, and your ability scores change accordingly. If you wear a bat pelt (see page 31), you may choose to adopt a form resembling the bat whose skin you wear instead of your normal bat form."
  },
  {
    "name": "Bloodmarked Flight",
    "type": "General",
    "description": "Your attunement to your werebat ancestry has allowed you to master a crude form of flight.",
    "prerequisites": ["Base attack bonus +5","werebat-kin"],
    "prerequisitesFeats": ["Base attack bonus +5","werebat-kin"],
    "benefit": "As an additional bestial feature, you can use your change shape ability to gain a fly speed of 30 feet with poor maneuverability if carrying a light load and wearing no armor or light armor, or a fly speed of 20 feet with clumsy maneuverability if carrying a medium or heavy load or wearing medium or heavy armor."
  },
  {
    "name": "Dire Bat Shape",
    "type": "General",
    "description": "You can become a dire bat.",
    "prerequisites": ["Cha 13","Bat Shape","base attack bonus +3","werebat-kin"],
    "prerequisitesFeats": ["Cha 13","Bat Shape","base attack bonus +3","werebat-kin"],
    "benefit": "When you use Bat Shape to become a bat, you can choose to become a bat or a dire bat."
  },
  {
    "name": "Bear Hug",
    "type": "Combat",
    "description": "You can crush your foes with your powerful arms.",
    "prerequisites": ["Str 17","Beartrap Bite","Weapon Focus (bite)","base attack bonus +8"],
    "prerequisitesFeats": ["Str 17","Beartrap Bite","Weapon Focus (bite)","base attack bonus +8"],
    "benefit": "You can attempt to initiate a grapple against a foe trapped by your Beartrap Bite feat without provoking attacks of opportunity. You gain a +2 bonus on damage rolls against foes you are grappling."
  },
  {
    "name": "Beartrap Bite",
    "type": "Combat",
    "description": "You can hold your foes even if you do not manage to grapple them.",
    "prerequisites": ["Weapon Focus (bite)","base attack bonus +6"],
    "prerequisitesFeats": ["Weapon Focus (bite)","base attack bonus +6"],
    "benefit": "Whenever you confirm a critical hit against a foe with your bite attack, if your confirmation roll matches or exceeds your foe's CMD, you can clamp down on your foe to prevent it from moving away as a free action. The foe cannot move outside the area threatened by your bite attack unless it breaks free of your bite. It can attempt to free itself with a combat maneuver check or Escape Artist check as if you were grappling it, but neither of you gains the grappled condition. You cannot use your bite attack while you maintain your grip on your foe, but you can release the bite as a swift action to end the effect."
  },
  {
    "name": "Ferocious Loyalty",
    "type": "General",
    "description": "You have a powerful sense of responsibility for your allies.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "You gain a +1 morale bonus on attack rolls against any foe that currently threatens an ally who also has this feat. Whenever an ally with this feat is rendered helpless or killed within 30 feet of you, you gain a +2 morale bonus on attack rolls for 1 minute or until the foe responsible is rendered helpless or killed, whichever comes first."
  },
  {
    "name": "Swarm Scatter",
    "type": "General",
    "description": "You have studied the habits of swarming rats for defensive tactics.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "For each ally who has this feat and is adjacent to you, you gain a +1 circumstance bonus to AC. As long as you have this bonus, you are immune to the swarm attack and distraction ability of rat swarms."
  },
  {
    "name": "Swarm Strike",
    "type": "General",
    "description": "You and your allies have trained to overwhelm foes like a swarm of rodents.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever a foe provokes an attack of opportunity from you, you gain a +1 bonus on your attack roll, plus an additional +1 bonus for each ally who also has this feat and currently threatens that foe."
  },
  {
    "name": "Motivating Display",
    "type": "Combat",
    "description": "You can empower your allies through their fear of you.",
    "prerequisites": ["Cha 13","Dazzling Display","Weapon Focus"],
    "prerequisitesFeats": ["Cha 13","Dazzling Display","Weapon Focus"],
    "benefit": "Whenever you use Dazzling Display to demoralize foes, you can motivate your allies to better serve you. In addition to possibly demoralizing foes within 30 feet, your Intimidate check while using Dazzling Display also applies to allies within 30 feet who can see you. The DC for this effect is the same as it would be to demoralize your allies. Each ally so affected gains a +1 morale bonus on attack rolls and skill checks for the duration that it would normally be shaken."
  },
  {
    "name": "Surprising Combatant",
    "type": "Combat",
    "description": "You can briefly trick your foes into discounting you as a combatant.",
    "prerequisites": ["Improved Initiative","Bluff 3 ranks"],
    "prerequisitesFeats": ["Improved Initiative","Bluff 3 ranks"],
    "benefit": "At the beginning of combat, after initiative is rolled but before the first round of combat begins, you can attempt a Bluff check as a free action. Each opponent who is aware of you must succeed at a Sense Motive check (DC equal to the result of your Bluff check). Failure means that an opponent is treated as if it were not aware of you when determining whether it is aware combat has begun. If none of your opponents are aware of you, you may act during the surprise round. If an opponent is effectively unaware of any foes, it cannot act during the surprise round."
  },
  {
    "name": "Violent Display",
    "type": "Combat",
    "description": "You never miss an opportunity to cow foes.",
    "prerequisites": ["Dazzling Display","Weapon Focus","base attack bonus +6"],
    "prerequisitesFeats": ["Dazzling Display","Weapon Focus","base attack bonus +6"],
    "benefit": "When you land a successful sneak attack or confirm a critical hit against a creature with a weapon with which you have Weapon Focus, you can use Dazzling Display as an immediate action."
  },
  {
    "name": "Wolf Savage",
    "type": "Combat",
    "description": "You can savage vulnerable foes so badly they become supernaturally disfigured.",
    "prerequisites": ["Wis 17","Improved Unarmed Strike","Wolf Style","Wolf Trip","Knowledge (nature) 9 ranks"],
    "prerequisitesFeats": ["Wis 17","Improved Unarmed Strike","Wolf Style","Wolf Trip","Knowledge (nature) 9 ranks"],
    "benefit": "Whenever you deal a prone opponent at least 10 points of damage with a natural weapon or unarmed strike, you can savage your foe as a swift action. Your victim becomes disf igured unless it succeeds at a Fortitude save (DC = 10 + 1/2 your character level + your Wisdom modif ier). The effects of this disf igurement are identical to those of a bestow curse spell (caster level equal to your character level)."
  },
  {
    "name": "Wolf Style",
    "type": "Combat",
    "description": "You can channel the curse in your blood to hamper foes that turn their backs on you.",
    "prerequisites": ["Wis 13","Improved Unarmed Strike","Knowledge (nature) 3 ranks"],
    "prerequisitesFeats": ["Wis 13","Improved Unarmed Strike","Knowledge (nature) 3 ranks"],
    "benefit": "While using this style, whenever you deal at least 10 points of damage to a foe with an attack of opportunity, that foe's base speed decreases by 5 feet for 1 round. The foe's base speed decreases by an additional 5 feet for every 5 points of damage your attack deals beyond 10. If this penalty meets or exceeds the remaining number of feet your foe can move during its turn, you may attempt a combat maneuver check to trip your foe as an free action."
  },
  {
    "name": "Wolf Trip",
    "type": "Combat",
    "description": "You have studied wolves' skill at bringing down prey.",
    "prerequisites": ["Wis 15","Improved Unarmed Strike","Wolf Style","Knowledge (nature) 6 ranks"],
    "prerequisitesFeats": ["Wis 15","Improved Unarmed Strike","Wolf Style","Knowledge (nature) 6 ranks"],
    "benefit": "You gain a +2 bonus on all combat maneuver checks to trip as part of an attack of opportunity. While using Wolf Style, whenever you successfully trip a creature, as a free action you may choose an available square adjacent to you for the tripped creature to land prone in."
  },
  {
    "name": "Bloatmage Initiate",
    "type": "General",
    "description": "Your introduction to the ways of the bloatmage allows you to use elaborate rituals and gruesome rites to increase the amount of blood and lymph in your body, expanding your reserves of magical energy.",
    "prerequisites": ["Spell Focus (any school)"],
    "prerequisitesFeats": ["Spell Focus (any school)"],
    "benefit": "You learn the basics of the ancient art of hemotheurgy. Pick one school of magic in which you possess the Spell Focus feat-you cast spells from this school of magic at +1 caster level. This bonus stacks with the bonus from Spell Focus. Unfortunately, the bloating side effects increase your girth to such a point that you are constantly under the effects of a medium load-your maximum bonus to AC from Dexterity is +3, you gain an armor check penalty of -3, and your speed decreases as appropriate (generally from 30 feet to 20 feet for a Medium creature)."
  },
  {
    "name": "Multiweapon Fighting",
    "type": "Combat",
    "description": "This multi-armed creature is skilled at making attacks with multiple weapons.",
    "prerequisites": ["Dex 13","three or more hands"],
    "prerequisitesFeats": ["Dex 13","three or more hands"],
    "benefit": "Penalties for fighting with multiple weapons are reduced by -2 with the primary hand and by -6 with off hands."
  },
  {
    "name": "Stable Spell",
    "type": "Metamagic",
    "description": "You can cast spells in areas of primal magic with less chance of triggering a primal magic event.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "In areas of primal magic, the chance of a stable spell triggering a primal magic event is reduced by 25%. In cases where a primal magic event would trigger despite the reduced chances, the caster of a stable spell receives a +2 bonus on the concentration check to avoid the primal magic event. A stable spell uses up a spell slot 1 level higher than the spell's actual level."
  },
  {
    "name": "Shadow Gambit",
    "type": "General",
    "description": "You can tap into the Plane of Shadow to momentarily lend reality to one of your illusion (figment) spells.",
    "prerequisites": ["Spell Focus (illusion)","caster level 5th"],
    "prerequisitesFeats": ["Spell Focus (illusion)","caster level 5th"],
    "benefit": "As a standard action, you can draw upon energies from the Plane of Shadow to cause an ongoing figment spell you cast to damage a foe as if the illusion were real. The illusion must be one you retain ongoing control of, such as minor image, and the target must be both visible to you and within or adjacent to the area of your illusion. Using this feat immediately ends the figment's duration. You must either make a melee touch attack or give the target a saving throw (Fortitude or Reflex) to resist the damage (see below). If you choose a melee touch attack, you use your own melee touch attack bonus, and if you miss, the spell deals no damage. If you choose to allow the target a saving throw, a successful save means it takes half damage. The shadowy attack deals 1d6 points of damage per spell level. If the target disbelieves or sees through the illusion, reduce the damage by half. The shadowy attack can deal acid, bludgeoning, cold, electricity, fire, piercing, or slashing damage, but the damage must be appropriate to the illusion. For example, an illusory wall that collapses deals bludgeoning damage with a Fortitude save for half, an illusory swordsman strikes with a melee touch attack deals slashing damage, and an illusory wall of fire deals fire damage with a Reflex save for half."
  },
  {
    "name": "Shadow Grasp",
    "type": "Metamagic",
    "description": "Your darkness spells have substance and bind your foes.",
    "prerequisites": ["Tenebrous Spell","Umbral Spell"],
    "prerequisitesFeats": ["Tenebrous Spell","Umbral Spell"],
    "benefit": "When you cast a spell with the darkness descriptor that affects an area, creatures in the area are entangled. If the spell allows a saving throw, a successful save negates the entangle effect. If the spell does not normally allow a save, a creature can make a Reflex save (DC = the spell's DC if it had a saving throw) to negate the effect. If the spell allows spell resistance, failing to overcome a creature's spell resistance means it is not entangled. An entangled creature remains so as long as it is in the area of the spell and for 1 round after it leaves. A creature that leaves and reenters the area must make a new saving throw to avoid becoming entangled. Creatures that succeed at a save to resist being entangled do not have to make additional saves if they stay within the darkened area. You are never impeded by the effects of your spells modified by this feat. A Shadow Grasp spell uses up a slot one level higher than the spell's actual level."
  },
  {
    "name": "Tenebrous Spell",
    "type": "Metamagic",
    "description": "You blend shadow into your spells, increasing their efficacy at the price of susceptibility to light.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you cast a tenebrous spell in darkness or dim light, the spell's effective caster level and any associated save DCs are increased by 1. Any attempts at dispelling a tenebrous spell in darkness or dim light take a -2 penalty on the dispel check. Casting a tenebrous spell in bright light is difficult, and requires a concentration check (DC 15 + twice the tenebrous spell's effective spell level). Attempts to dispel a tenebrous spell in bright light gain a +4 bonus on the dispel check. You cannot use this feat on spells with the light descriptor. A tenebrous spell uses up a spell slot one level higher than the spell's actual level, except in the case of spells with the darkness or shadow descriptor or of the illusion (shadow) subschool; this feat does not change the effective level of those spells (but still counts as using a metamagic feat for all other purposes)."
  },
  {
    "name": "Umbral Spell",
    "type": "Metamagic",
    "description": "Targets of your darkness spells radiate darkness.",
    "prerequisites": ["Tenebrous Spell"],
    "prerequisitesFeats": ["Tenebrous Spell"],
    "benefit": "An umbral spell gains the darkness descriptor. As long as the spell is in effect, the creature or object affected radiates darkness in a 10-foot radius, reducing illumination similar to the effects of the darkness spell. Nonmagical sources of light, such as torches or lanterns, do not increase the light level in this area. Magical light sources only increase the light level in an area affected by an umbral spell if they are of a higher level than the umbral spell's unmodified spell level. This effect does not stack with itself or with any other effect that creates darkness. An umbral spell uses up a spell slot two levels higher than the spell's actual level. You cannot use this feat on a spell with an instantaneous duration or a spell that does not target a creature or object."
  },
  {
    "name": "Inscribe Magical Tattoo",
    "type": "Item Creation",
    "description": "You can craft magical tattoos.",
    "prerequisites": ["Craft (calligraphy","paintings","or tattoos) 5 ranks","caster level 5th"],
    "prerequisitesFeats": ["Craft (calligraphy","paintings","or tattoos) 5 ranks","caster level 5th"],
    "benefit": "You can create magical tattoos, magic items inked directly into the flesh of a willing or helpless creature. Both you and the recipient of the tattoo (if the recipient is not yourself) must be present during the entire tattooing process. Magic tattoos must be placed on a part of the body normally able to hold a magic item slot, but they do not count against or interfere with magic items worn on those slots. A single slot can only hold one magical tattoo (nonmagical tattoos and tattoos acquired from the tattooed sorcerer archetype do not count against this limit). Tattoos may be inscribed on the following slots: belt, body, chest, feet, hands, head, neck, shoulder, ring (up to two), or wrist. They cannot be inscribed on armor, eye, headband, or shield slots. Magical tattoos are difficult to destroy, though they count as magic items for the purposes of dispel magic. The spell erase can permanently destroy a magical tattoo, but the bearer of the tattoo can resist the spell with a Will save, in addition to the caster needing to make a successful caster level check to erase the tattoo. Physically removing a magical tattoo with a sharp instrument or defacing it with fire or acid can destroy it as well. Doing so is a full-round action that not only requires the target to be willing or helpless, but also provokes attacks of opportunity. At least 2 points of damage per caster level of the tattoo must be dealt to destroy a magical tattoo in this manner. Magical tattoos follow the rules for magic item creation as though they were wondrous items, except that they can use the Craft (calligraphy, paintings, tattoos) skill. New magical tattoos can be researched and designed using the guidelines for pricing new magic items. Magical tattoos are treated as slotless magical items for pricing purposes."
  },
  {
    "name": "Extend The Bulwark",
    "type": "Combat",
    "description": "You can bolster a trained ally's defenses by interposing your own armored body.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "If you are wearing medium or heavy armor and are adjacent to an ally who also has this feat, as a free action, you may give your ally a circumstance bonus to her AC equal to half the armor bonus provided by your armor. This bonus lasts for 1 round. During this round, you gain no bonus to your AC from your armor."
  },
  {
    "name": "Quillbreaker Defense",
    "type": "Combat",
    "description": "You know how to put armor spikes to defensive use by thrusting them into the path of an oncoming attack just in time.",
    "prerequisites": ["Proficiency with armor spikes"],
    "prerequisitesFeats": ["Proficiency with armor spikes"],
    "benefit": "If you are wearing armor spikes, as an immediate action when you take damage from a nonmagical attack, you can give your armor spikes the broken condition to reduce the amount of damage you take by 5. If your armor spikes are already broken, they are destroyed when you take the damage. If you are wearing masterwork armor spikes, you instead reduce the damage taken by 10."
  },
  {
    "name": "Shield Snag",
    "type": "Combat",
    "description": "You know how to navigate your shield around weapons and can use it to keep your balance.",
    "prerequisites": ["Improved Shield Bash","Shield Proficiency","Two-Weapon Fighting","base attack bonus +6"],
    "prerequisitesFeats": ["Improved Shield Bash","Shield Proficiency","Two-Weapon Fighting","base attack bonus +6"],
    "benefit": "Any opponents hit by your shield bash are also targeted by a free disarm attempt, substituting your attack roll for the combat maneuver check. This disarm attempt does not provoke an attack of opportunity. You cannot use this ability during the same round as a bull rush attempt made with Shield Slam or with any other abilities that affect how your shield bash works. When using a shield, you gain a +4 bonus on Strength checks to avoid being blown away by a strong wind and on Climb checks to catch yourself on a wall or slope when falling."
  },
  {
    "name": "Equipment Trick",
    "type": "Combat",
    "description": "Choose one piece of equipment, such as boots, a cloak, rope, a shield, or a heavy blade scabbard. You understand how to use that item in combat.",
    "prerequisites": ["Base attack bonus +1"],
    "prerequisitesFeats": ["Base attack bonus +1"],
    "benefit": "You may use any equipment tricks relating to the item if you meet the appropriate trick requirements. If the item would normally be considered an improvised weapon, you may treat it as a normal weapon or an improvised weapon, whichever is more beneficial for you."
  },
  {
    "name": "Blowout Shot Deed",
    "type": "General",
    "description": "By using a specially prepared mix of reagents, you can create concussive blasts with your firearm.",
    "prerequisites": ["Craft (alchemy) 3 ranks","grit class feature or Amateur GunslingerUC feat"],
    "prerequisitesFeats": ["Craft (alchemy) 3 ranks","grit class feature or Amateur GunslingerUC feat"],
    "benefit": "Spend 1 grit point to retrieve a specially prepared dose of black powder from your person. The next time you use the firearm you've loaded with this special black powder, the concussive blast knocks you back 5 feet from the direction at which you were aiming. If there is no available space behind you, you brace yourself against the obstacle and do not move from your square. Any creatures within the first range increment of the firearm struck by this attack take damage as normal and must succeed at a Ref lex save (DC = 10 + 1/2 your gunslinger level + your Int modifier) or be pushed back 10 feet. Creatures within two range increments are pushed back 5 feet, while creatures farther away than this are unaffected by the concussive blast."
  },
  {
    "name": "Whip-Shot Deed",
    "type": "General",
    "description": "You can fire your weapon and strike with it at the same time.",
    "prerequisites": ["Grit class feature or Amateur GunslingerUC feat","pistol-whip deed"],
    "prerequisitesFeats": ["Grit class feature or Amateur GunslingerUC feat","pistol-whip deed"],
    "benefit": "Whenever you use your pistol-whip deed, you can fire a single bullet from your firearm at the same time that you strike a foe with the butt of your firearm. You must spend a total of 2 grit points to use the pistol-whip deed in this way, and must still succeed at a ranged touch attack against the target of your pistolwhip deed to hit. You cannot use the scatter weapon quality of a firearm when you use this feat."
  },
  {
    "name": "False Casting",
    "type": "General",
    "description": "When using a magic item, you can trick onlookers into thinking you used spellcasting instead.",
    "prerequisites": ["Magical Aptitude","Bluff 1 rank","Sleight of Hand 1 rank"],
    "prerequisitesFeats": ["Magical Aptitude","Bluff 1 rank","Sleight of Hand 1 rank"],
    "benefit": "When you use a magic item or a spelllike ability to create a magical effect, you may add additional magic-seeming words and hand gestures to trick onlookers into believing you cast the spell yourself. If using an item that is recognizable as a magical implement (such as a wand or ring), you can trick viewers into thinking you are just using the item as a focus component. Onlookers who have no ranks in Spellcraft have no knowledge of what is genuine spellcasting, and automatically believe you are casting a spell. If an onlooker attempts a Spellcraft check to identify your \"casting,\" his check is opposed by your Bluff check. If he succeeds, he realizes the deception. If he fails, he believes you cast the spell. Regardless of the result of that opposed check, he uses the result of that Spellcraft check to identify the \"spell\" you cast, except the DC is 20 + the spell's level instead of 15 + the spell's level."
  },
  {
    "name": "False Focus",
    "type": "General",
    "description": "You can use a divine focus to cast arcane spells.",
    "prerequisites": ["Knowledge (religion) 1 rank","ability to cast arcane spells"],
    "prerequisitesFeats": ["Knowledge (religion) 1 rank","ability to cast arcane spells"],
    "benefit": "By using a divine focus as part of casting, you can cast any spell with a material component costing the value of that divine focus (maximum 100 gp) or less without needing that component. For example, if you use a silver holy symbol worth 25 gp, you do not have to provide material components for an arcane spell if its components are worth 25 gp or less. The casting of the spell still provokes attacks of opportunity as normal. If the spell requires a material component that costs more than the value of the divine focus, you must have the material component on hand to cast the spell, as normal."
  },
  {
    "name": "Osirionology",
    "type": "General",
    "description": "You have a broad interest in Osirion and are something of an authority in one specialized field.",
    "prerequisites": ["Knowledge (history) 1 rank","Knowledge (local) 1 rank","must be able to speak Osiriani and Ancient Osiriani"],
    "prerequisitesFeats": ["Knowledge (history) 1 rank","Knowledge (local) 1 rank","must be able to speak Osiriani and Ancient Osiriani"],
    "benefit": "Pick one Intelligence-based skill. You gain a +3 bonus on all checks made using that skill in relation to Osirion or its people. In addition, you gain a +1 bonus on all other Intelligence-based skill checks made in relation to Osirion or its people."
  },
  {
    "name": "Out Of The Sun",
    "type": "General",
    "description": "Your allies use the sun's glare to their advantage.",
    "prerequisites": ["Bluff 3 ranks","Stealth 3 ranks"],
    "prerequisitesFeats": ["Bluff 3 ranks","Stealth 3 ranks"],
    "benefit": "When you hit with a melee attack, you can attempt a Bluff check as a move action to feint. You do not gain the benefits of this feint; instead, if your Bluff check is successful, an ally with this feat who is adjacent to you or your opponent gains the benefits, so that her next melee attack against that opponent does not allow him to use his Dexterity bonus to AC (if any). This attack must be made on or before your ally's next turn. You gain a +2 circumstance bonus on your Bluff check in bright light. This bonus increases to +4 in natural sunlight. You cannot use this feat in dim light or darkness."
  },
  {
    "name": "Thuvian Grenadier",
    "type": "General",
    "description": "Training with alchemically inclined allies helps you avoid friendly fire.",
    "prerequisites": ["Precise Shot or Throw Anything"],
    "prerequisitesFeats": ["Precise Shot or Throw Anything"],
    "benefit": "Whenever you hit a creature with a splash weapon, you may choose to exclude one creature within the weapon's splash area from taking splash damage. If a creature within the splash area also has this feat, it automatically ignores splash damage from your splash weapons on a successful hit. In addition, if you miss with a splash weapon and the errant weapon lands in a square occupied or adjacent to an ally with this feat, your ally can attempt a DC 20 Ref lex save. If the ally succeeds, he is able to catch the weapon. If your ally also has the Snatch Arrows feat, he can toss the splash weapon back to you as an immediate action."
  },
  {
    "name": "Undermine",
    "type": "General",
    "description": "You and your allies take advantage of shifting terrain to unbalance enemies.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "When you use a combat maneuver to move a creature into or through a square adjacent to an ally with this feat, your opponent treats all squares adjacent to that ally as difficult terrain during his next turn. In addition, the DC of any of your opponent's Acrobatics checks in the affected squares increases by 2 for each of your allies with this feat who are adjacent to him."
  },
  {
    "name": "Horn Of The Criosphinx",
    "type": "Combat",
    "description": "You end your charge in a devastating two-handed attack.",
    "prerequisites": ["Base attack bonus +6 or monk level 6th"],
    "prerequisitesFeats": ["Base attack bonus +6 or monk level 6th"],
    "benefit": "Whenever you make a successful charge attack while wielding a two-handed weapon in both hands, add two times your Strength bonus to the damage roll."
  },
  {
    "name": "Wings Of The Androsphinx",
    "type": "Combat",
    "description": "You can reshape the kinetic energy of foes' charges.",
    "prerequisites": ["Int 13","Combat Expertise","Improved Reposition","base attack bonus +1 or monk level 1st"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","Improved Reposition","base attack bonus +1 or monk level 1st"],
    "benefit": "You gain a +2 bonus to AC against charge attacks. If a creature charges you and fails its attack roll, as an immediate action you can attempt a reposition combat maneuver (Pathfinder RPG Advanced Player's Guide 322) to reposition that foe. If you use a readied action to attack a creature charging you, you can roll to attack and then attempt to reposition that creature as a free action before it resolves its charge attack."
  },
  {
    "name": "Shield Master",
    "type": "Combat",
    "description": "Your mastery of the shield allows you to fight with it without hindrance.",
    "prerequisites": ["Improved Shield Bash","Shield Proficiency","Shield Slam","Two-Weapon Fighting","base attack bonus +11"],
    "prerequisitesFeats": ["Improved Shield Bash","Shield Proficiency","Shield Slam","Two-Weapon Fighting","base attack bonus +11"],
    "benefit": "You do not suffer any penalties on attack rolls made with a shield while you are wielding another weapon. Add your shield's enhancement bonus to attacks and damage rolls made with the shield as if it was a weapon enhancement bonus."
  },
  {
    "name": "Betraying Blow",
    "type": "Combat",
    "description": "When you break an alliance, you make sure it's broken for good.",
    "prerequisites": ["Solo Maneuvers","base attack bonus +8"],
    "prerequisitesFeats": ["Solo Maneuvers","base attack bonus +8"],
    "benefit": "Whenever you use a melee attack to deal nonlethal damage to a creature that only you threaten, roll a Bluff check opposed by your opponent's Sense Motive check. You deal an additional amount of nonlethal damage equal to 1/2 the difference between your Bluff check and your opponent's Sense Motive check (minimum 0). If your opponent has an attitude of friendly or helpful toward you (including temporarily due to Intimidate checks, charm person, and similar effects), you instead deal an amount of extra nonlethal damage equal to the difference between your checks. Regardless, the amount of extra nonlethal damage you deal with this feat cannot exceed your Hit Dice."
  },
  {
    "name": "Solo Maneuvers",
    "type": "Combat",
    "description": "You fight best when you're on your own.",
    "prerequisites": [],
    "prerequisitesFeats": [],
    "benefit": "Whenever you are the only one threatening an opponent, you gain a +1 bonus on combat maneuvers against that creature and a +1 bonus to CMD against combat maneuvers made by that creature."
  },
  {
    "name": "Dirty Trick Master",
    "type": "Combat",
    "description": "You are adept at stifling your enemies and can expertly make a bad situation even worse.",
    "prerequisites": ["Greater Dirty Trick","Improved Dirty Trick","base attack bonus +11"],
    "prerequisitesFeats": ["Greater Dirty Trick","Improved Dirty Trick","base attack bonus +11"],
    "benefit": "Whenever you successfully perform a dirty trick combat maneuver against an opponent who is still affected by a condition inflicted by a previous dirty trick (whether your own or another creature's), you can cause the condition to worsen. In addition to increasing the duration of the condition as normal, you cause an opponent who is dazzled to become dazed, entangled to become pinned, shaken to become frightened, and sickened to become nauseated. This worsened condition replaces the previous dirty trick condition, and lasts for the duration of the dirty trick (including any rounds remaining from the previous dirty trick condition) or until the opponent uses a standard action to remove the condition (whichever comes first)."
  },
  {
    "name": "Divert Harm",
    "type": "Combat",
    "description": "You know how to throw your enemies into harm's way at the last second.",
    "prerequisites": ["Int 13","Combat Expertise","base attack bonus +6","evasion class feature"],
    "prerequisitesFeats": ["Int 13","Combat Expertise","base attack bonus +6","evasion class feature"],
    "benefit": "Whenever you are the target of an areaof- effect attack that normally deals half damage on a successful Reflex save (such as a fireball spell or dragon's breath weapon), you may, as an immediate action, wrestle an adjacent foe into harm's way. This does not alter the position of you or your opponent, but your opponent must attempt a Reflex save against the attack in your place. If your opponent fails, it takes half damage from the attack and you take none; if it succeeds, it takes no damage and you take damage as normal as though you'd failed your saving throw (though this damage is still reduced by abilities such as improved evasion). This feat works even if the opponent was already in the affected area of the attack (so it is possible that an unlucky opponent could take as much as 1-1/2 times the damage normally possible from the attack). You can use this ability only on a foe within one size category of yourself."
  },
  {
    "name": "Crisis Of Conscience",
    "type": "Story",
    "description": "Your internal struggle and contradictory actions have left you teetering on a knife's edge between good and evil. You must choose which path you will make your own.",
    "prerequisites": ["Lawful neutral","neutral","or chaotic neutral alignment Your alignment must have shifted from either good or evil at least once since 1st level or the last time you completed this feat (see Special)"],
    "prerequisitesFeats": ["Lawful neutral","neutral","or chaotic neutral alignment Your alignment must have shifted from either good or evil at least once since 1st level or the last time you completed this feat (see Special)"],
    "benefit": "You are an enigma unto those who cleave to notions of morality as guiding life principles. Habits and mannerisms from your past life send subtly confusing signals to those trying to read you. Whenever another character attempts to discern your alignment, loyalties, or intentions (including via magical effects such as detect thoughts and when you are using Bluff to send a secret message or feint), you gain a +2 bonus on opposed skill checks and on Will saving throws to resist such effects."
  },
  {
    "name": "Planar Hunter",
    "type": "General",
    "description": "After careful study of otherworldly environments, you can quickly evaluate how an outsider reacts in its home surroundings. You can use your knowledge of the outsider's native environment to guide your attacks and overcome the outsider's natural resistances.",
    "prerequisites": ["Knowledge (planes) 5 ranks","favored terrain (any plane) class feature"],
    "prerequisitesFeats": ["Knowledge (planes) 5 ranks","favored terrain (any plane) class feature"],
    "benefit": "When you are on one of the planes you've selected as a favored terrain, you gain a +2 bonus on weapon attack rolls against outsiders native to that plane. You also ignore up to 5 points of damage reduction when making weapon attacks against outsiders native to that plane, except for damage reduction without a type (such as DR 10/-). In addition, you gain this bonus against extraplanar creatures you encounter and identify as being from one of your planar favored terrains, such as with a successful Knowledge (planes) check, regardless of what plane you or they are on."
  },
  {
    "name": "Practiced Leadership",
    "type": "General",
    "description": "When you and your cohort are both members of the same organization, you needn't shoulder the burden of leadership alone. By relying on the authority of your shared organization as well as your own leadership skills, your cohort demonstrates improved devotion and tactical acumen.",
    "prerequisites": ["Leadership","membership in the same organization as your cohort"],
    "prerequisitesFeats": ["Leadership","membership in the same organization as your cohort"],
    "benefit": "As long as you and your cohort maintain membership in good standing within the same organization, your cohort gains a +4 morale bonus on Will saves against enchantment spells and effects. Additionally, your cohort is treated as though she possessed the same teamwork feats you do for the purpose of determining whether you receive a bonus from your teamwork feats. Your cohort doesn't receive any bonuses from these feats unless she actually possesses the feats. If you and your cohort belong to one of the organizations listed in this section, your cohort gains the practiced leadership benefit associated with your organization. If a benefit grants your cohort access to a spell-like ability, the caster level of the effect is 1st or equal to your cohort's caster level, whichever is higher."
  },
  {
    "name": "Fabulist",
    "type": "General",
    "description": "You enjoy telling tall tales and gain confidence when others believe them.",
    "prerequisites": ["Amateur GunslingerUC feat or grit class feature"],
    "prerequisitesFeats": ["Amateur GunslingerUC feat or grit class feature"],
    "benefit": "You gain a +1 bonus on Perform (act, comedy, oratory, and sing) skill checks, and Perform is a class skill for you. In addition, each time you make a successful Bluff check to convince someone of a far-fetched or impossible story, you regain 1 grit point. Successfully lying to a friendly or helpful creature, or a creature that has fewer Hit Dice than half your character level, doesn't restore grit."
  },
  {
    "name": "Gun Twirling",
    "type": "General",
    "description": "You can spin and juggle a small firearm, making it difficult to predict where you will shoot.",
    "prerequisites": ["Amateur GunslingerUC feat or grit class feature","Dazzling Display","Weapon Focus"],
    "prerequisitesFeats": ["Amateur GunslingerUC feat or grit class feature","Dazzling Display","Weapon Focus"],
    "benefit": "You can spend 1 grit point to make a feint attempt using a one-handed firearm for which you have Weapon Focus (instead of a melee weapon). The target of this feint must be within 30 feet of you and be able to see you. If you have the Quick Draw feat, you can holster a onehanded firearm as a free action as long as you have at least 1 grit point."
  },
  {
    "name": "Named Bullet",
    "type": "General",
    "description": "You can craft ammunition intended to kill specific foes.",
    "prerequisites": ["Amateur GunslingerUC feat or grit class feature","GunsmithingUC","base attack bonus +5"],
    "prerequisitesFeats": ["Amateur GunslingerUC feat or grit class feature","GunsmithingUC","base attack bonus +5"],
    "benefit": "Whenever you craft ammunition using Gunsmithing, you may inscribe a bullet or alchemical cartridge with the name of its intended target. The ammunition gains the bane weapon special ability against the chosen creature only. If the ammunition is used to attack any other target, the attack roll is instead made with a -2 penalty. Crafting a named bullet costs 1 grit point and reduces your maximum grit points by 1 until the named bullet is fired or destroyed."
  }
]

module.exports = { feats };
