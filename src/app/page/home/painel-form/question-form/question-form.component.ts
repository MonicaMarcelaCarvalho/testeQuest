import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BaseComponent } from 'src/core/base.component';
import { isEmpty, isNoEmpty, scrollToTop } from 'src/core/utils/util';
import { QuestionForm } from '../painel-form.model';
import { PainelFormService } from '../painel-form.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent extends BaseComponent implements OnInit {

    public question1:  AbstractControl;
    public question2:  AbstractControl;
    public question3:  AbstractControl;
    public questionA0: AbstractControl;
    public questionA1: AbstractControl;
    public questionA2: AbstractControl;
    public questionA3: AbstractControl;

    public indSelected:     string;
    public group:           any;

    public flagTipoOperacao         = [];
    public formQuestion             = [];
    public isVisibleOption: boolean = true;

    constructor(
        public fb: FormBuilder,
        public route: ActivatedRoute,
        private service: PainelFormService,
        public router: Router
    ) { 
        super( route, router, fb);

        this.route.params.subscribe((params: Params) => {
            this.indSelected = params.indOption;
        });
    }

    ngOnInit() {
        this.configFormBuilder();
        this.initializeVariables();
    }

    onSubmit(event) {
        event.preventDefault();
        if(!this.validateFormBeforeRequest()) return false;
        this.submit();
    }

    validateFormBeforeRequest(): boolean {
        if(!this.formGroup.valid) return false;
        return true;
    }

    loadSearchTipoOperacao() {
        this.service.findTipoOperacao().subscribe(
            res => this.responseFlagSuccess(res),
            err => this.processErrorResponse(err)
        );
    }

    optionQuestion(event) {
        return this[event].value;
    }

    checked(model: QuestionForm, indice: number, params: string) {
        return model.question[indice].descBreve === this[params].value;
    }

    isVisibleSalvar(): boolean {
        return this.isVisibleOption && isEmpty(this.group);
    }

    isVisibleForm(): boolean {
        return this.indSelected == 'true';
    }

    isVisibleSelect(model: QuestionForm): boolean {
        return model.indFlag == 1;
    }

    isVisibleSucess(): boolean {
        return !this.isVisibleOption || isNoEmpty(this.group) || !this.isVisibleForm();
    }

    back() {
        this.router.navigate([`../`]);
    }

    update() {
        sessionStorage.removeItem(this.STORAGE_FORM);

        this.formGroup.enable();
        this.isVisibleOption = true;
        this.group           = null;
    }

    private initializeVariables() {
        this.titlePage = "PERFIL DO INVESTIDOR – QUESTIONÁRIO";
        this.loadAutoCompletesOnInit();
        this.findByIdQuestion();
        this.findById();
    }

    private loadAutoCompletesOnInit() {
        this.loadSearchTipoOperacao();
    }

    private configFormBuilder() {
        const formGroupBuilder = {
            question1:  [null , Validators.required],
            question2:  [null , Validators.required],
            question3:  [null , Validators.required],
            questionA0: [null , Validators.required],
            questionA1: [null , Validators.required],
            questionA2: [null , Validators.required],
            questionA3: [null , Validators.required]
        };

        this.formGroup = this.fb.group(formGroupBuilder);
        this.bindFormControls();
    }

    private submit() {
        this.isVisibleOption = false;

        scrollToTop();
        sessionStorage.setItem(this.STORAGE_FORM, JSON.stringify(this.formGroup.value));
        this.formGroup.disable();
    }

    private findByIdQuestion() {
        this.service.findById().subscribe(
            res => this.responseprocessSuccess(res),
            err => this.processErrorResponse(err)
        );
    }

    private findById() {
        this.group = sessionStorage.getItem(this.STORAGE_FORM);

        if(this.group) {
            this.formGroup.setValue(JSON.parse(this.group));
            this.formGroup.disable();
        }
        scrollToTop();
    }

    private responseprocessSuccess(res) {
        this.formQuestion = res;
    }

    private responseFlagSuccess(res) {
        this.flagTipoOperacao = res;
    }

}
