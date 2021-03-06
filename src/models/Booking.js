const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    spot: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Spot'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);