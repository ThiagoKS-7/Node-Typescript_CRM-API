import { z } from "zod";
import { getDefaultStringValidation } from "../../utils";

const manageAgentSchema = z.object({
  id: z.string(getDefaultStringValidation("Id")),
  clients: z.any({
    required_error: `Clients are required`,
  }),
});

export default manageAgentSchema;
