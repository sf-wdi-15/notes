class Bank
attr_accessor :amount

  def initialize(amount)
    @amount = amount
    @password = 'Password'
  end

  def enterPass(pass)
    if pass == @password
      withdraw(10)
    else
      puts "Wrong pass"
    end
  end

  private
    def withdraw(w)
      @amount = @amount - w
    end
end


myBank = Bank.new(100)
p myBank

myBank.enterPass('pass')
myBank.enterPass('Password')
p myBank
myBank.withdraw(100)
p myBank
