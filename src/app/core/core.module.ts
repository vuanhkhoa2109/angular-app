import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '@app/core/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '@env/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ]
})
export class CoreModule { }
