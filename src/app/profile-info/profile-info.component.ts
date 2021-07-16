import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor() { }

  user = 'Vishal Agarwal'
  ghome = 'Rozen';
  dp = 'https://material.angular.io/assets/img/examples/shiba1.jpg'
  homeStatus = 'active';

  alterHomeStaus(){
    this.homeStatus = (this.homeStatus == 'unactive') ? 'active' : 'unactive';
  }


  ngOnInit(): void {}

}
