import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-membresias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './membresias.component.html'
})
export class MembresiasComponent implements OnInit {
  private api = inject(ApiService);
  membresias = signal<any[]>([]);
  clientes = signal<any[]>([]);

  nuevaMembresia = { clienteId: '', tipo: 'Mensual', precio: 0, fechaFin: '', estado: 'Vigente' };

  ngOnInit() {
    this.cargar();
    this.api.get('clientes').subscribe(res => this.clientes.set(res));
  }

  cargar() {
    this.api.get('membresias').subscribe(res => this.membresias.set(res));
  }

  guardar() {
    this.api.post('membresias', this.nuevaMembresia).subscribe(() => {
      this.cargar();
      this.nuevaMembresia = { clienteId: '', tipo: 'Mensual', precio: 0, fechaFin: '', estado: 'Vigente' };
    });
  }

  eliminar(id: string) {
    this.api.delete('membresias', id).subscribe(() => this.cargar());
  }
}
