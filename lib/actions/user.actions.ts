'use server'

import { revalidatePath } from "next/cache"
import { User } from "../../Model/user.model"
import { connectionToDb } from "../mongoose"
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types"
import { Question } from "../../Model/question.model"

export const getUserBytId = async (params:any) => {
    try {
        console.log('phla line')
        connectionToDb();
        console.log('dusra line')
        const {userId} = params;
        console.log("yha thak chla")
        const user = await User.findOne({clerkId:userId});
        console.log(user)
        return user
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async (userParamas:CreateUserParams) => {
    try {
        connectionToDb();

        const newUser = await User.create(userParamas);
        return newUser
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (params:UpdateUserParams) => {
    try {
        connectionToDb();

        const{clerkId,updateData,path} = params;

        await User.findOneAndUpdate({clerkId},updateData,{new:true});
        revalidatePath(path)

    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (params:DeleteUserParams) => {
    try {
        connectionToDb();

        const{clerkId} = params;

        const user = await User.findOneAndDelete({clerkId});

        if(!user){
            throw new Error('user not found')
        }

        const userQuestionId = await Question.find({author:user._id}).distinct('_id');

        await Question.deleteMany({author:user._id});

        const deleteUser = await User.findByIdAndDelete(user._id);
    } catch (error) {
        console.log(error)
    }
}