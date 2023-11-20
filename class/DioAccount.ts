export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true
  
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
    }
  
    setName = (name: string): void => {
      this.name = name
      console.log('Nome alterado com sucesso!')
    }
  
    getName = (): string => {
      return this.name
    }
  
    deposit = (depositAmount: number): void | boolean => {
        if(this.validateStatus()){
            this.balance += depositAmount
        console.log(`Deposit Sucessful! You have deposited $${depositAmount}$ and now your balance is ${this.balance}$`)
      }
    }

    public setBonusAccount(depositAmount: number){
        if(this.deposit(depositAmount)){
           this.balance += depositAmount + 10
        }
    }
  
    withdraw = (withdrawAmount: number): void => {
        if(this.validateStatus() && this.balance > 0){
            this.balance -= withdrawAmount
            console.log(`You have withdrawn $${withdrawAmount} and now your balance is ${this.balance}$`)
        }
    }
  
    getBalance = (): void => {
      console.log(this.balance)
    }

    public setLoan(loanAmount: number): void{ 
        if(this.validateStatus()){
            this.balance += loanAmount
        }
    }
  
    private validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }
  }