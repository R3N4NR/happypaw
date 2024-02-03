export const validateFields = (...fields: any[]) => {

    const flag = fields.find((empty) => empty === '' )

    if(flag){
        return true;
    }
}