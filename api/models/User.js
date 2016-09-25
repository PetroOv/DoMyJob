/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nickname: {
      type: "string",
      unique: true,
      required: true
    },
    email: {
      type: "email",
      unique: true,
      required: true,
      email: true
    },
    encryptedPassword: {
      type: 'string',
      required: true
    },
    lastName: {
      type: "string",
      required: true
    },
    firstName: {
      type: "string",
      required: true
    },
    status: {
      type: "string",
      enum: ['online', 'offline']
    },
    givenTasks: {
      collection: 'task',
      via: 'author'
    },
    rating: {
      type: 'string',
      defaultsTo: 0
    },
    madeTasks: {
      collection: 'task',
      via: 'worker'
    },
    gravatarUrl: {
      type: 'string'
    }

  }
};

