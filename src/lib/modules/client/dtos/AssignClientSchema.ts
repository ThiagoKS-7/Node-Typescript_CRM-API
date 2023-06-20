import { z } from "zod";
import { getDefaultStringValidation } from "../../utils";

//schema validation  https://zod.dev/?id=basic-usage
const assignClientSchema = z.object({
  id: z.string(getDefaultStringValidation("Id")),
  name: z.string(getDefaultStringValidation("Name")),
});

export default assignClientSchema;
