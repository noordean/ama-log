class ProductCategoriesController < ApplicationController
  def products
    category_id = params[:id]
    products = ProductCategory.find(category_id).products.select(:id, :name)
    render json: { products: products }
  rescue ActiveRecord::RecordNotFound
    render json: { products: [] }
  end
end
