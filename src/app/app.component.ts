import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appTest'; 

  constructor(private matDialog)

}


//https://www.youtube.com/watch?v=jGbP620NahE
//https://www.youtube.com/watch?v=ZgT6tQodLnM