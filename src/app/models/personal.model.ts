export class Personal {
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  gender: 'masculino' | 'feminino' | 'outros';

  constructor(
    name: string,
    birthDate: string,
    email: string,
    phone: string,
    gender: 'masculino' | 'feminino' | 'outros',
  ) {
    this.name = name;
    this.birthDate = birthDate;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
  }
}
