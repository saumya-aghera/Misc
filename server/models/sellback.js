import mongoose from 'mongoose';

const sellSchema = new mongoose.Schema({
    type: {
        type: String
      },
      price: {
        type: String
      },
      quantity: {
        type: String
      },
      number: {
        type: Number
      },
      address: {
        type: String
      },
      photo: {
        type: String
      },
      // image: {
      //   type: String
      // },
});

const SellBack = mongoose.model('SellBack',sellSchema);

export default SellBack;