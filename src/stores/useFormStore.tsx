import { create } from "zustand";
import { Step1Form, Step2Form, Step3Form, User } from "../types/formTypes";

const stepVariant = {
  1: "step1",
  2: "step2",
  3: "step3",
};

type setDataType =
  | { step: 1; data: Step1Form }
  | { step: 2; data: Step2Form }
  | { step: 3; data: Step3Form };

type FormStore = {
  step1: Step1Form | null;
  step2: Step2Form | null;
  step3: Step3Form | null;
  user: User | null;
  setUser: (user: User) => void;
  setData: (data: setDataType) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  step1: null,
  step2: null,
  step3: null,
  user: null,
  setUser: (user: User) =>
    set(() => ({ user, step1: null, step2: null, step3: null })),
  setData: ({ step, data }) =>
    set((state) => ({ ...state, [stepVariant[step]]: data })),
}));
