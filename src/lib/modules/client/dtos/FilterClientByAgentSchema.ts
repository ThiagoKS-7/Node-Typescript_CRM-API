import { z } from "zod";
import { getDefaultStringValidation } from "../../utils";

const filterSchema = z.object({
    name: z.string(getDefaultStringValidation("AgentName")),
});

export default filterSchema;