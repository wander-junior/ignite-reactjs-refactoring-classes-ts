import { FormProps } from '@unform/core';


export interface FoodType {
    id: number,
    name: string,
    description: string,
    price: string,
    available: boolean,
    image: string
}

export interface FormDataProps extends FormProps {
    image: string;
    name: string;
    price: string;
    description: string;
  }
  