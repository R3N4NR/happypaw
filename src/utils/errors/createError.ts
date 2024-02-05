export const createError = (err: any, str: string) => {

    console.log("Error: ", err);
    throw new Error(`There was an error in creating the ${str} !`)
}