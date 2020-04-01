import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'serV';
  // serverCreationStatus = 'Server is not created yet..!!!';
  serverCreate = false;
  servers = ['serV001', 'serV002', 'serV002'];


  onServerCreation(){
    return this.serverCreate = true;
    // return this.serverCreationStatus = "Server is created Succusfully. Sever name is " + this.serverName;
     this.servers.push(this.serverName);
  }


  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
      }, 2000
    );
  }

  ngOnInit(): void {
  }
}




