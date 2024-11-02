
const plaid = require('plaid');
require('dotenv').config();

const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments.sandbox,
});

exports.getTransactions = async (req, res) => {
  const accessToken = req.body.accessToken;
  const response = await client.getTransactions(accessToken, '2022-01-01', '2022-02-01');
  res.json(response.data.transactions);
};
