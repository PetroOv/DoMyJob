/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    autoPK: false,
    id: {
      type: 'number',
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: "string",
      required: true
    },

    value: {
      type: "string",
      required: true
    },
    worker: {
      model: 'user'
    },
    author: {
      model: 'user',
      // required: true
    },
    description: {
      type: 'string',
      required: 'true'
    },
    executors: {
      type: "array",
      model: 'user'
    },
    status: {
      type: "string",
      enum: ["active", "finished"]
    }
  }
};

