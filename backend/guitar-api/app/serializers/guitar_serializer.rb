class GuitarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :year
  belongs_to :brand
end
