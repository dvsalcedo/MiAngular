import { Component } from '@angular/core'

@Component({
  selector: 'chat-app',
  templateUrl: "./chat.component.html"
})
export class ChatComponent {
  public nombre = "David";

  public CambiaNombre() {
    this.nombre = "David salce";
  }
}
