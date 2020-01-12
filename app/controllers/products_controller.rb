class ProductsController < ApplicationController
  before_action :load_product, only: %i[ update add_variant destroy ]

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

  def update
    if @product.update(name: params[:name])
      head :ok
    else
      head :unprocessable_entity
    end
  end

  def add_variant
    variant = @product.product_variants.create(name: params[:name], value: params[:value], price: params[:price])
    if variant.persisted?
      head :ok
    else
      head :unprocessable_entity
    end
  end

  def destroy
    product = @product.destroy
    if product.destroyed?
      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  def load_product
    @product = Product.find(params[:id])
  end
end
