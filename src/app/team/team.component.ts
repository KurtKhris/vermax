import { Component, OnInit } from '@angular/core';
import { faCoffee, faPhone, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMobile =faMobile;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
