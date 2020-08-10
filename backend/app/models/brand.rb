class Brand < ApplicationRecord
    has_many :guitars
    validates :name, uniqueness: true

end
