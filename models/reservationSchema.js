import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3,"First name must contain at least 3 charasters!"],
        maxLength: [30,"First name cannot exceed 30 charasters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3,"Last name must contain at least 3 charasters!"],
        maxLength: [30,"Last name cannot exceed 30 charasters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid Email"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [10,"Phone Number must contain only 10 digit!"],
        maxLength: [10,"Phone Number must contain only 10 digit!"],
    },
    time:{
        type : String,
        required : true,
    },
    date:{
        type : String,
        required : true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);