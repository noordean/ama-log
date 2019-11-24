class ProductVariant < ApplicationRecord
  has_one_attached :image

  attr_writer :uploaded_image

  belongs_to :product

  after_create :attach_image!

  private

  def attach_image!
    image.attach(@uploaded_image)
  end
end
