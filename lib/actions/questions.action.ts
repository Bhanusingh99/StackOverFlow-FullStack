'use server'

import { revalidatePath } from "next/cache";
import { Question } from "../../Model/question.model";
import { Tag } from "../../Model/tag.model";
import { User } from "../../Model/user.model";
import { connectionToDb } from "../mongoose"
import { GetQuestionsParams, CreateQuestionParams } from "./shared.types";

export async function getQuestions(params:GetQuestionsParams){
    connectionToDb();

    try {
        const question = await Question.find({})
        .populate({path:"tags",model:Tag})
        .populate({path:"path",model:User})
        .sort({createdAt:-1})

      return {question}  
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function createQuestion(params:CreateQuestionParams) {
    try {
        connectionToDb();

        const {title,content,tags,author,path} = params;

        // create a Question
        const question = await Question.create({
            title,
            content,
            author
        })

        const tagDoecument = [];
        //Create the tag or get themif already exist
        for(const tag of tags){
            const existingTag = await Tag.findOneAndUpdate(
                {name:{$regex : new RegExp(`^${tag}$`,'i')}},
                {$setOnInsert:{name:tag}, $push:{question:question._id}},
                {upsert:true,new:true}  
            )
            tagDoecument.push(existingTag._id);
        }

        await Question.findByIdAndUpdate(question._id,{
            $push:{tags:{$each:tagDoecument}}
        })

        revalidatePath(path)
    } catch (error) {
        console.log(error)
    }
}