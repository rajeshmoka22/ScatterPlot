import { makeAutoObservable } from "mobx";

export class OperationState {
  pending = false;
  failed = false;
  completed = false;
  payload = null;
  name = 'operationState';
  error = '';
  constructor(name) {
    this.name = name;
    makeAutoObservable(this);
  }

  start = () => {
    this.pending = true;
  }

  end = (payload) => {
    this.payload = payload;
    this.pending = false;
  }

  fail = (error) => {
    this.payload = {};
    this.error = error || this.error;
    this.pending = false;
  }

  reset = () => {
    this.pending = false;
    this.failed = false;
    this.completed = false;
    this.payload = null;
    this.error = '';
  }

}