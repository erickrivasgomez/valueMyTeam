'use strict';
import { Table, Column, DataType, Model, BelongsTo, ForeignKey,PrimaryKey } from 'sequelize-typescript';
import { Question } from './Question';

@Table
export class Answer extends Model<Answer> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  content: string;

  @Column(DataType.STRING)
  path: string;

  @Column(DataType.STRING)
  value: string;

  @ForeignKey(() => Question)
  @Column
  questionId: number;

  @BelongsTo(() => Question)
  question: Question;


}


// import Sequelize from 'sequelize';
// import { Question } from "./question";
// //const sequelize = require('sequelize');
// import {sequelize} from "../../src/database/connection"



// export class Answer extends Sequelize.Model {}
// Answer.init({
//   id: Sequelize.INTEGER,
//   content: Sequelize.STRING,
//   path: Sequelize.STRING,
//   value: Sequelize.INTEGER
// }, {sequelize,
//   modelName: 'answer'
// });

// Answer.belongsTo(Question);

// module.exports = (sequelize, DataTypes) => {
//   const Answer = sequelize.define('Answer', {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//       autoIncrement: false,
//     },
//     content: DataTypes.STRING,
//     path: DataTypes.STRING,
//     value: DataTypes.INTEGER
//   });

//   Answer.associate = models => {
//     Answer.belongsTo(models.Question);
//   };

//   return Answer;
// };