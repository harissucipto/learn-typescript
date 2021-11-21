// type Discrimated berfungsi untuk mengubah tipe data yang sama menjadi tipe data yang berbeda

type ValidationSuccess = {
  isValid: true;
  validatedValue: string;
};

type ValidationFailure = {
  isValid: false;
  errorReason: string;
};

type ValidationResult = ValidationSuccess | ValidationFailure;

function logResult(result: ValidationResult) {
  if (result.isValid) {
    console.log("Succes, validated value: ", result.validatedValue);
  }
  if (result.isValid === false) {
    console.log("Failure, reason: ", result.errorReason);
  }
}
