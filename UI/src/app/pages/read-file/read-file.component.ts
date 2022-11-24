import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.css']
})
export class ReadFileComponent implements OnInit {

  withAWS: boolean = false
  constructor(private service: HttpService ) { }

  ngOnInit(): void {
  }

  startRuning(){
    console.log(this.withAWS);
    
    this.service.runFileReader({aws: this.withAWS}).subscribe(data =>{
      console.log(data);
      
    })
  }

}
