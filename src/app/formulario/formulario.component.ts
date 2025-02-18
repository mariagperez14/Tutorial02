import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  template: `
    <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">Nombre</label>
        <input id="first-name" type="text" formControlName="nombre">

        <label for="last-name">Apellidos</label>
        <input id="last-name" type="text" formControlName="apellidos">

        <label for="last-name">Edad</label>
        <input id="last-name" type="text" formControlName="edad">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">

        <label for="condiciones">Aceptar condiciones</label>
        <input id="condiciones" type="checkbox" formControlName="aceptar">

        <button type="submit" class="primary">Registrar</button>
      </form>

  `,
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    edad: new FormControl(''),
    email: new FormControl(''),
    condiciones: new FormControl('')
  });

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.nombre ?? '',
      this.applyForm.value.apellidos ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
