import { Component } from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    value: any;

    constructor(private modalController: ModalController, private router: Router, private actionctrl: ActionSheetController) {

    }

    async openModal() {
        const modal = await this.modalController.create({
            component: ModalPage,
            componentProps: {custom_id: this.value}
        });
        modal.present();
    }

    goToCanvas() {
        this.router.navigateByUrl('/canvas-draw');
    }
    async swipeEvent() {

        const actionSheet = await  this.actionctrl.create({
            header: 'Action Sheet',
            buttons: [
                {text: 'Share', icon: 'ios-share',  handler: () => {console.log('Share Clicked'); }},
                { text: 'Favorite', icon: 'heart-empty',  handler: () => { console.log('Favorite clicked'); } },
                { text: 'Download', icon: 'ios-download',  handler: () => { console.log('Play clicked'); } },
                { text: 'Delete', icon: 'ios-trash',  handler: () => { console.log('Delete clicked'); } },
                { text: 'Close', role: 'cancel', icon: 'close',  handler: () => { console.log('Cancel clicked'); } }
            ]
        });
        actionSheet.present();
    }
}



