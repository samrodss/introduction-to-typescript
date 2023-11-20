import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanAmount: number): void => {
    
    this.setLoan(loanAmount)
    console.log(`You took a loan of $${loanAmount} and now your balance is $${this.balance}`)
  }
  
  getBonusAccount = (depositAmount: number): void => {
    
    this.setBonusAccount(depositAmount)
    console.log(`Thank you for having a bonus account! Since you deposited $${depositAmount} we give you a bonus of $10 and your balance is now $${this.balance}`)
  }
}