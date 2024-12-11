import mongoose from 'mongoose';

const OrderSong_Schema = new mongoose.Schema({
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
  youtubeUrl: {
    type: String,
    default: null,
  },
  isAproved: {
    type: Boolean,
    default: false,
  },
  forGroom: {
    type: Boolean,
    default: null,
  },
});

const OrderSong = mongoose.model('OrderSong', OrderSong_Schema);
export { OrderSong };
