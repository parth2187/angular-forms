import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  put(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string): void {
    localStorage.clear();
  }
}


