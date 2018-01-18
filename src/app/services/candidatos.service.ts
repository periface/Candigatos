import { Partido } from "./../models/mainmodels";
import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFireObject } from 'angularfire2/database/interfaces';
@Injectable()
export class CandidatosService {
  private basePath = "/partidos";
  items: AngularFireList<Partido> = null; //  list of objects
  item: AngularFireObject<Partido> = null; //   single object
  selectedItem = new Partido();
  constructor(private db: AngularFireDatabase) {
    this.getItemsList();
  }
  getItemsList(query = {}): AngularFireList<Partido> {
    this.items = this.db.list(this.basePath);
    return this.items;
  }
  // Return a single observable item
  getItem(key: string): AngularFireObject<Partido> {
    const itemPath = `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath);
    return this.item;
  }
  createItem(item: Partido): void {
    this.items.push(item);
  }
  // Update an existing item
  updateItem(key: string, value: any): void {
    this.items.update(key, value).catch(error => this.handleError(error));
  }
  // Deletes a single item
  deleteItem(key: string): void {
    this.items.remove(key).catch(error => this.handleError(error));
  }
  // Deletes the entire list of items
  deleteAll(): void {
    this.items.remove().catch(error => this.handleError(error));
  }
  // Default error handling for all actions
  private handleError(error) {
    console.log(error);
  }
}
