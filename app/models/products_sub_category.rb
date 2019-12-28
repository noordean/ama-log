class ProductsSubCategory < ApplicationRecord
  belongs_to :product_category
  has_many :products

  validates :name, presence: true, uniqueness: { scope: :product_category_id, case_sensitive: false }
end
