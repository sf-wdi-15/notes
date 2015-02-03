require 'pry'
require 'ffaker'
require_relative 'linked_list'

l = DoublyLinkedList.new

(100).times do |n|
	l.push Random.rand(-100000..100000)
end

print_even = Proc.new do |i, v|
	if v % 2 == 0
		print "Index: " + i.to_s + ", "
		puts "Even number: " + v.to_s
	end
end

print_odd = Proc.new do |i, v|
	unless v % 2 == 0
		print "Index: " + i.to_s + ", "
		puts "Odd number: " + v.to_s
	end
end

string_list = DoublyLinkedList.new

(100).times do |n|
	string_list.push Faker::HipsterIpsum.sentence
end



binding.pry