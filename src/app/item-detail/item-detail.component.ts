import { Component, OnInit, Input } from '@angular/core';
import { Partido } from '../models/mainmodels';
import { CandidatosService } from '../services/candidatos.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Partido;
  constructor(private itemSvc: CandidatosService) {}
  updateTimeStamp() {
    const date = new Date().getTime();
    this.itemSvc.updateItem(this.item.$key, { timeStamp: date });
  }
  updateActive(value: boolean) {
    this.itemSvc.updateItem(this.item.$key, { active: value });
  }
  ngOnInit(): void {}
  deleteItem() {
    this.itemSvc.deleteItem(this.item.$key);
  }
}
