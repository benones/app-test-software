import { groupsGetAll } from "@storage/group/groupsGetAll";

jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Load Groups", () => {
  it("Carregar Grupos", async () => {
    const groups = await groupsGetAll();
    console.log(groups);
    expect(groups.length).toBe(0);
  });
});
