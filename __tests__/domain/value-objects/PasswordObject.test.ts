import { Password } from "../../../domain/value-objects/PasswordObject";

describe("Password", () => {
  describe("equals method", () => {
    it("should validate as equals two same passwords", () => {
      const passwordStr = "helloWorld12345";
      const password1 = Password.create(passwordStr);
      const password2 = Password.create(passwordStr);

      expect(password1.equals(password2)).toBe(true);
    });

    it("should validate as different two different passwords", () => {
      const password1 = Password.create("helloWorld12345");
      const password2 = Password.create("12345helloWorld");

      expect(password1.equals(password2)).toBe(false);
    });
  });
});
