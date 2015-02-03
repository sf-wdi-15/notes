class Stack

	def initialize
		@stack = Array.new
		@top = -1
	end

	def push(value)
		@top = @top + 1
		@stack.push(value)

		# @stack[@top] = value

	end

	def pop
		unless empty?
			@top = @top - 1
			@stack.pop
		else
			"The stack is empty. Cannot pop."
		end
	end

	def look
		unless empty?
			@stack[@top]
		else
			"The stack is empty. Cannot look."
		end
	end

	private
		def empty?
			if @top > -1
				false
			else
				true
			end
		end
end