import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saiproject';
  constructor(
    private _database: DatabaseService,
  ){
    // _database.connectDB()
  }
}
