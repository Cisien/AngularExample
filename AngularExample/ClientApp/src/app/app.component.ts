import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './services/data.service'
import { Http } from '@angular/http'
import 'rxjs/Rx'
import { Observable } from 'rxjs/Rx'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent {
    constructor(public dataService: DataService, private fb: FormBuilder) {
        dataService.loadData().subscribe();
        
        this.form = fb.group({
            item: [null, Validators.required],
            validate: ''
        });
    }
    form: FormGroup;
    item: string;
    
    title = 'app';

    addItem(form: FormGroup) {
        this.dataService.addItem(form.controls.item.value);
    }

    removeItem(item: string) {
        this.dataService.removeItem(item)
    }
}
