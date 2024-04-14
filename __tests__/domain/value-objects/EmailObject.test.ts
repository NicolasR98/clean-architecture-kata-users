import { Email } from "../../../domain/value-objects/EmailObject";

describe("Email", () => {
  describe("equals method", () => {
    it("should validate as equals two same emails", () => {
      const emailStr = "test@email.com";
      const email1 = Email.create(emailStr);
      const email2 = Email.create(emailStr);

      expect(email1.equals(email2)).toBe(true);
    });

    it("should validate as different two different emails", () => {
      const email1 = Email.create("test1@email.com");
      const email2 = Email.create("test2@email.com");

      expect(email1.equals(email2)).toBe(false);
    });
  });
});
