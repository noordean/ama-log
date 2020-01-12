class Product < ApplicationRecord
  has_one_attached :image

  belongs_to :products_sub_category
  has_many :product_variants, dependent: :destroy

  validates :name, presence: true, uniqueness: { scope: :products_sub_category_id, case_sensitive: false }

  attr_writer :uploaded_image

  after_create :attach_image!

  private

  def attach_image!
    image.attach(@uploaded_image)
  end
end
