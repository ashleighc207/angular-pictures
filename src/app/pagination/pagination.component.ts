import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  @Input() images = [];
  @Input() currentPage = 0;

  navigatePage(idx) {
    this.currentPage = idx;
  }

  constructor() {}

  ngOnInit() {}
}
