import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeService } from './services/fake.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [FakeService]
})
export class CoreModule { }
