# RPG Command
This is a command line tool for doing stuff for the Pathfinder RPG. Right now all it can do is create new characters and really it can't even do that yet. Right now it will create a json object "character sheet" up to choosing your skills. In the future I hope to make this tool do a lot more but for that I really need more time.

# Usage
The following will run the character generation script. It isn't finish but right now it is the only functionality.

```
node rpgcommand c
```

# Character Generation TODO
* I think I'd like to refactor a few things before I move on from here. I think this already handles all the hard stuff.
* Determine Saving Throws, Initiative, and Attack Values.
* Description and personality, include options to automatically generate this stuff.
* Spells
* Continue to improve feat selection. I don't like how it is.
  * Idea: Only choose one feat at a time and loop for each feat your allowed to take. Then it can do a better job of getting feats with prerequisites.

# General TODO
* Finish character generation.
* Randomly generate stuff with Markov algo.
* Encounter generator.


# Notes
* http://www.d20pfsrd.com/basics-ability-scores/character-creation/
* https://www.npmjs.com/package/tec-table
* https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs
* https://github.com/SBoudrias/Inquirer.js#examples
