
// import built-in modules
import * as childProcess from 'node:child_process';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
  const rl = readline.createInterface({ input, output });
  // control flow
  for (; ;) {
    const tag = await rl.question('Please input your tag (v1.0.0): ');
    // control flow
    if (tag.startsWith('v')) {
      break
    }
  }
  const confirm = await rl.question(`Do you wanna tag v${tag}? (Y/n)`);
  // control flow
  if (confirm === 'Y' || confirm === 'y') {
    childProcess.exec(`git tag -a v${tag} -m 'Release v${tag}'`)
  } else {
    process.exit()
  }
  const comfirm2 = await rl.question('Do you wanna push the tag? :(Y/n)');
  // control flow
  if (confirm === 'Y' || confirm === 'y') {
    childProcess.exec(`git push --tag`)
  } else {
    process.exit()
  }
  rl.close();
}

main();
