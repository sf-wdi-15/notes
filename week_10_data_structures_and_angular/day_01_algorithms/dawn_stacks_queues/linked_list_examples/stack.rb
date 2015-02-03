require_relative 'linked_list'

class Stack

	def initialize(node)
		@store = DoublyLinkedList.new(node)
		@size = 1
	end

	def push(value)
		@store.push(Node.new(value))
		@size += 1
	end

	def pop
		@size -= 1
		@store.pop
	end

	def look
		@store.last.value
	end

	private
		def empty?
			if @size < 1
				true
			else
				false
			end
		end
end