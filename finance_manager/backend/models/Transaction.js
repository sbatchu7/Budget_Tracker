
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    description: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    category: DataTypes.STRING,
    date: DataTypes.DATE,
  });
  return Transaction;
};
