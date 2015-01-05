class Person
  def initialize(name)
    puts "A new person named #{name} was created"
    @name = name
  end

  def name
    @name
  end

  def name=(other)
    @name = other
  end

  def greet
    puts "Hello! My name is #{@name}."
  end

end

mike = Person.new('Michael')
puts mike.name
mike.name = 'Mike'
puts mike.name
mike.greet

class BetterPerson
  attr_accessor :name

  @@population = 0

  def initialize(name)
    puts "A better person named #{name} was created"
    @name = name
    @@population += 1
  end

  def self.population
    @@population
  end

  def greet
    puts "Hello! My better name is #{@name}."
    make_call
  end

  private
    def make_call
      puts "Calling friends"
    end
end

betterMike = BetterPerson.new('Michael')
puts betterMike.name
betterMike.name = 'Mike'
puts betterMike.name
betterMike.greet
# betterMike.make_call

puts BetterPerson.population
BetterPerson.new('person1')
BetterPerson.new('person2')
puts BetterPerson.population



