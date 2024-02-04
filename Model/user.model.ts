import { Schema,models,model,Document } from "mongoose";

export interface Iuser extends Document{
   clerkId:string,
   name:string,
   username:string,
   email:string,
   password?:string,
   bio?:string,
   picture:string,
   location?:string,
   portfoliowebsite?:string,
   reputation?:number,
   saved:Schema.Types.ObjectId[],
   joinedAt:Date
} 

const userSchema = new Schema({
    clerkId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true, // Ensure unique usernames
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure unique emails
    },
    password: {
      type: String,
    },
    bio: {
      type: String,
    },
    picture: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    portfoliowebsite: {
      type: String,
    },
    reputation: {
      type: Number,
      default: 0, // Default reputation
    },
    saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    joinedAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Export the model
  export const User = models.User || model("User", userSchema); 