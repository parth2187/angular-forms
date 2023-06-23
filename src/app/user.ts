export interface User{
    name: string;
    email: string;
    phone: string;
    age: number | null;
    feedback: string;
    gender: 'male' | 'female' | 'other' | '';

}
