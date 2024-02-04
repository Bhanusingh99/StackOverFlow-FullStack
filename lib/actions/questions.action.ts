'use server'

import { connectionToDb } from "../mongoose"

export async function createQuestion(params:any) {
    try {
        connectionToDb();
    } catch (error) {
        console.log(error)
    }
}