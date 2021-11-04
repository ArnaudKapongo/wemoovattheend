const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
      user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
          },
      name: {
          type: String
      },
      website: {
          type: String 
      },
      address: {
          type: String
      },
      digit: {
          type: Number
      },
      generalSkills: {
          type: [String]
      },
      description: {
          type: String
      },
      consultant: [
        {
        month: {
            type: String,
            required: true
          },
          name: {
            type: String,
            required: true
          },
          surname: {
            type: String,
            required: true
          },
          skillstechnical: {
            type: Number
          },
          skillsfunctional: {
            type: Number
          },
          progress: {
            type: Number
          },
          realisation: {
            type: Number
          },
          transfert: {
            type: Number
          },
          remark: {
              type: String
          },
          note: {
              type: String
          },
          rigor: {
              type: Number
          },
          punctuality: {
              type: Number
          },
          autonomy: {
              type: Number
          },
          communication: {
              type: Number
          },
          strength: {
              type: Number
          }, 
          date: {
              type: Date,
              default: Date.now
          }
        }
      ]
    });
    
module.exports  = mongoose.model('profile', ProfileSchema);