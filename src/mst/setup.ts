import { applySnapshot, getSnapshot, onSnapshot } from "mobx-state-tree";
import { RootModel } from ".";

export const setupRootStore = () => {
  const rootTree = RootModel.create({
    Employer: {
      id: "1",
      name: "vals cesar",
      location: "goma, himbi 1",
      employees: [],
    },
  });
  onSnapshot(rootTree, (snapshot) => console.log("snapshort", snapshot));

  return { rootTree };
};
