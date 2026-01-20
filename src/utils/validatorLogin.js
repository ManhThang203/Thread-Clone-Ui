import { object, string, addMethod } from "yup";

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

addMethod(string, "login", function (message) {
  return this.matches(EMAIL_REGEX, {
    message,
    name: "login",
    excludeEmptyString: true,
  });
});

export const loginSchema = object({
  login: string()
    .matches(EMAIL_REGEX, "login.invalid")
    .required(JSON.stringify({ key: "required", field: "fields.login" })),

  password: string()
    .required(JSON.stringify({ key: "required", field: "fields.password" }))
    // password.mismatch phải có trong file JSON
    .matches(PASSWORD_REGEX, "password.mismatch"),
});
