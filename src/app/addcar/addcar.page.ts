import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from 'src/sdk/custom/car.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.page.html',
  styleUrls: ['./addcar.page.scss'],
})
export class AddcarPage implements OnInit {

  images;
  constructor(private formBuilder: FormBuilder, private carService: CarService, private router: Router) { }
  registerCar: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.registerCar = this.formBuilder.group({
      reg: ['', [Validators.required]],
      model: ['', [Validators.required]],
      make: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(4), Validators.maxLength(4)]],
      color: ['', [Validators.required, Validators.minLength(3)]],
      milage: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      status: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  save() {
    // this.loading = true;

    this.carService.addListingImages(this.registerCar.controls.reg.value,
    this.registerCar.controls.model.value,
    this.registerCar.controls.make.value,
    this.registerCar.controls.year.value,
    this.registerCar.controls.color.value,
    this.registerCar.controls.milage.value,
    this.registerCar.controls.price.value,
    this.registerCar.controls.status.value,
    this.images).subscribe(
      data => {
        console.log('got response from server', data);
       //  this.loading = false;
       // tslint:disable-next-line: align
        this.router.navigateByUrl('/home');
      },
      error => {
       // this.loading = false;
        console.log('error', error);
      }
    );
    this.registerCar.reset();
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

}
