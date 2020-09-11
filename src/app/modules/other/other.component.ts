import { Component, OnInit, Inject } from '@angular/core';
import { CUSTOMER, CUSTOMERS } from '@app/core/services/sap-fuse.models';
import { SapFuseService } from '@app/core/services/sap-fuse.service';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'lxp-pop-up-component',
  template: '<span class="pink">{{data}}</span>',
  styles: [
    `
      .pink {
        color: hotpink;
      }
    `,
  ],
})
export class PopUpComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}

@Component({
  selector: 'lxp-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
  fields = ['customerName', 'form', 'street', 'postcode', 'city', 'country', 'phone', 'email', 'discount', 'language'];
  custType = ['B', 'P'];
  customerModel: any = {};
  newCust: CUSTOMERS = {};
  durationInSeconds = 5;

  constructor(private sapFuseService: SapFuseService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar(message: string): void {
    this.snackBar.openFromComponent(PopUpComponent, {
      duration: this.durationInSeconds * 1000,
      data: message,
    });
  }

  submit(): void {
    console.log('New Customer', this.customerModel);
    this.sapFuseService.createCustomer(this.customerModel).subscribe(
      (resp) => {
        this.newCust = resp;
        const msg =
          resp && resp.CUSTOMER_DATA && resp.CUSTOMER_DATA.CUSTNAME
            ? '🐫 It works - lets have a camel party! 🐪'
            : '🐫 Oops - no party for you 🐪';
        this.openSnackBar(msg);
      },
      (err) => {
        this.openSnackBar(`🐫 ${err.statusText} - no party for you 🐪`);
      }
    );
  }
}
