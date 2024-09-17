import AppConstants from '../constants/app_constant'

class AppFucntions {
    static handleErrorImage = (e) => {
        e.target.src = AppConstants.logoImageUrl;
    }
}
export default AppFucntions;