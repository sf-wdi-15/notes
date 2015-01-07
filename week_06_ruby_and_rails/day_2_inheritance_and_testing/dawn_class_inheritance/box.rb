class Box
  attr_accessor :width, :height

  def initialize(w, h)
    @width = w 
    @height = h
  end

  def get_area
    @width * @height
  end

end

class BigBox < Box
  attr_accessor :area

  def initialize(w,h,c)
    super(w,h)
    @area = get_area
    @color = c
  end

  def print_area
    puts @area
  end

  def get_area
    super
    puts "I'm a big box"
  end
end

require 'pry'
binding.pry