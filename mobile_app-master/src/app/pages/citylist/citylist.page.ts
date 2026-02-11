






import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.page.html',
  styleUrls: ['./citylist.page.scss'],
})
export class CitylistPage implements OnInit {
  locationArr: any = [];
  filteredLocations: any = [];
  cityform!: FormGroup;
  search_term: string;
  locId: any;
  courseId: any;
  selected_loc: any=[];
id: any;
  constructor(
    public router: Router,
    public service: ServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.selected_loc = [];
    this.cityform = this.formBuilder.group({
      searchvalue: ['']
    });
    this.getLoc();

  }

  getLoc() {
    this.service.getLocation(this.cityform.value.searchvalue).subscribe(res => {
      this.locationArr = res.response_data;
      this.filteredLocations = this.locationArr;

    });
  }

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredLocations = this.locationArr.filter(item =>
      item.city.toLowerCase().includes(searchTerm)

    );

  }

  clglistbyloc1(id: any) {

    this.router.navigate(['/clglist']);
  }
clglistbyloc(event: any, id: any) {
  if (event.detail.checked) {
    if (this.selected_loc) {
      this.selected_loc += `${id},`;
    } else {
      this.selected_loc = `${id},`;
    }
  } else {
    const idsArray = this.selected_loc.split(',').filter(Boolean); // filter out empty strings
    const index = idsArray.indexOf(id.toString());
    if (index !== -1) {
      idsArray.splice(index, 1);
    }
    this.selected_loc = idsArray.join(',') + ','; // Add back the comma
  }
  this.selected_loc = this.selected_loc.replace(/ +$/, ''); // Remove any trailing commas
  localStorage.setItem('selectedLocationIds', this.selected_loc);
  
}

}
