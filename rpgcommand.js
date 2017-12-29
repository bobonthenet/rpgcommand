const program = require('commander');
const {doNothing, startCreate} = require('./character')

program
  .version('0.0.1')
  .description('Command line tool for quickly doing stuff for table top RPGs.\n  Currently this tool only allows you to create a new character.');

program
  .command('doNothing')
  .alias('d')
  .description('This is just a test and does not do anything.')
  .action((myVar) => {
    doNothing(myVar);
  });

program
  .command('createcharacter')
  .alias('c')
  .description('Create a character')
  .action(() => {
    startCreate();
  })
program.parse(process.argv);
