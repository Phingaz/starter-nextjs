import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setToLocalStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getFromLocalStorage = (key: string) => localStorage.getItem(key);

export const getItemFromCookie = (item: any) =>
  document.cookie
    .split(';')
    .find((row) => row.startsWith(item))
    ?.split('=')[1];

export const clearCookies = () => {
  document.cookie
    .split(';')
    .forEach(
      (c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`)),
    );
};

export const clearSessionStorage = () => sessionStorage.clear();

export const isEmpty = (param: any) =>
  param === null ||
  typeof param === 'undefined' ||
  param.length === 0 ||
  param === '' ||
  Object.keys(param).length === 0 ||
  param.trim() === '';

export function capitalizeFirstLetter(string: string) {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}

export const zodInputValidators = {
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  phone: z.string().min(10),
  number: z.number(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}:\d{2}$/),
  boolean: z.boolean(),
};

export const setUrlParams = (items: Object) => {
  const params = new URLSearchParams();
  Object.entries(items).forEach(([key, value]) => {
    params.set(key, value);
  });
  window.history.replaceState({}, '', `?${params}`);
};

export const cleanNumber = (number: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 2,
  });

  return formatter.format(number);
};
