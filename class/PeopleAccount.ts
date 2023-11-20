import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }

  getBonusAccount = (depositAmount: number): void => {
    this.setBonusAccount(depositAmount);
    console.log(`Thank you for having a bonus account! Since you deposited $${depositAmount}, we give you a bonus of $10, and your balance is now $${this.balance}`);
  };
}