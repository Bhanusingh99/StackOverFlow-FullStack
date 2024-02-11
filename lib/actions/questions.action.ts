'use server'

import { Question } from "../../Model/question.model";
import { Tag } from "../../Model/tag.model";
import { connectionToDb } from "../mongoose"
import { GetQuestionsParams, CreateQuestionParams } from "./shared.types";

export async function getQuestions(params:GetQuestionsParams){}

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
    } catch (error) {
        console.log(error)
    }
}