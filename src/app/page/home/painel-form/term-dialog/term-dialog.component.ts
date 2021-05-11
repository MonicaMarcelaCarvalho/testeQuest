import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-term-dialog',
  templateUrl: './term-dialog.component.html',
  styleUrls: ['./term-dialog.component.scss']
})
export class TermDialogComponent implements OnInit {
  
  public indTerm: boolean;
  public titlePage: string = "Termo";

  constructor(
    public dialogRef: MatDialogRef<TermDialogComponent>,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}

  isDisabledTerm(): boolean {
    return this.indTerm !== true;
  }

  routerBtn() {
    this.dialogRef.close(true);
    this.router.navigate([`/question/false`]);
  }

  onChangeChecker(value: MatCheckboxChange) {
    this.indTerm = value.checked === true ? true : false;
  }

  close() {
    this.dialogRef.close(true);
  }
}
