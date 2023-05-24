import { DataTypes, Model } from 'sequelize';
import db from '.';

export interface UserAtributes {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export type UserCreationalAtrubutes = Omit<UserAtributes, 'id'>;

class UserModel extends Model<UserAtributes, UserCreationalAtrubutes> {
  // declare <campo>: <tipo>;

  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

UserModel.init({
  // ... Campos
  id: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  tableName: 'users',
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

export default UserModel;
