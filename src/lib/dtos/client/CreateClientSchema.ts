import { z } from "zod"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const zipRegex = new RegExp(
    /^[0-9]{5}(?:-[0-9]{4})?$/
);
//schema validation  https://zod.dev/?id=basic-usage
const createClientSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().regex(phoneRegex, 'Invalid Number!'),
    address: z.object({
        city: z.string(),
        state: z.string().max(2, "'State' accepts only 2 characters!"),
        street: z.string(),
        number: z.string(),
        zip: z.string().regex(zipRegex, 'Invalid Zip code!'),
    }),
    agentId: z.string().optional(),
});

export default createClientSchema;