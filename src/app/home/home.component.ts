import { Component, OnInit } from "@angular/core";
import { CandidatosService } from "../services/candidatos.service";
import { AngularFireList } from "angularfire2/database";
import { Partido } from '../models/mainmodels';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  items: Partido[] = [];
  constructor(private candidatos: CandidatosService) {}

  ngOnInit() {
    this.candidatos
      .getItemsList()
      .snapshotChanges()
      .subscribe(data => {
        data.forEach(elm => {
          const y = elm.payload.toJSON();
          y['$key'] = elm.key;
          this.items.push(y as Partido);
        });
      });
    console.log(this.items);
  }
}
