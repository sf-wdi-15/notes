class Node

	attr_accessor :value, :next, :prev

	def initialize(value)
		@value = value || nil
	end

end