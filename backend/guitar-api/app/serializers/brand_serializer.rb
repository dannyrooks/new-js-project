class BrandSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
  has_many :guitars
end
