export const updateError = (err: any, str: string) => {

    console.log("Error: ", err);
    throw new Error(`There was an error in updating the ${str} !`)
}