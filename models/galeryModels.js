import { DataTypes } from 'sequelize';

const galeryModels = (sequelize) =>
  sequelize.define('w', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default galeryModels;
