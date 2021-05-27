import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name = 'ZADIAL';
  existe = 0;
  red0 = 'Email: zadial@gmail.com';
  red1 = 'Facebook: @zadial';
  red2 = 'Instagram: @zadial';
  red3 = 'Twitter: @zadial';

  constructor() { }

  ngOnInit(): void {
  }
}
