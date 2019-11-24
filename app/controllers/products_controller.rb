class ProductsController < ApplicationController
  def product_variants
    product_variants = Product.find(params[:id]).product_variants.map do |variant|
      {
        id: variant&.id,
        name: variant&.name,
        value: variant&.value,
        price: variant&.price,
        imageUrl: variant&.image&.service_url
      }
    end
    render json: { products: product_variants }
  end
end
