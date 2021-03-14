import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = { isNew: true, description: "", amount: 0 };
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  isNewItem!: boolean;

  constructor() { }

  ngOnInit(): void {
    //if item has value
    if (!this.item.isNew) {
      console.log("If this.item",this.item)
      //this means that an existing item object was passed.
      //this is not a new item.
      this.isNewItem = false
    }
    else {
      this.isNewItem = true;
    }
  }
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value)
    form.reset();
  }

}
