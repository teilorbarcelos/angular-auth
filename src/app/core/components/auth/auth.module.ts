import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { AuthRoutingModule } from './auth-routing.module'
import { SignComponent } from './pages/sign/sign.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AuthModule {}
