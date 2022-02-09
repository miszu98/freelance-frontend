export function passwordEquality(field1: string, field2: string) {
    return function (frm: any) {
        let field1Value = frm.get(field1).value;
        let field2Value = frm.get(field2).value;
    
        if (field1Value !== '' && field1Value !== field2Value) {
          return { 'notMatch': `value ${field1Value} is not equal to ${field2}` }
        }
        return null;
    }
}