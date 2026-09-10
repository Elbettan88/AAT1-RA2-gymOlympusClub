import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  private api = inject(ApiService);
  clientes = signal<any[]>([]);
  
  nuevoCliente = {
    nombre: '', apellido: '', dpi: '', telefono: '', correo: '', fechaNacimiento: '', estado: 'Activo'
  };

  ngOnInit() { this.cargar(); }

  cargar() {
    this.api.get('clientes').subscribe(res => this.clientes.set(res));
  }

  guardar() {
    this.api.post('clientes', this.nuevoCliente).subscribe(() => {
      this.cargar();
      this.nuevoCliente = { nombre: '', apellido: '', dpi: '', telefono: '', correo: '', fechaNacimiento: '', estado: 'Activo' };
    });
  }

  eliminar(id: string) {
    this.api.delete('clientes', id).subscribe(() => this.cargar());
  }
}
