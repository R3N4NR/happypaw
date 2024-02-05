export const alreadyExistsError = (err: any, str: string) => {

    console.log("Error: ", err);
    throw new Error(`${str} already exists !`)
}