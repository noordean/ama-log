class ProductVariant < ApplicationRecord
  has_one_attached :image

  belongs_to :product
end
