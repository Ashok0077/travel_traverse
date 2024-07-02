import mongoose from "mongoose";
//Schema

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
      required: true,
    },
    tourName: {
      type: String,
      required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    guestSize: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    bookAt: {
        type: Date,
        required: true,
    },
  },
  { timestamps: true }  //careated_At,Updated_At
);

//model
export default mongoose.model("Booking", bookingSchema); //Booking is the name of the model and bookingSchema is the schema we are passing
//name of the model is shown in the collection, in this case collection name is Bookings , its add s automatically in collection