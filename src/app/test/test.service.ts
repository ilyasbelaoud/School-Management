import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() {
    console.log('TestService constructed');
  }
  
  getMessage(): string {
    return 'Hello from TestService';
  }
} 