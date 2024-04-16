import { Address } from "../../../domain/value-objects/AddressObject";

const addressData = {
  address: "742 Evergreen Terrace",
  city: "Springield",
  code: "12345",
  zip: "12345ABC",
};
describe("Address", () => {
  describe("equals method", () => {
    it("should validate as equals two same addresses", () => {
      const address1 = Address.create(addressData);
      const address2 = Address.create(addressData);

      expect(address1.equals(address2)).toBe(true);
    });

    it("should validate as different two addresses", () => {
      const address1 = Address.create(addressData);
      const address2 = Address.create({
        ...addressData,
        address: "Avenida Siempreviva 742",
      });

      expect(address1.equals(address2)).toBe(false);
    });

    it("should throw an error if address is empty", () => {
      const address = {
        ...addressData,
        address: "",
      };
      expect(() => Address.create(address)).toThrow("Address is required");
    });

    it("should throw an error if city is empty", () => {
      const address = {
        ...addressData,
        city: "",
      };
      expect(() => Address.create(address)).toThrow("City is required");
    });

    it("should throw an error if code is empty", () => {
      const address = {
        ...addressData,
        code: "",
      };
      expect(() => Address.create(address)).toThrow("Code is required");
    });

    it("should throw an error if zip is empty", () => {
      const address = {
        ...addressData,
        zip: "",
      };
      expect(() => Address.create(address)).toThrow("Zip is required");
    });
  });
});
