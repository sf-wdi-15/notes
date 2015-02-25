class String

  def self.colors
    @@colors
  end

  @@colors = [
                :black,
                :red,
                :green,
                :brown,
                :blue,
                :magenta,
                :cyan,
                :gray
              ]

  @@color_and_codes = Hash.new

  @@colors.each_with_index  do |color, index|
     @@color_and_codes[color] = index + 30
  end
 
  class ColorString
 
    attr_reader :color

    def initialize(val, color_code, color)
      @color = color
      @color_code = color_code
      @val = val
    end
 
    def to_s
      colorize()
    end

    def +(other)
      if other.instance_of?(String)
        colorize + other
      elsif other.instance_of?(ColorString)
        colorize + other.to_s
      end
    end

    def method_missing(m, *args, &block)
      colors = String.colors
      is_col = colors.include?(m)
      is_bg_col = colors.include?(m.to_s.gsub(/^bg_/,"").to_sym)
      unless is_col || is_bg_col
        result = @val.send(m, *args, &block)
        if result == @val
          colorize()
        else
          result
        end
      else
        @val.send(m)
      end
    end

  private

    def colorize()
      "\e[#{@color_code}m#{@val}\e[0m"
    end

  end

  @@color_and_codes.each do |color, code|
    define_method(color) do
      ColorString.new(self, code, color)
    end
    define_method("bg_" + color.to_s) do 
      ColorString.new(self, code + 10, ("bg_" + color.to_s).to_sym)
    end
  end

end


