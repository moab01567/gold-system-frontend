export enum Mode {
  editMode,
  printMode,
}

export function FormatNumber(number: number): string {
  let formatedNumber = "";
  const numberString = Math.round(number) + "";
  for (let i = 0; i < numberString.length; i++) {
    if (i % 3 == 0) formatedNumber = " ".concat(formatedNumber);
    formatedNumber =
      numberString[numberString.length - i - 1].concat(formatedNumber);
  }
  return formatedNumber;
}
