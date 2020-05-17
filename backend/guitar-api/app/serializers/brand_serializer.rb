class BrandSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :guitars
end
