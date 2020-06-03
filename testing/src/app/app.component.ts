import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from './services/rest.service';
import { Country } from './models/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  countryList: Country[] = [];
  formErrors = {
    name: false,
    lastname: false,
    email: false,
    country: false,
    gender: false,
    phone: false
  };

  constructor(
    private restService: RestService
  ) { }

  ngOnInit(): void {
    this.restService.getCountries().subscribe((res: []) => {
      res.forEach(element => {
        this.countryList.push(new Country(element));
      });
    });
    this.form = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]*')
        ]
      ),
      lastName: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]*')
        ]
      ),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.email
        ]
      ),
      country: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      gender: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      phone: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[(][0-9]{2}[)][ ][0-9]{3}[-][0-9]{3}[-][0-9]{2}')
        ]
      )
    });
  }

  onSubmit() {
    console.log(this.form.value);
    alert('Gracias por registrarte ' + this.form.value.name);
    this.form.reset();
  }
}
