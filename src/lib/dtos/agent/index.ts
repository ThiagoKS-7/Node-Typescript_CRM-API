import { PrismaClient } from "@prisma/client"
import { z } from "zod"
const prisma = new PrismaClient()

// clients: z.array(z.object({
//     name: z.string(),
//     email: z.string().email(),
//     phone: z.string().regex(phoneRegex, 'Invalid Number!'),
//     address: z.object({
//         city: z.string(),
//         state: z.string().max(2, "'State' accepts only 2 characters!"),
//         number: z.string(),
//         zip: z.string().regex(zipRegex, 'Invalid Zip code!'),
//     }).optional(),
//     agentId: z.string().optional(),
// })),

module.exports = function (fastify:any, opts:any, done:any) {
    
    fastify.get("/", async () =>{
        try {
            const agents = await prisma.agent.findMany()
            return {agents}
        } catch (e) {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        }
    })

    fastify.post("/register", async (request:any, reply:any) =>{
        const phoneRegex = new RegExp(
            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
        )
        const zipRegex = new RegExp(
            /^[0-9]{5}(?:-[0-9]{4})?$/
        )

        //schema validation  https://zod.dev/?id=basic-usage
        const createAgentSchema = z.object({
            name: z.string({
                required_error: "Name is required",
                invalid_type_error: "Name must be a string"
            }),
            password: z.string({
                required_error: "Password is required",
                invalid_type_error: "Password must be a string"
            }),
        })
        try {
            const {name, password} = createAgentSchema.parse(request.body)
            await prisma.agent.create({data: {name, password, clients: []}})
            return reply.status(201).send({"message": "User created successfully"})
        } catch (err) {
            await prisma.$disconnect()
            return reply.status(400).send(JSON.parse(err.message))
        }
    }) 

    done()
}