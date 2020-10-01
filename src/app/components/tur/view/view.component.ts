import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../../service/list/list.service';
import { Gorev } from '../../gorev/form/gorev';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private listService: ListService, private activatedRoute: ActivatedRoute) { }

  gor: Gorev[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.listService.getOnGorev(params.tAdi).subscribe(data => { this.gor = data; });
    });
  }
}
