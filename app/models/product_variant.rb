class ProductVariant < ApplicationRecord
  belongs_to :product

  validates :name, :value, :price, presence: true
end
