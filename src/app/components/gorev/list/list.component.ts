import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list/list.service';
import { Gorev } from '../form/gorev';
import { DeleteService } from '../../../service/delete/delete.service';
import { UpdateService } from '../../../service/update/update.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, private deleteService: DeleteService, private updateService: UpdateService) { }

  gor: Gorev[];

  ngOnInit(): void {
    this.load();
  }

  // tslint:disable-next-line: typedef
  load() {
    this.listService.getGorev().subscribe(data => { this.gor = data; });
  }

  // tslint:disable-next-line: typedef
  deletegorev(id) {
    this.deleteService.deleteGorev(id).subscribe(data => { this.load(); });
  }

  // tslint:disable-next-line: typedef
  updategorev(id, model, status) {
    this.updateService.updateGorev(id, status, this.gor).subscribe(data => { this.load(); });
  }
}
