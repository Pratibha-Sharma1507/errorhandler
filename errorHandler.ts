class ErrorHandler {
    private errors: Error[] = [];
  
    public addError(error: Error): void {
      this.errors.push(error);
    }
  
    public getErrors(): Error[] {
      return this.errors;
    }
  
    public clearErrors(): void {
      this.errors = [];
    }
  }
  
  export default ErrorHandler;
  