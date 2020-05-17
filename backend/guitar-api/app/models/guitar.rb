class Guitar < ApplicationRecord
    belongs_to :brand, optional: true
end
