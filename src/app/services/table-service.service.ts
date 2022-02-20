import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Information } from '../models/TableData.model';

@Injectable({
  providedIn: 'root'
})

export class TableServiceService {

  constructor() {

  }

  trainList: Information[] = [];


  saveFormData(info:Information){
    this.trainList.push(info);
    console.log(this.trainList);
    
  }

  getInfoData(): Observable<Information[]> {
    this.trainList = [
      {
        train_no: "4007",
        train_name: "Sadbhavana EXP",
        train_exptime: "03.30",
        train_ad: "A",
        train_pf: "4",
      },
      {
        train_no: "12676",
        train_name: "Kovai SF ExP",
        train_exptime: "07.10",
        train_ad: "D",
        train_pf: "3",
      },
      {
        train_no: "02256",
        train_name: "Yercaud EXP",
        train_exptime: "08.55",
        train_ad: "D",
        train_pf: "1",
      },
      {
        train_no: "0775",
        train_name: "Shatabdi",
        train_exptime: "11.55",
        train_ad: "D",
        train_pf: "1",
      },
      {
        train_no: "0775",
        train_name: "Shatabdi",
        train_exptime: "11.55",
        train_ad: "D",
        train_pf: "1",
      },
      {
        train_no: "0775",
        train_name: "Shatabdi",
        train_exptime: "11.55",
        train_ad: "D",
        train_pf: "1",
      },
      {
        train_no: "0775",
        train_name: "Shatabdi",
        train_exptime: "11.55",
        train_ad: "D",
        train_pf: "1",
      },
      {
        train_no: "0775",
        train_name: "Shatabdi",
        train_exptime: "11.55",
        train_ad: "D",
        train_pf: "1",
      },
      {
        train_no: "0775",
        train_name: "Shatabdi",
        train_exptime: "11.55",
        train_ad: "D",
        train_pf: "1",
      }
    ]
    return of(this.trainList).pipe(map(res => <any>res));

  }


}
