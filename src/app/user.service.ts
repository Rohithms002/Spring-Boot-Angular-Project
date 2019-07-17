import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user=[
    {
      name : "Rohith",
      company : "Test Yantra",
      city : "Bangalore",
      phoneNo : 99999999
    },
    {
      name : "Raj",
      company : "Test Qspider",
      city : "BAndhra",
      phoneNo : 888888888
    },
    {
      name : "ggg",
      company : "TCS",
      city : "Mangalore",
      phoneNo : 7777777777
    }
  ];
}
