import { Component, OnInit } from "@angular/core";
import { CandidatosService } from "../services/candidatos.service";
import { Partido } from "../models/mainmodels";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"]
})
export class AddCategoryComponent implements OnInit {
  constructor(private candidatos: CandidatosService) {}

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form) {
    console.log(form.value);
    if (form.value.$key == null) {
      this.candidatos.createItem(form.value);
    }
    this.resetForm(form);
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      if (this.candidatos.selectedItem != null) {
        form.reset();
      }
    }
    this.candidatos.selectedItem = new Partido();
  }
}
