import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { TermDialogComponent } from './term-dialog/term-dialog.component';
import { BaseComponent } from 'src/core/base.component';

@Component({
  selector: 'app-painel-form',
  templateUrl: './painel-form.component.html',
  styleUrls: ['./painel-form.component.scss']
})
export class PainelFormComponent extends BaseComponent implements OnInit {

    constructor(
        public fb: FormBuilder,
        public route: ActivatedRoute,
        public sanitizer: DomSanitizer,
        public router: Router, 
        public dialog: MatDialog
    ) {
        super( route, router, fb);
    }

    ngOnInit() {
        this.titlePage = "INFORMAÇÕES RECEBIDAS!";
    }

    clickNoTerm() {
        // Ao escolher “NAO”, o usuário deverá ser redirecionado para a tela #4
        const dialogRef = this.dialog.open(TermDialogComponent, { width: '600px' });

        dialogRef.afterClosed().subscribe(() => {
        console.log("------------Fechar o Registro-------------");
        });
    }

    clickYesterm() {
        // Ao escolher “SIM”, o usuário deverá ser redirecionado para a tela #3
        this.router.navigate([`/question/true`]);
    }
}
