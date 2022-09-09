import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  persona: any = { id: null };
  list: any[] = []
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.list.push({ id: 1, names: "Baruch Iván", lastNames: "Medina Ramos" });
    this.list.push({ id: 2, names: "Oscar Adrian", lastNames: "Valdez Meraz" });
    this.list.push({ id: 3, names: "David Dionisio", lastNames: "Reyes Moreno" });
  }

  EliminaRegistro(item: any): void {
    let index = this.list.findIndex(f => f.id == item.id);
    this.list.splice(index, 1);
    this.toastr.warning("Persona " + item.id + " eliminada");
  }

  onSubmit(): void {
    if (this.persona === undefined) {
      this.toastr.error("Modelo vacío.");
      return;
    }
    if (this.persona.names === undefined || this.persona.names.trim() == "") {
      this.toastr.error("Nombres vacíos.");
      return;
    }
    if (this.persona.lastNames === undefined || this.persona.lastNames.trim() == "") {
      this.toastr.error("Apellidos vacíos.","Data Empty");
      return;
    }

    let ids = this.list.map(object => {
      return object.id;
    });

    if (ids.length <= 0)
      this.persona.id = 1;
    else
      this.persona.id = (Math.max(...ids)) + 1;

    this.list.push(this.persona);
    this.persona = { id: null };
    this.toastr.success('Persona agregada', 'Ok');
  }
}
