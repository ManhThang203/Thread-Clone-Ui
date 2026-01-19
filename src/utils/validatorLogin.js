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
    .login("Sai định dạng email")
    .required("Email hoặc tên đăng nhập là bắt buộc"),
  password: string()
    .required("Mật khẩu là bắt buộc")
    .matches(PASSWORD_REGEX, "Mật khẩu không đúng định dạng"),
});
