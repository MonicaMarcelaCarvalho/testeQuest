import { OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { instanceOfFormArray } from "./utils/form.util";
import { scrollToTop } from "./utils/util";

export class BaseComponent implements OnDestroy {
    
    public formGroup:     FormGroup;
    public titlePage:     string;
    public STORAGE_FORM:  string = 'storage_form';
    public subscriptions: Subscription[] = [];

    constructor(
        public route: ActivatedRoute,
        public router: Router, 
        public fb: FormBuilder
    ) {
        scrollToTop();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    protected bindFormControls() {
        Object.keys(this.formGroup.controls).forEach(key => {
            if (!instanceOfFormArray(this.formGroup, key)) {
                this[key] = this.formGroup.controls[key];
            }
        });
    }

    protected processErrorResponse(error) {
        console.log(error)
        scrollToTop();
    }

}
