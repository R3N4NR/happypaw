export const addError = (err: any, ...str: string[]) => {

    console.log("Error: ", err);
    throw new Error(`There was an error in add the ${str[0]} to ${str[1]}!`)
}