import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/core/services/fake.service';
import { FakePost } from 'src/app/shared/models/fake-post';

@Component({
  selector: 'app-fake-service-data',
  templateUrl: './fake-service-data.component.html',
  styleUrls: ['./fake-service-data.component.css']
})
export class FakeServiceDataComponent implements OnInit {

  fakePosts: FakePost[];

  constructor(private service: FakeService) { }

  ngOnInit(): void {
   // this.service.get().subscribe(x => console.log(x));
   this.service.get().subscribe(x => this.fakePosts = x);
  }

}
