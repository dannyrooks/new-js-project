class GuitarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :year, :brand_id, :brand_name
  belongs_to :brand
end
