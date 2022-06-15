// You can use JS packages on TS adding types for the package
// Sometimes packages include types for it to make it easier to use on JS and TS
import { subDays, format } from 'date-fns';

let myBirthday: Date = new Date(2002, 14, 4);
myBirthday = subDays(myBirthday, 1);
console.log(format(myBirthday, 'dd/MM/yyyy'));
