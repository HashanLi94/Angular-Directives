import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
  serverId = 'serV001';
  severStatus = 'offline';

  // ngStyle directive
  getColor(){
    return this.severStatus === 'online' ? 'green' : 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
