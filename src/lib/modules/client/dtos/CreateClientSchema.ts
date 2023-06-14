import { z } from "zod";
import { getDefaultStringValidation, phoneRegex, zipRegex } from "../../utils";

const addressSchema = z.object({
  city: z.string(getDefaultStringValidation("City")),
  state: z
    .string(getDefaultStringValidation("State"))
    .max(2, "'State' accepts only 2 characters!"),
  neighborhood: z.string(getDefaultStringValidation("Neighborhood")),
  street: z.string(getDefaultStringValidation("Street")),
  number: z.string(getDefaultStringValidation("HouseNumber")),
  zip: z.string().regex(zipRegex, "Invalid Zip code!"),
});

//schema validation  https://zod.dev/?id=basic-usage
const createClientSchema = z.object({
  name: z.string(getDefaultStringValidation("Name")),
  email: z.string(getDefaultStringValidation("Email")).email(),
  phone: z
    .string(getDefaultStringValidation("Phone"))
    .regex(phoneRegex, "Invalid Number!"),
  status: z.string().optional(),
  address: addressSchema,
  agent: z
    .object({
      id: z.string(getDefaultStringValidation("AgentId")),
      name: z.string(getDefaultStringValidation("AgentName")),
    })
    .optional(),
});

export default createClientSchema;
