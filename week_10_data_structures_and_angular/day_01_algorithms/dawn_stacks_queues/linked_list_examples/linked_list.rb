require_relative "node"

class DoublyLinkedList
	attr_reader :head, :last, :size

	def initialize(node)
		@head = node
		@last = node
		@size = 1
	end

	def push(node)
		# Increment the size of the list
		@size += 1

		# Set next to the new node
		@last.next = node

		# Set new node's previous to what was @last
		node.prev = @last

		# Reset @last and return the node we just added
		@last = node
	end

	def pop
		unless @size > 1
			raise "You can't pop a list with only 1 node. Use destroy! instead."
		end

		# Set the current @last to popped
		popped = @last

		# Destroy reference to popped node
		@last.prev.next = nil

		# Decrement the size of the list
		@size -= 1

		# Reset @last to be the 2nd to last item
		@last = @last.prev

		# Return the popped node
		popped.value
	end

	def unshift(node)
		# Set the current head's prev ref to point to our new node
		@head.prev = node

		# Set new node to point to what was the head
		node.next = @head

		# Reset head to point to our new ndoe
		@head = node

		# Incrememnt the size
		@size += 1

		"Node added"
	end

	def shift
		if @head.next
			shifted = @head
			@head = @head.next
			@size -= 1

			@head.prev = nil
		else
			raise "You can't shift a list with only 1 node. Use destroy! instead."
		end

		shifted.value
	end

	def get(index)
		current = traverse(index)

		# Return the value at the correct node
		current.value
	end

	def set(index, value)
		# Find the right node
		current = traverse(index)

		# Set the new value
		current.value = value
	end

	# def destroy!
	# 	self = nil
	# end

	private
		def traverse(index)
			# Get the right node
			if index > @size - 1
				raise "Index out of bounds."
			end

			current = @head
			i = 0
			while i < index
				current = current.next
				i += 1
			end

			current
		end



end