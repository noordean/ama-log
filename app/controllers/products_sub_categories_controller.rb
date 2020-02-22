class ProductsSubCategoriesController < ApplicationController
  def products
    products = ProductsSubCategory.find(params[:id]).products.map do |product|
      {
        id: product&.id,
        name: product&.name,
        imageUrl: product&.image&.service_url
      }
    end

    render json: { products: products }
  end
end
