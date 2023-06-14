import { z } from "zod";
import { getDefaultStringValidation } from "../../utils";

const createAgentSchema = z.object({
  name: z.string(getDefaultStringValidation("Name")),
  password: z.string(getDefaultStringValidation("Password")),
});

export default createAgentSchema;
