import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-arguement',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.scss'],
})
export class ArgumentComponent implements OnInit {
  personForm: FormGroup;
  topicForm: FormGroup;
  argumentForm: FormGroup;
  contactsForm: FormGroup;
  contactArray = [{}];

  constructor(private readonly formBuilder: FormBuilder) {
    this.personForm = this.formBuilder.group({
      personA: ['', [Validators.required]],
      personB: ['', [Validators.required]],
    });

    this.topicForm = this.formBuilder.group({
      topic: ['', [Validators.required]],
    });

    this.argumentForm = this.formBuilder.group({
      argumentA: [''],
      argumentB: [''],
    });

    this.contactsForm = this.formBuilder.group({
      contact0: ['', Validators.required],
    });
  }

  addSkill(index: number) {
    this.contactsForm.addControl(
      `contacts${index}`,
      this.formBuilder.control(
        `contact${index}`,
        new FormControl([], Validators.required)
      )
    );
  }

  ngOnInit(): void {}

  onTopicChange(quill: any) {
    console.log(quill.text);
  }
}
