require("json")
require_relative("./colorizor.rb")

def build_dir(path=nil, parent={}) 
  parent[:path] = path || ""
  parent[:items] = []
  parent[:type] = File.ftype("./" + parent[:path])
  path = path ? path + "/*" : "*"
  Dir.glob(path) do |file|
    parent[:items] << build_dir(file)
  end
  parent
end


IO.write("resource.json", JSON.generate(build_dir()))


