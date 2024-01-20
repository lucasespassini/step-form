export type Step1Form = {
  nome: string;
  sobrenome: string;
};

export type Step2Form = {
  email: string;
  celular: string;
};

export type Step3Form = {
  foto_usuario: FileList;
};

export type User = Step1Form & Step2Form & Step3Form;
