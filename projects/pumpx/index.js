const { get } = require('../helper/http');
const { toUSDTBalances } = require("../helper/balances");

async function fetch(network) {
  const { tvl } = await get('https://lending.pumpx.io/lending/api/v1/pools/tvl?network=' + network);
  return toUSDTBalances(tvl);
}

module.exports = {
  methodology: 'Based on the sum of the total supply caps approved of all active lending offers for the live collections on PumpX protocol;',
  ethereum: {
    tvl: () => fetch('ethereum'),
  },
  blast: {
    tvl: () => fetch('blast'),
  },
}
