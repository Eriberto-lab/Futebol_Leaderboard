import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

export interface TeamAtributes {
  id: number;
  teamName: string;
}

export type TeamCreationalAtrubutes = Omit<TeamAtributes, 'id'>;

class TeamModel extends Model<TeamAtributes, TeamCreationalAtrubutes> {
  // declare <campo>: <tipo>;

  declare id: number;
  declare teamName: string;
}

TeamModel.init({
  // ... Campos
  id: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  teamName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  tableName: 'teams',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default TeamModel;
