'use strict';
import {Table, Column, Model, HasMany, PrimaryKey, DataType} from 'sequelize-typescript';
import { Answer } from './Answer';
@Table
export class Question extends Model<Question> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  content: string;
 
  @HasMany(() => Answer)
  answers: Answer[];
}





// import { Answer } from "./answer";
// //import { Model } from "sequelize/types";
// import Sequelize from 'sequelize';
// const sequelize = require('sequelize');

// export class Question extends Sequelize.Model{}
// Question.init({
// content: Sequelize.TEXT
// },{sequelize, modelName: 'question'})
// Question.hasMany(Answer); 


// export default (sequelize, DataTypes) => {
//   const Question = sequelize.define('Question', {
   
//     content: DataTypes.TEXT
//   }, {});
//   Question.associate = function(models) {
//     // associations can be defined here
//     Question.hasMany(answer); 
//   };
//   console.log(Question.findall({}));
//   return Question;
// };





