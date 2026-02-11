// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ShortlistService {
//   private shortlistedColleges = new Set<string>(); // Maintain a set of shortlisted colleges
//   private shortlistSubject = new BehaviorSubject<Set<string>>(this.shortlistedColleges);

//   // Observable to track changes to the shortlist
//   shortlist$ = this.shortlistSubject.asObservable();

//   // Add college to shortlist
//   addToShortlist(collegeId: string): void {
//     this.shortlistedColleges.add(collegeId);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }

//   // Remove college from shortlist
//   removeFromShortlist(collegeId: string): void {
//     this.shortlistedColleges.delete(collegeId);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }

//   // Check if a college is shortlisted
//   isShortlisted(collegeId: string): boolean {
//     return this.shortlistedColleges.has(collegeId);
//   }

//   // Set initial shortlist (e.g., from API response)
//   setInitialShortlist(colleges: string[]): void {
//     this.shortlistedColleges = new Set(colleges);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
// }



import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortlistService {
  private shortlistedColleges = new Set<string>(); // Maintain a set of shortlisted colleges
  private shortlistSubject = new BehaviorSubject<Set<string>>(this.shortlistedColleges);

  shortlist$ = this.shortlistSubject.asObservable();

  constructor() {
    this.loadShortlistedColleges(); // Load shortlist from localStorage on initialization
  }

  addToShortlist(collegeId: string): void {
    this.shortlistedColleges.add(collegeId);
    this.saveShortlistedColleges(); // Save updated shortlist to localStorage
    this.shortlistSubject.next(this.shortlistedColleges);
  }

  removeFromShortlist(collegeId: string): void {
    this.shortlistedColleges.delete(collegeId);
    this.saveShortlistedColleges(); // Save updated shortlist to localStorage
    this.shortlistSubject.next(this.shortlistedColleges);
  }

  isShortlisted(collegeId: string): boolean {
    return this.shortlistedColleges.has(collegeId);
  }

  setInitialShortlist(colleges: string[]): void {
    this.shortlistedColleges = new Set(colleges);
    this.saveShortlistedColleges(); // Save updated shortlist to localStorage
    this.shortlistSubject.next(this.shortlistedColleges);
  }

  private saveShortlistedColleges(): void {
    const collegeIds = Array.from(this.shortlistedColleges);
    localStorage.setItem('shortlistedColleges', JSON.stringify(collegeIds));
  }

  private loadShortlistedColleges(): void {
    const storedColleges = localStorage.getItem('shortlistedColleges');
    if (storedColleges) {
      this.shortlistedColleges = new Set(JSON.parse(storedColleges));
      this.shortlistSubject.next(this.shortlistedColleges);
    }
  }
}


