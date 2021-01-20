import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoEstadoPage } from './pedido-estado';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    //PedidoEstadoPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoEstadoPage),
  ],
  entryComponents: [
    //PedidoEstadoPage
  ],
})
export class PedidoEstadoPageModule { }
