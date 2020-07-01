module.exports = function(sequelize, DataTypes) {

  return sequelize.define('Square', {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      square_color: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '#FFF'
      }
  }, {
      tableName: 'squares',
      freezeTableName: true
  })
}