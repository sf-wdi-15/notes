require_relative "mammal"

class Dog < Mammal

	def initialize(breed,color,weight,length,place_of_origin)
		super(4,true,"k9",weight,length,place_of_origin)
		@breed = breed
		@color = color
	end

	def bark
		make_noise("Bark")
		self
	end

end