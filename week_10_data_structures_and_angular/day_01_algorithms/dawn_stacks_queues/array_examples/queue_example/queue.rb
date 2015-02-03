class Queue

	def initialize
		@queue = Array.new
		@top = -1
	end

	def enqueue(value)
		@queue.unshift(value)
		@top += 1
	end

	def dequeue
		unless empty?
			@top -= 1
			@queue.pop
		end
	end

	def look
		unless empty?
			@queue[@top]
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