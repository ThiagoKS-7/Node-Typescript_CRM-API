import { z } from "zod";
import { getDefaultStringValidation } from "../../utils";

//schema validation  https://zod.dev/?id=basic-usage
const assignClientSchema = z.object({
  id: z.string(getDefaultStringValidation("Id")),
});

export default assignClientSchema;
