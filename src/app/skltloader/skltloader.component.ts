import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skltloader',
  templateUrl: './skltloader.component.html',
  styleUrls: ['./skltloader.component.css']
})
export class SkltloaderComponent implements OnInit{

  ngOnInit() {
    this.getData()
  }

  data: any
  len: any
  constructor(private service: DataService) {}

  getData() {
    // this.service.getData().subscribe(res => {
    //   this.data = res
    //   this.len = this.data.length
    // })
  }
}
