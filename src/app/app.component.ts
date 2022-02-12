import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kingsley here again';
  displayVal = '';
  passing = 'y';
  isDarkTheme = true;

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  /*getName(name: string | number) {
    alert(`Hello ${name}`);
  }

  getAnswer() {
    return 'I am killing it';
  }

  getData(val: string) {
    console.log(val);
  }

  getValue(val: string) {
    console.warn(val);
    this.displayVal = val;
  }

  updateNewData(item: string) {
    this.passing = item;
  }

  loginUser(formData: any) {
    console.log(formData);
  }

  async loadAdmin() {
    this.vcr.clear();
    const { AdminListComponent } = await import(
      './admin-list/admin-list.component'
    );

    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    );
  }

  async loadUser() {
    this.vcr.clear();
    const { UserListComponent } = await import(
      './user-list/user-list.component'
    );

    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    );
  }*/

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
