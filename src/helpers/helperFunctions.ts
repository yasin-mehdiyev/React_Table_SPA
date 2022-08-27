
export const formalizePassingData = (name: any, value: any): any => {
    const data: object = {};
    let finalValue: Array<any> = [];

    for (const item of value) {
        finalValue.push(item.original);
    };
    
    const normalizeData: object = { ...data, name, value: finalValue };
    return normalizeData;
};