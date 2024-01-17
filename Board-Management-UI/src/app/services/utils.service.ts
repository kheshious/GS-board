import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public sortProductsDesc(array: Task[]) {
    return array.sort((a, b) => b.id - a.id);
  }

  public sortProductsAsc(array: Task[]) {
    return array.sort((a, b) => a.id - b.id);
  }
}
