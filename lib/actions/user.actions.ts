'use server'

import { User } from "../../Model/user.model"
import { connectionToDb } from "../mongoose"

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