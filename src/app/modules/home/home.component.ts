import { Component, OnInit } from '@angular/core';
import { SapFuseService } from '@app/core/services/sap-fuse.service';
import { CUSTOMERS } from '@app/core/services/sap-fuse.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'lxp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  customers: CUSTOMERS = {};

  constructor(private sapFuseService: SapFuseService) {}

  ngOnInit(): void {}
  submit(): void {
    console.log('SUBMIT', this.searchTerm);
    this.sapFuseService.getCustomers(this.searchTerm).subscribe((resp) => {
      this.customers = resp;
    });
  }
}
