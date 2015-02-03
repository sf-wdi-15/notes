require_relative "node"

class LinkedList
	attr_reader :head, :size

	def initialize
		@head = nil
		@size = 0
	end

	def push(value)
		node = Node.new(value)

		if @size == 0
			@head = node
			@size = 1
			return self
		end

		# Now add the new node to the list
		# Set current to the head of the list
		current = @head

		# Find the last node
		while current.next
			current = current.next
		end

		# Increment the size of the list and add the node
		current.next = node
		@size += 1

		# Return list
		self
	end

	def pop
		if @size == 0
			raise "Cannot pop an empty list."
		end

		popped = @head
		while popped.next
			previous = popped
			popped = popped.next
		end

		# Do the work
		previous.next = nil
		@size -= 1

		# Return value of last node
		popped.value
	end

	def unshift(value)
		node = Node.new(value)

		if @size == 0
			@head = node
			@size = 1
			return self
		end

		# Now add the new node to front of list
		node.next = @head
		@head = node
		@size += 1

		# Return the list
		self
	end

	def shift
		if @size == 0
			raise "You cannot shift an empty list."
		end

		# Do the work
		shifted = @head
		@head = shifted.next
		@size -= 1

		# Return the value shifted off
		shifted.value
	end

	def get(index)
		find(index).value
	end

	def set(index, value)
		# Find the right node
		node = find(index)

		# Set the new value
		node.value = value

		# Return the node
		node
	end

	def each
		i = 0
		current = @head
		while i < @size
			yield(i, current.value)
			current = current.next
			i += 1
		end
	end

	def destroy!
		initialize
	end

	private

	def find(index)
		if index > @size - 1
			raise "Index out of bounds."
		end

		i = 0
		current = @head
		while i < index
			current = current.next
		end

		current		
	end
end

class DoublyLinkedList
	attr_reader :head, :last, :size

	def initialize(value=nil)
		# Conditionally initialize the list
		if value != nil
			@head = @last = Node.new(value)
			@size = 1
		else
			@head = @last = nil
			@size = 0
		end
	end

	def push(value)
		# Create a new node to insert
		node = Node.new(value)

		# Deal with special case where list is empty
		if @size == 0
			@head = @last = node
			@size = 1
			return self
		end

		# If list not empty, continue
		# Increment the size of the list
		@size += 1

		# Set next to the new node
		@last.next = node

		# Set new node's previous to what was @last
		node.prev = @last

		# Reset @last
		@last = node

		# Return the list
		self
	end

	def pop
		unless @size > 0
			raise "You can't pop a list without any nodes."
		end

		# Set the current @last to popped
		popped = @last

		# Destroy reference to popped node
		@last.prev.next = nil

		# Decrement the size of the list
		@size -= 1

		# Reset @last to be the 2nd to last item
		@last = @last.prev

		# Return the popped node's value
		popped.value
	end

	def unshift(value)
		# Create a new node to insert
		node = Node.new(value)

		# Deal with special case where list empty
		if @size == 0
			@head = @last = node
			@size = 1
			return self
		end

		# If list not empty, continue with normal processing
		# Set the current head's prev ref to point to our new node
		@head.prev = node

		# Set new node to point to what was the head
		node.next = @head

		# Reset head to point to our new ndoe
		@head = node

		# Incrememnt the size
		@size += 1

		# Return the list
		self
	end

	def shift
		unless @size > 0
			raise "You can't shift a list without any nodes."
		end

		# Now that we've checked for errors, process the shift

		# Set a local variable to hold the node we're shifting off the list
		shifted = @head

		# Reset head to the 2nd node in the list
		@head = @head.next

		# Decrement the size
		@size -= 1

		# Set the new head's "prev" to be nil to indicate it is at the front of the list
		@head.prev = nil

		# Return the value we just shifted off
		shifted.value
	end

	def get(index)
		# Return the value at the requested node
		find(index).value
	end

	def set(index, value)
		# Find the right node
		current = find(index)

		# Set the new value
		current.value = value
	end

	def each
		i = 0
		current = @head
		while i < @size
			yield(i, current.value)
			current = current.next
			i += 1
		end

		# Finally return the list
		self
	end

	def map
		new_list = DoublyLinkedList.new
		i = 0
		current = @head
		while i < @size
			new_list.push yield(i, current.value)
			current = current.next
			i += 1
		end

		# Finally return the (now modified) new_list
		new_list
	end

	def map!
		i = 0
		current = @head
		while i < @size
			current.value = yield(i, current.value)
			current = current.next
			i += 1
		end

		self
	end

	def destroy!
		initialize
	end

	private
		# I've created this special traversal method that cuts retrieval time in half by searhing
		# from the front, or back, as necessary.
		def find(index)
			# First check to make sure the index is valid
			if index > @size - 1
				raise "Index out of bounds."
			end

			# We want to check and see whether the index is in the front half, or back half of the list to improve lookup times
			if index >= @size/2
				# If index is in back half of the list, start at the back and move towards the front
				current = @last
				i = @size - 1
				while i > index
					i -= 1
					current = current.prev
				end
			else
				# If index is in the front half of the list, find normally
				current = @head
				i = 0
				while i < index
					i += 1
					current = current.next
				end
			end

			# Return the requested node
			current
		end
end