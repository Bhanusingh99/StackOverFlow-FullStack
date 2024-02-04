import { Schema,models,model,Document } from "mongoose";

export interface Itag extends Document{
    name:string,
    description:string,
    question:Schema.Types.ObjectId[],
    followers:Schema.Types.ObjectId[],
    createdAt:Date
} 

const tagSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true, // Ensure unique tag names
    },
    description: {
      type: String,
      required:true
    },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }], // Corrected field name
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Export the model
  export const Tag = models.Tag || model("Tag", tagSchema); 