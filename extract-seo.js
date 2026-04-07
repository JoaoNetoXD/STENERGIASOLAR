const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('../stenergia_blindagem1.sql', { encoding: 'utf8' }),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  let idx = 0;
  while ((idx = line.indexOf('_yoast_wpseo_title', idx)) !== -1) {
     console.log('YOAST TITLE MATCH:', line.substring(Math.max(0, idx - 20), idx + 150));
     idx += 20;
  }
  idx = 0;
  while ((idx = line.indexOf('_yoast_wpseo_metadesc', idx)) !== -1) {
     console.log('YOAST DESC MATCH:', line.substring(Math.max(0, idx - 20), idx + 250));
     idx += 20;
  }
  idx = 0;
  while ((idx = line.indexOf('rank_math_title', idx)) !== -1) {
     console.log('RANKMATH TITLE MATCH:', line.substring(Math.max(0, idx - 20), idx + 150));
     idx += 20;
  }
  idx = 0;
  while ((idx = line.indexOf('rank_math_description', idx)) !== -1) {
     console.log('RANKMATH DESC MATCH:', line.substring(Math.max(0, idx - 20), idx + 250));
     idx += 20;
  }
});

rl.on('close', () => console.log('Done scanning.'));
