import { Schema,models,model,Document } from "mongoose";

export interface Iquestion extends Document{
    title:string,
    content:string,
    Tags:Schema.Types.ObjectId[],
    views:number,
    upVotes:Schema.Types.ObjectId[],
    downVotes:Schema.Types.ObjectId[],
    author:Schema.Types.ObjectId,
    answers:Schema.Types.ObjectId[],
} 

const questionSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    Tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    views: {
      type: Number,
      default: 0, // Default value for views
    },
    upVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Export the model
  export const Question = models.Question || model("Question", questionSchema); 