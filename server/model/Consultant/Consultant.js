const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConsultantSchema = new Schema({
      user: {
          type: Schema.Types.ObjectId,
          ref: 'users'
      },
      name: {
          type: String,
          required: true
      },
      status: {
          type: String,
          required: true
      },
      surname: {
          type: String,
          required: true
      },
      avatar: {
           type: String
      },
      ratings: [
          {
          user: {
              type: Schema.Types.ObjectId,
              ref: 'users'
          },
          month: {
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
          ratingSending: {
            type: Boolean
          },
          date: {
              type: Date,
              default: Date.now
          }
          }
      ],
      date: {
          type: Date,
          default: Date.now
      }
});


module.exports = Consultant = mongoose.model('consultant', ConsultantSchema);