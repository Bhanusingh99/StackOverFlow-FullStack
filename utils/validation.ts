import z, { array } from "zod"

export const QuestionSchema = z.object({
    title: z.string().min(2).max(50),
    explaination: z.string().min(100),
    tag: z.array(z.string().min(1).max(18)).min(1).max(3)
})