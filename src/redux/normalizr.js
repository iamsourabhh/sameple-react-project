import { schema } from "normalizr";

const image = new schema.Entity("images");
export const arrayOfImages = new schema.Array(image);
