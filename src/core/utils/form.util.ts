import { FormArray, FormGroup } from "@angular/forms";

/**
 * Verifica se determinado controle do formulário é um FormArray.
 * 
 * @param formGroup Formulário que contém o controle.
 * @param key Nome do controle a ser verificado.
 */
export function instanceOfFormArray(formGroup: FormGroup, key: string) {
    return formGroup.controls[key] instanceof FormArray;
}
