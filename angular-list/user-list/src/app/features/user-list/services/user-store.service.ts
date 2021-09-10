import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  // private _searchTerm$: BehaviorSubject<string>;
  // public searchTerm$: Observable<string>;
  private _searchTerm$ = new BehaviorSubject<string>('');
  public term$ = this._searchTerm$.asObservable();

  
  constructor() { }

  setSearchTerm(filter: string): void {
    this._searchTerm$.next(filter);
}
}
