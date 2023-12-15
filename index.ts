import ErrorHandler from './errorHandler';
const errorHandler = new ErrorHandler();

try {
  throw new Error('error1');
} catch (error) {
  errorHandler.addError(error);
}
try {
    throw new Error('error2');
  } catch (error) {
    errorHandler.addError(error);
  }

const errors = errorHandler.getErrors();
console.log(errors);

errorHandler.clearErrors();
