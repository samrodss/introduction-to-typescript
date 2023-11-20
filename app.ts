import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DioAccount } from './class/DioAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
peopleAccount.deposit(30)
peopleAccount.deposit(40)
console.log(peopleAccount.getBonusAccount(60));
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
console.log(companyAccount.getLoan(60));
console.log(companyAccount.getBonusAccount(60));

console.log(companyAccount)