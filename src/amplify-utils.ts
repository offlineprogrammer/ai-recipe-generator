
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import { type Schema } from "../amplify/data/resource";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);

export const amplifyClient = generateClient<Schema>({
  authMode: "userPool",
});
