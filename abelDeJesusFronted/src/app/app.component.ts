import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuariosModel } from './models/usuario.model';
import { DepartamentosModel } from './models/departamentos.model';
import { DepartamentosService } from './services/departamentos.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarios: UsuariosModel[] = [];
  departamentos: DepartamentosModel[] = [];
  forma: any;

  constructor(private usuariosService: UsuariosService,
              private departamentosService: DepartamentosService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.forma = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      cedula: ['', Validators.required],
      genero: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      departamento: ['', Validators.required],
      cargo: ['', Validators.required],
      supervisor_inmediato: ['', Validators.required],
    });
    
    this.usuariosService.refresh$().subscribe(() => this.getUsuarios());
    this.departamentosService.refresh$().subscribe(() => this.getDepartamentos());
    
    this.getUsuarios();
    this.getDepartamentos();
  }

  getUsuarios() {
    this.usuariosService.getAll().subscribe((resp: UsuariosModel[]) => this.usuarios = resp);
  }

  getDepartamentos() {
    this.departamentosService.getAll().subscribe((resp: DepartamentosModel[]) => this.departamentos = resp);
  }

  guardar() {
    let usuario: UsuariosModel = this.forma.getRawValue();
    
    this.usuariosService.crear(usuario).subscribe(resp => {
      console.log(resp);
    });

    this.forma.reset({
      nombres: '',
      apellidos: '',
      cedula: '',
      genero: '',
      fecha_nacimiento: '',
      departamento: '',
      cargo: '',
      supervisor_inmediato: ''
    });
  }
  
}
