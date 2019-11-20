import AuthService from "../authentication/auth"

export class AuthGuardService {
    
      if (AuthService.isLogged() && this.AuthService.isPermited('VISITOR')) { // If its logged in and its role is visitor
        return true;
      }
  
      if (!this.authService.isLogged()) { // if its not logged in
        console.log('Error login');
      }
  
      if (this.router.url === '/') {  // if the router is the app route
        this.router.navigate(['/login']);
      }
      return false;
    }
  