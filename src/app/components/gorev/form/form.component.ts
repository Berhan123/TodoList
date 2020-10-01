import { Component, OnInit } from '@angular/core';
import { Gorev } from './gorev';
import { AddService } from '../../../service/add/add.service';
import { gorevTur } from '../../tur/view';


@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  model: Gorev = new Gorev();
  tmodel: gorevTur = new gorevTur();
  tur: gorevTur[];

  constructor(private eklemeService: AddService) { }

  ngOnInit(): void {

  }


  // tslint:disable-next-line: typedef
  add(model) {
    this.eklemeService.addGorev(this.model).subscribe(data => {
      alert('Görev Eklendi.');
    });
  }
}
