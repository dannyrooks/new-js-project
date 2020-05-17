class GuitarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :year, :brand_id
end
