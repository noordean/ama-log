class ProductCategory < ApplicationRecord
  has_many :products_sub_categories

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
