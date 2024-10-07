function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=         🌟 Blum Auto Bot 🌟            ='.cyan);
  console.log('=            Created by MRA               ='.cyan);
  console.log('=   https://t.me/MushfiqurRahmanAayan     ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = { displayHeader };
