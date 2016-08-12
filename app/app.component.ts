import {Component} from "@angular/core";
// import {User} from './User';
// import {UserService} from './User.service';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    // providers: [
    //     UserService
    // ],
})
export class AppComponent {

    public test: string = '\uf33b';
    public renettest: string ='\uf102';

    // public user: User;

    // constructor(private _userService: UserService) {
    //     this.user = new User();
    // }

    // login() {
    //     if (this.user.username != '' && this.user.password != '') {
    //         let self = this;
    //         console.dump(this.user);

    //         this._userService.register(this.user)
    //             .subscribe(
    //                 data => {
    //                     console.dump(data);
    //                     if (!data.authenticated) {
    //                         alert(data.message);
    //                         return false;
    //                     } else {
    //                         this.user = new User();
    //                         alert('Logged In');
    //                     }
    //                 },
    //                 error => {
    //                     alert(error.message);
    //                 }
    //             );
    //     } else {
    //         alert("Invalid Username/Password");
    //     }

    // }
}
