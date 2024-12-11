import mongoose from 'mongoose';

const RSVP_Schema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  isAproved: {
    type: Boolean,
    default: false,
  },
});

const RSVP = mongoose.model('RSVP', RSVP_Schema);
export { RSVP };
