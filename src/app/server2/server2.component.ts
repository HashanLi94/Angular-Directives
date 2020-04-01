import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  serverId = 'serV002';
  serverStatus = 'online';

  getColor(){
    return  this.serverStatus === 'online' ? 'green' : 'red';
  }

  getStatusColor(){
    return this.serverStatus === 'online';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
