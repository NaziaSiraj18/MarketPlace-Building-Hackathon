import { groq } from "next-sanity";


export const foodquery = groq `*[_type ==  food]`;
export const four = `[_type == "food"][0..3]`;



