// import { amplifyClient } from "./amplify-utils";

// export async function generateRecipe(formData: FormData) {
//   const response = await amplifyClient.queries.askBedrock({
//     ingredients: [formData.get("ingredients")?.toString() || ""],
//   });

//   if (response.data.error) {
//     throw new Error(response.data.error);
//   }

//   return response.data.body || "";
// }
